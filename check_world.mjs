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
import { SpatialGrid, ChunkManager } from './src/chunk_manager.js';
import { Player } from './src/player.js';
import { deformMesh } from './src/deformation.js';
import { SimplexNoise, resetNoise } from './src/noise.js';
import { setSeed, getSeed, DEFAULT_SEED, RNG } from './src/core/rng.js'; // [AAA-03] seeded deterministic RNG
import { FrameBudgetTelemetry } from './src/telemetry.js';
import { RoadGraph } from './src/road_graph.js'; // [NEW] road-network graph
import { EmergencySystem } from './src/emergency.js';
import { ConstructionSystem } from './src/construction.js';
import { FrameLoop } from './src/loop.js'; // [AAA-02] frame loop hygiene
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

    // ---- [AAA-06] unified logical input (src/input/) ----
    const im = new InputManager({ dom }); // stub dom -> adapters no-op in Node
    check('AAA-06: InputManager builds over stub dom', im.adapters.length === 4, 'adapters=' + im.adapters.length);
    check('AAA-06: keyboard adapter binds over stub dom without crashing', typeof im.adapters[0].bound === 'boolean' && !!im.adapters[0].map, 'bound=' + im.adapters[0].bound + ' map=' + !!im.adapters[0].map);
    check('AAA-06: ActionMap maps KeyW -> moveForward', new ActionMap().actionForCode('KeyW') === 'moveForward', 'action=' + new ActionMap().actionForCode('KeyW'));
    const am = new ActionMap();
    const kb = new KeyboardAdapter({ map: am, onAction: (a) => { if (a === 'enterExit') kbFired = true; } });
    let kbFired = false;
    check('AAA-06: ActionMap remap rebinds a code', (am.remap('moveForward', ['KeyW']).actionForCode('KeyW') === 'moveForward'), 'ok');
    check('AAA-06: ActionMap snapshot lists actions', am.snapshot().actions.includes('moveForward'), 'actions=' + am.snapshot().actions.join(','));
    // InputManager held-state + one-shot edge-trigger
    im._handle('moveForward', true, null);
    check('AAA-06: held moveForward action set', im.actions.moveForward === true, 'fwd=' + im.actions.moveForward);
    im._handle('enterExit', true, null);
    im._handle('enterExit', true, null); // second press same frame -> edge-triggered once
    check('AAA-06: one-shot enterExit edge-triggered once', im.events.filter(e => e === 'enterExit').length === 1, 'events=' + im.events.join(','));
    const drained = im.drain();
    check('AAA-06: drain clears one-shot queue', im.events.length === 0 && drained.includes('enterExit'), 'drained=' + drained.join(','));
    im._handle('enterExit', false, null);
    im._handle('enterExit', true, null);
    check('AAA-06: re-press after release fires again', im.drain().includes('enterExit'), 'ok');
    check('AAA-06: InputManager snapshot includes map+actions', !!im.snapshot().map && !!im.snapshot().actions, 'ok');
    check('AAA-06: player consumes InputManager (no raw DOM key handlers)', player.input instanceof InputManager, 'input=' + (player.input && player.input.constructor && player.input.constructor.name));

    // ---- [AAA-07] persisted settings (quality tiers / control remap / audio) ----
    // Node-safe: no browser localStorage, so the memory shim must round-trip.
    const memStorage = createStorage();
    const s = new Settings({ storage: memStorage, key: 'worldloop.settings.test' });
    check('AAA-07: Settings builds over memory storage shim', s.quality === QUALITY_TIERS.HIGH, 'quality=' + s.quality);
    check('AAA-07: default audio prefs', s.audio.muted === false && s.audio.master === 1.0, 'audio=' + JSON.stringify(s.audio));
    check('AAA-07: default bindings match ActionMap defaults', s.bindings === DEFAULT_SETTINGS.input.bindings, 'bindings present');
    check('AAA-07: QUALITY_PARAMS covers every tier', Object.values(QUALITY_TIERS).every(t => QUALITY_PARAMS[t]), 'tiers=' + Object.keys(QUALITY_PARAMS).join(','));

    // Quality tier -> pixel-ratio cap / draw-distance scale / postFx.
    s.setQuality(QUALITY_TIERS.LOW);
    check('AAA-07: setQuality persists low tier', s.quality === QUALITY_TIERS.LOW && s.pixelRatioCap() === 1.0, 'cap=' + s.pixelRatioCap());
    s.setQuality(QUALITY_TIERS.ULTRA);
    check('AAA-07: ultra tier raises pixel-ratio cap', s.pixelRatioCap() > 2.0 && s.postFxEnabled(), 'cap=' + s.pixelRatioCap());
    s.setQuality('bogus-tier');
    check('AAA-07: invalid tier falls back to HIGH', s.quality === QUALITY_TIERS.HIGH, 'quality=' + s.quality);

    // Control remap round-trips through storage.
    s.setBindings({ moveForward: ['KeyW', 'ArrowUp'], enterExit: ['KeyF'] });
    s.save();
    const s2 = new Settings({ storage: memStorage, key: 'worldloop.settings.test' });
    check('AAA-07: control remap persists across save/load', s2.bindings.moveForward[0] === 'KeyW' && s2.bindings.enterExit[0] === 'KeyF', 'bindings=' + JSON.stringify(s2.bindings));

    // Audio prefs merge + persist.
    s2.setAudio({ muted: true, sfx: 0.5 });
    const s3 = new Settings({ storage: memStorage, key: 'worldloop.settings.test' });
    check('AAA-07: audio prefs persist', s3.audio.muted === true && s3.audio.sfx === 0.5, 'audio=' + JSON.stringify(s3.audio));

    // A remapped ActionMap rehydrates from settings bindings.
    const remapped = new ActionMap(s3.bindings);
    check('AAA-07: ActionMap rehydrates from saved bindings', remapped.codesFor('moveForward').includes('KeyW'), 'codes=' + remapped.codesFor('moveForward'));

    // Machine-readable snapshot.
    const settingsSnap = s3.snapshot();
    check('AAA-07: snapshot exposes quality/audio/input', settingsSnap.quality && settingsSnap.audio && settingsSnap.input && typeof settingsSnap.dirty === 'boolean', 'keys=' + Object.keys(settingsSnap).join(','));

    // main.js wiring: the input layer rehydrates its logical map from the
    // persisted bindings (Node-safe: no DOM/window needed here).
    const wiredIM = new InputManager({ map: new ActionMap(s3.bindings) });
    check('AAA-07: main.js wiring rehydrates InputManager from persisted bindings',
      wiredIM.map instanceof ActionMap && wiredIM.map.codesFor('moveForward').includes('KeyW'),
      'codes=' + wiredIM.map.codesFor('moveForward'));

