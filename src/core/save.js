/**
 * core/save.js — AAA-08 persisted save/load (ADR 0022/0023).
 *
 * Serializes the deterministic world seed + player state + progress into a
 * single JSON record that is REPLAY-SAFE: because the world is seeded
 * deterministically (ADR 0022), restoring the seed + sim-clock position +
 * player state reproduces the same run.
 *
 * SaveGame API:
 *   - capture({ seed, player, simClock, progress, meta }) -> plain snapshot
 *   - serialize()/fromJSON(raw)   deterministic JSON round-trip
 *   - save()/load()               Node-safe localStorage shim (same as settings)
 *   - fingerprint()               stable checksum — asserts replay-safe stability
 *   - restore({ player, simClock }) resume a captured snapshot back onto state
 *
 * The record carries NO wall-clock timestamp: a fingerprint computed over two
 * captures of identical state must be equal, which is what verification asserts.
 */
import { getSeed, DEFAULT_SEED } from './rng.js';
import { createStorage } from './settings.js';

export const SAVE_VERSION = 1;
export const SAVE_KEY = 'worldloop.save';

function vec3(v) {
  if (!v) return null;
  return { x: v.x ?? 0, y: v.y ?? 0, z: v.z ?? 0 };
}

/**
 * Extract a plain, replay-safe player snapshot. Works over a real Player
 * instance (THREE objects) OR a plain object with the same field names, so the
 * Node verification harness can round-trip it without a browser/WebGL context.
 */
export function snapshotPlayer(player) {
  if (!player) return null;
  const mesh = player.currentCar && player.currentCar.mesh;
  const cam = player.camera;
  const pos = vec3(cam ? cam.position : null) || { x: 0, y: 2, z: 0 };
  return {
    position: pos,
    isDriving: !!player.isDriving,
    carType: mesh ? (mesh.userData && mesh.userData.type) || 'sedan' : null,
    carPosition: vec3(mesh ? mesh.position : null),
    carRotationY: mesh && mesh.rotation ? mesh.rotation.y : null,
    carVelocity: player.carVelocity || 0,
    carSteering: player.carSteering || 0,
    health: mesh && mesh.userData ? mesh.userData.health : null,
    spinVelocity: player.spinVelocity || 0,
    shakeIntensity: player.shakeIntensity || 0
  };
}

/** Extract a sim-clock snapshot (FixedTimestep or a plain clock object). */
export function snapshotClock(simClock) {
  if (!simClock) return null;
  if (typeof simClock.snapshot === 'function') return simClock.snapshot();
  // Accept a pre-snapshotted plain clock object.
  return {
    fixedDt: simClock.fixedDt ?? 1 / 30,
    maxStepsPerFrame: simClock.maxStepsPerFrame ?? 4,
    accumulator: simClock.accumulator ?? 0,
    paused: !!simClock.paused,
    frames: simClock.frames ?? 0,
    steps: simClock.steps ?? 0,
    dropped: simClock.dropped ?? 0,
    alpha: simClock.alpha ?? 0
  };
}

export class SaveGame {
  constructor({ storage = null, key = SAVE_KEY } = {}) {
    this.storage = storage || createStorage();
    this.key = key;
    this._data = null;
    this.dirty = false;
  }

  /**
   * Build a replay-safe snapshot. `player` may be a Player instance or a plain
   * player snapshot; `simClock` a FixedTimestep or a plain clock snapshot.
   */
  capture({ seed = getSeed(), player = null, simClock = null, progress = {}, meta = {} } = {}) {
    const clock = snapshotClock(simClock);
    this._data = {
      version: SAVE_VERSION,
      seed: seed >>> 0,
      player: snapshotPlayer(player),
      simClock: clock,
      progress: {
        score: progress.score || 0,
        events: progress.events || 0,
        // Derived sim time — deterministic from the clock (replay-safe).
        simTime: clock ? +(clock.steps * clock.fixedDt).toFixed(3) : 0
      },
      meta: Object.assign({}, meta)
    };
    this.dirty = true;
    return this.snapshot();
  }

  serialize() {
    return this._data ? JSON.stringify(this._data) : null;
  }

  save() {
    if (this._data) {
      this.storage.setItem(this.key, JSON.stringify(this._data));
      this.dirty = false;
    }
    return this;
  }

  load() {
    const raw = this.storage.getItem(this.key);
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        if (parsed && parsed.version === SAVE_VERSION) {
          this._data = parsed;
          this.dirty = false;
          return this.snapshot();
        }
      } catch (e) {
        // Corrupt save is ignored — nothing to restore.
      }
    }
    this._data = null;
    return null;
  }

  fromJSON(raw) {
    const parsed = JSON.parse(raw);
    if (parsed && parsed.version === SAVE_VERSION) {
      this._data = parsed;
      this.dirty = false;
      return this.snapshot();
    }
    return null;
  }

  snapshot() {
    return this._data ? JSON.parse(JSON.stringify(this._data)) : null;
  }

  /**
   * Deterministic fingerprint (FNV-1a style) over the serialized record. Two
   * captures of identical state must fingerprint identically — this is what
   * "replay-safe" verification asserts.
   */
  fingerprint() {
    if (!this._data) return null;
    const s = this.serialize();
    let h = 0x811c9dc5 >>> 0;
    for (let i = 0; i < s.length; i++) {
      h ^= s.charCodeAt(i);
      h = Math.imul(h, 0x01000193) >>> 0;
    }
    return h >>> 0;
  }

  /** Resume a captured snapshot back onto live player + sim-clock state. */
  restore({ player = null, simClock = null } = {}) {
    const d = this._data;
    if (!d) return null;

    if (d.simClock && simClock) {
      simClock.steps = d.simClock.steps || 0;
      simClock.accumulator = d.simClock.accumulator || 0;
      if (typeof simClock.pause === 'function') simClock.pause();
    }

    if (d.player && player) {
      const p = d.player;
      // Position may be a THREE.Vector3 (browser) or a plain {x,y,z} (Node).
      const camPos = player.camera && player.camera.position;
      if (p.position && camPos) {
        if (typeof camPos.set === 'function') {
          camPos.set(p.position.x, p.position.y, p.position.z);
        } else {
          camPos.x = p.position.x;
          camPos.y = p.position.y;
          camPos.z = p.position.z;
        }
      }
      player.isDriving = !!p.isDriving;
      player.carVelocity = p.carVelocity || 0;
      player.carSteering = p.carSteering || 0;
      player.spinVelocity = p.spinVelocity || 0;
      player.shakeIntensity = p.shakeIntensity || 0;

      if (player.currentCar && player.currentCar.mesh) {
        const mesh = player.currentCar.mesh;
        if (p.carPosition) {
          if (typeof mesh.position.set === 'function') {
            mesh.position.set(p.carPosition.x, p.carPosition.y, p.carPosition.z);
          } else {
            mesh.position.x = p.carPosition.x;
            mesh.position.y = p.carPosition.y;
            mesh.position.z = p.carPosition.z;
          }
        }
        if (p.carRotationY != null && mesh.rotation) mesh.rotation.y = p.carRotationY;
        if (p.carType && mesh.userData) mesh.userData.type = p.carType;
        if (p.health != null && mesh.userData) mesh.userData.health = p.health;
      }
    }
    return this.snapshot();
  }
}

export { DEFAULT_SEED };
