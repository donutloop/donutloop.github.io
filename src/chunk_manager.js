import * as THREE from 'three';
import { SimplexNoise } from './noise.js';
import { createCityChunk, createHighwayChunk } from './world.js';
import { createNatureChunk } from './terrain.js';
import { planet as sharedPlanet } from './planet.js';

/**
 * SpatialGrid — a uniform-grid broadphase (AAA-09).
 *
 * Static colliders (building/road Box3 from streamed chunks) are inserted ONCE
 * on loadChunk and removed on unloadChunk — never rebuilt per frame. A query
 * looks up only the grid cells overlapping a radius around a point, so the
 * per-frame hot path (player collision) visits a small local subset instead of
 * concatenating every collider in the render distance.
 *
 * Cell size matches the chunk grid (chunkSize), so a 1-chunk query touches at
 * most 3x3 cells. Colliders are bucketed by their AABB center cell.
 */
export class SpatialGrid {
    constructor(cellSize) {
        this.cellSize = cellSize;
        this.cells = new Map(); // "cx,cz" -> Box3[]
        this.count = 0;         // total colliders bucketed
    }

    key(bx, bz) {
        return `${Math.floor(bx / this.cellSize)},${Math.floor(bz / this.cellSize)}`;
    }

    insert(box) {
        const cx = (box.min.x + box.max.x) / 2;
        const cz = (box.min.z + box.max.z) / 2;
        const k = this.key(cx, cz);
        let arr = this.cells.get(k);
        if (!arr) { arr = []; this.cells.set(k, arr); }
        arr.push(box);
        this.count++;
    }

    remove(box) {
        const cx = (box.min.x + box.max.x) / 2;
        const cz = (box.min.z + box.max.z) / 2;
        const k = this.key(cx, cz);
        const arr = this.cells.get(k);
        if (!arr) return false;
        const i = arr.indexOf(box);
        if (i >= 0) { arr.splice(i, 1); this.count--; }
        if (arr.length === 0) this.cells.delete(k);
        return i >= 0;
    }

    /** All colliders whose cells overlap the radius box around (x,z). */
    query(x, z, radius) {
        const out = [];
        const minCx = Math.floor((x - radius) / this.cellSize);
        const maxCx = Math.floor((x + radius) / this.cellSize);
        const minCz = Math.floor((z - radius) / this.cellSize);
        const maxCz = Math.floor((z + radius) / this.cellSize);
        for (let cx = minCx; cx <= maxCx; cx++) {
            for (let cz = minCz; cz <= maxCz; cz++) {
                const arr = this.cells.get(`${cx},${cz}`);
                if (arr) out.push(...arr);
            }
        }
        return out;
    }