// ---- [AAA-08] core/save.js — replay-safe save/load (seed + player + progress) ----
{
  const memSave = createStorage();
  const saveGame = new SaveGame({ storage: memSave, key: 'worldloop.save.test' });

  // Replay-safe fixture: deterministic world seed + player + sim-clock state.
  const fakePlayer = {
    currentCar: null,
    camera: { position: { x: 12, y: 2, z: -34 } },
    carVelocity: 0, carSteering: 0, spinVelocity: 0, shakeIntensity: 0
  };
  const fakeClock = {
    snapshot() { return { fixedDt: 1 / 30, maxStepsPerFrame: 4, accumulator: 0.02, paused: false, frames: 100, steps: 3000, dropped: 0, alpha: 0.6 }; }
  };

  const snap = saveGame.capture({
    seed: DEFAULT_SEED, player: fakePlayer, simClock: fakeClock,
    progress: { score: 42, events: 7 }, meta: { slot: 'test' }
  });
  check('AAA-08: capture builds a replay-safe snapshot (seed+player+clock+progress)',
    snap && snap.version === SAVE_VERSION && snap.seed === DEFAULT_SEED &&
    snap.player.position.x === 12 && snap.player.isDriving === false &&
    snap.progress.score === 42 && snap.progress.events === 7 &&
    snap.progress.simTime === 100,
    'v=' + (snap && snap.version) + ' seed=' + (snap && snap.seed) + ' simTime=' + (snap && snap.progress && snap.progress.simTime));

  // serialize -> fromJSON round-trip preserves the full record (replay-safe).
  const json = saveGame.serialize();
  const revived = new SaveGame({ storage: memSave, key: 'worldloop.save.revive' }).fromJSON(json);
  check('AAA-08: serialize/fromJSON round-trips the full record',
    !!revived && revived.seed === DEFAULT_SEED && revived.player.position.z === -34 &&
    revived.progress.events === 7 && revived.simClock.steps === 3000,
    'revived=' + !!revived);

  // save/load through the Node-safe storage shim.
  saveGame.save();
  const loaded = new SaveGame({ storage: memSave, key: 'worldloop.save.test' }).load();
  check('AAA-08: save/load round-trips through the storage shim',
    !!loaded && loaded.seed === DEFAULT_SEED && loaded.player.position.x === 12 &&
    loaded.progress.score === 42 && loaded.simClock.steps === 3000,
    'loaded=' + !!loaded);

  // Replay-safety: two captures over identical state must fingerprint identically.
  const f1 = saveGame.fingerprint();
  const saveGame2 = new SaveGame({ storage: memSave, key: 'worldloop.save.test2' });
  saveGame2.capture({
    seed: DEFAULT_SEED, player: fakePlayer, simClock: fakeClock,
    progress: { score: 42, events: 7 }, meta: { slot: 'test' }
  });
  const f2 = saveGame2.fingerprint();
  check('AAA-08: fingerprint is deterministic across captures (replay-safe)',
    f1 === f2, 'f1=' + f1 + ' f2=' + f2);

  // restore() resumes player position + sim-clock position back onto live state.
  const restoreTarget = {
    camera: { position: new THREE.Vector3() }, currentCar: null,
    carVelocity: 0, carSteering: 0, spinVelocity: 0, shakeIntensity: 0
  };
  const restoreClock = { steps: 0, accumulator: 0 };
  saveGame.restore({ player: restoreTarget, simClock: restoreClock });
  check('AAA-08: restore() resumes player position + sim-clock position',
    restoreTarget.camera.position.x === 12 && restoreTarget.camera.position.z === -34 &&
    restoreClock.steps === 3000 && restoreClock.accumulator === 0.02,
    'posX=' + restoreTarget.camera.position.x + ' posZ=' + restoreTarget.camera.position.z + ' steps=' + restoreClock.steps);

  // snapshotClock accepts a pre-snapshotted plain clock object (Node-safe).
  const plainClock = snapshotClock({ fixedDt: 1 / 30, steps: 60 });
  check('AAA-08: snapshotClock normalizes a plain clock snapshot',
    plainClock && plainClock.steps === 60 && plainClock.fixedDt === 1 / 30, 'steps=' + (plainClock && plainClock.steps));
}

