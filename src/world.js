import * as THREE from 'three';
import * as BufferGeometryUtils from 'three/addons/utils/BufferGeometryUtils.js';

// --- GEOMETRY UTILS ---

function box(w, h, d, x, y, z) {
    const g = new THREE.BoxGeometry(w, h, d);
    g.translate(x, y, z);
    return g;
}

// --- MATERIALS ---

// High Quality PBR Materials
const matConcrete = new THREE.MeshStandardMaterial({ color: 0x888888, roughness: 0.9, metalness: 0.1 });
const matConcreteDark = new THREE.MeshStandardMaterial({ color: 0x555555, roughness: 0.9, metalness: 0.15 });
const matConcreteLight = new THREE.MeshStandardMaterial({ color: 0xaaaaaa, roughness: 0.8, metalness: 0.05 });
const matBrick = new THREE.MeshStandardMaterial({ color: 0x8d4e3c, roughness: 0.9 });
const matGlassModern = new THREE.MeshStandardMaterial({ color: 0x223344, roughness: 0.1, metalness: 0.9, envMapIntensity: 1.5 });
const matGlassOffice = new THREE.MeshStandardMaterial({ color: 0x334455, roughness: 0.2, metalness: 0.8 });
const matMetal = new THREE.MeshStandardMaterial({ color: 0x555555, roughness: 0.4, metalness: 0.8 });
const matDarkMetal = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.7, metalness: 0.5 });
const matNeonCyan = new THREE.MeshBasicMaterial({ color: 0x00ffff });
const matNeonPink = new THREE.MeshBasicMaterial({ color: 0xff00ff });
const matRoad = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.9 });
const matSidewalk = new THREE.MeshStandardMaterial({ color: 0x555555, roughness: 0.9 });
const matGround = new THREE.MeshStandardMaterial({ color: 0x3a2e26, roughness: 1.0 });
const matLane = new THREE.MeshBasicMaterial({ color: 0xffffff });
const matCloud = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.9, transparent: true, opacity: 0.8 });
const matLight = new THREE.MeshBasicMaterial({ color: 0xffffaa }); // Streetlight bulb

// Tree Materials
const matTrunkBrown = new THREE.MeshStandardMaterial({ color: 0x553311, roughness: 0.9, name: 'trunkBrown' });
const matTrunkWhite = new THREE.MeshStandardMaterial({ color: 0xeeeeee, roughness: 0.8, name: 'trunkWhite' });
const matLeafGreen = new THREE.MeshStandardMaterial({ color: 0x4da737, roughness: 0.8, name: 'leafGreen' });
const matLeafDark = new THREE.MeshStandardMaterial({ color: 0x225522, roughness: 0.9, name: 'leafDark' });
const matLeafPink = new THREE.MeshStandardMaterial({ color: 0xffaacc, roughness: 0.8, name: 'leafPink' });
const matLeafOrange = new THREE.MeshStandardMaterial({ color: 0xdd7722, roughness: 0.8, name: 'leafOrange' });
const matLeafYellow = new THREE.MeshStandardMaterial({ color: 0xddcc22, roughness: 0.8, name: 'leafYellow' });
const matLeafGrey = new THREE.MeshStandardMaterial({ color: 0x888888, roughness: 1.0 }); // Fallback
const matDirt = new THREE.MeshStandardMaterial({ color: 0x5b4033, roughness: 1.0 });
const matTrunkGrey = new THREE.MeshStandardMaterial({ color: 0x666666, roughness: 0.9, name: 'trunkGrey' });
const matTrunkBlack = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.8, name: 'trunkBlack' });

// Tree Geometry Helpers (Reused to avoid allocations)
const geomTrunk = new THREE.CylinderGeometry(0.2, 0.3, 1, 5);
geomTrunk.translate(0, 0.5, 0);
const geomSphere = new THREE.IcosahedronGeometry(1, 1);
const geomCone = new THREE.ConeGeometry(1, 1, 5);
geomCone.translate(0, 0.5, 0);

// --- BUILDERS ---

