import * as THREE from 'three';
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';
import { deformMesh } from './deformation.js';

export class Player {
    constructor(camera, domElement, colliders = [], trafficSystem = null, parkingSystem = null, effectSystem = null) {
        this.camera = camera;
        this.domElement = domElement;
        this.colliders = colliders;
        this.trafficSystem = trafficSystem;
        this.parkingSystem = parkingSystem;
        this.effectSystem = effectSystem;
        this.controls = new PointerLockControls(camera, domElement);

        this.moveForward = false;
        this.moveBackward = false;
        this.moveLeft = false;
        this.moveRight = false;
        this.canJump = false;

        this.isDriving = false;
        this.currentCar = null;
        this.carVelocity = 0;
        this.currentCar = null;
        this.carVelocity = 0;
        this.carSteering = 0;

        // Crash Physics State
        this.spinVelocity = 0;
        this.shakeIntensity = 0;

        this.velocity = new THREE.Vector3();
        this.direction = new THREE.Vector3();

        this.init();
    }

    init() {
        const instructions = document.createElement('div');
        instructions.style.position = 'absolute';
        instructions.style.top = '0';
        instructions.style.left = '0';
        instructions.style.width = '100%';
        instructions.style.height = '100%';
        instructions.style.display = 'flex';
        instructions.style.alignItems = 'center';
        instructions.style.justifyContent = 'center';
        instructions.style.background = 'rgba(0,0,0,0.8)';
        instructions.style.zIndex = '1000'; // Force On Top
        instructions.style.cursor = 'pointer';
        instructions.style.color = '#ffffff';
        instructions.style.fontSize = '24px';
        instructions.style.fontFamily = 'sans-serif';
        instructions.style.flexDirection = 'column';
        instructions.style.textAlign = 'center';
        instructions.innerHTML = `
            <h1>Worldloop</h1>
            <p style="font-size: 18px; margin-top: 20px;">
                WASD = Move | Mouse = Look<br>
                ENTER = Enter/Exit Car<br>
                1, 2, 3 = Change Weather
            </p>
        `;
        document.body.appendChild(instructions);
        // DEBUG OVERLAY
        const debugDiv = document.createElement('div');
        debugDiv.style.position = 'absolute';
        debugDiv.style.bottom = '10px';
        debugDiv.style.left = '10px';
        debugDiv.style.color = '#00ff00';
        debugDiv.style.fontFamily = 'monospace';
        debugDiv.style.fontWeight = 'bold';
        debugDiv.style.fontSize = '16px';
        debugDiv.innerHTML = 'STATUS: WAITING FOR CLICK';
        document.body.appendChild(debugDiv);

        const updateDebug = (msg) => {
            debugDiv.innerHTML = msg;
            console.log(msg);
        };

        if (!('pointerLockElement' in document || 'mozPointerLockElement' in document || 'webkitPointerLockElement' in document)) {
            instructions.innerHTML = 'Pointer Lock not supported in this browser';
            instructions.style.color = 'red';
            return;
        }

        const lock = () => {
            updateDebug('ATTEMPTING LOCK...');
            this.controls.lock();
        };

        instructions.addEventListener('click', () => {
            lock();
        });

        this.controls.addEventListener('lock', () => {
            instructions.style.display = 'none';
            updateDebug('LOCKED - USE WASD');
        });

        this.controls.addEventListener('unlock', () => {
            instructions.style.display = 'flex';
            updateDebug('UNLOCKED - CLICK TO PLAY');
        });

        document.addEventListener('keydown', (event) => {
            // Also log key presses to see if keyboard is working
            if (this.controls.isLocked) {
                updateDebug(`KEY: ${event.code}`);
            }
            if (event.code === 'Enter') {
                lock();
            }
            this.onKeyDown(event)
        });
        document.addEventListener('keyup', (event) => this.onKeyUp(event));
    }

    onKeyDown(event) {
        switch (event.code) {
            case 'ArrowUp':
            case 'KeyW':
                this.moveForward = true;
                break;
            case 'ArrowLeft':
            case 'KeyA':
                this.moveLeft = true;
                break;
            case 'ArrowDown':
            case 'KeyS':
                this.moveBackward = true;
                break;
            case 'ArrowRight':
            case 'KeyD':
                this.moveRight = true;
                break;
            case 'KeyE':
                if (this.isDriving) {
                    this.exitCar();
                } else {
                    this.tryEnterCar();
                }
                break;
            case 'Space':
                if (this.canJump === true) this.velocity.y += 20; // Jump force
                this.canJump = false;
                break;
        }
    }

