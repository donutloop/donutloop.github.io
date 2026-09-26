/**
 * core/settings.js — AAA-07 persisted settings (ADR 0023).
 *
 * Quality tiers, control remap, and audio prefs, persisted to localStorage.
 * Node-safe: when there is no browser localStorage, a memory-backed storage
 * shim is used so the verification harness can round-trip save/load without
 * a WebGL/browser context.
 *
 * The settings object is the single source of truth the rest of the stack
 * reads at boot: the input layer rehydrates its ActionMap from
 * `settings.input.bindings`, the renderer caps pixel-ratio from the quality
 * tier, and the later audio bus (AAA-13) reads `settings.audio`.
 */
import { DEFAULT_BINDINGS } from '../input/action_map.js';

export const QUALITY_TIERS = Object.freeze({
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high',
  ULTRA: 'ultra'
});

// Per-tier renderer/visual knobs. pixelRatio is the cap applied to the
// renderer at boot; drawDistanceScale scales the chunk-streaming radius;
// postFx is consumed later by the post-FX tier pass (AAA-16).
export const QUALITY_PARAMS = Object.freeze({
  [QUALITY_TIERS.LOW]:    { pixelRatio: 1.0, drawDistanceScale: 0.75, postFx: false },
  [QUALITY_TIERS.MEDIUM]: { pixelRatio: 1.5, drawDistanceScale: 0.90, postFx: true },
  [QUALITY_TIERS.HIGH]:   { pixelRatio: 2.0, drawDistanceScale: 1.00, postFx: true },
  [QUALITY_TIERS.ULTRA]:  { pixelRatio: 3.0, drawDistanceScale: 1.15, postFx: true }
});

export const DEFAULT_SETTINGS = Object.freeze({
  quality: QUALITY_TIERS.HIGH,
  // 0 = auto (fall back to the quality tier's cap / the chunk manager default).
  pixelRatio: 0,
  renderDistance: 0,
  audio: { muted: false, master: 1.0, music: 1.0, sfx: 1.0 },
  input: { bindings: DEFAULT_BINDINGS }
});

function isPlainObject(v) {
  return v !== null && typeof v === 'object' && !Array.isArray(v);
}

// Deep-merge `over` onto `base` (base wins only for absent keys). Preserves
// the frozen defaults shape while letting persisted values override.
function deepMerge(base, over) {
  const out = {};
  for (const k of Object.keys(base)) {
    const b = base[k];
    const o = over && over[k];
    out[k] = (isPlainObject(b) && isPlainObject(o))
      ? deepMerge(b, o)
      : (o === undefined ? b : o);
  }
  return out;
}

/**
 * Node-safe storage shim. Returns the real localStorage when present,
 * otherwise an in-memory Map that satisfies the same getItem/setItem shape.
 */
export function createStorage() {
  if (typeof localStorage !== 'undefined' && localStorage) return localStorage;
  const mem = new Map();
  return {
    getItem: (k) => (mem.has(k) ? mem.get(k) : null),
    setItem: (k, v) => mem.set(k, String(v)),
    removeItem: (k) => mem.delete(k)
  };
}

export class Settings {
  /**
   * @param {object} opts
   * @param {object} [opts.storage]  localStorage-like getItem/setItem shim.
   * @param {string} [opts.key]      storage key under which settings live.
   * @param {object} [opts.defaults] default settings shape.
   */
  constructor({ storage = null, key = 'worldloop.settings', defaults = DEFAULT_SETTINGS } = {}) {
    this.storage = storage || createStorage();
    this.key = key;
    this.defaults = defaults;
    this._data = deepMerge(defaults, {});
    this.dirty = false;
    this.load();
  }

  /** Read persisted JSON and merge over the defaults (corrupt data ignored). */
  load() {
    const raw = this.storage.getItem(this.key);
    if (raw) {
      try {
        this._data = deepMerge(this.defaults, JSON.parse(raw));
      } catch (e) {
        this._data = deepMerge(this.defaults, {});
      }
    }
    this.dirty = false;
    return this;
  }

  /** Write the current settings JSON back to storage. */
  save() {
    this.storage.setItem(this.key, JSON.stringify(this._data));
    this.dirty = false;
    return this;
  }

  /** Access a nested value by dotted path, e.g. settings.get('audio.master'). */
  get(path, fallback = undefined) {
    let node = this._data;
    for (const key of path.split('.')) {
      if (node == null || !(key in node)) return fallback;
      node = node[key];
    }
    return node;
  }

  /** Set a nested value by dotted path and persist (e.g. 'audio.muted'). */
  set(path, value) {
    const keys = path.split('.');
    let node = this._data;
    for (let i = 0; i < keys.length - 1; i++) {
      const k = keys[i];
      if (!isPlainObject(node[k])) node[k] = {};
      node = node[k];
    }
    node[keys[keys.length - 1]] = value;
    this.dirty = true;
    this.save();
    return this;
  }

  get quality() { return this._data.quality; }
  get audio() { return this._data.audio; }
  get bindings() { return this._data.input.bindings; }
  get isDirty() { return this.dirty; }

  /** Validate + assign a quality tier, then persist. */
  setQuality(tier) {
    const t = QUALITY_PARAMS[tier] ? tier : QUALITY_TIERS.HIGH;
    this._data.quality = t;
    this.dirty = true;
    this.save();
    return this;
  }

  /** Persist a control-remap (an { action: [codes...] } map from ActionMap). */
  setBindings(bindings) {
    this._data.input.bindings = bindings && typeof bindings === 'object'
      ? bindings
      : DEFAULT_BINDINGS;
    this.dirty = true;
    this.save();
    return this;
  }

  /** Merge a partial audio object ({ muted, master, music, sfx }). */
  setAudio(partial = {}) {
    this._data.audio = Object.assign({}, this._data.audio, partial);
    this.dirty = true;
    this.save();
    return this;
  }

  /** Pixel-ratio cap for the current tier (or the explicit override). */
  pixelRatioCap() {
    if (this.get('pixelRatio') > 0) return this.get('pixelRatio');
    return QUALITY_PARAMS[this.quality].pixelRatio;
  }

  /** Scale factor for the chunk-streaming radius. */
  drawDistanceScale() {
    return QUALITY_PARAMS[this.quality].drawDistanceScale;
  }

  /** Whether post-processing should run for the current tier. */
  postFxEnabled() {
    return QUALITY_PARAMS[this.quality].postFx;
  }

  /** Machine-readable snapshot for telemetry / verification. */
  snapshot() {
    return {
      quality: this._data.quality,
      pixelRatio: this.get('pixelRatio'),
      renderDistance: this.get('renderDistance'),
      audio: Object.assign({}, this._data.audio),
      input: { bindings: this._data.input.bindings },
      dirty: this.dirty
    };
  }
}