function createBuildingMesh(width, height, depth, style) {
    // Geometry Collections (for merging)
    const geoms = {
        concrete: [],
        concreteDark: [],
        concreteLight: [],
        brick: [],
        glass: [],
        metal: [],
        darkMetal: [],
        neon: [],
        // Vegetation
        trunkBrown: [],
        trunkWhite: [],
        leafGreen: [],
        leafDark: [],
        leafPink: [],
        leafOrange: [],
        leafYellow: [],
        dirt: [],
        trunkGrey: [],
        trunkBlack: []
    };

    // 1. Structure
    if (style === 'modern') {
        buildModernTower(width, height, depth, geoms);
    } else if (style === 'brick') {
        buildBrickApartment(width, height, depth, geoms);
    } else if (style === 'glass') {
        buildGlassTower(width, height, depth, geoms);
    } else if (style === 'future') {
        buildCyberTower(width, height, depth, geoms);
    } else {
        buildModernTower(width, height, depth, geoms); // Fallback
    }

    // 2. Rooftop Details (General)
    addRooftopDetails(width, height, depth, geoms);

    // 3. Merge & Create Group
    const group = new THREE.Group();

    const add = (arr, mat) => {
        if (arr.length > 0) {
            const merged = BufferGeometryUtils.mergeGeometries(arr);
            const mesh = new THREE.Mesh(merged, mat);
            mesh.castShadow = true;
            mesh.receiveShadow = true;
            group.add(mesh);
        }
    };

    add(geoms.concrete, matConcrete);
    add(geoms.concreteDark, matConcreteDark);
    add(geoms.concreteLight, matConcreteLight);
    add(geoms.brick, matBrick);
    add(geoms.glass, style === 'glass' ? matGlassModern : matGlassOffice);
    add(geoms.metal, matMetal);
    add(geoms.darkMetal, matDarkMetal);
    add(geoms.neon, Math.random() > 0.5 ? matNeonCyan : matNeonPink);

    // Vegetation Merging
    add(geoms.trunkBrown, matTrunkBrown);
    add(geoms.trunkWhite, matTrunkWhite);
    add(geoms.leafGreen, matLeafGreen);
    add(geoms.leafDark, matLeafDark);
    add(geoms.leafPink, matLeafPink);
    add(geoms.leafOrange, matLeafOrange);
    add(geoms.leafYellow, matLeafYellow);
    add(geoms.dirt, matDirt);
    add(geoms.trunkGrey, matTrunkGrey);
    add(geoms.trunkBlack, matTrunkBlack);

    return group;
}

function createProceduralCloudMesh() {
    // Generate multi-blob cloud geometry
    const geoms = [];
    const blobs = 5 + Math.floor(Math.random() * 5);
    const spread = 20;

    for (let i = 0; i < blobs; i++) {
        const s = 10 + Math.random() * 15;
        const x = (Math.random() - 0.5) * spread;
        const y = (Math.random() - 0.5) * spread * 0.4;
        const z = (Math.random() - 0.5) * spread * 0.6;
        geoms.push(box(s, s * 0.6, s * 0.8, x, y, z));
    }

    if (geoms.length === 0) return null;
    const merged = BufferGeometryUtils.mergeGeometries(geoms);
    const mesh = new THREE.Mesh(merged, matCloud);
    mesh.castShadow = true;
    return mesh;
}

