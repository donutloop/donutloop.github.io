/**
 * core/time.js — AAA-04 fixed-timestep core (ADR 0022).
 *
 * FixedTimestep advances the simulation at a constant `fixedDt` regardless of
 * the display refresh rate, so physics/AI are deterministic and independent of
 * the monitor. Classic accumulator:
 *
 *   real dt ──▶ accumulator ──▶ N × update(fixedDt) ──▶ render(alpha)
 *
 * - update(fixedDt) runs exactly the sim systems (deterministic, 30Hz).
 * - render(alpha) draws once per frame, passing the leftover accumulator as an
 *   interpolation factor and the real frame dt for visual effects.
 * - Frame-budget clamp: after a long stall, leftover time is dropped so the
 *   sim never spirals into a catch-up death loop (maxStepsPerFrame cap).
 * - pause()/resume()/toggle() freeze the accumulator so the sim holds state
 *   while the render pass keeps drawing the last frame.
 */
export const FIXED_DT = 1 / 30;        // 30Hz simulation step
export const MAX_STEPS_PER_FRAME = 4;  // budget clamp — never >4 sim steps/frame

export class FixedTimestep {
  constructor({ fixedDt = FIXED_DT, maxStepsPerFrame = MAX_STEPS_PER_FRAME } = {}) {
    this.fixedDt = fixedDt;
    this.maxStepsPerFrame = maxStepsPerFrame;
    this.accumulator = 0;
    this.paused = false;
    this.frames = 0;
    this.steps = 0;
    this.dropped = 0;   // leftover fixed steps dropped by the budget clamp
    this.alpha = 0;     // render interpolation factor [0,1)
  }

  /**
   * Advance the clock by `dt` real seconds. Runs onUpdate(fixedDt) for each
   * full fixed step (0..maxStepsPerFrame), then onRender(alpha, dt) once.
   * Returns { steps, rendered, alpha }.
   */
  advance(dt, onUpdate, onRender) {
    this.frames++;
    if (this.paused) {
      // Paused: freeze the accumulator so the sim holds its last state.
      this.accumulator = 0;
      this.alpha = 0;
      if (onRender) onRender(0, dt);
      return { steps: 0, rendered: true, alpha: 0 };
    }

    this.accumulator += dt;
    let steps = 0;
    while (this.accumulator >= this.fixedDt && steps < this.maxStepsPerFrame) {
      if (onUpdate) onUpdate(this.fixedDt);
      this.accumulator -= this.fixedDt;
      steps++;
    }

    // Frame-budget clamp: drop leftover time after a long stall — no catch-up.
    if (this.accumulator >= this.fixedDt) {
      this.dropped += Math.floor(this.accumulator / this.fixedDt);
      this.accumulator %= this.fixedDt;
    }

    this.steps += steps;
    this.alpha = this.accumulator / this.fixedDt;
    if (onRender) onRender(this.alpha, dt);
    return { steps, rendered: true, alpha: this.alpha };
  }

  pause() { this.paused = true; }
  resume() { this.paused = false; }
  toggle() { this.paused ? this.resume() : this.pause(); }

  snapshot() {
    return {
      fixedDt: this.fixedDt,
      maxStepsPerFrame: this.maxStepsPerFrame,
      accumulator: +this.accumulator.toFixed(4),
      paused: this.paused,
      frames: this.frames,
      steps: this.steps,
      dropped: this.dropped,
      alpha: +this.alpha.toFixed(3)
    };
  }
}
