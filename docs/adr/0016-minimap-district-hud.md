# ADR 0016 — Minimap / District-Label HUD

**Status:** Accepted (Round 9)

## Context

The city is procedural and infinite; players have no way to see the streamed
chunk grid or know where they are. We want a small HUD minimap (streamed chunks
+ player position + current district name) so a player can navigate.

## Decision

Add `src/minimap.js` exporting a `Minimap` class:

- Browser path: creates a real 160x160 `<canvas>` and redraws every frame —
  background, a `renderDistance`-radius chunk grid around the player (colored by
  biome), a centered player dot, and the district label + current chunk coords.
- Node / `check_world.mjs` path: no canvas 2d context exists, so drawing is
  guarded off (`_draw()` no-ops), but `update()`, `districtAt()`, and `biomeAt()`
  stay deterministic so the harness can assert machine-readable state.
- **District labels are deterministic**: they derive from `SimplexNoise.noise2D`
  over chunk coordinates, so a given world position always maps to the same
  district across reloads/runs. Biome mirrors `ChunkManager` rules
  (`dist < 6` city, highway corridors, else wasteland).
- District palette: `Brick Residential`, `Financial Core`, `Neon District`,
  `Industrial Zone`, `Parkland` (city), plus `Wasteland` / `Highway Corridor`.
- `main.js` owns one `Minimap(chunkManager)` and refreshes it each frame from
  `player.mesh.position`; `window.minimap` exposes it for browser debugging.

## Consequences

- Players gain a navigational aid and a stable sense of place (district labels
  are repeatable, not random).
- The verify harness gains 5 new checks (determinism, palette validity, biome
  mapping, exposed state, Node draw-disabled).
- Future district-aware systems (weather-reactive driving, EMS routing) can read
  `minimap.district` / `minimap.activeChunks` for deterministic behavior.
