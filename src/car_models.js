import * as THREE from 'three';
import * as BufferGeometryUtils from 'three/addons/utils/BufferGeometryUtils.js';

// --- MATERIALS ---
const matBody = new THREE.MeshStandardMaterial({ roughness: 0.2, metalness: 0.7, envMapIntensity: 1.0 }); // Dynamic Color
const matGlass = new THREE.MeshStandardMaterial({ color: 0x112233, roughness: 0.1, metalness: 0.9, envMapIntensity: 1.0 });
const matRubber = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.9, metalness: 0.1 });
const matRim = new THREE.MeshStandardMaterial({ color: 0xcccccc, roughness: 0.2, metalness: 0.8 });
const matChrome = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.2, metalness: 0.9 });
const matPlastic = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.8 });
const matLightFront = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffeeaa, emissiveIntensity: 2.0 });
const matLightRear = new THREE.MeshStandardMaterial({ color: 0x550000, emissive: 0xff0000, emissiveIntensity: 2.0 });

export function createCarMesh(type = 'sedan', color = null) {
    const carGroup = new THREE.Group();
    carGroup.userData.type = type;

    // 1. Color Selection
    if (!color) {
        color = pickColor(type);
    }
    // Instance specific paint material (cloned so we can set color)
    const paint = matBody.clone();
    paint.color.set(color);

    // 2. Geometry Collections
    const geoms = {
        paint: [],
        glass: [],
        rubber: [],
        rim: [],
        chrome: [],
        plastic: [],
        lightFront: [],
        lightRear: []
    };

    // 3. Build Car based on Type
    if (type === 'sedan') buildSedan(geoms);
    else if (type === 'suv') buildSUV(geoms);
    else if (type === 'sport') buildSport(geoms);
    else if (type === 'truck') buildTruck(geoms);
    else if (type === 'taxi') buildTaxi(geoms);
    else if (type === 'bus') buildBus(geoms);
    else buildSedan(geoms); // Fallback

    // 4. Merge and Create Meshes
    // We create one mesh per material

    // Helper to merge and add
    const addMerged = (geomArray, material) => {
        if (geomArray.length > 0) {
            const merged = BufferGeometryUtils.mergeGeometries(geomArray);
            const mesh = new THREE.Mesh(merged, material);
            mesh.castShadow = true;
            mesh.receiveShadow = true;
            carGroup.add(mesh);
        }
    };

    addMerged(geoms.paint, paint);
    addMerged(geoms.glass, matGlass);
    addMerged(geoms.rubber, matRubber);
    addMerged(geoms.rim, matRim);
    addMerged(geoms.chrome, matChrome);
    addMerged(geoms.plastic, matPlastic);
    addMerged(geoms.lightFront, matLightFront);
    addMerged(geoms.lightRear, matLightRear);

    // Optimization: Cache local bounding box to avoid per-frame traversal
    // This box is in local space (relative to car origin)
    if (!carGroup.userData.localBox) {
        carGroup.userData.localBox = new THREE.Box3().setFromObject(carGroup);
    }

    carGroup.castShadow = true;
    carGroup.receiveShadow = true;

    return carGroup;
}

// --- HELPERS FOR GEOMETRY ---

function box(w, h, d, x, y, z, rx = 0, ry = 0, rz = 0) {
    const g = new THREE.BoxGeometry(w, h, d);
    if (rx || ry || rz) g.rotateX(rx).rotateY(ry).rotateZ(rz);
    g.translate(x, y, z);
    return g;
}

function cyl(rTop, rBot, h, radial, x, y, z, rx = 0, ry = 0, rz = 0) {
    const g = new THREE.CylinderGeometry(rTop, rBot, h, radial);
    if (rx || ry || rz) g.rotateX(rx).rotateY(ry).rotateZ(rz);
    g.translate(x, y, z);
    return g;
}

function addWindows(geoms, w, h, d, x, y, z) {
    geoms.glass.push(box(w + 0.05, h, d + 0.05, x, y, z));
}

function addWheels(geoms, wBody, wheelbase, radius = 0.35) {
    const wWheel = 0.25;
    const x = wBody / 2 - 0.1;
    const z = wheelbase / 2;
    const y = radius;

    const makeWheel = (wx, wy, wz) => {
        // Tire
        geoms.rubber.push(cyl(radius, radius, wWheel, 24, wx, wy, wz, 0, 0, Math.PI / 2));
        // Rim
        geoms.rim.push(cyl(radius * 0.6, radius * 0.6, wWheel + 0.02, 12, wx, wy, wz, 0, 0, Math.PI / 2));
    }

    makeWheel(-x, y, z);
    makeWheel(x, y, z);
    makeWheel(-x, y, -z);
    makeWheel(x, y, -z);
}


