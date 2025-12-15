import * as THREE from 'three';

export class PedestrianSystem {
    constructor(scene, citySize, blockSize, roadWidth) {
        this.scene = scene;
        this.citySize = citySize;
        this.blockSize = blockSize;
        this.roadWidth = roadWidth;
        this.chunkPeds = new Map();
        this.peds = []; // Flat list
        // Settings
        this.maxSpeed = 2.0;
        this.maxForce = 5.0; // Steering force limit

        // Geometry Cache
        this.geomBody = new THREE.BoxGeometry(0.45, 0.75, 0.25); // Slender torso
        this.geomHead = new THREE.BoxGeometry(0.25, 0.25, 0.25);
        this.geomLimb = new THREE.BoxGeometry(0.12, 0.75, 0.12); // Arms/Legs
        this.geomShoe = new THREE.BoxGeometry(0.14, 0.1, 0.22);
        this.geomHair = new THREE.BoxGeometry(0.27, 0.1, 0.27); // Simple hair cap

        // Mat Cache (Colors handled per instance usually, but standard materials here)
        this.matSkin = new THREE.MeshStandardMaterial({ color: 0xffccaa });
        this.matDark = new THREE.MeshStandardMaterial({ color: 0x222222 });
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
                limbs: group.userData.limbs, // New Structure
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

        // Randomize Colors
        const shirtColor = new THREE.Color().setHSL(Math.random(), 0.7, 0.4);
        const pantsColor = new THREE.Color().setHSL(Math.random(), 0.5, 0.2);
        const skinColor = new THREE.Color().setHSL(0.08, 0.6, 0.5 + Math.random() * 0.4); // Skin tone variety
        const hairColor = new THREE.Color().setHSL(Math.random(), 0.5, 0.1 + Math.random() * 0.2); // Darker hairs usually

        const matShirt = new THREE.MeshStandardMaterial({ color: shirtColor });
        const matPants = new THREE.MeshStandardMaterial({ color: pantsColor });
        const matSkinInstance = new THREE.MeshStandardMaterial({ color: skinColor });
        const matHair = new THREE.MeshStandardMaterial({ color: hairColor });

        // 1. Torso
        const body = new THREE.Mesh(this.geomBody, matShirt);
        body.position.y = 1.0;
        body.castShadow = true;
        group.add(body);

        // 2. Head
        const head = new THREE.Mesh(this.geomHead, matSkinInstance);
        head.position.y = 1.55;
        head.castShadow = true;
        group.add(head);

        // 3. Hair (Cap)
        const hair = new THREE.Mesh(this.geomHair, matHair);
        hair.position.y = 1.7; // Top of head
        hair.castShadow = true;
        group.add(hair);

        // 4. Arms (Pivots at shoulders)
        // Left Arm
        const leftArmGroup = new THREE.Group();
        leftArmGroup.position.set(-0.35, 1.35, 0); // Shoulder pos
        const leftArm = new THREE.Mesh(this.geomLimb, matShirt); // Long sleeve
        leftArm.position.y = -0.3; // Hang down
        leftArm.castShadow = true;
        leftArmGroup.add(leftArm);
        // Hand
        const leftHand = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 0.1), matSkinInstance);
        leftHand.position.y = -0.7;
        leftArmGroup.add(leftHand);
        group.add(leftArmGroup);

        // Right Arm
        const rightArmGroup = new THREE.Group();
        rightArmGroup.position.set(0.35, 1.35, 0);
        const rightArm = new THREE.Mesh(this.geomLimb, matShirt);
        rightArm.position.y = -0.3;
        rightArm.castShadow = true;
        rightArmGroup.add(rightArm);
        const rightHand = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 0.1), matSkinInstance);
        rightHand.position.y = -0.7;
        rightArmGroup.add(rightHand);
        group.add(rightArmGroup);

        // 5. Legs
        // Left Leg
        const leftLegGroup = new THREE.Group();
        leftLegGroup.position.set(-0.15, 0.65, 0); // Hip
        const leftLeg = new THREE.Mesh(this.geomLimb, matPants);
        leftLeg.position.y = -0.35;
        leftLeg.castShadow = true;
        leftLegGroup.add(leftLeg);
        // Shoe
        const leftShoe = new THREE.Mesh(this.geomShoe, this.matDark);
        leftShoe.position.set(0, -0.75, 0.05); // Forward offset
        leftLegGroup.add(leftShoe);
        group.add(leftLegGroup);

        // Right Leg
        const rightLegGroup = new THREE.Group();
        rightLegGroup.position.set(0.15, 0.65, 0);
        const rightLeg = new THREE.Mesh(this.geomLimb, matPants);
        rightLeg.position.y = -0.35;
        rightLeg.castShadow = true;
        rightLegGroup.add(rightLeg);
        // Shoe
        const rightShoe = new THREE.Mesh(this.geomShoe, this.matDark);
        rightShoe.position.set(0, -0.75, 0.05);
        rightLegGroup.add(rightShoe);
        group.add(rightLegGroup);

        // Return with references to animatable parts
        group.userData.limbs = {
            leftArm: leftArmGroup,
            rightArm: rightArmGroup,
            leftLeg: leftLegGroup,
            rightLeg: rightLegGroup
        };

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
                // Animation
                if (ped.velocity.lengthSq() > 0.1) {
                    ped.legAnimTimer += delta * 12; // Faster walk
                    const angle = Math.sin(ped.legAnimTimer);

                    // Legs
                    ped.limbs.leftLeg.rotation.x = angle * 0.6;
                    ped.limbs.rightLeg.rotation.x = -angle * 0.6;

                    // Arms (Opposite)
                    ped.limbs.leftArm.rotation.x = -angle * 0.6;
                    ped.limbs.rightArm.rotation.x = angle * 0.6;

                    // Bobbing
                    ped.mesh.position.y = Math.abs(Math.sin(ped.legAnimTimer * 2)) * 0.05;

                } else {
                    // Idle Stand
                    ped.limbs.leftLeg.rotation.x = 0;
                    ped.limbs.rightLeg.rotation.x = 0;
                    ped.limbs.leftArm.rotation.x = 0;
                    ped.limbs.rightArm.rotation.x = 0;
                    ped.mesh.position.y = 0;
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