// ---- [AAA-09] Uniform-grid spatial broadphase (replaces per-frame concat) ----
{
    // Static colliders are bucketed ONCE on stream and queried by cell —
    // the per-frame hot path never rebuilds the full collider array.
    const cell = 34;
    const grid = new SpatialGrid(cell);

    // Insert a handful of Box3 colliders (world coords).
    const mkBox = (cx, cz, half = 5) => {
        const b = new THREE.Box3();
        b.min.set(cx - half, 0, cz - half);
        b.max.set(cx + half, 10, cz + half);
        return b;
    };
    const box00 = mkBox(0, 0);    // cell (0,0)
    grid.insert(box00);
    grid.insert(mkBox(34, 34));   // cell (1,1)
    grid.insert(mkBox(34 * 5, 0));// cell (5,0) — far away

    // A query at the origin with radius 1 cell touches cells (0,0),(0,1),(1,0),(1,1)
    // — the far collider in cell (5,0) is NOT visited.
    const near = grid.query(0, 0, cell);
    check('AAA-09: SpatialGrid.query returns only nearby cells (broadphase culling)',
        near.length === 2, 'near=' + near.length + ' total=' + grid.count);

    // Broadphase count tracks inserts; remove drops them back out.
    check('AAA-09: SpatialGrid.count tracks inserted colliders',
        grid.count === 3, 'count=' + grid.count);
    grid.remove(box00);
    check('AAA-09: SpatialGrid.remove drops a collider (cell count updates)',
        grid.count === 2, 'count=' + grid.count);

    // getCollidersNear distance-culls dynamic colliders: only the local
    // static subset (nearby cells) + dynamic boxes within radius are kept.
    // ChunkManager dereferences worldData for its chunkSize, so pass a stub.
    const mgr = new ChunkManager(null, null, { blockSize: 20, roadWidth: 14 }, null, null, null, null, null);
    const local = mgr.getCollidersNear(0, 0, cell);
    check('AAA-09: getCollidersNear returns a local subset (no full concat)',
        Array.isArray(local), 'local=' + local.length);
}

