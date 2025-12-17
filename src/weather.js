import * as THREE from 'three';

export class WeatherSystem {
    constructor(scene, directionalLight, ambientLight, materials) {
        this.scene = scene;
        this.directionalLight = directionalLight;
        this.ambientLight = ambientLight;
        this.materials = materials; // { road, sidewalk, building }

        this.particles = null;
        this.particles = null;
        this.particleCount = 12000;
        this.particleSystem = null;
        this.particleSystem = null;

        // Sky Elements
        this.sun = null;
        this.clouds = null;

        this.currentWeather = 'sunny';
        this.gameTime = 12.0; // Start at Noon (12:00)

        // Calculate Day of Year from Real World Date
        const now = new Date();
        const start = new Date(now.getFullYear(), 0, 0);
        const diff = now - start;
        const oneDay = 1000 * 60 * 60 * 24;
        const dayOfYear = Math.floor(diff / oneDay);

        this.day = dayOfYear;
        this.year = 1;

        console.log(`Weather Initialized: Real World Date ${now.toDateString()} -> Game Day ${this.day}`);

        this.timeSinceLastWeatherChange = 0;
        this.weatherChangeInterval = 2; // Check/Change weather every 2 game hours roughly

        // --- REALISM: Smooth Transitions & Wind ---
        this.targetWeatherState = {
            fogDensity: 0.002,
            lightIntensity: 1.5,
            ambientIntensity: 0.6,
            skyColorHex: 0x87CEEB,
            precipAlpha: 0.0, // 0 = None, 1 = Full
            roughness: 0.9,
            wetness: 0.0, // 0 = Dry, 1 = Wet
            precipType: 'none' // 'rain', 'snow', 'none'
        };

        this.currentWeatherState = { ...this.targetWeatherState };
        this.transitionSpeed = 0.5; // Lerp speed per second

        // Wind
        this.windTime = 0;
        this.windVector = new THREE.Vector3(5, 0, 2);

        this.initParticles();
        this.initSky();

        // Apply default based on season immediately
        this.pickWeatherForSeason();
    }

    initParticles() {
        const geometry = new THREE.BufferGeometry();
        const positions = [];
        const velocities = []; // x = swayPhase, y = speedMult, z = unused

        for (let i = 0; i < this.particleCount; i++) {
            positions.push((Math.random() - 0.5) * 1000); // x
            positions.push(Math.random() * 500);       // y
            positions.push((Math.random() - 0.5) * 1000); // z

            // Store random attributes for variety
            velocities.push((Math.random() - 0.5) * 20); // sway phase offset
        }

        geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        geometry.setAttribute('velocity', new THREE.Float32BufferAttribute(velocities, 1)); // Reusing name 'velocity' for custom data

        const material = new THREE.PointsMaterial({
            color: 0xaaaaaa,
            size: 0.5,
            transparent: true,
            opacity: 0.0, // Start invisible
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });

        this.particleSystem = new THREE.Points(geometry, material);
        this.particleSystem.visible = true; // Always "visible" but opacity controls it
        this.particleSystem.frustumCulled = false;
        this.scene.add(this.particleSystem);
        this.particles = geometry;
    }

    initSky() {
        // Sun
        const sunGeom = new THREE.SphereGeometry(80, 32, 32);
        const sunMat = new THREE.MeshBasicMaterial({
            color: 0xffdd44,
            fog: false
        });
        this.sun = new THREE.Mesh(sunGeom, sunMat);
        this.sun.position.set(50, 500, 50);
        this.scene.add(this.sun);
    }

    // --- Weather Setters (Update Targets Only) ---

    setSunny() {
        console.log('Weather Target: Sunny');
        this.currentWeather = 'sunny';
        this.targetWeatherState.precipType = 'none';
        this.targetWeatherState.fogDensity = 0.002;
        this.targetWeatherState.skyColorHex = 0x87CEEB;
        this.targetWeatherState.lightIntensity = 2.0;
        this.targetWeatherState.ambientIntensity = 0.6;
        this.targetWeatherState.precipAlpha = 0.0;
        this.targetWeatherState.roughness = 0.9;
        this.targetWeatherState.wetness = 0.0;
    }

