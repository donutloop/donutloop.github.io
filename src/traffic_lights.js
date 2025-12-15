import * as THREE from 'three';

export class TrafficLightSystem {
    constructor(scene, roadWidth, blockSize) {
        this.scene = scene;
        this.roadWidth = roadWidth;
        this.blockSize = blockSize;
        this.chunkLights = new Map(); // "cx,cz" -> { mesh, state, timer }
        this.cycleDuration = 10; // Seconds per green
    }

    loadChunk(cx, cz) {
        // Visual Group (No wrapper, direct group from create)
        const group = this.createLightMeshes();

        // Calculate Position
        const chunkSize = this.blockSize + this.roadWidth;
        const xPos = cx * chunkSize;
        const zPos = cz * chunkSize;

        group.position.set(xPos, 0, zPos);

        // Initial State
        const isNorthSouthGreen = (cx + cz) % 2 === 0;

        this.chunkLights.set(`${cx},${cz}`, {
            mesh: group,
            cx: cx,
            cz: cz,
            state: isNorthSouthGreen ? 'NsGreen' : 'EwGreen',
            timer: 0,
            materials: group.userData.materials
        });

        this.scene.add(group);
        this.updateVisuals(this.chunkLights.get(`${cx},${cz}`));
    }

    unloadChunk(cx, cz) {
        const key = `${cx},${cz}`;
        if (this.chunkLights.has(key)) {
            const data = this.chunkLights.get(key);
            this.scene.remove(data.mesh);
            this.chunkLights.delete(key);
        }
    }

    createLightMeshes() {
        const group = new THREE.Group();
        const poleGeom = new THREE.BoxGeometry(0.3, 6, 0.3);
        const housingGeom = new THREE.BoxGeometry(0.8, 2.0, 0.5); // Vertical box

        // bulb Geometries
        const bulbGeom = new THREE.CylinderGeometry(0.25, 0.25, 0.1, 16);
        bulbGeom.rotateX(Math.PI / 2); // Face forward

        const matPole = new THREE.MeshStandardMaterial({ color: 0x333333 });
        const matHousing = new THREE.MeshStandardMaterial({ color: 0x111111 }); // Black housing

        const matOff = new THREE.MeshLambertMaterial({ color: 0x111111, emissive: 0x000000 });
        const matRedOn = new THREE.MeshLambertMaterial({ color: 0xff0000, emissive: 0xff0000, emissiveIntensity: 2 });
        const matYellowOn = new THREE.MeshLambertMaterial({ color: 0xffff00, emissive: 0xffff00, emissiveIntensity: 2 });
        const matGreenOn = new THREE.MeshLambertMaterial({ color: 0x00ff00, emissive: 0x00ff00, emissiveIntensity: 2 });

        group.userData.materials = { matOff, matRedOn, matYellowOn, matGreenOn };

        // Placement Logic:
        // Intersection is at 0,0.
        // Road width 24. Lanes are +/- 6. Sidewalk edge at 12.

        // Z-Axis Traffic (North/South):
        // 1. Southbound (Going -Z): "Far right" corner is (-12, -12).
        // 2. Northbound (Going +Z): "Far right" corner is (+12, +12).

        // X-Axis Traffic (East/West):
        // 3. Westbound (Going -X): "Far right" corner is (+12, -12). (Wait, facing -X. Right is +Z.)
        //    Going -X (Left on screen). Driver is at +X. Far corner is (-12, ?)
        //    Let's align to "Sidewalk Corner".

        const offset = this.roadWidth / 2 + 1.0; // On the curb

        // 4 Configurations:
        const configs = [
            // Index 0: Faces Z (Controls traffic coming from -Z, going +Z?)
            // Normally lights are on the FAR side.
            // If I drive +Z, I look at the light at (+offset, +offset).
            { x: offset, z: offset, rot: Math.PI, type: 'Ns' }, // Face -Z (Towards driver coming from -Z) wait. rot PI faces -Z. +Z driver sees front face.

            // Index 1: Faces -Z (Controls traffic coming from +Z, going -Z)
            // Position (-offset, -offset). Rot 0. Faces +Z.
            { x: -offset, z: -offset, rot: 0, type: 'Ns' },

            // Index 2: Faces X (Controls traffic coming from -X, going +X)
            // Position (+offset, -offset). Rot -PI/2. Faces +X. -X driver sees front.
            { x: offset, z: -offset, rot: -Math.PI / 2, type: 'Ew' },

            // Index 3: Faces -X (Controls traffic coming from +X, going -X)
            // Position (-offset, +offset). Rot PI/2. Faces -X. +X driver sees front.
            { x: -offset, z: offset, rot: Math.PI / 2, type: 'Ew' }
        ];

        configs.forEach((c, i) => {
            // Pole
            const pole = new THREE.Mesh(poleGeom, matPole);
            pole.position.set(c.x, 3, c.z);
            group.add(pole);

            // Housing
            const housing = new THREE.Mesh(housingGeom, matHousing);
            housing.position.set(c.x, 5.5, c.z);
            housing.rotation.y = c.rot;
            group.add(housing);

            // Bulbs (Relative to housing)
            // Top: Red, Mid: Yellow, Bot: Green
            const bulbR = new THREE.Mesh(bulbGeom, matOff.clone());
            bulbR.position.set(0, 0.5, 0.26); // Pop out slightly
            housing.add(bulbR);

            const bulbY = new THREE.Mesh(bulbGeom, matOff.clone());
            bulbY.position.set(0, 0, 0.26);
            housing.add(bulbY);

            const bulbG = new THREE.Mesh(bulbGeom, matOff.clone());
            bulbG.position.set(0, -0.5, 0.26);
            housing.add(bulbG);

            // Access keys
            group.userData[`light_${i}_R`] = bulbR;
            group.userData[`light_${i}_Y`] = bulbY;
            group.userData[`light_${i}_G`] = bulbG;
            group.userData[`light_${i}_type`] = c.type;
        });

        return group;
    }

