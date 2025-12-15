import * as THREE from 'three';
import { createCarMesh } from './car_models.js';
import { disposeCar } from './utils.js';

export class TrafficSystem {
    constructor(scene, citySize, blockSize, roadWidth) {
        this.scene = scene;
        this.citySize = citySize;
        this.blockSize = blockSize;
        this.roadWidth = roadWidth;
        this.chunkCars = new Map();
        this.cars = []; // Flat list for easy loop
        this.carSpeed = 10;
        // No init() call here, wait for ChunkManager
    }

    loadChunk(cx, cz) {
        // Only spawn traffic in City chunks (near 0,0 or high noise)
        // We reuse the simple logic: if it's a city chunk, spawn cars.
        // For now, let's assume we pass a flag or just blindly spawn and see.
        // Better: let ChunkManager decide? Or just spawn everywhere for test.
        // Let's spawn everywhere but fewer cars in wasteland if we could detect it.
        // For now, consistent traffic.

        const chunkCarsList = [];
        const numCars = 3; // Cars per chunk

        const chunkSize = this.blockSize + this.roadWidth; // 34
        const xOffset = cx * chunkSize;
        const zOffset = cz * chunkSize;

        for (let i = 0; i < numCars; i++) {
            const type = ['sedan', 'suv', 'truck', 'sport'][Math.floor(Math.random() * 4)];
            const carGroup = createCarMesh(type);

            const state = this.spawnCarInChunk(carGroup, xOffset, zOffset, chunkSize, chunkCarsList);

            if (state && (Math.abs(state.pos.x - xOffset) > 7 || Math.abs(state.pos.z - zOffset) > 7)) {
                this.scene.add(carGroup);
                chunkCarsList.push({
                    mesh: carGroup,
                    axis: state.axis,
                    direction: state.direction,
                    // Bounds for this car to despawn/wrap?
                    // actually simpler to just wrap within whole chunk 34x34
                    chunkX: xOffset,
                    chunkZ: zOffset,
                    chunkSize: chunkSize
                });
            } else {
                // Clean up if spawns in intersection (roughly, though we should really check inside spawnCarInChunk)
                // Actually spawnCarInChunk returns random pos
            }
        }
        this.chunkCars.set(`${cx},${cz}`, chunkCarsList);
        // Sync flat list
        chunkCarsList.forEach(c => this.cars.push(c));
    }

    unloadChunk(cx, cz) {
        const key = `${cx},${cz}`;
        if (this.chunkCars.has(key)) {
            const chunkCars = this.chunkCars.get(key);
            chunkCars.forEach(car => {
                this.scene.remove(car.mesh);
                disposeCar(car.mesh); // Dispose resources
                // Remove from flat list
                const idx = this.cars.indexOf(car);
                if (idx > -1) this.cars.splice(idx, 1);
            });
            this.chunkCars.delete(key);
        }
    }

    spawnCarInChunk(car, chunkX, chunkZ, size, existingCars = []) {
        const attempts = 10;
        const laneOffset = 3.0;

        for (let i = 0; i < attempts; i++) {
            const axis = Math.random() > 0.5 ? 'x' : 'z';
            const direction = Math.random() > 0.5 ? 1 : -1;
            const pos = new THREE.Vector3();

            if (axis === 'x') {
                pos.set(
                    chunkX + (Math.random() - 0.5) * size,
                    0,
                    chunkZ + (direction === 1 ? laneOffset : -laneOffset) + (Math.random() - 0.5) * 2
                );
            } else {
                pos.set(
                    chunkX + (direction === 1 ? -laneOffset : laneOffset) + (Math.random() - 0.5) * 2,
                    0,
                    chunkZ + (Math.random() - 0.5) * size
                );
            }

            // Check overlap
            let overlap = false;
            for (const other of existingCars) {
                const dist = pos.distanceTo(other.mesh.position);
                if (dist < 8) { // Minimum distance between cars
                    overlap = true;
                    break;
                }
            }

            if (!overlap) {
                car.position.copy(pos);
                if (axis === 'x') {
                    car.rotation.y = direction > 0 ? Math.PI / 2 : -Math.PI / 2;
                } else {
                    car.rotation.y = direction > 0 ? 0 : Math.PI;
                }
                return { axis, direction, pos: pos.clone() };
            }
        }

        // Fallback if no spot found (spawn far away or skip)
        // For now, just dump at 0,0 relative (bad) or rely on luck.
        // Better: return null and don't spawn
        return null;
    }

