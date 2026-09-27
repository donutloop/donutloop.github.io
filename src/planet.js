/**
 * src/planet.js — PLANET-01: the seeded planetary surface model.
 *
 * Worldloop used to be "one city at the origin, highway axes, then grey
 * wasteland". This module replaces that idea with a single continuous,
 * seed-driven planet: everything the renderer and the simulation need to know
 * about a place is derived from a handful of scalar fields over the infinite
 * (x, z) plane, so the world never runs out and always matches its seed.
 *
 * Fields (all pure functions of world position, all deterministic):
 *   elevation   — continents + hills + ridged mountain ranges, metres above sea
 *   moisture    — wetness field, drives forests vs. deserts
 *   temperature — climate bands + elevation lapse, drives tundra vs. savanna
 *   rivers      — thin winding watercourses carved into the land
 *
 * Classification (Whittaker-style, two axes in):
 *   biomeAt(x,z)  → one of BIOME_* (ocean/coast/beach/meadow/forest/rainforest/
 *                   savanna/desert/scrub/wetland/tundra/boreal/alpine/peak)
 *
 * Settlements:
 *   Cities are placed on a jittered lattice in CHUNK space, so every city
 *   centre sits exactly on a chunk centre. That is deliberate: the road legs
 *   between cities then run along chunk rows/columns and reuse the existing
 *   axis-aligned highway builders, traffic lanes, parking and pedestrian
 *   systems unchanged. Each city gets a kind (metropolis, old town, industrial,
 *   suburbia, neon, harbour, agro, outpost, winter), a procedural name, a
 *   population, and an architecture profile consumed by the chunk builders.
 *
 * Everything here is pure data — no THREE, no DOM — so `check_world.mjs` can
 * assert the planet's shape in Node exactly as the browser sees it.
 */

import { SimplexNoise } from './noise.js';
import { getSeed, DEFAULT_SEED } from './core/rng.js';

/* ------------------------------------------------------------------ */
/* Integer hashing                                                     */
/* ------------------------------------------------------------------ */

/**
 * Deterministic 32-bit integer hash → [0,1). Independent of the shared global
 * RNG on purpose: the planet must be reproducible from its own seed even if a
 * system calls Math.random() or re-seeds the global RNG in between.
 */
export function hash2(x, y, seed) {
    let h = Math.imul(x | 0, 374761393) + Math.imul(y | 0, 668265263) + Math.imul(seed | 0, 1442695041);
    h = Math.imul(h ^ (h >>> 13), 1274126177);
    h ^= h >>> 16;
    return (h >>> 0) / 4294967296;
}

function smooth(t) { return t * t * (3 - 2 * t); }

/** Bilinearly interpolated hash lattice — classic value noise in [0,1). */
export function valueNoise(x, y, seed) {
    const xi = Math.floor(x), yi = Math.floor(y);
    const u = smooth(x - xi), v = smooth(y - yi);
    const a = hash2(xi, yi, seed), b = hash2(xi + 1, yi, seed);
    const c = hash2(xi, yi + 1, seed), d = hash2(xi + 1, yi + 1, seed);
    const ab = a + (b - a) * u;
    const cd = c + (d - c) * u;
    return ab + (cd - ab) * v;
}

/** Fractal Brownian motion over value noise, normalized to [0,1). */
export function fbm(x, y, { octaves = 4, lacunarity = 2.0, gain = 0.5, seed = 0 } = {}) {
    let amp = 1, freq = 1, sum = 0, norm = 0;
    for (let o = 0; o < octaves; o++) {
        sum += amp * valueNoise(x * freq, y * freq, (seed + o * 7919) | 0);
        norm += amp;
        amp *= gain;
        freq *= lacunarity;
    }
    return sum / norm;
}

/** Ridged fbm — sharp crests, used for mountain ranges and river thalwegs. */
export function ridged(x, y, { octaves = 4, lacunarity = 2.0, gain = 0.5, seed = 0 } = {}) {
    let amp = 1, freq = 1, sum = 0, norm = 0;
    for (let o = 0; o < octaves; o++) {
        const n = 1 - Math.abs(valueNoise(x * freq, y * freq, (seed + o * 6151) | 0) * 2 - 1);
        sum += amp * n * n;
        norm += amp;
        amp *= gain;
        freq *= lacunarity;
    }
    return sum / norm;
}

function clamp(v, lo, hi) { return v < lo ? lo : (v > hi ? hi : v); }
function saturate(v) { return clamp(v, 0, 1); }
function mix(a, b, t) { return a + (b - a) * t; }
/** 0 below `edge`, 1 above `edge + width`. */
function smoothstep(edge, width, v) {
    const t = saturate((v - edge) / width);
    return t * t * (3 - 2 * t);
}

/* ------------------------------------------------------------------ */
/* Biomes                                                              */
/* ------------------------------------------------------------------ */

export const BIOME = {
    OCEAN: 'ocean',
    COAST: 'coast',
    LAKE: 'lake',
    BEACH: 'beach',
    WETLAND: 'wetland',
    MEADOW: 'meadow',
    GRASSLAND: 'grassland',
    FOREST: 'forest',
    RAINFOREST: 'rainforest',
    SAVANNA: 'savanna',
    DESERT: 'desert',
    SCRUB: 'scrub',
    TUNDRA: 'tundra',
    BOREAL: 'boreal',
    ALPINE: 'alpine',
    PEAK: 'peak',
    RIVER: 'river',
    CITY: 'city',
};

