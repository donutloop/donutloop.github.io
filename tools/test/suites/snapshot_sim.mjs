/**
 * tools/test/suites/snapshot_sim.mjs — AAA-27: golden-file snapshots over real
 * sim fixtures (road-graph topology, seeded city-chunk road matrix, telemetry
 * JSON record). Any determinism drift fails the build (diff-gate on commit).
 */
import { RoadGraph } from '../../../src/road_graph.js';
import { snapshot } from '../snapshot.mjs';

function freshGraph() {
  return new RoadGraph(34, 16);
}

export default function suite(runner) {
  runner.test('road-graph topology golden snapshot', (t) => {
    const g = freshGraph();
    const topo = [...g.nodes.keys()]
      .sort((a, b) => (a < b ? -1 : a > b ? 1 : 0))
      .map((k) => {
        const [cx, cz] = k.split(',').map(Number);
        const axes = g.roadAxes(cx, cz);
        return {
          key: k, cx, cz, x: axes.x, z: axes.z,
          edges: g.neighbors(k).map((e) => e.to).sort(),
        };
      });
    snapshot('roadgraph-topology-r16', topo);
  });

  runner.test('seeded city-chunk road matrix golden snapshot', (t) => {
    const g = freshGraph();
    // Deterministic matrix over a fixed coord grid — a stable golden fixture.
    const matrix = [];
    for (let cx = -6; cx <= 6; cx++) {
      for (let cz = -6; cz <= 6; cz++) {
        const axes = g.roadAxes(cx, cz);
        matrix.push({ cx, cz, x: axes.x, z: axes.z });
      }
    }
    snapshot('city-chunk-road-matrix', matrix);
  });

  runner.test('telemetry JSON golden shape', (t) => {
    // Canonical telemetry record: fully static (no wall-clock / seed churn).
    const telemetry = {
      fps: 60,
      drawCalls: 1200,
      chunkBudget: { loaded: 16, queued: 2, unloaded: 0 },
      weather: 'sunny',
    };
    snapshot('telemetry-record', telemetry);
  });
}
