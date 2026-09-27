import { SimplexNoise } from './noise.js';
import { BIOME_TABLE, CITY_KINDS, planet as sharedPlanet } from './planet.js';

/**
 * Minimap — the planet HUD.
 *
 * It used to draw three colours (city / highway / wasteland) because that is
 * all the world had. Now it draws the actual surface model: ground tinted by
 * biome, water where the planet says there is water, inter-city roads, and a
 * pin + name for every settlement near the player — so a drive through the
 * wilds reads as "crossing a planet", not "driving off the map".
 *
 * Both paths stay first-class:
 *  - Browser: a real canvas, redrawn every frame.
 *  - Node / check_world.mjs: no 2d context → drawing is guarded off, but
 *    `update()` / `districtAt()` / `biomeAt()` / `settlementsNear()` stay
 *    deterministic so an agent can assert the map's meaning without pixels.
 */

export const BIOMES = {
  city: 'city',
  highway: 'highway',
  wild: 'wild',
};

/** District flavours inside a settlement (kept from the pre-planet HUD). */
export const DISTRICT_PALETTE = [
  { name: 'Brick Residential', color: '#c8a07a' },
  { name: 'Financial Core', color: '#7aa0d8' },
  { name: 'Neon District', color: '#d87aa0' },
  { name: 'Industrial Zone', color: '#8a8a8a' },
  { name: 'Parkland', color: '#7ac878' }
];

/** Pin colours per settlement kind, shared with the legend. */
export const KIND_COLORS = {
  metropolis: '#6fa8ff', downtown: '#8fb8e0', oldtown: '#d8a86a',
  industrial: '#9a9a9a', suburbia: '#a8d08a', neon: '#ff6fd8',
  harbour: '#5fd0d0', agro: '#c8d06a', outpost: '#e0a05a', winter: '#e8f0ff',
};

function hexToCss(hex) {
  return '#' + hex.toString(16).padStart(6, '0');
}

export class Minimap {
  constructor(chunkManager, opts = {}) {
    this.chunkManager = chunkManager;
    this.size = opts.size || 180;
    this.chunkSize = chunkManager ? chunkManager.chunkSize : 96;
    this.renderDistance = opts.renderDistance || 3; // chunk-radius drawn

    // The planet is the map's data source; the chunk manager is only where we
    // learn the chunk size and which chunks are currently streamed.
    this.planet = (chunkManager && chunkManager.planet) || sharedPlanet({ chunkSize: this.chunkSize });

    this.playerChunk = [0, 0];
    this.district = 'First Landing';
    this.region = '';
    this.biome = '';
    this.nearest = null;        // { name, kind, label, dist, x, z }
    this.nearbyCities = [];     // settlements inside the drawn radius
    this.activeChunks = [];     // [{ x, z, biome, type }]

    this.canvas = null;
    this.ctx = null;
    this._tryCreateCanvas();
  }

  /** Browser-only: build the HUD canvas. Node stub lacks canvas 2d → guarded. */
  _tryCreateCanvas() {
    try {
      const el = document.createElement('canvas');
      el.width = this.size;
      el.height = this.size;
      this.canvas = el;
      this.ctx = el.getContext && el.getContext('2d');
      if (this.ctx) {
        el.style.position = 'absolute';
        el.style.left = '10px';
        el.style.bottom = '10px';
        el.style.border = '1px solid rgba(255,255,255,0.35)';
        el.style.boxShadow = '0 2px 8px rgba(0,0,0,0.5)';
        el.style.fontFamily = 'monospace';
        document.body.appendChild(el);
      }
    } catch (e) {
      this.canvas = null;
      this.ctx = null;
    }
    return this;
  }

  /** Map-space biome class for a chunk: city / highway / wild (planet-backed). */
  biomeAt(cx, cz) {
    const cls = this.planet.classifyChunk(cx, cz);
    if (cls.type === 'city') return BIOMES.city;
    if (cls.type === 'road') return BIOMES.highway;
    return BIOMES.wild;
  }

  /** Planet biome name (forest, ocean, desert …) for a chunk. */
  surfaceAt(cx, cz) {
    return this.planet.classifyChunk(cx, cz).biome;
  }

  /** Fill colour for a chunk — the planet's own ground tint, or its pin colour. */
  colorAt(cx, cz) {
    const cls = this.planet.classifyChunk(cx, cz);
    if (cls.type === 'city') {
      const kind = cls.city && cls.city.kind;
      return (kind && KIND_COLORS[kind]) || DISTRICT_PALETTE[1].color;
    }
    if (cls.type === 'road') return '#c8b040';
    const info = this.planet.biomeInfo(cls.biome);
    return hexToCss(info.ground);
  }

