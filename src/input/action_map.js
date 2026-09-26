/**
 * input/action_map.js — AAA-06 logical action map (ADR 0023).
 *
 * Decouples gameplay intent (MOVE_FORWARD, ENTER_EXIT, ...) from physical
 * bindings (KeyW, gamepad axis, touch button). A single ActionMap owns the
 * mapping so adapters (keyboard/mouse/touch/gamepad) translate device events
 * into logical actions, and InputManager turns those into held-state + one-shot
 * events consumed by systems (Player, App).
 *
 * Pure data + no DOM → deterministic in the Node verification path.
 */

export const ACTIONS = Object.freeze({
  MOVE_FORWARD: 'moveForward',
  MOVE_BACKWARD: 'moveBackward',
  MOVE_LEFT: 'moveLeft',
  MOVE_RIGHT: 'moveRight',
  ENTER_EXIT: 'enterExit',
  JUMP: 'jump',
  PAUSE: 'pause',
  LOCK: 'lock'
});

// Default physical bindings (keyboard codes; remappable per-action).
export const DEFAULT_BINDINGS = Object.freeze({
  [ACTIONS.MOVE_FORWARD]: ['KeyW', 'ArrowUp'],
  [ACTIONS.MOVE_BACKWARD]: ['KeyS', 'ArrowDown'],
  [ACTIONS.MOVE_LEFT]: ['KeyA', 'ArrowLeft'],
  [ACTIONS.MOVE_RIGHT]: ['KeyD', 'ArrowRight'],
  [ACTIONS.ENTER_EXIT]: ['KeyE'],
  [ACTIONS.JUMP]: ['Space'],
  [ACTIONS.PAUSE]: ['KeyP'],
  [ACTIONS.LOCK]: ['Enter']
});

export class ActionMap {
  constructor(bindings = DEFAULT_BINDINGS) {
    this.bindings = {};
    this._byCode = {};
    this._rebuild(bindings);
  }

  _rebuild(bindings) {
    this.bindings = {};
    for (const [action, codes] of Object.entries(bindings)) {
      this.bindings[action] = Array.isArray(codes) ? codes.slice() : [codes];
    }
    this._byCode = {};
    for (const [action, codes] of Object.entries(this.bindings)) {
      for (const code of codes) this._byCode[code] = action;
    }
  }

  /** Remap a single action to a new set of physical codes. */
  remap(action, codes) {
    this.bindings[action] = Array.isArray(codes) ? codes.slice() : [codes];
    this._byCode = {};
    for (const [a, cs] of Object.entries(this.bindings)) {
      for (const c of cs) this._byCode[c] = a;
    }
    return this;
  }

  /** Map a physical code (key code, gamepad axis/button id, ...) to an action. */
  actionForCode(code) {
    return this._byCode[code] || null;
  }

  codesFor(action) {
    return this.bindings[action] || [];
  }

  /** Machine-readable snapshot for telemetry / verification. */
  snapshot() {
    const bindings = {};
    for (const [a, cs] of Object.entries(this.bindings)) bindings[a] = cs.slice();
    return { actions: Object.keys(this.bindings).sort(), bindings };
  }
}
