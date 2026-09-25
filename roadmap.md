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
- **⏳ PLANNED** Instanced buildings — replace per-building meshes with
  `InstancedMesh` per district style to cut draw calls (clouds already use
  instancing; apply the same pattern to buildings).
- **⏳ PLANNED** Render-distance LOD — far chunks swap to low-poly/instanced
  silhouettes; near chunks keep detail.
- **⏳ PLANNED** Frame-budget telemetry in `check_world.mjs` (report FPS and
  draw-call count as machine-readable output).

## Phase 2 — city-simulation depth

- Traffic + traffic lights ✅ DONE
- Street parking ✅ DONE
- Smart pedestrians (crosswalks, obstacle avoidance) ✅ DONE
- **⏳ PLANNED** Road-network graph — build an implicit directed graph from the
  chunk grid so cars can follow realistic routes instead of pure lane-following;
  expose it to `check_world.mjs` so the agent can verify connectivity.
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
- **⏳ PLANNED** Post-processing (bloom for neon districts, rain droplets) —
  add a `src/effects.js` pipeline stage and a `check_world.mjs` flag.

## Phase 4 — gameplay

- Driving (enter/exit car, pointer-lock) ✅ DONE
- Crash deformation ✅ DONE
- Taxi, giga tower, trees ✅ DONE
- **⏳ PLANNED** Minimap / district label HUD — render a small canvas map of
  streamed chunks + current district name, so the player can navigate.
- **⏳ PLANNED** Weather-reactive driving (snow/rain reduce friction; expose as
  a `weather` field in `check_world.mjs` output).
- **⏳ PLANNED** Dynamic city events — emergency response & sirens. Spawn
  ambulance / fire / police vehicles on crash incidents (hook the existing
  `deformation.js` crash path), add a pooled EMS class to `traffic.js` with
  siren + rotating-light effects via `effects.js`, and lane-clearing priority
  so ordinary cars yield ahead. Expose an `events` counter in `check_world.mjs`
  so the agent loop can verify incident → response coverage.

## Phase 5 — tooling / agentic

- `check_world.mjs` structured verification ✅ DONE
- `docs/adr/` accepted-decision log ✅ DONE
- `tools/pi-loop/` agent loop ✅ DONE
- **⏳ PLANNED** CI smoke — `node check_world.mjs` + a headless browser render
  assertion on every commit (one `check_world.mjs --ci` mode).

## Gaps & notes (for the next cycle)

- **Gap A — instanced buildings**: biggest draw-call win; reuse the
  `weather.js` instancing pattern. Land before LOD so LOD has a baseline.
- **Gap B — road-network graph**: needed for realistic traffic; keep it a pure
  data structure (`src/road_graph.js`) so `check_world.mjs` can assert
  connectivity without a browser.
- **Gap C — crosswalk timing** ✅ resolved (ADR 0010): small, self-contained;
  done as Round 2 — cars yield at crosswalks via `pedestrianNearCrosswalk`.
- **Gap D — emergency events**: gameplay-depth win built on the already-done
  crash/deformation + pooled-traffic systems; needs an EMS vehicle type, an
  `events` telemetry field, and a siren/light effect stage.
- **Resolved ✅**: `check_world.mjs` rebuilt as a real structured verification
  harness. It runs the ACTUAL src systems in Node against the real `three`
  package (installed as a dev dep via `package.json`), instantiates every system,
  calls their update() loops, asserts API behavior (traffic speeds, weather day,
  chunk builders, player wiring, deformation, noise), verifies `main.js` wiring,
  and emits machine-readable JSON with per-check pass/fail + summary.
  `npm install` (three@0.160.0) + `node check_world.mjs` → 23/23 green, exit 0.
  This is the agent loop's deterministic surface/feature verification gate.
- Every feature must keep both paths green: browser render + `check_world.mjs`.

## Definition of done

A feature is ✅ DONE only when: it ships as one commit; the browser renders it
with no console errors; `node check_world.mjs` passes; `roadmap.md` status is
updated; and a `docs/adr/` entry exists if the decision is non-obvious.
