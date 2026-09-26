#!/usr/bin/env node
/**
 * Worldloop structured verification harness.
 *
 * Runs the REAL src systems in Node against the real `three` package —
 * instantiates every system, calls their update() loops, asserts API behavior,
 * and emits machine-readable JSON so the agent loop can discover the surface,
 * plan, and consume results without guessing.
 *
 * Usage:  node check_world.mjs
 * Exit:   0 if all checks pass, 1 otherwise.
 */
import * as THREE from 'three';
import { runHeadlessSmoke } from './tools/ci/headless_cdp.mjs';
import { createWorld, createCityChunk, createWastelandChunk } from './src/world.js';
import { TrafficSystem } from './src/traffic.js';
import { WeatherSystem } from './src/weather.js';
import { PedestrianSystem } from './src/pedestrians.js';
import { ParkingSystem } from './src/parking.js';
import { AirplaneSystem } from './src/airplanes.js';
import { EffectSystem } from './src/effects.js';
import { TrafficLightSystem } from './src/traffic_lights.js';
import { ChunkManager } from './src/chunk_manager.js';
import { Player } from './src/player.js';
import { deformMesh } from './src/deformation.js';
import { SimplexNoise } from './src/noise.js';
import { FrameBudgetTelemetry } from './src/telemetry.js';
import { RoadGraph } from './src/road_graph.js'; // [NEW] road-network graph
import { EmergencySystem } from './src/emergency.js';
import { ConstructionSystem } from './src/construction.js';
import { PostProcessingPipeline } from './src/effects.js'; // [NEW] post-processing pipeline // [NEW] Gap D — emergency response
import { Minimap, DISTRICT_PALETTE, BIOMES } from './src/minimap.js'; // [NEW] Round 9 — minimap / district-label HUD
import fs from 'node:fs';

const VERSION = '6.4.2';

// --- Machine-readable output guard ---
// The systems under test log to console.log during the checks; that would
// pollute the JSON report on stdout. Redirect module debug output to stderr
// so stdout carries ONLY the report + summary.
const origConsoleLog = console.log;
console.log = (...a) => process.stderr.write(a.map((x) => String(x)).join(' ') + '\n');

const checks = [];
let failed = 0;

function check(name, pass, detail) {
  checks.push({ name, pass: !!pass, detail: detail || '' });
  if (!pass) failed++;
  return pass;
}

// --- Node DOM stub (Player / PointerLockControls need browser DOM) ---
function makeEl() {
  return {
    style: {}, appendChild() {}, textContent: '',
    addEventListener() {}, removeEventListener() {}, setAttribute() {}, className: ''
  };
}
globalThis.document = {
  createElement() { return makeEl(); },
  body: { appendChild() {} },
  addEventListener() {}, removeEventListener() {},
  pointerLockElement: null
};
function makeDomElement() {
  const doc = {
    addEventListener() {}, removeEventListener() {},
    createElement() { return { style: {}, appendChild() {}, textContent: '' }; },
    body: { appendChild() {} },
    pointerLockElement: null,
    addEventListener: () => {}
  };
  const el = {
    ownerDocument: doc,
    requestPointerLock() {}, exitPointerLock() {},
    addEventListener() {}, removeEventListener() {}
  };
  return el;
}

// --- Shared scene + systems ---
const scene = new THREE.Scene();
const world = await createWorld(scene);
const cam = new THREE.PerspectiveCamera();
const dom = makeDomElement();

const traffic = new TrafficSystem(scene, world.citySize, world.blockSize, world.roadWidth);
const parking = new ParkingSystem(scene, world.citySize, world.blockSize, world.roadWidth);
const pedestrians = new PedestrianSystem(scene, world.citySize, world.blockSize, world.roadWidth);
const weather = new WeatherSystem(scene, world.directionalLight, world.ambientLight, world.materials);
const airplanes = new AirplaneSystem(scene, world.citySize);
const effects = new EffectSystem(scene);
const trafficLights = new TrafficLightSystem(scene, world.roadWidth, world.blockSize);
    const emergency = new EmergencySystem(scene, world.roadWidth, world.blockSize); // Gap D
    emergency.setEffects(effects);
const construction = new ConstructionSystem(scene);
const chunkManager = new ChunkManager(scene, null, world, traffic, parking, pedestrians, trafficLights, construction);

