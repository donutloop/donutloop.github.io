# 0014 — Dynamic City Events: Emergency Response & Sirens

## Status
Accepted (Round 7 / Gap D).

## Context
The roadmap lists **Dynamic city events — emergency response & sirens** as a
planned gameplay-depth item. Crashes (via `deformation.js` / `player.js`) were
pure physics — nothing in the city reacted. The ask:

> Spawn ambulance / fire / police vehicles on crash incidents (hook the existing
> crash path), add a pooled EMS class with siren + rotating-light effects via
> `effects.js`, and lane-clearing priority so ordinary cars yield ahead. Expose
> an `events` counter in `check_world.mjs` so the agent loop can verify incident
> → response coverage.

## Decision
Add a dedicated `EmergencySystem` (`src/emergency.js`), a new per-system class
consistent with the layered architecture:

- **Pooled EMS fleet** (`ambulance` / `fire` / `police`) reusing
  `createCarMesh` from `car_models.js` (new builders + paint colours).
- **`respond(x, z)`** dispatches a priority vehicle to an incident, attaches
  siren + rotating-light meshes via `EffectSystem.createEmergencyLights`, and
  increments the machine-readable `events` counter. A dedup radius prevents
  double-dispatching the same incident.
- **Lane-clearing priority** lives in `TrafficSystem.checkBlocked`: ordinary
  cars yield to an EMS vehicle ahead in the lane; EMS never yields (it drives
  straight to target in `update`).
- **Crash hook**: `Player.applyCrashDamage` dispatches a response on hard
  crashes (`crashSpeed > 25`).
- **Verification**: `check_world.mjs` instantiates `EmergencySystem`, calls
  `respond()`, asserts the counter increments, the fleet spawns, traffic yields
  to an EMS ahead, and the siren effect attaches; `events` is reported as a
  telemetry field.

## Consequences
- The city now visibly reacts to crashes with priority responders and sirens,
  giving gameplay depth on top of the existing crash/deformation physics.
- Ordinary traffic yields to emergency vehicles, reinforcing realism.
- `check_world.mjs` can verify incident → response coverage deterministically
  without a browser (53/53 checks green).
- Adds a small per-frame cost: siren meshes pulse only while their parent EMS
  vehicle is visible, and are disposed on despawn.