function addTreeToGeoms(type, x, z, geoms) {
    // 1. Dirt Patch
    geoms.dirt.push(box(1.5, 0.1, 1.5, x, 0.1, z));

    // 2. Trunk & Leaves
    const rand = Math.random();
    let trunkH = 2.5 + rand;
    let trunkR = 0.3;
    let leafScale = 1.5;

    const addMesh = (geom, matName, posY, scale, rotY = 0) => {
        const g = geom.clone();
        g.scale(scale.x, scale.y, scale.z);
        g.rotateY(rotY);
        g.translate(x, posY, z);
        geoms[matName].push(g);
    };

    if (type === 0) { // Oak (Basic)
        addMesh(geomTrunk, 'trunkBrown', 0, new THREE.Vector3(0.3, trunkH, 0.3));
        addMesh(geomSphere, 'leafGreen', trunkH, new THREE.Vector3(1.8, 1.8, 1.8));
    } else if (type === 1) { // Pine
        addMesh(geomTrunk, 'trunkBrown', 0, new THREE.Vector3(0.2, 2, 0.2));
        addMesh(geomCone, 'leafDark', 2, new THREE.Vector3(2, 1.5, 2));
        addMesh(geomCone, 'leafDark', 3.2, new THREE.Vector3(1.5, 1.5, 1.5));
        addMesh(geomCone, 'leafDark', 4.4, new THREE.Vector3(0.8, 1.5, 0.8));
    } else if (type === 2) { // Birch (Green)
        addMesh(geomTrunk, 'trunkWhite', 0, new THREE.Vector3(0.2, 4, 0.2));
        addMesh(geomSphere, 'leafGreen', 4, new THREE.Vector3(1.6, 2, 1.6));
    } else if (type === 3) { // Oak Variant (Was Sakura)
        addMesh(geomTrunk, 'trunkBrown', 0, new THREE.Vector3(0.25, 3, 0.25));
        addMesh(geomSphere, 'leafGreen', 3, new THREE.Vector3(2, 2, 2));
    } else if (type === 4) { // Poplar (Tall)
        addMesh(geomTrunk, 'trunkBlack', 0, new THREE.Vector3(0.25, 4.5, 0.25));
        addMesh(geomCone, 'leafDark', 3.5, new THREE.Vector3(1.2, 5, 1.2));
    } else if (type === 5) { // Willow
        addMesh(geomTrunk, 'trunkBrown', 0, new THREE.Vector3(0.3, 2.5, 0.3));
        addMesh(geomSphere, 'leafGreen', 2.5, new THREE.Vector3(2.5, 1.5, 2.5));
        // Drooping tendrils
        const count = 8;
        for (let i = 0; i < count; i++) {
            const angle = (i / count) * Math.PI * 2;
            const tx = Math.sin(angle) * 1.5;
            const tz = Math.cos(angle) * 1.5;
            addMesh(geomSphere, 'leafGreen', 2.0, new THREE.Vector3(0.1, 2.0, 0.1), 0); // Using Sphere for tendril consistency
            // Manual rotation for tendrils is hard without a proper rotation matrix in addMesh
            // Simplified: Just vertical tendrils around the edge
            const tGeom = geomSphere.clone();
            tGeom.scale(0.1, 2.5, 0.1);
            tGeom.translate(x + tx, 1.5, z + tz); // Hang down from 2.5 to 0.5ish
            geoms.leafGreen.push(tGeom);
        }
    } else {
        // Bushy (Was Autumn)
        addMesh(geomTrunk, 'trunkGrey', 0, new THREE.Vector3(0.3, 3, 0.3));
        addMesh(geomSphere, 'leafDark', 3, new THREE.Vector3(1.7, 1.7, 1.7)); // Dark Green Leaves
    }
}

