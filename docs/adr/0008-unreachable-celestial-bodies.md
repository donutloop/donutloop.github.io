# 8. Unreachable Celestial Bodies

Date: 2025-12-18

## Status

Accepted

## Context

In the current implementation, the sun and moon are physical meshes positioned at a radius of 800 units from the player. While this works for the visual day/night cycle, it creates issues when the player uses the airplane mode. The player can easily fly close to or even collide with the sun/moon, breaking immersion. Celestial bodies should appear infinite distance away or at least unreachable.

## Decision

We will simulate "infinite" distance by:
1.  Increasing the main camera's `far` clipping plane from 1000 to 20000.
2.  Increasing the orbital radius of the celestial bodies from 800 to 10000.
3.  Scaling up the geometry of the celestial bodies (from radius 80 to 1000) to maintain their apparent angular size from the player's perspective.

## Consequences

### Positive
- **Realism**: The sun and moon effectively become part of the skybox and cannot be reached by the player during normal gameplay.
- **Immersion**: Maintaining the visual scale while increasing distance prevents the "toy world" feeling when flying.

### Negative
- **Z-Fighting Risk**: Increasing the far plane significantly *can* reduce depth buffer precision, potentially causing z-fighting on distant overlapping geometry. However, given our low-poly art style and the lack of complex overlapping distant geometry, this risk is minimal.
- **Performance**: A larger frustum *might* include slightly more objects in the culling check, but our chunk system limits active objects anyway.

## Compliance
- The `WeatherSystem` class in `weather.js` will be updated to use the new larger radius and geometry size.
- The `initScene` function in `scene.js` will be updated to use the new far plane value.
