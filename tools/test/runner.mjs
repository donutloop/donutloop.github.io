#!/usr/bin/env node
/**
 * tools/test/runner.mjs — AAA-25: 2026 test-suite runner core.
 *
 * A dependency-free structured runner that supersedes the ad-hoc check
 * harness as the surface for new suites. Guarantees:
 *   - Per-test seeded RNG isolation: every test gets a fresh `RNG` derived
 *     from a base seed + the test name, so tests are reproducible in
 *     isolation and order-independent (no shared global RNG state).
 *   - Serial execution (Node single-threaded); "parallel-safe" here means
 *     no cross-test shared mutable state — each test owns its own seed/RNG.
 *   - TAP (human) and machine-readable JSON (--json) output, exit 0/1.
 *
 * CLI contract for suite files (tools/test/suites/*.mjs):
 *   export default function suite(runner) {
 *     runner.test('name', (t) => { ... });   // t = { name, seed, rng }
 *   }
 *
 * Usage:
 *   node tools/test/runner.mjs                 # discover tools/test/suites/
 *   node tools/test/runner.mjs file.mjs ...    # explicit suite files
 *   node tools/test/runner.mjs --seed 42       # override base seed
 *   node tools/test/runner.mjs --json          # machine-readable JSON
 */
import { RNG, DEFAULT_SEED } from '../../src/core/rng.js';
import { readdirSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const SUITES_DIR = fileURLToPath(new URL('./suites/', import.meta.url));

/** Deterministically derive a per-test seed from the base seed + test name. */
export function deriveSeed(base, name) {
  let h = base >>> 0;
  for (let i = 0; i < name.length; i++) {
    h ^= name.charCodeAt(i);
    h = Math.imul(h, 0x9e3779b1) >>> 0;
    h ^= h >>> 13;
  }
  h ^= h >>> 17;
  return h >>> 0;
}

export class Runner {
  constructor({ seed = DEFAULT_SEED } = {}) {
    this.baseSeed = seed >>> 0;
    this.suites = [];
    this._current = null;
    this.results = [];
  }

  /** Register a named suite; all tests registered inside `fn` belong to it. */
  suite(name, fn) {
    const s = { name, tests: [] };
    this.suites.push(s);
    const prev = this._current;
    this._current = s;
    try { fn(); } finally { this._current = prev; }
    return s;
  }

  /** Register a single test in the current suite (falls back to 'adhoc'). */
  test(name, fn) {
    if (!this._current) {
      this._current = { name: 'adhoc', tests: [] };
      this.suites.push(this._current);
    }
    this._current.tests.push({ name, fn });
  }

  /** Run every registered test serially with per-test isolated RNG/seed. */
  async run() {
    const started = Date.now();
    for (const suite of this.suites) {
      for (const t of suite.tests) {
        const seed = deriveSeed(this.baseSeed, `${suite.name}::${t.name}`);
        const rng = new RNG(seed);
        const ctx = { name: t.name, seed, rng };
        const t0 = Date.now();
        let error = null, pass = true;
        try {
          const ret = t.fn(ctx);
          if (ret && typeof ret.then === 'function') await ret;
        } catch (e) {
          pass = false;
          error = e && e.message ? String(e.message) : String(e);
        }
        this.results.push({
          suite: suite.name, name: t.name, pass,
          seed, ms: Date.now() - t0,
          error: error || ''
        });
      }
    }
    this.durationMs = Date.now() - started;
    return this.results;
  }

  get passed() { return this.results.filter(r => r.pass).length; }
  get failed() { return this.results.filter(r => !r.pass).length; }
}

/** Minimal assertion helpers thrown as errors on failure (no dep needed). */
export function ok(cond, msg = 'expected truthy') {
  if (!cond) throw new Error(msg);
  return cond;
}
export function equal(actual, expected, msg = 'values differ') {
  if (actual !== expected) {
    throw new Error(`${msg}: ${JSON.stringify(actual)} !== ${JSON.stringify(expected)}`);
  }
  return actual;
}
export function throws(fn, msg = 'expected throw') {
  let threw = false;
  try { fn(); } catch { threw = true; }
  if (!threw) throw new Error(msg);
  return threw;
}

/** TAP version 13 output (human-readable). */
export function toTap(results) {
  const lines = ['TAP version 13', `1..${results.length}`];
  let n = 0;
  for (const r of results) {
    n++;
    lines.push(r.pass ? `ok ${n} - ${r.suite} :: ${r.name}` : `not ok ${n} - ${r.suite} :: ${r.name}`);
    if (!r.pass) {
      lines.push('  ---');
      lines.push(`  message: ${r.error}`);
      lines.push(`  seed: ${r.seed}`);
      lines.push('  ...');
    }
  }
  return lines.join('\n');
}

/** Machine-readable JSON report (--json). */
export function toJson(results, meta) {
  return JSON.stringify({
    tool: 'tools/test/runner.mjs',
    epic: 'AAA-25',
    passed: results.filter(r => r.pass).length,
    failed: results.filter(r => !r.pass).length,
    total: results.length,
    durationMs: meta.durationMs,
    seed: meta.seed,
    results
  }, null, 2);
}

async function loadSuite(file, runner) {
  const mod = await import(resolve(file));
  const register = mod.default;
  if (typeof register !== 'function') {
    throw new Error(`suite ${file}: default export must be a function (runner) => void`);
  }
  await register(runner);
  return runner;
}

async function main() {
  const argv = process.argv.slice(2);
  const jsonFlag = argv.includes('--json');
  const seedArg = argv.find(a => a.startsWith('--seed=')) || argv.find(a => a === '--seed');
  let baseSeed = DEFAULT_SEED;
  if (seedArg) {
    const v = seedArg.includes('=') ? seedArg.split('=')[1] : argv[argv.indexOf(seedArg) + 1];
    baseSeed = Number(v) >>> 0;
  }
  const files = argv.filter(a => !a.startsWith('--'));

  const runner = new Runner({ seed: baseSeed });
  let filesToLoad = files;
  if (filesToLoad.length === 0) {
    filesToLoad = readdirSync(SUITES_DIR).filter(f => f.endsWith('.mjs')).map(f => join(SUITES_DIR, f));
  }

  // Machine-readable JSON must not be polluted by sim console.log (e.g. the
  // WeatherSystem constructor logs on construction), so silence stdout during
  // load+run when emitting JSON.
  let silence = null;
  if (jsonFlag) {
    silence = { log: console.log, warn: console.warn, info: console.info };
    console.log = console.warn = console.info = () => {};
  }
  try {
    for (const f of filesToLoad) await loadSuite(f, runner);
    await runner.run();
  } finally {
    if (silence) {
      console.log = silence.log; console.warn = silence.warn; console.info = silence.info;
    }
  }

  const meta = { durationMs: runner.durationMs, seed: runner.baseSeed };
  if (jsonFlag) {
    process.stdout.write(toJson(runner.results, meta) + '\n');
  } else {
    process.stdout.write(toTap(runner.results) + '\n');
  }
  process.stderr.write(`\nrunner: ${runner.passed}/${runner.results.length} passed (${runner.failed} failed) in ${meta.durationMs}ms [seed ${meta.seed}]\n`);
  process.exit(runner.failed === 0 ? 0 : 1);
}

if (process.argv[1] && resolve(process.argv[1]) === resolve(fileURLToPath(import.meta.url))) {
  main();
}
