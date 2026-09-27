/**
 * src/terrain.js — PLANET-02: the wilderness renderer.
 *
 * `world.js` builds *cities*. This module builds everything else on the planet:
 * the living ground, the water, and the ecology scattered over both.
 *
 * A nature chunk is assembled from four layers, all sampled from `src/planet.js`
 * so the picture and the simulation can never disagree:
 *
 *   1. surface   — a subdivided height grid with per-vertex biome tint, shared
 *                  boundary samples with the neighbour chunk so the terrain is
 *                  seamless across the streaming grid.
 *   2. water     — per-cell quads at the waterline for ocean / lake / river,
 *                  tinted by what the water actually is.
 *   3. trees     — the shared archetypes from world.js, planted by biome density
 *                  with snow-dressed foliage in the cold biomes.
 *   4. props     — instanced rocks, bushes, tufts, flowers, reeds, cacti,
 *                  mushrooms, ferns, bones and driftwood, one InstancedMesh per
 *                  geometry part, so a chunk of wilderness is a handful of draws.
 *
 * Determinism: everything scattered here is driven by a per-chunk seeded RNG
 * (chunk coords folded into the seed), so the same chunk always grows the same
 * forest — which is what lets `check_world.mjs` verify a chunk twice and expect
 * identical output.
 */

import * as THREE from 'three';
import * as BufferGeometryUtils from 'three/addons/utils/BufferGeometryUtils.js';
import { RNG } from './core/rng.js';
import { BIOME } from './planet.js';
import { addTreeToGeoms, mergeVegetation, VEGETATION_MATERIALS } from './world.js';

/* ------------------------------------------------------------------ */
/* Materials                                                           */
/* ------------------------------------------------------------------ */

const MAT_CACHE = new Map();

/**
 * Ground tints come from the biome table, so they are created on demand and
 * shared: one MeshStandardMaterial per biome colour, ever.
 */
export function groundMaterial(hex) {
    let m = MAT_CACHE.get(hex);
    if (!m) {
        m = new THREE.MeshStandardMaterial({
            color: hex, roughness: 1.0, metalness: 0.0, vertexColors: true, flatShading: false,
        });
        m.name = 'ground-' + hex.toString(16);
        MAT_CACHE.set(hex, m);
    }
    return m;
}

const matRock = new THREE.MeshStandardMaterial({ color: 0x8d8d8d, roughness: 0.95, metalness: 0.05 });
const matRockDark = new THREE.MeshStandardMaterial({ color: 0x5c5f60, roughness: 0.95 });
const matBush = new THREE.MeshStandardMaterial({ color: 0x3f6f34, roughness: 0.9 });
const matBushDry = new THREE.MeshStandardMaterial({ color: 0x8a7a45, roughness: 0.95 });
const matTuft = new THREE.MeshStandardMaterial({ color: 0x7a9b3f, roughness: 1.0 });
const matReed = new THREE.MeshStandardMaterial({ color: 0x5d7a3a, roughness: 1.0 });
const matCactus = new THREE.MeshStandardMaterial({ color: 0x4d7a4a, roughness: 0.85 });
const matFern = new THREE.MeshStandardMaterial({ color: 0x2f6b3a, roughness: 0.9 });
const matMushStem = new THREE.MeshStandardMaterial({ color: 0xd8cfbe, roughness: 0.9 });
const matMushCap = new THREE.MeshStandardMaterial({ color: 0xa33a2a, roughness: 0.8 });
const matBone = new THREE.MeshStandardMaterial({ color: 0xd9d2bd, roughness: 0.7 });
const matWood = new THREE.MeshStandardMaterial({ color: 0x6b4b2a, roughness: 0.95 });
const matPetalA = new THREE.MeshStandardMaterial({ color: 0xd84a6a, roughness: 0.7 });
const matPetalB = new THREE.MeshStandardMaterial({ color: 0xe8c832, roughness: 0.7 });
const matPetalC = new THREE.MeshStandardMaterial({ color: 0x8a5ad0, roughness: 0.7 });
const matStem = new THREE.MeshStandardMaterial({ color: 0x4a7a34, roughness: 1.0 });
const matSnow = new THREE.MeshStandardMaterial({ color: 0xeef3f6, roughness: 0.9 });