    setRain() {
        console.log('Weather Target: Rain');
        this.currentWeather = 'rain';
        this.targetWeatherState.precipType = 'rain';
        this.targetWeatherState.fogDensity = 0.02;
        this.targetWeatherState.skyColorHex = 0x050510;
        this.targetWeatherState.lightIntensity = 0.5;
        this.targetWeatherState.ambientIntensity = 0.2;
        this.targetWeatherState.precipAlpha = 0.6;
        this.targetWeatherState.roughness = 0.1;
        this.targetWeatherState.wetness = 1.0;
    }

    setSnow() {
        console.log('Weather Target: Snow');
        this.currentWeather = 'snow';
        this.targetWeatherState.precipType = 'snow';
        this.targetWeatherState.fogDensity = 0.03;
        this.targetWeatherState.skyColorHex = 0xeeeeee;
        this.targetWeatherState.lightIntensity = 1.5;
        this.targetWeatherState.ambientIntensity = 0.8;
        this.targetWeatherState.precipAlpha = 0.9;
        this.targetWeatherState.roughness = 1.0;
        this.targetWeatherState.wetness = 0.0;
    }

    update(delta, playerPos = new THREE.Vector3()) {
        const hoursPerSec = 0.04;
        this.gameTime += delta * hoursPerSec;

        // Day Cycle
        if (this.gameTime >= 24) {
            this.gameTime = 0;
            this.day++;
            console.log(`Day Info: Day ${this.day}, Year ${this.year}`);
            if (this.day > 365) {
                this.day = 1;
                this.year++;
            }
        }

        // --- INTERPOLATE STATES ---
        const lerpFactor = Math.min(delta * this.transitionSpeed, 1.0);
        const curr = this.currentWeatherState;
        const targ = this.targetWeatherState;

        curr.fogDensity += (targ.fogDensity - curr.fogDensity) * lerpFactor;
        curr.lightIntensity += (targ.lightIntensity - curr.lightIntensity) * lerpFactor;
        curr.ambientIntensity += (targ.ambientIntensity - curr.ambientIntensity) * lerpFactor;
        curr.precipAlpha += (targ.precipAlpha - curr.precipAlpha) * lerpFactor;
        curr.roughness += (targ.roughness - curr.roughness) * lerpFactor;
        // Color Lerp
        const resultColor = new THREE.Color(curr.skyColorHex);
        const targetColor = new THREE.Color(targ.skyColorHex);
        resultColor.lerp(targetColor, lerpFactor);
        curr.skyColorHex = resultColor.getHex();

        // Update Materials
        if (this.materials.road) {
            this.materials.road.roughness = curr.roughness;
            // Blend road color? Wet roads are darker.
            const dryC = new THREE.Color(this.currentWeather === 'snow' ? 0xeeeeee : 0x222222);
            const wetC = new THREE.Color(0x050505);
            // Rough logic: water darkens
            if (targ.wetness > 0) this.materials.road.color.lerp(wetC, lerpFactor * 0.5);
            else this.materials.road.color.lerp(dryC, lerpFactor * 0.5);
        }

        // Apply to Scene
        this.updateTimeCycle(playerPos); // Use interpolated values inside here where possible

        // Manual override for scene values that updateTimeCycle might also touch:
        // (Ideally we merge logic, but for now we blend the weather effects ON TOP of day/night)

        // Wind Physics
        this.windTime += delta;
        // Simple Perlin-ish noise for wind
        const noise = Math.sin(this.windTime * 0.5) + Math.sin(this.windTime * 0.1) * 0.5;
        this.windVector.x = 10 + noise * 10; // 0 to 20
        this.windVector.z = noise * 5;

        // Particles
        this.updateParticles(delta, playerPos);

        this.updateWeatherAutomation(delta * hoursPerSec);
    }