/**
 * Per-biome rendering / ecology table. The renderer reads this instead of
 * hard-coding per-biome magic numbers, so adding a biome is a data edit.
 *   ground  — surface tint (sRGB hex)
 *   trees   — expected trees per 100 m² (density driver for instanced foliage)
 *   flora   — prop mix drawn by the nature chunk builder
 *   trees   species hints map to the tree builders in world.js
 */
export const BIOME_TABLE = {
    [BIOME.OCEAN]:      { ground: 0x1b3a56, trees: 0.00, flora: [], water: true },
    [BIOME.COAST]:      { ground: 0x2d5a72, trees: 0.00, flora: ['reed'], water: true },
    [BIOME.LAKE]:       { ground: 0x2a5a6b, trees: 0.00, flora: ['reed'], water: true },
    [BIOME.BEACH]:      { ground: 0xc2a878, trees: 0.004, flora: ['reed', 'rock', 'bush'] },
    [BIOME.WETLAND]:    { ground: 0x3f5a3a, trees: 0.02, flora: ['reed', 'reed', 'bush', 'rock'] },
    [BIOME.MEADOW]:     { ground: 0x6d9b46, trees: 0.01, flora: ['flower', 'flower', 'grass', 'bush'] },
    [BIOME.GRASSLAND]:  { ground: 0x7d9a3f, trees: 0.02, flora: ['grass', 'flower', 'bush', 'rock'] },
    [BIOME.FOREST]:     { ground: 0x40602c, trees: 0.10, flora: ['bush', 'rock', 'grass', 'mushroom'] },
    [BIOME.RAINFOREST]: { ground: 0x2f5a24, trees: 0.16, flora: ['bush', 'fern', 'mushroom', 'rock'] },
    [BIOME.SAVANNA]:    { ground: 0x9a8c45, trees: 0.03, flora: ['grass', 'rock', 'bush'] },
    [BIOME.DESERT]:     { ground: 0xc9a86a, trees: 0.006, flora: ['cactus', 'rock', 'bone'] },
    [BIOME.SCRUB]:      { ground: 0x8a7d52, trees: 0.02, flora: ['bush', 'rock', 'bone'] },
    [BIOME.TUNDRA]:     { ground: 0x8c9488, trees: 0.01, flora: ['rock', 'grass', 'bush'] },
    [BIOME.BOREAL]:     { ground: 0x3c5344, trees: 0.08, flora: ['bush', 'rock', 'mushroom'] },
    [BIOME.ALPINE]:     { ground: 0x6e7378, trees: 0.01, flora: ['rock', 'rock', 'grass'] },
    [BIOME.PEAK]:       { ground: 0xdfe6ea, trees: 0.00, flora: ['rock'] },
    [BIOME.RIVER]:      { ground: 0x2f4f63, trees: 0.00, flora: ['reed'], water: true },
    [BIOME.CITY]:       { ground: 0x3a3a3a, trees: 0.01, flora: [] },
};

/* ------------------------------------------------------------------ */
/* City kinds                                                          */
/* ------------------------------------------------------------------ */

/**
 * A city "kind" is a personality: how tall it builds, what it's made of, how
 * dense it is and what landmarks it grows. `styleMix` weights feed the style
 * roll in world.js so two cities never feel alike.
 */
export const CITY_KINDS = {
    metropolis: {
        label: 'Metropolis', height: [60, 260], density: 0.94, trees: 0.14,
        styleMix: { glass: 0.4, modern: 0.28, future: 0.22, brick: 0.10 },
        landmark: 'tower', neon: 0.35, palette: [0x9fb6cc, 0x2b3a4a],
    },
    downtown: {
        label: 'Downtown', height: [22, 95], density: 0.88, trees: 0.18,
        styleMix: { modern: 0.45, brick: 0.3, glass: 0.25 },
        landmark: 'plaza', neon: 0.12, palette: [0xb8b2a6, 0x4a4f57],
    },
    oldtown: {
        label: 'Old Town', height: [9, 30], density: 0.82, trees: 0.24,
        styleMix: { brick: 0.62, modern: 0.28, glass: 0.10 },
        landmark: 'clocktower', neon: 0.04, palette: [0xb07f5a, 0x6b4632],
    },
    industrial: {
        label: 'Industrial Zone', height: [7, 28], density: 0.66, trees: 0.07,
        styleMix: { modern: 0.5, brick: 0.5 },
        landmark: 'refinery', neon: 0.05, palette: [0x808890, 0x3b4046],
        wide: true,
    },
    suburbia: {
        label: 'Suburbia', height: [6, 16], density: 0.62, trees: 0.46,
        styleMix: { modern: 0.6, brick: 0.4 },
        landmark: 'school', neon: 0.02, palette: [0xc8b9a0, 0x7a6a55],
        wide: true,
    },
    neon: {
        label: 'Neon District', height: [45, 190], density: 0.9, trees: 0.08,
        styleMix: { future: 0.62, glass: 0.38 },
        landmark: 'pyramid', neon: 0.95, palette: [0x181a24, 0x00e5ff],
    },
    harbour: {
        label: 'Harbour Town', height: [10, 55], density: 0.72, trees: 0.14,
        styleMix: { modern: 0.42, brick: 0.36, glass: 0.22 },
        landmark: 'lighthouse', neon: 0.12, palette: [0xa9b7c2, 0x2f4a5c],
        wide: true, docks: true,
    },
    agro: {
        label: 'Agro Settlement', height: [6, 20], density: 0.5, trees: 0.3,
        styleMix: { modern: 0.55, brick: 0.45 },
        landmark: 'silo', neon: 0.02, palette: [0xbfae8a, 0x5c6b3d],
        wide: true, farms: true,
    },
    outpost: {
        label: 'Desert Outpost', height: [6, 34], density: 0.58, trees: 0.06,
        styleMix: { brick: 0.58, modern: 0.26, future: 0.16 },
        landmark: 'watertower', neon: 0.18, palette: [0xcda06a, 0x7a5330],
        wide: true,
    },
    winter: {
        label: 'Winter Town', height: [8, 42], density: 0.68, trees: 0.34,
        styleMix: { modern: 0.44, brick: 0.32, glass: 0.24 },
        landmark: 'cabin', neon: 0.1, palette: [0xd6dde3, 0x4a5a68],
        snowcaps: true,
    },
};

