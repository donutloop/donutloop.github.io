# 4. Removal of Manual Weather Controls

Date: 2025-12-17

## Status

Accepted

## Context

With the introduction of the automatic seasonal system, manual overrides (keyboard shortcuts 1, 2, 3) conflicted with the simulation logic (e.g., manually setting Sun during a calculated Snow period would be immediately overwritten or break immersion).

## Decision

We removed the manual keyboard event listeners and the corresponding on-screen UI instructions.

## Consequences

*   **Positive**: Ensures the integrity of the seasonal simulation; cleans up the UI.
*   **Negative**: Developers and users lose the ability to instantly force weather states for debugging or screenshot purposes. A "Debug Mode" may need to be reintroduced later.
