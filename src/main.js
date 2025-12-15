import * as THREE from 'three';
import { initScene, animate } from './scene.js';
import { createWorld } from './world.js?v=FIX_MATS_3';
import { Player } from './player.js?v=SAFE_EXIT_1';
import { TrafficSystem } from './traffic.js?v=FIX_CAR_DESPAWN';
import { WeatherSystem } from './weather.js?v=100';
import { PedestrianSystem } from './pedestrians.js?v=100';
import { ParkingSystem } from './parking.js?v=FIX_CAR_DESPAWN';
import { AirplaneSystem } from './airplanes.js';
import { EffectSystem } from './effects.js';
import { TrafficLightSystem } from './traffic_lights.js'; // [NEW]
import { ChunkManager } from './chunk_manager.js?v=100';

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

        // Dependency Injection
        trafficSystem.setDependencies(player, parkingSystem, trafficLightSystem);
        pedestrianSystem.setDependencies(trafficLightSystem, parkingSystem);

        // Weather
        weatherSystem = new WeatherSystem(scene, worldData.directionalLight, worldData.ambientLight, worldData.materials);

        // Airplanes
        airplaneSystem = new AirplaneSystem(scene, worldData.citySize);
        window.airplaneSystem = airplaneSystem; // Debug: Expose to console

        console.log('Game Initialized with Infinite World + Populated Chunks');

        // Weather Controls
        window.addEventListener('keydown', (e) => {
            if (weatherSystem) { // Safety check
                if (e.key === '1') weatherSystem.setSunny();
                if (e.key === '2') weatherSystem.setRain();
                if (e.key === '3') weatherSystem.setSnow();
            }
        });

        // Instructions for weather
        const weatherInfo = document.createElement('div');
        weatherInfo.style.position = 'absolute';
        weatherInfo.style.top = '20px';
        weatherInfo.style.right = '20px';
        weatherInfo.style.color = '#fff';
        weatherInfo.style.fontFamily = 'monospace';
        weatherInfo.innerHTML = '[1] Sunny [2] Rain [3] Snow';
        document.body.appendChild(weatherInfo);

        // Version Indicator to debug cache issues
        // Version Indicator to debug cache issues
        const verDiv = document.createElement('div');
        verDiv.style.position = 'absolute';
        verDiv.style.bottom = '10px';
        verDiv.style.right = '10px';
        verDiv.style.color = 'white';
        verDiv.style.background = 'rgba(0,0,0,0.5)';
        verDiv.style.padding = '5px';
        verDiv.style.fontFamily = 'monospace';
        verDiv.innerHTML = 'v5.12.0 - PARKING OPTIMIZATION';
        document.body.appendChild(verDiv);

        animate(() => {
            const time = performance.now();
            const delta = (time - prevTime) / 1000;
            prevTime = time;

            try {
                if (chunkManager) {
                    chunkManager.update();
                    // Update player colliders continuously as chunks load/unload
                    if (player) {
                        player.colliders = chunkManager.getColliders();
                    }
                }

                if (player) player.update(delta);
                if (trafficSystem) trafficSystem.update(delta);
                if (trafficLightSystem) trafficLightSystem.update(delta);
                if (weatherSystem) weatherSystem.update(delta);
                if (pedestrianSystem) pedestrianSystem.update(delta);
                if (airplaneSystem) airplaneSystem.update(delta);

                // Update Effects
                if (effectSystem) effectSystem.update(delta);

                renderer.render(scene, camera);
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
