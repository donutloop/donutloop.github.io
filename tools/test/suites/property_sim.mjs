/**
 * tools/test/suites/property_sim.mjs — AAA-26: property-based invariants over
 * real sim code (road-graph routing + weather state machine), under seeded
 * fuzz, reproducible per seed, with shrinking to a minimal counterexample.
 */
import * as THREE from 'three';
import { RoadGraph } from '../../../src/road_graph.js';
import { WeatherSystem } from '../../../src/weather.js';
import { forAll, gen } from '../property.mjs';
import { ok } from '../runner.mjs';

const ALLOWED_WEATHER = new Set(['sunny', 'rain', 'snow']);

/** Build a fresh RoadGraph (pure, no THREE deps). */
function freshGraph() {
  return new RoadGraph(34, 16);
}

export default function suite(runner) {
  // ---- Road-graph: biome / roadAxes consistency (seeded fuzz) ----
  runner.test('roadAxes matches the biome rule under seeded fuzz', (t) => {
    const g = freshGraph();
    const prop = forAll({
      seed: t.seed,
      label: 'roadAxes-biome',
      runs: 300,
      generator: gen.pair(gen.coord(16), gen.coord(16)),
      invariant: ([cx, cz]) => {
        const axes = g.roadAxes(cx, cz);
        const dist = Math.sqrt(cx * cx + cz * cz);
        ok(axes.x === (dist < 6 || Math.abs(cz) <= 5),
          `x-axis mismatch at (${cx},${cz}): got ${axes.x}`);
        ok(axes.z === (dist < 6 || Math.abs(cx) <= 5),
          `z-axis mismatch at (${cx},${cz}): got ${axes.z}`);
      },
    });
    ok(prop.pass, `biome invariant failed: ${prop.error} at ${JSON.stringify(prop.counterexample)}`);
  });

  runner.test('node exists iff the chunk has a road axis (seeded fuzz)', (t) => {
    const g = freshGraph();
    const prop = forAll({
      seed: t.seed,
      label: 'node-exists',
      runs: 300,
      generator: gen.pair(gen.coord(16), gen.coord(16)),
      invariant: ([cx, cz]) => {
        const axes = g.roadAxes(cx, cz);
        const key = `${cx},${cz}`;
        const hasRoad = axes.x || axes.z;
        ok((g.getNode(key) !== null) === hasRoad,
          `node/getNode inconsistent at (${cx},${cz})`);
      },
    });
    ok(prop.pass, `node-exists invariant failed: ${prop.error} at ${JSON.stringify(prop.counterexample)}`);
  });

  // ---- Road-graph: routing (shortestPath) validity under seeded fuzz ----
  runner.test('shortestPath returns a valid route of graph edges (seeded fuzz)', (t) => {
    const g = freshGraph();
    const keys = [...g.nodes.keys()];
    const pickKey = gen.int(0, keys.length - 1);
    const prop = forAll({
      seed: t.seed,
      label: 'routing',
      runs: 200,
      generator: (rng) => {
        // distinct source/target node keys
        const a = keys[pickKey(rng)];
        let b = keys[pickKey(rng)];
        while (b === a) b = keys[pickKey(rng)];
        return [a, b];
      },
      invariant: ([fromKey, toKey]) => {
        const path = g.shortestPath(fromKey, toKey);
        ok(Array.isArray(path) && path.length >= 1, `no route ${fromKey} -> ${toKey}`);
        ok(path[0] === fromKey && path[path.length - 1] === toKey, 'path endpoints mismatch');
        ok(new Set(path).size === path.length, 'path repeats a node');
        for (let i = 0; i + 1 < path.length; i++) {
          const edges = g.neighbors(path[i]);
          ok(edges.some(e => e.to === path[i + 1]), `gap ${path[i]} -> ${path[i + 1]} is not an edge`);
        }
      },
    });
    ok(prop.pass, `routing invariant failed: ${prop.error} at ${JSON.stringify(prop.counterexample)}`);
  });

  // ---- Road-graph: structural invariants (deterministic over all nodes) ----
  runner.test('road-graph edges are two-way (reverse edge exists) for every node', (t) => {
    const g = freshGraph();
    for (const key of g.nodes.keys()) {
      for (const edge of g.neighbors(key)) {
        const back = g.neighbors(edge.to).some(e => e.to === key);
        ok(back, `missing reverse edge ${key} <-> ${edge.to}`);
      }
    }
  });

  runner.test('road-graph is a single connected component', (t) => {
    const g = freshGraph();
    const diag = g.connected();
    ok(diag.connected === true, 'road network must be one connected component');
    ok(diag.reached === diag.total, 'BFS reached every node in the network');
  });

  // ---- Weather: state-machine invariant under seeded transitions ----
  runner.test('weather.currentWeather stays in {sunny,rain,snow} across seeded transitions', (t) => {
    const scene = new THREE.Scene();
    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    const ambLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(dirLight);
    scene.add(ambLight);
    const materials = {
      road: new THREE.MeshBasicMaterial({ color: 0x222222 }),
      window: new THREE.MeshBasicMaterial({ color: 0x444444 }),
    };
    const weather = new WeatherSystem(scene, dirLight, ambLight, materials);
    const rng = new t.rng.constructor(t.seed);
    const origRandom = Math.random;
    Math.random = () => rng.float(); // seeded, reproducible per test
    try {
      for (let i = 0; i < 600; i++) {
        weather.updateWeatherAutomation(3);
        ok(ALLOWED_WEATHER.has(weather.currentWeather),
          `weather left allowed set: ${weather.currentWeather}`);
      }
    } finally {
      Math.random = origRandom;
    }
  });
}
