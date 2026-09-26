# Worldloop → AAA Browser Game: Migration Plan

A production-grade transformation plan for **Worldloop** — a procedural city
simulation rendered in Three.js. This document records the current-state
assessment, the architectural debt, and a phased migration that keeps the game
**runnable at every step** (per `AGENTS.md`: one commit per feature, keep
`check_world.mjs` green, never break the browser render).

Status: **PLANNED** — drives the new items in `roadmap.md` (Phase 8+).

---

## 1. Current-state inventory (verified)

### Entry & runtime
| File | Role |
|---|---|
| `index.html` | Single HTML page; loads `three@0.160.0` **from the unpkg CDN** via an inline `importmap` (`"three"` / `"three/addons/"`). No local dependency, no integrity pinning, no offline. |
| `src/main.js` | Imperative `init()`: builds scene, world, systems; owns the rAF game loop; computes `delta` from `performance.now()`; calls `chunkManager.update()` **twice per frame**; renders through the post-FX composer. |
| `src/scene.js` | `initScene()` — `PerspectiveCamera(75, aspect, 0.1, 20000)`, `WebGLRenderer` (antialias, high-performance, PCFSoftShadowMap, ACES tone mapping, `RoomEnvironment` PMREM env map), resize handler. `animate(cb)` schedules rAF then calls `cb` **synchronously** (no delta passed; main.js computes its own). |

### World & streaming
| File | Role |
|---|---|
| `src/world.js` | Procedural city chunk generation. Module-level **shared material cache**, shared `1x1x1` unit `BoxGeometry` for buildings, per-material `InstancedMesh` buildings, `BufferGeometryUtils.mergeGeometries` for trees/infrastructure, construction sites, night window lights. `createWorld()` returns lighting + materials + world dims. |
| `src/chunk_manager.js` | `Map`-keyed chunks (`"cx,cz"`), `renderDistance=3`, `lodDistance=2` (player-relative), load/LOD/unload throttled to **1 chunk per frame**. `getColliders()` concatenates all chunk + parking + traffic colliders **every frame** (O(n) per frame — no spatial structure). |

### Simulation systems
| File | Role |
|---|---|
| `src/traffic.js` | Cars obey lights, stop for obstacles, route via `road_graph.js`. |
| `src/traffic_lights.js` | Shared clock; Ns/Ew green/yellow/all-red cycle. |
| `src/parking.js` | Curbside parking rows per chunk. |
| `src/pedestrians.js` | Steering-behavior peds; crosswalks, building avoidance, ragdoll on hit. |
| `src/airplanes.js` | Ambient fly-through aircraft. |
| `src/emergency.js` | Pooled EMS fleet (ambulance/fire/police) dispatched on crash. |
| `src/construction.js` | Animated tower cranes at construction sites. |
| `src/weather.js` | Automatic probabilistic weather; modulates lights/fog/precip; **manual weather controls were removed (ADR 0004)**. |
| `src/effects.js` | Particles/emitters/sirens + `PostProcessingPipeline` (EffectComposer → RenderPass → UnrealBloomPass → droplet ShaderPass → OutputPass). Fixed single quality; no settings/adaptive tiering. |
| `src/road_graph.js` | Deterministic implicit directed road graph for routing. |
| `src/car_models.js` | Procedural car/EMS mesh builders (own material set). |
| `src/deformation.js` | Crash deformation vertex physics. |
| `src/telemetry.js` | FPS/draw-call telemetry exposed as `window.frameBudget`. |
| `src/minimap.js` | Canvas chunk-grid minimap + deterministic district labels. |
| `src/utils.js`, `src/noise.js` | Helpers; `SimplexNoise` permutation table seeded from `Math.random()` at module load. |

### Verification / automation (already strong)
| File | Role |
|---|---|
| `check_world.mjs` | Node harness: runs **real systems against the real three package**, asserts API behavior, emits machine-readable JSON. **75/75 pass, exit 0** (verified). |
| `tools/ci/headless_cdp.mjs` | Dependency-free CDP driver; `node check_world.mjs --ci` headless-Chromium render smoke. |
| `tools/pi-loop/` | pi SDK agent loop driving `AGENTS.md`. |

### Gaps found (no CI/CD, no assets, no tests, no docs accuracy)
- **No `.github/workflows`** — nothing runs `check_world.mjs --ci` in CI.
- **No unit-test framework** — only the Node harness + headless smoke.
- **No asset pipeline** — everything is procedural geometry; no GLTF/GLB,
  textures, KTX2, audio.
