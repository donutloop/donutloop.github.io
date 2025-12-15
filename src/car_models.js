import * as THREE from 'three';

// Geometries are created per-instance or cached carefully if reusing.

export function createCarMesh(type = 'sedan', color = null) {
    const carGroup = new THREE.Group();
    carGroup.userData.type = type;

    // Distinct Colors for Gameplay Readability
    if (!color) {
        if (type === 'truck') {
            // Earthy / Work
            color = new THREE.Color().setHSL(0.08 + Math.random() * 0.05, 0.6, 0.3); // Brown/Orange ish
        } else if (type === 'suv') {
            // Modern
            color = new THREE.Color().setHSL(0, 0, 0.2 + Math.random() * 0.6); // Grey scale
        } else if (type === 'sport') {
            // Vibrant
            const hue = Math.random() > 0.5 ? 0.0 : (Math.random() > 0.5 ? 0.15 : 0.6); // Red, Yellow, Blue
            color = new THREE.Color().setHSL(hue, 0.9, 0.5);
        } else {
            // Sedan: Generic
            color = new THREE.Color().setHSL(Math.random(), 0.5, 0.5);
        }
    }

    const paintMat = new THREE.MeshStandardMaterial({ color: color, roughness: 0.3, metalness: 0.3 });
    const glassMat = new THREE.MeshStandardMaterial({ color: 0x223344, roughness: 0.1, metalness: 0.9 });
    const wheelMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.9 });
    const chromeMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.2, metalness: 0.8 });
    const lightMat = new THREE.MeshBasicMaterial({ color: 0xffffcc });
    const tailMat = new THREE.MeshBasicMaterial({ color: 0xff0000 });

    const addWheel = (x, y, z, scale = 1.0) => {
        const geom = new THREE.CylinderGeometry(0.35 * scale, 0.35 * scale, 0.4 * scale, 16);
        geom.rotateZ(Math.PI / 2);
        const wheel = new THREE.Mesh(geom, wheelMat);
        wheel.position.set(x, y, z);
        wheel.castShadow = true;
        carGroup.add(wheel);
    };

    if (type === 'sport') {
        const length = 4.4;
        const width = 1.9;
        const chassisY = 0.4;

        // Body (Sleek)
        const chassis = new THREE.Mesh(new THREE.BoxGeometry(width, 0.6, length), paintMat);
        chassis.position.y = chassisY + 0.1;
        chassis.castShadow = true;
        carGroup.add(chassis);

        // Cabin (Bubble)
        const cabin = new THREE.Mesh(new THREE.BoxGeometry(width - 0.4, 0.5, 2.0), paintMat);
        cabin.position.set(0, chassisY + 0.6, -0.2);
        carGroup.add(cabin);

        // Windshield (Visual Glass Block)
        const windshield = new THREE.Mesh(new THREE.BoxGeometry(width - 0.45, 0.3, 0.1), glassMat);
        // Tilted slightly by checking rotation? No, just position block.
        windshield.position.set(0, chassisY + 0.6, 0.8); // Front of cabin
        windshield.rotation.x = -0.2; // Slant
        carGroup.add(windshield);

        // Spoiler
        const spoiler = new THREE.Mesh(new THREE.BoxGeometry(width, 0.05, 0.5), paintMat);
        spoiler.position.set(0, chassisY + 0.7, -length / 2 + 0.2);
        carGroup.add(spoiler);

        const supL = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.3, 0.1), paintMat);
        supL.position.set(-0.6, chassisY + 0.5, -length / 2 + 0.2);
        carGroup.add(supL);
        const supR = supL.clone();
        supR.position.set(0.6, chassisY + 0.5, -length / 2 + 0.2);
        carGroup.add(supR);

        // Wheels
        addWheel(-0.9, 0.35, 1.3); addWheel(0.9, 0.35, 1.3);
        addWheel(-0.9, 0.35, -1.3); addWheel(0.9, 0.35, -1.3);

    } else if (type === 'truck') {
        const width = 2.1;
        const chassisY = 0.8;

        // Separate Cab & Bed for realism
        // Cab
        const cab = new THREE.Mesh(new THREE.BoxGeometry(width, 1.2, 1.5), paintMat);
        cab.position.set(0, chassisY + 0.6, 1.0);
        cab.castShadow = true;
        carGroup.add(cab);

        // Windshield
        const windshield = new THREE.Mesh(new THREE.BoxGeometry(width - 0.1, 0.6, 0.1), glassMat);
        windshield.position.set(0, chassisY + 0.8, 1.76); // Sticking out slightly
        carGroup.add(windshield);

        // Bed
        const bed = new THREE.Mesh(new THREE.BoxGeometry(width, 0.6, 2.5), paintMat);
        bed.position.set(0, chassisY + 0.3, -1.2);
        bed.castShadow = true;
        carGroup.add(bed);

        // Bed Rails
        const railL = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.8, 2.5), paintMat);
        railL.position.set(-width / 2 + 0.05, chassisY + 0.4, -1.2);
        carGroup.add(railL);
        const railR = railL.clone();
        railR.position.set(width / 2 - 0.05, chassisY + 0.4, -1.2);
        carGroup.add(railR);

        // Wheels
        addWheel(-1.0, 0.45, 1.5, 1.2); addWheel(1.0, 0.45, 1.5, 1.2);
        addWheel(-1.0, 0.45, -1.5, 1.2); addWheel(1.0, 0.45, -1.5, 1.2);

    } else if (type === 'suv') {
        const width = 2.1;
        const length = 4.6;
        const chassisY = 0.7;

        // Unified Body (Range Rover style)
        const body = new THREE.Mesh(new THREE.BoxGeometry(width, 1.2, length), paintMat);
        body.position.set(0, chassisY + 0.6, 0);
        body.castShadow = true;
        carGroup.add(body);

        // Greenhouse (Upper Glass area)
        const glassStrip = new THREE.Mesh(new THREE.BoxGeometry(width + 0.05, 0.5, length - 1.5), glassMat);
        glassStrip.position.set(0, chassisY + 1.0, -0.2); // Upper part
        carGroup.add(glassStrip);

        // Roof
        const roof = new THREE.Mesh(new THREE.BoxGeometry(width, 0.1, length - 1.5), paintMat);
        roof.position.set(0, chassisY + 1.3, -0.2);
        carGroup.add(roof);

        // Roof Rack Rails
        const railL = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, length - 2.0), chromeMat);
        railL.position.set(-0.7, chassisY + 1.4, -0.2);
        carGroup.add(railL);
        const railR = railL.clone();
        railR.position.set(0.7, chassisY + 1.4, -0.2);
        carGroup.add(railR);

        // Wheels
        addWheel(-1.0, 0.4, 1.6, 1.1); addWheel(1.0, 0.4, 1.6, 1.1);
        addWheel(-1.0, 0.4, -1.6, 1.1); addWheel(1.0, 0.4, -1.6, 1.1);

    } else {
        // Sedan
        const width = 1.9;
        const length = 4.2;
        const chassisY = 0.5;

        // Base
        const body = new THREE.Mesh(new THREE.BoxGeometry(width, 0.7, length), paintMat);
        body.position.y = chassisY + 0.1;
        body.castShadow = true;
        carGroup.add(body);

        // Cabin
        const cabin = new THREE.Mesh(new THREE.BoxGeometry(width - 0.2, 0.6, 2.0), paintMat);
        cabin.position.set(0, chassisY + 0.6, -0.1);
        carGroup.add(cabin);

        // Windshield
        const glass = new THREE.Mesh(new THREE.BoxGeometry(width - 0.25, 0.4, 0.1), glassMat);
        glass.position.set(0, chassisY + 0.6, 0.9);
        glass.rotation.x = -0.1;
        carGroup.add(glass);

        // Rear Window
        const rearGlass = new THREE.Mesh(new THREE.BoxGeometry(width - 0.25, 0.4, 0.1), glassMat);
        rearGlass.position.set(0, chassisY + 0.6, -1.1);
        rearGlass.rotation.x = 0.1;
        carGroup.add(rearGlass);

        // Wheels
        addWheel(-0.9, 0.35, 1.2); addWheel(0.9, 0.35, 1.2);
        addWheel(-0.9, 0.35, -1.2); addWheel(0.9, 0.35, -1.2);
    }

    // Lights
    const zFront = type === 'truck' ? 1.76 : (type === 'suv' ? 2.3 : 2.1);
    const yLight = type === 'truck' ? 1.4 : (type === 'suv' ? 1.3 : 0.8);

    // Headlights
    const hl = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.2, 0.1), lightMat);
    hl.position.set(-0.6, yLight, zFront);
    carGroup.add(hl);
    const hr = hl.clone();
    hr.position.set(0.6, yLight, zFront);
    carGroup.add(hr);

    // Taillights
    const tl = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.2, 0.1), tailMat);
    const zBack = type === 'truck' ? -2.46 : (type === 'suv' ? -2.3 : -2.1);
    const yTail = type === 'truck' ? 1.0 : yLight;
    tl.position.set(-0.6, yTail, zBack);
    carGroup.add(tl);
    const tr = tl.clone();
    tr.position.set(0.6, yTail, zBack);
    carGroup.add(tr);

    return carGroup;
}
