# 0011 — Instanced Buildings (InstancedMesh per material)

## Status
Accepted (Round 3 — Gap A).

## Context
`createCityChunk` previously generated every building box as its own
`THREE.BoxGeometry` and merged all boxes per material via
`BufferGeometryUtils.mergeGeometries`. Every chunk rebuilt duplicate
vertex buffers for cores, window grids, mullions, neon rings, rooftop
details, and streetlight poles — high generation cost and high retained
geometry memory as chunks stream.

The roadmap (Phase 1) asked to "replace per-building meshes with
InstancedMesh per district style … apply the same pattern as clouds" so
building geometry is authored once and reused across many instances.

## Decision
Keep the existing per-material building builders (they push translated
`BoxGeometry`s), but replace the per-material merged-mesh creation with
**one `InstancedMesh` per building material**, all sharing a single
module-level `1x1x1` unit `BoxGeometry` (`buildingUnitBox`):

- `addBuildingInsts(group, insts, mat)` normalizes each element — either a
  legacy `BoxGeometry` (size/center extracted via `computeBoundingBox()`
  and `geometry.parameters`) or an `{pos, scale}` record — into an instance
  matrix `translate(center) * scale(width, height, depth)`.
- Each material mesh (`concrete`, `brick`, `glass`, `metal`, `darkMetal`,
  `neon`) is one `InstancedMesh` whose instances carry only a matrix, so
  retained geometry is the shared unit box regardless of chunk size.
- Building material `addClean(...)` merges were replaced by
  `addBuildingInsts(...)`; infrastructure (road/sidewalk/lane/light) is
  untouched.
- `mesh.frustumCulled = false` and `instanceMatrix.needsUpdate = true` are
  set for correct InstancedMesh rendering.

This is a per-material grouping (not literally per-district-style) to keep
draw-call parity with the prior per-material merge, while capturing the
roadmap's instancing win: one shared geometry, per-instance matrices, and
far lower retained vertex/memory cost. It also sets up the LOD baseline.

## Consequences
- Retained building geometry is O(1) per material (shared unit box);
  instances are matrix-only.
- Draw-call count stays ~equal to the prior merged-per-material approach.
- `check_world.mjs` now asserts city chunks contain `InstancedMesh`
  children built from the shared `1x1x1` unit-box geometry.
- Building visual layout is unchanged — each instance is the exact box
  (size/center) the old merged path produced.