// ---- 1. World surface -----------------------------------------------------
const worldKeys = ['roadWidth', 'blockSize', 'citySize', 'directionalLight', 'ambientLight', 'materials'];
check('world.createWorld returns full surface', worldKeys.every(k => k in world),
  'keys=' + Object.keys(world).join(','));
check('world.materials cache (road/sidewalk/building)',
  ['road', 'sidewalk', 'building'].every(k => k in world.materials),
  'materials=' + Object.keys(world.materials).join(','));
check('world.materials.window present (night-time window illumination)',
  'window' in world.materials && world.materials.window.transparent === true,
  'materials=' + Object.keys(world.materials).join(','));
const cityChunk = createCityChunk(0, 0, world.blockSize);
const wasteChunk = createWastelandChunk(0, 0, world.blockSize);
  const instMeshes = cityChunk.mesh.children.filter(c => c.isInstancedMesh);
  check('world.createCityChunk -> buildings use InstancedMesh', instMeshes.length > 0, instMeshes.length + ' instanced meshes');
  check('instanced building meshes share the 1x1x1 unit-box geometry', instMeshes.every(m => m.geometry.type === 'BoxGeometry' && m.geometry.parameters.width === 1 && m.geometry.parameters.height === 1 && m.geometry.parameters.depth === 1), 'shared unit-box');

  // ---- Render-distance LOD (Gap B) — far chunks swap to low-poly silhouettes ----
  const lodChunk = createCityChunk(0, 0, world.blockSize, world.roadWidth, 1);
  const fullDetail = createCityChunk(0, 0, world.blockSize, world.roadWidth, 0);
  check('world.createCityChunk -> LOD chunk exposes lodLevel', lodChunk.lodLevel === 1, 'lodLevel=' + lodChunk.lodLevel);
  check('world.createCityChunk -> LOD is lighter than full detail (fewer meshes)', lodChunk.mesh.children.length < fullDetail.mesh.children.length,
    'full=' + fullDetail.mesh.children.length + ' lod=' + lodChunk.mesh.children.length);
  check('world.createCityChunk -> LOD omits streetlight bulbs', ![...lodChunk.mesh.children].some(c => c.isMesh && c.material && c.material.color && c.material.color.getHex && c.material.color.getHex() === 0xffffaa), 'no bulb meshes');

  // ---- Construction sites: origin chunk always carries a tower crane ----
  check('world.createCityChunk -> origin chunk carries construction sites',
    fullDetail.construction && fullDetail.construction.length > 0,
    'construction=' + (fullDetail.construction ? fullDetail.construction.length : 0));
  const constructionSys = new ConstructionSystem(scene);
  constructionSys.loadChunk(0, 0, fullDetail);
  check('construction.craneCount -> origin chunk loads a crane',
    constructionSys.craneCount() === fullDetail.construction.length,
    'cranes=' + constructionSys.craneCount());
  if (constructionSys.craneCount() > 0) {
    const c = constructionSys.cranes[0];
    const r0 = c.pivot.rotation.y;
    const p0 = c.phase;
    constructionSys.update(0.5);
    const r1 = c.pivot.rotation.y;
    const p1 = c.phase;
    check('construction.update -> jib rotation advances by delta*SPEED',
      Math.abs((r1 - r0) - 0.5 * constructionSys.SPEED) < 1e-6 &&
      Math.abs((p1 - p0) - 0.5 * constructionSys.SPEED) < 1e-6,
      'dRot=' + (r1 - r0).toFixed(4));
  }
  check('ChunkManager -> lodDistance detail radius', chunkManager.lodDistance >= 1, 'lodDistance=' + chunkManager.lodDistance);
check('world.createCityChunk -> {mesh,colliders}', cityChunk.mesh instanceof THREE.Group && Array.isArray(cityChunk.colliders));
check('window-illumination panels merged into an InstancedMesh (matWindow)',
  (() => {
    let found = 0;
    cityChunk.mesh.traverse(c => { if (c.isInstancedMesh && c.material === world.materials.window) found++; });
    return found > 0;
  })(),
  'windowMeshCount=' + (() => {
    let n = 0; cityChunk.mesh.traverse(c => { if (c.isInstancedMesh && c.material === world.materials.window) n++; });
    return n;
  })());