    update(delta) {
        for (const data of this.chunkLights.values()) {
            data.timer += delta;

            // Cycle: Green (10s) -> Yellow (3s) -> AllRed (2s) -> Switch

            if (data.state === 'NsGreen' && data.timer > this.cycleDuration) {
                data.state = 'NsYellow';
                data.timer = 0;
                this.updateVisuals(data);
            } else if (data.state === 'NsYellow' && data.timer > 3) {
                data.state = 'AllRed1';
                data.timer = 0;
                this.updateVisuals(data);
            } else if (data.state === 'AllRed1' && data.timer > 2) {
                data.state = 'EwGreen';
                data.timer = 0;
                this.updateVisuals(data);
            } else if (data.state === 'EwGreen' && data.timer > this.cycleDuration) {
                data.state = 'EwYellow';
                data.timer = 0;
                this.updateVisuals(data);
            } else if (data.state === 'EwYellow' && data.timer > 3) {
                data.state = 'AllRed2';
                data.timer = 0;
                this.updateVisuals(data);
            } else if (data.state === 'AllRed2' && data.timer > 2) {
                data.state = 'NsGreen';
                data.timer = 0;
                this.updateVisuals(data);
            }
        }
    }

    updateVisuals(data) {
        const { matOff, matRedOn, matYellowOn, matGreenOn } = data.materials;

        // Helper to set logic per light
        const updateLight = (idx, state) => {
            // state: 'r', 'y', 'g'
            const bR = data.mesh.userData[`light_${idx}_R`];
            const bY = data.mesh.userData[`light_${idx}_Y`];
            const bG = data.mesh.userData[`light_${idx}_G`];

            if (!bR) return; // Safety

            bR.material = state === 'r' ? matRedOn : matOff;
            bY.material = state === 'y' ? matYellowOn : matOff;
            bG.material = state === 'g' ? matGreenOn : matOff;
        };

        // Determine states for Ns and Ew groups
        let nsState = 'r';
        let ewState = 'r';

        if (data.state === 'NsGreen') { nsState = 'g'; ewState = 'r'; }
        else if (data.state === 'NsYellow') { nsState = 'y'; ewState = 'r'; }
        else if (data.state === 'EwGreen') { nsState = 'r'; ewState = 'g'; }
        else if (data.state === 'EwYellow') { nsState = 'r'; ewState = 'y'; }
        // Else AllRed -> both 'r'

        // Apply to all 4 lights based on their type
        for (let i = 0; i < 4; i++) {
            const type = data.mesh.userData[`light_${i}_type`];
            if (type === 'Ns') updateLight(i, nsState);
            else updateLight(i, ewState);
        }
    }

    checkGreenLight(chunkX, chunkZ, carAxis) {
        // Return true if green/yellow, false if red (stop)
        const key = `${chunkX},${chunkZ}`;
        const data = this.chunkLights.get(key);
        if (!data) return true; // No light -> Green (Wasteland)

        if (carAxis === 'z') {
            // Needs NsGreen or NsYellow
            // (Strictly stop on yellow? Nah, drive through)
            return data.state === 'NsGreen' || data.state === 'NsYellow';
        } else {
            // Needs EwGreen
            return data.state === 'EwGreen' || data.state === 'EwYellow';
        }
    }
}
