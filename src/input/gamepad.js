/**
 * input/gamepad.js — AAA-06 gamepad adapter (ADR 0023).
 *
 * Polls navigator.getGamepads() each update() and maps the left-stick axes +
 * face button to logical actions via the same onAction channel as keyboard.
 * Held axes set move actions; the primary face button fires ENTER_EXIT once per
 * press (edge-triggered). Node-safe: no navigator.getGamepads → no-op.
 */
import { ActionMap, DEFAULT_BINDINGS } from './action_map.js';

// Standard Gamepad API indices.
const AXIS_LEFT_X = 0;
const AXIS_LEFT_Y = 1;
const BUTTON_ENTER_EXIT = 0; // bottom face button (A / cross)

export class GamepadAdapter {
  constructor({ map = null, onAction = null, nav = null } = {}) {
    this.map = map || new ActionMap(DEFAULT_BINDINGS);
    this.onAction = onAction;
    this.nav = nav || (typeof navigator !== 'undefined' ? navigator : null);
    this.pressedEnterExit = false;
  }

  update() {
    if (!this.nav || typeof this.nav.getGamepads !== 'function') return;
    const pad = this.nav.getGamepads() && this.nav.getGamepads()[0];
    if (!pad || !this.onAction) return;
    const axes = pad.axes || [];
    const buttons = pad.buttons || [];

    // Left-stick -> held move actions (deadzone 0.25).
    const y = axes[AXIS_LEFT_Y] || 0;
    const x = axes[AXIS_LEFT_X] || 0;
    this.onAction('moveForward', y < -0.25, { source: 'gamepad' });
    this.onAction('moveBackward', y > 0.25, { source: 'gamepad' });
    this.onAction('moveLeft', x < -0.25, { source: 'gamepad' });
    this.onAction('moveRight', x > 0.25, { source: 'gamepad' });

    // Primary face button -> ENTER_EXIT, edge-triggered.
    const btn = buttons[BUTTON_ENTER_EXIT] && buttons[BUTTON_ENTER_EXIT].pressed;
    if (btn && !this.pressedEnterExit) {
      this.pressedEnterExit = true;
      this.onAction('enterExit', true, { source: 'gamepad' });
    } else if (!btn) {
      this.pressedEnterExit = false;
    }
  }

  snapshot() {
    return { adapter: 'gamepad', supported: !!this.nav };
  }
}
