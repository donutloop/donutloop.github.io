/**
 * core/app.js — AAA-05 App state machine (ADR 0023).
 *
 * Game lifecycle states: boot → loading → menu → playing ⇄ paused → gameover.
 *
 * The App OWNS the pause hook: entering a frozen state (boot/loading/menu/
 * paused/gameover) pauses the sim clock so no sim system advances; entering
 * `playing` resumes it. The render pass keeps drawing in frozen states so the
 * last frame stays on screen.
 *
 * Deterministic transition log (`history`) + a machine-readable `snapshot()`
 * so check_world.mjs can assert state flow without a browser.
 */
export const APP_STATES = Object.freeze({
  BOOT: 'boot',
  LOADING: 'loading',
  MENU: 'menu',
  PLAYING: 'playing',
  PAUSED: 'paused',
  GAMEOVER: 'gameover'
});

const STATE_LIST = Object.values(APP_STATES);

// States in which the sim clock is frozen (no sim updates).
const FROZEN = new Set([
  APP_STATES.BOOT,
  APP_STATES.LOADING,
  APP_STATES.MENU,
  APP_STATES.PAUSED,
  APP_STATES.GAMEOVER
]);

export function isValidAppState(s) {
  return STATE_LIST.includes(s);
}

export class App {
  /**
   * @param {object} opts
   * @param {object} opts.clock   FixedTimestep instance to pause/resume.
   * @param {Function} [opts.onEnter]  (to, from) hook fired on state entry.
   * @param {Function} [opts.onExit]   (from, to) hook fired before leaving.
   */
  constructor({ clock = null, onEnter = null, onExit = null } = {}) {
    this.clock = clock;
    this.onEnter = onEnter;
    this.onExit = onExit;
    this.state = APP_STATES.BOOT;
    this.transitions = 0;
    this.history = []; // { from, to, reason }
  }

  /**
   * Transition to `to`. Invalid states throw. A no-op transition (from === to)
   * is recorded in history but not counted in `transitions`. Entering a frozen
   * state pauses the clock; entering `playing` resumes it.
   */
  transition(to, reason = '') {
    if (!isValidAppState(to)) {
      throw new Error('App: invalid state "' + String(to) + '"');
    }
    const from = this.state;
    this.history.push({ from, to, reason });
    if (from !== to) {
      if (this.onExit) this.onExit(from, to);
      this.state = to;
      this.transitions++;
      if (this.onEnter) this.onEnter(to, from);
      this._syncClock(to);
    }
    return this;
  }

  _syncClock(to) {
    if (!this.clock) return;
    if (FROZEN.has(to)) this.clock.pause();
    else this.clock.resume();
  }

  get isPlaying() { return this.state === APP_STATES.PLAYING; }
  get isPaused() { return this.state === APP_STATES.PAUSED; }
  get isFrozen() { return FROZEN.has(this.state); }

  /**
   * Pause hook (P key): toggle playing ⇄ paused. If not in a pauseable state,
   * the request is ignored and recorded as a no-op (state unchanged).
   */
  togglePause() {
    if (this.state === APP_STATES.PLAYING) {
      this.transition(APP_STATES.PAUSED, 'toggle-pause');
    } else if (this.state === APP_STATES.PAUSED) {
      this.transition(APP_STATES.PLAYING, 'toggle-resume');
    } else {
      this.transition(this.state, 'toggle-ignored');
    }
    return this;
  }

  /** Machine-readable state snapshot for telemetry / verification. */
  snapshot() {
    return {
      state: this.state,
      transitions: this.transitions,
      playing: this.isPlaying,
      paused: this.isPaused,
      frozen: this.isFrozen,
      clockPaused: this.clock ? this.clock.paused : null,
      history: this.history.slice()
    };
  }
}
