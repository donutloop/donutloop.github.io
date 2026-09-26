# Worldloop Roadmap

Single source of truth for what exists and what is next in **Worldloop** — a
next-gen procedural city simulation built in Three.js. Each cycle picks the next
⏳ PLANNED item from a phase below and drives it to ✅ DONE (one commit per
feature). Status legend: ✅ DONE · 🟢 mostly done (small leftovers) · 🟠 partial ·
⏳ PLANNED (next work).

## Component map (verified against code)

| Component | File(s) | State |
|---|---|---|
| Entry / system wiring / HUD | `src/main.js` | ✅ done |
| Scene + renderer setup | `src/scene.js` | ✅ done |
| Procedural geometry + material cache | `src/world.js` | ✅ done |
| Chunked infinite-city streaming | `src/chunk_manager.js` | ✅ done |
| Traffic (cars obey lights, avoid obstacles) | `src/traffic.js` | ✅ done |
| Traffic lights | `src/traffic_lights.js` | ✅ done |
| Dynamic street parking | `src/parking.js` | ✅ done |
| Smart pedestrians (crosswalks, avoidance) | `src/pedestrians.js` | ✅ done |
| Player controller / driving | `src/player.js` | ✅ done |
| Car models | `src/car_models.js` | ✅ done |
| Weather + 365-day seasons | `src/weather.js` | ✅ done |
| Volumetric clouds (instanced, infinite scroll) | `src/weather.js` | ✅ done |
| Airplanes | `src/airplanes.js` | ✅ done |
| Crash deformation physics | `src/deformation.js` | ✅ done |
| Visual effects | `src/effects.js` | ✅ done |
| Simplex noise | `src/noise.js` | ✅ done |
| Browser entry | `index.html` + `style.css` | ✅ done |
| Agent verification | `check_world.mjs` | ✅ done |
| Accepted design decisions | `docs/adr/0001..0009` | ✅ done |
| Agent loop | `tools/pi-loop/` | ✅ done |

## Phase 0 — hygiene

- Version reconciled (`v6.4.2` in README/HUD). ✅ DONE
- README + screenshots reflect current city. ✅ DONE
- ADR index (`docs/adr/README.md`) lists all 9 accepted decisions. ✅ DONE

## Phase 1 — performance / streaming (2026)

Modern Three.js city sims don't draw every building as its own mesh. The ADRs
(geometry merging `0006`, object pooling `0007`) are accepted; land them fully.

- Geometry merging for buildings/road tiles ✅ DONE (ADR 0006)
- Object pooling for cars/pedestrians ✅ DONE (ADR 0007)
- **✅ DONE (Round 3 / Gap A)** Instanced buildings — buildings are authored
  once as a shared `1x1x1` unit `BoxGeometry` and drawn as one `InstancedMesh`
  per material (ADR 0011); per-instance matrices replace duplicated merged
  vertex buffers.
- **✅ DONE (Round 4 / Gap B)** Render-distance LOD — far city chunks build
  low-poly instanced silhouettes (coarse concrete boxes, no foliage/lights,
  no population); near chunks keep full detail. ChunkManager upgrades/downgrades
  a chunk when it crosses `lodDistance` (ADR 0012).
- **✅ DONE (Round 5 / ADR 0013)** Frame-budget telemetry — shared
  `src/telemetry.js` reports FPS + draw-call count as machine-readable JSON in
  `check_world.mjs` (scene-graph draw calls + synthetic achievable FPS), and the
  browser path records real `renderer.info` per frame, exposes `window.frameBudget`,
  and shows a `fps N | dc N` HUD line.

## Phase 2 — city-simulation depth

- Traffic + traffic lights ✅ DONE
- Street parking ✅ DONE
- Smart pedestrians (crosswalks, obstacle avoidance) ✅ DONE
- **✅ DONE (Round 6)** Road-network graph — `src/road_graph.js` builds a
  deterministic implicit directed graph over the chunk grid (nodes at road
  cells, directed edges along shared road axes, two-way). Cars turn at
  intersections onto perpendicular roads via the graph instead of pure
  lane-following. Exposed to `check_world.mjs` (connectivity + shortest-path +
  turn checks) and wired into `main.js` / `TrafficSystem`.
- Crosswalk timing integration — pedestrians and traffic lights share one clock so
  cars yield at crosswalks with a pedestrian present. ✅ DONE (ADR 0010)

## Phase 3 — atmosphere / visual quality