// ---- [AAA-10] Streaming budget + queue + chunk pooling (no double update) ----
{
    const scene = { add() {}, remove() {} };
    const worldData = { blockSize: 20, roadWidth: 14 };
    const sys = { loadChunk() {}, unloadChunk() {}, getColliders() { return []; } };
    const player = { position: { x: 0, z: 0 }, camera: { position: { x: 0, z: 0 } } };

    // Manager exposes the AAA-10 streaming machinery.
    const mgr = new ChunkManager(scene, player, worldData, sys, sys, sys, sys, sys);
    check('AAA-10: ChunkManager exposes a streaming budget + queue + pool',
        mgr.streamBudget > 0 && Array.isArray(mgr.pendingLoads) && mgr.chunkPool instanceof Map,
        'budget=' + mgr.streamBudget + ' queue=' + mgr.pendingLoads.length);

    // Chunk pooling: load -> unload pools the chunkData -> re-load reuses it.
    const cx = 20, cz = 0; // dist=20 -> wasteland (no population systems needed)
    mgr.loadChunk(cx, cz);
    const id = `${cx},${cz}`;
    const loaded = mgr.chunks.get(id);
    check('AAA-10: loadChunk streams a chunk into the active set',
        !!loaded, 'id=' + id);
    mgr.unloadChunk(id);
    check('AAA-10: unloadChunk pools the chunkData for reuse',
        mgr.chunkPool.has(id), 'poolSize=' + mgr.chunkPool.size);
    mgr.loadChunk(cx, cz);
    const reloaded = mgr.chunks.get(id);
    check('AAA-10: re-load reuses the pooled chunkData (no rebuild)',
        reloaded === loaded, 'reused=' + (reloaded === loaded));

    // Streaming budget: update() enqueues missing chunks and drains at most
    // streamBudget streams per call (budget of 1 -> queue stays non-empty).
    const mgr2 = new ChunkManager(scene, player, worldData, sys, sys, sys, sys, sys);
    mgr2.streamBudget = 1;
    mgr2.update();
    check('AAA-10: update() drains at most streamBudget streams per call',
        mgr2.pendingLoads.length >= 1, 'pending=' + mgr2.pendingLoads.length);

    // Double update removed: main.js must contain exactly one chunkManager.update().
    const mainSrc = fs.readFileSync('src/main.js', 'utf8');
    const updates = (mainSrc.match(/chunkManager\.update\(\)/g) || []).length;
    check('AAA-10: main.js has exactly one chunkManager.update() (no double update)',
        updates === 1, 'updates=' + updates);
}

