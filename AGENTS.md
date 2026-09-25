# Agent Workflow

This is the root-level prompt for the coding agent building **Worldloop** — a
next-gen procedural city simulation rendered in Three.js. The agent must follow
these rules indefinitely — this is a loop, not a one-off.

## Two execution paths — both are first-class

The project has **two supported execution paths**, and they must stay in sync:

- **Browser** (`index.html` + `src/*.js`) — the human path. Pointer-lock controls,
  an infinite procedural city, traffic, pedestrians, parking, weather, clouds, and
  a readable HUD. This is the primary surface.
- **Node verification** (`check_world.mjs` + `tools/pi-loop/`) — the agent/CI path.
  Structured checks, ADR compliance, and deterministic git-driven progress so a
  script or agent can drive the loop without a human staring at a canvas.

Every feature must ship in **both** paths unless an ADR explicitly documents an
interactive-only or verification-only limitation. Keep `check_world.mjs` current
with every new system so an agent can confirm the city still builds.

## Mission

Build the best procedural city simulation ever known by humanity, rendered in
Three.js. Think like a true graphics-engine and city-simulation expert who loves
Three.js ergonomics. Every feature must consider the whole system:

- **World surface** — infinite procedural city generation with chunked streaming
  (long boulevards, varied districts, Wasteland Highways), intelligent traffic
  (cars obey lights, stop for obstacles, drive realistically), dynamic street
  parking, smart pedestrians (walk streets, avoid buildings, use crosswalks),
  diverse architecture (Classic Setback, Modern Glass, Art Deco, Brick
  Apartments, Cyberpunk Neon Towers), dynamic weather (Sun/Rain/Snow +
  365-day seasonal cycle), volumetric clouds, unreachable celestial bodies,
  airplanes, reflections, and real crash deformation.
- **Internal components** — a chunk manager (`Map`-keyed, render-distance
  streaming), per-system ES6 classes (traffic, pedestrians, parking, weather,
  airplanes, effects), shared geometry/material caches, `SimplexNoise`, the
  player controller, scene/renderer setup, and deformation physics. Keep them
  clean, layered, and extensible.
- **User experience** — a great browser UX: pointer-lock lock/unlock, clear HUD
  (score, version, weather), sensible defaults for render distance and pixel
  ratio, and fast frame rates despite dense geometry.
- **Agentic workflows** — this toolchain is not just for humans: it is also a
  city engine for agents and scripts. The interface must expose machine-readable
  output (`check_world.mjs`, ADRs in `docs/adr/`, structured git commits) and
  stable, self-describing state so an agent can discover the full surface, plan
  its build, and consume results without guessing.
- **Correctness** — every feature ships with checks (`check_world.mjs`), a
  browser smoke test (open `index.html`, confirm no console errors), and ADR
  coverage.

Be creative: prefer language-level features (new systems, geometry/material
caches, streaming, atmosphere, gameplay) over one-off magic numbers. Add builtins
only when they genuinely expand the city, the way a real engine's own systems do.

Think like somebody writing a brand-new Three.js city sim in 2026: modern WebGPU
readiness, instanced rendering, post-processing, streaming, and deterministic
verification — but readable and correct.

## The loop

1. Pick a new feature from the roadmap — `roadmap.md` (at the repo root) is the
   single source of truth for what exists and what is next. Each cycle selects
   the next planned item and drives it to done; do not invent off-roadmap
   features.
2. Implement across the stack:
   - geometry/material/module changes in `src/world.js` or a new `src/*.js`
   - the system class (e.g. `src/traffic.js`, `src/pedestrians.js`)
   - wiring in `src/main.js` / `src/scene.js`
   - an ADR in `docs/adr/` if the decision is non-obvious.
3. **Machine path** — if the feature is interface/state, make sure it is
   discoverable via `check_world.mjs` and consumable by the agent loop.
4. Add tests before committing: extend `check_world.mjs` where relevant, and run
   a browser smoke test (load `index.html`, assert no console errors).
5. Run tests before committing: `node check_world.mjs` must pass and the browser
   must render clean.
6. Commit with a clear message (`feat(traffic): ...`, `perf(streaming): ...`).
7. Always push. `git push origin HEAD`.
8. If the remote diverged, `git pull --rebase origin HEAD` then push again.
9. Return to step 1 and repeat — never stop evolving the city.

## New requirements

- Keep `AGENTS.md` and `roadmap.md` at the **repo root** — pi-loop reads them each
  round, so the agent always works from the latest plan.
- Every feature commit updates `roadmap.md` status (✅/🟠/🟢) and `docs/adr/` if the
  decision is non-obvious.
- Record each cycle's decisions, discoveries, and process lessons in
  `docs/adr/` and the roadmap's gap notes so the next round doesn't re-discover
  them.
- Keep `check_world.mjs` green; a feature is not done until its verification path
  is green.

## Rules

- One commit per feature; do not bundle unrelated features.
- Never commit failing tests or a red `check_world.mjs`.
- Never commit a change that breaks the browser render.
- Continue the loop even after pushes — the loop never stops.

## Getting started

- Read `roadmap.md` to find the current state and the next planned item.
- Read `docs/adr/` for accepted design decisions (geometry merging, object
  pooling, cloud instancing, unreachable celestial bodies).
- Read `src/main.js` first — it is the entry point and wires every system.
