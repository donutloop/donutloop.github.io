import * as THREE from 'three';
import { initScene, animate } from './scene.js';
import { createWorld } from './world.js';
import { Player } from './player.js';
import { TrafficSystem } from './traffic.js';
import { EmergencySystem } from './emergency.js';
import { ConstructionSystem } from './construction.js'; // [NEW] Gap D — emergency response
import { WeatherSystem } from './weather.js';
import { PedestrianSystem } from './pedestrians.js';
import { ParkingSystem } from './parking.js';
import { AirplaneSystem } from './airplanes.js';
import { EffectSystem, PostProcessingPipeline } from './effects.js';
import { TrafficLightSystem } from './traffic_lights.js'; // [NEW]
import { ChunkManager } from './chunk_manager.js';
import { FrameBudgetTelemetry } from './telemetry.js'; // [NEW] frame-budget telemetry
import { RoadGraph } from './road_graph.js'; // [NEW] implicit road-network graph
import { Minimap } from './minimap.js'; // [NEW] Round 9 — minimap / district-label HUD
import { FrameLoop } from './loop.js'; // [AAA-02] frame loop hygiene
import { FixedTimestep } from './core/time.js'; // [AAA-04] fixed-timestep core
import { App, APP_STATES } from './core/app.js'; // [AAA-05] App state machine
import { setSeed, getSeed, DEFAULT_SEED } from './core/rng.js'; // [AAA-03] seeded deterministic RNG
import { InputManager } from './input/index.js'; // [AAA-06] unified logical input
import { ActionMap } from './input/action_map.js'; // [AAA-06] action->code map
import { Settings, createStorage } from './core/settings.js';
import { SaveGame } from './core/save.js'; // [AAA-08] persisted save/load (seed + player + progress) // [AAA-07] persisted settings (quality/remap/audio)

let player;
let cubes = [];
let score = 0;
let scoreElement;
let trafficSystem;
let weatherSystem;
let pedestrianSystem;
let parkingSystem;
let airplaneSystem;
let effectSystem;
let postFx; // [NEW] post-processing pipeline (bloom + rain droplets)
let trafficLightSystem; // [NEW]
let emergencySystem; // [NEW] Gap D — emergency response
let constructionSystem; // [NEW] construction sites — animated tower cranes
let chunkManager;
let telemetry; // [NEW]
let roadGraph; // [NEW] road-network graph for realistic car routing
let minimap; // [NEW] Round 9 — minimap / district-label HUD

function initScore() {
    scoreElement = document.createElement('div');
    scoreElement.style.position = 'absolute';
    scoreElement.style.top = '20px';
    scoreElement.style.left = '20px';
    scoreElement.style.color = '#fff';
    scoreElement.style.fontSize = '24px';
    scoreElement.style.fontFamily = 'monospace';
    scoreElement.innerHTML = 'Score: 0';
    document.body.appendChild(scoreElement);
}

window.addEventListener('error', (e) => {
    const errorMsg = document.createElement('div');
    errorMsg.style.position = 'absolute';
    errorMsg.style.top = '10px';
    errorMsg.style.left = '10px';
    errorMsg.style.color = 'red';
    errorMsg.style.background = 'rgba(0,0,0,0.8)';
    errorMsg.style.padding = '10px';
    errorMsg.textContent = `Error: ${e.message}`;
    document.body.appendChild(errorMsg);
});

