# ADR 0017 — Weather-Reactive Driving

**Status:** Accepted (Round 10)

## Context

The city sim already drives a full day/night + 365-day seasonal cycle, but the
weather was purely visual — rain and snow had no effect on how a car behaves.
Real driving is weather-reactive: wet roads cut grip, snow cuts it further, so
the player car should take longer to stop, reach a lower top speed, and
accelerate more gently.

## Decision

Add a deterministic grip model to the player car, driven by the live weather
state:

- `Player` gains an optional `weatherSystem` dependency and a
  `getDrivingModifiers()` method returning `{ weather, grip, friction,
  maxSpeedScale, accelerationScale }`.
- Dry roads: `grip = 1.0`, `friction = 10` (unchanged baseline).
- Rain: `grip = 0.6` → `friction = 6`, `maxSpeedScale = 0.8`,
  `accelerationScale = 0.85`.
- Snow: `grip = 0.35` → `friction = 3.5`, `maxSpeedScale = 0.6`,
  `accelerationScale = 0.7` (softest grip).
- `updateCarPhysics()` feeds these modifiers into stopping friction, top speed,
  and acceleration, so the same code path keeps both the browser and Node paths
  in sync.
- `check_world.mjs` exposes a machine-readable `weather` field — the live
  `current` condition plus the exact `driving` modifiers — and asserts grip
  ordering (dry > rain > snow) and determinism.

## Consequences

- Driving now responds to the city's weather: rain/snow lengthen stopping
  distance and cap top speed, making the world feel physically coherent.
- The grip model is deterministic and self-describing, so the agent loop can
  verify weather-reactive driving without a WebGL context.
- The browser path wires `player.weatherSystem = weatherSystem` in `main.js`;
  `check_world.mjs` wires it to the real `WeatherSystem` for the same assertions.