    updateParticles(delta, playerPos) {
        if (!this.particleSystem) return;

        const pAlpha = this.currentWeatherState.precipAlpha;
        this.particleSystem.material.opacity = pAlpha;

        if (pAlpha < 0.01) return; // Skip calculation if invisible

        // Type determines physics
        const isRain = this.targetWeatherState.precipType === 'rain';
        this.particleSystem.material.color.setHex(isRain ? 0xaaccff : 0xffffff);
        this.particleSystem.material.size = isRain ? 0.8 : 1.5;

        const positions = this.particles.attributes.position.array;
        const customData = this.particles.attributes.velocity.array; // [swayPhase, ...]

        const range = 500;
        const topHeight = 500;
        const bottomHeight = -50;

        const baseFallSpeed = isRain ? 90 : 20;

        // Optimization: Pre-calculate globally applicable wind values
        const globalWindX = this.windVector.x * delta;
        const globalWindZ = this.windVector.z * delta;
        const windTime = this.windTime;

        for (let i = 0; i < this.particleCount; i++) {
            let px = positions[i * 3];
            let py = positions[i * 3 + 1];
            let pz = positions[i * 3 + 2];

            // Fall
            let speed = baseFallSpeed;
            if (!isRain) {
                // Snow flutters; Simplified math
                const swayPhase = customData[i];
                const turbulence = Math.sin(windTime * 2 + swayPhase);
                speed += turbulence * 5;

                // Apply Turbulence to position (Simulates local wind var)
                px += turbulence * 5 * delta;
                pz += turbulence * 5 * delta;
                py -= turbulence * 2 * delta;
            }

            py -= speed * delta;
            px -= globalWindX;
            pz -= globalWindZ;

            // Height Wrap
            if (py < bottomHeight) {
                py = topHeight;
            }

            // X/Z Wrapping relative to Player
            let dx = px - playerPos.x;
            let dz = pz - playerPos.z;
            let wrapped = false;

            if (dx > range) { px -= range * 2; wrapped = true; }
            if (dx < -range) { px += range * 2; wrapped = true; }
            if (dz > range) { pz -= range * 2; wrapped = true; }
            if (dz < -range) { pz += range * 2; wrapped = true; }

            if (wrapped) {
                py = Math.random() * topHeight;
            }

            positions[i * 3] = px;
            positions[i * 3 + 1] = py;
            positions[i * 3 + 2] = pz;
        }
        this.particles.attributes.position.needsUpdate = true;
    }