export const WATER_COLORS = {
    [BIOME.OCEAN]: 0x1d4a6b,
    [BIOME.COAST]: 0x2f6b86,
    [BIOME.LAKE]: 0x2c5f6e,
    [BIOME.RIVER]: 0x35687a,
};

/**
 * Standing water. Transparent with depthWrite off, so the opaque terrain renders
 * first and the waterline simply floats over whatever is below it.
 */
export function waterMaterials() {
    if (!WATER_MATS.sea) {
        WATER_MATS.sea = new THREE.MeshStandardMaterial({
            color: 0x1d4a6b, roughness: 0.12, metalness: 0.15,
            transparent: true, opacity: 0.72, depthWrite: false, envMapIntensity: 0.6,
        });
        WATER_MATS.lake = new THREE.MeshStandardMaterial({
            color: 0x2c5f6e, roughness: 0.2, metalness: 0.1,
            transparent: true, opacity: 0.7, depthWrite: false, envMapIntensity: 0.5,
        });
        WATER_MATS.river = new THREE.MeshStandardMaterial({
            color: 0x35687a, roughness: 0.25, metalness: 0.05,
            transparent: true, opacity: 0.66, depthWrite: false,
        });
    }
    return WATER_MATS;
}
const WATER_MATS = {};

/* ------------------------------------------------------------------ */
/* Prop prototypes                                                     */
/* ------------------------------------------------------------------ */

const geoBoulder = new THREE.IcosahedronGeometry(1, 0);
geoBoulder.scale(1, 0.7, 0.9);
const geoRockChunk = new THREE.TetrahedronGeometry(0.6, 0);
const geoBushBall = new THREE.IcosahedronGeometry(1, 1);
geoBushBall.scale(1, 0.75, 1);
const geoTuft = new THREE.ConeGeometry(0.28, 1.3, 4);
geoTuft.translate(0, 0.65, 0);
const geoReedStalk = new THREE.CylinderGeometry(0.04, 0.07, 1.8, 3);
geoReedStalk.translate(0, 0.9, 0);
const geoReedHead = new THREE.CylinderGeometry(0.09, 0.05, 0.4, 4);
geoReedHead.translate(0, 1.85, 0);
const geoCactusBody = new THREE.CylinderGeometry(0.32, 0.38, 2.4, 6);
geoCactusBody.translate(0, 1.2, 0);
const geoCactusArm = new THREE.CylinderGeometry(0.16, 0.18, 1.0, 5);
const geoFernFrond = new THREE.ConeGeometry(0.35, 1.1, 3);
geoFernFrond.translate(0, 0.55, 0);
const geoMushStem = new THREE.CylinderGeometry(0.09, 0.12, 0.4, 5);
geoMushStem.translate(0, 0.2, 0);
const geoMushCap = new THREE.SphereGeometry(0.3, 6, 4, 0, Math.PI * 2, 0, Math.PI / 2);
geoMushCap.translate(0, 0.4, 0);
const geoBoneShaft = new THREE.BoxGeometry(0.16, 0.16, 1.5);
const geoBoneKnob = new THREE.SphereGeometry(0.18, 5, 4);
const geoLog = new THREE.CylinderGeometry(0.28, 0.32, 3.2, 6);
geoLog.rotateZ(Math.PI / 2);
geoLog.translate(0, 0.3, 0);
const geoFlowerStem = new THREE.CylinderGeometry(0.03, 0.04, 0.5, 3);
geoFlowerStem.translate(0, 0.25, 0);
const geoFlowerHead = new THREE.SphereGeometry(0.16, 5, 4);
geoFlowerHead.translate(0, 0.55, 0);