const KIND_KEYS = Object.keys(CITY_KINDS);

/* ------------------------------------------------------------------ */
/* Names                                                               */
/* ------------------------------------------------------------------ */

const NAME_PREFIX = ['Var', 'Kel', 'Ora', 'Dun', 'Mar', 'Tes', 'Ny', 'Al', 'Cer', 'Vor', 'Es', 'Zan', 'Bel', 'Fen', 'Tal', 'Ith', 'Rho', 'Sal', 'Mor', 'Glen'];
const NAME_MID = ['a', 'i', 'o', 'e', 'ae', 'u', 'ia'];
const NAME_TAIL = ['mar', 'dun', 'vel', 'grad', 'ford', 'heim', 'burg', 'vale', 'reach', 'haven', 'spire', 'field', 'crest', 'wharf', 'grove', 'gate'];
const NAME_SUFFIX = ['Prime', 'Major', 'Minor', 'Secundus', 'Nova', 'Vast', 'Rest', 'Terminus', 'Drift', 'Anchor'];

/* ------------------------------------------------------------------ */
/* Planet                                                              */
/* ------------------------------------------------------------------ */

export class Planet {
    /**
     * @param {object} opts
     *   seed       — planet seed (defaults to the global seed from core/rng.js)
     *   chunkSize  — world size of one streamed chunk (blockSize + roadWidth)
     */
    constructor({ seed = null, chunkSize = 96 } = {}) {
        this.seed = (seed === null || seed === undefined) ? (getSeed() || DEFAULT_SEED) : (seed >>> 0);
        this.chunkSize = chunkSize;

        // Landscape tuning (metres).
        this.seaLevel = 0;
        this.elevationScale = 210;      // amplitude of the elevation field
        this.lakeLevel = 0.66;          // basin field threshold → inland lakes
        this.riverWidth = 0.78;         // ridged-noise crest height for rivers
        // Raw fbm clusters around its mean, which would give a planet of beige
        // mildness. These contrasts stretch moisture/temperature over their full
        // range so real deserts, rainforests and polar caps exist.
        this.moistureContrast = 2.3;
        this.temperatureContrast = 2.7;
        this.continentContrast = 1.7;

        // Settlement tuning (chunk units).
        this.cityCell = 16;             // lattice pitch: a candidate city per 16×16 chunks
        this.cityJitter = 4;            // centre wobble, in chunks (keeps cities off the grid lines)
        this.cityChance = 0.74;         // probability a lattice cell grows a city
        this.cityRadius = [3, 6];       // built-up radius, in chunks
        this.spawnCity = true;          // the origin always holds the first landfall city

        this._cityCache = new Map();    // "cellX,cellZ" -> city | null
        this._chunkCache = new Map();   // "cx,cz" -> classification
        this._pairCache = new Map();    // city id -> neighbour cities (road graph)
    }

    /* ---------------- fields ---------------- */

    /** Continental + local relief, in metres above mean sea level. */
    elevation(x, z) {
        const s = this.seed;
        // Continents: very broad, decides where the ocean basins are.
        const cont = (fbm(x / 2400, z / 2400, { octaves: 5, seed: s + 11 }) - 0.5) * this.continentContrast;
        // Rolling hills at the kilometre scale.
        const hills = fbm(x / 620, z / 620, { octaves: 4, seed: s + 23 }) - 0.5;
        // Mountain ranges: ridged crests, only allowed to bite where the
        // continent is already high, so peaks cluster into ranges.
        const mount = ridged(x / 900, z / 900, { octaves: 4, seed: s + 37 });
        const range = smoothstep(0.12, 0.34, cont) * smoothstep(0.42, 0.78, mount);

        // Bias upward so the planet is land-dominated (a habitable world).
        let e = cont + hills * 0.34 + range * 0.85 + 0.16;

        // Inland lakes: where the basin field peaks AND we are already on land,
        // the surface is *pulled down* to a below-sea level instead of merely
        // subtracted — that is what turns a wet patch into a real lake with a
        // shore, instead of a damp plain that never breaks the waterline.
        const basin = fbm(x / 520, z / 520, { octaves: 3, seed: s + 51 });
        const lake = smoothstep(this.lakeLevel, 0.13, basin) * smoothstep(-0.02, 0.26, cont);
        e = mix(e, -0.16, lake);

        return e * this.elevationScale;
    }