- **No persistence, settings, or game states.**
- **Docs drift**: `README.md` still tells players `1/2/3` changes weather, but
  ADR 0004 removed manual weather and `player.js` has no `1/2/3` handler.

---

## 2. Architectural debt (specific)

1. **CDN importmap, no bundler** — runtime network dependency on unpkg; no
   tree-shaking, code-splitting, version pinning, or offline story.
2. **Fragile loop** — `scene.js` `animate(cb)` calls `cb` synchronously after
   scheduling; `main.js` calls `chunkManager.update()` twice per frame; no
   fixed timestep, no frame-budget enforcement, no pause hook, no determinism.
3. **No state machine** — no menu / playing / paused / loading; `init()` is a
   monolithic imperative sequence; no save/load/settings.
4. **Raw DOM input** — `player.js` binds `keydown`/`keyup` directly; no action
   mapping, no remap, no touch/gamepad, no UI/gameplay input separation.
5. **Non-deterministic RNG** — `SimplexNoise` seeds its 256-entry permutation
   from `Math.random()` at load: deterministic *within* a session only, **not
   across** sessions/runs. Blocks reproducible E2E and replay.
6. **O(n) collision gather** — `ChunkManager.getColliders()` re-concatenates
   every chunk + car + parked-car box each frame; no broadphase/octree.
7. **Renderer resilience** — no WebGL capability detection, no context-loss
   recovery, no pixel-ratio cap, no shadow-map budget, no quality tiers.
8. **Material/geometry duplication** — `matCloud` defined in `world.js` and
   re-created in `weather.js` `initClouds()`; glass/neon merged to single
   materials in `world.js` (detail loss); car models own a separate set.
9. **Fixed post-FX** — single bloom+droplet composer; no per-quality settings.
10. **No assets/audio** — nothing to stream, nothing to preload.
11. **Docs drift** — README weather keys vs ADR 0004; `AGENTS.md` has no AAA
    phase, so the loop has no target.

---

## 3. Target architecture (AAA, layered)

```text
entry (index.html) → boot (main.js) → App (state machine)
  ├─ core/    config, events, time (fixed step), rng (seeded), save
  ├─ world/   chunk mgr (spatial), world.js, road graph, biome
  ├─ systems/ traffic, lights, parking, peds, planes, EMS, construction,
  │           weather, effects, minimap
  ├─ render/  scene, camera, renderer (capability tiers), postfx (settings),
  │           asset loader (GLB/KTX2), audio (WebAudio bus)
  ├─ ui/      HUD, menu, pause, settings, loading, dialog, a11y
  └─ input/   action-map, keyboard/mouse/touch/gamepad adapters
verification: check_world.mjs (unit+integration) + ci/ (headless, visual, perf)
```

Decisions are recorded in `docs/adr/ADR-0021..0024`. Every migration phase
below keeps the current `check_world.mjs` green and the browser render clean.

---

## 4. Phased migration (each phase ships green)

### Phase 8 — Foundation hardening (keep runnable)
| ID | Task | Files | Dep | Complexity |
|---|---|---|---|---|
| AAA-01 | Adopt a local build: move three to a dev-dep + bundle, replace CDN importmap | `package.json`, `index.html`, new `build/` | — | M |
| AAA-02 | Fix the loop: single `update()` per frame, explicit `dt`, clamp, frame budget | `scene.js`, `main.js` | AAA-01 | S |
| AAA-03 | Seeded deterministic RNG (xorshift) replacing `Math.random()` in noise/roads | `noise.js`, `road_graph.js`, `utils.js` | — | S |
| AAA-04 | Fixed-timestep `Time` core (accumulator, `update(dt)`/`render()` split) | `core/time.js`, `main.js` | AAA-02 | M |

### Phase 9 — State machine, input, persistence (runnable, playable)
| ID | Task | Files | Dep | Complexity |
|---|---|---|---|---|
| AAA-05 | ✅ DONE — `App` state machine (boot/loading/menu/playing/paused/gameover) + pause hook. `src/core/app.js`; frozen states pause the sim clock, playing resumes; deterministic transition log + `snapshot()`; P key routes through `app.togglePause()`; wired into main.js (boot→loading→playing); check_world.mjs asserts flow/clock/pause. | `core/app.js`, `main.js` | AAA-04 | M |
| AAA-06 | Input abstraction: action-map + keyboard/mouse/touch/gamepad adapters; remove raw DOM bindings | `input/*`, `player.js` | AAA-05 | M |
| AAA-07 | Settings (quality tiers, controls remap, audio) persisted to localStorage | `core/settings.js`, `ui/settings.js` | AAA-05,06 | M |
| AAA-08 | Save/load: serialize world seed, player state, progress; replay-safe | `core/save.js`, `core/rng.js` | AAA-03,07 | L |

