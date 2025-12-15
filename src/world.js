import * as THREE from 'three';

const buildingGeom = new THREE.BoxGeometry(1, 1, 1);
const windowGeom = new THREE.PlaneGeometry(0.2, 0.4);
const sidewalkGeom = new THREE.BoxGeometry(1, 0.2, 1); // Normalized size for scaling
const roadGeom = new THREE.PlaneGeometry(1, 1);

// Materials (SharedCache)
// Materials (SharedCache)
const matCache = {
    road: new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.9 }),
    sidewalk: new THREE.MeshStandardMaterial({ color: 0x444444, roughness: 0.8 }),
    building: new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.2, metalness: 0.5 }), // Fallback/Dark
    window: new THREE.MeshBasicMaterial({ color: 0xffffaa }),
    lane: new THREE.MeshBasicMaterial({ color: 0xffffff }),
    ground: new THREE.MeshStandardMaterial({ color: 0x3a2e26, roughness: 1.0 }),
    // NYC Materials
    stoneA: new THREE.MeshStandardMaterial({ color: 0x888888, roughness: 0.9 }), // Concrete/Limestone
    stoneB: new THREE.MeshStandardMaterial({ color: 0xaa9988, roughness: 0.9 }), // Warm Stone
    glassBlue: new THREE.MeshStandardMaterial({ color: 0x112244, roughness: 0.0, metalness: 0.9 }), // Modern Glass
    glassBlack: new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.0, metalness: 0.9 }), // Sleek Glass
    metalGold: new THREE.MeshStandardMaterial({ color: 0xccaa44, roughness: 0.3, metalness: 0.8 }), // Art Deco Trim
    roof: new THREE.MeshStandardMaterial({ color: 0x333333, roughness: 1.0 })
};

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

    if (style === 0) {
        // --- Classic Setback (Empire State style) ---
        // Tier 1: Base (Full width, 40% height)
        const h1 = height * 0.4;
        const b1 = new THREE.Mesh(buildingGeom, matCache.stoneA);
        b1.position.set(x, h1 / 2, z);
        b1.scale.set(width, h1, width);
        b1.castShadow = true; b1.receiveShadow = true;
        chunkGroup.add(b1);
        addWindows(b1, width, h1, width, 0.7);

        // Tier 2: Mid (70% width, 30% height)
        const h2 = height * 0.3;
        const w2 = width * 0.7;
        const b2 = new THREE.Mesh(buildingGeom, matCache.stoneA);
        b2.position.set(x, h1 + h2 / 2, z);
        b2.scale.set(w2, h2, w2);
        b2.castShadow = true; b2.receiveShadow = true;
        chunkGroup.add(b2);
        addWindows(b2, w2, h2, w2, 0.6);

        // Tier 3: Top (40% width, 30% height)
        const h3 = height * 0.3;
        const w3 = width * 0.4;
        const b3 = new THREE.Mesh(buildingGeom, matCache.stoneA);
        b3.position.set(x, h1 + h2 + h3 / 2, z);
        b3.scale.set(w3, h3, w3);
        b3.castShadow = true; b3.receiveShadow = true;
        chunkGroup.add(b3);

        // Spire
        const spireH = 5;
        const spire = new THREE.Mesh(buildingGeom, matCache.metalGold);
        spire.position.set(x, height + spireH / 2, z);
        spire.scale.set(0.5, spireH, 0.5);
        chunkGroup.add(spire);

    } else if (style === 1) {
        // --- Modern Glass Monolith ---
        // Single tall block, maybe chamfered or varying slightly
        const mat = Math.random() > 0.5 ? matCache.glassBlue : matCache.glassBlack;

        const b = new THREE.Mesh(buildingGeom, mat);
        b.position.set(x, height / 2, z);
        b.scale.set(width, height, width);
        b.castShadow = true; b.receiveShadow = true;
        chunkGroup.add(b);

        // Vertical metallic strips (Mullions)
        const numStrips = 3;
        for (let i = 0; i < numStrips; i++) {
            // X-face strips
            const s1 = new THREE.Mesh(buildingGeom, matCache.sidewalk); // Grey metal
            s1.scale.set(0.2, height, width + 0.1);
            s1.position.set(x + (i - 1) * (width / 3), height / 2, z);
            chunkGroup.add(s1);

            // Z-face strips
            const s2 = new THREE.Mesh(buildingGeom, matCache.sidewalk);
            s2.scale.set(width + 0.1, height, 0.2);
            s2.position.set(x, height / 2, z + (i - 1) * (width / 3));
            chunkGroup.add(s2);
        }

    } else {
        // --- Art Deco Block ---
        // Stone with gold corners/trim
        const mat = matCache.stoneB;

        // Main block
        const b = new THREE.Mesh(buildingGeom, mat);
        b.position.set(x, height / 2, z);
        b.scale.set(width, height, width);
        b.castShadow = true; b.receiveShadow = true;
        chunkGroup.add(b);
        addWindows(b, width, height, width, 0.5);

        // Gold Corners (Pillars)
        const pillarW = 0.5;
        const corners = [
            { mx: -1, mz: -1 }, { mx: 1, mz: -1 }, { mx: 1, mz: 1 }, { mx: -1, mz: 1 }
        ];
        corners.forEach(c => {
            const p = new THREE.Mesh(buildingGeom, matCache.metalGold);
            p.position.set(x + c.mx * (width / 2), height / 2, z + c.mz * (width / 2));
            p.scale.set(pillarW, height + 1, pillarW); // Slightly taller
            chunkGroup.add(p);
        });
    }
}

