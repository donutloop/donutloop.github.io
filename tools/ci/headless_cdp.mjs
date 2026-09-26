/**
 * headless_cdp.mjs — dependency-free headless browser smoke driver.
 *
 * Uses Node 22's native fetch + WebSocket to drive a headless Chromium via the
 * Chrome DevTools Protocol (CDP). Serves the repo over a tiny local HTTP server
 * (avoids file:// module/CORS restrictions), loads index.html, captures console
 * errors, and polls window.__worldloop.ready until a real frame has drawn.
 *
 * Returns a machine-readable report: { ready, drawCalls, fps, triangles,
 *   canvas, hud, errors: [...] }.
 */
import { spawn } from 'node:child_process';
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, extname, normalize } from 'node:path';
import { tmpdir } from 'node:os';
import { mkdtempSync } from 'node:fs';

const ROOT = normalize(new URL('../../', import.meta.url).pathname);

/** Locate a headless Chromium binary. */
function findChrome() {
  if (process.env.CHROME_PATH) return process.env.CHROME_PATH;
  const candidates = [
    '/usr/bin/google-chrome',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
    '/home/donutloop/.cache/ms-playwright/chromium_headless_shell-1217/chrome-linux/headless_shell',
    '/home/donutloop/.cache/ms-playwright/chromium-1217/chrome-linux/chrome'
  ];
  for (const c of candidates) if (existsSync(c)) return c;
  throw new Error('No Chromium binary found — set CHROME_PATH');
}

const MIME = {
  '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript',
  '.css': 'text/css', '.json': 'application/json', '.png': 'image/png',
  '.jpg': 'image/jpeg', '.webp': 'image/webp'
};

/** Tiny static server rooted at repo root (blocks path traversal). */
function serve(root = ROOT) {
  return createServer(async (req, res) => {
    try {
      let path = decodeURIComponent(new URL(req.url, 'http://x').pathname);
      let fp = normalize(join(root, path));
      if (!fp.startsWith(root)) { res.writeHead(403); res.end(); return; }
      if (fp.endsWith('/')) fp += 'index.html';
      if (!existsSync(fp)) { res.writeHead(404); res.end(); return; }
      const data = await readFile(fp);
      res.writeHead(200, { 'Content-Type': MIME[extname(fp)] || 'application/octet-stream' });
      res.end(data);
    } catch (e) {
      res.writeHead(500); res.end(String(e));
    }
  });
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/** Minimal CDP client over native WebSocket. */
class CDP {
  constructor(wsUrl) {
    this.ws = new WebSocket(wsUrl);
    this.nextId = 1;
    this.pending = new Map();
    this.listeners = new Map();
  }
  on(method, fn) {
    this.listeners.set(method, (this.listeners.get(method) || []).concat(fn));
    return this;
  }
  async open() {
    await new Promise((resolve, reject) => {
      this.ws.onopen = resolve;
      this.ws.onerror = (e) => reject(new Error('WS error: ' + (e.message || 'open failed')));
      this.ws.onmessage = (ev) => {
        const msg = JSON.parse(ev.data);
        if (msg.id) {
          const p = this.pending.get(msg.id);
          if (p) { this.pending.delete(msg.id); msg.error ? p.reject(msg.error) : p.resolve(msg.result); }
        } else if (msg.method) {
          for (const fn of this.listeners.get(msg.method) || []) fn(msg.params);
        }
      };
    });
  }
  send(method, params = {}) {
    const id = this.nextId++;
    return new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
      this.ws.send(JSON.stringify({ id, method, params }));
    });
  }
  close() { try { this.ws.close(); } catch {} }
}

/** Poll an expression until truthy or timeout. */
async function waitFor(cdp, expression, timeoutMs = 30000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    const r = await cdp.send('Runtime.evaluate', { expression, returnByValue: true });
    if (r && r.result && r.result.value === true) return true;
    await sleep(150);
  }
  return false;
}