    onKeyUp(event) {
        switch (event.code) {
            case 'ArrowUp':
            case 'KeyW':
                this.moveForward = false;
                break;
            case 'ArrowLeft':
            case 'KeyA':
                this.moveLeft = false;
                break;
            case 'ArrowDown':
            case 'KeyS':
                this.moveBackward = false;
                break;
            case 'ArrowRight':
            case 'KeyD':
                this.moveRight = false;
                break;
        }
    }

    update(delta) {
        if (this.controls.isLocked === true) {
            if (this.isDriving && this.currentCar) {
                this.updateCarPhysics(delta);
                return;
            }

            this.velocity.x -= this.velocity.x * 10.0 * delta;
            this.velocity.z -= this.velocity.z * 10.0 * delta;
            this.velocity.y -= 9.8 * 5.0 * delta; // Gravity - tweaked for feel

            this.direction.z = Number(this.moveForward) - Number(this.moveBackward);
            this.direction.x = Number(this.moveRight) - Number(this.moveLeft);
            this.direction.normalize();

            if (this.moveForward || this.moveBackward) this.velocity.z -= this.direction.z * 150.0 * delta; // Move speed
            if (this.moveLeft || this.moveRight) this.velocity.x -= this.direction.x * 150.0 * delta;

            // Apply movement step-by-step to handle collision
            const intendedX = -this.velocity.x * delta;
            const intendedZ = -this.velocity.z * delta;

            // Move X
            this.controls.moveRight(intendedX);
            if (this.checkCollision()) {
                this.controls.moveRight(-intendedX);
                this.velocity.x = 0;
            }

            // Move Z
            this.controls.moveForward(intendedZ);
            if (this.checkCollision()) {
                this.controls.moveForward(-intendedZ);
                this.velocity.z = 0;
            }

            this.camera.position.y += (this.velocity.y * delta);

            if (this.camera.position.y < 2) { // Floor height
                this.velocity.y = 0;
                this.camera.position.y = 2;
                this.canJump = true;
            }
        }
    }

    tryEnterCar() {
        const playerPos = this.camera.position;
        let closestCar = null;
        let minDistance = 5; // Interaction range

        // Check Traffic
        if (this.trafficSystem) {
            for (const car of this.trafficSystem.cars) {
                const dist = playerPos.distanceTo(car.mesh.position);
                if (dist < minDistance) {
                    minDistance = dist;
                    closestCar = car;
                }
            }
        }

        // Check Parked Cars
        if (this.parkingSystem) {
            for (const carMesh of this.parkingSystem.cars) {
                const dist = playerPos.distanceTo(carMesh.position);
                if (dist < minDistance) {
                    minDistance = dist;
                    // Wrap parked car in similar object structure if needed
                    closestCar = { mesh: carMesh, isParked: true };
                }
            }
        }

        if (closestCar) {
            this.enterCar(closestCar);
        }
    }

    enterCar(car) {
        this.isDriving = true;
        this.currentCar = car;
        car.isPlayerDriven = true; // Flag for traffic system (wrapper)
        if (car.mesh) car.mesh.isPlayerDriven = true; // Flag for parking system (mesh)

        // If it's a parked car, we must remove its static collider from the world
        // otherwise we will immediately collide with it.
        if (car.isParked) {
            const carBox = new THREE.Box3().setFromObject(car.mesh);
            // Find matching box in colliders
            // We use a small epsilon for float comparison or just 'intersects' and verify size
            const index = this.colliders.findIndex(box => {
                return box.intersectsBox(carBox) && box.containsBox(carBox);
            });

            if (index !== -1) {
                this.colliders.splice(index, 1);
            }
        }

        // Initial parameters
        this.carVelocity = 0;
        this.carSteering = 0;
        this.spinVelocity = 0;
        if (this.currentCar.mesh.userData.health === undefined) {
            this.currentCar.mesh.userData.health = 100;
        }

        console.log("Entered car. Health:", this.currentCar.mesh.userData.health);

        console.log("Entered car");
    }

