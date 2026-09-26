import * as THREE from 'three';
import { SimplexNoise } from './noise.js';
import { createCityChunk, createWastelandChunk, createHighwayChunk } from './world.js'; // We will assume these exist

export class ChunkManager {
    constructor(scene, player, worldData, trafficSystem, parkingSystem, pedestrianSystem, trafficLightSystem, constructionSystem) {
        this.scene = scene;
        this.player = player;
        this.worldData = worldData;
        this.trafficSystem = trafficSystem;
        this.parkingSystem = parkingSystem;
        this.pedestrianSystem = pedestrianSystem;
        this.trafficLightSystem = trafficLightSystem;
        this.constructionSystem = constructionSystem;

        this.chunks = new Map(); // "x,z" -> chunkData
        this.chunkSize = worldData.blockSize + worldData.roadWidth; // Should be 20 + 14 = 34
        this.renderDistance = 3; // chunks radius (Reduced for performance)
        this.lodDistance = 2; // chunks radius (from PLAYER) inside which full detail; farther city chunks use low-poly LOD

        // Seed randomness
        this.noise = SimplexNoise;
    }

    update() {
        if (!this.player) return;

        const playerPos = this.player.camera.position;
        const currentChunkX = Math.floor(playerPos.x / this.chunkSize);
        const currentChunkZ = Math.floor(playerPos.z / this.chunkSize);

        // Identify coords that should be loaded
        const activeIds = new Set();

        for (let x = -this.renderDistance; x <= this.renderDistance; x++) {
            for (let z = -this.renderDistance; z <= this.renderDistance; z++) {
                const cx = currentChunkX + x;
                const cz = currentChunkZ + z;
                const id = `${cx},${cz}`;
                activeIds.add(id);

                if (!this.chunks.has(id)) {
                    this.loadChunk(cx, cz);
                    return; // Throttle: Load only 1 chunk per frame
                }
            }
        }

        // LOD transitions — rebuild city chunks that crossed the detail boundary.
        // Detail level is measured from the PLAYER's chunk (not the world origin),
        // so the detailed area follows the car and distant chunks degrade to grey
        // silhouettes instead of the whole visible field being grey.
        for (const [id, chunk] of this.chunks) {
            if (chunk.lodLevel === undefined) continue; // highway/wasteland have no LOD
            const parts = id.split(',');
            const cx = parseInt(parts[0], 10);
            const cz = parseInt(parts[1], 10);
            const required = this.detailLevel(cx, cz, currentChunkX, currentChunkZ);
            if (chunk.lodLevel !== required) {
                this.unloadChunk(id);
                this.loadChunk(cx, cz);
                return; // Throttle: only 1 LOD rebuild per frame
            }
        }

        // Unload old chunks
        for (const [id, chunk] of this.chunks) {
            if (!activeIds.has(id)) {
                this.unloadChunk(id);
            }
        }
    }