- 365-day seasonal cycle ✅ DONE (ADR 0001)
- Automatic probabilistic weather transitions ✅ DONE (ADR 0002)
- Fixed 10-minute day ✅ DONE (ADR 0003)
- Manual weather controls removed ✅ DONE (ADR 0004)
- Sync start date with real world ✅ DONE (ADR 0005)
- Unreachable celestial bodies ✅ DONE (ADR 0008)
- Cloud visual improvements (instanced, 3 sizes, infinite scroll) ✅ DONE (ADR 0009)
- Reflections ✅ DONE
- Tone mapping / ACES ✅ DONE
- **✅ DONE (Round 8)** Post-processing (bloom for neon districts, rain droplets) —
  added `PostProcessingPipeline` to `src/effects.js`: EffectComposer with
  RenderPass → UnrealBloomPass (neon-district glow) → droplet ShaderPass
  (rain/snow overlay) → OutputPass. Browser renders through the composer
  (main.js); Node path keeps `update()` deterministic (`enabled=false`) so
  `check_world.mjs` asserts bloom/droplet targets without a WebGL context.
  Added a `postFx` flag + 6 checks to `check_world.mjs`. ADR 0015.

## Phase 4 — gameplay

- Driving (enter/exit car, pointer-lock) ✅ DONE
- Crash deformation ✅ DONE
- Taxi, giga tower, trees ✅ DONE
- **✅ DONE (Round 9)** Minimap / district label HUD — small canvas map of
  streamed chunks + current district name, so the player can navigate.
  `src/minimap.js` `Minimap`: deterministic district labels via SimplexNoise
  over chunk coords (same world pos -> same district), draws a 160x160 canvas
  of the biome grid around the player, machine-readable in `check_world.mjs`
  (ADR 0016).
- **✅ DONE (Round 10)** Weather-reactive driving — snow/rain reduce tire grip
  in the player car (longer stopping distance, lower top speed/acceleration) via
  a deterministic `Player.getDrivingModifiers()` model; exposed as a
  machine-readable `weather` field (`current` + `driving` mods) in
  `check_world.mjs` output. ADR 0017.
- **✅ DONE (Round 7 / Gap D)** Dynamic city events — emergency response &
  sirens. Added `src/emergency.js` `EmergencySystem` (pooled ambulance / fire /
  police fleet), new EMS vehicle builders in `car_models.js`, siren +
  rotating-light effects via `effects.js`, crash hook in `player.js`, and
  lane-clearing priority in `traffic.js` so ordinary cars yield ahead. Exposed
  an `events` counter + `EmergencySystem` checks in `check_world.mjs` (53/53
  green). ADR 0014.

## Phase 5 — tooling / agentic

- `check_world.mjs` structured verification ✅ DONE
- `docs/adr/` accepted-decision log ✅ DONE
- `tools/pi-loop/` agent loop ✅ DONE
- **✅ DONE (Round 11)** CI smoke — `node check_world.mjs --ci` runs the
  structured checks PLUS a headless browser render assertion (dependency-free
  CDP driver `tools/ci/headless_cdp.mjs`, self-describing `window.__worldloop`
  ready signal in `src/main.js`). ADR 0018. It caught a browser-only ordering
  bug (`emergencySystem` wired before `Player` existed).

## Gaps & notes (for the next cycle)

- **Gap A — instanced buildings** ✅ RESOLVED (ADR 0011): building geometry
  is authored once (shared unit `BoxGeometry`) and rendered as per-material
  `InstancedMesh`, cutting retained vertex/memory cost before LOD work.
  **Gap B — render-distance LOD** ✅ RESOLVED (ADR 0012, Round 4): far city
  chunks build low-poly instanced silhouettes (coarse concrete boxes, no
  foliage/lights/population); ChunkManager rebuilds a chunk when it crosses
  `lodDistance`. Next: **Frame-budget telemetry** (Phase 1).
- **Gap B — road-network graph**: needed for realistic traffic; keep it a pure
  data structure (`src/road_graph.js`) so `check_world.mjs` can assert
  connectivity without a browser.
- **Gap C — crosswalk timing** ✅ resolved (ADR 0010): small, self-contained;
  done as Round 2 — cars yield at crosswalks via `pedestrianNearCrosswalk`.
- **Gap D — emergency events ✅ DONE (Round 7)**: gameplay-depth win built on
  the already-done crash/deformation + pooled-traffic systems. Added an EMS
  vehicle type, an `events` telemetry field, and a siren/light effect stage.
  ADR 0014.