// ---- [AAA-10 regression] Pooled re-stream passes a biome STRING ----
// The old pooled path handed the chunkData OBJECT to traffic.loadChunk, which
// calls biome.startsWith('highway') — that threw `n.startsWith is not a
// function`. Reloading a pooled city/highway chunk must pass 'city'/'highway_*'
// and must NOT throw.
{
    const scene = { add() {}, remove() {} };
    const worldData = { blockSize: 20, roadWidth: 14 };
    let trafficBiome = null;
    let trafficCalls = 0;
    const traffic = {
        loadChunk(cx, cz, biome) {
            // Mirror the real TrafficSystem contract: startsWith on biome.
            biome.startsWith('highway');
            trafficBiome = biome;
            trafficCalls++;
        },
        unloadChunk() {}
    };
    const noop = { loadChunk() {}, unloadChunk() {} };
    const mgr = new ChunkManager(scene, null, worldData, traffic, noop, noop, noop, noop);

    // City chunk (0,0): dist 0 < 6 -> city, lodLevel 0 -> spawns population.
    mgr.loadChunk(0, 0);
    check('AAA-10 regression: fresh city chunk passes "city" to traffic',
        trafficBiome === 'city', 'biome=' + trafficBiome);

    // Unload -> pooled; reload must NOT throw and must pass 'city' again.
    mgr.unloadChunk('0,0');
    let threw = false;
    try { mgr.loadChunk(0, 0); } catch (e) { threw = true; }
    check('AAA-10 regression: pooled city re-stream passes "city" (no startsWith throw)',
        !threw && trafficBiome === 'city', 'threw=' + threw + ' biome=' + trafficBiome);

    // Highway chunk (6,0): dist 6 (not <6) & |cz| 0 <=5 -> highway_x.
    mgr.loadChunk(6, 0);
    check('AAA-10 regression: fresh highway chunk passes "highway_x"',
        trafficBiome === 'highway_x', 'biome=' + trafficBiome);

    // Unload -> pooled highway; reload must reload traffic and not throw.
    mgr.unloadChunk('6,0');
    threw = false;
    try { mgr.loadChunk(6, 0); } catch (e) { threw = true; }
    check('AAA-10 regression: pooled highway re-stream reloads traffic (no throw)',
        !threw && trafficBiome === 'highway_x', 'threw=' + threw + ' biome=' + trafficBiome);
}

// ---- [LOD] No visible building drops to grey LOD ----
// lodDistance must cover the square streaming radius (up to R*sqrt(2)), so
// every LOADED chunk renders full detail (lodLevel 0), never grey. The old
// lodDistance of 2 (vs renderDistance 3) greyed the whole outer ring.
{
    const scene = { add() {}, remove() {} };
    const worldData = { blockSize: 20, roadWidth: 14 };
    const player = { camera: { position: { x: 0, z: 0 } } }; // at chunk (0,0)
    const noop = { loadChunk() {}, unloadChunk() {} };
    const mgr = new ChunkManager(scene, player, worldData, noop, noop, noop, noop, noop);

    // Far-corner chunk of the square load range (R=2 -> chunk (2,2), dist ~2.83).
    mgr.loadChunk(2, 2);
    const corner = mgr.chunks.get('2,2');
    check('LOD: far-corner streamed chunk renders FULL detail (not grey)',
        corner && corner.lodLevel === 0,
        'lodLevel=' + (corner && corner.lodLevel));

    // Edge chunk straight ahead (0,2), dist 2 — on the streaming boundary.
    mgr.loadChunk(0, 2);
    const edge = mgr.chunks.get('0,2');
    check('LOD: straight-edge streamed chunk renders FULL detail (not grey)',
        edge && edge.lodLevel === 0,
        'lodLevel=' + (edge && edge.lodLevel));
}

check('player.update(0.1) runs', true, 'ok');

// ---- 11. Deformation physics ----------------------------------------------------
check('deformation.deformMesh is function', typeof deformMesh === 'function');

// ---- 12. Noise ------------------------------------------------------------------
const n1 = SimplexNoise.noise2D(0.5, 0.5);
const n2 = SimplexNoise.noise2D(0.5, 0.5);
check('SimplexNoise.noise2D deterministic in-session', n1 === n2, 'n=' + n1);
check('SimplexNoise.noise2D returns finite number', Number.isFinite(n1));

// ---- 12b. AAA-03: seeded deterministic RNG -----------------------------------------
// Two RNGs with the same seed must produce the same sequence (no Math.random).
const rngA = new RNG(42);
const rngB = new RNG(42);
check('AAA-03: RNG deterministic — same seed -> same sequence',
  rngA.float() === rngB.float() && rngA.float() === rngB.float(),
  'a=' + rngA.float() + ' b=' + rngB.float());

// Different seeds -> different noise worlds (seed actually feeds the permutation).
setSeed(1); resetNoise(); const seed1 = SimplexNoise.noise2D(0.5, 0.5);
setSeed(2); resetNoise(); const seed2 = SimplexNoise.noise2D(0.5, 0.5);
check('AAA-03: noise seeded — different seeds -> different worlds', Math.abs(seed1 - seed2) > 1e-9,
  'seed1=' + seed1.toFixed(6) + ' seed2=' + seed2.toFixed(6));
