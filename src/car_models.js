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
        } else if (type === 'taxi') {
            color = new THREE.Color(0xffcc00); // Always Yellow
        } else if (type === 'bus') {
            // Bus Colors
            const r = Math.random();
            if (r < 0.33) color = new THREE.Color(0x3366cc); // Blue
            else if (r < 0.66) color = new THREE.Color(0xcc3333); // Red
            else color = new THREE.Color(0xeeeeee); // White
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

        // Body (Sleek) - Added segments
        const chassis = new THREE.Mesh(new THREE.BoxGeometry(width, 0.6, length, 8, 4, 12), paintMat);
        chassis.position.y = chassisY + 0.1;
        chassis.castShadow = true;
        carGroup.add(chassis);

        // Cabin (Bubble)
        const cabin = new THREE.Mesh(new THREE.BoxGeometry(width - 0.4, 0.5, 2.0, 6, 2, 6), paintMat);
        cabin.position.set(0, chassisY + 0.6, -0.2);
        carGroup.add(cabin);

        // Windshield (Visual Glass Block)
        const windshield = new THREE.Mesh(new THREE.BoxGeometry(width - 0.45, 0.3, 0.1), glassMat);
        windshield.position.set(0, chassisY + 0.6, 0.8);
        windshield.rotation.x = -0.2;
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
        // GIANT TRUCK (2x Scale)
        const width = 3.2;  // Was ~2.1, now huge
        const chassisY = 1.2; // Higher ground clearance

        // Separate Cab & Bed for realism
        // Cab - Segments added
        const cab = new THREE.Mesh(new THREE.BoxGeometry(width, 2.0, 2.5, 8, 4, 8), paintMat);
        cab.position.set(0, chassisY + 1.0, 1.5);
        cab.castShadow = true;
        carGroup.add(cab);

        // Windshield
        const windshield = new THREE.Mesh(new THREE.BoxGeometry(width - 0.2, 1.0, 0.1), glassMat);
        windshield.position.set(0, chassisY + 1.4, 2.8);
        carGroup.add(windshield);

        // Bed - Segments added
        const bed = new THREE.Mesh(new THREE.BoxGeometry(width, 1.0, 4.5, 8, 4, 12), paintMat);
        bed.position.set(0, chassisY + 0.5, -2.5);
        bed.castShadow = true;
        carGroup.add(bed);

        // Bed Rails
        const railL = new THREE.Mesh(new THREE.BoxGeometry(0.2, 1.2, 4.5), paintMat);
        railL.position.set(-width / 2 + 0.1, chassisY + 0.6, -2.5);
        carGroup.add(railL);
        const railR = railL.clone();
        railR.position.set(width / 2 - 0.1, chassisY + 0.6, -2.5);
        carGroup.add(railR);

        // Wheels (Monster size)
        addWheel(-1.5, 0.7, 2.5, 2.2); addWheel(1.5, 0.7, 2.5, 2.2); // Front
        addWheel(-1.5, 0.7, -3.5, 2.2); addWheel(1.5, 0.7, -3.5, 2.2); // Rear (Longer wheelbase)

    } else if (type === 'bus') {
        // BUS (Large Public Transit)
        const width = 2.6;
        const length = 8.0;
        const chassisY = 0.6; // Low floor

        if (!color) {
            // Bus Colors
            const r = Math.random();
            if (r < 0.33) color = new THREE.Color(0x3366cc); // Blue
            else if (r < 0.66) color = new THREE.Color(0xcc3333); // Red
            else color = new THREE.Color(0xeeeeee); // White
        }

        const busPaint = new THREE.MeshStandardMaterial({ color: color, roughness: 0.4, metalness: 0.2 });

        // Main Body (Box)
        const body = new THREE.Mesh(new THREE.BoxGeometry(width, 2.8, length, 8, 4, 12), busPaint);
        body.position.set(0, chassisY + 1.4, 0);
        body.castShadow = true;
        carGroup.add(body);

        // Windshield (Large front glass)
        const windshield = new THREE.Mesh(new THREE.BoxGeometry(width - 0.2, 1.2, 0.1), glassMat);
        windshield.position.set(0, chassisY + 1.8, length / 2 + 0.05);
        carGroup.add(windshield);

        // Rear window
        const rearWin = new THREE.Mesh(new THREE.BoxGeometry(width - 0.4, 0.8, 0.1), glassMat);
        rearWin.position.set(0, chassisY + 2.0, -length / 2 - 0.05);
        carGroup.add(rearWin);

        // Side Windows (Strip)
        const sideWinL = new THREE.Mesh(new THREE.BoxGeometry(0.1, 1.0, length - 1.0), glassMat);
        sideWinL.position.set(-width / 2 - 0.05, chassisY + 1.8, 0);
        carGroup.add(sideWinL);

        const sideWinR = sideWinL.clone();
        sideWinR.position.set(width / 2 + 0.05, chassisY + 1.8, 0);
        carGroup.add(sideWinR);

        // Wheels (6 wheels?)
        addWheel(-1.1, 0.5, 2.5, 1.5); addWheel(1.1, 0.5, 2.5, 1.5);
        addWheel(-1.1, 0.5, -2.5, 1.5); addWheel(1.1, 0.5, -2.5, 1.5);

    } else if (type === 'taxi') {
        // TAXI (Yellow Sedan + Sign)
        const width = 1.9;
        const length = 4.4; // Slightly longer
        const chassisY = 0.5;

        // Always Yellow
        if (!color) color = new THREE.Color(0xffcc00);

        // Base Sedan Body
        const body = new THREE.Mesh(new THREE.BoxGeometry(width, 0.7, length, 8, 4, 12), paintMat);
        body.position.y = chassisY + 0.1;
        body.castShadow = true;
        carGroup.add(body);

        // Cabin
        const cabin = new THREE.Mesh(new THREE.BoxGeometry(width - 0.2, 0.6, 2.0, 6, 2, 6), paintMat);
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

        // TAXI SIGN
        const sign = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.2, 0.3), lightMat);
        sign.position.set(0, chassisY + 0.95, -0.2);
        carGroup.add(sign);

    } else if (type === 'suv') {
        const width = 2.1;
        const length = 4.6;
        const chassisY = 0.7;

        // Unified Body - Segments
        const body = new THREE.Mesh(new THREE.BoxGeometry(width, 1.2, length, 8, 4, 12), paintMat);
        body.position.set(0, chassisY + 0.6, 0);
        body.castShadow = true;
        carGroup.add(body);

        // Greenhouse (Upper Glass area)
        const glassStrip = new THREE.Mesh(new THREE.BoxGeometry(width + 0.05, 0.5, length - 1.5), glassMat);
        glassStrip.position.set(0, chassisY + 1.0, -0.2);
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

        // Base - Segments
        const body = new THREE.Mesh(new THREE.BoxGeometry(width, 0.7, length, 8, 4, 12), paintMat);
        body.position.y = chassisY + 0.1;
        body.castShadow = true;
        carGroup.add(body);

        // Cabin - Segments
        const cabin = new THREE.Mesh(new THREE.BoxGeometry(width - 0.2, 0.6, 2.0, 6, 2, 6), paintMat);
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