    /** Extra subtraction applied by rivers, kept separate so callers can ask
     *  for the pre-river surface (used when deciding if a river is on land). */
    riverCarve(x, z) {
        const s = this.seed;
        const r = ridged(x / 700, z / 700, { octaves: 3, seed: s + 71 });
        const crest = smoothstep(this.riverWidth, 0.12, r);      // 1 on the thalweg
        const meander = fbm(x / 260, z / 260, { octaves: 2, seed: s + 83 });
        return crest * (0.6 + 0.4 * meander);
    }

    /** Full surface height including river carving (metres, sea level = 0). */
    surfaceHeight(x, z) {
        const e = this.elevation(x, z);
        if (e < -6) return e; // no rivers in the deep ocean
        const carve = this.riverCarve(x, z);
        if (carve <= 0) return e;
        // Rivers cut watercourses through low country only; the high country
        // keeps its crests instead of being sliced into canyons.
        const bank = smoothstep(0.0, 10, e) * (1 - smoothstep(46, 88, e));
        return e - carve * bank * 24.0;
    }

    /** Atmospheric moisture, 0 = parched, 1 = saturated. */
    moisture(x, z) {
        const s = this.seed;
        const wet = fbm(x / 1100, z / 1100, { octaves: 4, seed: s + 101 });
        const fine = fbm(x / 300, z / 300, { octaves: 3, seed: s + 113 });
        return saturate(0.5 + (wet * 0.75 + fine * 0.25 - 0.5) * this.moistureContrast);
    }

    /** Climate band (north/south drift) + elevation lapse, -1 frozen … 1 torrid. */
    temperature(x, z, height = null) {
        const s = this.seed;
        const band = valueNoise(0.5, z / 2600, (s + 127) | 0) * 2 - 1;   // broad N/S bands
        const local = fbm(x / 800, z / 800, { octaves: 3, seed: s + 139 }) - 0.5;
        const h = height === null ? this.surfaceHeight(x, z) : height;
        const lapse = -smoothstep(35, 95, h) * 0.9;                      // mountains get cold
        const polar = Math.abs(band) > 0.55 ? -(Math.abs(band) - 0.55) * 2.2 : 0;
        const raw = 0.62 + band * 0.42 + local * 0.5 + lapse + polar;
        return saturate(0.5 + (raw - 0.5) * this.temperatureContrast);
    }

    /** Water depth at (x,z); ≤ 0 means dry land. */
    waterDepth(x, z) {
        return this.seaLevel - this.surfaceHeight(x, z);
    }

    isWater(x, z) { return this.waterDepth(x, z) > 0; }

    /** True when the cell is a flowing freshwater course rather than a lake. */
    isRiver(x, z) {
        if (this.isWater(x, z)) {
            const e = this.elevation(x, z);
            return e > 6 && this.riverCarve(x, z) > 0.5;
        }
        return false;
    }

    /** Fraction of a ring of radius r around (x,z) that is dry land (0..1). */
    landRatio(x, z, r) {
        let dry = 0;
        for (let a = 0; a < 8; a++) {
            const ang = a * Math.PI / 4;
            if (!this.isWater(x + Math.cos(ang) * r, z + Math.sin(ang) * r)) dry++;
        }
        return dry / 8;
    }

    /**
     * Enclosed fresh water: a water cell ringed by land is a lake, not sea.
     * This is what lets lakes share the waterline maths with the ocean while
     * still getting shore reeds and a different tint.
     */
    isLake(x, z) {
        if (!this.isWater(x, z) || this.isRiver(x, z)) return false;
        return this.landRatio(x, z, Math.max(120, this.chunkSize * 1.6)) >= 0.75;
    }

    /* ---------------- classification ---------------- */

    /**
     * Whittaker classification: temperature × moisture, with water, beach,
     * river and altitude overrides.
     */
    biomeAt(x, z) {
        const h = this.surfaceHeight(x, z);
        const d = this.seaLevel - h;
        if (d > 0) {
            if (this.isRiver(x, z)) return BIOME.RIVER;
            if (this.isLake(x, z)) return BIOME.LAKE;
            return d > 14 ? BIOME.OCEAN : BIOME.COAST;
        }
        if (d > -2.2) return BIOME.BEACH;

        const t = this.temperature(x, z, h);
        const m = this.moisture(x, z);

        if (h > 78) return h > 96 ? BIOME.PEAK : BIOME.ALPINE;
        if (t < 0.20) return m > 0.42 ? BIOME.BOREAL : BIOME.TUNDRA;
        if (m > 0.70) return t > 0.62 ? BIOME.RAINFOREST : BIOME.FOREST;
        if (m > 0.46) return t > 0.70 ? BIOME.FOREST : BIOME.MEADOW;
        if (m > 0.30) return t > 0.70 ? BIOME.SAVANNA : BIOME.GRASSLAND;
        if (m > 0.17) return t > 0.55 ? BIOME.SCRUB : BIOME.TUNDRA;
        return t > 0.55 ? BIOME.DESERT : BIOME.SCRUB;
    }

    /** Wetland (reed marsh) rings standing water on land. */
    isWetland(x, z) {
        const d = this.waterDepth(x, z);
        if (d > 0 || d < -3.5) return false;
        return !this.isRiver(x, z) && this.moisture(x, z) > 0.5;
    }

    /** Ecological palette for a biome (falls back to grassland for unknowns). */
    static biomeInfo(biome) {
        return BIOME_TABLE[biome] || BIOME_TABLE[BIOME.GRASSLAND];
    }

    biomeInfo(biome) { return Planet.biomeInfo(biome); }