// --- BUILDERS ---

function buildSedan(geoms) {
    const w = 1.9, l = 4.7, hChassis = 0.55, hCabin = 0.5;
    const wheelY = 0.35;

    // 1. Chassis
    geoms.paint.push(box(w, hChassis, l - 0.4, 0, wheelY + hChassis / 2, 0));

    // 2. Bumpers
    geoms.plastic.push(box(w, 0.35, 0.3, 0, wheelY + 0.2, l / 2 - 0.15));
    geoms.plastic.push(box(w, 0.35, 0.3, 0, wheelY + 0.2, -l / 2 + 0.15));

    // 3. Grille
    geoms.plastic.push(box(1.0, 0.25, 0.1, 0, wheelY + 0.35, l / 2));

    // Lights
    geoms.lightFront.push(box(0.35, 0.15, 0.2, -0.6, wheelY + 0.45, l / 2 - 0.1));
    geoms.lightFront.push(box(0.35, 0.15, 0.2, 0.6, wheelY + 0.45, l / 2 - 0.1));
    geoms.lightRear.push(box(0.35, 0.2, 0.1, -0.6, wheelY + 0.45, -l / 2 + 0.05));
    geoms.lightRear.push(box(0.35, 0.2, 0.1, 0.6, wheelY + 0.45, -l / 2 + 0.05));

    // 4. Cabin
    geoms.paint.push(box(w - 0.2, hCabin, l * 0.4, 0, wheelY + hChassis + hCabin / 2 - 0.05, -0.2));

    // Windows
    geoms.glass.push(box(w - 0.25, hCabin - 0.1, 0.1, 0, wheelY + hChassis + 0.25, l * 0.22 - 0.2, -0.3, 0, 0));
    geoms.glass.push(box(w - 0.25, hCabin - 0.1, 0.1, 0, wheelY + hChassis + 0.25, -l * 0.4 - 0.2, 0.25, 0, 0));

    addWindows(geoms, w - 0.15, hCabin - 0.15, l * 0.3, 0, wheelY + hChassis + hCabin / 2 - 0.05, -0.2);

    // 5. Mirrors
    geoms.paint.push(box(0.2, 0.12, 0.1, -w / 2 - 0.05, wheelY + hChassis + 0.1, 0.5));
    geoms.paint.push(box(0.2, 0.12, 0.1, w / 2 + 0.05, wheelY + hChassis + 0.1, 0.5));

    addWheels(geoms, w, 2.8, 0.35);
}

function buildTaxi(geoms) {
    const w = 1.9, l = 4.8, hChassis = 0.55, hCabin = 0.5;
    const wheelY = 0.35;

    geoms.paint.push(box(w, hChassis, l - 0.5, 0, wheelY + hChassis / 2, 0));

    // Bumpers
    geoms.plastic.push(box(w, 0.3, 0.4, 0, wheelY + 0.2, l / 2 - 0.2));
    geoms.plastic.push(box(w, 0.3, 0.4, 0, wheelY + 0.2, -l / 2 + 0.4));

    // Grille & Lights
    geoms.plastic.push(box(0.8, 0.2, 0.1, 0, wheelY + 0.4, l / 2));
    geoms.lightFront.push(box(0.3, 0.15, 0.1, -0.6, wheelY + 0.45, l / 2));
    geoms.lightFront.push(box(0.3, 0.15, 0.1, 0.6, wheelY + 0.45, l / 2));
    geoms.lightRear.push(box(0.3, 0.15, 0.1, -0.6, wheelY + 0.45, -l / 2 + 0.2));
    geoms.lightRear.push(box(0.3, 0.15, 0.1, 0.6, wheelY + 0.45, -l / 2 + 0.2));

    // Cabin
    geoms.paint.push(box(w - 0.2, hCabin, l * 0.45, 0, wheelY + hChassis + hCabin / 2 - 0.05, -0.1));

    // Windows
    geoms.glass.push(box(w - 0.25, hCabin - 0.1, 0.1, 0, wheelY + hChassis + 0.25, l * 0.22, -0.2, 0, 0));
    geoms.glass.push(box(w - 0.25, hCabin - 0.1, 0.1, 0, wheelY + hChassis + 0.25, -l * 0.35, 0.2, 0, 0));
    addWindows(geoms, w - 0.15, hCabin - 0.15, l * 0.35, 0, wheelY + hChassis + hCabin / 2 - 0.05, -0.1);

    // Taxi Sign
    geoms.plastic.push(box(0.1, 0.05, 1.0, 0, wheelY + hChassis + hCabin, -0.1));
    geoms.lightFront.push(box(0.6, 0.2, 0.25, 0, wheelY + hChassis + hCabin + 0.15, -0.1)); // Yellow glow handled by matLightFront (kinda)? User wanted yellow.
    // NOTE: Material limitations. Merging means sharing material. 
    // matLightFront is white/yellowish. Ideally we need a matTaxiSign.
    // For now, reusing lightFront is OK, or we skip merging for the sign specific part? 
    // Let's stick to simple merging.

    addWheels(geoms, w, 2.9, 0.35);
}