function buildModernTower(w, h, d, geoms) {
    // Concrete Grid with recessed windows
    // Use VARIETY of concrete based on random chance per building
    // We can't access "per building" state here easily unless passed in, 
    // but we can randomize use of geoms arrays.

    const matChoice = Math.random();
    let targetConcrete = geoms.concrete;
    if (matChoice < 0.3) targetConcrete = geoms.concreteDark;
    else if (matChoice > 0.7) targetConcrete = geoms.concreteLight;

    // Core Concrete
    targetConcrete.push(box(w, h, d, 0, h / 2, 0));

    // Windows (Grid)
    const floors = Math.floor(h / 3.5);
    const colsX = Math.floor(w / 3.0);
    const colsZ = Math.floor(d / 3.0);
    const floorH = h / floors;
    const colW = w / colsX;
    const colD = d / colsZ;

    // Generate Windows on faces (Instead of one giant box)
    // Front/Back
    for (let i = 0; i < colsX; i++) {
        for (let j = 1; j < floors; j++) {
            const cx = -w / 2 + colW / 2 + i * colW;
            const cy = j * floorH + floorH / 2;
            // Front
            geoms.glass.push(box(colW * 0.7, floorH * 0.7, 0.2, cx, cy, d / 2 + 0.05));
            // Back
            geoms.glass.push(box(colW * 0.7, floorH * 0.7, 0.2, cx, cy, -d / 2 - 0.05));
        }
    }
    // Left/Right
    for (let i = 0; i < colsZ; i++) {
        for (let j = 1; j < floors; j++) {
            const cz = -d / 2 + colD / 2 + i * colD;
            const cy = j * floorH + floorH / 2;
            // Left (x+)
            geoms.glass.push(box(0.2, floorH * 0.7, colD * 0.7, w / 2 + 0.05, cy, cz));
            // Right (x-)
            geoms.glass.push(box(0.2, floorH * 0.7, colD * 0.7, -w / 2 - 0.05, cy, cz));
        }
    }

    // Horizontal Bands (Accent color?)
    for (let i = 0; i <= floors; i++) {
        const arr = Math.random() > 0.5 ? targetConcrete : geoms.darkMetal;
        arr.push(box(w + 0.3, 0.4, d + 0.3, 0, i * floorH, 0));
    }

    // Vertical Columns
    for (let i = 0; i <= colsX; i++) {
        targetConcrete.push(box(0.6, h, d - 0.5, -w / 2 + i * colW, h / 2, 0));
    }
}

function buildBrickApartment(w, h, d, geoms) {
    // Brick box
    geoms.brick.push(box(w, h, d, 0, h / 2, 0));

    // Windows (Inset frames)
    const floorH = 3.2;
    const floors = Math.floor(h / floorH);
    const winW = 1.8;
    const winH = 2.0;

    // iterate faces... simplified: Add "Frames" sticking out
    const spacing = 3.0;
    const cols = Math.floor(w / spacing);

    for (let f = 1; f < floors; f++) {
        const y = f * floorH + 1.0;

        // Front/Back
        for (let c = 0; c < cols; c++) {
            const x = -w / 2 + 2 + c * spacing;
            if (x > w / 2 - 1) continue;

            // Frame
            geoms.concrete.push(box(winW + 0.2, winH + 0.2, 0.2, x, y, d / 2));
            geoms.concrete.push(box(winW + 0.2, winH + 0.2, 0.2, x, y, -d / 2));
            // Glass
            geoms.glass.push(box(winW, winH, 0.1, x, y, d / 2 + 0.1));
            geoms.glass.push(box(winW, winH, 0.1, x, y, -d / 2 - 0.1));
        }
    }

    // Fire Escape (Side)
    for (let f = 1; f < floors; f++) {
        geoms.darkMetal.push(box(3.0, 0.2, 1.0, 0, f * floorH, d / 2 + 0.8)); // Platform
        geoms.darkMetal.push(box(3.0, 0.1, 0.1, 0, f * floorH + 0.5, d / 2 + 1.3)); // Rail
        // Ladder
        geoms.darkMetal.push(box(0.6, floorH + 0.5, 0.1, 1.0, f * floorH + floorH / 2, d / 2 + 1.2));
    }
}

function buildGlassTower(w, h, d, geoms) {
    // Sleek continuous glass
    geoms.glass.push(box(w, h, d, 0, h / 2, 0));

    // Thin metal mullions
    const cols = Math.floor(w / 2.0);
    for (let i = 0; i <= cols; i++) {
        geoms.metal.push(box(0.1, h, d + 0.05, -w / 2 + i * (w / cols), h / 2, 0));
    }
    // Floors
    const floors = Math.floor(h / 4.0);
    for (let i = 0; i < floors; i++) {
        geoms.metal.push(box(w + 0.05, 0.2, d + 0.05, 0, i * 4.0, 0));
    }
}