// REDEFINING addWindows to use InstancedMesh logic.
// Instead of adding meshes, we push matrices to an array.
function spawnWindowMatrices(x, y, z, w, h, d, matrices) {
    const floors = Math.floor(h / 1.5);
    const cols = Math.floor(w / 1.5);

    const dummy = new THREE.Object3D();

    for (let f = 0; f < floors; f++) {
        if (Math.random() > 0.8) continue;
        const yPos = y - h / 2 + 1 + f * 1.5;

        for (let c = 0; c < cols; c++) {
            const offset = -w / 2 + 1 + c * 1.5;

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
    const style = Math.floor(Math.random() * 3);
    const height = 20 + Math.random() * 50;

    const box = new THREE.Box3();
    box.min.set(x - width / 2, 0, z - width / 2);
    box.max.set(x + width / 2, height, z + width / 2);
    colliders.push(box);

    if (style === 0) {
        // Setback
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

        const ant = new THREE.Mesh(buildingGeom, matCache.metalGold);
        ant.position.set(x, height + 4, z);
        ant.scale.set(0.3, 8, 0.3);
        chunkGroup.add(ant);

    } else if (style === 1) {
        // Glass
        const mat = Math.random() > 0.5 ? matCache.glassBlue : matCache.glassBlack;
        const b = new THREE.Mesh(buildingGeom, mat);
        b.position.set(x, height / 2, z);
        b.scale.set(width, height, width);
        b.castShadow = true; b.receiveShadow = true;
        chunkGroup.add(b);

        const roof = new THREE.Mesh(buildingGeom, matCache.sidewalk);
        roof.position.set(x, height + 0.5, z);
        roof.scale.set(width, 1, width);
        chunkGroup.add(roof);

    } else {
        // Art Deco
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

    corners.forEach(corner => {
        // Sidewalk
        const sw = new THREE.Mesh(sidewalkGeom, matCache.sidewalk);
        sw.position.set(xPos + corner.x, 0.1, zPos + corner.z);
        sw.scale.set(cornerSize, 1, cornerSize);
        sw.receiveShadow = true;
        chunkGroup.add(sw);

        // NYC Building
        if (Math.random() > 0.2) { // 80% density
            const width = cornerSize - 4; // Margin
            if (width > 2) {
                createNYCBuilding(xPos + corner.x, zPos + corner.z, width, chunkGroup, colliders, windowMatrices);
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
