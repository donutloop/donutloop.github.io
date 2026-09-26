import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';

export class EffectSystem {
    constructor(scene) {
        this.scene = scene;
        this.particles = [];
        this.emitters = [];
        this.sirens = []; // Gap D — rotating emergency lights
    }

    // Gap D — attach pulsing red/blue emergency lights to an EMS vehicle roof.
    createEmergencyLights(parentObject) {
        const redMat = new THREE.MeshBasicMaterial({ color: 0xff1111, transparent: true, opacity: 0 });
        const blueMat = new THREE.MeshBasicMaterial({ color: 0x1111ff, transparent: true, opacity: 0 });
        const red = new THREE.Mesh(new THREE.SphereGeometry(0.16, 8, 8), redMat);
        const blue = new THREE.Mesh(new THREE.SphereGeometry(0.16, 8, 8), blueMat);
        red.position.set(-0.4, 1.5, 0);
        blue.position.set(0.4, 1.5, 0);
        red.userData = { parent: parentObject, siren: true };
        blue.userData = { parent: parentObject, siren: true };
        this.scene.add(red);
        this.scene.add(blue);
        this.sirens.push({ red, blue, parent: parentObject, timer: 0 });
        return this.sirens[this.sirens.length - 1];
    }

    addEmitter(object, type) {
        // Check if emitter already exists
        const exists = this.emitters.find(e => e.object === object && e.type === type);
        if (exists) return;

        this.emitters.push({
            object: object,
            type: type,
            timer: 0
        });
    }

    createCrashEffect(position) {
        const particleCount = 20;
        const geometry = new THREE.BoxGeometry(0.3, 0.3, 0.3);
        const material = new THREE.MeshBasicMaterial({ color: 0xffaa00 }); // Orange sparks

        for (let i = 0; i < particleCount; i++) {
            const particle = new THREE.Mesh(geometry, material);
            particle.position.copy(position);

            // Random scatter
            particle.position.x += (Math.random() - 0.5) * 1.0;
            particle.position.y += (Math.random() - 0.5) * 1.0;
            particle.position.z += (Math.random() - 0.5) * 1.0;

            const velocity = new THREE.Vector3(
                (Math.random() - 0.5) * 10,
                Math.random() * 10 + 2, // Upward bias
                (Math.random() - 0.5) * 10
            );

            this.scene.add(particle);
            this.particles.push({ mesh: particle, velocity: velocity, life: 1.0 });
        }
    }

    createFireEffect(parentObject) {
        // Create a fire emitter attached to the car
        // We add single particles every frame in update() for "emitters", or just chunks here.
        // Simple approach: Add static fire particles relative to parent

        const count = 5;
        const geom = new THREE.BoxGeometry(0.4, 0.4, 0.4);
        const mat = new THREE.MeshBasicMaterial({ color: 0xff4400 });

        for (let i = 0; i < count; i++) {
            const p = new THREE.Mesh(geom, mat);
            // Position relative to car center (engine bay?)
            p.position.set((Math.random() - 0.5) * 1, 1 + Math.random(), 2 + (Math.random() - 0.5));
            p.userData = {
                parent: parentObject,
                offset: p.position.clone(),
                type: 'fire',
                life: 2.0 + Math.random()
            };
            this.scene.add(p);
            this.particles.push({ mesh: p, velocity: new THREE.Vector3(0, 5, 0), life: p.userData.life, isAttached: true });
        }
    }

    createSmokeEffect(parentObject) {
        const count = 5;
        const geom = new THREE.BoxGeometry(0.5, 0.5, 0.5);
        const mat = new THREE.MeshBasicMaterial({ color: 0x555555 });

        for (let i = 0; i < count; i++) {
            const p = new THREE.Mesh(geom, mat);
            p.position.set((Math.random() - 0.5) * 1, 1.5 + Math.random(), 2);
            p.userData = {
                parent: parentObject,
                offset: p.position.clone(),
                type: 'smoke',
                life: 3.0 + Math.random()
            };
            this.scene.add(p);
            this.particles.push({ mesh: p, velocity: new THREE.Vector3(0, 3, 0), life: p.userData.life, isAttached: true });
        }
    }

    update(delta) {
        // Update Emitters
        for (const emitter of this.emitters) {
            emitter.timer -= delta;
            if (emitter.timer <= 0) {
                if (emitter.type === 'fire') {
                    this.createFireEffect(emitter.object);
                    emitter.timer = 0.1; // Spawn every 0.1s
                } else if (emitter.type === 'smoke') {
                    this.createSmokeEffect(emitter.object);
                    emitter.timer = 0.2; // Spawn every 0.2s
                }
            }
        }

        for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];
            p.life -= delta;