    exitCar() {
        if (!this.currentCar) return;

        this.currentCar.isPlayerDriven = false;
        if (this.currentCar.mesh) this.currentCar.mesh.isPlayerDriven = false;
        this.isDriving = false;

        // If it was a parked car, re-add its collider at the new position
        if (this.currentCar.isParked) {
            const newBox = new THREE.Box3().setFromObject(this.currentCar.mesh);
            this.colliders.push(newBox);
        }

        // Check multiple exit points to find a safe spot
        // Left, Right, Back, Front
        const checkOffsets = [
            new THREE.Vector3(3, 0, 0),
            new THREE.Vector3(-3, 0, 0),
            new THREE.Vector3(0, 0, -4),
            new THREE.Vector3(0, 0, 4)
        ];

        let safePos = null;
        const originalPos = this.camera.position.clone();

        for (const off of checkOffsets) {
            off.applyEuler(this.currentCar.mesh.rotation);
            const testPos = this.currentCar.mesh.position.clone().add(off);
            testPos.y = 2; // Player height

            // Temporarily move camera to test collision
            this.camera.position.copy(testPos);
            if (!this.checkCollision()) {
                safePos = testPos;
                break;
            }
        }

        if (safePos) {
            this.camera.position.copy(safePos);
        } else {
            // Emergency fallback: Spawn on top of car/roof
            console.warn("No safe exit found on ground, spawning on top.");
            this.camera.position.copy(this.currentCar.mesh.position);
            this.camera.position.y = 5;
        }

        this.currentCar = null;
        console.log("Exited car");
    }

