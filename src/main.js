import * as THREE from 'three';
import { initScene, animate } from './scene.js';
import { createWorld } from './world.js';
import { Player } from './player.js';
import { TrafficSystem } from './traffic.js';
import { WeatherSystem } from './weather.js';
import { PedestrianSystem } from './pedestrians.js';
import { ParkingSystem } from './parking.js';
import { AirplaneSystem } from './airplanes.js';
import { EffectSystem } from './effects.js';
import { TrafficLightSystem } from './traffic_lights.js'; // [NEW]
import { ChunkManager } from './chunk_manager.js';
import { FrameBudgetTelemetry } from './telemetry.js'; // [NEW] frame-budget telemetry

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
let trafficLightSystem; // [NEW]
let chunkManager;
let telemetry; // [NEW]

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

        // Initialize Systems
        trafficLightSystem = new TrafficLightSystem(scene, worldData.roadWidth, worldData.blockSize);
        trafficSystem = new TrafficSystem(scene, worldData.citySize, worldData.blockSize, worldData.roadWidth);
        parkingSystem = new ParkingSystem(scene, worldData.citySize, worldData.blockSize, worldData.roadWidth);
        pedestrianSystem = new PedestrianSystem(scene, worldData.citySize, worldData.blockSize, worldData.roadWidth);

        // Create Player
        player = new Player(camera, document.body, [], null, null, effectSystem);

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

        // Dependency Injection
        trafficSystem.setDependencies(player, parkingSystem, trafficLightSystem, effectSystem, pedestrianSystem);
        parkingSystem.setDependencies(effectSystem);
        pedestrianSystem.setDependencies(trafficLightSystem, parkingSystem, effectSystem);

        // Weather
        weatherSystem = new WeatherSystem(scene, worldData.directionalLight, worldData.ambientLight, worldData.materials);

        // Airplanes
        airplaneSystem = new AirplaneSystem(scene, worldData.citySize);
        window.airplaneSystem = airplaneSystem; // Debug: Expose to console

        // [NEW] Frame-budget telemetry (real FPS + draw calls from the renderer)
        telemetry = new FrameBudgetTelemetry();
        window.frameBudget = telemetry; // Machine-readable on the browser path too

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
                if (trafficSystem) trafficSystem.update(delta);
                if (trafficLightSystem) trafficLightSystem.update(delta);
                if (weatherSystem) {
                    const playerPos = player && player.mesh ? player.mesh.position : new THREE.Vector3();
                    weatherSystem.update(delta, playerPos);
                } if (pedestrianSystem) pedestrianSystem.update(delta);
                if (airplaneSystem) airplaneSystem.update(delta);

                // Update Effects
                if (effectSystem) effectSystem.update(delta);

                renderer.render(scene, camera);

                // [NEW] record real frame budget each frame
                telemetry.recordFrame(delta, renderer.info.render.calls, renderer.info.render.triangles);
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