check('world.createWastelandChunk -> {mesh,colliders}', wasteChunk.mesh instanceof THREE.Group && Array.isArray(wasteChunk.colliders));

// ---- 2. Traffic -----------------------------------------------------------
const speedMap = { sport: 16, taxi: 13, sedan: 11, suv: 9, truck: 6, bus: 5 };
check('traffic.getSpeedForType deterministic',
  Object.entries(speedMap).every(([t, v]) => traffic.getSpeedForType(t) === v),
  JSON.stringify(speedMap));
traffic.update(0.1);
check('traffic.update(0.1) runs', true, 'ok');
check('traffic exposes pooled car map + flat list', traffic.chunkCars instanceof Map && Array.isArray(traffic.cars));

// ---- 2b. Crosswalk timing (Gap C) — cars yield to a pedestrian in lane path ----
const yieldCar = {
  mesh: { position: new THREE.Vector3(0, 0, 0) },
  axis: 'x', direction: 1
};
const pedAhead = { mesh: { position: new THREE.Vector3(6, 0, 0) } };   // 6m ahead, lateral 0
const pedBehind = { mesh: { position: new THREE.Vector3(-6, 0, 0) } }; // behind car
const pedSide = { mesh: { position: new THREE.Vector3(0, 0, 9) } };    // lateral 9 > laneWidth

traffic.pedestrianSystem = { peds: [pedAhead] };
check('traffic.pedestrianNearCrosswalk true when ped ahead in lane', traffic.pedestrianNearCrosswalk(yieldCar) === true, 'forward=6 lateral=0');
traffic.pedestrianSystem = { peds: [pedBehind] };
check('traffic.pedestrianNearCrosswalk false when ped behind', traffic.pedestrianNearCrosswalk(yieldCar) === false, 'forward=-6');
traffic.pedestrianSystem = { peds: [pedSide] };
check('traffic.pedestrianNearCrosswalk false when ped off-lane', traffic.pedestrianNearCrosswalk(yieldCar) === false, 'lateral=9');
traffic.pedestrianSystem = null;
check('traffic.pedestrianNearCrosswalk false when no ped system', traffic.pedestrianNearCrosswalk(yieldCar) === false, 'no peds');

traffic.pedestrianSystem = { peds: [pedAhead] };
check('traffic.checkBlocked yields for crossing pedestrian', traffic.checkBlocked(yieldCar, []) === true, 'yield on crosswalk');
traffic.pedestrianSystem = null;

    // ---- 2b. Gap D — dynamic city events (emergency response & sirens) --------
    // Incident -> response coverage: respond() increments the machine-readable
    // events counter and dispatches a priority EMS vehicle with lights.
    const eventsBefore = emergency.events;
    const emsVehicle = emergency.respond(50, 50);
    check('emergency.respond() dispatches an EMS vehicle', emsVehicle && emsVehicle.type);
    check('emergency.events counter increments on response', emergency.events === eventsBefore + 1);
    check('emergency has an active responding fleet', emergency.active.length === 1);
    check('EMS fleet uses emergency vehicle model', ['ambulance', 'fire', 'police'].includes(emsVehicle.type));
    // Lane-clearing priority: ordinary traffic must yield to an EMS vehicle ahead.
    traffic.emergencySystem = emergency;
    const laneCar = { axis: 'x', direction: 1, mesh: { position: new THREE.Vector3(0, 0, 0) } };
    const emsWrapper = { mesh: { position: new THREE.Vector3(10, 0, 0) } }; // 10m ahead in lane
    emergency.active = [ { mesh: new THREE.Object3D(), target: new THREE.Vector3(50, 0, 50), speed: 20, life: 20, type: emsVehicle.type } ];
    emergency.active[0].mesh.position.set(10, 0, 0);
    const yielded = traffic.checkBlocked(laneCar, [], [emsWrapper]);
    check('traffic yields (lane-clearing) for EMS vehicle ahead', yielded === true);
    // Siren + rotating-light effect attached to dispatched EMS vehicle.
    check('EMS vehicle gets siren/light effect', effects.sirens.length >= 1);
    emergency.active = [];
    traffic.emergencySystem = null;