    updateCarPhysics(delta) {
        if (!this.currentCar) return;

        const stats = this.getCarStats(this.currentCar.mesh.userData.type || 'sedan');
        const maxSpeed = stats.maxSpeed;
        const acceleration = stats.acceleration;
        const friction = 10;
        const turnSpeed = 2.0;

        // 0. Apply Crash Physics (Spin)
        if (Math.abs(this.spinVelocity) > 0.1) {
            this.currentCar.mesh.rotation.y += this.spinVelocity * delta;
            this.spinVelocity *= 0.95; // Decay
            // Loss of control: ignore input if spinning fast
            if (Math.abs(this.spinVelocity) > 2) {
                this.carVelocity *= 0.98; // Slow down faster
                // Skip normal steering/accel
            }
        }

        // DAMAGE: Engine Failure and Fire
        const health = this.currentCar.mesh.userData.health;

        if (health <= 0) {
            // Dead car
            this.carVelocity *= 0.95; // Rapid deceleration
            if (this.effectSystem) {
                this.effectSystem.addEmitter(this.currentCar.mesh, 'fire');
                this.effectSystem.addEmitter(this.currentCar.mesh, 'smoke');
            }
        } else if (health < 20) {
            // Critical
            if (this.effectSystem) {
                this.effectSystem.addEmitter(this.currentCar.mesh, 'fire');
            }
        } else if (health < 50) {
            // Smoking
            if (this.effectSystem) {
                this.effectSystem.addEmitter(this.currentCar.mesh, 'smoke');
            }
        }

        // Decay Shake
        if (this.shakeIntensity > 0) {
            this.shakeIntensity -= 5 * delta;
            if (this.shakeIntensity < 0) this.shakeIntensity = 0;
        }

        // Acceleration (Only if control is regained AND engine works)
        if (Math.abs(this.spinVelocity) < 5 && health > 0) {
            if (this.moveForward) {
                this.carVelocity += acceleration * delta;
            } else if (this.moveBackward) {
                this.carVelocity -= acceleration * delta;
            } else {
                // Drag
                if (this.carVelocity > 0) this.carVelocity -= friction * delta;
                if (this.carVelocity < 0) this.carVelocity += friction * delta;
                // Stop creeping
                if (Math.abs(this.carVelocity) < 0.1) this.carVelocity = 0;
            }
        }

        // Clamp speed
        this.carVelocity = Math.max(-maxSpeed / 2, Math.min(maxSpeed, this.carVelocity));

        // Steering
        if (Math.abs(this.carVelocity) > 0.1 && Math.abs(this.spinVelocity) < 5) {
            if (this.moveLeft) {
                this.currentCar.mesh.rotation.y += turnSpeed * delta * Math.sign(this.carVelocity); // Reverse steering when reversing
            }
            if (this.moveRight) {
                this.currentCar.mesh.rotation.y -= turnSpeed * delta * Math.sign(this.carVelocity);
            }
        }

        // Apply Velocity
        const forward = new THREE.Vector3(0, 0, 1); // Assuming cars face +Z or +X initially? 
        // Traffic cars: axis 'x' -> rotated Y by +/- PI/2. axis 'z' -> Y 0 or PI.
        // Wait, if rotation 0 is +Z, then PI/2 is +X.
        // So yes, forward vector (0,0,1) rotated by PI/2 is (1,0,0).
        // So standard forward is (0,0,1).

        forward.applyEuler(this.currentCar.mesh.rotation);

        this.currentCar.mesh.position.add(forward.multiplyScalar(this.carVelocity * delta));

        // Check for collisions after moving
        const crash = this.checkCarCollision();
        if (crash) {
            // Collision response

            // 1. Move back to un-clip
            this.currentCar.mesh.position.add(forward.multiplyScalar(-this.carVelocity * delta));

            // 2. Calculate Intensity based on speed
            const speed = Math.abs(this.carVelocity);
            const intensity = Math.min(speed / 40, 1.0); // 0 to 1

            // 3. Trigger Visual/Audio Effects
            if (this.effectSystem && speed > 5) {
                // Approximate contact point (front of car)
                const contactPoint = this.currentCar.mesh.position.clone().add(forward.multiplyScalar(2));
                this.effectSystem.createCrashEffect(contactPoint);

                // DEFORMATION
                // Deform chassis or cabin
                this.currentCar.mesh.children.forEach(child => {
                    deformMesh(child, contactPoint, 1.5, intensity * 0.5);
                });

                // DAMAGE CALCULATION
                // Reduce health
                const damage = speed * 0.5; // e.g. 40 speed = 20 damage. 5 hits to kill.
                this.currentCar.mesh.userData.health -= damage;
                console.log(`Crash! Speed: ${speed.toFixed(1)}, Damage: ${damage.toFixed(1)}, Health: ${this.currentCar.mesh.userData.health.toFixed(1)}`);

                // physics effect
                if (speed > 10) {
                    this.spinVelocity = (Math.random() - 0.5) * 20 * intensity;
                    this.shakeIntensity = 1.0 * intensity;
                    this.carVelocity = -this.carVelocity * 0.5;
                } else {
                    this.carVelocity = 0;
                }

            } else {
                // Just a bump
                this.carVelocity = 0;
                this.shakeIntensity = 0.2;
            }
        } // Close if(crash)

        // Update Camera to follow car
        // Third person view
        const camOffset = new THREE.Vector3(0, 5, -10); // Behind and up
        camOffset.applyEuler(this.currentCar.mesh.rotation);

        // Apply Shake Offset
        if (this.shakeIntensity > 0) {
            camOffset.x += (Math.random() - 0.5) * this.shakeIntensity;
            camOffset.y += (Math.random() - 0.5) * this.shakeIntensity;
            camOffset.z += (Math.random() - 0.5) * this.shakeIntensity;
        }

        const targetPos = this.currentCar.mesh.position.clone().add(camOffset);

        // Smooth follow
        this.camera.position.lerp(targetPos, 5 * delta);
        this.camera.lookAt(this.currentCar.mesh.position);
    }

