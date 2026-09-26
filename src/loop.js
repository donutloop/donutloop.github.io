/**
 * src/loop.js — AAA-02 "fix the loop" (Phase 8, foundation hardening).
 *
 * FrameLoop drives the animation loop with exactly one update() per frame, an
 * explicit `dt` that is clamped (so a backgrounded tab or a long stall cannot
 * jump the simulation), and a frame budget that drops a frame when it
 * overshoots (so the sim never spirals into a death loop).
 *
 * Browser path: call tick(now) from requestAnimationFrame (see scene.js
 * animate), run exactly one update(dt) when the frame is not skipped, then
 * reportWork(ms) with the measured update+render cost. If that cost exceeds
 * the budget, the NEXT frame's update work is dropped to recover.
 *
 * Machine path: step(count, dt, workMs) drives the same clock/budget logic
 * deterministically so check_world.mjs can assert dt-clamp and budget-skip
 * behavior without a WebGL context.
 */
export class FrameLoop {
  constructor({ maxDt = 0.1, budgetMs = 16.7, onSkip = null } = {}) {
    this.maxDt = maxDt;       // clamp: largest dt we'll feed to the sim (100ms)
    this.budgetMs = budgetMs; // frame budget: update+render cost target (≈60fps)
    this.onSkip = onSkip;     // called whenever a frame is dropped for budget
    this.prevTime = null;     // browser timestamp of the previous frame
    this.skipNext = false;    // drop the next frame's work (budget recovery)
    this.frames = 0;          // frames observed
    this.skipped = 0;         // frames dropped for budget
    this.overBudget = 0;      // times a frame exceeded the budget
    this.clamped = 0;         // times dt was clamped
    this.lastDt = 0;          // dt actually fed to the sim (clamped)
    this.lastWorkMs = 0;      // last measured update+render cost
  }

  /**
   * Browser path. Returns { dt, first, skipped }.
   * - dt: clamped per-frame delta for the sim.
   * - first: true on the very first tick (no real delta yet).
   * - skipped: true when the frame's update/render work is dropped for budget.
   */
  tick(now) {
    if (this.prevTime === null) {
      this.prevTime = now;
      this.frames++;
      return { dt: 0, first: true, skipped: false };
    }
    let dt = (now - this.prevTime) / 1000;
    this.prevTime = now;
    // Clamp explicit dt — backgrounded tabs / stalls must not jump the sim.
    if (dt > this.maxDt) { dt = this.maxDt; this.clamped++; }
    this.lastDt = dt;
    this.frames++;

    // Frame budget: if the previous frame overshot, drop THIS frame's work.
    if (this.skipNext) {
      this.skipNext = false;
      this.skipped++;
      if (this.onSkip) this.onSkip();
      return { dt, first: false, skipped: true };
    }
    return { dt, first: false, skipped: false };
  }

  /**
   * Record the measured update+render cost (ms) of the frame just ran. If it
   * exceeds the budget, drop the next frame's work to avoid a spiral.
   */
  reportWork(ms) {
    this.lastWorkMs = ms;
    if (ms > this.budgetMs) { this.overBudget++; this.skipNext = true; }
    return ms;
  }

  /**
   * Machine path: drive `count` frames at nominal `dt` (seconds) with a fixed
   * measured `workMs` cost. Returns counts of { skipped, clamped, overBudget }.
   */
  step(count = 1, dt = 1 / 60, workMs = 1) {
    let skipped = 0, clamped = 0, over = 0;
    let t = this.prevTime === null ? 0 : this.prevTime;
    for (let i = 0; i < count; i++) {
      t += dt * 1000;
      const res = this.tick(t);
      if (res.skipped) skipped++;
      if (dt > this.maxDt) clamped++;
      this.reportWork(workMs);
      if (workMs > this.budgetMs) over++;
    }
    return { skipped, clamped, over };
  }

  snapshot() {
    return {
      frames: this.frames,
      skipped: this.skipped,
      overBudget: this.overBudget,
      clamped: this.clamped,
      maxDt: this.maxDt,
      budgetMs: this.budgetMs,
      lastDt: +this.lastDt.toFixed(3),
      lastWorkMs: +this.lastWorkMs.toFixed(2)
    };
  }
}
