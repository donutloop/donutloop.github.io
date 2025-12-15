import * as THREE from 'three';
import { createCarMesh } from './car_models.js';
import { disposeCar, getRandomCarType } from './utils.js';

export class ParkingSystem {
    constructor(scene, citySize, blockSize, roadWidth) {
        this.scene = scene;
        this.citySize = citySize;
        this.blockSize = blockSize;
        this.roadWidth = roadWidth;
        this.chunkCars = new Map(); // "cx,cz" -> Array of car meshes (or objects)
        this.cars = [];
        // No init loop
    }

    loadChunk(cx, cz) {
        // Spawn parked cars for this chunk
        // Reuse logic but applied to single chunk

        const carsList = [];

        const tileSize = this.blockSize + this.roadWidth;
        const xPos = cx * tileSize;
        const zPos = cz * tileSize;

        // Logic from before:
        // Park on the +X side of this block (Road running along Z)
        // Park on the +Z side of this block (Road running along X)

        // Note: Creating chunks based on center xPos, zPos which is the "Block" center?
        // createCityChunk (world.js) treats xPos, zPos as center of tile.
        // So xPos, zPos is center of block.

        // +X Axis Road (Horizontal)
        // Road runs along X.
        this.spawnRowInChunk(
            xPos, zPos,
            true, // isXRow
            carsList,
            tileSize
        );

        // +Z Axis Road (Vertical)
        // Road runs along Z.
        this.spawnRowInChunk(
            xPos, zPos,
            false, // isXRow
            carsList,
            tileSize
        );

        this.chunkCars.set(`${cx},${cz}`, carsList);
        // Sync flat list
        carsList.forEach(c => this.cars.push(c));
    }

    unloadChunk(cx, cz) {
        const key = `${cx},${cz}`;
        if (this.chunkCars.has(key)) {
            const cars = this.chunkCars.get(key);
            cars.forEach(car => {
                if (car.isPlayerDriven) return; // Player has stolen this car

                this.scene.remove(car);
                disposeCar(car); // Dispose resources

                // Remove from flat list
                const idx = this.cars.indexOf(car);
                if (idx > -1) this.cars.splice(idx, 1);
            });
            this.chunkCars.delete(key);
        }
    }

    // Helper to get all parking colliders for active chunks
    getColliders() {
        const colliders = [];
        for (const cars of this.chunkCars.values()) {
            cars.forEach(car => {
                if (!car.isPlayerDriven) { // Skip if player is driving this car
                    colliders.push(new THREE.Box3().setFromObject(car));
                }
            });
        }
        return colliders;
    }