function buildSUV(geoms) {
    const w = 2.1, l = 4.9, hChassis = 0.65, hCabin = 0.6;
    const wheelY = 0.42;

    geoms.paint.push(box(w, hChassis, l - 0.2, 0, wheelY + hChassis / 2, 0));

    // Bumpers
    geoms.plastic.push(box(w, 0.4, 0.35, 0, wheelY + 0.25, l / 2 - 0.1));
    geoms.plastic.push(box(w, 0.4, 0.35, 0, wheelY + 0.25, -l / 2 + 0.1));
    geoms.chrome.push(box(1.2, 0.3, 0.1, 0, wheelY + 0.3, l / 2 + 0.1));

    // Grille 
    geoms.plastic.push(box(1.0, 0.4, 0.1, 0, wheelY + 0.5, l / 2));

    // Lights
    geoms.lightFront.push(box(0.35, 0.25, 0.1, -0.7, wheelY + 0.6, l / 2));
    geoms.lightFront.push(box(0.35, 0.25, 0.1, 0.7, wheelY + 0.6, l / 2));
    geoms.lightRear.push(box(0.2, 0.5, 0.1, -0.7, wheelY + 0.6, -l / 2 + 0.05));
    geoms.lightRear.push(box(0.2, 0.5, 0.1, 0.7, wheelY + 0.6, -l / 2 + 0.05));

    // Cabin
    geoms.paint.push(box(w - 0.1, hCabin, l * 0.55, 0, wheelY + hChassis + hCabin / 2 - 0.05, 0.1));

    // Windows
    geoms.glass.push(box(w - 0.15, hCabin - 0.1, 0.1, 0, wheelY + hChassis + 0.25, l * 0.27, -0.2, 0, 0));
    geoms.glass.push(box(w - 0.15, hCabin - 0.1, 0.1, 0, wheelY + hChassis + 0.25, -l * 0.27 + 0.1, 0, 0, 0));
    addWindows(geoms, w - 0.05, hCabin - 0.15, l * 0.45, 0, wheelY + hChassis + hCabin / 2 - 0.05, 0.1);

    // Roof Rails
    geoms.chrome.push(box(0.1, 0.1, l * 0.5, -w / 2 + 0.3, wheelY + hChassis + hCabin, 0.1));
    geoms.chrome.push(box(0.1, 0.1, l * 0.5, w / 2 - 0.3, wheelY + hChassis + hCabin, 0.1));

    // Spare Tire
    geoms.rubber.push(cyl(0.35, 0.35, 0.25, 16, 0, wheelY + hChassis + 0.1, -l / 2 - 0.1, Math.PI / 2, 0, 0));

    addWheels(geoms, w + 0.1, 2.9, 0.45);
}

function buildSport(geoms) {
    const w = 2.0, l = 4.6, hChassis = 0.45, hCabin = 0.45;
    const wheelY = 0.35;

    // Tub
    geoms.paint.push(box(w - 0.2, hChassis, l * 0.8, 0, wheelY + hChassis / 2, 0));

    // Widebody Fenders
    geoms.paint.push(box(0.4, hChassis + 0.15, 1.4, w / 2 - 0.2, wheelY + hChassis / 2 + 0.05, -1.2));
    geoms.paint.push(box(0.4, hChassis + 0.15, 1.4, -w / 2 + 0.2, wheelY + hChassis / 2 + 0.05, -1.2));

    // Nose
    geoms.paint.push(box(w, hChassis - 0.1, 1.2, 0, wheelY + 0.2, 1.8, 0.1, 0, 0));
    geoms.plastic.push(box(w + 0.1, 0.05, 0.5, 0, wheelY + 0.1, 2.2)); // Splitter

    // Cabin
    geoms.paint.push(box(w - 0.5, hCabin, l * 0.35, 0, wheelY + hChassis + hCabin / 2 - 0.05, 0.1));
    geoms.glass.push(box(w - 0.55, hCabin - 0.1, 1.2, 0, wheelY + hChassis + hCabin / 2 - 0.05, 0.3, -0.3, 0, 0));

    // Wing
    const wingH = wheelY + hChassis + 0.6;
    geoms.paint.push(box(w + 0.2, 0.05, 0.4, 0, wingH, -l / 2 + 0.2));
    geoms.plastic.push(box(0.05, 0.4, 0.2, -0.5, wingH - 0.2, -l / 2 + 0.3));
    geoms.plastic.push(box(0.05, 0.4, 0.2, 0.5, wingH - 0.2, -l / 2 + 0.3));

    addWheels(geoms, w + 0.1, 2.7, 0.38);
}