/**
 * Scatterable flora. `parts` are instanced together, so one prop is one matrix
 * applied to N geometries — a forest floor is still a handful of draw calls.
 * `petals` marks the prop whose head colour is chosen per patch.
 */
export const PROP_TYPES = {
    rock:       { parts: [{ geo: geoBoulder, mat: matRock }, { geo: geoRockChunk, mat: matRockDark }], scale: [0.5, 1.5], collider: 1.4 },
    bush:       { parts: [{ geo: geoBushBall, mat: matBush }], scale: [0.5, 1.3], coldSwap: 'snow' },
    grass:      { parts: [{ geo: geoTuft, mat: matTuft }], scale: [0.6, 1.4], clumps: 3 },
    flower:     { parts: [{ geo: geoFlowerStem, mat: matStem }, { geo: geoFlowerHead, mat: matPetalA, petals: true }], scale: [0.7, 1.3], clumps: 4 },
    reed:       { parts: [{ geo: geoReedStalk, mat: matReed }, { geo: geoReedHead, mat: matBushDry }], scale: [0.7, 1.3], clumps: 5 },
    cactus:     { parts: [{ geo: geoCactusBody, mat: matCactus }, { geo: geoCactusArm, mat: matCactus }], scale: [0.7, 1.6] },
    mushroom:   { parts: [{ geo: geoMushStem, mat: matMushStem }, { geo: geoMushCap, mat: matMushCap }], scale: [0.6, 1.4], clumps: 2 },
    fern:       { parts: [{ geo: geoFernFrond, mat: matFern }], scale: [0.7, 1.4], clumps: 3 },
    bone:       { parts: [{ geo: geoBoneShaft, mat: matBone }, { geo: geoBoneKnob, mat: matBone }], scale: [0.7, 1.5] },
    driftwood:  { parts: [{ geo: geoLog, mat: matWood }], scale: [0.7, 1.4] },
};

const PETAL_MATS = [matPetalA, matPetalB, matPetalC];

/**
 * Instanced draw for a prop: one InstancedMesh per geometry part, all sharing
 * the same per-instance transform set. Multi-part props (mushroom = stem+cap,
 * cactus = body+arm) therefore stay in lockstep.
 */
function addInstancedParts(group, parts, records, matOverride) {
    if (!records.length) return;
    const dummy = new THREE.Object3D();
    for (const part of parts) {
        const mat = (part.petals && matOverride) ? matOverride : part.mat;
        const mesh = new THREE.InstancedMesh(part.geo, mat, records.length);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        mesh.frustumCulled = false;
        for (let i = 0; i < records.length; i++) {
            const r = records[i];
            dummy.position.set(r.x, r.y, r.z);
            dummy.rotation.set(r.rx || 0, r.ry || 0, r.rz || 0);
            dummy.scale.set(r.sx, r.sy, r.sz);
            dummy.updateMatrix();
            mesh.setMatrixAt(i, dummy.matrix);
        }
        mesh.instanceMatrix.needsUpdate = true;
        mesh.name = 'prop:' + (mat.name || 'prop');
        group.add(mesh);
    }
}

/* ------------------------------------------------------------------ */
/* Surface grid                                                        */
/* ------------------------------------------------------------------ */

const GRID = 6;      // cells per chunk edge — 49 height samples, seamless shared edges
const _dummy = new THREE.Object3D();

/**
 * Build the height-grid geometry for one chunk. Boundary vertices sample exactly
 * the same world positions as the neighbour chunk, so the surface is continuous
 * across the whole streamed grid with no stitching pass.
 */