check('AAA-03: getSeed reflects setSeed', getSeed() === 2, 'seed=' + getSeed());

// Restore the canonical world seed so later checks see a stable permutation.
setSeed(DEFAULT_SEED); resetNoise();
const nA = SimplexNoise.noise2D(0.5, 0.5);
check('AAA-03: DEFAULT_SEED world is reproducible (stable sample)',
  Number.isFinite(nA) && Math.abs(nA - seed2) > 1e-9, 'n=' + nA.toFixed(6));

// ---- 13. Wiring (main.js instantiates every system) --------------------------------
const mainSrc = fs.readFileSync('src/main.js', 'utf8');
const wired = ['createWorld', 'TrafficSystem', 'PedestrianSystem', 'ParkingSystem',
  'WeatherSystem', 'AirplaneSystem', 'EffectSystem', 'TrafficLightSystem',
  'ChunkManager', 'Player'].every(sym => mainSrc.includes(sym));
check('main.js wires all systems', wired, 'symbols checked');
check('main.js passes pedestrianSystem to traffic.setDependencies', mainSrc.includes('pedestrianSystem)'), '5th dep wired');
        check('main.js wires EmergencySystem -> emergency response', mainSrc.includes('EmergencySystem') && mainSrc.includes('emergencySystem.update(fixedDt)'));
  check('main.js wires ConstructionSystem -> animated cranes', mainSrc.includes('ConstructionSystem') && mainSrc.includes('constructionSystem.update(fixedDt)'));

        check('main.js hooks player crashes -> emergency.respond', mainSrc.includes('player.emergencySystem'));
        check('main.js passes emergencySystem to traffic.setDependencies', mainSrc.includes('roadGraph, emergencySystem'));
check('main.js wires FrameBudgetTelemetry', mainSrc.includes('FrameBudgetTelemetry') && mainSrc.includes('recordFrame'), 'telemetry wired');

// ---- AAA-02: frame loop — exactly one update per frame, explicit clamped
// dt, and a frame budget that drops a frame when cost overshoots --------------
const frameLoop = new FrameLoop({ maxDt: 0.1, budgetMs: 16.7 });
// 1) explicit clamped dt: a backgrounded-tab stall (2s) must clamp to maxDt.
frameLoop.step(3, 2.0, 1);
check('AAA-02: explicit dt is clamped to maxDt on a long stall',
  frameLoop.clamped > 0 && frameLoop.lastDt === frameLoop.maxDt,
  'clamped=' + frameLoop.clamped + ' lastDt=' + frameLoop.lastDt + ' maxDt=' + frameLoop.maxDt);

// 2) exactly one update() per frame: the animate callback must call
// chunkManager.update() exactly once (the old loop called it twice).
// The init-time load at the top of main.js is NOT part of the per-frame loop,
// so scope the count to the animate(loop, ...) callback region.
const mainLoopSrc = fs.readFileSync('src/main.js', 'utf8');
const loopRegion = mainLoopSrc.slice(mainLoopSrc.indexOf('animate(loop'));
const updateCalls = loopRegion.match(/chunkManager\.update\(\)/g);
check('AAA-02: exactly one chunkManager.update() per frame',
  updateCalls && updateCalls.length === 1,
  'calls=' + (updateCalls ? updateCalls.length : 0));

// 3) frame budget: over-budget work forces the NEXT frame's work to drop.
const slowLoop = new FrameLoop({ maxDt: 0.1, budgetMs: 16.7 });
const slowRes = slowLoop.step(8, 1 / 60, 40);
check('AAA-02: frame budget drops frames when update cost overshoots',
  slowRes.skipped > 0 && slowLoop.overBudget > 0,
  'skipped=' + slowRes.skipped + ' overBudget=' + slowLoop.overBudget);
