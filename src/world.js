import * as THREE from 'three';

const buildingGeom = new THREE.BoxGeometry(1, 1, 1);
const windowGeom = new THREE.PlaneGeometry(1.2, 1.8);
const sidewalkGeom = new THREE.BoxGeometry(1, 0.2, 1); // Normalized size for scaling
const roadGeom = new THREE.PlaneGeometry(1, 1);

// Materials (SharedCache)
// Materials (SharedCache)
// Setup Procedural Textures
function createSignTexture(text, color, bgColor) {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');

    // Background
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, 256, 64);

    // Text
    ctx.fillStyle = color;
    ctx.font = 'bold 40px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, 128, 32);

    const tex = new THREE.CanvasTexture(canvas);
    return tex;
}

const matCache = {
    road: new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.9 }),
    sidewalk: new THREE.MeshStandardMaterial({ color: 0x444444, roughness: 0.8 }),
    building: new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.2, metalness: 0.5 }), // Fallback
    window: new THREE.MeshBasicMaterial({ color: 0xffffaa }),
    lane: new THREE.MeshBasicMaterial({ color: 0xffffff }),
    ground: new THREE.MeshStandardMaterial({ color: 0x3a2e26, roughness: 1.0 }),
    // NYC Materials
    stoneA: new THREE.MeshStandardMaterial({ color: 0x888888, roughness: 0.9 }), // Concrete/Limestone
    stoneB: new THREE.MeshStandardMaterial({ color: 0xaa9988, roughness: 0.9 }), // Warm Stone
    glassBlue: new THREE.MeshStandardMaterial({ color: 0x224488, roughness: 0.1, metalness: 0.8 }), // Lighter
    glassBlack: new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.1, metalness: 0.8 }), // Lighter
    metalGold: new THREE.MeshStandardMaterial({ color: 0xccaa44, roughness: 0.3, metalness: 0.8 }), // Art Deco Trim
    brick: new THREE.MeshStandardMaterial({ color: 0x884433, roughness: 0.9 }), // Red Brick
    cyberDark: new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.2, metalness: 0.9 }),
    neonPink: new THREE.MeshBasicMaterial({ color: 0xff00ff }),
    neonCyan: new THREE.MeshBasicMaterial({ color: 0x00ffff }),
    roof: new THREE.MeshStandardMaterial({ color: 0x333333, roughness: 1.0 }),
    marketSign: new THREE.MeshBasicMaterial({ map: createSignTexture('MARKET', '#ffffff', '#0088aa') }),
    gate: new THREE.MeshStandardMaterial({ color: 0x050505, roughness: 0.4, metalness: 0.9 }),
    frameSilver: new THREE.MeshStandardMaterial({ color: 0xcccccc, roughness: 0.3, metalness: 0.9 }),
    frameBlack: new THREE.MeshStandardMaterial({ color: 0x000000, roughness: 0.8 }),
    // Tree Materials
    trunkBrown: new THREE.MeshStandardMaterial({ color: 0x553311, roughness: 0.9 }),
    trunkWhite: new THREE.MeshStandardMaterial({ color: 0xeeeeee, roughness: 0.8 }),
    trunkGrey: new THREE.MeshStandardMaterial({ color: 0x666666, roughness: 1.0 }),
    trunkBlack: new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.8 }),
    leafGreen: new THREE.MeshStandardMaterial({ color: 0x4da737, roughness: 0.8 }),
    leafDarkGreen: new THREE.MeshStandardMaterial({ color: 0x225522, roughness: 0.9 }),
    leafLightGreen: new THREE.MeshStandardMaterial({ color: 0x88cc44, roughness: 0.8 }),
    leafPink: new THREE.MeshStandardMaterial({ color: 0xffaacc, roughness: 0.8 }), // Softer pink
    leafOrange: new THREE.MeshStandardMaterial({ color: 0xdd7722, roughness: 0.8 }), // Muted orange
    leafRed: new THREE.MeshStandardMaterial({ color: 0xaa3333, roughness: 0.8 }), // Maple Red
    leafYellow: new THREE.MeshStandardMaterial({ color: 0xddcc22, roughness: 0.8 }), // Birch Yellow
    dirt: new THREE.MeshStandardMaterial({ color: 0x5b4033, roughness: 1.0 }),
    cloud: new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.9, flatShading: true, transparent: true, opacity: 0.9 })
};

