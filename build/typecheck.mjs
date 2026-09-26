#!/usr/bin/env node
/**
 * build/typecheck.mjs — bundling/import gate (ADR 0021).
 * Runs esbuild with write:false so every import resolves and every entry
 * parses, without emitting artifacts. Fails on any error/warning that would
 * break a bundle.
 *
 * Usage: node build/typecheck.mjs
 */
import * as esbuild from 'esbuild';

const result = await esbuild.build({
  entryPoints: ['src/main.js'],
  bundle: true,
  write: false,
  format: 'esm',
  target: ['chrome110', 'firefox110', 'safari16'],
  logLevel: 'warning',
  define: { 'process.env.NODE_ENV': '"production"' }
});

const errs = [...result.errors];
if (result.warnings.length) {
  console.warn(`typecheck: ${result.warnings.length} warning(s)`);
  for (const w of result.warnings.slice(0, 8)) console.warn('  ' + w.text);
}
if (errs.length) {
  console.error(`typecheck: ${errs.length} error(s)`);
  for (const e of errs.slice(0, 8)) console.error('  ' + e.text);
  process.exit(1);
}
console.log('typecheck: all entries bundle cleanly ✅');