    /**
     * Height the player, cars and pedestrians should stand on. Cities and
     * inter-city roads are engineered flat (grade 0) with a soft apron so
     * traffic never fights terrain; wilderness keeps its relief.
     */
    groundHeight(x, z) {
        const raw = this.rawGroundHeight(x, z);
        const city = this.cityAtWorld(x, z);
        if (city) {
            // Built-up core is graded flat; the apron outside the city blends
            // back to the natural relief over ~40 m.
            const d = Math.max(Math.abs(x - city.x), Math.abs(z - city.z));
            return mix(0, raw, smoothstep(city.r - 18, city.r + 26, d));
        }
        const road = this.routeNear(x, z);
        if (road && road.dist < 70) {
            // Engineered embankment: flat carriageway, sloping verge.
            return mix(0, raw, smoothstep(22, 62, road.dist));
        }
        return raw;
    }

    /** Terrain height used for rendering wild ground (metres, sea level = 0). */
    rawGroundHeight(x, z) {
        const h = this.surfaceHeight(x, z);
        // Gently compress deep ocean so the floor never falls out of the world.
        return h < -22 ? -22 + (h + 22) * 0.25 : h;
    }

    /* ---------------- cities ---------------- */

    _cellKey(cx, cz) { return `${cx},${cz}`; }

    _chunkKey(cx, cz) { return `${cx},${cz}`; }

    /**
     * Deterministically build (or fetch) the city that a lattice cell wants.
     * Cities live on chunk centres so the road grid stays chunk-aligned.
     */
    cityInCell(cellX, cellZ) {
        const key = this._cellKey(cellX, cellZ);
        if (this._cityCache.has(key)) return this._cityCache.get(key);

        const s = this.seed;
        let city = null;
        const isSpawn = this.spawnCity && cellX === 0 && cellZ === 0;
        const roll = hash2(cellX, cellZ, s + 911);

        if (isSpawn || roll < this.cityChance) {
            const jx = isSpawn ? 0 : Math.round((hash2(cellX, cellZ, s + 1301) * 2 - 1) * this.cityJitter);
            const jz = isSpawn ? 0 : Math.round((hash2(cellX, cellZ, s + 1733) * 2 - 1) * this.cityJitter);
            // The spawn cell is (0,0)±jitter — force it exactly on the origin so
            // the historic origin chunk (and its crane) stays the city core.
            const cx = cellX * this.cityCell + jx;
            const cz = cellZ * this.cityCell + jz;
            city = this._foundCity(cx, cz, cellX, cellZ, isSpawn);
        }

        this._cityCache.set(key, city);
        return city;
    }

    /**
     * Site a city at chunk (cx,cz). If that spot is drowned, walk outward to
     * the first dry chunk; if nothing dry is close by, the cell is wilderness.
     */
    _foundCity(cx, cz, cellX, cellZ, isSpawn) {
        const s = this.seed;
        let site = null;
        if (!isSpawn) {
            const wx0 = cx * this.chunkSize, wz0 = cz * this.chunkSize;
            if (!this.isWater(wx0, wz0)) site = { cx, cz };
            else {
                // spiral search for dry ground near the candidate
                outer: for (let r = 1; r <= 6; r++) {
                    for (let a = 0; a < 8; a++) {
                        const ang = a * Math.PI / 4;
                        const nx = Math.round(cx + Math.cos(ang) * r);
                        const nz = Math.round(cz + Math.sin(ang) * r);
                        if (!this.isWater(nx * this.chunkSize, nz * this.chunkSize)) {
                            site = { cx: nx, cz: nz };
                            break outer;
                        }
                    }
                }
            }
            // Cities need room: a site that is entirely ringed by deep water is
            // an island, and we do not build island cities yet.
            if (site && this._islandsCheck(site.cx, site.cz)) site = null;
        } else {
            site = { cx, cz };
        }
        if (!site) return null;

        const wx = site.cx * this.chunkSize;
        const wz = site.cz * this.chunkSize;

        // Coastline proximity decides whether this is a harbour town: the water
        // has to be genuinely close, otherwise every city on a wet planet is a
        // port and the set dressing stops meaning anything.
        const coastal = this._nearWater(wx, wz, this.chunkSize * 2);
        const t = this.temperature(wx, wz);
        const m = this.moisture(wx, wz);
        const biome = this.biomeAt(wx, wz);

        const kind = this._cityKind(biome, t, m, coastal, hash2(site.cx, site.cz, s + 2111), isSpawn);
        const prof = CITY_KINDS[kind];
        const rChunks = isSpawn
            ? 6                                   // the historic dense core at the origin
            : Math.round(mix(this.cityRadius[0], this.cityRadius[1], hash2(site.cx, site.cz, s + 2311)));
        const r = rChunks * this.chunkSize;

        const city = {
            id: `${site.cx},${site.cz}`,
            cell: [cellX, cellZ],
            cx: site.cx,
            cz: site.cz,
            x: wx,
            z: wz,
            radiusChunks: rChunks,
            r,
            kind,
            label: prof.label,
            name: this._cityName(site.cx, site.cz, kind),
            biome,
            coastal,
            temperature: t,
            moisture: m,
            population: 0,
            density: prof.density,
            height: prof.height,
            styleMix: prof.styleMix,
            trees: prof.trees,
            palette: prof.palette,
            neon: prof.neon,
            landmark: prof.landmark,
            wide: !!prof.wide,
            docks: !!prof.docks,
            farms: !!prof.farms,
            snowcaps: !!prof.snowcaps,
            isSpawn: !!isSpawn,
        };
        // Population reads as a real settlement statistic on the HUD/minimap.
        city.population = Math.round((rChunks * rChunks) * 420 * prof.density * (0.6 + hash2(site.cx, site.cz, s + 2411) * 0.9));
        return city;
    }

