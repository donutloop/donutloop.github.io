# 3. 10-Minute Fixed Day Duration

Date: 2025-12-17

## Status

Accepted

## Context

The speed of the day/night cycle impacts the pacing of the game.

## Decision

The time scale is fixed such that 1 in-game day equals 10 minutes of real time. This is achieved by setting the time increment `hoursPerSec` to `0.04` (24 hours / 600 seconds).

## Consequences

*   **Positive**: Provides a balanced cycle that is long enough to enjoy but short enough to see transitions during a play session.
*   **Negative**: Fixed scaling might not suit all players (though this is standard for this genre).
