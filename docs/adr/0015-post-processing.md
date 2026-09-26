# 0015 — Post-Processing Pipeline (Bloom + Rain Droplets)

## Status
Accepted (Round 8 / Phase 3).

## Context
The roadmap wanted post-processing: bloom for neon districts and rain droplets,
as an `effects.js` pipeline stage plus a `check_world.mjs` flag. The existing
`EffectSystem` handled particles only, and the render loop called
`renderer.render(scene, camera)` directly (main.js callback) *and* again inside
`scene.js` `animate` — a latent double render.

The Node verification path (`check_world.mjs`) has no WebGL context, so a real
EffectComposer cannot run there. We need a single pipeline that renders through
a composer on the browser path but stays deterministic on the Node path.

## Decision

### New `PostProcessingPipeline` in `src/effects.js`
- Constructor takes `{ renderer, scene, camera }`; `enabled = !!renderer && !!scene && !!camera`.
- Browser path builds an `EffectComposer`: `RenderPass` → `UnrealBloomPass`
  (neon-district glow) → droplet `ShaderPass` (rain/snow overlay) → `OutputPass`.
- Node path: no renderer → `enabled=false`, no composer is built, but `update()`
  and `estimate()` still compute the exact bloom/droplet targets, so the machine
  path can assert determinism.

### Deterministic update
`update(weather, neonBoost)`:
- `droplets.intensity = clamp(precipAlpha, 0, 1)` — rain/snow overlay strength.
- `bloom.strength = clamp(neonBoost * 0.9, 0, 1.5)`.
- `bloom.threshold = clamp(0.25 + (1 - neonBoost) * 0.6, 0.1, 1.0)` — neon lowers
  the threshold so glow blooms.
- Applies to real passes on the browser path; only updates target state on Node.

### Render ownership
- `scene.js` `animate` no longer renders; the callback owns rendering
  (fixes the double-render).
- `main.js` computes `neonBoost` by traversing the scene for neon
  (0x00ffff / 0xff00ff) meshes, calls `postFx.update(weatherState, neonBoost)`
  each frame, then renders via `postFx.render()` when enabled (fallback:
  `renderer.render`).
- A `resize()` hook keeps bloom resolution in sync on window resize.

### Verification
`check_world.mjs` builds the pipeline with no renderer (`enabled=false`) and
asserts: passes exist; Node path disabled but deterministic; bloom strength
scales with neon; threshold lowers with neon; droplets scale with precipitation;
all targets finite. A `postFx` flag is added to the machine report.

## Consequences
- Neon districts get a bloom glow; rain/snow get an additive droplet overlay.
- Verification is deterministic without a GL context.
- Double render eliminated; telemetry now reads post-composer `renderer.info`.
- Browser path still falls back to plain `renderer.render` if disabled.