function buildCyberTower(w, h, d, geoms) {
    // Dark metal monolith
    geoms.darkMetal.push(box(w, h, d, 0, h / 2, 0));

    // Neon rings
    geoms.neon.push(box(w + 0.1, 0.5, d + 0.1, 0, h * 0.8, 0));
    geoms.neon.push(box(w + 0.1, 0.5, d + 0.1, 0, h * 0.5, 0));
    geoms.neon.push(box(w + 0.1, 0.5, d + 0.1, 0, h * 0.2, 0));

    // Antenna
    geoms.metal.push(box(0.5, 10, 0.5, 0, h + 5, 0));
    geoms.neon.push(box(0.2, 2, 0.2, 0, h + 10, 0));
}

function addRooftopDetails(w, h, d, geoms) {
    // AC Unit
    if (Math.random() > 0.3) {
        geoms.metal.push(box(2, 1.5, 2, 2, h + 0.75, 2));
    }
    // Water Tower
    if (Math.random() < 0.2) {
        geoms.brick.push(box(2, 2.5, 2, -2, h + 1.25, -2)); // Simple box representation
        geoms.metal.push(box(1.8, 0.5, 1.8, -2, h + 2.5, -2)); // Roof
    }
    // Parapet
    geoms.concrete.push(box(w, 0.5, 0.2, 0, h + 0.25, d / 2 - 0.1));
    geoms.concrete.push(box(w, 0.5, 0.2, 0, h + 0.25, -d / 2 + 0.1));
    geoms.concrete.push(box(0.2, 0.5, d, w / 2 - 0.1, h + 0.25, 0));
    geoms.concrete.push(box(0.2, 0.5, d, -w / 2 + 0.1, h + 0.25, 0));
}

// --- WORLD GENERATION ---

