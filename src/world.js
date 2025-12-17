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

// --- BUILDERS ---

function createBuildingMesh(x, z, width, height, depth, style, geoms) {
    // 1. Structure
    if (style === 'modern') {
        buildModernTower(x, z, width, height, depth, geoms);
    } else if (style === 'brick') {
        buildBrickApartment(x, z, width, height, depth, geoms);
    } else if (style === 'glass') {
        buildGlassTower(x, z, width, height, depth, geoms);
    } else if (style === 'future') {
        buildCyberTower(x, z, width, height, depth, geoms);
    } else {
        buildModernTower(x, z, width, height, depth, geoms); // Fallback
    }

    // 2. Rooftop Details (General)
    addRooftopDetails(x, z, width, height, depth, geoms);
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
    // ... rest of tree logic is fine, just need to ensure geoms reference is correct ...
    // NOTE: The previous addTreeToGeoms implementation seems fine as it already accepted 'geoms'
    // Let's just make sure we adapt buildModernTower etc to accept absolute X/Z or offset them

    // Actually, box() helper adds coords.
    // The previous implementation used relative coords inside the builder and added to a group.
    // Now we need GLOBAL coords (relative to chunk center 0,0) passed into box().

    // Re-implementing helper to be safe:
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
            addMesh(geomSphere, 'leafGreen', 2.0, new THREE.Vector3(0.1, 2.0, 0.1), 0);

            const tGeom = geomSphere.clone();
            tGeom.scale(0.1, 2.5, 0.1);
            tGeom.translate(x + tx, 1.5, z + tz);
            geoms.leafGreen.push(tGeom);
        }
    } else {
        // Bushy (Was Autumn)
        addMesh(geomTrunk, 'trunkGrey', 0, new THREE.Vector3(0.3, 3, 0.3));
        addMesh(geomSphere, 'leafDark', 3, new THREE.Vector3(1.7, 1.7, 1.7));
    }
}

function buildModernTower(x, z, w, h, d, geoms) {
    // Concrete Grid with recessed windows
    const matChoice = Math.random();
    let targetConcrete = geoms.concrete;
    if (matChoice < 0.3) targetConcrete = geoms.concreteDark;
    else if (matChoice > 0.7) targetConcrete = geoms.concreteLight;

    // Core Concrete
    targetConcrete.push(box(w, h, d, x, h / 2, z));

    // Windows (Grid)
    const floors = Math.floor(h / 3.5);
    const colsX = Math.floor(w / 3.0);
    const colsZ = Math.floor(d / 3.0);
    const floorH = h / floors;
    const colW = w / colsX;
    const colD = d / colsZ;

    // Front/Back
    for (let i = 0; i < colsX; i++) {
        for (let j = 1; j < floors; j++) {
            const cx = x - w / 2 + colW / 2 + i * colW;
            const cy = j * floorH + floorH / 2;
            // Front
            geoms.glass.push(box(colW * 0.7, floorH * 0.7, 0.2, cx, cy, z + d / 2 + 0.05));
            // Back
            geoms.glass.push(box(colW * 0.7, floorH * 0.7, 0.2, cx, cy, z - d / 2 - 0.05));
        }
    }
    // Left/Right
    for (let i = 0; i < colsZ; i++) {
        for (let j = 1; j < floors; j++) {
            const cz = z - d / 2 + colD / 2 + i * colD;
            const cy = j * floorH + floorH / 2;
            // Left (x+)
            geoms.glass.push(box(0.2, floorH * 0.7, colD * 0.7, x + w / 2 + 0.05, cy, cz));
            // Right (x-)
            geoms.glass.push(box(0.2, floorH * 0.7, colD * 0.7, x - w / 2 - 0.05, cy, cz));
        }
    }

    // Horizontal Bands
    for (let i = 0; i <= floors; i++) {
        const arr = Math.random() > 0.5 ? targetConcrete : geoms.darkMetal;
        arr.push(box(w + 0.3, 0.4, d + 0.3, x, i * floorH, z));
    }

    // Vertical Columns
    for (let i = 0; i <= colsX; i++) {
        targetConcrete.push(box(0.6, h, d - 0.5, x - w / 2 + i * colW, h / 2, z));
    }
}