function buildSurfaceGeometry(planet, xPos, zPos, size, tintFn) {
    const step = size / GRID;
    const half = size / 2;
    const n = GRID + 1;
    const positions = new Float32Array(n * n * 3);
    const colors = new Float32Array(n * n * 3);
    const col = new THREE.Color();

    for (let j = 0; j < n; j++) {
        for (let i = 0; i < n; i++) {
            const wx = xPos - half + i * step;
            const wz = zPos - half + j * step;
            const idx = (j * n + i);
            positions[idx * 3] = wx;
            positions[idx * 3 + 1] = planet.groundHeightCached(wx, wz);
            positions[idx * 3 + 2] = wz;
            const tint = tintFn(wx, wz);
            col.setHex(tint);
            colors[idx * 3] = col.r;
            colors[idx * 3 + 1] = col.g;
            colors[idx * 3 + 2] = col.b;
        }
    }

    const indices = [];
    for (let j = 0; j < GRID; j++) {
        for (let i = 0; i < GRID; i++) {
            const a = j * n + i, b = a + 1, c = a + n, d = c + 1;
            indices.push(a, c, b, b, c, d);
        }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geo.setIndex(indices);
    geo.computeVertexNormals();
    return geo;
}

/**
 * Water surface: only the cells that are actually covered get quads, so lakes
 * keep their outline instead of every wet chunk becoming a sea.
 */
function buildWaterGeometry(planet, xPos, zPos, size, level) {
    const step = size / GRID;
    const half = size / 2;
    const positions = [];
    const y = level - 0.04;
    for (let j = 0; j < GRID; j++) {
        for (let i = 0; i < GRID; i++) {
            const cx = xPos - half + (i + 0.5) * step;
            const cz = zPos - half + (j + 0.5) * step;
            if (planet.waterDepth(cx, cz) <= 0.05) continue;
            const x0 = xPos - half + i * step, x1 = x0 + step;
            const z0 = zPos - half + j * step, z1 = z0 + step;
            positions.push(
                x0, y, z0, x0, y, z1, x1, y, z1,
                x0, y, z0, x1, y, z1, x1, y, z0,
            );
        }
    }
    if (!positions.length) return null;
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(positions), 3));
    geo.computeVertexNormals();
    return geo;
}

/* ------------------------------------------------------------------ */
/* Chunk builder                                                       */
/* ------------------------------------------------------------------ */

/** Tree archetypes per biome — the species that actually grow there. */
const BIOME_TREES = {
    [BIOME.FOREST]: [0, 0, 2, 6, 1],
    [BIOME.RAINFOREST]: [0, 0, 5, 6, 2],
    [BIOME.BOREAL]: [1, 1, 4, 1, 6],
    [BIOME.TUNDRA]: [1, 6, 1],
    [BIOME.ALPINE]: [1, 6, 4],
    [BIOME.MEADOW]: [0, 2, 0, 3],
    [BIOME.GRASSLAND]: [0, 2, 3, 6],
    [BIOME.SAVANNA]: [3, 0, 6],
    [BIOME.SCRUB]: [6, 3, 0],
    [BIOME.BEACH]: [2, 0],
    [BIOME.WETLAND]: [5, 0, 1],
    [BIOME.DESERT]: [3],
    [BIOME.CITY]: [0, 2, 4],
};

/**
 * createNatureChunk — everything on the planet that is not a city.
 *
 * @param {number} xPos,zPos chunk centre in world units
 * @param {number} size      chunk size
 * @param {Planet} planet    the surface model
 * @param {object} cls       planet.classifyChunk() result
 * @param {object} opts      { lod, waterLevel, treeScale }
 */