- **Resolved ✅**: `check_world.mjs` rebuilt as a real structured verification
  harness. It runs the ACTUAL src systems in Node against the real `three`
  package (installed as a dev dep via `package.json`), instantiates every system,
  calls their update() loops, asserts API behavior (traffic speeds, weather day,
  chunk builders, player wiring, deformation, noise), verifies `main.js` wiring,
  and emits machine-readable JSON with per-check pass/fail + summary.
  `npm install` (three@0.160.0) + `node check_world.mjs` → 23/23 green, exit 0.
  This is the agent loop's deterministic surface/feature verification gate.
- Every feature must keep both paths green: browser render + `check_world.mjs`.


## Phase 6 — living skyline (active construction sites) ✅ DONE

- New `src/construction.js` `ConstructionSystem` — animates tower cranes at active construction sites.
- `world.js` `createCityChunk` now deterministically turns some corner lots into construction sites:
  a partially-built concrete core, dark-metal scaffolding frame, and a tower crane (mast + rotating
  jib + counterweight + hoisted hook block + cable). The origin chunk always carries one crane so
  verification is deterministic.
- Cranes are regular (non-instanced) meshes so `ConstructionSystem.update(delta)` can swing the jib
  (phase advances by `delta * SPEED`) and hoist the hook block; the animation is reproducible.
- Wired into `ChunkManager.loadChunk/unloadChunk` (via `chunkData.construction`) and `main.js`
  (`constructionSystem.update(delta)` in the animate loop).
- Verified in `check_world.mjs`: origin chunk carries a crane, `craneCount()` matches loaded sites,
  jib rotation advances by `delta * SPEED`, and `main.js` wires `ConstructionSystem`.
- ADR-0019 documents the decision (deterministic construction placement + animated crane system).

## Phase 7 — city at night (window illumination)

- Night-time window illumination: buildings get emissive "lit window" panels on their road-facing
  facades, driven by the day/night cycle. At night windows glow warm yellow; by day they dim to
  near-invisible dark panels.
- `world.js`: `matWindow` (transparent warm MeshBasicMaterial) added to the shared material cache as
  `window`; `addWindowLights` lays a deterministic grid of lit windows (SimplexNoise over position, so
  the same building always shows the same lit windows), merged into a single InstancedMesh.
- `weather.js`: completes the previously-dangling `materials.window` reference — `updateTimeCycle`
  now modulates window color AND opacity (0.08 day → 1.0 night).
- Verified in `check_world.mjs`: `world.materials.window` present, window panels merged as an
  InstancedMesh sharing `world.materials.window`, and weather lights windows at night / dims by day.
- ADR-0020 documents the decision (night-time window illumination via shared emissive material).

## Definition of done

A feature is ✅ DONE only when: it ships as one commit; the browser renders it
with no console errors; `node check_world.mjs` passes; `roadmap.md` status is
updated; and a `docs/adr/` entry exists if the decision is non-obvious.

---

# AAA transformation (Phase 8+) — triple-A browser game

Driving plan: `docs/aaa-migration-plan.md`. Decisions: `docs/adr/ADR-0021..0024`.
Each item ships green: `check_world.mjs` passes, browser render clean, one commit per feature.

## Phase 8 — foundation hardening

- **✅ DONE (AAA-01)** Adopt a local build (Vite/esbuild); move three to a pinned dev-dep; replace the CDN importmap in `index.html` with a bundled entry. *(ADR 0021)* M — esbuild bundles `src/main.js` → `dist/worldloop.js`; `npm run dev` serves offline; CI smoke builds then renders.
- **✅ DONE (AAA-02)** Fix the loop: exactly one `update()` per frame, explicit `dt`, clamp, frame budget. `src/loop.js`, `scene.js`, `main.js`. *(ADR 0025)* S
- **✅ DONE (AAA-03, Round 3)** Seeded deterministic RNG (xorshift) replacing `Math.random()` in `noise.js` (road_graph.js already deterministic). `src/core/rng.js`, `setSeed(DEFAULT_SEED)` in `main.js`, seeded-noise checks in `check_world.mjs`. *(ADR 0022)* S
- **✅ DONE (AAA-04): Fixed-timestep `core/time.js`** — accumulator, `update(fixedDt)`/`render()` split, frame-budget clamp, pause/resume (P key). `src/core/time.js`; wired into main.js; telemetry.recordClock; check_world.mjs asserts determinism/clamp/pause/wiring.

