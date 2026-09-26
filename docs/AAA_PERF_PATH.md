# AAA Optimization Path — Worldloop (procedural city simulation)

Goal: reach triple-A-class performance on desktop WebGPU/WebGL2 budgets —
a steady 60 FPS at HIGH/ULTRA on a mid-2026 laptop, with sub-8 ms frame
budgets, no GC spikes, and streaming at 60+ km/h without hitch.

This path is prioritized by cost-per-frame, not by implementation effort.
Each phase is verifiable in `check_world.mjs` before it ships.

## Current state (post AAA-29b governor)

- 25 streamed chunks (renderDistance 2 × 34 m) × ~23 draws/chunk ≈ 575+ draw
  calls; cars/peds add per-entity draws.
- Single 2048² directional shadow (now ±80 frustum) — every instanced building
  + prop casts shadow.
- Fixed pipeline: full-res forward render + UnrealBloom post-fx.
- Per-frame `new THREE.Vector3`/`.clone()`/`.concat()` in traffic/pedestrians.
- Adaptive governor: post-fx → 1× pixels → shadows → chunk radius.

## P0 — Rendering: kill draw calls (biggest lever, ~60% of GPU time)

1. **District-level instancing.** Merge per-chunk InstancedMesh into one
   InstancedMesh per district (≈1 draw per building type per district) →
   ~575 → ~30 draws. three.js `FrustumCulled` then culls whole districts.
2. **Occlusion culling.** City has long sightlines; hardware occlusion query
   (EXT/WebGL2) or a precomputed online PVS skips occluded districts before
   their draw calls. Expect 2–4× on downtown.
3. **Material/texture atlas.** One material per surface type, atlas-albedo +
   per-instance UV tile → fewer state changes, GPU-friendly batching.

## P1 — Shadows: cascade + impostor shells (30–40% of GPU time)

4. **Cascaded shadow maps (CSM)** 2–3 cascades over the visible frustum;
   near cascade gets 2048², far cascade 1024². Current single map wastes
   texels on distant detail.
5. **Shadow impostor shells.** Shadow-cast geometry is a simplified shell per
   district (low-poly instanced boxes), not the full building mesh. Cuts
   shadow-pass verts ~5×.

## P2 — Geometry: HLOD / impostor streaming (memory + draw)

6. **Chunk LOD ladder.** near = full detail (instanced), mid = merged
   low-poly shell, far = billboard/impostor. Only 1 detail level today.
7. **Worker-thread streaming.** Chunk build/HLOD off the main thread
   (OffscreenCanvas / worker). Removes main-thread jank while driving.

## P3 — Simulation: data-oriented + zero-alloc (CPU, GC spikes)

8. **ECS/DOD arrays.** Replace per-frame `new THREE.Vector3`, `.clone()`,
   `.concat()` in traffic/pedestrians/parking with preallocated typed arrays
   and a scratch pool. Kills GC spikes that cause frame hitches.
9. **Fixed-timestep job graph.** Sim runs on worker threads at fixed 60 Hz;
   render reads a double-buffered state. Already fixed-timestep; add workers.

## P4 — Present: adaptive resolution + temporal upscale

10. **Dynamic resolution scaling (DRS).** Render at 0.85×/0.70× internal
    resolution under load and upscale — the AAA-standard primary lever
    (implemented below as extra governor rungs, cheaper than disabling
    shadows).
11. **TAA + temporal upsampling** to hide the DRS res change; post-fx stays
    on at 1× during normal play.

## P5 — Telemetry-driven quality (AAA live tuning)

12. Add per-frame budgets to `telemetry.js`: draw calls, shadow passes, sim
    ms, GC pauses. The governor already keys on frame ms; extend it to budget
    **draw calls** and **shadow passes** directly so it sheds the exact
    bottleneck, not just the cheapest lever.

## Acceptance (all verifiable in check_world.mjs)

- 60 FPS steady at HIGH/ULTRA, draw-call budget < 120.
- No `new THREE` in sim hot loop (lint/static check).
- District instancing: draw calls per frame tracked and asserted.
- CSM: shadow-cascade count tracked; impostor shell verts asserted.
