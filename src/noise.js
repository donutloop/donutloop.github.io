import { rng } from './core/rng.js';

/**
 * 2D simplex noise with a seeded, lazily-built permutation (AAA-03 / ADR 0022).
 *
 * The permutation table is built from the shared global RNG the first time a
 * sample is requested, so a seed set in core/rng.js (via setSeed) before any
 * noise call yields a reproducible world across runs.
 */
function dot(g, x, y) {
    return g[0] * x + g[1] * y;
}

// Random gradient vectors
const grad3 = [
    [1, 1, 0], [-1, 1, 0], [1, -1, 0], [-1, -1, 0],
    [1, 0, 1], [-1, 0, 1], [1, 0, -1], [-1, 0, -1],
    [0, 1, 1], [0, -1, 1], [0, 1, -1], [0, -1, -1]
];

let perm = null;   // 512-entry permutation table
let gradP = null;  // 512-entry precomputed gradient table

// Build the permutation table from the seeded global RNG (not Math.random()).
function ensurePerm() {
    if (perm) return;
    const p = [];
    for (let i = 0; i < 256; i++) {
        p[i] = rng().int(256);
    }
    perm = new Array(512);
    gradP = new Array(512);
    for (let i = 0; i < 512; i++) {
        perm[i] = p[i & 255];
        gradP[i] = grad3[perm[i] % 12];
    }
}

// 2D Noise
function noise2D(xin, yin) {
    ensurePerm();

    let n0, n1, n2; // Noise contributions from the three corners
    // Skew the input space to determine which simplex cell we're in
    const F2 = 0.5 * (Math.sqrt(3.0) - 1.0);
    const s = (xin + yin) * F2; // Hairy factor for 2D
    const i = Math.floor(xin + s);
    const j = Math.floor(yin + s);
    const G2 = (3.0 - Math.sqrt(3.0)) / 6.0;
    const t = (i + j) * G2;
    const X0 = i - t; // Unskew the cell origin back to (x,y) space
    const Y0 = j - t;
    const x0 = xin - X0; // The x,y distances from the cell origin
    const y0 = yin - Y0;
    // For the 2D case, the simplex shape is an equilateral triangle.
    // Determine which simplex we are in.
    let i1, j1; // Offsets for second (middle) corner of simplex in (i,j) coords
    if (x0 > y0) { i1 = 1; j1 = 0; } // lower triangle, XY order: (0,0)->(1,0)->(1,1)
    else { i1 = 0; j1 = 1; }      // upper triangle, YX order: (0,0)->(0,1)->(1,1)
    // A step of (1,0) in (i,j) means a step of (1-c,-c) in (x,y), and
    // a step of (0,1) in (i,j) means a step of (-c,1-c) in (x,y), where
    // c = (3-sqrt(3))/6
    const x1 = x0 - i1 + G2; // Offsets for middle corner in (x,y) unskewed coords
    const y1 = y0 - j1 + G2;
    const x2 = x0 - 1.0 + 2.0 * G2; // Offsets for last corner in (x,y) unskewed coords
    const y2 = y0 - 1.0 + 2.0 * G2;
    // Work out the hashed gradient indices of the three simplex corners
    const ii = i & 255;
    const jj = j & 255;
    // Calculate the contribution from the three corners
    let t0 = 0.5 - x0 * x0 - y0 * y0;
    if (t0 < 0) n0 = 0.0;
    else {
        const gi0 = perm[ii + perm[jj]] % 12;
        t0 *= t0;
        n0 = t0 * t0 * dot(gradP[gi0], x0, y0);
    }
    let t1 = 0.5 - x1 * x1 - y1 * y1;
    if (t1 < 0) n1 = 0.0;
    else {
        const gi1 = perm[ii + i1 + perm[jj + j1]] % 12;
        t1 *= t1;
        n1 = t1 * t1 * dot(gradP[gi1], x1, y1);
    }
    let t2 = 0.5 - x2 * x2 - y2 * y2;
    if (t2 < 0) n2 = 0.0;
    else {
        const gi2 = perm[ii + 1 + perm[jj + 1]] % 12;
        t2 *= t2;
        n2 = t2 * t2 * dot(gradP[gi2], x2, y2);
    }
    // Add contributions from each corner to get the final noise value.
    // The result is scaled to return values in the interval [-1,1].
    return 70.0 * (n0 + n1 + n2);
}

/** Drop the cached permutation so a fresh setSeed() takes effect (test helper). */
export function resetNoise() {
    perm = null;
    gradP = null;
}

export const SimplexNoise = { noise2D };