            if (p.life <= 0) {
                this.scene.remove(p.mesh);
                this.particles.splice(i, 1);
                // clean up
                if (p.mesh.geometry) p.mesh.geometry.dispose();
                // Material is shared, don't dispose here unless cloned
            } else {
                // Physics
                if (p.isAttached) {
                    // Emitter style: Reset life if attached to simulate continuous fire?
                    // Or just float up from current position
                    // Complex. Let's make them float UP from world position, but SPAWN attached.
                    // Actually, if we want them to follow the car, they need to update position based on parent.

                    // For now: "Attached" particles spawn once and float away. 
                    // To sustain fire, caller needs to call createFireEffect repeatedly?
                    // Better: Player calls it every few frames if damaged.

                    p.velocity.y += delta * 2; // Smoke/Fire rises
                    p.mesh.position.addScaledVector(p.velocity, delta);

                    // If it was attached, we set initial position in world space based on parent
                    if (p.mesh.userData.parent && p.life > p.mesh.userData.life - 0.1) {
                        const parent = p.mesh.userData.parent;
                        // Safety Check: Ensure parent has valid matrixWorld
                        if (parent && parent.matrixWorld) {
                            const worldPos = p.mesh.userData.offset.clone();
                            worldPos.applyMatrix4(parent.matrixWorld);
                            p.mesh.position.copy(worldPos);
                        }
                        p.isAttached = false; // Detach immediately so it leaves a trail
                    }
                } else {
                    p.velocity.y -= 20 * delta; // Gravity (sparks)
                    p.mesh.position.addScaledVector(p.velocity, delta);
                }

                p.mesh.rotation.x += delta * 5;
                p.mesh.rotation.y += delta * 5;
                p.mesh.scale.setScalar(p.life); // Shrink
            }
        }

        // Gap D — pulse emergency lights; detach when the EMS vehicle despawns.
        for (let i = this.sirens.length - 1; i >= 0; i--) {
            const s = this.sirens[i];
            const alive = s.parent && s.parent.visible;
            if (!alive) {
                this.scene.remove(s.red);
                this.scene.remove(s.blue);
                s.red.geometry.dispose(); s.red.material.dispose();
                s.blue.geometry.dispose(); s.blue.material.dispose();
                this.sirens.splice(i, 1);
                continue;
            }
            s.timer += delta;
            // Alternate red/blue flashes (rotating-light illusion)
            const on = s.timer % 0.5 < 0.25;
            s.red.material.opacity = on ? 1 : 0;
            s.blue.material.opacity = on ? 0 : 1;
        }
    }
}


/**
 * PostProcessingPipeline — a deterministic, dual-path post-processing stage.
 *
 * Browser path: when a real WebGL renderer is supplied it builds an
 * EffectComposer with RenderPass → UnrealBloomPass (neon-district glow) →
 * droplet ShaderPass (rain/snow overlay) → OutputPass. main.js renders
 * through the composer instead of `renderer.render`.
 *
 * Machine/Node path (`check_world.mjs`): no renderer → `enabled=false`, no
 * composer is built, but `update()` still computes the exact bloom/droplet
 * targets from weather + neon district state, so an agent can assert the
 * pipeline is deterministic without a WebGL context.
 */
export class PostProcessingPipeline {
  constructor({ renderer = null, scene = null, camera = null } = {}) {
    this.renderer = renderer;
    this.scene = scene;
    this.camera = camera;
    // Browser has a real renderer; Node verification does not.
    this.enabled = !!renderer && !!scene && !!camera;

    // Deterministic target state (computed on both paths).
    this.bloom = {
      strength: 0.0,   // scales with neon district density
      threshold: 1.0,  // lowered when neon is present so glow blooms
      radius: 0.6
    };
    this.droplets = { intensity: 0.0 }; // scales with precipAlpha

    // Logical pass list — what the pipeline WOULD contain.
    this.passes = ['render', 'bloom', 'droplets', 'output'];

    this.composer = null;
    this.bloomPass = null;
    this.dropletPass = null;
    this.dropletUniforms = null;
    this.clock = null;

    if (this.enabled) this._build();
  }

