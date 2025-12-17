# 7. Object Pooling for Traffic

Date: 2025-12-17

## Status

Accepted

## Context

The infinite runner nature of the game requires constant spawning and despawning of traffic cars as new chunks load and old ones unload. Creating new `THREE.Group` hierarchies and geometries for complex cars triggers frequent Garbage Collection (GC) pauses and frame drops (stutter) whenever the player crosses a chunk boundary.

## Decision

We implemented an **Object Pooling** system for the `TrafficSystem`.

1.  A `CarPool` dictionary organizes inactive car objects by type (`sedan`, `taxi`, etc.).
2.  When a chunk loads, cars are retrieved from the pool (`getCarFromPool`). If empty, a new car is created.
3.  When a chunk unloads, cars are hidden and returned to the pool (`returnCarToPool`) instead of being disposed.
4.  The `utils.js` disposal logic is bypassed for pooled objects during normal gameplay.

## Consequences

### Positive
*   **Reduced Stutter**: Elimination of instantiation lag when generating chunks.
*   **Reduced GC Pressure**: Memory usage stabilizes as objects are reused rather than constantly allocated and discarded.
*   **Smoother Gameplay**: Consistent framerate across chunk boundaries.

### Negative
*   **Memory Overhead**: Unused cars remain in memory (hidden) rather than being fully freed.
*   **State Management Risk**: If a car is not properly reset (e.g., position, rotation, damage state) when retrieved from the pool, "ghost" behaviors could occur. We explicitly reset visibility and scene presence.

## Compliance
*   Implemented in `src/traffic.js`.
