import * as THREE from 'three';

export class PedestrianSystem {
    constructor(scene, citySize, blockSize, roadWidth) {
        this.scene = scene;
        this.citySize = citySize;
        this.blockSize = blockSize;
        this.roadWidth = roadWidth;
        this.chunkPeds = new Map();
        this.peds = []; // [NEW] Flat list
        // Settings
        this.maxSpeed = 2.0;
        this.maxForce = 5.0; // Steering force limit

        // Shared Geometries/Materials
        this.bodyGeom = new THREE.BoxGeometry(0.5, 0.8, 0.3);
        this.headGeom = new THREE.BoxGeometry(0.3, 0.3, 0.3);
        this.legGeom = new THREE.BoxGeometry(0.2, 0.8, 0.2);
        this.headMat = new THREE.MeshStandardMaterial({ color: 0xffccaa });
        this.legMat = new THREE.MeshStandardMaterial({ color: 0x333333 });
    }

    setDependencies(trafficLightSystem, parkingSystem) {
        this.trafficLightSystem = trafficLightSystem;
    }

    loadChunk(cx, cz) {
        const pedsList = [];
        const pedsPerChunk = 4; // Slightly more for busy streets

        const chunkSize = this.blockSize + this.roadWidth;
        const xOffset = cx * chunkSize;
        const zOffset = cz * chunkSize;

        for (let i = 0; i < pedsPerChunk; i++) {
            const group = this.createPedMesh();
            const state = this.spawnPedInChunk(group, xOffset, zOffset, this.blockSize);

            this.scene.add(group);

            const ped = {
                mesh: group,
                velocity: new THREE.Vector3(0, 0, 0),
                acceleration: new THREE.Vector3(0, 0, 0),
                state: 'WALKING',
                target: state.target,
                chunkX: xOffset,
                chunkZ: zOffset,
                chunkSize: chunkSize,
                bounds: state.bounds,
                legAnimTimer: Math.random() * 10,
                leftLeg: group.children[2],
                rightLeg: group.children[3],
                waitTimer: 0,
                ragdollTimer: 0
            };
            pedsList.push(ped);
            this.peds.push(ped);
        }
        this.chunkPeds.set(`${cx},${cz}`, pedsList);
    }

    unloadChunk(cx, cz) {
        const key = `${cx},${cz}`;
        if (this.chunkPeds.has(key)) {
            const peds = this.chunkPeds.get(key);
            peds.forEach(ped => {
                this.scene.remove(ped.mesh);
                const idx = this.peds.indexOf(ped);
                if (idx > -1) this.peds.splice(idx, 1);
            });
            this.chunkPeds.delete(key);
        }
    }

    createPedMesh() {
        const group = new THREE.Group();
        const color = new THREE.Color().setHSL(Math.random(), 0.6, 0.4);
        const mat = new THREE.MeshStandardMaterial({ color: color });

        const body = new THREE.Mesh(this.bodyGeom, mat);
        body.position.y = 1.0;
        body.castShadow = true;
        group.add(body);

        const head = new THREE.Mesh(this.headGeom, this.headMat);
        head.position.y = 1.6;
        head.castShadow = true;
        group.add(head);

        const leftLeg = new THREE.Mesh(this.legGeom, this.legMat);
        leftLeg.position.set(-0.15, 0.4, 0);
        group.add(leftLeg);

        const rightLeg = new THREE.Mesh(this.legGeom, this.legMat);
        rightLeg.position.set(0.15, 0.4, 0);
        group.add(rightLeg);

        return group;
    }

    spawnPedInChunk(group, chunkX, chunkZ, blockSize) {
        // Spawn on random sidewalk quadrant
        const roadHalf = this.roadWidth / 2;
        const cornerSize = blockSize / 2;

        // Pick Quadrant
        const qs = [
            { x: -1, z: -1 }, { x: 1, z: -1 }, { x: 1, z: 1 }, { x: -1, z: 1 }
        ];
        const q = qs[Math.floor(Math.random() * 4)];

        // Random pos in sidewalk
        // Sidewalk is from roadHalf to roadHalf+cornerSize
        const sx = roadHalf + Math.random() * cornerSize;
        const sz = roadHalf + Math.random() * cornerSize;

        const lx = sx * q.x;
        const lz = sz * q.z;

        group.position.set(chunkX + lx, 0, chunkZ + lz);

        // Pick initial target: Another corner of the same block or cross street?
        // Let's walk along an axis.
        const axis = Math.random() > 0.5 ? 'x' : 'z';
        const dir = Math.random() > 0.5 ? 1 : -1;

        // Target is far away in that direction
        const target = new THREE.Vector3(dir * 100, 0, 0);
        if (axis === 'z') target.set(0, 0, dir * 100);

        // Add current pos to relative target
        target.add(group.position);

        // Initial bounds for building avoidance
        const sidewalkCenter = roadHalf + cornerSize / 2;
        const buildingCenterX = sidewalkCenter * q.x;
        const buildingCenterZ = sidewalkCenter * q.z;
        const buildingHalfWidth = (cornerSize - 4) / 2 + 0.5;

        return {
            target,
            bounds: { buildingCenterX, buildingCenterZ, buildingHalfWidth }
        };
    }