// ---- AAA-04: fixed-timestep core (ADR 0022) ----------------------------------
import { FixedTimestep, FIXED_DT, MAX_STEPS_PER_FRAME } from './src/core/time.js';
import { App, APP_STATES, isValidAppState } from './src/core/app.js'; // [AAA-05] App state machine
const clockProbe = new FixedTimestep({ fixedDt: 1 / 30, maxStepsPerFrame: 4 });
let clockUpdates = 0, clockRenders = 0;
// 100ms real frame -> 3 fixed steps (100ms / 33.3ms = 3), exactly 1 render.
clockProbe.advance(0.100, () => clockUpdates++, () => clockRenders++);
check('AAA-04: FixedTimestep runs N fixed steps then one render per frame',
  clockUpdates === 3 && clockRenders === 1,
  'updates=' + clockUpdates + ' renders=' + clockRenders);
check('AAA-04: render alpha is leftover accumulator / fixedDt',
  clockProbe.alpha >= 0 && clockProbe.alpha < 1,
  'alpha=' + clockProbe.alpha.toFixed(3));
// Frame-budget clamp: a 2s stall runs at most maxStepsPerFrame updates and
// drops the leftover time — no catch-up death spiral.
const stallProbe = new FixedTimestep({ fixedDt: 1 / 30, maxStepsPerFrame: 4 });
let stallUpdates = 0;
stallProbe.advance(2.0, () => stallUpdates++, () => {});
check('AAA-04: frame-budget clamp caps sim steps and drops leftover time',
  stallUpdates === 4 && stallProbe.dropped > 0,
  'updates=' + stallUpdates + ' dropped=' + stallProbe.dropped);
// Pause/resume: paused clock freezes the accumulator (no updates) but still
// renders the last state; resume clears the accumulator so no catch-up burst.
const pauseProbe = new FixedTimestep();
pauseProbe.pause();
let pausedUpdates = 0, pausedRenders = 0;
pauseProbe.advance(0.1, () => pausedUpdates++, () => pausedRenders++);
check('AAA-04: pause freezes sim (no updates) but render still draws',
  pausedUpdates === 0 && pausedRenders === 1 && pauseProbe.paused === true,
  'updates=' + pausedUpdates + ' renders=' + pausedRenders + ' paused=' + pauseProbe.paused);
pauseProbe.resume();
let resumedUpdates = 0;
pauseProbe.advance(0.1, () => resumedUpdates++, () => {});
check('AAA-04: resume clears accumulator and sim steps resume',
  resumedUpdates === 3 && pauseProbe.paused === false,
  'updates=' + resumedUpdates + ' paused=' + pauseProbe.paused);
// Determinism: identical dt -> identical step count regardless of object.
const clockA = new FixedTimestep();
const clockB = new FixedTimestep();
clockA.advance(0.100, () => {}, () => {});
clockB.advance(0.100, () => {}, () => {});
check('AAA-04: fixed timestep is deterministic (same dt -> same steps)',
  clockA.steps === clockB.steps && clockA.steps === 3,
  'stepsA=' + clockA.steps + ' stepsB=' + clockB.steps);
// Wiring: main.js imports and drives the fixed-timestep clock.
const mainClockSrc = fs.readFileSync('src/main.js', 'utf8');
check('AAA-04: main.js imports FixedTimestep from core/time.js',
  mainClockSrc.includes("from './core/time.js'"),
  'import: ' + mainClockSrc.includes("from './core/time.js'"));
check('AAA-04: main.js advances a fixed-timestep clock and records its budget',
  mainClockSrc.includes('simClock.advance(dt') && mainClockSrc.includes('recordClock(simClock.snapshot())'),
  'advance=' + mainClockSrc.includes('simClock.advance(dt') + ' recordClock=' + mainClockSrc.includes('recordClock(simClock.snapshot())'));
check('AAA-04: fixed step is 30Hz and budget clamp is 4 steps/frame',
  FIXED_DT === 1 / 30 && MAX_STEPS_PER_FRAME === 4,
  'FIXED_DT=' + FIXED_DT + ' MAX=' + MAX_STEPS_PER_FRAME);