export function createNatureChunk(xPos, zPos, size, planet, cls, opts = {}) {
    const group = new THREE.Group();
    const colliders = [];
    const lod = opts.lod || 0;
    const isLOD = lod > 0;
    const waterLevel = opts.waterLevel === undefined ? 0 : opts.waterLevel;

    // One RNG per chunk, keyed by chunk coordinates: the same place always grows
    // the same forest, no matter how often it streams in and out.
    const rng = new RNG((Math.imul(cls.cx | 0, 73856093) ^ Math.imul(cls.cz | 0, 19349663) ^ (planet.seed * 83492791)) >>> 0);
    const rand = () => rng.float();

    const biome = cls.biome;
    const info = planet.biomeInfo(biome);
    const cold = !!info.cold;
    const tintBase = new THREE.Color(info.ground);

    // 1. SURFACE -------------------------------------------------------------
    // Small per-vertex tint variation keeps a 6x6 grid from reading as painted
    // tiles, without asking the planet for a second biome sample per vertex.
    const tintFn = (wx, wz) => {
        const jitter = 1 + (hash01(wx, wz) - 0.5) * 0.16;
        return tintBase.clone().multiplyScalar(jitter).getHex();
    };
    const surface = buildSurfaceGeometry(planet, xPos, zPos, size, tintFn);
    const surfaceMesh = new THREE.Mesh(surface, groundMaterial(0xffffff));
    surfaceMesh.receiveShadow = true;
    surfaceMesh.name = 'surface:' + biome;
    group.add(surfaceMesh);

    // 2. WATER ---------------------------------------------------------------
    if (!isLOD) {
        const waterGeo = buildWaterGeometry(planet, xPos, zPos, size, waterLevel);
        if (waterGeo) {
            const mats = waterMaterials();
            let wmat = mats.sea;
            if (planet.isRiver(xPos, zPos)) wmat = mats.river;
            else if (planet.isLake(xPos, zPos)) wmat = mats.lake;
            const water = new THREE.Mesh(waterGeo, wmat);
            water.receiveShadow = false;
            water.renderOrder = 2;
            water.name = 'water:' + biome;
            group.add(water);
        }
    }

    // Far LOD: the ground grid is enough. Trees and props are the expensive
    // part of wilderness, and you cannot see them from across the map anyway.
    if (isLOD) return { mesh: group, colliders, type: 'nature', biome, treeCount: 0, propCount: 0 };

    // 3. TREES ---------------------------------------------------------------
    const geoms = {
        trunkBrown: [], trunkWhite: [], trunkGrey: [], trunkBlack: [],
        leafGreen: [], leafDark: [], leafPink: [], leafOrange: [], leafYellow: [],
        leafSnow: [], dirt: [],
    };
    const species = BIOME_TREES[biome] || BIOME_TREES[BIOME.GRASSLAND];
    const treeTarget = Math.round((info.trees || 0) * 120 * (0.7 + rand() * 0.6));
    let trees = 0;
    for (let t = 0; t < treeTarget; t++) {
        const x = xPos + (rand() - 0.5) * size * 0.98;
        const z = zPos + (rand() - 0.5) * size * 0.98;
        if (planet.waterDepth(x, z) > 0) continue;             // no trees swimming
        const y = planet.groundHeightCached(x, z);
        if (y < 0.25) continue;                                  // keep the shoreline clean
        const type = species[Math.floor(rand() * species.length) % species.length];
        const scale = 0.75 + rand() * 0.9;
        addTreeToGeoms(type, x, z, geoms, {
            rand,
            y,
            scale,
            leaf: cold ? 'leafSnow' : 'leafGreen',
            leafDark: cold ? 'leafSnow' : 'leafDark',
        });
        // Trunk-only collider: cheap, and stops the player driving straight
        // through a forest while leaving the undergrowth walkable.
        const box = new THREE.Box3();
        const r = 0.9 * scale;
        box.min.set(x - r, y, z - r);
        box.max.set(x + r, y + 6 * scale, z + r);
        colliders.push(box);
        trees++;
    }

    const addClean = (arr, mat) => {
        if (!arr.length) return;
        const merged = mergeGeoms(arr);
        if (!merged) return;
        const mesh = new THREE.Mesh(merged, mat);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        group.add(mesh);
    };
    mergeVegetation(group, geoms, addClean);

    // 4. PROPS ---------------------------------------------------------------
    const flora = info.flora || [];
    let props = 0;
    if (flora.length) {
        const density = (info.props === undefined ? 0.5 : info.props) * 90;
        const buckets = new Map();   // propType|petalIndex -> records[]
        const propTarget = Math.max(0, Math.round(density * (0.7 + rand() * 0.6)));
        for (let p = 0; p < propTarget; p++) {
            const kind = flora[Math.floor(rand() * flora.length) % flora.length];
            const proto = PROP_TYPES[kind];
            if (!proto) continue;
            const x = xPos + (rand() - 0.5) * size * 0.98;
            const z = zPos + (rand() - 0.5) * size * 0.98;
            const wet = planet.waterDepth(x, z) > 0;
            if (wet && kind !== 'reed') continue;               // only reeds grow in water
            if (!wet && kind === 'reed') continue;              // and reeds stay on the bank
            const y = planet.groundHeightCached(x, z);
            if (!wet && y < 0) continue;
            const scale = proto.scale[0] + rand() * (proto.scale[1] - proto.scale[0]);
            const clumps = proto.clumps || 1;
            const petals = proto.parts.some(pt => pt.petals) ? Math.floor(rand() * PETAL_MATS.length) : -1;
            const key = kind + '|' + petals;
            if (!buckets.has(key)) buckets.set(key, []);
            const list = buckets.get(key);
            for (let c = 0; c < clumps; c++) {
                const ox = c === 0 ? 0 : (rand() - 0.5) * 1.6;
                const oz = c === 0 ? 0 : (rand() - 0.5) * 1.6;
                list.push({
                    x: x + ox, y, z: z + oz,
                    ry: rand() * Math.PI * 2,
                    rx: kind === 'bone' || kind === 'driftwood' ? 0 : (rand() - 0.5) * 0.12,
                    sx: scale * (0.85 + rand() * 0.3),
                    sy: scale * (0.8 + rand() * 0.5),
                    sz: scale * (0.85 + rand() * 0.3),
                });
            }
            if (proto.collider) {
                const box = new THREE.Box3();
                const r = proto.collider * scale;
                box.min.set(x - r, y, z - r);
                box.max.set(x + r, y + r * 1.4, z + r);
                colliders.push(box);
            }
            props += clumps;
        }
        for (const [key, records] of buckets) {
            const [kind, petal] = key.split('|');
            const proto = PROP_TYPES[kind];
            // Cold biomes trade dry scrub for snow-covered ground cover.
            const parts = cold && proto.coldSwap
                ? proto.parts.map(pt => ({ ...pt, mat: matSnow }))
                : proto.parts;
            addInstancedParts(group, parts, records, petal >= 0 ? PETAL_MATS[+petal] : undefined);
        }
    }

    group.name = `nature_${cls.cx},${cls.cz}:${biome}`;
    return { mesh: group, colliders, type: 'nature', biome, treeCount: trees, propCount: props };
}

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

/** Cheap stable [0,1) hash for per-vertex colour jitter (no allocations). */
function hash01(x, z) {
    let h = Math.imul(Math.floor(x * 4) | 0, 374761393) + Math.imul(Math.floor(z * 4) | 0, 668265263);
    h = Math.imul(h ^ (h >>> 13), 1274126177);
    return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
}

/** Merge with a guard — three's merger throws on attribute mismatches. */
function mergeGeoms(arr) {
    try {
        return BufferGeometryUtils.mergeGeometries(arr);
    } catch (e) {
        return null;
    }
}


/** Materials this module owns, for the world material registry + tests. */
export const TERRAIN_MATERIALS = {
    rock: matRock, rockDark: matRockDark, bush: matBush, bushDry: matBushDry,
    tuft: matTuft, reed: matReed, cactus: matCactus, fern: matFern,
    mushStem: matMushStem, mushCap: matMushCap, bone: matBone, wood: matWood,
    petalA: matPetalA, petalB: matPetalB, petalC: matPetalC, stem: matStem, snow: matSnow,
    leafSnow: VEGETATION_MATERIALS.leafSnow,
};