    update(delta) {
        if (delta > 0.1) delta = 0.1; // Cap delta for physics stability

        for (const peds of this.chunkPeds.values()) {
            peds.forEach(ped => {
                // RAGDOLL PHYSICS
                if (ped.state === 'RAGDOLL') {
                    ped.velocity.y -= 20 * delta; // Gravity
                    ped.mesh.position.add(ped.velocity.clone().multiplyScalar(delta));

                    // Rotate wildly
                    ped.mesh.rotation.x += delta * 5;
                    ped.mesh.rotation.z += delta * 5;

                    // Floor collision
                    if (ped.mesh.position.y < 0) {
                        ped.mesh.position.y = 0;
                        ped.velocity.multiplyScalar(0.5); // Friction
                        ped.velocity.y = 0;
                    }

                    ped.ragdollTimer -= delta;
                    if (ped.ragdollTimer <= 0 && ped.velocity.length() < 0.1) {
                        // Reset to walking
                        ped.state = 'WALKING';
                        ped.mesh.rotation.set(0, 0, 0);
                        ped.mesh.position.y = 0;
                    }
                    return; // Skip AI
                }

                const force = new THREE.Vector3(0, 0, 0);

                // 1. Behavior: Seek Target
                // If crossing, target is other side.
                // If walking, target is down the street.

                // State Logic
                this.updateState(ped, delta);

                if (ped.state !== 'WAITING') {
                    const seek = this.seek(ped, ped.target);
                    force.add(seek);

                    // 2. Behavior: Avoid Buildings (Obstacles)
                    // Simple radial repulsion from building center
                    const buildRepel = this.avoidBuilding(ped);
                    force.add(buildRepel.multiplyScalar(3.0)); // High priority
                }

                // Apply Physics
                ped.acceleration.copy(force);
                // Limit Accel? No, mass = 1.

                ped.velocity.add(ped.acceleration.multiplyScalar(delta));
                if (ped.velocity.length() > this.maxSpeed) {
                    ped.velocity.setLength(this.maxSpeed);
                }

                if (ped.state === 'WAITING') ped.velocity.set(0, 0, 0);

                ped.mesh.position.add(ped.velocity.clone().multiplyScalar(delta));

                if (ped.velocity.lengthSq() > 0.01) {
                    ped.mesh.lookAt(ped.mesh.position.clone().add(ped.velocity));
                }

                // Animation
                if (ped.velocity.lengthSq() > 0.1) {
                    ped.legAnimTimer += delta * 10;
                    ped.leftLeg.rotation.x = Math.sin(ped.legAnimTimer) * 0.5;
                    ped.rightLeg.rotation.x = Math.sin(ped.legAnimTimer + Math.PI) * 0.5;
                } else {
                    ped.leftLeg.rotation.x = 0;
                    ped.rightLeg.rotation.x = 0;
                }
            });
        }
    }