// ---- 3. Weather / seasons --------------------------------------------------
check('weather.currentWeather in allowed set', ['sunny', 'rain', 'snow'].includes(weather.currentWeather),
  'current=' + weather.currentWeather);
const today = new Date();
const start = new Date(today.getFullYear(), 0, 0);
const expectedDay = Math.floor((today - start) / (1000 * 60 * 60 * 24));
check('weather.day derived from real-world date', weather.day === expectedDay,
  'day=' + weather.day + ' expected=' + expectedDay);
weather.update(0.1);
check('weather.update(0.1) runs', true, 'ok');
check('window material lights at night, dims by day (updateTimeCycle)',
  (() => {
    const pos = { x: 0, z: 0 };
    weather.gameTime = 22; weather.updateTimeCycle(pos);   // night
    const nightOn = world.materials.window.opacity > 0.9
      && world.materials.window.color.g > 0.3 && world.materials.window.color.b > 0.3;
    weather.gameTime = 12; weather.updateTimeCycle(pos);   // noon
    const dayDim = world.materials.window.opacity < 0.5
      && world.materials.window.color.g < 0.3 && world.materials.window.color.b < 0.3;
    return nightOn && dayDim;
  })(),
  'nightOpacity=' + (weather.gameTime = 22, weather.updateTimeCycle({ x: 0, z: 0 }), world.materials.window.opacity.toFixed(2)));

// ---- 4. Pedestrians ---------------------------------------------------------
pedestrians.update(0.1);
check('pedestrians.update(0.1) runs', true, 'ok');

// ---- 5. Parking ------------------------------------------------------------
parking.update(0.1);
check('parking.update(0.1) runs', true, 'ok');
check('parking.getColliders() is array', Array.isArray(parking.getColliders()));

// ---- 6. Traffic lights ------------------------------------------------------
trafficLights.update(0.1);
check('trafficLights.update(0.1) runs', true, 'ok');

// ---- 7. Airplanes ------------------------------------------------------------
airplanes.update(0.1);
check('airplanes.update(0.1) runs', true, 'ok');

// ---- 8. Effects ---------------------------------------------------------------
effects.update(0.1);
check('effects.update(0.1) runs', true, 'ok');

// ---- 9. Chunk manager (streaming) ---------------------------------------------
chunkManager.update();
const colliders = chunkManager.getColliders();
check('chunkManager.getColliders() is array', Array.isArray(colliders), 'count=' + colliders.length);

// ---- 10. Player ----------------------------------------------------------------
const player = new Player(cam, dom, colliders, traffic, parking, effects);
check('player wired with colliders/traffic/parking', player.colliders instanceof Array);

// ---- Weather-reactive driving (snow/rain reduce tire grip) --------------------
// Deterministic grip model: dry = full grip, rain softens, snow softens most.
player.weatherSystem = weather;
weather.currentWeather = 'sunny';
const dryMods = player.getDrivingModifiers();
weather.currentWeather = 'rain';
const rainMods = player.getDrivingModifiers();
weather.currentWeather = 'snow';
const snowMods = player.getDrivingModifiers();
check('dry roads give full grip + dry friction',
  dryMods.grip === 1.0 && dryMods.friction === 10, 'grip=' + dryMods.grip + ' friction=' + dryMods.friction);
check('rain reduces grip -> lower friction + lower top speed',
  rainMods.grip < dryMods.grip && rainMods.friction < dryMods.friction && rainMods.maxSpeedScale < 1,
  'grip=' + rainMods.grip + ' friction=' + rainMods.friction + ' speed=' + rainMods.maxSpeedScale);
check('snow reduces grip more than rain (harder to stop)',
  snowMods.grip < rainMods.grip && snowMods.friction < rainMods.friction && snowMods.maxSpeedScale < rainMods.maxSpeedScale,
  'grip=' + snowMods.grip + ' friction=' + snowMods.friction);
check('driving modifiers deterministic for a given weather',
  player.getDrivingModifiers().grip === player.getDrivingModifiers().grip, 'grip=' + player.getDrivingModifiers().grip);
weather.currentWeather = 'sunny'; // reset for a clean deterministic report
player.weatherSystem = weather;
player.update(0.1);
check('player.update(0.1) runs', true, 'ok');