const treeGeom = {
    trunk: new THREE.CylinderGeometry(0.2, 0.3, 1, 7),
    branch: new THREE.CylinderGeometry(0.1, 0.15, 1, 5),
    sphere: new THREE.IcosahedronGeometry(1, 1),
    cone: new THREE.ConeGeometry(1, 1, 7),
    box: new THREE.BoxGeometry(1, 1, 1)
};

// Adjust pivot for trunk to be at bottom
treeGeom.trunk.translate(0, 0.5, 0);
treeGeom.branch.translate(0, 0.5, 0);
treeGeom.cone.translate(0, 0.5, 0);

function createProceduralTree(type, x, z, chunkGroup) {
    const treeGroup = new THREE.Group();
    treeGroup.position.set(x, 0, z);

    let trunkMat = matCache.trunkBrown;
    let leafMat = matCache.leafGreen;
    let trunkH = 3;
    let trunkR = 0.3;
    let leafH = 0; // if 0, sphere
    let leafR = 1.5;

    // Custom Geometry Config
    if (type === 0) { // Oak
        trunkMat = matCache.trunkBrown;
        leafMat = matCache.leafGreen;
        trunkH = 2.5;
        leafR = 1.8;
    } else if (type === 1) { // Pine
        trunkMat = matCache.trunkBrown;
        leafMat = matCache.leafDarkGreen;
        trunkH = 2;
    } else if (type === 2) { // Birch
        trunkMat = matCache.trunkWhite;
        leafMat = matCache.leafYellow; // Autumn/Yellowish
        trunkH = 4;
        trunkR = 0.2;
        leafR = 1.6;
    } else if (type === 3) { // Cherry
        trunkMat = matCache.trunkBrown;
        leafMat = matCache.leafPink; // Realistic Sakura
        trunkH = 3;
        leafR = 1.6;
    } else if (type === 4) { // Autumn
        trunkMat = matCache.trunkGrey;
        leafMat = matCache.leafOrange;
        trunkH = 3;
        leafR = 1.7;
    } else if (type === 5) { // Palm
        trunkMat = matCache.trunkBrown;
        leafMat = matCache.leafGreen;
        trunkH = 5;
        trunkR = 0.2;
    } else if (type === 6) { // Shrub
        trunkMat = matCache.trunkBrown;
        trunkH = 0.5;
        leafR = 1.0;
    } else if (type === 7) { // Maple (Was Dead)
        trunkMat = matCache.trunkGrey;
        leafMat = matCache.leafRed;
        trunkH = 3;
        leafR = 1.8;
    } else if (type === 8) { // Poplar (Was Cyber)
        trunkMat = matCache.trunkBlack; // Dark Bark
        leafMat = matCache.leafDarkGreen;
        trunkH = 4.5;
        trunkR = 0.25;
        // Tall thin
    } else if (type === 9) { // Willow
        trunkMat = matCache.trunkBrown;
        leafMat = matCache.leafLightGreen; // Natural Light Green
        trunkH = 2.5;
        leafR = 2.0;
    }

    // Build Mesh
    const trunk = new THREE.Mesh(treeGeom.trunk, trunkMat);
    trunk.scale.set(trunkR, trunkH, trunkR);
    trunk.castShadow = true;
    treeGroup.add(trunk);

    if (type === 1) { // Pine Cone
        // ... (Same logic, simplified geometry call checks)
        const l1 = new THREE.Mesh(treeGeom.cone, leafMat);
        l1.position.y = trunkH;
        l1.scale.set(2, 1.5, 2);
        treeGroup.add(l1);
        const l2 = new THREE.Mesh(treeGeom.cone, leafMat);
        l2.position.y = trunkH + 1.2;
        l2.scale.set(1.5, 1.5, 1.5);
        treeGroup.add(l2);
        const l3 = new THREE.Mesh(treeGeom.cone, leafMat);
        l3.position.y = trunkH + 2.2;
        l3.scale.set(0.8, 1.5, 0.8);
        treeGroup.add(l3);

    } else if (type === 5) { // Palm
        for (let i = 0; i < 6; i++) {
            const f = new THREE.Mesh(treeGeom.branch, leafMat);
            f.position.y = trunkH;
            f.scale.set(0.5, 3.0, 0.5);
            f.rotation.y = (Math.PI / 3) * i;
            f.rotation.z = 1.0; // Droop out
            treeGroup.add(f);
        }
    } else if (type === 8) { // Poplar (Tall Column)
        const l = new THREE.Mesh(treeGeom.cone, leafMat);
        l.position.y = trunkH - 1;
        l.scale.set(1.2, 5, 1.2);
        treeGroup.add(l);
    } else if (type === 9) { // Willow
        // Drooping tendrils
        const count = 12;
        for (let i = 0; i < count; i++) {
            const r = 2.0;
            const ang = (i / count) * Math.PI * 2;
            const lx = Math.sin(ang) * r;
            const lz = Math.cos(ang) * r;
            // Branch out
            // Droop down
            const tendril = new THREE.Mesh(treeGeom.branch, matCache.leafTeal); // Teal for style
            tendril.position.set(lx, trunkH + 1, lz);
            tendril.scale.set(0.2, 3.0, 0.2);
            tendril.rotation.x = Math.PI; // Point downish
            treeGroup.add(tendril);
        }
        const cap = new THREE.Mesh(treeGeom.sphere, matCache.leafLightGreen);
        cap.position.set(0, trunkH + 1, 0);
        cap.scale.set(2.5, 1.5, 2.5);
        cap.castShadow = true; cap.receiveShadow = true;
        treeGroup.add(cap);
    } else {
        // --- Cyber / Default (Fallback) ---
        const t = new THREE.Mesh(treeGeom.trunk, matCache.trunkBlack);
        t.scale.set(1, 3, 1);
        t.castShadow = true; t.receiveShadow = true;
        treeGroup.add(t);

        const l = new THREE.Mesh(treeGeom.box, matCache.leafNeon);
        l.position.y = 3;
        l.scale.set(1.5, 1.5, 1.5);
        l.castShadow = true; l.receiveShadow = true;
        treeGroup.add(l);
    }

    chunkGroup.add(treeGroup);
}

