# ADR 0010 — Crosswalk Timing Integration (Cars Yield to Pedestrians)

## Status
Accepted.

## Context
Pedestrians already share the traffic-light clock: they cross only when the
car signal is red (`traffic_lights.js` → `checkGreenLight`). The remaining gap
was that cars never yielded to a pedestrian already on the crosswalk — a car
with a green light would drive straight through a crossing pedestrian.

## Decision
Add pedestrian-yield detection to `TrafficSystem`:

- `TrafficSystem.pedestrianNearCrosswalk(car)` computes forward/lateral
  distance from every active pedestrian relative to the car's axis and
  direction. It returns `true` when a pedestrian is ahead within a 14-unit
  yield zone and laterally within a 3.5-unit crosswalk lane.
- `checkBlocked()` calls it first (step 0), so any car about to enter a
  crosswalk occupied by a pedestrian stops, even on green.
- `setDependencies()` gains a 5th `pedestrianSystem` arg, wired in `main.js`.

Pedestrians on sidewalks (lateral ≈ road half-width) are outside the 3.5-unit
lane, so normal sidewalk traffic does not cause false yields — only actively
crossing / curb-adjacent pedestrians do.

## Consequences
- Cars now yield to crossing pedestrians at crosswalks, completing the
  crosswalk-timing loop (cars stop on red; pedestrians cross on red; cars also
  stop when a pedestrian is physically present).
- Deterministic API (`pedestrianNearCrosswalk`, `checkBlocked`) exposed to
  `check_world.mjs` so the agent loop can verify yield behavior headlessly.