export function createCityChunk(xPos, zPos, size, roadWidth = 24) {
    const chunkGroup = new THREE.Group();
    const colliders = [];

    // 1. Road (Ground)
    const road = new THREE.Mesh(new THREE.PlaneGeometry(size, size), matRoad);
    road.rotation.x = -Math.PI / 2;
    road.position.set(xPos, 0, zPos);
    road.receiveShadow = true;
    chunkGroup.add(road);

    // Lane Markings
    const laneH = new THREE.Mesh(new THREE.PlaneGeometry(size, 0.5), matLane);
    laneH.rotation.x = -Math.PI / 2;
    laneH.position.set(xPos, 0.02, zPos);
    chunkGroup.add(laneH);
    const laneV = new THREE.Mesh(new THREE.PlaneGeometry(0.5, size), matLane);
    laneV.rotation.x = -Math.PI / 2;
    laneV.position.set(xPos, 0.02, zPos);
    chunkGroup.add(laneV);

    // 2. Buildings Blocks (Corners)
    const cornerSize = (size - roadWidth) / 2;
    const offset = (roadWidth + cornerSize) / 2;

    const corners = [
        { x: -offset, z: -offset }, { x: offset, z: -offset },
        { x: offset, z: offset }, { x: -offset, z: offset }
    ];

    corners.forEach(Corner => {
        // Sidewalk
        const sw = new THREE.Mesh(new THREE.BoxGeometry(cornerSize, 0.2, cornerSize), matSidewalk);
        sw.position.set(xPos + Corner.x, 0.1, zPos + Corner.z);
        sw.receiveShadow = true;
        chunkGroup.add(sw);

        // Building
        if (Math.random() > 0.1) {
            const margin = 10;
            const bw = cornerSize - margin;

            if (bw > 3) {
                // Decide Style
                const r = Math.random();
                let style = 'modern';
                let bh = 20 + Math.random() * 40;

                if (r < 0.1) {
                    // Giga Tower (Rare)
                    style = 'future';
                    bh = 300 + Math.random() * 200;
                } else if (r < 0.25) {
                    // Mega Tower (Uncommon)
                    style = 'glass';
                    bh = 120 + Math.random() * 100;
                } else if (r < 0.45) {
                    style = 'brick';
                    bh = 15 + Math.random() * 25;
                } else if (r < 0.6) {
                    style = 'glass';
                    bh = 40 + Math.random() * 60;
                } else if (r < 0.7) {
                    style = 'future';
                    bh = 50 + Math.random() * 50;
                }

                const bMesh = createBuildingMesh(bw, bh, bw, style);
                bMesh.position.set(xPos + Corner.x, 0, zPos + Corner.z);
                chunkGroup.add(bMesh);

                // Collider
                const box = new THREE.Box3();
                box.min.set(xPos + Corner.x - bw / 2, 0, zPos + Corner.z - bw / 2);
                box.max.set(xPos + Corner.x + bw / 2, bh, zPos + Corner.z + bw / 2);
                colliders.push(box);
            }
        }
    });

    // --- VEGETATION PASS ---
    const vegGeoms = {
        trunkBrown: [], trunkWhite: [],
        leafGreen: [], leafDark: [], leafPink: [], leafOrange: [], leafYellow: [], dirt: [],
        trunkGrey: [], trunkBlack: []
    };

    corners.forEach(Corner => {
        const margin = 10;
        const width = cornerSize - margin;
        if (cornerSize > 6) {
            // Pick random unique sides to prevent overlap
            const sides = [0, 1, 2, 3];
            // Shuffle
            for (let i = sides.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [sides[i], sides[j]] = [sides[j], sides[i]];
            }

            const numTrees = Math.floor(Math.random() * 3); // 0-2 trees

            for (let i = 0; i < numTrees; i++) {
                const type = Math.floor(Math.random() * 6);
                const r = (width / 2 + cornerSize / 2) / 2;
                const side = sides[i]; // Unique side
                // Reduced range (0.6) to avoid corners/streetlights
                const offset = (Math.random() - 0.5) * width * 0.6;
                let tx = xPos + Corner.x, tz = zPos + Corner.z;

                if (side === 0) { tx += r; tz += offset; }
                else if (side === 1) { tx -= r; tz += offset; }
                else if (side === 2) { tz += r; tx += offset; }
                else { tz -= r; tx += offset; }

                addTreeToGeoms(type, tx, tz, vegGeoms);
            }
        }
    });

    const addVeg = (arr, mat) => {
        if (arr.length > 0) {
            const merged = BufferGeometryUtils.mergeGeometries(arr);
            const mesh = new THREE.Mesh(merged, mat);
            mesh.castShadow = true;
            mesh.receiveShadow = true;
            chunkGroup.add(mesh);
        }
    };
    addVeg(vegGeoms.trunkBrown, matTrunkBrown);
    addVeg(vegGeoms.trunkWhite, matTrunkWhite);
    addVeg(vegGeoms.leafGreen, matLeafGreen);
    addVeg(vegGeoms.leafDark, matLeafDark);
    addVeg(vegGeoms.leafPink, matLeafPink);
    addVeg(vegGeoms.leafOrange, matLeafOrange);
    addVeg(vegGeoms.leafYellow, matLeafYellow);
    addVeg(vegGeoms.dirt, matDirt);
    addVeg(vegGeoms.trunkGrey, matTrunkGrey);
    addVeg(vegGeoms.trunkBlack, matTrunkBlack);

    // 3. Streetlights (merged)
    const poleGeoms = [];
    const bulbGeoms = [];

    // Corners of intersection
    const lightOffset = roadWidth / 2 + 1;
    const poles = [
        { x: -lightOffset, z: -lightOffset, r: Math.PI / 4 },
        { x: lightOffset, z: lightOffset, r: -3 * Math.PI / 4 },
        { x: -lightOffset, z: lightOffset, r: 3 * Math.PI / 4 },
        { x: lightOffset, z: -lightOffset, r: -Math.PI / 4 },
    ];

    poles.forEach(p => {
        // Pole
        poleGeoms.push(box(0.3, 8, 0.3, xPos + p.x, 4, zPos + p.z));
        // Arm
        // Rotate arm? box util doesn't support complex rotation easily, keep simple
        poleGeoms.push(box(2, 0.2, 0.2, xPos + p.x + Math.sin(p.r), 7.5, zPos + p.z + Math.cos(p.r)));
        // Bulb
        bulbGeoms.push(box(0.5, 0.2, 0.5, xPos + p.x + Math.sin(p.r) * 1.5, 7.4, zPos + p.z + Math.cos(p.r) * 1.5));
    });

    if (poleGeoms.length > 0) {
        const pMesh = new THREE.Mesh(BufferGeometryUtils.mergeGeometries(poleGeoms), matDarkMetal);
        pMesh.castShadow = true;
        chunkGroup.add(pMesh);
        const bMesh = new THREE.Mesh(BufferGeometryUtils.mergeGeometries(bulbGeoms), matLight);
        chunkGroup.add(bMesh);
    }

    // Clouds
    const numClouds = 2;
    for (let i = 0; i < numClouds; i++) {
        const c = createProceduralCloudMesh();
        if (c) {
            c.userData.isCloud = true;
            c.position.set(xPos + (Math.random() - 0.5) * size, 600 + Math.random() * 200, zPos + (Math.random() - 0.5) * size);
            chunkGroup.add(c);
        }
    }

    return { mesh: chunkGroup, colliders: colliders };
}

