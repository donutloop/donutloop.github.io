#!/usr/bin/env node
/**
 * tools/ci/ci_pipeline.mjs — AAA-31: end-to-end CI/CD pipeline.
 *
 * Ordered stages (fail-fast):
 *   build -> unit -> property -> snapshot -> visual -> perf -> mutation -> deploy
 *
 * `CI_SEED` (default 1337) seeds the property/perf stages deterministically.
 * Emits one machine-readable JSON line with per-stage pass/fail + ms, plus a
 * human TAP-like summary. Exit 0 only if every stage passes.
 */
import { spawnSync } from 'node:child_process';
import { resolve } from 'node:path';

const SEED = Number(process.env.CI_SEED || 1337) >>> 0;
const node = process.execPath;

const STAGES = [
  ['build',     ['node', 'build/build.mjs']],
  ['unit',      ['node', 'check_world.mjs']],
  ['property',  ['node', 'tools/test/runner.mjs', `--seed=${SEED}`, 'tools/test/suites/property_sim.mjs']],
  ['snapshot',  ['node', 'tools/test/runner.mjs', 'tools/test/suites/snapshot_sim.mjs']],
  ['visual',    ['node', 'tools/test/runner.mjs', 'tools/test/suites/visual_regression.mjs']],
  ['perf',      ['node', 'tools/test/runner.mjs', `--seed=${SEED}`, 'tools/test/suites/perf_regression.mjs']],
  ['mutation',  ['node', 'tools/test/runner.mjs', 'tools/test/suites/mutation_test.mjs']],
];

function runStage(name, args) {
  const t0 = Date.now();
  const r = spawnSync(node, args.slice(1), { cwd: resolve('.'), encoding: 'utf8' });
  const ok = r.status === 0 && !r.signal;
  const detail = (r.stdout || '') + (r.stderr || '');
  const summary = detail.trim().split('\n').filter(l => /ok|not ok|passed|failed|EXIT/.test(l)).slice(-3).join(' | ');
  return { stage: name, pass: ok, exitCode: r.status, ms: Date.now() - t0, detail: summary };
}

const results = [];
let failed = null;
for (const [name, args] of STAGES) {
  const res = runStage(name, args);
  results.push({ stage: res.stage, pass: res.pass, ms: res.ms, detail: res.detail });
  console.log(res.pass ? `ok ${results.length} - ${res.stage} (${res.ms}ms)` : `not ok ${results.length} - ${res.stage}`);
  if (!res.pass) { failed = res; break; }
}

// deploy gate: only "ready" if every prior stage passed.
const allPassed = results.every(r => r.pass);
results.push({ stage: 'deploy', pass: allPassed, ms: 0, detail: allPassed ? 'ready' : 'blocked by failing stage' });

const json = {
  tool: 'tools/ci/ci_pipeline.mjs', epic: 'AAA-31', seed: SEED,
  passed: results.filter(r => r.pass).length,
  failed: results.filter(r => !r.pass).length,
  stages: results,
};
process.stdout.write('\nCI_JSON:' + JSON.stringify(json) + '\n');
process.exit(allPassed ? 0 : 1);