// ---- 11. Deformation physics ----------------------------------------------------
check('deformation.deformMesh is function', typeof deformMesh === 'function');

// ---- 12. Noise ------------------------------------------------------------------
const n1 = SimplexNoise.noise2D(0.5, 0.5);
const n2 = SimplexNoise.noise2D(0.5, 0.5);
check('SimplexNoise.noise2D deterministic in-session', n1 === n2, 'n=' + n1);
check('SimplexNoise.noise2D returns finite number', Number.isFinite(n1));

// ---- 13. Wiring (main.js instantiates every system) --------------------------------
const mainSrc = fs.readFileSync('src/main.js', 'utf8');
const wired = ['createWorld', 'TrafficSystem', 'PedestrianSystem', 'ParkingSystem',
  'WeatherSystem', 'AirplaneSystem', 'EffectSystem', 'TrafficLightSystem',
  'ChunkManager', 'Player'].every(sym => mainSrc.includes(sym));
check('main.js wires all systems', wired, 'symbols checked');
check('main.js passes pedestrianSystem to traffic.setDependencies', mainSrc.includes('pedestrianSystem)'), '5th dep wired');
        check('main.js wires EmergencySystem -> emergency response', mainSrc.includes('EmergencySystem') && mainSrc.includes('emergencySystem.update(delta)'));
  check('main.js wires ConstructionSystem -> animated cranes', mainSrc.includes('ConstructionSystem') && mainSrc.includes('constructionSystem.update(delta)'));

        check('main.js hooks player crashes -> emergency.respond', mainSrc.includes('player.emergencySystem'));
        check('main.js passes emergencySystem to traffic.setDependencies', mainSrc.includes('roadGraph, emergencySystem'));
check('main.js wires FrameBudgetTelemetry', mainSrc.includes('FrameBudgetTelemetry') && mainSrc.includes('recordFrame'), 'telemetry wired');

// ---- 14. Frame-budget telemetry (Phase 1 / Gap B next) ------------------------
const telemetry = new FrameBudgetTelemetry();
const { drawCalls, instances } = telemetry.countDrawCalls(scene);
check('telemetry.countDrawCalls -> at least one renderable mesh', drawCalls >= 1, 'drawCalls=' + drawCalls + ' instances=' + instances);
const teleStep = (dt) => {
  traffic.update(dt);
  trafficLights.update(dt);
  weather.update(dt);
  pedestrians.update(dt);
  airplanes.update(dt);
  effects.update(dt);
};
const frameBudget = telemetry.measureFrameBudget(teleStep, 1 / 60, 120);
check('telemetry.measureFrameBudget -> achievable FPS > 0', frameBudget.fps > 0, 'fps=' + frameBudget.fps.toFixed(2) + ' frameMs=' + frameBudget.avgFrameMs.toFixed(3));
check('telemetry.measureFrameBudget -> 120-frame loop completes', frameBudget.frames === 120, 'frames=' + frameBudget.frames);

// ---- Road-network graph (deterministic implicit grid graph) --------------------
const roadGraph = new RoadGraph(34, 16);
const roadGraph2 = new RoadGraph(34, 16);
check('roadGraph builds nodes for road cells', roadGraph.nodeCount() > 0, roadGraph.nodeCount() + ' nodes');
check('roadGraph is deterministic (same radius -> identical graph)',
  roadGraph.nodeCount() === roadGraph2.nodeCount(), 'nodes=' + roadGraph.nodeCount());
const conn = roadGraph.connected();
check('roadGraph whole network is one connected component from origin',
  conn.connected, `reached ${conn.reached}/${conn.total}`);
const path = roadGraph.shortestPath(roadGraph.centerKey, roadGraph.key(10, 0));
check('roadGraph routes origin -> highway via shortest path',
  Array.isArray(path) && path.length > 1, (path && path.length) + ' hops');
const turns = roadGraph.turnsAt(roadGraph.key(3, 0), 'x');
check('roadGraph offers perpendicular turns at city intersections',
  turns.length > 0, turns.length + ' turn targets');

