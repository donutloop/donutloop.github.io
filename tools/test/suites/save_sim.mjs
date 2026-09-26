/**
 * save_sim.mjs — AAA-08 replay-safe save/load (ADR 0022/0023).
 *
 * Verifies core/save.js in isolation: capture, serialize/fromJSON, save/load,
 * deterministic fingerprint (replay-safety), and restore/resume. Runs fully in
 * Node — no browser/WebGL context needed.
 */
import { ok, equal } from '../runner.mjs';
import { SaveGame, snapshotClock, SAVE_VERSION } from '../../../src/core/save.js';
import { createStorage } from '../../../src/core/settings.js';
import { DEFAULT_SEED } from '../../../src/core/rng.js';

export default function suite(runner) {
  runner.test('AAA-08: capture serializes seed + player + clock + progress', () => {
    const sg = new SaveGame({ storage: createStorage(), key: 'save.sim' });
    const snap = sg.capture({
      seed: DEFAULT_SEED,
      player: { currentCar: null, camera: { position: { x: 5, y: 2, z: -7 } }, carVelocity: 0 },
      simClock: { snapshot() { return { fixedDt: 1 / 30, steps: 90 }; } },
      progress: { score: 10, events: 2 }
    });
    equal(snap.version, SAVE_VERSION, 'version');
    equal(snap.seed, DEFAULT_SEED, 'seed');
    equal(snap.player.position.x, 5, 'player pos x');
    equal(snap.progress.simTime, 3, 'derived sim time (90 * 1/30)');
  });

  runner.test('AAA-08: serialize -> fromJSON round-trips the record', () => {
    const sg = new SaveGame({ storage: createStorage(), key: 'save.sim' });
    sg.capture({
      seed: DEFAULT_SEED,
      player: { currentCar: null, camera: { position: { x: 5, y: 2, z: -7 } }, carVelocity: 0 },
      simClock: { snapshot() { return { fixedDt: 1 / 30, steps: 90 }; } }
    });
    const revived = new SaveGame({ storage: createStorage(), key: 'save.sim2' }).fromJSON(sg.serialize());
    equal(revived.seed, DEFAULT_SEED, 'seed preserved');
    equal(revived.simClock.steps, 90, 'clock steps preserved');
  });

  runner.test('AAA-08: fingerprint is deterministic across captures (replay-safe)', () => {
    const state = {
      seed: DEFAULT_SEED,
      player: { currentCar: null, camera: { position: { x: 5, y: 2, z: -7 } }, carVelocity: 0 },
      simClock: { snapshot() { return { fixedDt: 1 / 30, steps: 90 }; } },
      progress: { score: 10, events: 2 }
    };
    const sa = new SaveGame({ storage: createStorage(), key: 'save.a' });
    sa.capture(state);
    const sb = new SaveGame({ storage: createStorage(), key: 'save.b' });
    sb.capture(state);
    equal(sa.fingerprint(), sb.fingerprint(), 'two captures of identical state fingerprint identically');
  });

  runner.test('AAA-08: restore resumes player position + sim-clock position', () => {
    const sg = new SaveGame({ storage: createStorage(), key: 'save.sim' });
    sg.capture({
      seed: DEFAULT_SEED,
      player: { currentCar: null, camera: { position: { x: 5, y: 2, z: -7 } }, carVelocity: 0 },
      simClock: { snapshot() { return { fixedDt: 1 / 30, steps: 90, accumulator: 0.01 }; } }
    });
    const target = { camera: { position: { x: 0, y: 0, z: 0 } }, currentCar: null, carVelocity: 0 };
    const clock = { steps: 0, accumulator: 0 };
    sg.restore({ player: target, simClock: clock });
    equal(target.camera.position.x, 5, 'player pos x resumed');
    equal(clock.steps, 90, 'sim steps resumed');
    equal(clock.accumulator, 0.01, 'accumulator resumed');
  });

  runner.test('AAA-08: snapshotClock normalizes a plain clock snapshot', () => {
    const c = snapshotClock({ fixedDt: 1 / 30, steps: 60 });
    equal(c.steps, 60, 'steps');
    equal(c.fixedDt, 1 / 30, 'fixedDt');
    ok(!!c, 'clock snapshot returned');
  });
}
