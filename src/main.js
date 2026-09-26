import * as THREE from 'three';
import { initScene, animate } from './scene.js';
import { createWorld } from './world.js';
import { Player } from './player.js';
import { TrafficSystem } from './traffic.js';
import { EmergencySystem } from './emergency.js'; // [NEW] Gap D — emergency response
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

let player;
let prevTime = performance.now();
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
    // document.body.style.background = 'red'; // DEBUG: Verify JS runs
    try {
        const { scene, camera, renderer } = initScene();

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

        // [NEW] Gap D — dynamic city events: emergency response & sirens.
        emergencySystem = new EmergencySystem(scene, worldData.roadWidth, worldData.blockSize);
        emergencySystem.setEffects(effectSystem);
        window.emergencySystem = emergencySystem; // Machine-readable on the browser path
        trafficSystem = new TrafficSystem(scene, worldData.citySize, worldData.blockSize, worldData.roadWidth);
        parkingSystem = new ParkingSystem(scene, worldData.citySize, worldData.blockSize, worldData.roadWidth);
        pedestrianSystem = new PedestrianSystem(scene, worldData.citySize, worldData.blockSize, worldData.roadWidth);

        // Create Player
        player = new Player(camera, document.body, [], null, null, effectSystem);
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
            trafficLightSystem
        );
        chunkManager.update(); // Initial load

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
        window.__worldloop = { ready: false, drawCalls: 0, fps: 0, triangles: 0, errors: 0 };

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

        animate(() => {
            const time = performance.now();
            const delta = (time - prevTime) / 1000;
            prevTime = time;

            try {
                if (chunkManager) {
                    chunkManager.update();
                    chunkManager.update();
                    // Update player colliders continuously as chunks load/unload
                    if (player) {
                        player.colliders = chunkManager.getColliders();
                    }
                }

                if (player) player.update(delta);
                if (emergencySystem) emergencySystem.update(delta);
                if (trafficSystem) trafficSystem.update(delta);
                if (trafficLightSystem) trafficLightSystem.update(delta);
                if (weatherSystem) {
                    const playerPos = player && player.mesh ? player.mesh.position : new THREE.Vector3();
                    weatherSystem.update(delta, playerPos);
                } if (pedestrianSystem) pedestrianSystem.update(delta);
                if (airplaneSystem) airplaneSystem.update(delta);

                // [NEW] Round 9 — refresh minimap HUD from the live player position
                if (minimap) {
                    const playerPos = player && player.mesh ? player.mesh.position : new THREE.Vector3();
                    minimap.update(playerPos);
                }

                // Update Effects
                if (effectSystem) effectSystem.update(delta);

                // [NEW] post-processing: bloom for neon districts + rain droplets.
                // Update targets each frame from weather + neon district density,
                // then render through the composer (or plain renderer if disabled).
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

                // [NEW] record real frame budget each frame
                telemetry.recordFrame(delta, renderer.info.render.calls, renderer.info.render.triangles);

                // [CI] Mark readiness once the first frame has actually drawn.
                if (!window.__worldloop.ready) {
                    const s = telemetry.snapshot();
                    window.__worldloop.drawCalls = s.drawCalls;
                    window.__worldloop.fps = s.fps;
                    window.__worldloop.triangles = s.triangles;
                    window.__worldloop.ready = s.frames > 0 && s.drawCalls > 0;
                }
                teleTicker += delta;
                if (teleTicker >= 0.5 && teleDiv) {
                    teleTicker = 0;
                    const s = telemetry.snapshot();
                    teleDiv.innerHTML = 'fps ' + s.fps + ' | dc ' + s.drawCalls;
                }
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
