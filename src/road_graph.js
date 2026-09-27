/**
 * RoadGraph — an implicit directed road-network graph over the procedural
 * city's chunk grid.
 *
 * The world is a grid of `chunkSize` cells. Each cell's road layout is
 * derived deterministically from its (cx, cz) chunk coords using the exact
 * same biome rules as ChunkManager (distance from origin + highway bands), so
 * this graph is a pure data structure — no THREE, no WebGL, no browser. It can
 * be verified by `check_world.mjs` in Node without a canvas.
 *
 *   - A city cell (dist < 6) is an intersection: roads along BOTH axes.
 *   - A highway_x cell (|cz| <= 5) has a road along the X axis.
 *   - A highway_z cell (|cx| <= 5) has a road along the Z axis.
 *   - A cross cell (both bands, dist >= 6) has roads along both axes.
 *   - Wasteland has no roads.
 *
 * Nodes are cells that carry at least one road. Directed edges connect two
 * adjacent cells whenever they share a road axis, in both directions (two-way
 * roads). Cars can therefore route intersection-to-intersection instead of
 * pure lane-following.
 *
 * [PLANET-02] The world is no longer one city at the origin, so the graph can
 * no longer hard-code those rules either: pass `{ planet }` (or any
 * `classify(cx,cz) -> {x,z}` function) and the graph reads the real surface
 * model — cities and inter-city roads wherever the planet put them. Without it
 * the historic origin rules stay, so the golden topology snapshot is unaffected.
 * Nodes also grow lazily around the player via `ensure(cx,cz)`, because the road
 * network now extends forever instead of living inside one radius.
 */
export class RoadGraph {
  constructor(chunkSize, radius = 16, opts = {}) {
    this.chunkSize = chunkSize;
    this.radius = radius;
    this.nodes = new Map(); // "cx,cz" -> { cx, cz, x, z, edges: [] }
    this.maxNodes = opts.maxNodes || 6000;
    // Planet-backed axes: any object with classifyChunk(cx,cz) works.
    this.classify = opts.classify || (opts.planet ? (cx, cz) => {
      const cls = opts.planet.classifyChunk(cx, cz);
      if (cls.type === 'city') return { x: true, z: true };
      if (cls.type === 'road') {
        return cls.roadAxis === 'cross'
          ? { x: true, z: true }
          : { x: cls.roadAxis === 'x', z: cls.roadAxis === 'z' };
      }
      return { x: false, z: false };
    } : null);
    this.build();
  }

  key(cx, cz) { return `${cx},${cz}`; }

  /**
   * Road axes for a chunk cell — the planet when we have it, otherwise the
   * historic mirror of ChunkManager.loadChunk.
   */
  roadAxes(cx, cz) {
    if (this.classify) return this.classify(cx, cz);
    const dist = Math.sqrt(cx * cx + cz * cz);
    const isCity = dist < 6;
    if (isCity) return { x: true, z: true };
    const isHighwayX = Math.abs(cz) <= 5;
    const isHighwayZ = Math.abs(cx) <= 5;
    return {
      x: isHighwayX,
      z: isHighwayZ,
    };
  }

  hasRoad(cx, cz, axis) {
    const node = this.nodes.get(this.key(cx, cz));
    return node ? node[axis] : false;
  }

  build() {
    // 1. Create a node for every cell that carries at least one road.
    for (let cx = -this.radius; cx <= this.radius; cx++) {
      for (let cz = -this.radius; cz <= this.radius; cz++) {
        const axes = this.roadAxes(cx, cz);
        if (axes.x || axes.z) {
          this.nodes.set(this.key(cx, cz), {
            cx, cz, x: axes.x, z: axes.z, edges: [],
            key: this.key(cx, cz),
          });
        }
      }
    }

    // 2. Connect adjacent cells along any shared road axis (two-way).
    //    X-axis edges: between (cx,cz) and (cx+1,cz) if both have x roads.
    //    Z-axis edges: between (cx,cz) and (cx,cz+1) if both have z roads.
    const link = (aKey, bKey, axis) => {
      const a = this.nodes.get(aKey);
      const b = this.nodes.get(bKey);
      if (!a || !b) return false;
      if (!a[axis] || !b[axis]) return false;
      a.edges.push({ to: bKey, axis, dir: 1 });
      b.edges.push({ to: aKey, axis, dir: -1 });
      return true;
    };

    for (const node of this.nodes.values()) {
      const nx = this.key(node.cx + 1, node.cz);
      const px = this.key(node.cx - 1, node.cz);
      const nz = this.key(node.cx, node.cz + 1);
      const pz = this.key(node.cx, node.cz - 1);
      link(this.key(node.cx, node.cz), nx, 'x');
      link(this.key(node.cx, node.cz), px, 'x');
      link(this.key(node.cx, node.cz), nz, 'z');
      link(this.key(node.cx, node.cz), pz, 'z');
    }

    this.centerKey = this.key(0, 0);
  }

