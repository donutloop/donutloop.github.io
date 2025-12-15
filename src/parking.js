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
        // Safe zones relative to center: [-17, -8] and [8, 17]
        // Intersection is roughly [-7, 7].
        // We will try to spawn 1 car in each valid zone per side if possible.
        // NOW WITH COLLISION CHECKS

        const safeZones = [
            { start: -16, end: -8 },
            { start: 8, end: 16 }
        ];

        // We track occupied boxes in this chunk generation step.
        // box: { minX, maxX, minZ, maxZ }
        const occupied = [];

        // Add "virtual" boxes for the intersection roads to prevent corner overlap?
        // Actually, just ensuring we don't overlap with *other* parked cars in this function call is a good start.
        // But X-row vs Z-row overlaps happen at corners.
        // We can just accumulate `occupied` across the two calls if we pass it in?
        // But `occupied` is local to this row call currenty.
        // Fix: Make `occupied` shared or check against `list`?
        // `list` contains meshes. We can compute box from mesh position/rotation.

        // Helper to check collision
        const checkCollision = (box) => {
            // box: {minX, maxX, minZ, maxZ}

            // Check against existing cars in `list`
            for (let car of list) {
                // Get box of existing car
                // We know visual dimensions... roughly.
                // Or we can store it in userData?
                // Let's compute it.

                const dims = this.getDimensions(car.userData.type);
                const cx = car.position.x;
                const cz = car.position.z;
                const rot = car.rotation.y;

                // Effective Width/Length depends on rotation
                // If rot is roughly 0 or PI, Width is width, Length is length.
                // If rot is PI/2, Width is length, Length is width.

                let effectiveW, effectiveL;
                if (Math.abs(rot) < 0.1 || Math.abs(rot - Math.PI) < 0.1) {
                    effectiveW = dims.w;
                    effectiveL = dims.l;
                } else {
                    effectiveW = dims.l;
                    effectiveL = dims.w;
                }

                // Add buffer
                const buffer = 1.0;
                const existingBox = {
                    minX: cx - effectiveW / 2 - buffer,
                    maxX: cx + effectiveW / 2 + buffer,
                    minZ: cz - effectiveL / 2 - buffer,
                    maxZ: cz + effectiveL / 2 + buffer
                };

                if (box.maxX > existingBox.minX && box.minX < existingBox.maxX &&
                    box.maxZ > existingBox.minZ && box.minZ < existingBox.maxZ) {
                    return true; // Collision
                }
            }
            return false;
        };

        safeZones.forEach(zone => {
            // Try to spawn multiple cars?
            // With Real Distance, giant trucks take up 8m. Zone is 8m long (8 to 16).
            // So max 1 truck per zone.
            // Small cars (4m). 2 might fit with buffer.
            // Let's try to fit as many as possible?
            // Or just random attempts.

            const attempts = 5;
            for (let i = 0; i < attempts; i++) {
                if (Math.random() < 0.3) continue; // Chance to skip

                const type = getRandomCarType();
                const dims = this.getDimensions(type); // {w, l}

                // Random Pos
                const offsetAlongRoad = zone.start + Math.random() * (zone.end - zone.start);
                const parkOffset = this.roadWidth / 2 - 1.0; // Near curb
                const sideOffset = Math.random() > 0.5 ? parkOffset : -parkOffset;

                let px, pz, rot;

                if (isXRow) {
                    px = chunkX + offsetAlongRoad;
                    pz = chunkZ + sideOffset;
                    rot = Math.random() > 0.5 ? Math.PI / 2 : -Math.PI / 2;
                } else {
                    px = chunkX + sideOffset;
                    pz = chunkZ + offsetAlongRoad;
                    rot = Math.random() > 0.5 ? 0 : Math.PI;
                }

                // Create Candidate Box
                let cw, cl;
                if (isXRow) { cw = dims.l; cl = dims.w; } // Rotated 90
                else { cw = dims.w; cl = dims.l; }

                const buffer = 0.5; // Slight buffer for self
                const box = {
                    minX: px - cw / 2 - buffer,
                    maxX: px + cw / 2 + buffer,
                    minZ: pz - cl / 2 - buffer,
                    maxZ: pz + cl / 2 + buffer
                };

                if (!checkCollision(box)) {
                    // Spawn
                    const car = createCarMesh(type);
                    car.position.set(px, 0, pz);
                    car.rotation.y = rot;
                    this.scene.add(car);
                    list.push(car);

                    // Since we successfully added 1, maybe stop for this zone to prevent overcrowding visual?
                    // User wants "Real distance".
                    // If we pack them tightly, it's realistic city parking.
                    // But simpler logic: 1 per slot is fine if slots are distinct.
                    // But we used random float position.
                    // Let's break after 1 successful spawn per zone for now to be safe, 
                    // unless we want really dense parking.
                    // Giant trucks need space.
                    break;
                }
            }
        });
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