    updateTimeCycle(playerPos) {
        // Reuse previous sun logic but blend with weather states
        const t = this.gameTime;
        let sunAngle = 0;

        if (t >= 6 && t < 18) sunAngle = ((t - 6) / 12) * Math.PI;
        else sunAngle = ((t - 6) / 24) * Math.PI * 2;

        const radius = 800;
        const sunRelX = Math.cos(sunAngle) * radius;
        const sunRelY = Math.sin(sunAngle) * radius;

        if (this.sun) {
            this.sun.position.set(playerPos.x + sunRelX, sunRelY, playerPos.z);
            // Hide sun visual if heavy weather interpolation
            this.sun.visible = this.currentWeatherState.precipAlpha < 0.5;

            if (sunRelY < 0) {
                this.sun.material.color.setHex(0xffffff); // Moon
                this.sun.position.set(playerPos.x - sunRelX, -sunRelY, playerPos.z);
            } else {
                this.sun.material.color.setHex(0xffdd44); // Sun
            }
        }

        if (this.directionalLight) {
            let lx = sunRelX;
            let ly = sunRelY;
            if (ly < 0) { lx = -lx; ly = -ly; }
            const dir = new THREE.Vector3(lx, ly, 0).normalize();
            this.directionalLight.position.copy(playerPos).add(dir.multiplyScalar(100));
            this.directionalLight.target.position.copy(playerPos);
            this.directionalLight.target.updateMatrixWorld();
        }

        // --- BLEND: Day/Night Cycle + Weather State ---
        // Base Day/Night Colors
        const cNight = new THREE.Color(0x000510);
        const cSunrise = new THREE.Color(0xFF4500);
        const cDay = new THREE.Color(0x87CEEB);
        const cSunset = new THREE.Color(0xFD5E53);

        let cycleSky = new THREE.Color();
        let cycleLight = 0;
        let cycleAmbient = 0;

        if (t >= 5 && t < 7) {
            const alpha = (t - 5) / 2;
            cycleSky.lerpColors(cNight, cSunrise, alpha);
            if (alpha > 0.5) cycleSky.lerp(cDay, (alpha - 0.5) * 2);
            cycleLight = alpha * 1.5;
            cycleAmbient = 0.1 + alpha * 0.5;
        } else if (t >= 7 && t < 17) {
            cycleSky.copy(cDay);
            cycleLight = 1.5;
            cycleAmbient = 0.6;
        } else if (t >= 17 && t < 19) {
            const alpha = (t - 17) / 2;
            cycleSky.lerpColors(cDay, cSunset, alpha);
            if (alpha > 0.5) cycleSky.lerp(cNight, (alpha - 0.5) * 2);
            cycleLight = 1.5 - alpha * 1.5;
            cycleAmbient = 0.6 - alpha * 0.5;
        } else {
            cycleSky.copy(cNight);
            cycleLight = 0.2;
            cycleAmbient = 0.1;
        }

        // Apply Weather Overrides (Lerped)
        // If weather is dark (storm), it darkens the day/night cycle
        const wColor = new THREE.Color(this.currentWeatherState.skyColorHex);
        const wLight = this.currentWeatherState.lightIntensity;

        // We multiply or lerp the cycle with the weather?
        // Let's use the weather state as a modifier.
        // Sky: Lerp cycle sky towards weather sky based on weather intensity (implicit in loop)
        // Actually, we already lerped skyColorHex in update().
        // Let's bias the cycleSky towards the generic 'Gray/Black' of weather if needed.

        // BETTER APPROACH:
        // Use the Day/Night colors as the "Base target" for SetSunny.
        // But WeatherSystem.setSunny sets a fixed blue. 
        // Let's blend.

        let finalSky = cycleSky.clone();

        // If it's raining/snowing, we want to desaturate/darken the sky towards the weather color
        // precipAlpha is a good dominance factor
        finalSky.lerp(wColor, this.currentWeatherState.precipAlpha);

        // Light
        let finalLight = cycleLight * (wLight / 2.0); // Normalize weather light relative to default sunny 2.0
        let finalAmbient = cycleAmbient * (this.currentWeatherState.ambientIntensity / 0.6);

        // Apply
        this.scene.background = finalSky;
        if (this.scene.fog) {
            this.scene.fog.color.copy(finalSky);
            this.scene.fog.density = this.currentWeatherState.fogDensity;
        }

        this.directionalLight.intensity = finalLight;
        this.ambientLight.intensity = finalAmbient;

        // Window Lights (Night only)
        let windowInt = 0;
        if (t > 19 || t < 5) windowInt = 1.0;
        else if (t >= 18 && t <= 19) windowInt = (t - 18);
        else if (t >= 5 && t <= 6) windowInt = 1.0 - (t - 5);

        if (this.materials.window) {
            const offC = new THREE.Color(0x111111);
            const onC = new THREE.Color(0xffffaa);
            this.materials.window.color.lerpColors(offC, onC, windowInt);
        }
    }

    updateWeatherAutomation(deltaHours) {
        this.timeSinceLastWeatherChange += deltaHours;

        if (this.timeSinceLastWeatherChange > this.weatherChangeInterval) {
            this.timeSinceLastWeatherChange = 0;
            this.weatherChangeInterval = 2 + Math.random() * 2;
            this.pickWeatherForSeason();
        }
    }

    pickWeatherForSeason() {
        let season = '';
        if (this.day <= 90) season = 'Winter';
        else if (this.day <= 180) season = 'Spring';
        else if (this.day <= 270) season = 'Summer';
        else season = 'Autumn';

        const rand = Math.random();
        let targetWeather = 'sunny';

        switch (season) {
            case 'Winter':
                if (rand < 0.6) targetWeather = 'snow';
                else if (rand < 0.8) targetWeather = 'rain';
                else targetWeather = 'sunny';
                break;
            case 'Spring':
                if (rand < 0.4) targetWeather = 'rain';
                else targetWeather = 'sunny';
                break;
            case 'Summer':
                if (rand < 0.1) targetWeather = 'rain';
                else targetWeather = 'sunny';
                break;
            case 'Autumn':
                if (rand < 0.4) targetWeather = 'rain';
                else if (rand < 0.5) targetWeather = 'snow';
                else targetWeather = 'sunny';
                break;
        }

        if (targetWeather !== this.currentWeather) {
            if (targetWeather === 'sunny') this.setSunny();
            else if (targetWeather === 'rain') this.setRain();
            else if (targetWeather === 'snow') this.setSnow();
        }
    }
}
