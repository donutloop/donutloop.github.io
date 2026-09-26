/**
 * tools/test/mutation.mjs — AAA-30: mutation-testing helpers.
 *
 * `loadMutated` reads the real source of a sim module, applies a textual
 * mutation (token replacement), writes a temp `.mut.mjs`, and loads it. The
 * suite then runs the same invariant detectors used elsewhere against the
 * mutated module and asserts they FAIL — proving the harness actually catches
 * regressions and is not a tautology.
 */
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const MUT_DIR = fileURLToPath(new URL('./.mutations/', import.meta.url));

/** Load a sim module with `replacements` applied to its source text. */
export async function loadMutated(sourcePath, replacements, tag) {
  const abs = resolve(sourcePath);
  const src = readFileSync(abs, 'utf8');
  let mutated = src;
  for (const [from, to] of replacements) {
    if (!mutated.includes(from)) {
      throw new Error(`mutation "${from}" not found in ${sourcePath} (harness gap: no token to mutate)`);
    }
    mutated = mutated.replace(from, to);
  }
  mkdirSync(MUT_DIR, { recursive: true });
  const file = resolve(MUT_DIR, `${tag}.mjs`);
  writeFileSync(file, mutated, 'utf8');
  try {
    return await import(file);
  } finally {
    rmSync(file, { force: true });
  }
}
