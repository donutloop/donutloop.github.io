# ADR 0018 — CI Headless Browser Smoke (`check_world.mjs --ci`)

**Status:** Accepted (Round 11)

## Context

`check_world.mjs` verifies the REAL Node-side systems against the actual `three`
package, but it never exercises the browser entry path (`src/main.js` /
`index.html`). The browser path wires the renderer, post-processing, minimap,
telemetry, and the self-describing `window` hooks — code that Node checks cannot
reach. Round 11's CI smoke caught a real browser-only bug (an
`emergencySystem` assignment before `Player` was constructed) that the Node path
would never see.

The roadmap (Phase 5) calls for a CI smoke: run the structured checks **plus** a
headless browser render assertion on every commit, in one `check_world.mjs
--ci` mode.

## Decision

Add `--ci` to `check_world.mjs`. When passed, after the Node checks pass it
launches headless Chromium and asserts the browser path actually renders:

- a real frame has drawn (`window.__worldloop.ready` — draw calls > 0), the
  renderer is alive
- a WebGL canvas is present in the DOM
- zero console errors
- zero uncaught exceptions

The browser driver (`tools/ci/headless_cdp.mjs`) is **dependency-free**: it uses
Node 22's native `fetch` + `WebSocket` to drive Chrome via the Chrome DevTools
Protocol (CDP), serves the repo over a tiny local HTTP server (avoids file://
module/CORS issues), injects a `console.error`/`getContext` instrumentation
wrapper on the new document, then navigates and polls `window.__worldloop.ready`.

To make the browser path self-describing (per AGENTS.md), `src/main.js` now
exposes `window.__worldloop = { ready, drawCalls, fps, triangles, errors }`,
set once the first frame has actually drawn with recorded draw calls. The CI
driver also records console stacks for diagnostics.

## Consequences

- `node check_world.mjs --ci` is the full commit-gate: Node checks + browser
  render assertion. `node check_world.mjs` stays the fast, dependency-light path
  (no browser needed).
- Browser-only wiring regressions (renderer init, canvas context collisions,
  HUD/telemetry hooks) now fail the gate instead of passing silently.
- The driver's own WebGL probe must create a **fresh** canvas — asking for a
  second context type on the renderer's existing canvas would itself trigger a
  `webglcontextcreationerror` (a false-positive console error).
- Requires a headless Chromium binary; resolved via `CHROME_PATH` env or a
  known cache path (Playwright headless shell).