    clear() {
        this.cells.clear();
        this.count = 0;
    }
}

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
        this.chunkSize = worldData.blockSize + worldData.roadWidth; // 70 + 26 = 96
        // Stream 2 chunks out (25 chunks) instead of 3 (49): full-detail geometry
        // everywhere (see lodDistance below) is heavy, and the old 3-chunk radius
        // caused streaming hitches as the player drove. A 5x5-block detailed city
        // keeps the view substantial while halving the build/draw load.
        this.renderDistance = 2; // chunks radius (Reduced for performance)
        // Full-detail radius covers the ENTIRE streamed world: the square load
        // range spans up to R*sqrt(2) chunks, so lodDistance must be >= that.
        // The old lodDistance of 2 (vs renderDistance 3) greyed the whole outer
        // ring right at the viewport edge, making the city look grey as soon as
        // the player left block 0. With lodDistance covering the streamed area,
        // no visible building ever drops to the grey low-poly LOD.
        this.lodDistance = this.renderDistance * 2; // chunks radius (from PLAYER) inside which full detail

        // [AAA-09] Uniform-grid spatial broadphase for STATIC colliders.
        // Cells align to the chunk grid; colliders are inserted once on
        // loadChunk and removed on unloadChunk — never rebuilt per frame.
        this.grid = new SpatialGrid(this.chunkSize);

        // [AAA-10] Streaming budget + queue + chunk pooling.
        this.streamBudget = 3;   // max stream ops (loads + LOD rebuilds) per update
        this.pendingLoads = [];  // queue of {cx,cz,id} to stream on budget
        this.chunkPool = new Map(); // id -> chunkData reused on re-stream (no rebuild)

        // Seed randomness
        this.noise = SimplexNoise;

        // [PLANET-02] The planet is the only authority on what a place *is*.
        // ChunkManager used to hard-code `dist < 6 -> city`, `|cx|<=5 -> highway`,
        // else wasteland; now every chunk asks the surface model, so cities,
        // highways, forest, ocean and desert stream in from the same seed.
        this.planet = sharedPlanet({ chunkSize: this.chunkSize });
    }

    /** Classification for a chunk (planet-backed, cached by the planet). */
    classify(cx, cz) {
        return this.planet.classifyChunk(cx, cz, { roadWidth: this.worldData.roadWidth });
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

                if (!this.chunks.has(id) && !this.pendingLoads.some(p => p.id === id)) {
                    // [AAA-10] Streaming budget: enqueue, don't stream yet.
                    this.pendingLoads.push({ cx, cz, id });
                }
            }
        }

        // [AAA-10] Drain the streaming queue up to the per-frame budget.
        let streams = 0;
        while (this.pendingLoads.length && streams < this.streamBudget) {
            const job = this.pendingLoads.shift();
            this.loadChunk(job.cx, job.cz);
            streams++;
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
            if (chunk.lodLevel !== required && streams < this.streamBudget) {
                this.unloadChunk(id);
                this.loadChunk(cx, cz);
                streams++; // [AAA-10] LOD rebuild counts against the streaming budget
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
        const id = `${cx},${cz}`;
        // One call answers everything: city / road / nature, biome, ecology,
        // the governing settlement and the surface height.
        const cls = this.classify(cx, cz);
        const xPos = cx * this.chunkSize;
        const zPos = cz * this.chunkSize;

        const pooled = this.chunkPool.get(id);
        let chunkData;

        if (pooled && pooled.type === cls.type) {
            // [AAA-10] Chunk pooling — reuse streamed geometry instead of rebuilding.
            this.chunkPool.delete(id);
            chunkData = pooled;
            this._populate(cx, cz, cls, chunkData);
        } else if (cls.type === 'city') {
            // LOD is player-relative: the detailed area follows the car, only the
            // far fringe of the visible field drops to grey silhouettes.
            let lodLevel = 0;
            if (this.player) {
                const p = this.player.camera.position;
                lodLevel = this.detailLevel(cx, cz, Math.floor(p.x / this.chunkSize), Math.floor(p.z / this.chunkSize));
            }
            chunkData = createCityChunk(xPos, zPos, this.chunkSize, this.worldData.roadWidth, lodLevel);
            chunkData.lodLevel = lodLevel;
            chunkData.type = 'city';
            // Spawn Population (Full detail only — far LOD chunks stay silent for perf)
            if (lodLevel === 0) this._populate(cx, cz, cls, chunkData);
        } else if (cls.type === 'road') {
            const type = cls.roadAxis || 'x';
            chunkData = createHighwayChunk(xPos, zPos, this.chunkSize, this.worldData.roadWidth, type);
            chunkData.type = 'road';
            chunkData.biome = 'highway';
            if (this.trafficSystem) this.trafficSystem.loadChunk(cx, cz, `highway_${type}`);
        } else {
            const lodLevel = this.player
                ? this.detailLevel(cx, cz,
                    Math.floor(this.player.camera.position.x / this.chunkSize),
                    Math.floor(this.player.camera.position.z / this.chunkSize))
                : 0;
            chunkData = createNatureChunk(xPos, zPos, this.chunkSize, this.planet, cls, {
                lod: lodLevel, waterLevel: this.planet.seaLevel,
            });
            chunkData.lodLevel = lodLevel;
        }

        // Add meshes to scene
        if (chunkData.mesh) this.scene.add(chunkData.mesh);

        this.chunks.set(id, chunkData);

        // [AAA-09] Bucket static colliders into the broadphase grid ONCE on
        // stream — never per frame. Each Box3 is inserted by its center cell.
        if (chunkData.colliders) {
            for (const box of chunkData.colliders) this.grid.insert(box);
        }
        return chunkData;
    }

    /**
     * Populate a freshly streamed (or re-streamed from the pool) chunk. Cities
     * get cars, parking, pedestrians, lights and cranes; inter-city roads get
     * through traffic only; the wilds are left to the wildlife.
     */
    _populate(cx, cz, cls, chunkData) {
        if (cls.type === 'city') {
            // Pass a biome STRING, NOT the chunkData object: traffic.loadChunk
            // calls biome.startsWith('highway'), and an object throws
            // `n.startsWith is not a function`.
            if (this.trafficSystem) this.trafficSystem.loadChunk(cx, cz, 'city');
            if (this.parkingSystem) this.parkingSystem.loadChunk(cx, cz);
            if (this.pedestrianSystem) this.pedestrianSystem.loadChunk(cx, cz);
            if (this.trafficLightSystem) this.trafficLightSystem.loadChunk(cx, cz);
            if (this.constructionSystem) this.constructionSystem.loadChunk(cx, cz, chunkData);
        } else if (cls.type === 'road') {
            if (this.trafficSystem) this.trafficSystem.loadChunk(cx, cz, `highway_${cls.roadAxis || 'x'}`);
        }
    }


    unloadChunk(id) {
        const chunk = this.chunks.get(id);
        if (chunk) {
            if (chunk.mesh) {
                this.scene.remove(chunk.mesh);
            }

            // [AAA-09] Drop the chunk's static colliders out of the broadphase grid.
            if (chunk.colliders) {
                for (const box of chunk.colliders) this.grid.remove(box);
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

        // [AAA-10] Pool the chunkData (mesh + colliders still attached) so a
        // re-stream of this exact chunk id reuses geometry instead of rebuilding.
        this.chunkPool.set(id, chunk);
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

    /**
     * [AAA-09] Broadphase collision query — replaces the per-frame
     * getColliders() concat on the hot path.
     *
     * Static chunk colliders come from the uniform grid: only the grid cells
     * overlapping a radius box around (x,z) are visited, so the returned array
     * is a small LOCAL subset instead of every collider in the render distance.
     * Dynamic colliders (parking + traffic) are appended distance-culled, since
     * they move per frame and are not bucketed in the static grid.
     */
    getCollidersNear(x, z, radius = this.chunkSize) {
        // Static broadphase subset (uniform grid).
        const near = this.grid.query(x, z, radius);

        // Dynamic colliders within the query radius (distance-culled).
        if (this.parkingSystem) {
            for (const box of this.parkingSystem.getColliders()) {
                const cx = (box.min.x + box.max.x) / 2;
                const cz = (box.min.z + box.max.z) / 2;
                if (Math.abs(cx - x) <= radius && Math.abs(cz - z) <= radius) near.push(box);
            }
        }
        if (this.trafficSystem) {
            for (const box of this.trafficSystem.getColliders()) {
                const cx = (box.min.x + box.max.x) / 2;
                const cz = (box.min.z + box.max.z) / 2;
                if (Math.abs(cx - x) <= radius && Math.abs(cz - z) <= radius) near.push(box);
            }
        }

        return near;
    }
}