    loadChunk(cx, cz) {
        // Determine Biome
        // Use noise scale 0.1 for broad biomes
        const noiseVal = this.noise.noise2D(cx * 0.1, cz * 0.1);

        // Center (0,0) is always city
        // Center (0,0) is always city
        const dist = Math.sqrt(cx * cx + cz * cz);
        // Strict City Limit: Radius 6 (approx 200m).
        const isCity = dist < 6;

        // Highway Detection
        // X-Highway (East/West): Aligned with Z-axis of city (-5 to 5)
        const isHighwayX = !isCity && Math.abs(cz) <= 5;
        // Z-Highway (North/South): Aligned with X-axis of city (-5 to 5)
        const isHighwayZ = !isCity && Math.abs(cx) <= 5;

        // Combined Highway Flag
        const isHighway = isHighwayX || isHighwayZ;

        // Offset position
        const xPos = cx * this.chunkSize;
        const zPos = cz * this.chunkSize;

        let chunkData;

        if (isCity) {
            // LOD is player-relative: the detailed area follows the car, only the
            // far fringe of the visible field drops to grey silhouettes.
            let lodLevel = 0;
            if (this.player) {
                const p = this.player.camera.position;
                const pcx = Math.floor(p.x / this.chunkSize);
                const pcz = Math.floor(p.z / this.chunkSize);
                lodLevel = this.detailLevel(cx, cz, pcx, pcz);
            } else {
                lodLevel = dist > this.lodDistance ? 1 : 0;
            }
            chunkData = createCityChunk(xPos, zPos, this.chunkSize, this.worldData.roadWidth, lodLevel);
            chunkData.lodLevel = lodLevel;
            // Spawn Population (Full detail only — far LOD chunks stay silent for perf)
            if (lodLevel === 0) {
                if (this.trafficSystem) this.trafficSystem.loadChunk(cx, cz, 'city');
                if (this.parkingSystem) this.parkingSystem.loadChunk(cx, cz);
                if (this.pedestrianSystem) this.pedestrianSystem.loadChunk(cx, cz);
                if (this.trafficLightSystem) this.trafficLightSystem.loadChunk(cx, cz);
            this.constructionSystem.loadChunk(cx, cz, chunkData);
            }

        } else if (isHighway) {
            // Determine type
            let type = 'x';
            if (isHighwayX && isHighwayZ) type = 'cross';
            else if (isHighwayZ) type = 'z';
            // else type 'x' (default)

            chunkData = createHighwayChunk(xPos, zPos, this.chunkSize, this.worldData.roadWidth, type);

            // Spawn Population (Traffic Only)
            // Pass specific highway biome/type to traffic system
            if (this.trafficSystem) this.trafficSystem.loadChunk(cx, cz, `highway_${type}`);

            // No Parking/Pedestrians on highway

        } else {
            chunkData = createWastelandChunk(xPos, zPos, this.chunkSize);
            // Maybe spawn sparse traffic/elements in wasteland later?
        }

        // Add meshes to scene
        if (chunkData.mesh) this.scene.add(chunkData.mesh);

        this.chunks.set(`${cx},${cz}`, chunkData);
    }

    unloadChunk(id) {
        const chunk = this.chunks.get(id);
        if (chunk) {
            if (chunk.mesh) {
                this.scene.remove(chunk.mesh);
            }

            // Unload population
            // Parse id back to cx, cz
            const parts = id.split(',');
            const cx = parseInt(parts[0]);
            const cz = parseInt(parts[1]);

            if (this.trafficSystem) this.trafficSystem.unloadChunk(cx, cz);
            if (this.parkingSystem) this.parkingSystem.unloadChunk(cx, cz);
            if (this.pedestrianSystem) this.pedestrianSystem.unloadChunk(cx, cz);
            if (this.trafficLightSystem) this.trafficLightSystem.unloadChunk(cx, cz);
            this.constructionSystem.unloadChunk(cx, cz);
        }
        this.chunks.delete(id);
    }

    // Detail level for a city chunk, measured as Euclidean distance from the
    // PLAYER's chunk. Returns 1 (low-poly grey silhouette) beyond lodDistance,
    // 0 (full detail/colors) within it — so the detailed area tracks the car.
    detailLevel(cx, cz, pcx, pcz) {
        const dx = cx - pcx;
        const dz = cz - pcz;
        const d = Math.sqrt(dx * dx + dz * dz);
        return d > this.lodDistance ? 1 : 0;
    }

    getColliders() {
        // Gather all colliders from active chunks
        let allColliders = [];
        for (const chunk of this.chunks.values()) {
            if (chunk.colliders) {
                allColliders = allColliders.concat(chunk.colliders);
            }
        }

        // Add Parking colliders (they are dynamic but static relative to physics)
        if (this.parkingSystem) {
            const parkingColliders = this.parkingSystem.getColliders();
            allColliders = allColliders.concat(parkingColliders);
        }
        if (this.trafficSystem) {
            const trafficColliders = this.trafficSystem.getColliders();
            allColliders = allColliders.concat(trafficColliders);
        }

        return allColliders;
    }
}
