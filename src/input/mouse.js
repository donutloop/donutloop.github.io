/**
 * input/mouse.js — AAA-06 mouse / pointer-lock adapter (ADR 0023).
 *
 * Owns the raw click-to-lock DOM binding + the "click to play" instructions
 * overlay that previously lived inside player.js. Calls onLock() when the
 * overlay/dom is clicked so the camera's PointerLockControls can lock.
 * Node-safe: no DOM → binds nothing, builds no overlay.
 */
export class MouseAdapter {
  constructor({ dom = null, onLock = null, doc = null } = {}) {
    this.dom = dom;
    this.onLock = onLock;
    this.doc = doc || (typeof document !== 'undefined' ? document : null);
    this.overlay = null;
    this.bound = false;
    this._click = null;
    this._attach();
  }

  _attach() {
    if (!this.dom || typeof this.dom.addEventListener !== 'function') return;
    this._click = () => { if (this.onLock) this.onLock(); };
    this.dom.addEventListener('click', this._click);
    this.bound = true;
    this._createOverlay();
  }

  _createOverlay() {
    if (!this.doc || !this.doc.createElement || !this.doc.body) return;
    const el = this.doc.createElement('div');
    el.style = el.style || {};
    Object.assign(el.style, {
      position: 'absolute', top: '0', left: '0', width: '100%', height: '100%',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'rgba(0,0,0,0.8)', zIndex: '1000', cursor: 'pointer',
      color: '#fff', fontSize: '24px', fontFamily: 'sans-serif',
      flexDirection: 'column', textAlign: 'center'
    });
    el.innerHTML = '<h1>Worldloop</h1>' +
      '<p style="font-size: 18px; margin-top: 20px;">' +
      'WASD = Move | Mouse = Look<br>E = Enter/Exit Car | Space = Jump | P = Pause</p>';
    this.overlay = el;
    this.doc.body.appendChild(el);
  }

  /** Toggle the instructions overlay (show until pointer-lock engages). */
  setLocked(locked) {
    if (this.overlay) this.overlay.style.display = locked ? 'none' : 'flex';
  }

  detach() {
    if (this.bound && this.dom && typeof this.dom.removeEventListener === 'function') {
      this.dom.removeEventListener('click', this._click);
    }
    this._click = null;
    this.bound = false;
  }

  snapshot() {
    return { adapter: 'mouse', bound: this.bound, overlay: !!this.overlay };
  }
}