async function init() {
    initScore();
    // [AAA-03] Seed the global deterministic RNG before building any world
    // geometry, so the noise permutation (and every seeded system) is
    // reproducible. Later settings/AAA-07 can read this seed from storage.
    setSeed(DEFAULT_SEED);
    // document.body.style.background = 'red'; // DEBUG: Verify JS runs
    try {
        const { scene, camera, renderer } = initScene();

        // [AAA-07] Persisted settings (quality tiers / control remap / audio)
        // loaded from localStorage (Node-safe shim in core/settings.js). The
        // settings object is exposed on window for the UI/settings menu and is
        // the source of truth for the renderer cap + input remap below.
        const settings = new Settings({ storage: createStorage() });
        window.settings = settings;
        renderer.setPixelRatio(settings.pixelRatioCap()); // quality-tier pixel-ratio cap

        // Create World (Just lighting and metadata now)
        const worldData = await createWorld(scene);

        // Effect System
        effectSystem = new EffectSystem(scene);

        // Post-processing pipeline — bloom for neon districts + rain droplets.
        // Browser: builds an EffectComposer and renders through it each frame.
        // Node/verify: no renderer → enabled=false, but update() stays deterministic.
        postFx = new PostProcessingPipeline({ renderer, scene, camera });
        if (postFx.enabled) {
            window.addEventListener('resize', () => postFx.resize());
        }

        // Initialize Systems
        trafficLightSystem = new TrafficLightSystem(scene, worldData.roadWidth, worldData.blockSize);
        constructionSystem = new ConstructionSystem(scene);

        // [NEW] Gap D — dynamic city events: emergency response & sirens.
        emergencySystem = new EmergencySystem(scene, worldData.roadWidth, worldData.blockSize);
        emergencySystem.setEffects(effectSystem);
        window.emergencySystem = emergencySystem; // Machine-readable on the browser path
        trafficSystem = new TrafficSystem(scene, worldData.citySize, worldData.blockSize, worldData.roadWidth);
        parkingSystem = new ParkingSystem(scene, worldData.citySize, worldData.blockSize, worldData.roadWidth);
        pedestrianSystem = new PedestrianSystem(scene, worldData.citySize, worldData.blockSize, worldData.roadWidth);

        // Create Player
        // [AAA-06] Unified input manager: keyboard/mouse/touch/gamepad -> logical actions.
        // Pause/lock one-shots are wired to App/Player below; held move actions are
        // consumed by Player.update(). Player owns no raw DOM input bindings anymore.
        // [AAA-07] Rehydrate the logical action map from persisted settings so
        // a player's control remap survives reload (fallback = default bindings).
        const inputManager = new InputManager({
            dom: document.body,
            map: new ActionMap(settings.bindings)
        });
        player = new Player(camera, document.body, [], null, null, effectSystem, null, inputManager);
        player.emergencySystem = emergencySystem; // Hook crashes -> dispatch response

        // Chunk Manager (Infinite World)
        // Pass systems so ChunkManager can trigger spawning per chunk
        chunkManager = new ChunkManager(
            scene,
            player,
            worldData,
            trafficSystem,
            parkingSystem,
            pedestrianSystem,
            trafficLightSystem,
            constructionSystem
        );
        chunkManager.update(); // Initial load

        // [AAA-07] Apply the quality tier's streaming-radius scale so low/medium
        // tiers stream fewer chunks (and render faster) than high/ultra.
        chunkManager.renderDistance = Math.max(
            1, Math.round(chunkManager.renderDistance * settings.drawDistanceScale())
        );

        // Update player colliders immediately
        player.colliders = chunkManager.getColliders();

        // Pass systems to Player (for interaction/collision logic)
        player.trafficSystem = trafficSystem;
        player.parkingSystem = parkingSystem;
        player.pedestrianSystem = pedestrianSystem;

        // [NEW] Road-network graph — deterministic implicit graph over the
        // chunk grid, so cars route intersection-to-intersection realistically.
        roadGraph = new RoadGraph(worldData.blockSize, 16);
        window.roadGraph = roadGraph; // Machine-readable on the browser path too

        // [NEW] Round 9 — minimap / district-label HUD. Reads the live chunk
        // manager grid + player world position; district names are deterministic
        // via SimplexNoise over chunk coords (same pos -> same district).
        minimap = new Minimap(chunkManager);
        window.minimap = minimap; // Machine-readable on the browser path too

        // Dependency Injection
        trafficSystem.setDependencies(player, parkingSystem, trafficLightSystem, effectSystem, pedestrianSystem, roadGraph, emergencySystem);
        parkingSystem.setDependencies(effectSystem);
        pedestrianSystem.setDependencies(trafficLightSystem, parkingSystem, effectSystem);

        // Weather
        weatherSystem = new WeatherSystem(scene, worldData.directionalLight, worldData.ambientLight, worldData.materials);

        // [NEW] Weather-reactive driving — wire live weather into the player so
        // rain/snow reduce tire grip (longer stopping distance, lower top speed).
        player.weatherSystem = weatherSystem;

        // Airplanes
        airplaneSystem = new AirplaneSystem(scene, worldData.citySize);
        window.airplaneSystem = airplaneSystem; // Debug: Expose to console

        // [NEW] Frame-budget telemetry (real FPS + draw calls from the renderer)
        telemetry = new FrameBudgetTelemetry();
        window.frameBudget = telemetry; // Machine-readable on the browser path too

        // [CI] Self-describing ready signal for the headless smoke test. The CI
        // driver polls window.__worldloop.ready; once a real frame has rendered
        // with draw calls recorded, the browser path is provably alive.
        window.__worldloop = { ready: false, drawCalls: 0, fps: 0, triangles: 0, errors: 0, simClock: null };

        console.log('Game Initialized with Infinite World + Populated Chunks');





        // [NEW] Telemetry HUD (fps + draw calls, updated once per second)
        const teleDiv = document.createElement('div');
        teleDiv.style.position = 'absolute';
        teleDiv.style.bottom = '34px';
        teleDiv.style.right = '10px';
        teleDiv.style.color = '#8affaa';
        teleDiv.style.background = 'rgba(0,0,0,0.5)';
        teleDiv.style.padding = '5px';
        teleDiv.style.fontFamily = 'monospace';
        teleDiv.style.fontSize = '12px';
        teleDiv.innerHTML = 'fps -- | dc --';
        document.body.appendChild(teleDiv);
        let teleTicker = 0;

        // Version Display
        const verDiv = document.createElement('div');
        verDiv.style.position = 'absolute';
        verDiv.style.bottom = '10px';
        verDiv.style.right = '10px';
        verDiv.style.color = 'white';
        verDiv.style.background = 'rgba(0,0,0,0.5)';
        verDiv.style.padding = '5px';
        verDiv.style.fontFamily = 'monospace';
        verDiv.innerHTML = 'v6.4.2: Varied Cloud Sizes';
        document.body.appendChild(verDiv);

        // [AAA-02] frame loop: exactly ONE update per frame, explicit clamped
        // dt, and a frame budget that drops a frame when cost overshoots.
        const loop = new FrameLoop({ maxDt: 0.1, budgetMs: 16.7 });
        // [AAA-04] Fixed-timestep core (ADR 0022): sim systems advance at a
        // constant 30Hz regardless of display refresh; render happens once per
        // frame. P key toggles pause/resume through the App state machine.
        const simClock = new FixedTimestep({ fixedDt: 1 / 30, maxStepsPerFrame: 4 });
        // [AAA-05] App state machine owns the pause hook and lifecycle flow:
        // boot → loading → playing (menu UI lands in AAA-15).
        const app = new App({ clock: simClock });
        window.__worldloop.app = app;
        app.transition(APP_STATES.LOADING, 'init');
        // [AAA-06] Pause is now the logical 'pause' action (KeyP) fired by InputManager -> App.togglePause.
        inputManager.onPause = () => app.togglePause();
        inputManager.onLock = () => player.controls.lock();
        window.__worldloop.simClock = simClock;

        // [AAA-08] Replay-safe save/load — serialize seed + player state +
        // progress (ADR 0022/0023). The world is seeded deterministically, so
        // restoring the seed + sim-clock position + player state reproduces a
        // run. Exposed machine-readable on window for the browser path; the
        // Node harness verifies capture/serialize/restore determinism.
        const saveGame = new SaveGame();
        window.saveGame = saveGame;
        window.__worldloop.saveGame = saveGame;
        saveGame.capture({
            seed: getSeed(),
            player,
            simClock,
            progress: { score, events: emergencySystem.events },
            meta: { slot: 'autosave', label: 'worldloop' }
        });
        // capture() returns the plain snapshot, not the instance — persist
        // via an explicit save() call (ADR 0028).
        saveGame.save();

        // [AAA-05] World + systems are wired: enter the playing state, which
        // resumes the sim clock (frozen during boot/loading).
        app.transition(APP_STATES.PLAYING, 'ready');

        animate(loop, (dt) => {
            try {
                simClock.advance(dt,
                    // SIM pass — runs 0..N times per frame at a fixed
                    // 30Hz timestep, so physics/AI are deterministic and
                    // independent of the display refresh rate.
                    (fixedDt) => {
                        if (chunkManager) {
                            chunkManager.update();   // exactly ONE sim update per frame
                            // Update player colliders continuously as chunks load/unload
                            if (player) {
                                player.colliders = chunkManager.getColliders();
                            }
                        }

                        inputManager.update(fixedDt);
        if (player) player.update(fixedDt);
                        if (emergencySystem) emergencySystem.update(fixedDt);
                        if (trafficSystem) trafficSystem.update(fixedDt);
                        if (trafficLightSystem) trafficLightSystem.update(fixedDt);
                        if (constructionSystem) constructionSystem.update(fixedDt);
                        if (weatherSystem) {
                            const playerPos = player && player.mesh ? player.mesh.position : new THREE.Vector3();
                            weatherSystem.update(fixedDt, playerPos);
                        } if (pedestrianSystem) pedestrianSystem.update(fixedDt);
                        if (airplaneSystem) airplaneSystem.update(fixedDt);
                    },
                    // RENDER pass — runs exactly once per frame. Visual/HUD
                    // systems use the real frame dt so effects stay smooth
                    // regardless of the number of fixed sim steps.
                    (alpha, frameDt) => {
                        const playerPos = player && player.mesh ? player.mesh.position : new THREE.Vector3();

                        // [NEW] Round 9 — minimap / district-label HUD
                        if (minimap) minimap.update(playerPos);
                        if (effectSystem) effectSystem.update(frameDt);

                        // [NEW] post-processing: bloom for neon districts + rain droplets.
                        if (postFx) {
                            let neonBoost = 0;
                            if (scene) {
                                scene.traverse(o => {
                                    if (o.isMesh && o.material && o.material.color) {
                                        const c = o.material.color.getHex();
                                        if (c === 0x00ffff || c === 0xff00ff) neonBoost++;
                                    }
                                });
                            }
                            neonBoost = Math.min(1, neonBoost / 24);
                            const weatherState = weatherSystem ? weatherSystem.currentWeatherState : null;
                            postFx.update(weatherState, neonBoost);
                        }

                        if (postFx && postFx.enabled) {
                            postFx.render();
                        } else {
                            renderer.render(scene, camera);
                        }

                        // [NEW] real frame budget telemetry
                        telemetry.recordFrame(frameDt, renderer.info.render.calls, renderer.info.render.triangles);
                        telemetry.recordBudget(loop.snapshot());
                        telemetry.recordClock(simClock.snapshot());
                        if (!window.__worldloop.ready) {
                            const s = telemetry.snapshot();
                            window.__worldloop.drawCalls = s.drawCalls;
                            window.__worldloop.fps = s.fps;
                            window.__worldloop.triangles = s.triangles;
                            window.__worldloop.ready = s.frames > 0 && s.drawCalls > 0;
                        }
                        teleTicker += frameDt;
                        if (teleTicker >= 0.5 && teleDiv) {
                            teleTicker = 0;
                            const s = telemetry.snapshot();
                            teleDiv.innerHTML = 'fps ' + s.fps + ' | dc ' + s.drawCalls;
                        }
                    }
                );
            } catch (err) {
                console.error("Game Loop Error:", err);
            }
        });
    } catch (err) {
        console.error(err);
        throw err;
    }
}
init();
