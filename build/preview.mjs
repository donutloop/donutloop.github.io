#!/usr/bin/env node
/**
 * build/preview.mjs — serve the production bundle locally (ADR 0021).
 * Static server rooted at the repo so index.html + dist/worldloop.js resolve.
 *
 * Usage: node build/preview.mjs [port]
 */
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';

const ROOT = normalize(new URL('../', import.meta.url).pathname);
const PORT = parseInt(process.argv[2] || '4173', 10);

const MIME = {
  '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript',
  '.css': 'text/css', '.json': 'application/json', '.map': 'application/json'
};

const server = createServer(async (req, res) => {
  try {
    let path = decodeURIComponent(new URL(req.url, 'http://x').pathname);
    let fp = normalize(join(ROOT, path));
    if (!fp.startsWith(ROOT)) { res.writeHead(403); res.end(); return; }
    if (fp.endsWith('/')) fp += 'index.html';
    await stat(fp).catch(() => { throw 404; });
    const data = await readFile(fp);
    res.writeHead(200, { 'Content-Type': MIME[extname(fp)] || 'application/octet-stream' });
    res.end(data);
  } catch (e) {
    res.writeHead(e === 404 ? 404 : 500);
    res.end();
  }
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`worldloop preview: http://127.0.0.1:${PORT}/`);
});