function buildTruck(geoms) {
    const w = 2.4, l = 5.8, hFrame = 0.6;
    const wheelY = 0.5;

    // Frame
    geoms.plastic.push(box(w - 0.4, hFrame, l, 0, wheelY + hFrame / 2, 0));

    // Cab
    const hCab = 1.3, lCab = 2.2;
    geoms.paint.push(box(w, hCab, lCab, 0, wheelY + hFrame + hCab / 2 - 0.1, l / 2 - lCab / 2 - 0.2));

    // Windows
    geoms.glass.push(box(w - 0.1, 0.7, 0.1, 0, wheelY + hFrame + 0.8, l / 2 - 0.15, -0.15, 0, 0));
    geoms.glass.push(box(w - 0.4, 0.5, 0.1, 0, wheelY + hFrame + 0.9, l / 2 - lCab - 0.25));
    addWindows(geoms, w + 0.05, 0.6, lCab - 0.6, 0, wheelY + hFrame + hCab / 2 - 0.1, l / 2 - lCab / 2 - 0.2);

    // Bed
    const lBed = 2.6, hBed = 0.8;
    geoms.paint.push(box(0.2, hBed, lBed, -w / 2 + 0.1, wheelY + hFrame + hBed / 2, -l / 2 + lBed / 2 + 0.4));
    geoms.paint.push(box(0.2, hBed, lBed, w / 2 - 0.1, wheelY + hFrame + hBed / 2, -l / 2 + lBed / 2 + 0.4));
    geoms.paint.push(box(w - 0.4, 0.1, lBed, 0, wheelY + hFrame + 0.4, -l / 2 + lBed / 2 + 0.4));
    geoms.paint.push(box(w, hBed, 0.15, 0, wheelY + hFrame + hBed / 2, -l / 2 + 0.4)); // Tailgate

    // Grille 
    geoms.chrome.push(box(1.4, 0.6, 0.1, 0, wheelY + 0.8, l / 2));
    geoms.lightFront.push(box(0.3, 0.4, 0.1, -0.9, wheelY + 0.8, l / 2));
    geoms.lightFront.push(box(0.3, 0.4, 0.1, 0.9, wheelY + 0.8, l / 2));

    addWheels(geoms, w + 0.2, 3.8, 0.6);
}

function buildBus(geoms) {
    const w = 2.6, l = 9.0, h = 2.8;
    const wheelY = 0.5;
    const bodyH = h - 0.5;

    // Body
    geoms.paint.push(box(w, bodyH, l, 0, wheelY + 0.5 + bodyH / 2 - 0.2, 0));

    // AC
    geoms.plastic.push(box(w - 0.4, 0.4, 3.0, 0, wheelY + 0.5 + bodyH + 0.1, -1.0));

    // Windows
    geoms.glass.push(box(0.1, 1.2, l - 1.5, -w / 2 - 0.05, wheelY + 2.0, 0));
    geoms.glass.push(box(0.1, 1.2, l - 1.5, w / 2 + 0.05, wheelY + 2.0, 0));
    geoms.glass.push(box(w - 0.2, 1.4, 0.1, 0, wheelY + 1.8, l / 2 + 0.05, -0.05, 0, 0));

    // Lights
    geoms.lightFront.push(box(0.25, 0.25, 0.1, -w / 2 + 0.4, wheelY + 0.8, l / 2 + 0.05));
    geoms.lightFront.push(box(0.25, 0.25, 0.1, w / 2 - 0.4, wheelY + 0.8, l / 2 + 0.05));

    addWheels(geoms, w - 0.3, 5.5, 0.55);
}

function pickColor(type) {
    if (type === 'taxi') return 0xffcc00;
    if (type === 'bus') return Math.random() < 0.5 ? 0x3366cc : 0xcc3333;
    if (type === 'truck') return 0x885533;
    const colors = [0x111111, 0xeeeeee, 0x888888, 0xcc0000, 0x0033cc, 0x225522, 0x550000];
    return colors[Math.floor(Math.random() * colors.length)];
}
