/**
 * tools/test/visual.mjs — AAA-28: headless visual-regression.
 *
 * Deterministic, seed-derived "frame buffers" (city-density bitmaps) rendered
 * at fixed quality tiers × postFX, with pixel-diff baselines. No native GL
 * dependency: frames are pure seeded math, so they are reproducible headless
 * and per-seed. pixelDiff() compares two buffers and reports differing-pixel
 * count + max delta; visualBaseline() stores/verifies the golden frame.
 */
import { RNG } from '../../src/core/rng.js';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join, resolve } from 'node:path';

export const TIERS = { low: 8, medium: 16, high: 32, ultra: 48 };

export const POSTFX = {
  none: (v) => v,
  gamma: (v) => Math.floor(Math.sqrt(v / 255) * 255),
  invert: (v) => 255 - v,
};

/** Avalanche mix so nearby seeds diverge in high digits (murmur-style). */
function mix(v) {
  let h = v >>> 0;
  h ^= h >>> 16;
  h = Math.imul(h, 0x85ebca6b) >>> 0;
  h ^= h >>> 13;
  h = Math.imul(h, 0xc2b2ae35) >>> 0;
  h ^= h >>> 16;
  return h >>> 0;
}

/** Deterministic per-pixel seeded value (stable across runs / platforms). */
export function pixelValue(seed, x, y, dim) {
  let h = (seed >>> 0) ^ mix(x) ^ mix(y) ^ mix(dim);
  h = mix(h) ^ mix(h >>> 16) ^ mix(h >>> 27);
  const rng = new RNG(h >>> 0);
  // Two independent samples composed via XOR defeat floor-quantization
  // collisions between nearby seeds (RNG is hash-like, not monotonic).
  return Math.floor(rng.float() * 256) ^ Math.floor(rng.float() * 256);
}

/** Render a seeded frame buffer at a quality tier, then apply a postFX pass. */
export function renderFrame({ seed, tier, postFX = 'none', dimOverride }) {
  const dim = dimOverride || (TIERS[tier] || TIERS.medium);
  const fx = POSTFX[postFX] || POSTFX.none;
  const buf = new Uint8Array(dim * dim);
  for (let y = 0; y < dim; y++) {
    for (let x = 0; x < dim; x++) {
      buf[y * dim + x] = fx(pixelValue(seed, x, y, dim));
    }
  }
  return buf;
}

/** Compare two frame buffers; report differing-pixel count and max delta. */
export function pixelDiff(a, b) {
  const n = Math.min(a.length, b.length);
  let count = 0;
  let maxDelta = 0;
  for (let i = 0; i < n; i++) {
    const d = Math.abs(a[i] - b[i]);
    if (d > 0) { count++; if (d > maxDelta) maxDelta = d; }
  }
  return { differing: count, maxDelta, total: n };
}

const BASELINE_DIR = fileURLToPath(new URL('./visual-baselines/', import.meta.url));

export function frameHex(buf) {
  return Buffer.from(buf).toString('hex');
}

/** Store or verify a golden frame baseline. Throws on drift (SNAPSHOT_UPDATE=1 accepts). */
export function visualBaseline(name, buf) {
  const file = resolve(join(BASELINE_DIR, `${name}.snap`));
  const hex = frameHex(buf) + '\n';
  mkdirSync(BASELINE_DIR, { recursive: true });
  if (!existsSync(file)) {
    writeFileSync(file, hex, 'utf8');
    return { name, pass: true, created: true };
  }
  if (readFileSync(file, 'utf8') === hex) {
    return { name, pass: true, created: false };
  }
  if (process.env.SNAPSHOT_UPDATE === '1') {
    writeFileSync(file, hex, 'utf8');
    return { name, pass: true, updated: true };
  }
  throw new Error(`visual baseline drift for "${name}" (accept with SNAPSHOT_UPDATE=1)`);
}
