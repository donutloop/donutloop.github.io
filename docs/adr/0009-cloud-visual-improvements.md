# 9. Cloud Visual Improvements

Date: 2025-12-18

## Status

Accepted

## Context

The initial implementation of procedural clouds resulted in small, high-altitude clouds that were often difficult to notice. The previous ADR addressed this by adjusting parameters, but further improvements were needed to address performance, overlap issues, and realism.

## Decision

1.  **Instanced Rendering**: We migrated cloud management from per-chunk meshes in `ChunkManager` to a centralized `InstancedMesh` system in `WeatherSystem`. This allows for efficient rendering of many clouds with few draw calls.
2.  **Geometric Style**: We switched from `BoxGeometry` to `IcosahedronGeometry` (low-poly spheres) to give clouds a puffier, more organic appearance while maintaining the low-poly aesthetic.
3.  **Varied Sizes**: We implemented logic to generate three distinct cloud types:
    - **Tiny**: Small cluster, low spread.
    - **Medium**: Average cluster, medium spread.
    - **Big**: Large cluster, wide spread.
4.  **Infinite Scrolling**: Clouds now wrap around the player's position to simulate an infinite field without constant allocation/deallocation.

## Consequences

### Positive
- **Performance**: Significant reduction in draw calls and object overhead.
- **Visual Quality**: Clouds look more organic and varied.
- **No Overlap**: Initialization logic ensures clouds are spawned apart from each other.

### Negative
- **Complexity**: The `WeatherSystem` is now responsible for more visual logic, increasing its complexity slightly.

## Compliance
- `WeatherSystem.initClouds` and `WeatherSystem.updateClouds` implement this logic.
