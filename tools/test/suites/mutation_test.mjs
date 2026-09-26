/**
 * tools/test/suites/mutation_test.mjs — AAA-30: mutation testing over real sim
 * source. We mutate src/road_graph.js tokens, load the mutated module, and run
 * the same invariant detectors used by the property suite. Each mutation must
 * be CAUGHT (detector fails) — proving the verification harness is not a
 * tautology. A mutation that passes the detector is a harness gap.
 */
import { loadMutated } from '../mutation.mjs';
import { forAll, gen } from '../property.mjs';
import { ok } from '../runner.mjs';

const GRAPH = 'src/road_graph.js';

/** The exact biome invariant detector used by the property suite. */
function biomeDetector(g, seed) {
  return forAll({
    seed, label: 'roadAxes-biome', runs: 200,
    generator: gen.pair(gen.coord(16), gen.coord(16)),
    invariant: ([cx, cz]) => {
      const axes = g.roadAxes(cx, cz);
      const dist = Math.sqrt(cx * cx + cz * cz);
      ok(axes.x === (dist < 6 || Math.abs(cz) <= 5), `x-axis mismatch at (${cx},${cz})`);
      ok(axes.z === (dist < 6 || Math.abs(cx) <= 5), `z-axis mismatch at (${cx},${cz})`);
    },
  });
}

/** The node-existence detector: node exists iff the chunk has a road axis. */
function nodeDetector(g, seed) {
  return forAll({
    seed, label: 'node-exists', runs: 200,
    generator: gen.pair(gen.coord(16), gen.coord(16)),
    invariant: ([cx, cz]) => {
      const axes = g.roadAxes(cx, cz);
      const key = `${cx},${cz}`;
      const hasRoad = axes.x || axes.z;
      ok((g.getNode(key) !== null) === hasRoad, `node/getNode inconsistent at (${cx},${cz})`);
    },
  });
}

export default function suite(runner) {
  runner.test('clean road-graph passes the biome + node detectors (baseline)', async (t) => {
    const clean = await import('../../../src/road_graph.js');
    const g = new clean.RoadGraph(34, 16);
    ok(biomeDetector(g, t.seed).pass, 'clean biome detector must pass');
    ok(nodeDetector(g, t.seed).pass, 'clean node detector must pass');
  });

  runner.test('mutation: biome flip (abs(cz)<=5 -> <=4) is caught by the biome detector', async (t) => {
    const mut = await loadMutated(GRAPH, [['Math.abs(cz) <= 5', 'Math.abs(cz) <= 4']], 'roadgraph-biome');
    const g = new mut.RoadGraph(34, 16);
    const caught = biomeDetector(g, t.seed);
    ok(caught.pass === false,
      `HARNESS GAP: biome mutation NOT caught (${caught.error})`);
  });

  runner.test('mutation: node-creation AND->OR flip is caught by the node-existence detector', async (t) => {
    // Real token in the builder: nodes are created iff `axes.x || axes.z`.
    // Mutating to `axes.x && axes.z` drops highway-x-only / highway-z-only
    // nodes, so node existence no longer matches the road axes — a genuine
    // regression the node detector must catch.
    const mut = await loadMutated(GRAPH, [['axes.x || axes.z', 'axes.x && axes.z']], 'roadgraph-node');
    const g = new mut.RoadGraph(34, 16);
    const caught = nodeDetector(g, t.seed);
    ok(caught.pass === false,
      `HARNESS GAP: node-existence mutation NOT caught (${caught.error})`);
  });

  runner.test('mutation: axis-z flip (abs(cx)<=5 -> <=3) is caught', async (t) => {
    const mut = await loadMutated(GRAPH, [['Math.abs(cx) <= 5', 'Math.abs(cx) <= 3']], 'roadgraph-axisz');
    const g = new mut.RoadGraph(34, 16);
    const caught = biomeDetector(g, t.seed);
    ok(caught.pass === false,
      `HARNESS GAP: axis-z mutation NOT caught (${caught.error})`);
  });



}
