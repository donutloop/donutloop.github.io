# 2. Automatic Probabilistic Weather Transitions

Date: 2025-12-17

## Status

Accepted

## Context

Weather needed to change dynamically without user input, but purely random selection (noise) would lack realism (e.g., snow in summer).

## Decision

We implemented a probabilistic approach where the `currentSeason` determines the likelihood of specific weather types. The system checks for a weather change every 2-4 in-game hours.

*   **Winter**: High chance of Snow.
*   **Summer**: High chance of Sun.
*   **Spring/Autumn**: Mixed probabilities.

## Consequences

*   **Positive**: Weather feels organic and season-appropriate.
*   **Negative**: Predictability is reduced; rigorous testing requires time acceleration or mocking.