  /**
   * Grow the graph around a chunk (lazily, as chunks stream). Roads beyond the
   * initial radius therefore exist as soon as the player drives near them, which
   * is what lets cars turn at intersections in a city 3 km from the origin.
   */
  ensure(cx, cz, pad = 1) {
    for (let ix = cx - pad; ix <= cx + pad; ix++) {
      for (let iz = cz - pad; iz <= cz + pad; iz++) {
        const key = this.key(ix, iz);
        if (this.nodes.has(key)) continue;
        const axes = this.roadAxes(ix, iz);
        if (!axes.x && !axes.z) continue;
        const node = { cx: ix, cz: iz, x: !!axes.x, z: !!axes.z, edges: [], key };
        this.nodes.set(key, node);
        // Link to already-known neighbours along a shared axis (two-way).
        for (const [dx, dz, axis] of [[1, 0, 'x'], [-1, 0, 'x'], [0, 1, 'z'], [0, -1, 'z']]) {
          const other = this.nodes.get(this.key(ix + dx, iz + dz));
          if (other && other[axis] && node[axis]) {
            node.edges.push({ to: other.key, axis, dir: dx || dz });
            other.edges.push({ to: key, axis, dir: -(dx || dz) });
          }
        }
      }
    }
    if (this.nodes.size > this.maxNodes) {
      // Keep the graph bounded while streaming: forget and let it regrow around
      // the player. Deterministic — the same drive visits the same cells.
      this.nodes.clear();
      this.build();
    }
    return this.nodes.size;
  }

  nodeCount() { return this.nodes.size; }
  edgeCount() {
    let n = 0;
    for (const node of this.nodes.values()) n += node.edges.length;
    return n;
  }

  getNode(cx, cz) {
    // Accept either a key string ("cx,cz") or two integer coords (cx, cz).
    if (typeof cx === 'string') return this.nodes.get(cx) || null;
    return this.nodes.get(this.key(cx, cz)) || null;
  }

  /**
   * Directed neighbors of a node: [{ to, axis, dir }].
   */
  neighbors(key) {
    const node = this.nodes.get(key);
    return node ? node.edges : [];
  }

  /**
   * Possible perpendicular turns at an intersection node, given the axis the
   * car currently travels. Returns the list of turn axes available.
   */
  turnsAt(key, axis) {
    const node = this.nodes.get(key);
    if (!node) return [];
    const perp = axis === 'x' ? 'z' : 'x';
    const turns = [];
    for (const e of node.edges) {
      if (e.axis === perp && !turns.includes(e.to)) turns.push(e.to);
    }
    return turns;
  }

  /**
   * BFS reachability from the origin intersection — verifies the whole road
   * network is one connected component (no orphan roads).
   */
  connected() {
    const seen = new Set([this.centerKey]);
    const queue = [this.centerKey];
    while (queue.length) {
      const key = queue.shift();
      for (const e of this.neighbors(key)) {
        if (!seen.has(e.to)) {
          seen.add(e.to);
          queue.push(e.to);
        }
      }
    }
    return { reached: seen.size, total: this.nodes.size, connected: seen.size === this.nodes.size };
  }

  /**
   * Shortest path (BFS) between two intersection keys. Returns an array of
   * keys [from, ..., to] or null if unreachable.
   */
  shortestPath(fromKey, toKey) {
    if (fromKey === toKey) return [fromKey];
    const prev = new Map([[fromKey, null]]);
    const queue = [fromKey];
    while (queue.length) {
      const key = queue.shift();
      if (key === toKey) break;
      for (const e of this.neighbors(key)) {
        if (!prev.has(e.to)) {
          prev.set(e.to, key);
          queue.push(e.to);
        }
      }
    }
    if (!prev.has(toKey)) return null;
    const path = [];
    let cur = toKey;
    while (cur !== null) {
      path.push(cur);
      cur = prev.get(cur);
      if (cur === null) break;
    }
    path.reverse();
    return path;
  }

  /**
   * The graph node nearest to a world-space x,z position (for routing cars).
   * Grows the graph on demand so distant roads stay routable.
   */
  nodeAtWorld(x, z) {
    const cx = Math.round(x / this.chunkSize);
    const cz = Math.round(z / this.chunkSize);
    if (!this.nodes.has(this.key(cx, cz))) this.ensure(cx, cz);
    return this.getNode(cx, cz);
  }
}