    checkCarCollision() {
        if (!this.currentCar) return false;

        this.currentCar.mesh.updateMatrixWorld();
        const carBox = new THREE.Box3().setFromObject(this.currentCar.mesh);

        // 1. Check Buildings (Static Colliders)
        if (this.colliders) {
            for (const box of this.colliders) {
                if (carBox.intersectsBox(box)) return true;
            }
        }

        // 2. Check Traffic
        if (this.trafficSystem) {
            for (const otherCar of this.trafficSystem.cars) {
                if (otherCar === this.currentCar) continue;

                const dist = otherCar.mesh.position.distanceTo(this.currentCar.mesh.position);
                if (dist > 25) continue;

                otherCar.mesh.updateMatrixWorld();
                const otherBox = new THREE.Box3().setFromObject(otherCar.mesh);

                // HYBRID COLLISION: Box OR Sphere (Distance < 3.5)
                if (carBox.intersectsBox(otherBox) || dist < 3.5) {
                    console.log("HIT TRAFFIC! (Dist: " + dist.toFixed(2) + ")");

                    const impactPoint = this.getImpactPoint(this.currentCar.mesh, otherCar.mesh);
                    this.applyCrashDamage(this.currentCar.mesh, otherCar.mesh, impactPoint, otherCar);

                    if (otherCar.velocity) {
                        this.applyCrashPhysics(this.currentCar.mesh, otherCar, impactPoint, otherCar.mesh.position);
                        otherCar.stunned = 2.0;
                    }

                    return { hit: true, point: impactPoint, object: otherCar };
                }
            }
        }

        // 3. Check Pedestrians
        if (this.pedestrianSystem && this.pedestrianSystem.peds) {
            for (const ped of this.pedestrianSystem.peds) {
                const dist = ped.mesh.position.distanceTo(this.currentCar.mesh.position);
                if (dist > 25) continue;

                ped.mesh.updateMatrixWorld();
                const pedBox = new THREE.Box3().setFromObject(ped.mesh);

                if (carBox.intersectsBox(pedBox) || dist < 1.0) {
                    if (ped.state !== 'RAGDOLL') {
                        ped.state = 'RAGDOLL';
                        ped.ragdollTimer = 4.0;
                        const forward = new THREE.Vector3(0, 0, 1).applyEuler(this.currentCar.mesh.rotation);
                        const speed = Math.abs(this.carVelocity) || 20;
                        ped.velocity.copy(forward).multiplyScalar(speed * 0.8 + 5);
                        ped.velocity.y += 6;
                        if (this.effectSystem) this.effectSystem.createCrashEffect(ped.mesh.position);
                        return { hit: true, point: ped.mesh.position.clone(), object: ped };
                    }
                }
            }
        }

        // 4. Check Parked Cars
        if (this.parkingSystem) {
            for (const otherCar of this.parkingSystem.cars) {
                if (this.currentCar.mesh === otherCar) continue;

                const dist = otherCar.position.distanceTo(this.currentCar.mesh.position);
                if (dist > 25) continue;

                otherCar.updateMatrixWorld();
                const otherBox = new THREE.Box3().setFromObject(otherCar);

                if (carBox.intersectsBox(otherBox) || dist < 3.5) {
                    console.log("HIT PARKED! (Dist: " + dist.toFixed(2) + ")");

                    if (!otherCar.userData.velocity) {
                        otherCar.userData.velocity = new THREE.Vector3();
                        otherCar.userData.angularVelocity = 0;
                    }

                    const impactPoint = this.getImpactPoint(this.currentCar.mesh, otherCar);
                    this.applyCrashDamage(this.currentCar.mesh, otherCar, impactPoint, otherCar.userData);
                    this.applyCrashPhysics(this.currentCar.mesh, otherCar.userData, impactPoint, otherCar.position);

                    return { hit: true, point: impactPoint, object: otherCar };
                }
            }
        }

        return false;
    }

    getImpactPoint(meshA, meshB) {
        // Simple midpoint approx
        const p1 = meshA.position;
        const p2 = meshB.position;
        const pt = new THREE.Vector3().lerpVectors(p1, p2, 0.5);
        pt.y = 0.5;
        return pt;
    }

    applyCrashDamage(attackerMesh, victimMesh, impactPoint, victimStats) {
        // Deform Attacker
        attackerMesh.children.forEach(c => {
            if (c.isMesh) deformMesh(c, impactPoint, 2.0, 1.0); // Stronger Dent
        });

        // Deform Victim
        victimMesh.children.forEach(c => {
            if (c.isMesh) {
                if (!c.userData.isUnique) { c.geometry = c.geometry.clone(); c.userData.isUnique = true; }
                deformMesh(c, impactPoint, 2.0, 1.0);
            }
        });

        // Effect
        if (this.effectSystem) this.effectSystem.createCrashEffect(impactPoint);

        // Reduce Health
        const speed = Math.abs(this.carVelocity) || 20;
        const damage = speed * 1.5;

        // Attacker Health
        if (attackerMesh.userData.health !== undefined) attackerMesh.userData.health -= damage;

        // Victim Health (stats object)
        if (victimStats.health !== undefined) {
            victimStats.health -= damage;

            // Visual Charring (Darken color significantly)
            if (victimMesh) {
                const burnFactor = 0.5; // DARKER!
                victimMesh.traverse(c => {
                    if (c.isMesh && c.material && c.material.color) {
                        if (!c.userData.isUniqueMat) {
                            c.material = c.material.clone();
                            c.userData.isUniqueMat = true;
                        }
                        c.material.color.multiplyScalar(burnFactor);
                    }
                });
            }

            // Immediate Effect Trigger
            if (victimStats.health < 60 && this.effectSystem) {
                this.effectSystem.createSmokeEffect({ mesh: victimMesh });
            }
            if (victimStats.health <= 0) {
                if (this.effectSystem) this.effectSystem.createFireEffect({ mesh: victimMesh });
                // If Traffic Car (wrapper), stop it
                if (victimStats.stunned !== undefined) victimStats.stunned = 999;
            }
        }
    }