// ---- Post-processing pipeline (bloom for neon districts + rain droplets) -------
// Node path: no WebGL renderer -> pipeline disabled, but update() must be
// deterministic so an agent can assert targets without a GL context.
const postFx = new PostProcessingPipeline({});
const dryEst = postFx.update({ precipAlpha: 0 }, 0);
const rainEst = postFx.update({ precipAlpha: 0.9 }, 1);
const neonEst = postFx.update({ precipAlpha: 0.2 }, 1);
check('postFx pipeline exists and exposes passes', !!postFx && Array.isArray(postFx.passes) && postFx.passes.length >= 4, 'passes=' + postFx.passes.join(','));
check('postFx disabled on Node (no renderer) but deterministic', postFx.enabled === false, 'enabled=' + postFx.enabled);
check('postFx bloom strength scales with neon district density', dryEst.bloom.strength === 0 && neonEst.bloom.strength > 0 && rainEst.bloom.strength >= neonEst.bloom.strength, 'dry=' + dryEst.bloom.strength + ' neon=' + neonEst.bloom.strength.toFixed(2));
check('postFx bloom threshold lowers when neon is present', neonEst.bloom.threshold < dryEst.bloom.threshold, 'dryT=' + dryEst.bloom.threshold.toFixed(2) + ' neonT=' + neonEst.bloom.threshold.toFixed(2));
check('postFx droplet overlay scales with precipitation', rainEst.droplets.intensity > 0 && rainEst.droplets.intensity <= 1, 'rain=' + rainEst.droplets.intensity.toFixed(2));
check('postFx targets are finite (safe for GL passes)', ['strength', 'threshold', 'radius'].every(k => Number.isFinite(rainEst.bloom[k])) && Number.isFinite(rainEst.droplets.intensity), 'finite');

// ---- 15. Minimap / district-label HUD (Round 9) --------------------------------
// Browser draws a real canvas; the Node path must stay deterministic without a
// canvas 2d context: district names derive from SimplexNoise over chunk coords,
// so the same world position always maps to the same district.
const minimap = new Minimap(chunkManager);
const mp = { x: 34 * 2 + 17, z: 34 * -1 + 17 }; // somewhere in the city grid
const mmState = minimap.update(mp);
check('minimap exposes playerChunk/district/activeChunks',
  Array.isArray(mmState.activeChunks) && Array.isArray(mmState.playerChunk) && typeof mmState.district === 'string',
  'district=' + mmState.district + ' playerChunk=' + JSON.stringify(mmState.playerChunk) + ' active=' + mmState.activeChunks.length);
const dA = minimap.districtAt(2, 2);
const dB = minimap.districtAt(2, 2);
const dC = minimap.districtAt(3, -4);
check('minimap district labels deterministic (same coords -> same name)',
  dA === dB && ['Wasteland', 'Highway Corridor', ...DISTRICT_PALETTE.map(d => d.name)].includes(dA),
  'd(' + dA + ') == d(' + dB + ') other=' + dC);
check('minimap district palette is a valid district set',
  DISTRICT_PALETTE.length >= 4 && DISTRICT_PALETTE.every(d => typeof d.name === 'string' && typeof d.color === 'string'),
  DISTRICT_PALETTE.map(d => d.name).join(','));
check('minimap biomeAt maps city/highway/wasteland',
  minimap.biomeAt(0, 0) === BIOMES.city && minimap.biomeAt(10, 0) === BIOMES.highway && minimap.biomeAt(20, 20) === BIOMES.wasteland,
  'city(0,0) highway(10,0) wasteland(20,20)');
check('minimap 2d-draw disabled on Node but logic deterministic',
  !minimap.ctx && typeof mmState.district === 'string',
  'ctx=' + minimap.ctx + ' district=' + mmState.district);


// ---- ADR 0021 — bundled local build (AAA-01) --------------------------------------
// three is pinned as a devDependency and bundled into dist/worldloop.js by esbuild,
// so index.html no longer needs a CDN importmap. The harness verifies the build
// contract so a broken bundle or a resurrected CDN dependency fails the gate.
import { readFileSync, existsSync } from 'node:fs';
import { execSync } from 'node:child_process';
const pkg = JSON.parse(readFileSync('package.json', 'utf8'));
check('ADR 0021: three is a pinned (exact) devDependency',
  pkg.devDependencies && pkg.devDependencies.three === '0.160.0',
  'devDependencies.three=' + (pkg.devDependencies && pkg.devDependencies.three));