function buildBrickApartment(x, z, w, h, d, geoms) {
    geoms.brick.push(box(w, h, d, x, h / 2, z));

    // Windows (Inset frames)
    const floorH = 3.2;
    const floors = Math.floor(h / floorH);
    const winW = 1.8;
    const winH = 2.0;
    const spacing = 3.0;
    const cols = Math.floor(w / spacing);

    for (let f = 1; f < floors; f++) {
        const y = f * floorH + 1.0;
        for (let c = 0; c < cols; c++) {
            const rx = -w / 2 + 2 + c * spacing;
            if (rx > w / 2 - 1) continue;
            const absoluteX = x + rx;

            // Frame
            geoms.concrete.push(box(winW + 0.2, winH + 0.2, 0.2, absoluteX, y, z + d / 2));
            geoms.concrete.push(box(winW + 0.2, winH + 0.2, 0.2, absoluteX, y, z - d / 2));
            // Glass
            geoms.glass.push(box(winW, winH, 0.1, absoluteX, y, z + d / 2 + 0.1));
            geoms.glass.push(box(winW, winH, 0.1, absoluteX, y, z - d / 2 - 0.1));
        }
    }

    // Fire Escape (Side)
    for (let f = 1; f < floors; f++) {
        geoms.darkMetal.push(box(3.0, 0.2, 1.0, x, f * floorH, z + d / 2 + 0.8));
        geoms.darkMetal.push(box(3.0, 0.1, 0.1, x, f * floorH + 0.5, z + d / 2 + 1.3));
        // Ladder
        geoms.darkMetal.push(box(0.6, floorH + 0.5, 0.1, x + 1.0, f * floorH + floorH / 2, z + d / 2 + 1.2));
    }
}

function buildGlassTower(x, z, w, h, d, geoms) {
    geoms.glass.push(box(w, h, d, x, h / 2, z));

    // Thin metal mullions
    const cols = Math.floor(w / 2.0);
    for (let i = 0; i <= cols; i++) {
        const rx = -w / 2 + i * (w / cols);
        geoms.metal.push(box(0.1, h, d + 0.05, x + rx, h / 2, z));
    }
    // Floors
    const floors = Math.floor(h / 4.0);
    for (let i = 0; i < floors; i++) {
        geoms.metal.push(box(w + 0.05, 0.2, d + 0.05, x, i * 4.0, z));
    }
}

function buildCyberTower(x, z, w, h, d, geoms) {
    geoms.darkMetal.push(box(w, h, d, x, h / 2, z));

    // Neon rings
    geoms.neon.push(box(w + 0.1, 0.5, d + 0.1, x, h * 0.8, z));
    geoms.neon.push(box(w + 0.1, 0.5, d + 0.1, x, h * 0.5, z));
    geoms.neon.push(box(w + 0.1, 0.5, d + 0.1, x, h * 0.2, z));

    // Antenna
    geoms.metal.push(box(0.5, 10, 0.5, x, h + 5, z));
    geoms.neon.push(box(0.2, 2, 0.2, x, h + 10, z));
}

function addRooftopDetails(x, z, w, h, d, geoms) {
    // AC Unit
    if (Math.random() > 0.3) {
        geoms.metal.push(box(2, 1.5, 2, x + 2, h + 0.75, z + 2));
    }
    // Water Tower
    if (Math.random() < 0.2) {
        geoms.brick.push(box(2, 2.5, 2, x - 2, h + 1.25, z - 2));
        geoms.metal.push(box(1.8, 0.5, 1.8, x - 2, h + 2.5, z - 2));
    }
    // Parapet
    geoms.concrete.push(box(w, 0.5, 0.2, x, h + 0.25, z + d / 2 - 0.1));
    geoms.concrete.push(box(w, 0.5, 0.2, x, h + 0.25, z - d / 2 + 0.1));
    geoms.concrete.push(box(0.2, 0.5, d, x + w / 2 - 0.1, h + 0.25, z));
    geoms.concrete.push(box(0.2, 0.5, d, x - w / 2 + 0.1, h + 0.25, z));
}

