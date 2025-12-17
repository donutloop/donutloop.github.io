# 1. 365-Day Seasonal Cycle

Date: 2025-12-17

## Status

Accepted

## Context

The application previously operated on a simple day/night cycle with no concept of long-term progression or seasons. The weather was static unless manually changed. A request was made to simulate a full year.

## Decision

We implemented a `day` (1-365) and `year` counter in the `WeatherSystem`. The year is divided into four distinct seasons based on day ranges:
*   **Winter**: Days 1-90
*   **Spring**: Days 91-180
*   **Summer**: Days 181-270
*   **Autumn**: Days 271-365

## Consequences

*   **Positive**: Adds depth and variety to the gameplay loop; creates a sense of time progression.
*   **Negative**: Adds state complexity to the `WeatherSystem`.
