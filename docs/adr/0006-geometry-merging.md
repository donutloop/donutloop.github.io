# 6. Geometry Merging for Chunk Performance

Date: 2025-12-17

## Status

Accepted

## Context

The game generates an infinite world using chunks. Each chunk contained hundreds of individual meshes for buildings, windows, road markings, and vegetation. This led to a very high number of draw calls (thousands per frame) and significant GPU overhead, preventing the game from maintaining a steady 60 FPS, especially on lower-end devices.

## Decision

We refactored the chunk generation system (`world.js` and `createCityChunk`) to implement **Geometry Merging**.

Instead of creating a `THREE.Mesh` for every single building part:
1.  We pass a `geoms` accumulator object to all building functions.
2.  Each function pushes `THREE.BufferGeometry` instances into arrays keyed by material type (e.g., `geoms.concrete`, `geoms.glass`).
3.  At the end of chunk generation, we use `BufferGeometryUtils.mergeGeometries` to combine all geometries of the same material into a single mesh.
4.  The final chunk contains only ~10-15 meshes (one per unique material) instead of hundreds.

## Consequences

### Positive
*   **Drastically Reduced Draw Calls**: From ~500+ per chunk to ~15 per chunk.
*   **Improved Frame Rate**: Significant CPU and GPU optimization.
*   **Consistent Visuals**: The visual output remains identical.

### Negative
*   **Loss of Individual Object Identity**: Individual buildings are no longer separate objects. We cannot easily interact with (e.g., click, move, destroy) a specific building instance anymore without complex raycasting logic on the merged mesh.
*   **Increased Memory during Generation**: All geometries must be held in memory arrays before merging.
*   **Slightly Slower Chunk Generation**: The merge operation itself is CPU intensive, but it happens once per chunk load and saves frame time forever after.

## Compliance
*   Implemented in `src/world.js`.
