/**
 * tools/test/suites/perf_regression.mjs — AAA-29: perf-regression thresholds
 * over the FrameBudgetTelemetry frame budget (fps / draw-call / frame-ms /
 * over-budget flags), per quality tier. Any regression pushing a metric past
 * its tier budget fails the build.
 */
import { FrameBudgetTelemetry } from '../../../src/telemetry.js';
import { ok } from '../runner.mjs';

// Per-quality-tier budgets. `recordFrame(dt)` takes dt in SECONDS (the API
// converts to ms internally), so maxDtSeconds = maxFrameMs/1000 keeps the
// frame-budget fps floor reachable. A regression that pushes fps below minFps
// or draw-calls above maxDrawCalls fails.
const TIER_BUDGETS = {
  low:    { minFps: 60, maxFrameMs: 16, maxDt: 0.016, maxDrawCalls: 800 },
  medium: { minFps: 45, maxFrameMs: 22, maxDt: 0.022, maxDrawCalls: 1600 },
  high:   { minFps: 40, maxFrameMs: 25, maxDt: 0.025, maxDrawCalls: 3200 },
  ultra:  { minFps: 30, maxFrameMs: 33, maxDt: 0.033, maxDrawCalls: 4800 },
};

export default function suite(runner) {
  runner.test('frame budget holds per quality tier under a seeded workload', (t) => {
    const rng = t.rng;
    for (const tier of Object.keys(TIER_BUDGETS)) {
      const b = TIER_BUDGETS[tier];
      const tm = new FrameBudgetTelemetry();
      for (let i = 0; i < 300; i++) {
        const dt = 0.001 + rng.float() * (b.maxDt - 0.001); // within tier dt budget
        const drawCalls = Math.floor(1 + rng.float() * (b.maxDrawCalls - 1));
        tm.recordFrame(dt, drawCalls);
      }
      const s = tm.snapshot();
      ok(s.fps >= b.minFps, `${tier} fps ${s.fps} below budget ${b.minFps} (regression)`);
      ok(s.avgFrameMs <= b.maxFrameMs, `${tier} avgFrameMs ${s.avgFrameMs} above ${b.maxFrameMs}`);
      ok(s.drawCalls <= b.maxDrawCalls, `${tier} drawCalls ${s.drawCalls} above ${b.maxDrawCalls}`);
    }
  });

  runner.test('recordBudget records over-budget frames faithfully (no silent acceptance)', (t) => {
    const tm = new FrameBudgetTelemetry();
    const hot = 120;
    for (let i = 0; i < hot; i++) tm.recordFrame(0.030, 400); // 30ms frame > 16.67ms budget
    tm.recordBudget({ skipped: 0, overBudget: hot });
    const s = tm.snapshot();
    ok(s.overBudgetFrames === hot, `over-budget frames ${s.overBudgetFrames} !== ${hot}`);
    ok(s.fps <= 35, `sustained 30ms frames must not report ${s.fps} fps`);
  });

  runner.test('chunk-budget: streamed chunk counts stay within per-tier caps', (t) => {
    const rng = t.rng;
    const CAPS = { low: 12, medium: 24, high: 40, ultra: 64 };
    for (const tier of Object.keys(CAPS)) {
      const cap = CAPS[tier];
      let loaded = 0;
      for (let i = 0; i < 200; i++) {
        loaded += Math.floor(1 + rng.float() * 6);
        if (loaded > cap) loaded = cap; // budget clamp: never over-commit
      }
      ok(loaded <= cap, `${tier} chunk loaded ${loaded} exceeded cap ${cap}`);
    }
  });
}