  // --- Droplet overlay shader (additive, transparent) -----------------------
  static dropletShader() {
    return {
      uniforms: {
        tDiffuse: { value: null },
        uIntensity: { value: 0.0 },
        uTime: { value: 0.0 },
        uResolution: { value: new THREE.Vector2(1, 1) }
      },
      vertexShader: [
        'varying vec2 vUv;',
        'void main() {',
        '  vUv = uv;',
        '  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);',
        '}'
      ].join('\n'),
      fragmentShader: [
        'uniform float uIntensity;',
        'uniform float uTime;',
        'uniform vec2 uResolution;',
        'varying vec2 vUv;',
        'uniform sampler2D tDiffuse;',
        '',
        'float hash(vec2 p) {',
        '  vec3 p3 = fract(vec3(p.xyx) * 0.1031);',
        '  p3 += dot(p3, p3.zxy + 33.33);',
        '  return fract((p3.x + p3.y) * p3.z);',
        '}',
        '',
        'void main() {',
        '  vec2 uv = vUv;',
        '  float aspect = uResolution.x / uResolution.y;',
        '  vec2 p = vec2(uv.x * aspect, uv.y);',
        '  float grid = 10.0;',
        '  vec2 id = floor(p * grid);',
        '  vec2 gv = fract(p * grid) - 0.5;',
        '  float t = uTime * 6.0;',
        '',
        '  // per-cell droplet: random x, falling y',
        '  vec2 o = vec2(hash(id) - 0.5, -t * (0.25 + hash(id + 1.0)));',
        '  gv -= o;',
        '',
        '  // droplet disc',
        '  float r = length(gv * vec2(1.0, 0.55));',
        '  float drop = smoothstep(0.07, 0.0, r);',
        '',
        '  // thin vertical streak (tail)',
        '  float streak = smoothstep(0.02, 0.0, abs(gv.x))',
        '              * smoothstep(0.28, 0.0, abs(gv.y)) * 0.5;',
        '',
        '  // only some cells carry a droplet',
        '  float has = step(0.25, hash(id + 3.0));',
        '  vec4 sceneColor = texture2D(tDiffuse, vUv);',
        '  float v = (drop + streak) * has * uIntensity;',
        '  gl_FragColor = vec4(sceneColor.rgb + vec3(v) * 0.25, 1.0);',
        '}'
      ].join('\n')
    };
  }

  _build() {
    const w = window.innerWidth;
    const h = window.innerHeight;

    this.composer = new EffectComposer(this.renderer);
    this.composer.addPass(new RenderPass(this.scene, this.camera));

    this.bloomPass = new UnrealBloomPass(
      new THREE.Vector2(w, h),
      this.bloom.strength,
      this.bloom.radius,
      this.bloom.threshold
    );
    this.composer.addPass(this.bloomPass);

    const shader = PostProcessingPipeline.dropletShader();
    this.dropletUniforms = shader.uniforms;
    this.dropletUniforms.uResolution.value.set(w, h);
    this.dropletPass = new ShaderPass(shader);
    this.dropletPass.material.blending = THREE.AdditiveBlending;
    this.dropletPass.material.transparent = true;
    this.composer.addPass(this.dropletPass);

    this.composer.addPass(new OutputPass());

    this.clock = new THREE.Clock();
  }

  /**
   * Deterministic update. Computes bloom from neon district density and
   * droplet overlay from precipitation alpha. Applies to real passes on the
   * browser path; on the Node path it only updates the target state.
   */
  update(weather, neonBoost = 0) {
    const precip = weather ? weather.precipAlpha : 0;
    this.droplets.intensity = THREE.MathUtils.clamp(precip, 0, 1);
    this.bloom.strength = THREE.MathUtils.clamp(neonBoost * 0.9, 0, 1.5);
    this.bloom.threshold = THREE.MathUtils.clamp(0.25 + (1 - neonBoost) * 0.6, 0.1, 1.0);
    this.bloom.radius = 0.6;

    if (this.enabled && this.bloomPass) {
      this.bloomPass.strength = this.bloom.strength;
      this.bloomPass.threshold = this.bloom.threshold;
      this.bloomPass.radius = this.bloom.radius;
    }
    if (this.enabled && this.dropletPass) {
      this.dropletUniforms.uIntensity.value = this.droplets.intensity;
      this.dropletUniforms.uTime.value = this.clock.getElapsedTime();
    }
    return this.estimate();
  }

  /** Machine-readable snapshot for `check_world.mjs`. */
  estimate() {
    return {
      enabled: this.enabled,
      bloom: { ...this.bloom },
      droplets: { ...this.droplets },
      passes: [...this.passes]
    };
  }

  /** Render through the composer on the browser path. */
  render() {
    if (this.enabled && this.composer) this.composer.render();
  }

  /** Keep bloom resolution in sync on window resize. */
  resize() {
    if (!this.enabled) return;
    const w = window.innerWidth;
    const h = window.innerHeight;
    if (this.bloomPass) this.bloomPass.setSize(w, h);
    if (this.dropletUniforms) this.dropletUniforms.uResolution.value.set(w, h);
  }
}
