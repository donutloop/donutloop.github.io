# 0012 — Render-Distance LOD (instanced silhouettes)

## Status
Accepted (Round 4 / Gap B).

## Context
After instanced buildings (ADR 0011), the renderer still builds full city
detail for every chunk inside `renderDistance`. Far chunks carry the same
8-material instanced buildings, foliage, streetlights, bulbs, and full
pedestrian/traffic population as near chunks — heavy for the far field
where detail is imperceptible.

The Phase 1 plan asked: "far chunks swap to low-poly/instanced silhouettes;
near chunks keep detail."

## Decision
Add a `lodLevel` parameter to `createCityChunk(xPos, zPos, size, roadWidth, lodLevel)`:

- **Full detail (`lodLevel = 0`, near)** — unchanged: styled instanced
  buildings, foliage, streetlights/bulbs, and (via ChunkManager) population.
- **LOD (`lodLevel > 0`, far)** — one coarse concrete instanced box per
  corner silhouette, no foliage, no streetlights/bulbs, and no population
  spawn. Road/sidewalk/lane surface and coarse building colliders stay so
  the ground plane and obstacle avoidance remain continuous.

ChunkManager owns the detail radius:

- `this.lodDistance = 1` — city chunks farther than this build LOD;
  chunks within it build full detail.
- `loadChunk` computes `lodLevel = dist > lodDistance ? 1 : 0`, passes it to
  `createCityChunk`, and only spawns population on full-detail chunks.
- `update()` scans loaded city chunks; when one crosses the boundary it
  unloads + reloads at the required level, throttled to one rebuild per
  frame for determinism.

## Consequences
- Far-field geometry and population are drastically cheaper; the near
  field keeps full detail.
- Population (traffic/pedestrians) appears only on full-detail chunks —
  far chunks stay silent, which is acceptable since they are distant.
- LOD transitions rebuild a chunk in place (mesh disposed + reloaded),
  one per frame, so the cost of an upgrade/downgrade is amortized.
- `check_world.mjs` asserts the LOD chunk exposes `lodLevel`, is lighter
  than full detail, omits bulb meshes, and that `lodDistance` exists.
