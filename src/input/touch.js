/**
 * input/touch.js — AAA-06 touch adapter (ADR 0023).
 *
 * Minimal virtual-control surface: a left-half drag joystick sets the move
 * actions, and right-half tap zones fire one-shot actions (ENTER_EXIT / JUMP).
 * All joystick math is pure (no DOM) so the mapping is testable in Node; DOM
 * binding is a no-op when the host has no touch surface.
 *
 * Zones (fraction of the surface):
 *   left 0..0.5            -> joystick (drag vector => move actions)
 *   right 0.75..0.9 top    -> JUMP
 *   right 0.9..1.0 bottom  -> ENTER_EXIT
 */
import { ActionMap, DEFAULT_BINDINGS } from './action_map.js';

export class TouchAdapter {
  constructor({ dom = null, onAction = null, doc = null } = {}) {
    this.dom = dom;
    this.onAction = onAction;
    this.doc = doc || (typeof document !== 'undefined' ? document : null);
    this.map = new ActionMap(DEFAULT_BINDINGS);
    this.bound = false;
    this.joystick = { active: false, x: 0, y: 0 };
    this._attach();
  }

  /** Pure mapping: drag vector -> held move actions. Testable without DOM. */
  _joystickToActions(dx, dy) {
    const dead = 0.2;
    const ax = dx / 2, ay = dy / 2; // normalize to ~[-1,1]
    if (this.onAction) {
      this.onAction('moveForward', ay < -dead, { source: 'touch' });
      this.onAction('moveBackward', ay > dead, { source: 'touch' });
      this.onAction('moveLeft', ax < -dead, { source: 'touch' });
      this.onAction('moveRight', ax > dead, { source: 'touch' });
    }
  }

  _attach() {
    if (!this.dom || typeof this.dom.addEventListener !== 'function') return;
    this._ts = (e) => {
      const t = e.touches && e.touches[0];
      if (!t) return;
      const x = t.clientX, y = t.clientY;
      const w = this.dom.clientWidth || 1, h = this.dom.clientHeight || 1;
      const fx = x / w, fy = y / h;
      if (fx <= 0.5) {
        this.joystick.active = true;
        this.joystick.x = x;
        this.joystick.y = y;
      } else if (fy > 0.9) {
        if (this.onAction) this.onAction('enterExit', true, { source: 'touch' });
      } else if (fy > 0.75) {
        if (this.onAction) this.onAction('jump', true, { source: 'touch' });
      }
    };
    this._tm = (e) => {
      if (!this.joystick.active) return;
      const t = e.touches && e.touches[0];
      if (!t) return;
      const w = this.dom.clientWidth || 1, h = this.dom.clientHeight || 1;
      this._joystickToActions((t.clientX - this.joystick.x) / w, (t.clientY - this.joystick.y) / h);
    };
    this._te = () => {
      if (this.joystick.active) {
        this.joystick.active = false;
        if (this.onAction) {
          this.onAction('moveForward', false, { source: 'touch' });
          this.onAction('moveBackward', false, { source: 'touch' });
          this.onAction('moveLeft', false, { source: 'touch' });
          this.onAction('moveRight', false, { source: 'touch' });
        }
      }
    };
    this.dom.addEventListener('touchstart', this._ts);
    this.dom.addEventListener('touchmove', this._tm);
    this.dom.addEventListener('touchend', this._te);
    this.bound = true;
  }

  detach() {
    if (this.bound && this.dom && typeof this.dom.removeEventListener === 'function') {
      this.dom.removeEventListener('touchstart', this._ts);
      this.dom.removeEventListener('touchmove', this._tm);
      this.dom.removeEventListener('touchend', this._te);
    }
    this.bound = false;
  }

  snapshot() {
    return {
      adapter: 'touch',
      bound: this.bound,
      joystick: { active: this.joystick.active, x: this.joystick.x, y: this.joystick.y }
    };
  }
}
