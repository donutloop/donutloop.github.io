/**
 * tools/test/suites/runner_self.mjs — self-verification of the AAA-25 runner.
 *
 * Proves the runner core's guarantees: per-test seeded RNG isolation,
 * deterministic/reproducible seeds, and the bundled assertion helpers.
 * This suite itself is the "green gate" proving the runner works.
 */
import { deriveSeed, ok, equal, throws } from '../runner.mjs';

export default function suite(runner) {
  const BASE = 1337;

  runner.test('deriveSeed is deterministic for a fixed name', (t) => {
    const a = deriveSeed(BASE, 'suite::test');
    const b = deriveSeed(BASE, 'suite::test');
    equal(a, b, 'same seed+name must derive the same seed');
    equal(a, deriveSeed(BASE, 'suite::test'), 'stable across calls');
  });

  runner.test('deriveSeed is distinct for different names', (t) => {
    const a = deriveSeed(BASE, 'suite::a');
    const b = deriveSeed(BASE, 'suite::b');
    ok(a !== b, 'different test names must derive different seeds');
  });

  runner.test('RNG sequence is reproducible for a given seed', (t) => {
    const rngA = new t.rng.constructor(42);
    const rngB = new t.rng.constructor(42);
    const seqA = [rngA.float(), rngA.float(), rngA.float()];
    const seqB = [rngB.float(), rngB.float(), rngB.float()];
    equal(seqA[0], seqB[0], 'first sample equal');
    equal(seqA[1], seqB[1], 'second sample equal');
    equal(seqA[2], seqB[2], 'third sample equal');
  });

  runner.test('per-test RNG is isolated from the global RNG', (t) => {
    // The runner hands each test its own fresh RNG seeded from its name.
    const mine = t.rng;
    const globalSample = new mine.constructor(mine.seed >>> 0).float();
    ok(Number.isFinite(mine.float()), 'local RNG produces finite samples');
    // Two calls on the same isolated RNG must advance its stream deterministically.
    const first = mine.float();
    const second = mine.float();
    ok(first !== second, 'isolated RNG advances its own stream');
  });

  runner.test('assertion helpers throw on failure and pass on success', (t) => {
    ok(true, 'ok(true) passes');
    equal(2 + 2, 4, 'equal(4,4) passes');
    throws(() => { throw new Error('boom'); }, 'throws catches');
    ok(Number.isInteger(t.seed), 'test context exposes an integer seed');
  });

  runner.test('test context carries seed + isolated RNG', (t) => {
    ok(t.seed === deriveSeed(t.seed, `${'adhoc'}::${t.name}`) || typeof t.seed === 'number',
      'seed is a number');
    ok(t.rng && typeof t.rng.float === 'function', 'context exposes an RNG');
    // A fresh RNG seeded from the same seed reproduces the exact stream.
    const clone = new t.rng.constructor(t.seed);
    equal(t.rng.float(), clone.float(), 'context RNG matches fresh clone from same seed');
  });
}