// --- WORLD GENERATION ---

export function createCityChunk(xPos, zPos, size, roadWidth = 24) {
    const chunkGroup = new THREE.Group();
    const colliders = [];

    // Accumulate Geometries for Batch Merging
    const chunkGeoms = {
        concrete: [],
        concreteDark: [],
        concreteLight: [],
        brick: [],
        glass: [],
        metal: [],
        darkMetal: [],
        neon: [],
        // Vegetation
        trunkBrown: [], trunkWhite: [], trunkGrey: [], trunkBlack: [],
        leafGreen: [], leafDark: [], leafPink: [], leafOrange: [], leafYellow: [], dirt: [],
        // Infra
        road: [],
        sidewalk: [],
        lane: []
    };

    // 1. Road (Ground)
    // NOTE: Planes are X/Y. Rotate X -90. box util is aligned to xyz.
    // Let's stick to standard meshes for simple planes or use box with 0.1 height?
    // Using standard Mesh for road is fine as it's just 1 per chunk. 
    // BUT we can merge it into chunkGeoms.road if we want 1 draw call for ALL roads?
    // Actually, createCityChunk assumes it makes ONE chunk.
    // If we merge road into "matRoad" mesh, it's efficient.

    // Road (as a flat box)
    chunkGeoms.road.push(box(size, 0.1, size, xPos, -0.05, zPos));

    // Lane Markings
    chunkGeoms.lane.push(box(size, 0.1, 0.5, xPos, 0.02, zPos));
    chunkGeoms.lane.push(box(0.5, 0.1, size, xPos, 0.02, zPos));

    // 2. Buildings Blocks (Corners)
    const cornerSize = (size - roadWidth) / 2;
    const offset = (roadWidth + cornerSize) / 2;

    const corners = [
        { x: -offset, z: -offset }, { x: offset, z: -offset },
        { x: offset, z: offset }, { x: -offset, z: offset }
    ];

    corners.forEach(Corner => {
        const cx = xPos + Corner.x;
        const cz = zPos + Corner.z;

        // Sidewalk
        chunkGeoms.sidewalk.push(box(cornerSize, 0.2, cornerSize, cx, 0.1, cz));

        // Building
        if (Math.random() > 0.1) {
            const margin = 12;
            const bw = cornerSize - margin;

            if (bw > 8) {
                // Decide Style
                const r = Math.random();
                let style = 'modern';
                let bh = 20 + Math.random() * 40;

                if (r < 0.1) { style = 'future'; bh = 300 + Math.random() * 200; }
                else if (r < 0.25) { style = 'glass'; bh = 120 + Math.random() * 100; }
                else if (r < 0.45) { style = 'brick'; bh = 15 + Math.random() * 25; }
                else if (r < 0.6) { style = 'glass'; bh = 40 + Math.random() * 60; }
                else if (r < 0.7) { style = 'future'; bh = 50 + Math.random() * 50; }

                // Pass accumulator
                createBuildingMesh(cx, cz, bw, bh, bw, style, chunkGeoms);

                // Collider (Keep separate for physics)
                const box3 = new THREE.Box3();
                box3.min.set(cx - bw / 2, 0, cz - bw / 2);
                box3.max.set(cx + bw / 2, bh, cz + bw / 2);
                colliders.push(box3);
            }
        }
    });

    // Veg
    corners.forEach(Corner => {
        const cx = xPos + Corner.x;
        const cz = zPos + Corner.z;
        const margin = 12;
        const width = cornerSize - margin;

        if (cornerSize > 8) {
            const sides = [0, 1, 2, 3];
            for (let i = sides.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [sides[i], sides[j]] = [sides[j], sides[i]];
            }

            const numTrees = Math.floor(Math.random() * 3);
            for (let i = 0; i < numTrees; i++) {
                const type = Math.floor(Math.random() * 6);
                const r = (width / 2 + cornerSize / 2) / 2;
                const side = sides[i];
                const vegOffset = (Math.random() - 0.5) * width * 0.6;
                let tx = cx, tz = cz;
                if (side === 0) { tx += r; tz += vegOffset; }
                else if (side === 1) { tx -= r; tz += vegOffset; }
                else if (side === 2) { tz += r; tx += vegOffset; }
                else { tz -= r; tx += vegOffset; }

                addTreeToGeoms(type, tx, tz, chunkGeoms);
            }
        }
    });

    // Streetlights
    const lightOffset = roadWidth / 2 + 1;
    const poles = [
        { x: -lightOffset, z: -lightOffset, r: Math.PI / 4 },
        { x: lightOffset, z: lightOffset, r: -3 * Math.PI / 4 },
        { x: -lightOffset, z: lightOffset, r: 3 * Math.PI / 4 },
        { x: lightOffset, z: -lightOffset, r: -Math.PI / 4 },
    ];
    const bulbGeoms = []; // separate accumulator for bulbs only? No, can use chunkGeoms.neon or new one
    // Let's reuse 'neon' for bulb? Or standard 'light'? 
    // chunkGeoms doesn't have 'light'. Let's add 'light'.
    // Or just make it a separate mesh since it's small.
    // Let's add to chunkGeoms.

    poles.forEach(p => {
        // Pole
        chunkGeoms.darkMetal.push(box(0.3, 8, 0.3, xPos + p.x, 4, zPos + p.z));
        // Arm
        chunkGeoms.darkMetal.push(box(2, 0.2, 0.2, xPos + p.x + Math.sin(p.r), 7.5, zPos + p.z + Math.cos(p.r)));
        // Bulb -> Special material
        // We'll create a direct mesh for bulbs or merge if we add a matLight accumulator.
        // Let's just return a mesh for bulbs, it's 4 per chunk.
        bulbGeoms.push(box(0.5, 0.2, 0.5, xPos + p.x + Math.sin(p.r) * 1.5, 7.4, zPos + p.z + Math.cos(p.r) * 1.5));
    });

    // --- BATCH MERGE AND ADD TO SCENE ---

    const addClean = (arr, mat) => {
        if (arr.length > 0) {
            const merged = BufferGeometryUtils.mergeGeometries(arr);
            const mesh = new THREE.Mesh(merged, mat);
            mesh.castShadow = true;
            mesh.receiveShadow = true;
            chunkGroup.add(mesh);
        }
    };

    addClean(chunkGeoms.concrete, matConcrete);
    addClean(chunkGeoms.concreteDark, matConcreteDark);
    addClean(chunkGeoms.concreteLight, matConcreteLight);
    addClean(chunkGeoms.brick, matBrick);
    addClean(chunkGeoms.glass, matGlassModern); // Using Modern for all glass in merge (Simplify)
    addClean(chunkGeoms.metal, matMetal);
    addClean(chunkGeoms.darkMetal, matDarkMetal);
    addClean(chunkGeoms.neon, matNeonCyan); // Simplify to one neon color for Batch? 
    // Or split neon arrays. For now, one color is fine for performance.

    addClean(chunkGeoms.trunkBrown, matTrunkBrown);
    addClean(chunkGeoms.trunkWhite, matTrunkWhite);
    addClean(chunkGeoms.trunkGrey, matTrunkGrey);
    addClean(chunkGeoms.trunkBlack, matTrunkBlack);
    addClean(chunkGeoms.leafGreen, matLeafGreen);
    addClean(chunkGeoms.leafDark, matLeafDark);
    addClean(chunkGeoms.leafPink, matLeafPink);
    addClean(chunkGeoms.leafOrange, matLeafOrange);
    addClean(chunkGeoms.leafYellow, matLeafYellow);
    addClean(chunkGeoms.dirt, matDirt);

    addClean(chunkGeoms.road, matRoad);
    addClean(chunkGeoms.sidewalk, matSidewalk);
    addClean(chunkGeoms.lane, matLane);

    if (bulbGeoms.length > 0) {
        const merged = BufferGeometryUtils.mergeGeometries(bulbGeoms);
        const mesh = new THREE.Mesh(merged, matLight);
        chunkGroup.add(mesh);
    }

    // Clouds (Still separate is fine, they are few)
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
        roadWidth: 26,
        blockSize: 70,
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