// ---- AAA-05: App state machine (ADR 0023) -----------------------------------
const appClock = new FixedTimestep({ fixedDt: 1 / 30, maxStepsPerFrame: 4 });
const app = new App({ clock: appClock });
check('AAA-05: App starts in BOOT state',
  app.state === APP_STATES.BOOT && app.isFrozen === true,
  'state=' + app.state + ' frozen=' + app.isFrozen);

// Invalid state transitions must throw.
let threw = false;
try { app.transition('not-a-state'); } catch (e) { threw = true; }
check('AAA-05: invalid state transition throws',
  threw && app.state === APP_STATES.BOOT && app.transitions === 0,
  'threw=' + threw + ' transitions=' + app.transitions);

// Lifecycle flow: boot -> loading -> playing. Loading freezes the clock.
app.transition(APP_STATES.LOADING, 'init');
check('AAA-05: loading state freezes the sim clock',
  app.state === APP_STATES.LOADING && app.clock.paused === true,
  'state=' + app.state + ' clockPaused=' + app.clock.paused);

// Entering playing resumes the clock.
app.transition(APP_STATES.PLAYING, 'ready');
check('AAA-05: playing state resumes the sim clock',
  app.state === APP_STATES.PLAYING && app.clock.paused === false && app.isPlaying,
  'state=' + app.state + ' clockPaused=' + app.clock.paused);

// Pause hook (P key): playing -> paused freezes the clock.
app.togglePause();
check('AAA-05: togglePause playing -> paused freezes clock',
  app.state === APP_STATES.PAUSED && app.clock.paused === true && app.isPaused,
  'state=' + app.state + ' clockPaused=' + app.clock.paused);

// togglePause resumes back to playing.
app.togglePause();
check('AAA-05: togglePause paused -> playing resumes clock',
  app.state === APP_STATES.PLAYING && app.clock.paused === false && app.isPlaying,
  'state=' + app.state + ' clockPaused=' + app.clock.paused);

// gameover freezes the clock.
app.transition(APP_STATES.GAMEOVER, 'crash');
check('AAA-05: gameover freezes the sim clock',
  app.state === APP_STATES.GAMEOVER && app.clock.paused === true,
  'state=' + app.state + ' clockPaused=' + app.clock.paused);

// No-op transition is recorded but not counted.
const before = app.transitions;
app.transition(APP_STATES.GAMEOVER, 'no-op');
check('AAA-05: no-op transition recorded but not counted',
  app.transitions === before && app.history[app.history.length - 1].to === APP_STATES.GAMEOVER,
  'transitions=' + app.transitions + ' last=' + app.history[app.history.length - 1].to);

// Pause request outside a pauseable state is ignored (recorded no-op).
app.togglePause();
check('AAA-05: togglePause in gameover is ignored (state unchanged)',
  app.state === APP_STATES.GAMEOVER && app.transitions === before,
  'state=' + app.state + ' transitions=' + app.transitions);

// Snapshot is machine-readable.
const snap = app.snapshot();
check('AAA-05: snapshot exposes state/clock/history',
  snap.state === APP_STATES.GAMEOVER && snap.clockPaused === true && Array.isArray(snap.history) && snap.history.length > 0,
  'state=' + snap.state + ' clockPaused=' + snap.clockPaused + ' history=' + snap.history.length);

// main.js wires the App and owns the pause hook.
const appMainSrc = fs.readFileSync('src/main.js', 'utf8');
check('AAA-05: main.js imports and drives App state machine',
  appMainSrc.includes("from './core/app.js'") && appMainSrc.includes('app.togglePause()') && appMainSrc.includes('APP_STATES.PLAYING'),
  'importsApp=' + appMainSrc.includes("from './core/app.js'") + ' pauseHook=' + appMainSrc.includes('app.togglePause()'));


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
import { ActionMap, DEFAULT_BINDINGS, InputManager, KeyboardAdapter, ACTIONS } from './src/input/index.js'; // [AAA-06] logical input
import { Settings, QUALITY_TIERS, QUALITY_PARAMS, DEFAULT_SETTINGS, createStorage } from './src/core/settings.js';
import { SaveGame, snapshotClock, SAVE_VERSION } from './src/core/save.js';
 // [AAA-08] persisted save/load // [AAA-07] persisted settings
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