    spawnRowInChunk(chunkX, chunkZ, isXRow, list, size) {
        // Dynamic calculation based on configured road width (this.roadWidth) and chunk size (size).
        // size = 124, roadWidth = 24.
        // Intersection extent = roadWidth / 2 = 12.
        // Chunk boundary = size / 2 = 62.
        // We want to park from (Intersection + Buffer) to (ChunkBoundary).
        // And also negative side.

        const halfWidth = this.roadWidth / 2;
        const halfSize = size / 2;
        const buffer = 2.0; // Distance from intersection crosswalk

        // Define linear zones for this row
        // Zone 1: Negative Side [-HalfSize, -HalfWidth - Buffer]
        // Zone 2: Positive Side [HalfWidth + Buffer, HalfSize]
        const zones = [
            { start: -halfSize, end: -halfWidth - buffer },
            { start: halfWidth + buffer, end: halfSize }
        ];

        // "Slot" size average.
        // Cars are ~4.5m long. Trucks 8m.
        // We can step by ~7m to allow mixed usage, or pack tighter and skip if collision.
        // Let's use a step of 10.0m to reduce density (approx 1.5 car lengths).
        const stepSize = 10.0;

        // Better lateral placement:
        // Road edge is at halfWidth (12).
        // Car width ~2.2.
        // Center should be roughly at halfWidth - 1.5 ( = 10.5).
        // This puts outer edge at 11.6 (0.4 gap to curb) and inner at 9.4.
        const lateralOffset = halfWidth - 1.4;

        zones.forEach(zone => {
            // Iterate through the zone in steps
            // We start from 'start' + random offset to avoid grid-look?
            // Or just iterate.

            // Allow small random jitter in start position to break uniformity across chunks
            const jitter = Math.random() * 2.0;

            for (let d = zone.start + jitter + 2; d < zone.end - 2; d += stepSize) {
                // Determine candidate position
                // d is offset along the road axis from chunk center

                // Randomize lateral side (Left or Right side of the street)
                // Actually, we should park on BOTH sides of the street?
                // Real streets have parking on both sides.
                // Loop for both sides: -lateralOffset and +lateralOffset

                [lateralOffset, -lateralOffset].forEach(side => {
                    if (Math.random() < 0.5) return; // 50% empty spots for performance

                    const type = getRandomCarType();
                    const dims = this.getDimensions(type);

                    let px, pz, rot;

                    // Small random noise to 'd' so they aren't perfectly spaced
                    const posNoise = (Math.random() - 0.5) * 1.0;
                    const actualD = d + posNoise;

                    // Stop if we exceed zone
                    if (actualD + dims.l / 2 > zone.end) return;

                    if (isXRow) {
                        // Road along X.
                        // offset 'd' is X. 'side' is Z.
                        px = chunkX + actualD;
                        pz = chunkZ + side;
                        // Rotation: If on +Z side (side > 0), faces -X (PI/2)? 
                        // Actually standard parking is facing traffic.
                        // Traffic on +Z side (right lane) moves +X ? 
                        // Let's just align parallel. 
                        // Rot 0 = facing -Z? 
                        // We want car length along X.
                        // If rot = 0, length is along Z.
                        // So we need PI/2 or -PI/2.
                        rot = Math.random() > 0.5 ? Math.PI / 2 : -Math.PI / 2;
                    } else {
                        // Road along Z.
                        // offset 'd' is Z. 'side' is X.
                        px = chunkX + side;
                        pz = chunkZ + actualD;
                        // We want car length along Z.
                        // Rot 0 or PI.
                        rot = Math.random() > 0.5 ? 0 : Math.PI;
                    }

                    // Collision Box
                    let cw, cl;
                    // Dimensions are local w/l. 
                    // If rotated 90 (X-row), width on X is Length.
                    if (isXRow) { cw = dims.l; cl = dims.w; }
                    else { cw = dims.w; cl = dims.l; }

                    const boxBuffer = 0.2;
                    const box = {
                        minX: px - cw / 2 - boxBuffer,
                        maxX: px + cw / 2 + boxBuffer,
                        minZ: pz - cl / 2 - boxBuffer,
                        maxZ: pz + cl / 2 + boxBuffer
                    };

                    // Check collisions (inc. other parked cars in this list)
                    // Note: checkCollision is defined in scope above in original code, 
                    // but we are replacing the whole method. 
                    // I need to ensure checkCollision is available or inline it.
                    // The original checkCollision was inside spawnRowInChunk? 
                    // Yes. I need to re-implement it inside this scope or make it a method.
                    // I will re-implement it inline for simplicity or helper.

                    if (!this.isBlocked(box, list)) {
                        const car = createCarMesh(type);
                        car.position.set(px, 0, pz);
                        car.rotation.y = rot;
                        this.scene.add(car);
                        list.push(car);
                    }
                });
            }
        });
    }

    isBlocked(box, list) {
        for (let car of list) {
            const dims = this.getDimensions(car.userData.type);
            const cx = car.position.x;
            const cz = car.position.z;
            const rot = car.rotation.y;

            let bw, bl;
            if (Math.abs(rot) < 0.1 || Math.abs(rot - Math.PI) < 0.1) {
                bw = dims.w; bl = dims.l;
            } else {
                bw = dims.l; bl = dims.w;
            }

            const buffer = 0.5;
            const existing = {
                minX: cx - bw / 2 - buffer,
                maxX: cx + bw / 2 + buffer,
                minZ: cz - bl / 2 - buffer,
                maxZ: cz + bl / 2 + buffer
            };

            if (box.maxX > existing.minX && box.minX < existing.maxX &&
                box.maxZ > existing.minZ && box.minZ < existing.maxZ) {
                return true;
            }
        }
        return false;
    }

    getDimensions(type) {
        // Updated for GIANT TRUCKS and realistic sizes
        switch (type) {
            case 'truck': return { w: 3.5, l: 8.0 }; // Giant
            case 'suv': return { w: 2.5, l: 5.0 };
            case 'sport': return { w: 2.2, l: 4.6 };
            default: return { w: 2.1, l: 4.4 }; // Sedan
        }
    }

    update(delta) {
        // Static
    }
}
