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
    frameBlack: new THREE.MeshStandardMaterial({ color: 0x000000, roughness: 0.8 })
};

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
    const style = Math.floor(Math.random() * 5); // 0-4
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
        s.position.set(x + width / 2 + 0.1, height / 2, z);
        s.scale.set(0.2, height * 0.8, 1.5);
        chunkGroup.add(s);
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
            const width = cornerSize - 4; // Margin
            if (width > 2) {
                // Rare Supermarket
                if (Math.random() < 0.05) {
                    createSupermarket(xPos + corner.x, zPos + corner.z, width, chunkGroup, colliders);
                } else {
                    createNYCBuilding(xPos + corner.x, zPos + corner.z, width, chunkGroup, colliders, windowMatrices);
                }
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

    return { mesh: chunkGroup, colliders: colliders };
}

export async function createWorld(scene) {
    // Lighting setup only
    const ambientLight = new THREE.AmbientLight(0x222233, 0.3);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xaaccff, 0.5);
    directionalLight.position.set(50, 100, 50);
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