## Phase 9 — state machine, input, persistence

- **✅ DONE (AAA-05) `core/app.js` state machine** — boot/loading/menu/playing/paused/gameover; owns the pause hook (frozen states pause the sim clock, playing resumes); deterministic transition log + `snapshot()`; P key routes through `app.togglePause()`. `src/core/app.js`, wired into main.js, check_world.mjs asserts flow/clock/pause. *(ADR 0023)* M
- **✅ DONE (AAA-06)** `src/input/` logical ActionMap + keyboard/mouse/touch/gamepad adapters + InputManager (held actions + one-shot edge-triggered events). `player.js` consumes the InputManager and owns no raw DOM key/mouse input bindings; click-to-play overlay + pause key moved into the input module; main.js wires pause->App.togglePause and lock->Player. *(ADR 0023)* M
- **✅ DONE (AAA-07)** `core/settings.js`: quality tiers (`low/medium/high/ultra` → pixel-ratio cap, draw-distance scale, postFx flag), control remap persisted + rehydrated into the InputManager ActionMap, audio prefs; JSON persistence via a Node-safe localStorage shim; `main.js` wires it as the single source of truth (renderer cap, chunk radius, input remap). *(ADR 0027)* M
- **AAA-08** `core/save.js`: serialize seed + player state + progress; replay-safe. *(ADR 0022/0023)* L

## Phase 10 — world scale & spatial

- **AAA-09** Spatial broadphase (uniform grid) replacing per-frame `getColliders()` concat in `chunk_manager.js`. M
- **AAA-10** Chunk LOD/pooling + streaming budget; remove the double `update()` in `main.js`. L
- **AAA-11** Renderer resilience: capability tiers, pixel-ratio cap, context-loss recovery, shadow budget. *(ADR 0023)* M

## Phase 11 — asset & audio pipeline

- **AAA-12** `render/assets.js`: GLTF/GLB + KTX2/Basis loader, streaming, preload manifest. *(ADR 0024)* L
- **AAA-13** WebAudio bus: master/music/sfx buses, pooling, mute/pause. *(ADR 0024)* M
- **AAA-14** Convert hero props (cranes, cars, EMS) to authored GLB + textures with LOD. *(ADR 0024)* M

## Phase 12 — UI, a11y, post-FX quality

- **AAA-15** Real UI layer: HUD, menu, pause, settings, loading, dialog; accessibility. *(ADR 0023)* L
- **AAA-16** Post-FX quality tiers from settings (bloom/droplets on/off by tier). *(ADR 0023)* M

## Phase 13 — verification & CI/CD (AAA release gates)

- **AAA-17** Node unit-test runner seeded from `core/rng.js`; fixtures around `check_world.mjs` systems. *(ADR 0024)* M
- **AAA-18** Headless visual-regression screenshots (seeded determinism). *(ADR 0022/0024)* M
- **AAA-19** Perf-regression thresholds over `telemetry.js` frame budget. *(ADR 0024)* M
- **AAA-20** GitHub Actions CI/CD: build → unit → smoke → visual → perf → deploy. *(ADR 0021/0024)* M

## Phase 14 — AAA content & polish

- **AAA-21** Save/continue + session persistence UI (title, resume, settings). *(ADR 0023)* L
- **AAA-22** Gameplay loop: objectives/score/checkpoint/progression + telemetry events. *(ADR 0023)* L
- **AAA-23** Audio/music integration (EMS siren, weather, UI). *(ADR 0024)* S
- **AAA-24** Authoring + polish pass: hero assets, lighting, post-FX, accessibility, README/docs accuracy. *(ADR 0021..0024)* L

## AAA definition of done

1. `check_world.mjs` green at every phase; headless smoke passes in CI.
2. Bundled local build (no CDN); deterministic seeded runs; fixed timestep.
3. Game states (boot/loading/menu/playing/paused) with save/resume.
4. Input abstraction (kbd/mouse/touch/gamepad) + remappable controls.
5. Settings (quality tiers) persisted; renderer resilient (tiers, context-loss).
6. Spatial broadphase; streaming chunks; authored GLB/KTX2 assets; audio bus.
7. Unit + visual + perf regression in GitHub Actions; deployable artifact.
8. Docs accurate (README, roadmap, ADRs) — no drift.