    updateState(ped, delta) {
        const localX = ped.mesh.position.x - ped.chunkX;
        const localZ = ped.mesh.position.z - ped.chunkZ;
        const roadHalf = this.roadWidth / 2;

        if (ped.state === 'WALKING') {
            // Check if reached curb (Intersection edge)
            // Curb is at |local| = roadHalf (approx 12)

            // Should we cross?
            // If moving towards intersection (velocity checks)
            // And within 1m of curb

            const distX = Math.abs(localX) - roadHalf;
            const distZ = Math.abs(localZ) - roadHalf;

            // If walking off the block (outwards) -> Keep walking (natural, switching chunks)
            // If walking INTO intersection (inwards) -> Stop/Cross

            // Check if inside "Intersection Zone"
            // Wait, if |local| < roadHalf, they are IN road.
            // We want to stop just BEFORE.

            if ((Math.abs(localX) < roadHalf + 1 && Math.abs(localZ) < roadHalf + 20) ||
                (Math.abs(localZ) < roadHalf + 1 && Math.abs(localX) < roadHalf + 20)) {

                // Which axis are we trying to cross?
                // Velocity implies direction.
                const vx = Math.abs(ped.velocity.x);
                const vz = Math.abs(ped.velocity.z);

                if (vx > vz) {
                    // Moving X. Entering intersection X-wise?
                    // Only if |localZ| is small enough to be near the crossing point.
                    // Actually, simplify:
                    // If moving X towards 0 and near curb x=12.
                    if (Math.abs(localX) < roadHalf + 0.5 && Math.abs(localX) > roadHalf - 1.0) {
                        // At curb.
                        ped.state = 'WAITING';
                        ped.waitTimer = 0;
                        ped.crossAxis = 'x';
                    }
                } else {
                    if (Math.abs(localZ) < roadHalf + 0.5 && Math.abs(localZ) > roadHalf - 1.0) {
                        ped.state = 'WAITING';
                        ped.waitTimer = 0;
                        ped.crossAxis = 'z';
                    }
                }
            }
        } else if (ped.state === 'WAITING') {
            // Check Lights
            if (this.trafficLightSystem) {
                // Determine integer chunk coords
                const cx = Math.round(ped.chunkX / ped.chunkSize);
                const cz = Math.round(ped.chunkZ / ped.chunkSize);

                // Pedestrians cross when Traffic is RED.
                // Light checkGreenLight returns true if Green/Yellow for cars.
                // So checking 'x' gives car state for X-road.
                // If we want to cross X-road (walking along X), we look at X-light?
                // No. If walking along X, we cross the Z-street? 

                /*
                   | Z |
                --+---+--
                   |   |
                   X
                If walking X axis, we cross the perpendicular street (Z-axis occupied road)?
                Wait, if moving along X, we walk parallel to X-road. We only cross if we want to change blocks?
                Ah, intersections.
                If I walk +X, I hit the intersection. To continue +X, I must cross the Z-road.
                The Z-road traffic is controlled by NsGreen.
                If NsGreen is TRUE, Z-cars are moving. I must WAIT.
                So I cross if checkGreenLight(..., 'z') is FALSE.
                */

                let carGreen = false;
                if (ped.crossAxis === 'x') {
                    // Walking X, Crossing Z-street. (Perpendicular to walking dir)
                    // Cars on Z street matter.
                    carGreen = this.trafficLightSystem.checkGreenLight(cx, cz, 'z');
                } else {
                    // Walking Z, Crossing X-street.
                    carGreen = this.trafficLightSystem.checkGreenLight(cx, cz, 'x');
                }

                if (!carGreen) {
                    // Walk signal!
                    ped.state = 'CROSSING';
                    // Target safety on other side
                    // If crossing Z-street (walking X), target.x += roadWidth + 5
                    if (ped.crossAxis === 'x') {
                        const sign = ped.target.x > ped.mesh.position.x ? 1 : -1;
                        ped.crossingTarget = new THREE.Vector3(ped.mesh.position.x + sign * (this.roadWidth + 4), 0, ped.mesh.position.z);
                    } else {
                        const sign = ped.target.z > ped.mesh.position.z ? 1 : -1;
                        ped.crossingTarget = new THREE.Vector3(ped.mesh.position.x, 0, ped.mesh.position.z + sign * (this.roadWidth + 4));
                    }
                }
            } else {
                // No lights, wait random
                ped.waitTimer += delta;
                if (ped.waitTimer > 2.0) ped.state = 'CROSSING';
            }

        } else if (ped.state === 'CROSSING') {
            // Seek crossing target overrides normal target
            // Once reached, switch back to WALKING
            const dist = ped.mesh.position.distanceTo(ped.crossingTarget);
            if (dist < 1.0) {
                ped.state = 'WALKING';
                // Restore long term target (it was never removed)
            } else {
                // Temp override of seek logic in update()
                // Actually easier to just swap target or add behavior priority
            }
        }

    }

    seek(ped, targetPos) {
        // Special case for CROSSING
        const dest = (ped.state === 'CROSSING' && ped.crossingTarget) ? ped.crossingTarget : targetPos;

        const desired = new THREE.Vector3().subVectors(dest, ped.mesh.position);
        desired.normalize().multiplyScalar(this.maxSpeed);
        const steer = new THREE.Vector3().subVectors(desired, ped.velocity);
        // steer.clampLength(0, this.maxForce); // Helper not avail, manual:
        if (steer.length() > this.maxForce) steer.setLength(this.maxForce);
        return steer;
    }

    avoidBuilding(ped) {
        // If close to building center, reflect out.
        // We know building center from bounds.
        // It's a box [cx-hw, cx+hw].
        const lx = ped.mesh.position.x - ped.chunkX;
        const lz = ped.mesh.position.z - ped.chunkZ;

        const dx = lx - ped.bounds.buildingCenterX;
        const dz = lz - ped.bounds.buildingCenterZ;
        const adx = Math.abs(dx);
        const adz = Math.abs(dz);
        const hw = ped.bounds.buildingHalfWidth; // Includes margin

        if (adx < hw && adz < hw) {
            // Inside!
            // Calculate vector out
            const steer = new THREE.Vector3(dx, 0, dz);
            steer.normalize().multiplyScalar(this.maxForce * 2);
            return steer;
        }
        return new THREE.Vector3(0, 0, 0);
    }
}