    setDependencies(player, parkingSystem) {
        this.player = player;
        this.parkingSystem = parkingSystem;
    }

    update(delta) {
        // Collect potential obstacles
        // Optimization: For N=30-50 cars, a flat check is okay, but we can do better by only checking near objects.
        // For now, simple list is fine.
        let dynamicObstacles = [];
        if (this.parkingSystem) {
            dynamicObstacles = dynamicObstacles.concat(this.parkingSystem.cars);
        }
        // Player
        if (this.player && !this.player.isDriving) {
            // Treat player as a small object
            dynamicObstacles.push({
                isPlayer: true,
                position: this.player.camera.position,
                isObject: true // flag to distinguish from meshes if needed
            });
        }

        // Update all active chunks
        for (const cars of this.chunkCars.values()) {
            cars.forEach(car => {
                if (car.isPlayerDriven) return;

                // Collision Check
                if (this.checkBlocked(car, dynamicObstacles)) {
                    // Brake / Stop
                    return;
                }

                // Move
                const move = car.direction * this.carSpeed * delta;

                if (car.axis === 'x') {
                    car.mesh.position.x += move;
                    // Wrap within chunk
                    const localX = car.mesh.position.x - car.chunkX;
                    const bound = car.chunkSize / 2;
                    if (localX > bound) car.mesh.position.x -= car.chunkSize;
                    else if (localX < -bound) car.mesh.position.x += car.chunkSize;
                } else {
                    car.mesh.position.z += move;
                    // Wrap within chunk
                    const localZ = car.mesh.position.z - car.chunkZ;
                    const bound = car.chunkSize / 2;
                    if (localZ > bound) car.mesh.position.z -= car.chunkSize;
                    else if (localZ < -bound) car.mesh.position.z += car.chunkSize;
                }
            });
        }
    }

    checkBlocked(car, externalObstacles) {
        const checkDist = 12.0; // Distance to check ahead
        const laneWidth = 2.5; // Lateral leeway (cars are ~2 wide)

        const carPos = car.mesh.position;

        // Helper to check a list of potential obstacles
        const checkList = (list) => {
            for (const other of list) {
                if (other === car || other === car.mesh) continue; // Skip self

                // Setup other pos
                // 'other' might be:
                // 1. Another traffic car (wrapper object with .mesh) -> NO, loop iterates wrappers in this.cars? 
                //    Wait, externalObstacles has objects with .position?
                //    Let's standardize interactions.

                let otherPos;
                if (other.isPlayer) {
                    otherPos = other.position;
                } else if (other.mesh) {
                    // Traffic car wrapper or similar
                    otherPos = other.mesh.position;
                } else if (other.position) {
                    // Raw mesh (e.g. parked car or simple object)
                    otherPos = other.position;
                } else {
                    continue;
                }

                // Distance check (Manhattan or Euclidian? Simple Axis checks are better)
                // Use relative coordinates based on car direction

                let forwardDist = 0;
                let lateralDist = 0;

                if (car.axis === 'x') {
                    // Moving along X
                    // lateral is delta Z
                    lateralDist = Math.abs(otherPos.z - carPos.z);

                    // forward is delta X taking direction into account
                    // if dir is 1, otherX - carX should be > 0
                    const dx = otherPos.x - carPos.x;
                    if (car.direction === 1) {
                        forwardDist = dx;
                    } else {
                        forwardDist = -dx;
                    }

                } else {
                    // Moving along Z
                    // lateral is delta X
                    lateralDist = Math.abs(otherPos.x - carPos.x);

                    // forward is delta Z
                    const dz = otherPos.z - carPos.z;
                    if (car.direction === 1) {
                        forwardDist = dz;
                    } else {
                        forwardDist = -dz;
                    }
                }

                // Check Bounds
                if (forwardDist > 0 && forwardDist < checkDist && lateralDist < laneWidth) {
                    return true;
                }
            }
            return false;
        };

        // 1. Check other Traffic
        // Flattened list 'this.cars' contains all active traffic wrappers
        if (checkList(this.cars)) return true;

        // 2. Check Parked/Player
        if (checkList(externalObstacles)) return true;

        return false;
    }

    getColliders() {
        const colliders = [];
        for (const cars of this.chunkCars.values()) {
            cars.forEach(car => {
                if (!car.isPlayerDriven) {
                    colliders.push(new THREE.Box3().setFromObject(car.mesh));
                }
            });
        }
        return colliders;
    }
}
