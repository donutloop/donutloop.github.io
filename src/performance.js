/**
 * performance.js — AdaptiveFrameGovernor
 *
 * Best-effort enforcement of a minimum frame-rate target (default 60 FPS).
 *
 * The governor tracks a smoothed frame-time EMA and, when throughput drops
 * below the target, walks a quality ladder from the most expensive GPU lever
 * (post-processing / bloom) down to pixel-ratio, shadow-map and
 * chunk-streaming radius. It recovers one step at a time once the frame
 * budget is comfortably met, with cooldowns to prevent thrash.
 *
 * The class is deliberately pure: every decision is a function of
 * (settings, frameMs, nowMs) only, so the Node verification harness can feed
 * synthetic frame times and assert the ladder deterministically without a
 * WebGL context.
 */

// Costliest lever first. `pixelRatioCap` is a hard cap in device-pixels;
// `null` means "use the active quality tier's cap".
export const QUALITY_LADDER = Object.freeze([
  // level 0 — active tier defaults (best quality)
  { postFx: true,  pixelRatioCap: null, shadows: true, drawDistanceScale: 1.00 },
  // level 1 — drop post-processing (bloom): the single most expensive GPU pass
  { postFx: false, pixelRatioCap: null, shadows: true, drawDistanceScale: 1.00 },
  // level 2 — drop to 1x device pixels (no high-DPI supersampling)
  { postFx: false, pixelRatioCap: 1.0,  shadows: true, drawDistanceScale: 1.00 },
  // level 3 — dynamic resolution scaling (render at 85% internal res, upscale)
  { postFx: false, pixelRatioCap: 0.85, shadows: true, drawDistanceScale: 1.00 },
  // level 4 — deeper DRS (70% internal res) before touching shadows
  { postFx: false, pixelRatioCap: 0.70, shadows: true, drawDistanceScale: 1.00 },
  // level 5 — disable the shadow map (all shadow passes off)
  { postFx: false, pixelRatioCap: 0.70, shadows: false, drawDistanceScale: 1.00 },
  // level 6 — shrink the chunk-streaming radius (fewer draw calls)
  { postFx: false, pixelRatioCap: 0.70, shadows: false, drawDistanceScale: 0.85 },
  // level 7 — smallest radius / last resort
  { postFx: false, pixelRatioCap: 0.70, shadows: false, drawDistanceScale: 0.70 }
]);

const EMA_SMOOTH = 0.8; // EMA keeps 80% of the previous value (~5-frame smoothing)

export class AdaptiveFrameGovernor {
  /**
   * @param {object} opts
   * @param {number} [opts.targetFps=60]     minimum frame-rate target.
   * @param {number} [opts.marginFps=4]      fps headroom required to recover.
   * @param {number} [opts.cooldownMs=900]   min gap between ladder steps.
   * @param {number} [opts.recoverFrames=120] consecutive over-target frames to recover.
   * @param {boolean} [opts.enabled=true]    inert when false (Node harness).
   */
  constructor({
    targetFps = 60,
    marginFps = 4,
    cooldownMs = 900,
    recoverFrames = 120,
    enabled = true
  } = {}) {
    this.targetFps = targetFps;
    this.marginFps = marginFps;
    this.cooldownMs = cooldownMs;
    this.recoverFrames = recoverFrames;
    this.enabled = enabled;

    this.level = 0;        // 0 = best quality
    this.emaMs = 0;        // smoothed ms per frame (0 until first frame)
    this.lastStepAt = 0;   // ms timestamp of last ladder step
    this.overTargetCount = 0; // consecutive frames comfortably over target
    this.frameCount = 0;
    this.steps = 0;        // total degradation steps taken (telemetry)
  }

  /** Feed one raw frame time (ms). Pure: no side effects. */
  recordFrame(frameMs) {
    if (frameMs <= 0) return this;
    this.frameCount++;
    this.emaMs = this.emaMs === 0
      ? frameMs
      : this.emaMs * EMA_SMOOTH + frameMs * (1 - EMA_SMOOTH);
    return this;
  }

  /**
   * Decide the next ladder level from the current EMA. `nowMs` is an explicit
   * monotonic clock so the harness can feed fake time deterministically.
   * Returns the resolved level (0..QUALITY_LADDER.length-1).
   */
  tick(nowMs) {
    if (!this.enabled || this.emaMs === 0) return this.level;

    const fps = 1000 / this.emaMs;
    const sinceStep = nowMs - this.lastStepAt;

    if (fps < this.targetFps) {
      // Degrade one step, never faster than the cooldown (anti-thrash).
      if (sinceStep >= this.cooldownMs) {
        this.level = Math.min(this.level + 1, QUALITY_LADDER.length - 1);
        this.lastStepAt = nowMs;
        this.steps++;
        this.overTargetCount = 0;
      }
    } else if (fps >= this.targetFps + this.marginFps) {
      // Comfortably over target: allow recovery, one step at a time.
      this.overTargetCount++;
      if (this.overTargetCount >= this.recoverFrames && sinceStep >= this.cooldownMs) {
        this.level = Math.max(this.level - 1, 0);
        this.lastStepAt = nowMs;
        this.overTargetCount = 0;
      }
    } else {
      this.overTargetCount = 0; // near target: hold steady
    }
    return this.level;
  }

  /**
   * Resolve the active quality knobs from (settings tier defaults, ladder).
   * @param {object} settings  Settings instance exposing `qualityParams()`.
   */
  resolve(settings) {
    const tier = settings.qualityParams ? settings.qualityParams() : {};
    const ladder = QUALITY_LADDER[this.level];
    return {
      level: this.level,
      postFx: ladder.postFx && tier.postFx !== false,
      pixelRatioCap: ladder.pixelRatioCap ?? tier.pixelRatio ?? 1,
      shadows: ladder.shadows && tier.shadowMap !== false,
      drawDistanceScale: (tier.drawDistanceScale ?? 1) * ladder.drawDistanceScale
    };
  }

  snapshot() {
    return {
      enabled: this.enabled,
      level: this.level,
      emaFps: this.emaMs ? 1000 / this.emaMs : null,
      targetFps: this.targetFps,
      steps: this.steps,
      frameCount: this.frameCount
    };
  }
}