const cloudGeom = new THREE.BoxGeometry(1, 1, 1);

function createProceduralCloud(x, z, chunkGroup) {
    // Massive clouds high up
    const cloudGroup = new THREE.Group();
    cloudGroup.userData = { isCloud: true, speed: 2 + Math.random() * 10 }; // [NEW] Tag for animation
    const height = 450 + Math.random() * 150; // 450 to 600
    cloudGroup.position.set(x, height, z);

    // Randomize Type logic (Inline for simplicity)
    let blobs = 8;
    let scaleBase = 20;
    let spread = 50;

    const r = Math.random();
    if (r < 0.3) { // Small (Relative to huge)
        blobs = 5; scaleBase = 15; spread = 40;
    } else if (r < 0.7) { // Medium
        blobs = 8; scaleBase = 25; spread = 60;
    } else { // Massive
        blobs = 12; scaleBase = 40; spread = 100;
    }

    for (let b = 0; b < blobs; b++) {
        const mesh = new THREE.Mesh(cloudGeom, matCache.cloud);
        mesh.position.set(
            (Math.random() - 0.5) * spread,
            (Math.random() - 0.5) * (spread * 0.4),
            (Math.random() - 0.5) * (spread * 0.6)
        );

        const s = scaleBase * (0.8 + Math.random() * 0.5);
        mesh.scale.set(s, s * 0.6, s * 0.8);
        mesh.castShadow = true; // Clouds should cast shadows on the city!
        // Note: Shadow camera might need to be huge to catch this.
        cloudGroup.add(mesh);
    }

    // Random Rotation
    cloudGroup.rotation.y = Math.random() * Math.PI * 2;
    chunkGroup.add(cloudGroup);
}

function addGate(x, z, width, chunkGroup, style = 0) {
    const gateH = 2.5;
    const gateW = 2.0;
    const frameThick = 0.2;

    // Determine Frame Material
    let frameMat = matCache.frameBlack;
    if (style === 2) frameMat = matCache.metalGold; // Art Deco
    if (style === 1) frameMat = matCache.frameSilver; // Modern

    // Frame (Slightly larger box)
    const frame = new THREE.Mesh(buildingGeom, frameMat);
    frame.position.set(x, gateH / 2, z + width / 2 + 0.04);
    frame.scale.set(gateW + frameThick * 2, gateH + frameThick, 0.2);
    chunkGroup.add(frame);

    // Gate Mesh (Inner)
    const gate = new THREE.Mesh(buildingGeom, matCache.gate);
    // Position at bottom center of +Z face
    gate.position.set(x, gateH / 2, z + width / 2 + 0.06);
    gate.scale.set(gateW, gateH, 0.2);
    chunkGroup.add(gate);
}

