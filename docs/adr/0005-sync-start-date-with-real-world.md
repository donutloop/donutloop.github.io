# 5. Sync Start Date with Real World

Date: 2025-12-17

## Status

Accepted

## Context

Players want the in-game season to initially match the real-world season to enhance immersion. For example, if playing in December, the game should start in Winter.

## Decision

We query the system's current date (`new Date()`) at startup and calculate the day of the year (1-366). We initialize the game's `day` counter with this value.

## Consequences

*   **Positive**: Immediate immersion boost; the game feels "live" and connected to reality.
*   **Negative**: A new player starting in Winter might face harder weather conditions (snow) immediately compared to starting in Summer.