### Phase 10 — World scale & spatial (performance headroom)
| ID | Task | Files | Dep | Complexity |
|---|---|---|---|---|
| AAA-09 | Spatial broadphase (uniform grid) replacing per-frame `getColliders()` concat | `chunk_manager.js`, `world/spatial.js` | AAA-04 | M |
| AAA-10 | Chunk LOD/pooling + streaming budget; avoid double-update | `chunk_manager.js`, `world.js` | AAA-09 | L |
| AAA-11 | Renderer resilience: capability tiers, pixel-ratio cap, context-loss recovery, shadow budget | `render/renderer.js` (from `scene.js`) | AAA-07 | M |

### Phase 11 — Asset & audio pipeline
| ID | Task | Files | Dep | Complexity |
|---|---|---|---|---|
| AAA-12 | Asset loader (GLTF/GLB + KTX2/Basis + streaming + preload manifest) | `render/assets.js`, new `assets/` | AAA-01 | L |
| AAA-13 | WebAudio bus: master/music/sfx buses, pooling, mute/pause | `audio/*` | AAA-07 | M |
| AAA-14 | Convert hero props (crane, cars, EMS) to authored GLB + textures with LOD | `assets/*`, `car_models.js` | AAA-12 | M |

### Phase 12 — UI, a11y, post-FX quality
| ID | Task | Files | Dep | Complexity |
|---|---|---|---|---|
| AAA-15 | Real UI layer (HUD, menu, pause, settings, loading, dialog) w/ accessibility | `ui/*` | AAA-05 | L |
| AAA-16 | Post-FX quality tiers from settings (bloom/droplets on/off by tier) | `effects.js`, `render/postfx.js` | AAA-07 | M |

### Phase 13 — Verification & CI/CD (AAA release gates)
| ID | Task | Files | Dep | Complexity |
|---|---|---|---|---|
| AAA-17 | Unit-test runner (node) around `check_world.mjs` systems; seeded fixtures | `tests/*`, `check_world.mjs` | AAA-03 | M |
| AAA-18 | Visual-regression (headless screenshots, seeded determinism) | `tools/ci/visual.mjs`, `tests/` | AAA-03,17 | M |
| AAA-19 | Perf-regression (frame-budget telemetry thresholds in CI) | `telemetry.js`, `tools/ci/perf.mjs` | AAA-02,18 | M |
| AAA-20 | GitHub Actions CI/CD: build → unit → headless smoke → visual → perf → deploy | `.github/workflows/*` | AAA-17..19 | M |

### Phase 14 — AAA content & polish
| ID | Task | Files | Dep | Complexity |
|---|---|---|---|---|
| AAA-21 | Save/continue + session persistence UI (title, resume, settings) | `ui/*`, `core/save.js` | AAA-08 | L |
| AAA-22 | Gameplay loop: objectives/score/checkpoint/progression + telemetry events | `core/objectives.js`, `telemetry.js` | AAA-05,19 | L |
| AAA-23 | Audio/music integration into systems (EMS siren, weather, UI) | `audio/*` | AAA-13,22 | S |
| AAA-24 | Authoring + polish pass: hero assets, lighting, post-FX, accessibility, README/docs accuracy | `assets/*`, docs | AAA-14..16 | L |

---

## 5. Definition of "done" for AAA

1. `check_world.mjs` green at every phase; headless smoke passes in CI.
2. Bundled local build (no CDN); deterministic seeded runs; fixed timestep.
3. Game states (boot/loading/menu/playing/paused) with save/resume.
4. Input abstraction (kbd/mouse/touch/gamepad) + remappable controls.
5. Settings (quality tiers) persisted; renderer resilient (tiers, context-loss).
6. Spatial broadphase; streaming chunks; authored GLB/KTX2 assets; audio bus.
7. Unit + visual + perf regression in GitHub Actions; deployable artifact.
8. Docs accurate (README, roadmap, ADRs) — no drift.