function createProceduralBuilding(x, z, width, chunkGroup, colliders) {
    // 3 Styles: 0=Setback (Classic), 1=Modern (Glass), 2=Art Deco (Stone+Gold)
    const style = Math.floor(Math.random() * 3);
    const height = 15 + Math.random() * 45; // Much Taller: 15 to 60 units

    // Base Collider (Always the full footprint for simplicity in peds logic)
    // We already leave a rim on the sidewalk, so this is safe.
    const box = new THREE.Box3();
    box.min.set(x - width / 2, 0, z - width / 2);
    box.max.set(x + width / 2, height, z + width / 2);
    colliders.push(box);

    addGate(x, z, width, chunkGroup, style);

    if (style === 0) {
        // ... classic ...
        // (Note: createProceduralBuilding is the old function, createNYCBuilding is the main one now. 
        // I should stick to edits required for createNYCBuilding mainly, but good to keep both consistent)
        // Leaving logic as is because createNYCBuilding is separate lower down.
        // Actually, looking at file, createProceduralBuilding might not be used?
        // createCityChunk calls createNYCBuilding.
        // I will focus edits on createNYCBuilding section below.
    }
    // ...
}

// REDEFINING addWindows to use InstancedMesh logic.
// Instead of adding meshes, we push matrices to an array.
function spawnWindowMatrices(x, y, z, w, h, d, matrices) {
    const floorHeight = 3.5;
    const windowSpacing = 2.5;

    const floors = Math.floor(h / floorHeight);
    const cols = Math.floor(w / windowSpacing);

    const dummy = new THREE.Object3D();

    for (let f = 0; f < floors; f++) {
        // Start higher to avoid gate overlap (Ground floor lobby)
        // Gate is 2.5m high. Window center at 5m means bottom at 4.1m. Safe.
        const yPos = y - h / 2 + 5.0 + f * floorHeight;

        if (yPos > y + h / 2) break; // Don't go above roof

        if (Math.random() > 0.8) continue;

        for (let c = 0; c < cols; c++) {
            const offset = -w / 2 + 1 + c * windowSpacing;

            const add = (px, py, pz, ry) => {
                if (Math.random() < 0.7) {
                    dummy.position.set(px, py, pz);
                    dummy.rotation.set(0, ry, 0);
                    dummy.scale.set(1, 1, 1);
                    dummy.updateMatrix();
                    matrices.push(dummy.matrix.clone());
                }
            };
            add(x + offset, yPos, z + d / 2 + 0.05, 0);
            add(x + offset, yPos, z - d / 2 - 0.05, Math.PI);
            add(x + w / 2 + 0.05, yPos, z + offset, Math.PI / 2);
            add(x - w / 2 - 0.05, yPos, z + offset, -Math.PI / 2);
        }
    }
}