check('ADR 0021: build/dev/preview/test/typecheck scripts present',
  ['build', 'dev', 'preview', 'test', 'typecheck'].every(s => s in pkg.scripts),
  'scripts=' + Object.keys(pkg.scripts || {}).join(','));
const html = readFileSync('index.html', 'utf8');
check('ADR 0021: index.html loads the bundled entry (dist/worldloop.js)',
  html.includes('./dist/worldloop.js'),
  'entry=' + (html.includes('./dist/worldloop.js') ? 'dist/worldloop.js' : 'src/main.js'));
check('ADR 0021: index.html has NO CDN importmap script for three',
  !html.includes('type="importmap"') && !html.includes('unpkg') && !html.includes('https://unpkg.com/three'),
  'no-importmap=' + (!html.includes('type="importmap"') && !html.includes('unpkg')));
// The CI smoke below needs a real bundle; build it so index.html resolves.
if (process.argv.includes('--ci')) {
  execSync('node build/build.mjs', { stdio: 'inherit' });
}

// ---- CI smoke: headless browser render assertion (--ci) -------------------------
// Runs the structured checks above, then launches headless Chromium, loads
// index.html, and asserts the browser path actually renders a frame with no
// console errors. Gated on --ci so the fast path stays dependency-light.
let ci = null;
if (process.argv.includes('--ci')) {
  let smoke;
  try {
    smoke = await runHeadlessSmoke({ timeoutMs: 40000 });
    const errs = smoke.errors || [];
    check('ci: browser page rendered a frame (drawCalls > 0)', smoke.ready && smoke.drawCalls > 0);
    check('ci: WebGL canvas present', smoke.canvas);
    check('ci: no console errors', errs.length === 0, JSON.stringify(errs.slice(0, 3)));
    check('ci: no uncaught exceptions', (smoke.exceptions || []).length === 0, JSON.stringify(smoke.exceptions.slice(0, 3)));
    ci = {
      ready: smoke.ready, drawCalls: smoke.drawCalls, fps: smoke.fps,
      triangles: smoke.triangles, canvas: smoke.canvas,
      consoleErrors: errs, exceptions: smoke.exceptions || []
    };
  } catch (e) {
    check('ci: headless smoke completed without driver error', false, 'driver error: ' + e.message);
    ci = { driverError: String(e.message) };
  }
}

// ---- Emit machine-readable JSON ------------------------------------------------
const report = {
  tool: 'check_world',
  version: VERSION,
  systems: {
    world: { exports: ['createWorld', 'createCityChunk', 'createWastelandChunk'] },
    traffic: { exports: ['TrafficSystem'], speeds: speedMap },
    weather: {
      exports: ['WeatherSystem'],
      day: weather.day,
      current: weather.currentWeather,
      driving: player.getDrivingModifiers()
    },
    pedestrians: { exports: ['PedestrianSystem'] },
    parking: { exports: ['ParkingSystem'] },
    traffic_lights: { exports: ['TrafficLightSystem'] },
    airplanes: { exports: ['AirplaneSystem'] },
    effects: { exports: ['EffectSystem', 'PostProcessingPipeline'] },
    postFx: {
      enabled: postFx.enabled,
      passes: postFx.passes,
      bloom: rainEst.bloom,
      droplets: rainEst.droplets
    },
    chunk_manager: { exports: ['ChunkManager'] },
    player: { exports: ['Player'] },
    deformation: { exports: ['deformMesh'] },
    noise: { exports: ['SimplexNoise'] },
    telemetry: { exports: ['FrameBudgetTelemetry'] },
    road_graph: { exports: ['RoadGraph'] },
    emergency: { exports: ['EmergencySystem'], events: emergency.events }
  },
  telemetry: {
    fps: +frameBudget.fps.toFixed(2),
    frameMs: +frameBudget.avgFrameMs.toFixed(3),
    drawCalls,
    instances
  },
  checks,
  ci,
  summary: { passed: checks.length - failed, failed, total: checks.length },
  passed: failed === 0
};

origConsoleLog(JSON.stringify(report, null, 2));
if (failed > 0) {
  console.error(`\ncheck_world: ${failed} check(s) FAILED`);
  process.exit(1);
}
process.stderr.write(`check_world: ${checks.length - failed}/${checks.length} checks passed ✅\n`);