export function createHighwayChunk(xPos, zPos, size, roadWidth, type = 'x') {
    const chunkGroup = new THREE.Group();
    const colliders = [];

    // Ground
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(size, size), matGround);
    ground.rotation.x = -Math.PI / 2;
    ground.position.set(xPos, -0.5, zPos);
    ground.receiveShadow = true;
    chunkGroup.add(ground);

    const buildX = (type === 'x' || type === 'cross');
    const buildZ = (type === 'z' || type === 'cross');

    if (buildX) {
        const road = new THREE.Mesh(new THREE.PlaneGeometry(size, roadWidth), matRoad);
        road.rotation.x = -Math.PI / 2;
        road.position.set(xPos, 0, zPos);
        road.receiveShadow = true;
        chunkGroup.add(road);

        const lane = new THREE.Mesh(new THREE.PlaneGeometry(size, 0.5), matLane);
        lane.rotation.x = -Math.PI / 2;
        lane.position.set(xPos, 0.02, zPos);
        chunkGroup.add(lane);
    }
    if (buildZ) {
        const road = new THREE.Mesh(new THREE.PlaneGeometry(roadWidth, size), matRoad);
        road.rotation.x = -Math.PI / 2;
        road.position.set(xPos, 0.01, zPos);
        road.receiveShadow = true;
        chunkGroup.add(road);

        const lane = new THREE.Mesh(new THREE.PlaneGeometry(0.5, size), matLane);
        lane.rotation.x = -Math.PI / 2;
        lane.position.set(xPos, 0.02, zPos);
        chunkGroup.add(lane);
    }

    return { mesh: chunkGroup, colliders: colliders };
}

export function createWastelandChunk(xPos, zPos, size) {
    const chunkGroup = new THREE.Group();
    const colliders = [];
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(size, size), matGround);
    ground.rotation.x = -Math.PI / 2;
    ground.position.set(xPos, -0.5, zPos);
    ground.receiveShadow = true;
    chunkGroup.add(ground);
    return { mesh: chunkGroup, colliders: colliders };
}

export async function createWorld(scene) {
    const ambientLight = new THREE.AmbientLight(0x222233, 0.3);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xaaccff, 0.5);
    directionalLight.position.set(50, 500, 50);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 500;
    directionalLight.shadow.camera.left = -200;
    directionalLight.shadow.camera.right = 200;
    directionalLight.shadow.camera.top = 200;
    directionalLight.shadow.camera.bottom = -200;
    scene.add(directionalLight);

    return {
        roadWidth: 14,
        blockSize: 40,
        citySize: 1000,
        directionalLight,
        ambientLight,
        materials: {
            road: matRoad,
            sidewalk: matSidewalk,
            building: matConcrete,
            glassModern: matGlassModern,
            glassOffice: matGlassOffice,
            metal: matMetal,
            darkMetal: matDarkMetal,
            cloud: matCloud
        }
    };
}