function createNYCBuilding(x, z, width, chunkGroup, colliders, windowMatrices) {
    // Weighted Style Selection: Giga Towers (5) are rare (1.2%)
    let style = Math.floor(Math.random() * 5); // Default 0-4
    if (Math.random() < 0.012) {
        style = 5;
    }
    const height = 20 + Math.random() * 50;

    // Collider
    const box = new THREE.Box3();
    box.min.set(x - width / 2, 0, z - width / 2);
    box.max.set(x + width / 2, height, z + width / 2);
    colliders.push(box);

    // GATE
    addGate(x, z, width, chunkGroup, style);

    if (style === 0) {
        // --- Classic Setback ---
        const h1 = height * 0.45;
        const b1 = new THREE.Mesh(buildingGeom, matCache.stoneA);
        b1.position.set(x, h1 / 2, z);
        b1.scale.set(width, h1, width);
        b1.receiveShadow = true; b1.castShadow = true;
        chunkGroup.add(b1);
        spawnWindowMatrices(x, h1 / 2, z, width, h1, width, windowMatrices);

        const h2 = height * 0.35;
        const w2 = width * 0.7;
        const b2 = new THREE.Mesh(buildingGeom, matCache.stoneA);
        b2.position.set(x, h1 + h2 / 2, z);
        b2.scale.set(w2, h2, w2);
        b2.receiveShadow = true; b2.castShadow = true;
        chunkGroup.add(b2);
        spawnWindowMatrices(x, h1 + h2 / 2, z, w2, h2, w2, windowMatrices);

        const h3 = height * 0.2;
        const w3 = width * 0.4;
        const b3 = new THREE.Mesh(buildingGeom, matCache.stoneA);
        b3.position.set(x, h1 + h2 + h3 / 2, z);
        b3.scale.set(w3, h3, w3);
        b3.receiveShadow = true; b3.castShadow = true;
        chunkGroup.add(b3);
        spawnWindowMatrices(x, h1 + h2 + h3 / 2, z, w3, h3, w3, windowMatrices);

        const ant = new THREE.Mesh(buildingGeom, matCache.metalGold);
        ant.position.set(x, height + 4, z);
        ant.scale.set(0.3, 8, 0.3);
        chunkGroup.add(ant);

    } else if (style === 1) {
        // --- Modern Glass ---
        // Changed: Lighter glass materials + Windows
        const mat = Math.random() > 0.5 ? matCache.glassBlue : matCache.glassBlack;
        const b = new THREE.Mesh(buildingGeom, mat);
        b.position.set(x, height / 2, z);
        b.scale.set(width, height, width);
        b.castShadow = true; b.receiveShadow = true;
        chunkGroup.add(b);

        // Add sparse windows to look like lit offices behind glass
        spawnWindowMatrices(x, height / 2, z, width, height, width, windowMatrices);

        const roof = new THREE.Mesh(buildingGeom, matCache.sidewalk);
        roof.position.set(x, height + 0.5, z);
        roof.scale.set(width, 1, width);
        chunkGroup.add(roof);

    } else if (style === 2) {
        // --- Art Deco ---
        const mat = matCache.stoneB;
        const b = new THREE.Mesh(buildingGeom, mat);
        b.position.set(x, height / 2, z);
        b.scale.set(width, height, width);
        b.castShadow = true; b.receiveShadow = true;
        chunkGroup.add(b);
        spawnWindowMatrices(x, height / 2, z, width, height, width, windowMatrices);

        const pw = 0.6;
        const corners = [{ x: -1, z: -1 }, { x: 1, z: -1 }, { x: 1, z: 1 }, { x: -1, z: 1 }];
        corners.forEach(c => {
            const p = new THREE.Mesh(buildingGeom, matCache.metalGold);
            p.position.set(x + c.x * width / 2, height / 2, z + c.z * width / 2);
            p.scale.set(pw, height, pw);
            chunkGroup.add(p);
        });
    } else if (style === 3) {
        // --- Brick Apartment ---
        const b = new THREE.Mesh(buildingGeom, matCache.brick);
        b.position.set(x, height / 2, z);
        b.scale.set(width, height, width);
        b.castShadow = true; b.receiveShadow = true;
        chunkGroup.add(b);
        spawnWindowMatrices(x, height / 2, z, width, height, width, windowMatrices);

        // Fire Escapes (Stylized stripes)
        const s = new THREE.Mesh(buildingGeom, matCache.sidewalk);
        s.scale.set(0.2, height * 0.8, 1.5);
        chunkGroup.add(s);
    } else if (style === 5) {
        // --- Eco-Tower (Optimized Giga Tower) ---
        // White concrete with terraced levels + Simple Vegetation

        // OVERRIDE HEIGHT: GIGA TOWER
        const superHeight = 300 + Math.random() * 80;

        const levels = 8 + Math.floor(Math.random() * 4); // Slightly fewer levels for performance
        let currY = 0;
        let currW = width;
        const levelH = superHeight / levels;

        for (let i = 0; i < levels; i++) {
            const b = new THREE.Mesh(buildingGeom, matCache.trunkWhite);
            b.position.set(x, currY + levelH / 2, z);
            b.scale.set(currW, levelH, currW);
            b.castShadow = true; b.receiveShadow = true;
            chunkGroup.add(b);

            // Windows (Skip for top few levels to save rendering?)
            if (i > 0 && i < levels - 1) {
                spawnWindowMatrices(x, currY + levelH / 2, z, currW, levelH, currW, windowMatrices);
            }

            currY += levelH;
        }

        // Update Collider
        if (colliders.length > 0) {
            colliders[colliders.length - 1].max.y = superHeight;
        }

    } else {
        // --- Futuristic Cyberpunk ---
        const b = new THREE.Mesh(buildingGeom, matCache.cyberDark);
        b.position.set(x, height / 2, z);
        b.scale.set(width, height, width);
        b.castShadow = true; b.receiveShadow = true;
        chunkGroup.add(b);

        // Neon Strips
        const neonColor = Math.random() > 0.5 ? matCache.neonPink : matCache.neonCyan;
        const n = new THREE.Mesh(buildingGeom, neonColor);
        n.position.set(x, height * 0.8, z);
        n.scale.set(width + 0.1, 0.5, width + 0.1); // Ring
        chunkGroup.add(n);

        const n2 = new THREE.Mesh(buildingGeom, neonColor);
        n2.position.set(x, height * 0.4, z);
        n2.scale.set(width + 0.1, 0.5, width + 0.1); // Ring
        chunkGroup.add(n2);

        spawnWindowMatrices(x, height / 2, z, width, height, width, windowMatrices);
    }
}

