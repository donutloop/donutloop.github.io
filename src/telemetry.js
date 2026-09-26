/**
 * FrameBudgetTelemetry — shared frame-budget telemetry for both the browser
 * path (real `renderer.info` + real frame time) and the Node verification
 * path (`check_world.mjs` runs the real systems, so it reports a synthetic
 * achievable FPS and a scene-graph draw-call estimate).
 *
 * Machine path (`countDrawCalls` / `measureFrameBudget`) needs no WebGL
 * context: it traverses the live THREE scene graph for renderable meshes.
 */
export class FrameBudgetTelemetry {
  constructor() {
    this.reset();
  }

  reset() {
    this.frames = 0;
    this.avgFrameMs = 0;
    this.lastFps = 0;
    this.drawCalls = 0;
    this.triangles = 0;
    this.instances = 0;
  }

  /**
   * Browser path: feed one real rendered frame. `dt` in seconds; `calls` /
   * `triangles` come from `renderer.info.render`.
   */
  recordFrame(dt, calls, triangles) {
    const frameMs = Math.max(dt, 0.0001) * 1000;
    const n = this.frames;
    this.frames += 1;
    this.avgFrameMs = n === 0 ? frameMs : (this.avgFrameMs * n + frameMs) / (n + 1);
    this.lastFps = 1000 / frameMs;
    this.drawCalls = calls || this.drawCalls;
    this.triangles = triangles || this.triangles;
    return this;
  }

  /**
   * Machine path: count renderable objects in a scene/group graph.
   * Each Mesh is one draw call; an InstancedMesh adds `count` instances.
   * Returns `{ drawCalls, instances }`.
   */
  countDrawCalls(root) {
    let drawCalls = 0;
    let instances = 0;
    root.traverse((obj) => {
      if (obj.isMesh && obj.visible && obj.material) {
        drawCalls += 1;
        instances += obj.isInstancedMesh ? obj.count : 1;
      }
    });
    this.drawCalls = drawCalls;
    this.instances = instances;
    return { drawCalls, instances };
  }

  /**
   * Machine path: run a synthetic frame loop of `frames` steps at `dt`
   * seconds and measure real elapsed time → achievable FPS / frame budget.
   * Returns `{ frames, avgFrameMs, fps, elapsedMs }`.
   */
  measureFrameBudget(step, dt = 1 / 60, frames = 120) {
    const start = performance.now();
    for (let i = 0; i < frames; i++) step(dt);
    const elapsedMs = performance.now() - start;
    const avgFrameMs = elapsedMs / frames;
    const fps = 1000 / Math.max(avgFrameMs, 0.001);
    this.frames = frames;
    this.avgFrameMs = avgFrameMs;
    this.lastFps = fps;
    return { frames, avgFrameMs, fps, elapsedMs };
  }

  /**
   * [AAA-02] Record the FrameLoop budget state each frame so the loop's
   * clamped-dt / budget-skip behavior is machine-visible.
   */
  recordBudget(snap) {
    this.loop = snap || null;
    this.skippedFrames = snap ? snap.skipped : 0;
    this.overBudgetFrames = snap ? snap.overBudget : 0;
    this.clampedDts = snap ? snap.clamped : 0;
    return this;
  }

  /**
   * [AAA-04] Record the fixed-timestep clock budget each frame so telemetry
   * exposes how many sim steps ran, how many were dropped by the frame-budget
   * clamp, and whether the sim is paused.
   */
  recordClock(snap) {
    this.clock = snap || null;
    return this;
  }

  snapshot() {
    return {
      frames: this.frames,
      avgFrameMs: +this.avgFrameMs.toFixed(3),
      fps: +this.lastFps.toFixed(2),
      drawCalls: this.drawCalls,
      instances: this.instances,
      triangles: this.triangles,
      loop: this.loop,
      clock: this.clock,
      skippedFrames: this.skippedFrames,
      overBudgetFrames: this.overBudgetFrames,
      clampedDts: this.clampedDts
    };
  }
}