    /** True when every direction at the rim is deep water (an island). */
    _islandsCheck(cx, cz) {
        let wet = 0;
        for (let a = 0; a < 8; a++) {
            const ang = a * Math.PI / 4;
            const nx = Math.round(cx + Math.cos(ang) * 7);
            const nz = Math.round(cz + Math.sin(ang) * 7);
            if (this.waterDepth(nx * this.chunkSize, nz * this.chunkSize) > 8) wet++;
        }
        return wet >= 7;
    }

    /** Any water within `dist` of a point? (coarse ring sample) */
    _nearWater(x, z, dist) {
        for (let a = 0; a < 12; a++) {
            const ang = a * Math.PI / 6;
            for (const f of [0.55, 0.8, 1.0]) {
                if (this.isWater(x + Math.cos(ang) * dist * f, z + Math.sin(ang) * dist * f)) return true;
            }
        }
        return false;
    }

    /**
     * Pick the city personality from its climate, then let the seed add a
     * little unpredictability so no two regions feel authored by hand.
     */
    _cityKind(biome, t, m, coastal, roll, isSpawn) {
        if (isSpawn) return 'metropolis';
        if (coastal && roll > 0.42) return 'harbour';
        if (biome === BIOME.DESERT || (t > 0.74 && m < 0.24)) return 'outpost';
        if (t < 0.22 && roll > 0.25) return 'winter';
        if (m > 0.62 && t > 0.5) return roll > 0.6 ? 'metropolis' : 'downtown';
        if (m < 0.34) return roll > 0.5 ? 'agro' : 'outpost';
        const band = roll * KIND_KEYS.length;
        const order = ['downtown', 'oldtown', 'suburbia', 'industrial', 'neon', 'metropolis', 'agro', 'downtown', 'oldtown', 'suburbia'];
        return order[Math.floor(band) % order.length];
    }

    /** Procedural settlement name, deterministic per site. */
    _cityName(cx, cz, kind) {
        const s = this.seed;
        const p = NAME_PREFIX[Math.floor(hash2(cx, cz, s + 3011) * NAME_PREFIX.length) % NAME_PREFIX.length];
        const mid = hash2(cx, cz, s + 3103) > 0.55
            ? NAME_MID[Math.floor(hash2(cx, cz, s + 3203) * NAME_MID.length) % NAME_MID.length] : '';
        const tail = NAME_TAIL[Math.floor(hash2(cx, cz, s + 3301) * NAME_TAIL.length) % NAME_TAIL.length];
        let name = p + mid + tail;
        if (hash2(cx, cz, s + 3401) > 0.78) {
            name += ' ' + NAME_SUFFIX[Math.floor(hash2(cx, cz, s + 3503) * NAME_SUFFIX.length) % NAME_SUFFIX.length];
        }
        if (kind === 'neon') name += ' ' + (Math.floor(hash2(cx, cz, s + 3601) * 900) + 100);
        return name;
    }

    /** Region name for the wilds between cities (minimap/HUD flavour). */
    regionAt(x, z) {
        const gx = Math.floor(x / (this.chunkSize * 8)), gz = Math.floor(z / (this.chunkSize * 8));
        const s = this.seed;
        const a = NAME_PREFIX[Math.floor(hash2(gx, gz, s + 4001) * NAME_PREFIX.length) % NAME_PREFIX.length];
        const b = ['reach', 'wilds', 'expanse', 'basin', 'flats', 'hollow', 'backlands', 'reach'][
            Math.floor(hash2(gx, gz, s + 4101) * 8) % 8];
        return a + b.charAt(0).toUpperCase() + b.slice(1);
    }

    /** Nearest city centre to a world position (checks the 3×3 cell neighbourhood). */
    nearestCity(x, z) {
        const ccx = Math.floor(x / this.chunkSize / this.cityCell);
        const ccz = Math.floor(z / this.chunkSize / this.cityCell);
        let best = null, bestD = Infinity;
        for (let ix = -1; ix <= 1; ix++) {
            for (let iz = -1; iz <= 1; iz++) {
                const c = this.cityInCell(ccx + ix, ccz + iz);
                if (!c) continue;
                const d = Math.hypot(x - c.x, z - c.z);
                if (d < bestD) { bestD = d; best = c; }
            }
        }
        return best ? { city: best, dist: bestD } : null;
    }

    /** The city whose built-up area contains (x,z), else null. */
    cityAtWorld(x, z) {
        const hit = this.nearestCity(x, z);
        if (!hit) return null;
        // Chebyshev footprint: cities are square, matching the chunk grid.
        return Math.max(Math.abs(x - hit.city.x), Math.abs(z - hit.city.z)) <= hit.city.r ? hit.city : null;
    }

    cityAtChunk(cx, cz) {
        return this.cityAtWorld(cx * this.chunkSize, cz * this.chunkSize);
    }

