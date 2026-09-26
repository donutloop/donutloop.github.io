/**
 * tools/test/suites/visual_regression.mjs — AAA-28: headless pixel-diff
 * visual-regression across the quality-tier × postFX matrix, seeded
 * deterministic per seed, with golden baselines.
 */
import { renderFrame, pixelDiff, visualBaseline, TIERS, POSTFX } from '../visual.mjs';
import { ok, equal } from '../runner.mjs';

const TIER_NAMES = Object.keys(TIERS);
const FX_NAMES = Object.keys(POSTFX);

export default function suite(runner) {
  runner.test('frames are deterministic per seed (pixel-diff == 0 across re-renders)', (t) => {
    for (const tier of TIER_NAMES) {
      for (const fx of FX_NAMES) {
        const a = renderFrame({ seed: t.seed, tier, postFX: fx });
        const b = renderFrame({ seed: t.seed, tier, postFX: fx });
        const diff = pixelDiff(a, b);
        equal(diff.differing, 0, `${tier}/${fx} re-render drifted ${diff.differing} px`);
      }
    }
  });

  runner.test('different seeds produce different frames (pixel-diff > 0)', (t) => {
    const a = renderFrame({ seed: t.seed, tier: 'high', postFX: 'none' });
    const b = renderFrame({ seed: t.seed + 1, tier: 'high', postFX: 'none' });
    ok(pixelDiff(a, b).differing > 0, 'distinct seeds must diverge the frame');
  });

  runner.test('tier × postFX matrix yields distinct baselines', (t) => {
    // Every (tier, postFX) cell must have a unique golden frame.
    const seen = new Set();
    for (const tier of TIER_NAMES) {
      for (const fx of FX_NAMES) {
        const frame = renderFrame({ seed: t.seed, tier, postFX: fx });
        const hex = Buffer.from(frame).toString('hex');
        ok(!seen.has(hex), `duplicate frame for ${tier}/${fx}`);
        seen.add(hex);
      }
    }
    ok(seen.size === TIER_NAMES.length * FX_NAMES.length, 'matrix must be full-rank');
  });

  runner.test('cross-tier pixel-diff: low tier differs from ultra tier', (t) => {
    const low = renderFrame({ seed: t.seed, tier: 'low', postFX: 'none' });
    const ultra = renderFrame({ seed: t.seed, tier: 'ultra', postFX: 'none' });
    ok(pixelDiff(low, ultra).differing > 0, 'low and ultra tiers must differ');
  });

  runner.test('golden baselines hold for every tier × postFX cell (seeded)', (t) => {
    for (const tier of TIER_NAMES) {
      for (const fx of FX_NAMES) {
        const frame = renderFrame({ seed: t.seed, tier, postFX: fx });
        visualBaseline(`v${t.seed}-${tier}-${fx}`, frame);
      }
    }
  });
}
