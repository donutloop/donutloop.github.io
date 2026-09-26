/**
 * core/rng.js — seeded deterministic PRNG (xorshift32), replacing Math.random()
 * for reproducible worlds (AAA-03 / ADR 0022).
 *
 * A single global RNG is shared across systems (noise permutation, etc.) so a
 * seed set once in main.js yields the same world every run. The seed is exposed
 * as DEFAULT_SEED so a later settings/AAA-07 pass can persist it (save/replay).
 */
export const DEFAULT_SEED = 1337;

export class RNG {
  constructor(seed = DEFAULT_SEED) {
    // Keep a non-zero state even when the caller passes 0.
    this.seed = (seed >>> 0) || 0x9e3779b9 >>> 0;
    this.state = this.seed;
  }
  // xorshift32 — fast, deterministic, uniform-ish for permutation tables.
  next() {
    let x = this.state;
    x ^= x << 13;
    x ^= x >>> 17;
    x ^= x << 5;
    x >>>= 0;
    this.state = x;
    return x;
  }
  /** [0,1) float */
  float() { return this.next() / 4294967296; }
  /** integer in [0, n) */
  int(n) { return Math.floor(this.float() * n); }
  /** float in [min, max) */
  range(min, max) { return min + this.float() * (max - min); }
}

let _seed = DEFAULT_SEED;
let _rng = new RNG(_seed);

/** Reset the global RNG to a given seed — call once before building the world. */
export function setSeed(seed) {
  _seed = seed >>> 0;
  _rng = new RNG(_seed);
}

export function getSeed() { return _seed >>> 0; }

/** The shared global RNG instance. */
export function rng() { return _rng; }

/** Convenience wrappers over the global RNG. */
export function randFloat() { return _rng.float(); }
export function randInt(n) { return _rng.int(n); }
export function randRange(min, max) { return _rng.range(min, max); }