export async function runHeadlessSmoke({ root = ROOT, timeoutMs = 40000 } = {}) {
  const chrome = findChrome();
  const server = serve(root);
  const serverPort = 8000 + Math.floor(Math.random() * 1000);
  await new Promise((r) => server.listen(serverPort, '127.0.0.1', r));
  const url = `http://127.0.0.1:${serverPort}/index.html`;

  const debugPort = 9300 + Math.floor(Math.random() * 500);
  const userDataDir = mkdtempSync(join(tmpdir(), 'worldloop-ci-'));
  const proc = spawn(chrome, [
    '--no-sandbox', '--headless',
    '--remote-debugging-port=' + debugPort,
    '--user-data-dir=' + userDataDir,
    '--window-size=1280,720',
    '--mute-audio',
    'about:blank'
  ], { stdio: 'ignore' });

  const report = {
    ready: false, drawCalls: 0, fps: 0, triangles: 0,
    canvas: false, hud: {}, errors: [], exceptions: []
  };

  let cdp = null;
  try {
    // Wait for the debugging endpoint to come up.
    let pageInfo = null;
    for (let i = 0; i < 60 && !pageInfo; i++) {
      try {
        const list = await (await fetch(`http://127.0.0.1:${debugPort}/json/list`)).json();
        pageInfo = list.find((t) => t.type === 'page');
      } catch {}
      if (!pageInfo) await sleep(200);
    }
    if (!pageInfo) throw new Error('CDP endpoint unavailable');

    cdp = new CDP(pageInfo.webSocketDebuggerUrl);
    await cdp.open();

    cdp.on('Runtime.consoleAPICalled', (p) => {
      const type = p.type || '';
      if (type === 'error' || type === 'warning') {
        const text = (p.args || []).map((a) => a.value || a.description || '').join(' ').slice(0, 500);
        const stack = (p.stackTrace && p.stackTrace.callFrames || [])
          .slice(0, 4).map((f) => `${f.functionName} @ ${f.url}:${f.lineNumber}:${f.columnNumber}`)
          .join('\n');
        report.errors.push({ type, text, stack });
      }
    });
    cdp.on('Runtime.exceptionThrown', (p) => {
      report.exceptions.push((p.exceptionDetails && p.exceptionDetails.text) || 'exception');
    });

    await cdp.send('Runtime.enable');
    await cdp.send('Page.enable');
    await cdp.send('Emulation.setDeviceMetricsOverride', { width: 1280, height: 720, deviceScaleFactor: 1, mobile: false });

    // Navigate AFTER injecting scripts so instrumentation runs on the page.
    await cdp.send('Page.navigate', { url });

    // Wrap console.error/warn to capture call-site stacks for diagnostics.
    await cdp.send('Page.addScriptToEvaluateOnNewDocument', {
      source: `(() => {
        window.__consoleStacks = [];
        const origError = console.error.bind(console);
        const origWarn = console.warn.bind(console);
        console.error = (...a) => {
          window.__consoleStacks.push({ level: 'error', msg: String(a[0]||'').slice(0,300), stack: new Error().stack.slice(0,400) });
          origError(...a);
        };
        console.warn = (...a) => {
          window.__consoleStacks.push({ level: 'warn', msg: String(a[0]||'').slice(0,300), stack: new Error().stack.slice(0,400) });
          origWarn(...a);
        };
        // Trace getContext calls to find the failing canvas.
        window.__ctxTrace = [];
        const origGet = HTMLCanvasElement.prototype.getContext;
        HTMLCanvasElement.prototype.getContext = function(type, opts) {
          const has2d = !!this.__wl2d;
          if (type === '2d') this.__wl2d = true;
          const r = origGet.call(this, type, opts);
          window.__ctxTrace.push({ type, canvasId: this.id || this.className || 'anon', has2d, ok: !!r });
          return r;
        };
      })();`
    });

    const ready = await waitFor(cdp, 'window.__worldloop && window.__worldloop.ready === true', timeoutMs);
    report.ready = ready;

    if (ready) {
      const state = await cdp.send('Runtime.evaluate', {
        expression: `(() => {
          const w = window.__worldloop;
          const canvases = [...document.querySelectorAll('canvas')];
          // Probe WebGL on a FRESH canvas (never touch existing canvases — asking
          // for a second context type on the renderer's canvas would itself error).
          const gl = !!document.createElement('canvas').getContext('webgl');
          const hud = {
            score: !!document.querySelector('#score, .score') || document.body.innerText.includes('Score'),
            telemetry: document.body.innerText.includes('fps') || document.body.innerText.includes('dc'),
            district: !!window.minimap || document.body.innerText.length > 0
          };
          const stacks = window.__consoleStacks || [];
          const ctxTrace = window.__ctxTrace || [];
          return { drawCalls: w.drawCalls, fps: w.fps, triangles: w.triangles,
                   canvas: canvases.length > 0, gl, hud, stacks, ctxTrace };
        })()`, 
        returnByValue: true
      });
      const v = state && state.result && state.result.value;
      if (v) {
        report.drawCalls = v.drawCalls;
        report.fps = v.fps;
        report.triangles = v.triangles;
        report.canvas = v.canvas && v.gl;
        report.hud = v.hud;
        report.stacks = v.stacks || [];
        report.ctxTrace = v.ctxTrace || [];
      }
    }
  } finally {
    if (cdp) cdp.close();
    proc.kill();
    server.close();
  }
  return report;
}
