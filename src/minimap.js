import { SimplexNoise } from './noise.js';

/**
 * Minimap — small canvas HUD showing the streamed chunk grid around the
 * player, a live player dot, and the current district name.
 *
 * Both paths are first-class:
 *  - Browser: creates a real 160x160 <canvas>, draws every frame.
 *  - Node / check_world.mjs: no WebGL/canvas 2d context → drawing is guarded
 *    off, but `update()` / `districtAt()` / `biomeAt()` stay deterministic so
 *    an agent can assert the minimap's machine-readable state without a canvas.
 *
 * District names are derived from deterministic SimplexNoise over chunk
 * coordinates, so a given world position always maps to the same district
 * across reloads / runs.
 */

export const BIOMES = {
  city: 'city',
  highway: 'highway',
  wasteland: 'wasteland'
};

export const DISTRICT_PALETTE = [
  { name: 'Brick Residential', color: '#c8a07a' },
  { name: 'Financial Core', color: '#7aa0d8' },
  { name: 'Neon District', color: '#d87aa0' },
  { name: 'Industrial Zone', color: '#8a8a8a' },
  { name: 'Parkland', color: '#7ac878' }
];

const BIOME_COLOR = {
  city: 'rgba(80,120,220,0.9)',
  highway: 'rgba(230,200,90,0.9)',
  wasteland: 'rgba(120,100,80,0.9)'
};

export class Minimap {
  constructor(chunkManager, opts = {}) {
    this.chunkManager = chunkManager;
    this.size = opts.size || 160;
    this.chunkSize = chunkManager ? chunkManager.chunkSize : 34;
    this.renderDistance = opts.renderDistance || 3; // chunk-radius drawn

    this.playerChunk = [0, 0];
    this.district = 'City Center';
    this.activeChunks = []; // [{ x, z, biome }] from chunkManager.chunks

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

  /** Recompute the biome at a chunk coordinate (mirrors ChunkManager rules). */
  biomeAt(cx, cz) {
    const dist = Math.sqrt(cx * cx + cz * cz);
    if (dist < 6) return BIOMES.city;
    const hx = Math.abs(cz) <= 5;
    const hz = Math.abs(cx) <= 5;
    if (hx || hz) return BIOMES.highway;
    return BIOMES.wasteland;
  }

  /** Deterministic district label for a chunk coordinate. */
  districtAt(cx, cz) {
    const biome = this.biomeAt(cx, cz);
    if (biome === BIOMES.wasteland) return 'Wasteland';
    if (biome === BIOMES.highway) return 'Highway Corridor';

    const n = SimplexNoise.noise2D(cx * 0.23, cz * 0.23);
    let idx = 0;
    if (n < 0.15) idx = 0;        // Brick Residential
    else if (n < 0.35) idx = 1;   // Financial Core
    else if (n < 0.55) idx = 2;   // Neon District
    else if (n < 0.75) idx = 3;   // Industrial Zone
    else idx = 4;                 // Parkland
    return DISTRICT_PALETTE[idx].name;
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

    // Snapshot active streamed chunks (may be empty on the Node verify path).
    this.activeChunks = [];
    if (this.chunkManager) {
      for (const id of this.chunkManager.chunks.keys()) {
        const parts = id.split(',').map(Number);
        this.activeChunks.push({
          x: parts[0],
          z: parts[1],
          biome: this.biomeAt(parts[0], parts[1])
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
    ctx.fillStyle = 'rgba(20,20,28,0.92)';
    ctx.fillRect(0, 0, s, s);

    // Draw the visible chunk grid around the player.
    const [pcx, pcz] = this.playerChunk;
    const cell = s / (this.renderDistance * 2 + 1);
    const drawn = new Set();
    for (let dx = -this.renderDistance; dx <= this.renderDistance; dx++) {
      for (let dz = -this.renderDistance; dz <= this.renderDistance; dz++) {
        const cx = pcx + dx;
        const cz = pcz + dz;
        const id = `${cx},${cz}`;
        drawn.add(id);
        const x = (dx + this.renderDistance) * cell;
        const y = (dz + this.renderDistance) * cell;
        ctx.fillStyle = BIOME_COLOR[this.biomeAt(cx, cz)];
        ctx.fillRect(x + 1, y + 1, cell - 2, cell - 2);
        ctx.strokeStyle = 'rgba(255,255,255,0.15)';
        ctx.strokeRect(x + 1, y + 1, cell - 2, cell - 2);
      }
    }

    // Player dot (world center).
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(s / 2, s / 2, Math.max(3, cell * 0.35), 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#ff4d4d';
    ctx.stroke();

    // District label.
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 11px monospace';
    ctx.fillText(this.district, 6, s - 8);
    ctx.fillStyle = 'rgba(255,255,255,0.6)';
    ctx.font = '9px monospace';
    ctx.fillText(`chunk ${this.playerChunk[0]},${this.playerChunk[1]}`, 6, s - 20);
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