    /** All cities whose footprint touches the chunk square [cx0..cx1, cz0..cz1]. */
    citiesInChunkRange(cx0, cz0, cx1, cz1) {
        const out = [];
        const seen = new Set();
        const c0 = Math.floor(Math.min(cx0, cx1) / this.cityCell) - 1;
        const c1 = Math.floor(Math.max(cx0, cx1) / this.cityCell) + 1;
        for (let ix = c0; ix <= c1; ix++) {
            for (let iz = c0; iz <= c1; iz++) {
                const c = this.cityInCell(ix, iz);
                if (!c || seen.has(c.id)) continue;
                seen.add(c.id);
                if (c.cx + c.radiusChunks >= Math.min(cx0, cx1) && c.cx - c.radiusChunks <= Math.max(cx0, cx1) &&
                    c.cz + c.radiusChunks >= Math.min(cz0, cz1) && c.cz - c.radiusChunks <= Math.max(cz0, cz1)) {
                    out.push(c);
                }
            }
        }
        return out;
    }

    /* ---------------- roads between cities ---------------- */

    /**
     * Road partners for a city: the 3 closest neighbours, mutual so both ends
     * always build the same leg. Cached per city id.
     */
    partners(city) {
        if (this._pairCache.has(city.id)) return this._pairCache.get(city.id);
        const near = [];
        for (let ix = -1; ix <= 1; ix++) {
            for (let iz = -1; iz <= 1; iz++) {
                const c = this.cityInCell(city.cell[0] + ix, city.cell[1] + iz);
                if (c && c.id !== city.id) near.push(c);
            }
        }
        near.sort((a, b) => (Math.hypot(a.x - city.x, a.z - city.z) - Math.hypot(b.x - city.x, b.z - city.z)) ||
                            (a.id < b.id ? -1 : 1));
        // Skip near-adjacent cities: a 1-chunk "highway" reads as a rendering
        // bug, and those cities already share streets.
        const MIN_LEG = 5 * this.chunkSize;
        const partners = near.filter(c => Math.hypot(c.x - city.x, c.z - city.z) >= MIN_LEG).slice(0, 3);
        this._pairCache.set(city.id, partners);
        return partners;
    }

    /**
     * L-shaped leg from A to B: run along X at A's row, then along Z at B's
     * column. Chunk-aligned by construction, so the existing axis-aligned
     * highway builders and lane geometry work unchanged.
     */
    legsForCity(city) {
        const legs = [];
        for (const p of this.partners(city)) {
            // A leg shorter than three chunks is a stub, not a highway — skip it.
            if (Math.abs(p.cx - city.cx) >= 3) legs.push({ axis: 'x', fixed: city.cz, from: city.cx, to: p.cx, partner: p.id });
            if (Math.abs(p.cz - city.cz) >= 3) legs.push({ axis: 'z', fixed: p.cx, from: city.cz, to: p.cz, partner: p.id });
        }
        return legs;
    }

    /**
     * Is (x,z) on an inter-city road? Returns the closest leg per axis (a
     * crossroads chunk has both), so a nearby perpendicular leg can never hide
     * the one we actually need — or null when the place is off the network.
     */
    routeNear(x, z) {
        const cs = this.chunkSize;
        const ccx = Math.floor(x / cs / this.cityCell);
        const ccz = Math.floor(z / cs / this.cityCell);
        let bestX = null, bestZ = null;
        for (let ix = -1; ix <= 1; ix++) {
            for (let iz = -1; iz <= 1; iz++) {
                const c = this.cityInCell(ccx + ix, ccz + iz);
                if (!c) continue;
                for (const leg of this.legsForCity(c)) {
                    const alongMin = Math.min(leg.from, leg.to) * cs - cs * 0.5;
                    const alongMax = Math.max(leg.from, leg.to) * cs + cs * 0.5;
                    const fixedWorld = leg.fixed * cs;
                    if (leg.axis === 'x') {
                        if (x < alongMin || x > alongMax) continue;
                        const dist = Math.abs(z - fixedWorld);
                        if (!bestX || dist < bestX.dist) bestX = { dist, leg, axis: 'x', city: c };
                    } else {
                        if (z < alongMin || z > alongMax) continue;
                        const dist = Math.abs(x - fixedWorld);
                        if (!bestZ || dist < bestZ.dist) bestZ = { dist, leg, axis: 'z', city: c };
                    }
                }
            }
        }
        if (!bestX && !bestZ) return null;
        if (!bestX) return bestZ;
        if (!bestZ) return bestX;
        return bestX.dist <= bestZ.dist ? bestX : bestZ;
    }

    /** Closest leg for a single axis (used by the chunk classifier). */
    routeNearAxis(x, z, axis) {
        const cs = this.chunkSize;
        const ccx = Math.floor(x / cs / this.cityCell);
        const ccz = Math.floor(z / cs / this.cityCell);
        let best = null;
        for (let ix = -1; ix <= 1; ix++) {
            for (let iz = -1; iz <= 1; iz++) {
                const c = this.cityInCell(ccx + ix, ccz + iz);
                if (!c) continue;
                for (const leg of this.legsForCity(c)) {
                    if (leg.axis !== axis) continue;
                    const alongMin = Math.min(leg.from, leg.to) * cs - cs * 0.5;
                    const alongMax = Math.max(leg.from, leg.to) * cs + cs * 0.5;
                    const fixedWorld = leg.fixed * cs;
                    if (axis === 'x') {
                        if (x < alongMin || x > alongMax) continue;
                        const dist = Math.abs(z - fixedWorld);
                        if (!best || dist < best.dist) best = { dist, leg, axis: 'x', city: c };
                    } else {
                        if (z < alongMin || z > alongMax) continue;
                        const dist = Math.abs(x - fixedWorld);
                        if (!best || dist < best.dist) best = { dist, leg, axis: 'z', city: c };
                    }
                }
            }
        }
        return best;
    }

