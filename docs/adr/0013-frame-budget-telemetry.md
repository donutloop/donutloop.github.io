# 0013 — Frame-Budget Telemetry

## Status
Accepted (Round 5 / Phase 1).

## Context
The Phase 1 plan asked for "frame-budget telemetry in `check_world.mjs`
(report FPS and draw-call count as machine-readable output)". Before this,
`check_world.mjs` verified system APIs but gave no sense of how heavy the
city is — no draw-call budget, no achievable frame time — so an agent loop
could not tell whether a feature made the city faster or slower.

## Decision
Add a shared `src/telemetry.js` `FrameBudgetTelemetry` class usable by **both**
execution paths:

- **Browser path** (`main.js`) — feeds one real frame per `animate` tick via
  `telemetry.recordFrame(delta, renderer.info.render.calls,
  renderer.info.render.triangles)`; exposes `window.frameBudget` and a small
  HUD line (`fps N | dc N`) so a human can watch the live budget.
- **Machine/Node path** (`check_world.mjs`) — no WebGL context exists, so it
  uses scene-graph telemetry:
  - `countDrawCalls(root)` traverses the live THREE scene/group for renderable
    `Mesh` objects (each is one draw call; an `InstancedMesh` adds `count`
    instances) → draw-call estimate.
  - `measureFrameBudget(step, dt, frames)` runs a 120-frame synthetic loop
    stepping every real system (traffic, lights, weather, pedestrians,
    airplanes, effects) and measures real elapsed time → achievable FPS and
    average frame ms.

`check_world.mjs` reports `telemetry: { fps, frameMs, drawCalls, instances }`
as machine-readable JSON and asserts FPS > 0, drawCalls ≥ 1, and that the
120-frame loop completes.

## Consequences
- The agent loop gets a deterministic, browser-free frame-budget signal per
  build: draw-call count and achievable FPS.
- The browser keeps a live real budget (renderer draw calls + triangles) and
  exposes it on `window` for debugging.
- Telemetry is additive; it never changes simulation behaviour, so both paths
  stay green with no console errors.
