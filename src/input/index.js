/**
 * input/index.js — AAA-06 unified input manager (ADR 0023).
 *
 * Combines keyboard/mouse/touch/gamepad adapters into one action state:
 *   - held-state `actions` (moveForward/backward/left/right) consumed every
 *     frame by systems (Player);
 *   - one-shot `events` queue (enterExit/jump/pause/lock) drained once per
 *     frame (edge-triggered: fires exactly once per physical press).
 *
 * main.js wires pause -> App.togglePause and lock -> PointerLockControls.lock;
 * Player drains events for enterExit/jump. Node-safe: adapters no-op without a
 * real DOM, so the harness can construct an InputManager deterministically.
 */
import { ActionMap, DEFAULT_BINDINGS } from './action_map.js';
import { KeyboardAdapter } from './keyboard.js';
import { MouseAdapter } from './mouse.js';
import { TouchAdapter } from './touch.js';
import { GamepadAdapter } from './gamepad.js';

const HELD = new Set(['moveForward', 'moveBackward', 'moveLeft', 'moveRight']);
const ONESHOT = new Set(['enterExit', 'jump', 'pause', 'lock']);

export class InputManager {
  constructor({ dom = null, map = null, onPause = null, onLock = null } = {}) {
    this.map = map || new ActionMap(DEFAULT_BINDINGS);
    this.dom = dom;
    this.onPause = onPause;
    this.onLock = onLock;
    this.actions = {
      moveForward: false, moveBackward: false, moveLeft: false, moveRight: false
    };
    this.events = [];
    this._pressed = { enterExit: false, jump: false, pause: false, lock: false };

    const handle = (action, active, evt) => this._handle(action, active, evt);
    this.adapters = [
      new KeyboardAdapter({ dom, map: this.map, onAction: handle }),
      new MouseAdapter({ dom, onLock: () => this._fire('lock') }),
      new TouchAdapter({ dom, onAction: handle }),
      new GamepadAdapter({ map: this.map, onAction: handle })
    ];
  }

  _handle(action, active, evt) {
    if (HELD.has(action)) {
      this.actions[action] = !!active;
      return;
    }
    if (ONESHOT.has(action)) {
      this._fire(action, active);
    }
  }

  _fire(action, active = true) {
    if (active && !this._pressed[action]) {
      this._pressed[action] = true;
      this.events.push(action);
      if (action === 'pause' && this.onPause) this.onPause();
      if (action === 'lock' && this.onLock) this.onLock();
    } else if (!active) {
      this._pressed[action] = false;
    }
  }

  /** Drain the one-shot events queued this frame (called by consumers). */
  drain() {
    const e = this.events;
    this.events = [];
    return e;
  }

  /** Poll non-event adapters (gamepad). */
  update(dt = 0) {
    for (const a of this.adapters) {
      if (a.update) a.update(dt);
    }
  }

  /** Propagate pointer-lock state to adapters that own UI (mouse overlay). */
  setLocked(locked) {
    for (const a of this.adapters) {
      if (a.setLocked) a.setLocked(locked);
    }
  }

  detach() {
    for (const a of this.adapters) {
      if (a.detach) a.detach();
    }
  }

  /** Machine-readable state for telemetry / verification. */
  snapshot() {
    return {
      map: this.map.snapshot(),
      actions: { ...this.actions },
      events: this.events.slice(),
      adapters: this.adapters.map((a) => (a.snapshot ? a.snapshot() : null))
    };
  }
}

export { ActionMap, DEFAULT_BINDINGS, ACTIONS } from './action_map.js';
export { KeyboardAdapter } from './keyboard.js';
export { MouseAdapter } from './mouse.js';
export { TouchAdapter } from './touch.js';
export { GamepadAdapter } from './gamepad.js';
