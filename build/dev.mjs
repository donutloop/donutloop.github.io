#!/usr/bin/env node
/**
 * build/dev.mjs — offline dev loop (watch + static server).
 * Replaces the static-page CDN flow with a local, dependency-free server.
 *
 * Usage: node build/dev.mjs
 */
import * as esbuild from 'esbuild';

const ctx = await esbuild.context({
  entryPoints: ['src/main.js'],
  bundle: true,
  format: 'esm',
  target: ['chrome110', 'firefox110', 'safari16'],
  outfile: 'dist/worldloop.js',
  sourcemap: 'linked',
  minify: false,
  treeShaking: true,
  logLevel: 'info',
  define: { 'process.env.NODE_ENV': '"development"' }
});

await ctx.watch();
await ctx.serve({ servedir: '.', host: '127.0.0.1', port: 5173 });
console.log('worldloop dev server: http://127.0.0.1:5173/  (press Ctrl+C to stop)');

process.stdin.resume();
process.on('SIGINT', () => { ctx.stop(); process.exit(0); });
