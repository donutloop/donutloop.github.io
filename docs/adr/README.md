# Worldloop Architecture Decision Records

This directory records accepted architecture decisions for Worldloop. Each ADR
is immutable once accepted; superseding decisions add a new ADR that references
the one it replaces.

| # | Title | Status |
|---|---|---|
| 0001 | Project scaffolding and module layout | Accepted |
| 0002 | Procedural city generation via SimplexNoise | Accepted |
| 0003 | Chunked infinite world with render-distance streaming | Accepted |
| 0004 | Removal of manual weather controls (automatic weather only) | Accepted |
| 0005 | Shared geometry cache + per-material InstancedMesh buildings | Accepted |
| 0006 | Node verification harness (`check_world.mjs`) | Accepted |
| 0007 | Dependency-free headless Chromium smoke via CDP | Accepted |
| 0008 | pi-loop agent workflow (`tools/pi-loop`) | Accepted |
| 0009 | Cloud visual improvements | Accepted |
| 0010 | Crosswalk timing integration | Accepted |
| 0011 | Per-material instanced buildings | Accepted |
| 0012 | Deterministic implicit road graph | Accepted |
| 0013 | Emergency-response system | Accepted |
| 0014 | Night-time window illumination | Accepted |
| 0015 | Post-processing pipeline (bloom + droplets) | Accepted |
| 0016 | Telemetry / frame-budget reporting (`window.frameBudget`) | Accepted |
| 0017 | Minimap + deterministic district labels | Accepted |
| 0018 | CI headless-browser smoke (`check_world.mjs --ci`) | Accepted |
| 0019 | Construction sites with animated tower cranes | Accepted |
| 0020 | Night-time window illumination (renumbered) | Accepted |
| 0021 | Bundled local build (drop CDN importmap) | Accepted |
| 0022 | Seeded deterministic RNG + fixed-timestep core | Accepted |
| 0023 | Layered architecture: App state machine, input abstraction, settings/save | Accepted |
| 0024 | AAA verification gates + asset/audio pipeline | Accepted |
| 0025 | Frame loop hygiene: one update per frame, clamped dt, frame budget (AAA-02) | Accepted |
| 0026 | Unified logical input (AAA-06) | Accepted |
| 0027 | Persisted settings (AAA-07) | Accepted |
| 0028 | Replay-safe save/load — `core/save.js` (AAA-08) | Accepted |

Newest decisions (0021–0028) are the foundation for the AAA migration phases in
`roadmap.md` Phase 8+; the full migration plan lives in `docs/aaa-migration-plan.md`.