export function createCityChunk(xPos, zPos, size, roadWidth = 24) {
    const chunkGroup = new THREE.Group();
    const colliders = [];

    // 1. Road (Ground) - Base layer
    const road = new THREE.Mesh(roadGeom, matCache.road);
    road.position.set(xPos, 0, zPos);
    road.rotation.x = -Math.PI / 2;
    road.scale.set(size, size, 1);
    road.receiveShadow = true;
    chunkGroup.add(road);

    // 2. Markings (Cross at center)
    const laneH = new THREE.Mesh(roadGeom, matCache.lane);
    laneH.position.set(xPos, 0.02, zPos);
    laneH.rotation.x = -Math.PI / 2;
    laneH.scale.set(size, 0.5, 1);
    chunkGroup.add(laneH);

    const laneV = new THREE.Mesh(roadGeom, matCache.lane);
    laneV.position.set(xPos, 0.02, zPos);
    laneV.rotation.x = -Math.PI / 2;
    laneV.scale.set(0.5, size, 1);
    chunkGroup.add(laneV);

    // 3. Sidewalks & Buildings (4 Corners)
    // Dynamic sizing based on roadWidth
    const cornerSize = (size - roadWidth) / 2;
    const offset = (roadWidth + cornerSize) / 2;

    // Safety check
    if (cornerSize < 1) return { mesh: chunkGroup, colliders: colliders };

    const corners = [
        { x: -offset, z: -offset },
        { x: offset, z: -offset },
        { x: offset, z: offset },
        { x: -offset, z: offset }
    ];

    // Matrices for Instanced Windows
    const windowMatrices = [];

    // Supermarket Generator
    function createSupermarket(x, z, width, chunkGroup, colliders) {
        const height = 6; // Low rise
        const mat = matCache.stoneA; // Concrete

        // Main Box
        const b = new THREE.Mesh(buildingGeom, mat);
        b.position.set(x, height / 2, z);
        b.scale.set(width, height, width);
        b.castShadow = true; b.receiveShadow = true;
        chunkGroup.add(b);

        // Collider
        const box = new THREE.Box3();
        box.min.set(x - width / 2, 0, z - width / 2);
        box.max.set(x + width / 2, height, z + width / 2);
        colliders.push(box);

        // Large Glass Front
        const glass = new THREE.Mesh(buildingGeom, matCache.glassBlue);
        glass.position.set(x, height * 0.4, z + width / 2 + 0.1); // Front face approx
        glass.scale.set(width * 0.8, height * 0.6, 0.2);
        chunkGroup.add(glass);

        // Signage / Roof Detail
        const sign = new THREE.Mesh(buildingGeom, matCache.neonCyan);
        sign.position.set(x, height - 1, z + width / 2 + 0.2);
        sign.scale.set(width * 0.5, 1, 0.2);
        chunkGroup.add(sign);

        // AC Units
        const ac = new THREE.Mesh(buildingGeom, matCache.roof);
        ac.position.set(x + 2, height + 0.5, z);
        ac.scale.set(3, 1, 3);
        chunkGroup.add(ac);
    }

    corners.forEach(corner => {
        // Sidewalk
        const sw = new THREE.Mesh(sidewalkGeom, matCache.sidewalk);
        sw.position.set(xPos + corner.x, 0.1, zPos + corner.z);
        sw.scale.set(cornerSize, 1, cornerSize);
        sw.receiveShadow = true;
        chunkGroup.add(sw);

        // Buildings
        if (Math.random() > 0.2) { // 80% density
            // WIDER SIDEWALK: increase margin from 4 to 12
            const margin = 12;
            const width = cornerSize - margin;

            if (width > 2) {
                // Rare Supermarket
                if (Math.random() < 0.05) {
                    createSupermarket(xPos + corner.x, zPos + corner.z, width, chunkGroup, colliders);
                } else {
                    createNYCBuilding(xPos + corner.x, zPos + corner.z, width, chunkGroup, colliders, windowMatrices);
                }
            }

            // Trees in the margin
            // Iterate along the perimeter of the building block, but in the sidewalk zone
            // We can place 1-2 trees randomly per corner if there is space
            const numTrees = Math.floor(Math.random() * 3); // 0 to 2 trees
            for (let i = 0; i < numTrees; i++) {
                const type = Math.floor(Math.random() * 10);
                // Position relative to corner center
                // The building occupies box [-width/2, width/2].
                // The sidewalk occupies box [-cornerSize/2, cornerSize/2].
                // We want to be in the ring between them.

                // Pick a side randomly: 0, 1, 2, 3
                const side = Math.floor(Math.random() * 4);
                // Distance from center: (width/2 + cornerSize/2) / 2 = midpoint of sidewalk
                const range = (cornerSize / 2 + width / 2) / 2;

                let tx = 0, tz = 0;
                const spread = width / 2; // along the face

                if (side === 0) { tx = range; tz = (Math.random() - 0.5) * spread * 2; }
                if (side === 1) { tx = -range; tz = (Math.random() - 0.5) * spread * 2; }
                if (side === 2) { tz = range; tx = (Math.random() - 0.5) * spread * 2; }
                if (side === 3) { tz = -range; tx = (Math.random() - 0.5) * spread * 2; }

                // Tree Pit (Dirt Patch)
                const dirt = new THREE.Mesh(sidewalkGeom, matCache.dirt);
                dirt.position.set(xPos + corner.x + tx, 0.11, zPos + corner.z + tz); // Slightly above sidewalk (0.1)
                dirt.scale.set(1.5, 0.1, 1.5); // 1.5m square patch
                dirt.receiveShadow = true;
                chunkGroup.add(dirt);

                createProceduralTree(type, xPos + corner.x + tx, zPos + corner.z + tz, chunkGroup);
            }
        }
    });

    // Create Instanced Mesh for windows if any
    if (windowMatrices.length > 0) {
        const instancedWindows = new THREE.InstancedMesh(windowGeom, matCache.window, windowMatrices.length);

        for (let i = 0; i < windowMatrices.length; i++) {
            instancedWindows.setMatrixAt(i, windowMatrices[i]);
        }
        instancedWindows.instanceMatrix.needsUpdate = true;
        chunkGroup.add(instancedWindows);
    }

    // CLOUDS: Generate 1-2 clouds above the city chunk
    const numClouds = 1 + Math.floor(Math.random() * 2);
    for (let i = 0; i < numClouds; i++) {
        createProceduralCloud(
            xPos + (Math.random() - 0.5) * size,
            zPos + (Math.random() - 0.5) * size,
            chunkGroup
        );
    }

    return { mesh: chunkGroup, colliders: colliders };
}


