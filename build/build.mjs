#!/usr/bin/env node
/**
 * build/build.mjs — production bundle for Worldloop (ADR 0021).
 *
 * Bundles the browser entry (src/main.js) into a single tree-shaken ESM
 * artifact (dist/worldloop.js) so index.html no longer needs a CDN importmap.
 * The `three` package (+ `three/addons/*`) is resolved from node_modules by
 * esbuild via three's package.json `exports` map.
 *
 * Usage: node build/build.mjs [--watch] [--serve]
 */
import * as esbuild from 'esbuild';
import { spawn } from 'node:child_process';
import { existsSync } from 'node:fs';

const watch = process.argv.includes('--watch');
const serve = process.argv.includes('--serve');

const options = {
  entryPoints: ['src/main.js'],
  bundle: true,
  format: 'esm',
  target: ['chrome110', 'firefox110', 'safari16'],
  outfile: 'dist/worldloop.js',
  sourcemap: watch ? 'linked' : false,
  minify: !watch,
  treeShaking: true,
  logLevel: watch ? 'info' : 'warning',
  define: { 'process.env.NODE_ENV': watch ? '"development"' : '"production"' }
};

async function run() {
  if (watch) {
    const ctx = await esbuild.context({ ...options, write: true });
    await ctx.watch();
    if (serve) {
      // esbuild's built-in dev server serves ./ (index.html + dist) — a true
      // offline dev loop that replaces the static-page CDN flow.
      await ctx.serve({ servedir: '.', host: '127.0.0.1', port: 5173 });
      console.log('worldloop dev server: http://127.0.0.1:5173/ (watch + serve)');
    } else {
      console.log('worldloop build watching...');
    }
    return ctx;
  }

  const result = await esbuild.build(options);
  if (!result.errors.length) {
    console.log('worldloop bundled -> dist/worldloop.js');
  }
}

run().catch((e) => {
  console.error('build failed:', e.message);
  process.exit(1);
});

// Keep the process alive when watching so SIGINT can stop it cleanly.
if (watch) {
  process.stdin.resume();
  process.on('SIGINT', () => process.exit(0));
}
