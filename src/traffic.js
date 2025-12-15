import * as THREE from 'three';
import { createCarMesh } from './car_models.js';
import { disposeCar, getRandomCarType } from './utils.js';

export class TrafficSystem {
    constructor(scene, citySize, blockSize, roadWidth) {
        this.scene = scene;
        this.citySize = citySize;
        this.blockSize = blockSize;
        this.roadWidth = roadWidth;
        this.chunkCars = new Map();
        this.cars = []; // Flat list for easy loop
        // this.carSpeed = 10; // Removed global speed
        // No init() call here, wait for ChunkManager
    }

    // [NEW] Speed definitions
    getSpeedForType(type) {
        switch (type) {
            case 'sport': return 22;
            case 'sedan': return 15;
            case 'suv': return 12;
            case 'truck': return 8;
            default: return 10;
        }
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
            const type = getRandomCarType();
            const carGroup = createCarMesh(type);

            const state = this.spawnCarInChunk(carGroup, xOffset, zOffset, chunkSize, chunkCarsList);

            if (state && (Math.abs(state.pos.x - xOffset) > 7 || Math.abs(state.pos.z - zOffset) > 7)) {
                this.scene.add(carGroup);

                // Assign speed
                const speed = this.getSpeedForType(type);

                chunkCarsList.push({
                    mesh: carGroup,
                    axis: state.axis,
                    direction: state.direction,
                    speed: speed,
                    // Physics State
                    velocity: new THREE.Vector3(),
                    angularVelocity: 0,
                    stunned: 0,
                    health: 100,
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
                if (car.isPlayerDriven) {
                    // Start of 'Hero Car' arc.
                    // Player owns it now. Do not destroy.
                    // It remains in this.cars so traffic avoids it, which is correct.
                    return;
                }
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

    setDependencies(player, parkingSystem, trafficLightSystem, effectSystem) {
        this.player = player;
        this.parkingSystem = parkingSystem;
        this.trafficLightSystem = trafficLightSystem;
        this.effectSystem = effectSystem;
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

                // 1. PHYSICS STATE (Crash Reaction)
                if (car.stunned > 0) {
                    car.stunned -= delta;

                    // Move
                    car.mesh.position.add(car.velocity.clone().multiplyScalar(delta));

                    // Rotate
                    car.mesh.rotation.y += car.angularVelocity * delta;

                    // Friction
                    car.velocity.multiplyScalar(0.95);
                    car.angularVelocity *= 0.95;

                    // Stop check
                    if (car.velocity.length() < 0.1) {
                        car.stunned = 0; // Recover? Or stay dead?
                        // If health is low, stay disabled
                        if (car.health <= 0) car.stunned = 999;
                    }

                    // Effects
                    if (this.effectSystem && Math.random() < 0.1) {
                        if (car.health < 20) this.effectSystem.createFireEffect(car.mesh);
                        else if (car.health < 50) this.effectSystem.createSmokeEffect(car.mesh);
                    }
                    return; // Skip AI
                }

                // 2. AI DRIVING
                // Collision Check
                if (this.checkBlocked(car, dynamicObstacles)) {
                    // Brake / Stop
                    return;
                }

                // Move
                const move = car.direction * car.speed * delta;

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
        // 1. Check Traffic Light (New)
        if (this.trafficLightSystem) {
            // Are we near an intersection?
            // Chunk Center is intersection.
            const localX = car.mesh.position.x - car.chunkX;
            const localZ = car.mesh.position.z - car.chunkZ;

            // Stop Line distance from center.
            // Road Width 24. Stop line at +/- 14?
            const stopLine = this.roadWidth / 2 + 3; // 12 + 3 = 15
            const checkDist = 18; // Distance to start checking

            // If moving towards center and within range
            // We only care if we are ENTERING the intersection.
            // If |local| < stopLine, we are inside or passed it.
            // If |local| > stopLine and |local| < checkDist...

            let mustStop = false;

            // Derive integer grid coords from chunkX/Z
            // chunk size 54.
            const cx = Math.round(car.chunkX / car.chunkSize);
            const cz = Math.round(car.chunkZ / car.chunkSize);

            if (car.axis === 'x') {
                // Moving on X. Check localX.
                if (Math.abs(localX) > stopLine && Math.abs(localX) < checkDist) {
                    // Moving towards 0?
                    // If localX > 0 and direction -1 -> Yes
                    // If localX < 0 and direction 1 -> Yes
                    const movingIn = (localX > 0 && car.direction < 0) || (localX < 0 && car.direction > 0);

                    if (movingIn) {
                        const green = this.trafficLightSystem.checkGreenLight(cx, cz, 'x');
                        if (!green) mustStop = true;
                    }
                }
            } else {
                if (Math.abs(localZ) > stopLine && Math.abs(localZ) < checkDist) {
                    const movingIn = (localZ > 0 && car.direction < 0) || (localZ < 0 && car.direction > 0);
                    if (movingIn) {
                        const green = this.trafficLightSystem.checkGreenLight(cx, cz, 'z');
                        if (!green) mustStop = true;
                    }
                }
            }

            if (mustStop) return true;
        }

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