export function createHighwayChunk(xPos, zPos, size, roadWidth, type = 'x') {
    const chunkGroup = new THREE.Group();
    const colliders = [];

    // 1. Ground (Wasteland style but with road)
    const ground = new THREE.Mesh(roadGeom, matCache.ground);
    ground.position.set(xPos, -0.5, zPos);
    ground.rotation.x = -Math.PI / 2;
    ground.scale.set(size, size, 1);
    ground.receiveShadow = true;
    chunkGroup.add(ground);

    // 2. Road Generation based on Type
    const buildXRoad = (type === 'x' || type === 'cross');
    const buildZRoad = (type === 'z' || type === 'cross');

    if (buildXRoad) {
        // Road Core X
        const road = new THREE.Mesh(roadGeom, matCache.road);
        road.position.set(xPos, 0.01, zPos);
        road.rotation.x = -Math.PI / 2;
        road.scale.set(size, roadWidth, 1);
        road.receiveShadow = true;
        chunkGroup.add(road);

        // Lane Markings X
        const laneH = new THREE.Mesh(roadGeom, matCache.lane);
        laneH.position.set(xPos, 0.02, zPos);
        laneH.rotation.x = -Math.PI / 2;
        laneH.scale.set(size, 0.5, 1);
        chunkGroup.add(laneH);
    }

    if (buildZRoad) {
        // Road Core Z
        const road = new THREE.Mesh(roadGeom, matCache.road);
        road.position.set(xPos, 0.015, zPos); // Slightly higher to avoid z-fight at crossing
        road.rotation.x = -Math.PI / 2;
        road.scale.set(roadWidth, size, 1);
        road.receiveShadow = true;
        chunkGroup.add(road);

        // Lane Markings Z
        const laneV = new THREE.Mesh(roadGeom, matCache.lane);
        laneV.position.set(xPos, 0.025, zPos);
        laneV.rotation.x = -Math.PI / 2;
        laneV.scale.set(0.5, size, 1);
        chunkGroup.add(laneV);
    }

    // No Vertical Road.
    // No Buildings.
    // Maybe some random rocks on the side?

    const numRocks = Math.floor(Math.random() * 3);
    for (let i = 0; i < numRocks; i++) {
        const rSize = Math.random() * 3 + 1;
        const rock = new THREE.Mesh(buildingGeom, matCache.sidewalk);

        // Spawn rocks OUTSIDE the road width
        // Road is from z-width/2 to z+width/2.
        // Chunk is from z-size/2 to z+size/2.

        const margin = roadWidth / 2 + 2;
        const range = (size / 2) - margin;

        // Random Z side (North or South of road)
        const side = Math.random() > 0.5 ? 1 : -1;
        const offsetZ = margin + Math.random() * range;

        rock.position.set(
            xPos + (Math.random() - 0.5) * size,
            rSize / 2 - 0.5,
            zPos + side * offsetZ
        );
        rock.scale.set(rSize, rSize, rSize);
        rock.rotation.set(Math.random(), Math.random(), Math.random());
        rock.castShadow = true;
        chunkGroup.add(rock);

        const box = new THREE.Box3().setFromObject(rock);
        colliders.push(box);
    }

    // CLOUDS: Generate 1-2 clouds above the highway chunk
    const numClouds = 1 + Math.floor(Math.random() * 2);
    for (let i = 0; i < numClouds; i++) {
        createProceduralCloud(
            xPos + (Math.random() - 0.5) * size,
            zPos + (Math.random() - 0.5) * size,
            chunkGroup
        );
    }

    return { mesh: chunkGroup, colliders: colliders };
}

