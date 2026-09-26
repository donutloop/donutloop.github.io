#!/usr/bin/env node
/**
 * tools/ci/nightly.mjs — AAA-31: nightly seeded marathon with flake-tracking.
 *
 * Runs the full CI pipeline once per base seed in CI_NIGHTLY_SEEDS
 * (comma-separated; default 101,202,303,404,505). Aggregates per-stage
 * pass/fail across seeds; a stage that flips between seeds is reported as a
 * flake. Exit 0 only if every stage passes on every seed (no flakes).
 */
import { spawnSync } from 'node:child_process';
import { resolve } from 'node:path';

const seeds = (process.env.CI_NIGHTLY_SEEDS || '101,202,303,404,505')
  .split(',').map(s => Number(s.trim()) >>> 0);
const node = process.execPath;

const runs = [];
for (const seed of seeds) {
  const r = spawnSync(node, [resolve('tools/ci/ci_pipeline.mjs')], {
    cwd: resolve('.'), encoding: 'utf8', env: { ...process.env, CI_SEED: String(seed) },
  });
  const m = (r.stdout || '').match(/CI_JSON:(\{.*\})\n?/s);
  const json = m ? JSON.parse(m[1]) : { stages: [], seed };
  runs.push({ seed, stages: json.stages });
}

// Aggregate per-stage across seeds.
const stageNames = ['build', 'unit', 'property', 'snapshot', 'visual', 'perf', 'mutation', 'deploy'];
const report = [];
const flakes = [];
for (const stage of stageNames) {
  const outcomes = runs.map(r => r.stages.find(s => s.stage === stage));
  const passes = outcomes.filter(o => o && o.pass).length;
  const total = outcomes.length;
  const flaky = passes > 0 && passes < total;
  report.push({ stage, passed: passes, total, flaky });
  if (flaky) flakes.push(stage);
}

const json = {
  tool: 'tools/ci/nightly.mjs', epic: 'AAA-31',
  seeds: seeds.map(r => r.seed), runs: runs.length,
  flakes, report,
};
console.log('NIGHTLY_JSON:' + JSON.stringify(json, null, 2));

const anyFail = report.some(r => r.passed < r.total);
if (flakes.length) console.error(`FLAKES: ${flakes.join(', ')} — stage result flips across seeds`);
process.exit(anyFail || flakes.length ? 1 : 0);