    getMass(type) {
        switch (type) {
            case 'truck': return 4000;
            case 'suv': return 2500;
            case 'sedan': return 1600;
            case 'sport': return 1200;
            default: return 1500;
        }
    }

    applyCrashPhysics(attackerMesh, victimPhysicsState, impactPoint, victimPosition) {
        console.warn("APPLYING PHYSICS to", victimPhysicsState);

        // 1. Mass Constants
        const m1 = this.getMass('player');
        const m2 = this.getMass(victimPhysicsState.type || 'sedan');

        // 2. Linear Impulse
        const forward = new THREE.Vector3(0, 0, 1).applyEuler(attackerMesh.rotation);
        forward.y = 0; // STRICTLY HORIZONTAL - NO BOUNCE
        forward.normalize();

        const playerSpeed = Math.max(Math.abs(this.carVelocity), 8.0);

        // BALANCED REALISM
        const massRatio = m1 / m2;
        const impulseMagnitude = playerSpeed * massRatio * 1.2; // Slightly reduced force for weight

        const impulse = forward.multiplyScalar(impulseMagnitude);
        victimPhysicsState.velocity.add(impulse);

        // Speed-Dependent Bounce (Lift)
        // If speed > 30 (approx 60mph), start lifting
        if (playerSpeed > 30) {
            // physics: Force from bumper lifts the car?
            const lift = (playerSpeed - 30) * 0.02; // Very gentle scaling
            victimPhysicsState.velocity.y += Math.min(lift, 1.0); // Cap at 1.0 (Small hop)

            // Add slight randomness to bounce
            victimPhysicsState.velocity.y += Math.random() * 0.1;
        } else {
            victimPhysicsState.velocity.y = 0; // Grounded at low/medium speed
        }

        // 3. Angular Impulse (Torque)
        const lever = new THREE.Vector3().subVectors(impactPoint, victimPosition);
        const torque = new THREE.Vector3().crossVectors(lever, impulse);

        const inertia = m2 * 0.001;
        let wChange = torque.y / inertia;

        wChange = THREE.MathUtils.clamp(wChange, -6, 6);

        victimPhysicsState.angularVelocity = wChange;

        // 4. Player Reaction
        const recoilFactor = m2 / (m1 + m2);
        this.carVelocity *= (1.0 - recoilFactor * 0.8);
        this.shakeIntensity = Math.min(impulseMagnitude * 0.5, 3.0);
    }

    checkCollision() {
        if (!this.colliders) return false;

        const playerBox = new THREE.Box3();
        const position = this.camera.position.clone();
        // Player radius reduced to 0.2 for easier movement
        playerBox.min.set(position.x - 0.2, position.y - 0.5, position.z - 0.2);
        playerBox.max.set(position.x + 0.2, position.y + 0.5, position.z + 0.2);

        for (const collider of this.colliders) {
            if (playerBox.intersectsBox(collider)) {
                return true;
            }
        }

        if (this.trafficSystem) {
            const carBox = new THREE.Box3();
            for (const car of this.trafficSystem.cars) {
                // Moving cars need dynamic box update
                carBox.setFromObject(car.mesh);
                // Expand slightly for safety
                carBox.expandByScalar(0.2);

                if (playerBox.intersectsBox(carBox)) {
                    return true;
                }
            }
        }

        return false;
    }
    getCarStats(type) {
        switch (type) {
            case 'sport': return { maxSpeed: 160, acceleration: 120 };
            case 'sedan': return { maxSpeed: 110, acceleration: 80 };
            case 'suv': return { maxSpeed: 90, acceleration: 70 };
            case 'truck': return { maxSpeed: 70, acceleration: 50 };
            default: return { maxSpeed: 100, acceleration: 80 };
        }
    }
}
