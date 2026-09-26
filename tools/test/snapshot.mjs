/**
 * tools/test/snapshot.mjs — AAA-27: snapshot / golden-file testing.
 *
 * Deterministic fixtures are stored under tools/test/snapshots/<name>.snap.
 * - First run: writes the baseline and passes (creating the golden).
 * - Later runs: compares the canonical serialization; any drift throws, so the
 *   runner test fails and the build gates on determinism drift.
 * - `SNAPSHOT_UPDATE=1` accepts intended changes by rewriting the golden.
 *
 * Canonical serialization sorts object keys recursively, so fixtures are stable
 * across runs and platforms (no wall-clock / ordering drift).
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join, resolve } from 'node:path';

const SNAP_DIR = fileURLToPath(new URL('./snapshots/', import.meta.url));

/** Stable, order-independent serialization (sorted keys, no whitespace). */
export function stableStringify(v) {
  if (Array.isArray(v)) return `[${v.map(stableStringify).join(',')}]`;
  if (v && typeof v === 'object') {
    const keys = Object.keys(v).sort();
    return `{${keys.map(k => `${JSON.stringify(k)}:${stableStringify(v[k])}`).join(',')}}`;
  }
  return JSON.stringify(v);
}

/** Record or verify a golden fixture. Throws on drift (unless SNAPSHOT_UPDATE=1). */
export function snapshot(name, value) {
  const file = resolve(join(SNAP_DIR, `${name}.snap`));
  const canonical = stableStringify(value) + '\n';
  mkdirSync(SNAP_DIR, { recursive: true });

  if (!existsSync(file)) {
    writeFileSync(file, canonical, 'utf8');
    return { name, pass: true, created: true };
  }

  const stored = readFileSync(file, 'utf8');
  if (stored === canonical) {
    return { name, pass: true, created: false };
  }

  if (process.env.SNAPSHOT_UPDATE === '1') {
    writeFileSync(file, canonical, 'utf8');
    return { name, pass: true, created: false, updated: true };
  }

  throw new Error(
    `snapshot drift for "${name}":\n  stored: ${stored.trim()}\n  got:    ${canonical.trim()}\n  (accept with SNAPSHOT_UPDATE=1)`
  );
}

export { SNAP_DIR };
