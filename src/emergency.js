import * as THREE from 'three';
import { createCarMesh } from './car_models.js';
import { getEmergencyCarType } from './utils.js';

/**
 * EmergencySystem — Gap D: dynamic city events (emergency response & sirens).
 *
 * Owns a pooled fleet of EMS vehicles (ambulance / fire / police). A crash
 * incident triggers `respond(x, z)`, which dispatches a priority vehicle to the
 * scene with siren + rotating-light effects. EMS vehicles drive with
 * lane-clearing priority — ordinary traffic (TrafficSystem) yields ahead.
 *
 * Exposes a machine-readable `events` counter so check_world.mjs can verify
 * incident -> response coverage without a browser.
 */
export class EmergencySystem {
    constructor(scene, roadWidth, blockSize) {
        this.scene = scene;
        this.roadWidth = roadWidth;
        this.blockSize = blockSize;
        this.pool = { ambulance: [], fire: [], police: [] };
        this.active = [];   // active (responding) EMS vehicles
        this.events = 0;    // emergency events dispatched (telemetry field)
        this.effectSystem = null;
        this.dedupRadius = 60; // don't double-dispatch the same incident
    }

    setEffects(effectSystem) {
        this.effectSystem = effectSystem;
    }

    getVehicle(type) {
        if (this.pool[type] && this.pool[type].length > 0) {
            const mesh = this.pool[type].pop();
            mesh.visible = true;
            return mesh;
        }
        return createCarMesh(type);
    }

    returnVehicle(veh) {
        if (!veh) return;
        veh.mesh.visible = false;
        this.scene.remove(veh.mesh);
        if (!this.pool[veh.type]) this.pool[veh.type] = [];
        this.pool[veh.type].push(veh.mesh);
    }

    /**
     * Dispatch an EMS vehicle to an incident at (x, z).
     * Returns the dispatched vehicle wrapper, or null if already responding
     * nearby (dedup). Increments the machine-readable `events` counter.
     */
    respond(x, z) {
        // Dedupe: skip if an EMS unit is already responding near this incident.
        for (const v of this.active) {
            const dx = v.mesh.position.x - x;
            const dz = v.mesh.position.z - z;
            if (dx * dx + dz * dz < this.dedupRadius * this.dedupRadius) return null;
        }
        const type = getEmergencyCarType();
        const mesh = this.getVehicle(type);
        const pos = new THREE.Vector3(
            x + (Math.random() - 0.5) * 10,
            0,
            z + (Math.random() - 0.5) * 10
        );
        mesh.position.copy(pos);
        mesh.rotation.y = 0;
        this.scene.add(mesh);

        const veh = {
            mesh,
            type,
            target: new THREE.Vector3(x, 0, z),
            speed: 20,
            life: 20
        };
        this.active.push(veh);

        // Siren + rotating lights via the shared effects system.
        if (this.effectSystem) this.effectSystem.createEmergencyLights(mesh);

        this.events++;
        return veh;
    }

    update(delta) {
        for (let i = this.active.length - 1; i >= 0; i--) {
            const v = this.active[i];
            v.life -= delta;

            const t = v.target;
            const dx = t.x - v.mesh.position.x;
            const dz = t.z - v.mesh.position.z;
            const dist = Math.sqrt(dx * dx + dz * dz);

            // Arrived / timed out -> return to pool.
            if (dist < 2 || v.life <= 0) {
                this.returnVehicle(v);
                this.active.splice(i, 1);
                continue;
            }

            // Lane-clearing priority: drive straight toward the incident along
            // the dominant axis (EMS does not yield to ordinary traffic).
            const step = v.speed * delta;
            if (Math.abs(dx) > Math.abs(dz)) {
                v.mesh.position.x += Math.sign(dx) * Math.min(step, Math.abs(dx));
                v.mesh.rotation.y = Math.sign(dx) * Math.PI / 2;
            } else {
                v.mesh.position.z += Math.sign(dz) * Math.min(step, Math.abs(dz));
                v.mesh.rotation.y = Math.sign(dz) > 0 ? 0 : Math.PI;
            }
        }
    }

    // EMS vehicles are obstacles that ordinary traffic must yield to.
    getColliders() {
        return this.active;
    }
}