    /** Does chunk (cx,cz) carry an inter-city road through its centre line? */
    roadInChunk(cx, cz, roadWidth = 26) {
        const half = roadWidth / 2 + 4;
        const wx = cx * this.chunkSize, wz = cz * this.chunkSize;
        const px = [this.routeNearAxis(wx - this.chunkSize * 0.4, wz, 'x'), this.routeNearAxis(wx + this.chunkSize * 0.4, wz, 'x')];
        const pz = [this.routeNearAxis(wx, wz - this.chunkSize * 0.4, 'z'), this.routeNearAxis(wx, wz + this.chunkSize * 0.4, 'z')];
        let axis = null;
        for (const p of px) if (p && p.dist <= half) axis = 'x';
        for (const p of pz) if (p && p.dist <= half) axis = axis ? 'cross' : 'z';
        return axis;
    }

    /* ---------------- chunk classification ---------------- */

    /**
     * The one call the streaming layer makes per chunk. Deterministic and
     * cached: chunkSize units in, an exhaustive description of the place out.
     */
    classifyChunk(cx, cz, { roadWidth = 26 } = {}) {
        const key = this._chunkKey(cx, cz);
        const cached = this._chunkCache.get(key);
        if (cached) return cached;

        const cs = this.chunkSize;
        const wx = cx * cs, wz = cz * cs;
        const city = this.cityAtChunk(cx, cz);
        let type, biome;

        if (city) {
            type = 'city';
            biome = BIOME.CITY;
        } else {
            const road = this.roadInChunk(cx, cz, roadWidth);
            if (road) {
                type = 'road';
                biome = BIOME.CITY;
            } else {
                type = 'nature';
                biome = this.dominantBiomeInChunk(cx, cz);
            }
        }

        const info = Planet.biomeInfo(biome);
        const out = {
            cx, cz, id: key, type, biome,
            water: info.water === true,
            trees: info.trees,
            flora: info.flora,
            ground: info.ground,
            city,
            height: this.rawGroundHeight(wx, wz),
            waterDepth: this.waterDepth(wx, wz),
            region: this.regionAt(wx, wz),
        };

        if (type === 'road') {
            const probes = [this.routeNear(wx - cs * 0.45, wz), this.routeNear(wx + cs * 0.45, wz),
                            this.routeNear(wx, wz - cs * 0.45), this.routeNear(wx, wz + cs * 0.45)];
            let axis = null;
            for (const p of probes) {
                if (!p || p.dist > cs * 0.55) continue;
                if (p.axis === 'x') axis = axis === 'z' ? 'cross' : 'x';
                else if (p.axis === 'z') axis = axis === 'x' ? 'cross' : 'z';
            }
            out.roadAxis = axis || 'x';
        }

        this._chunkCache.set(key, out);
        return out;
    }

    /**
     * Representative biome of a chunk: sample the centre plus a coarse ring and
     * take the most common non-city class. Sampling several points stops one
     * stray noise value from flipping a whole chunk's ecology.
     */
    dominantBiomeInChunk(cx, cz) {
        const cs = this.chunkSize;
        const wx = cx * cs, wz = cz * cs;
        const tally = new Map();
        const add = (x, z, w) => {
            const b = this.biomeAt(x, z);
            tally.set(b, (tally.get(b) || 0) + w);
        };
        add(wx, wz, 3);
        for (const [ox, oz] of [[-0.33, -0.33], [0.33, -0.33], [0.33, 0.33], [-0.33, 0.33], [0, -0.4], [0, 0.4], [-0.4, 0], [0.4, 0]]) {
            add(wx + ox * cs, wz + oz * cs, 1);
        }
        let best = BIOME.GRASSLAND, bestN = -1;
        for (const [b, n] of tally) {
            if (n > bestN || (n === bestN && b < best)) { best = b; bestN = n; }
        }
        return best;
    }

    /* ---------------- statistics (verification surface) ---------------- */

    /**
     * Biome histogram over a chunk square — the machine-readable description of
     * what the planet looks like, asserted by check_world.mjs.
     */
    stats(cx0, cz0, cx1, cz1) {
        const hist = {};
        let water = 0, cells = 0, cities = new Set();
        for (let cx = cx0; cx <= cx1; cx++) {
            for (let cz = cz0; cz <= cz1; cz++) {
                const b = this.dominantBiomeInChunk(cx, cz);
                hist[b] = (hist[b] || 0) + 1;
                if (Planet.biomeInfo(b).water) water++;
                const c = this.cityAtChunk(cx, cz);
                if (c) cities.add(c.id);
                cells++;
            }
        }
        return {
            cells,
            biomes: hist,
            waterFraction: cells ? +(water / cells).toFixed(3) : 0,
            distinctBiomes: Object.keys(hist).length,
            cities: cities.size,
        };
    }

    /** Clear memoization (test helper / after a seed change). */
    reset() {
        this._cityCache.clear();
        this._chunkCache.clear();
        this._pairCache.clear();
    }
}

let _planet = null;

/** The shared planet instance used by the renderer and the sim. */
export function planet(opts = {}) {
    if (!_planet) _planet = new Planet(opts);
    return _planet;
}

/** Replace the shared planet (seed change / tests). */
export function setPlanet(p) {
    _planet = p;
    return _planet;
}

export default Planet;
