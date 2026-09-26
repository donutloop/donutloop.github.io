/**
 * input/keyboard.js — AAA-06 keyboard adapter (ADR 0023).
 *
 * Translates raw keydown/keyup into logical actions via the ActionMap.
 * Node-safe: when dom is a stub (no addEventListener) it binds nothing and
 * reports bound=false, so the verification harness can construct it without a
 * browser.
 */
import { ActionMap, DEFAULT_BINDINGS } from './action_map.js';

export class KeyboardAdapter {
  constructor({ dom = null, map = null, onAction = null } = {}) {
    this.map = map || new ActionMap(DEFAULT_BINDINGS);
    this.onAction = onAction;
    this.dom = dom;
    this.bound = false;
    this._kd = null;
    this._ku = null;
    this._attach();
  }

  _attach() {
    if (!this.dom || typeof this.dom.addEventListener !== 'function') return;
    this._kd = (e) => {
      const action = this.map.actionForCode(e && e.code);
      if (action && this.onAction) this.onAction(action, true, e);
    };
    this._ku = (e) => {
      const action = this.map.actionForCode(e && e.code);
      if (action && this.onAction) this.onAction(action, false, e);
    };
    this.dom.addEventListener('keydown', this._kd);
    this.dom.addEventListener('keyup', this._ku);
    this.bound = true;
  }

  detach() {
    if (this.bound && this.dom && typeof this.dom.removeEventListener === 'function') {
      this.dom.removeEventListener('keydown', this._kd);
      this.dom.removeEventListener('keyup', this._ku);
    }
    this._kd = null;
    this._ku = null;
    this.bound = false;
  }

  snapshot() {
    return { adapter: 'keyboard', bound: this.bound, map: this.map.snapshot() };
  }
}