  /**
   * Human name for a place: "Rhoaemar Terminus · Metropolis" in a city,
   * "Varibacklands · forest" in the wilds. Deterministic per coordinate.
   */
  districtAt(cx, cz) {
    const cls = this.planet.classifyChunk(cx, cz);
    if (cls.type === 'city' && cls.city) {
      const n = SimplexNoise.noise2D(cx * 0.23, cz * 0.23);
      const flavour = DISTRICT_PALETTE[Math.abs(Math.floor(n * DISTRICT_PALETTE.length)) % DISTRICT_PALETTE.length].name;
      return `${cls.city.name} · ${cls.city.label} · ${flavour}`;
    }
    if (cls.type === 'road') return 'Inter-City Highway';
    return `${cls.region} · ${cls.biome}`;
  }

  /** Settlements whose footprint touches the drawn chunk square. */
  settlementsNear(pcx, pcz) {
    const r = this.renderDistance + 2;
    return this.planet.citiesInChunkRange(pcx - r, pcz - r, pcx + r, pcz + r);
  }

  /** Closest settlement to a world position (HUD "next city" line). */
  nearestSettlement(x, z) {
    const hit = this.planet.nearestCity(x, z);
    if (!hit) return null;
    const c = hit.city;
    return { name: c.name, kind: c.kind, label: c.label, population: c.population, dist: Math.round(hit.dist), x: c.x, z: c.z };
  }

  /** Refresh state from the live chunk manager + player world position. */
  update(playerPos) {
    const px = playerPos ? playerPos.x : 0;
    const pz = playerPos ? playerPos.z : 0;
    this.playerChunk = [
      Math.floor(px / this.chunkSize),
      Math.floor(pz / this.chunkSize)
    ];
    this.district = this.districtAt(this.playerChunk[0], this.playerChunk[1]);
    const cls = this.planet.classifyChunk(this.playerChunk[0], this.playerChunk[1]);
    this.biome = cls.biome;
    this.region = cls.region;
    this.nearest = this.nearestSettlement(px, pz);
    this.nearbyCities = this.settlementsNear(this.playerChunk[0], this.playerChunk[1]);

    // Snapshot active streamed chunks (may be empty on the Node verify path).
    this.activeChunks = [];
    if (this.chunkManager) {
      for (const id of this.chunkManager.chunks.keys()) {
        const parts = id.split(',').map(Number);
        this.activeChunks.push({
          x: parts[0],
          z: parts[1],
          biome: this.surfaceAt(parts[0], parts[1]),
          type: this.biomeAt(parts[0], parts[1])
        });
      }
    }

    this._draw();
    return this;
  }

  /** Canvas render — no-op when no 2d context (Node path). */
  _draw() {
    const ctx = this.ctx;
    if (!ctx) return;

    const s = this.size;
    ctx.clearRect(0, 0, s, s);
    ctx.fillStyle = 'rgba(14,16,22,0.92)';
    ctx.fillRect(0, 0, s, s);

    const [pcx, pcz] = this.playerChunk;
    const R = this.renderDistance;
    const cell = s / (R * 2 + 1);

    // Surface: one square per chunk, tinted by the planet itself.
    for (let dx = -R; dx <= R; dx++) {
      for (let dz = -R; dz <= R; dz++) {
        const cx = pcx + dx, cz = pcz + dz;
        const x = (dx + R) * cell, y = (dz + R) * cell;
        ctx.fillStyle = this.colorAt(cx, cz);
        ctx.fillRect(x, y, cell, cell);
        ctx.strokeStyle = 'rgba(255,255,255,0.10)';
        ctx.strokeRect(x + 0.5, y + 0.5, cell - 1, cell - 1);
      }
    }

    // Settlement pins beyond the streamed square, so you can steer toward them.
    ctx.font = 'bold 9px monospace';
    for (const c of this.nearbyCities) {
      const dx = c.cx - pcx, dz = c.cz - pcz;
      if (Math.abs(dx) > R || Math.abs(dz) > R) continue;
      const px = (dx + R + 0.5) * cell, py = (dz + R + 0.5) * cell;
      ctx.strokeStyle = KIND_COLORS[c.kind] || '#ffffff';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(px, py, Math.max(4, cell * 0.42), 0, Math.PI * 2);
      ctx.stroke();
      ctx.lineWidth = 1;
      ctx.fillStyle = '#ffffff';
      ctx.fillText(c.name, px + cell * 0.5, py - 2);
    }

    // Player.
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(s / 2, s / 2, Math.max(3, cell * 0.32), 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#ff4d4d';
    ctx.stroke();

    // Place label + coordinates.
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 11px monospace';
    ctx.fillText(this.district, 6, s - 8);
    ctx.fillStyle = 'rgba(255,255,255,0.6)';
    ctx.font = '9px monospace';
    ctx.fillText(`chunk ${pcx},${pcz}`, 6, s - 20);
    if (this.nearest) {
      ctx.fillStyle = 'rgba(160,200,255,0.95)';
      ctx.fillText(`▶ ${this.nearest.name} ${this.nearest.dist}m`, 6, 12);
    }
  }

  /** Browser only: destroy the HUD canvas. */
  dispose() {
    if (this.canvas && this.canvas.parentNode) {
      this.canvas.parentNode.removeChild(this.canvas);
    }
    this.canvas = null;
    this.ctx = null;
  }
}