export function createWastelandChunk(xPos, zPos, size) {
    const chunkGroup = new THREE.Group();
    const colliders = [];

    // Uneven Ground
    const ground = new THREE.Mesh(roadGeom, matCache.ground);
    ground.position.set(xPos, -0.5, zPos); // Slightly lower
    ground.rotation.x = -Math.PI / 2;
    ground.scale.set(size, size, 1);
    ground.receiveShadow = true;
    chunkGroup.add(ground);

    // Rocks / Debris
    const numRocks = Math.floor(Math.random() * 3);
    for (let i = 0; i < numRocks; i++) {
        const rSize = Math.random() * 3 + 1;
        const rock = new THREE.Mesh(buildingGeom, matCache.sidewalk); // Use gray material
        rock.position.set(
            xPos + (Math.random() - 0.5) * size * 0.8,
            rSize / 2 - 0.5,
            zPos + (Math.random() - 0.5) * size * 0.8
        );
        rock.scale.set(rSize, rSize, rSize);
        rock.rotation.set(Math.random(), Math.random(), Math.random());
        rock.castShadow = true;
        chunkGroup.add(rock);

        const box = new THREE.Box3().setFromObject(rock);
        colliders.push(box);
    }

    // CLOUDS: Generate 1-2 clouds above the wasteland chunk
    const numClouds = 1 + Math.floor(Math.random() * 2);
    for (let i = 0; i < numClouds; i++) {
        createProceduralCloud(
            xPos + (Math.random() - 0.5) * size,
            zPos + (Math.random() - 0.5) * size,
            chunkGroup
        );
    }

    return { mesh: chunkGroup, colliders: colliders };
}

export async function createWorld(scene) {
    // Lighting setup only
    const ambientLight = new THREE.AmbientLight(0x222233, 0.3);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xaaccff, 0.5);
    directionalLight.position.set(50, 500, 50);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 500;
    directionalLight.shadow.camera.left = -250;
    directionalLight.shadow.camera.right = 250;
    directionalLight.shadow.camera.top = 250;
    directionalLight.shadow.camera.bottom = -250;
    scene.add(directionalLight);

    // We return empty world data, main.js will use ChunkManager
    return {
        citySize: 1000, // Virtual size
        blockSize: 100, // 100 + 24 = 124 total chunk size
        roadWidth: 24,
        colliders: [], // No static colliders upfront
        cubes: [], // Empty for now, NMS world doesn't have static collectibles yet
        materials: matCache,
        directionalLight,
        ambientLight
    };
}
