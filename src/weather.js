import * as THREE from 'three';

export class WeatherSystem {
    constructor(scene, directionalLight, ambientLight, materials) {
        this.scene = scene;
        this.directionalLight = directionalLight;
        this.ambientLight = ambientLight;
        this.materials = materials; // { road, sidewalk, building }

        this.particles = null;
        this.particleCount = 15000;
        this.particleSystem = null;

        // Sky Elements
        this.sun = null;
        this.clouds = null;

        this.currentWeather = 'sunny';
        this.gameTime = 12.0; // Start at Noon (12:00)

        this.initParticles();
        this.initSky();

        // Apply default
        this.setSunny();
    }

    initParticles() {
        const geometry = new THREE.BufferGeometry();
        const positions = [];
        const velocities = [];

        for (let i = 0; i < this.particleCount; i++) {
            positions.push((Math.random() - 0.5) * 400); // x
            positions.push(Math.random() * 200);       // y
            positions.push((Math.random() - 0.5) * 400); // z

            velocities.push(0); // vy
        }

        geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        geometry.setAttribute('velocity', new THREE.Float32BufferAttribute(velocities, 1));

        const material = new THREE.PointsMaterial({
            color: 0xaaaaaa,
            size: 0.5,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });

        this.particleSystem = new THREE.Points(geometry, material);
        this.particleSystem.visible = false;
        this.scene.add(this.particleSystem);
        this.particles = geometry;
    }

    initSky() {
        // Sun
        const sunGeom = new THREE.SphereGeometry(80, 32, 32); // Massive Sun/Moon
        const sunMat = new THREE.MeshBasicMaterial({
            color: 0xffdd44, // Warmer Yellow (less neon)
            fog: false // IMPORTANT: Ignore fog so it stays bright at distance
        });
        this.sun = new THREE.Mesh(sunGeom, sunMat);
        // Align with initial lighting
        this.sun.position.set(50, 100, 50);
        this.scene.add(this.sun);

        // Clouds
        this.clouds = new THREE.Group();
        const cloudGeom = new THREE.BoxGeometry(1, 1, 1);
        const cloudMat = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            roughness: 0.9,
            flatShading: true,
            transparent: true,
            opacity: 0.9
        });

        const createCloud = (type) => {
            const cloud = new THREE.Group();
            let blobs = 3;
            let scaleBase = 1;
            let spread = 5;

            switch (type) {
                case 'small':
                    blobs = 3; scaleBase = 1.5; spread = 4; break;
                case 'medium':
                    blobs = 5; scaleBase = 3.0; spread = 8; break;
                case 'large':
                    blobs = 8; scaleBase = 5.0; spread = 12; break;
                case 'massive':
                    blobs = 15; scaleBase = 8.0; spread = 20; break;
            }

            for (let b = 0; b < blobs; b++) {
                const mesh = new THREE.Mesh(cloudGeom, cloudMat);
                mesh.position.set(
                    (Math.random() - 0.5) * spread,
                    (Math.random() - 0.5) * (spread * 0.4),
                    (Math.random() - 0.5) * (spread * 0.6)
                );

                // Random variation within the base scale
                const s = scaleBase * (0.8 + Math.random() * 0.5);
                mesh.scale.set(s, s * 0.6, s * 0.8);

                cloud.add(mesh);
            }
            return cloud;
        };

        const cloudTypes = ['small', 'small', 'medium', 'medium', 'medium', 'large', 'large', 'massive'];

        // Spawn more clouds for density
        for (let i = 0; i < 35; i++) {
            const type = cloudTypes[Math.floor(Math.random() * cloudTypes.length)];
            const cloud = createCloud(type);

            cloud.position.set(
                (Math.random() - 0.5) * 500, // Wider area
                60 + Math.random() * 40,    // Harder height variation
                (Math.random() - 0.5) * 500
            );

            // Random rotation for variety
            cloud.rotation.y = Math.random() * Math.PI * 2;

            this.clouds.add(cloud);
        }
        this.scene.add(this.clouds);
    }

    setSunny() {
        console.log('Weather: Sunny');
        this.currentWeather = 'sunny';

        // Lighting
        this.directionalLight.intensity = 2;
        this.directionalLight.color.setHex(0xffffff);
        this.ambientLight.intensity = 0.6;
        this.ambientLight.color.setHex(0xffffff);

        // Fog & Sky
        const skyColor = 0x87CEEB;
        this.scene.fog = new THREE.FogExp2(skyColor, 0.002);
        this.scene.background = new THREE.Color(skyColor);

        // Sky Elements
        this.sun.visible = true;
        this.clouds.visible = true;
        this.clouds.children.forEach(c => c.children.forEach(m => m.material.color.setHex(0xffffff)));

        // Particles
        this.particleSystem.visible = false;

        // Materials
        this.materials.road.roughness = 0.9;
        this.materials.road.color.setHex(0x222222); // Fixed: Dark Grey, NOT Black (prevents hovering bug)
        this.materials.sidewalk.color.setHex(0x444444);
    }

    setRain() {
        console.log('Weather: Rain');
        this.currentWeather = 'rain';

        // Lighting
        this.directionalLight.intensity = 0.5;
        this.directionalLight.color.setHex(0xaaccff);
        this.ambientLight.intensity = 0.2;
        this.ambientLight.color.setHex(0x222233);

        // Fog & Sky
        const rainColor = 0x050510;
        this.scene.fog = new THREE.FogExp2(rainColor, 0.02);
        this.scene.background = new THREE.Color(rainColor);

        // Sky Elements
        this.sun.visible = false;
        this.clouds.visible = true; // Dark rain clouds?
        this.clouds.children.forEach(c => c.children.forEach(m => m.material.color.setHex(0x333344))); // Dark Grey clouds

        // Particles
        this.particleSystem.visible = true;
        this.particleSystem.material.color.setHex(0xaaccff);
        this.particleSystem.material.size = 0.8;
        this.particleSystem.material.opacity = 0.6;

        // Materials (Wet look)
        this.materials.road.roughness = 0.1; // Glossy
        this.materials.road.color.setHex(0x050505); // Wet asphalt is very dark
        this.materials.sidewalk.color.setHex(0x333333);
    }

    setSnow() {
        console.log('Weather: Snow');
        this.currentWeather = 'snow';

        // Lighting
        this.directionalLight.intensity = 1.5;
        this.directionalLight.color.setHex(0xffffff);
        this.ambientLight.intensity = 0.8;
        this.ambientLight.color.setHex(0xeeeeee);

        // Fog & Sky
        const snowColor = 0xeeeeee;
        this.scene.fog = new THREE.FogExp2(snowColor, 0.03);
        this.scene.background = new THREE.Color(snowColor);

        // Sky Elements
        this.sun.visible = false; // Overcast
        this.clouds.visible = false; // Hidden in fog/whiteout

        // Particles
        this.particleSystem.visible = true;
        this.particleSystem.material.color.setHex(0xffffff);
        this.particleSystem.material.size = 1.5; // Flakes
        this.particleSystem.material.opacity = 0.9;

        // Materials (Snowy)
        this.materials.road.roughness = 1.0;
        this.materials.road.color.setHex(0xeeeeee); // White roads
        this.materials.sidewalk.color.setHex(0xdddddd);
    }

    update(delta, playerPos = new THREE.Vector3()) {
        // TIME CYCLE
        const hoursPerSec = 0.04;
        this.gameTime += delta * hoursPerSec;
        if (this.gameTime >= 24) this.gameTime = 0;

        this.updateTimeCycle(playerPos); // Pass playerPos

        // Move clouds
        // Make clouds follow player to create infinite sky illusion
        const cloudRange = 500;

        if (this.clouds && this.clouds.visible) {
            // Center group on player X/Z generally? 
            // Better: Keep local clouds moving, but wrap relative to player.

            this.clouds.children.forEach(cloud => {
                cloud.position.x += delta * 2;

                // Wrap relative to player
                const relX = cloud.position.x - playerPos.x;
                const relZ = cloud.position.z - playerPos.z;

                if (relX > cloudRange / 2) cloud.position.x -= cloudRange;
                if (relX < -cloudRange / 2) cloud.position.x += cloudRange;

                // Also Check Z to keep them around player
                if (relZ > cloudRange / 2) cloud.position.z -= cloudRange;
                if (relZ < -cloudRange / 2) cloud.position.z += cloudRange;
            });

            // Re-center whole group? No, individual clouds wrap.
        }

        if (this.particleSystem && this.particleSystem.visible) {
            const positions = this.particles.attributes.position.array;
            const fallSpeed = this.currentWeather === 'rain' ? 80 : 15;
            const windX = this.currentWeather === 'rain' ? 10 : 5;
            const range = 200;

            for (let i = 0; i < this.particleCount; i++) {
                // y
                positions[i * 3 + 1] -= fallSpeed * delta;
                // x (wind)
                positions[i * 3] -= windX * delta;

                // Wrap Y (Height)
                if (positions[i * 3 + 1] < 0) {
                    positions[i * 3 + 1] = 100; // Reset height
                }

                // Anchor X/Z to player
                // We treat stored positions as "World Positions".
                // If they get too far from player, wrap them to other side.

                let px = positions[i * 3];
                let pz = positions[i * 3 + 2];

                let dx = px - playerPos.x;
                let dz = pz - playerPos.z;

                if (dx > range) positions[i * 3] -= range * 2;
                if (dx < -range) positions[i * 3] += range * 2;
                if (dz > range) positions[i * 3 + 2] -= range * 2;
                if (dz < -range) positions[i * 3 + 2] += range * 2;
            }
            this.particles.attributes.position.needsUpdate = true;
        }
    }

    updateTimeCycle(playerPos) {
        const t = this.gameTime;
        let sunAngle = 0;

        if (t >= 6 && t < 18) {
            sunAngle = ((t - 6) / 12) * Math.PI;
        } else {
            sunAngle = ((t - 6) / 24) * Math.PI * 2;
        }

        const radius = 800; // Much further away!
        const sunRelX = Math.cos(sunAngle) * radius;
        const sunRelY = Math.sin(sunAngle) * radius;

        // Sun Position relative to PLAYER
        if (this.sun) {
            this.sun.position.set(
                playerPos.x + sunRelX,
                sunRelY, // Keep Height absolute? No, relative to horizon.
                playerPos.z // Follow Z
            );

            if (sunRelY < 0) {
                this.sun.material.color.setHex(0xffffff); // Bright White Moon
                // Moon Opposite
                this.sun.position.set(
                    playerPos.x - sunRelX,
                    -sunRelY,
                    playerPos.z
                );
            } else {
                this.sun.material.color.setHex(0xffdd44); // Warmer Yellow Sun (matches init)
            }
        }

        // Directional Light Position (Follows Sun/Moon)
        if (this.directionalLight) {
            const lightDist = 100; // Lights don't need to be far, just direction matters
            // But shadows depend on position vs object. 
            // Ideally DirectionalLight covers the view frustum.
            // We center it on player.

            let lx = sunRelX;
            let ly = sunRelY;
            if (ly < 0) { lx = -lx; ly = -ly; } // Moon logic

            // Normalize and offset from player
            const dir = new THREE.Vector3(lx, ly, 0).normalize();
            this.directionalLight.position.copy(playerPos).add(dir.multiplyScalar(100));
            this.directionalLight.target.position.copy(playerPos);
            this.directionalLight.target.updateMatrixWorld();
        }

        // --- Colors & Light Intensity ---
        const cNight = new THREE.Color(0x000510);
        const cSunrise = new THREE.Color(0xFF4500);
        const cDay = new THREE.Color(0x87CEEB);
        const cSunset = new THREE.Color(0xFD5E53);

        let skyColor = new THREE.Color();
        let lightInt = 0;
        let ambientInt = 0;
        let fogDensity = 0.002;

        if (t >= 5 && t < 7) {
            // Sunrise
            const alpha = (t - 5) / 2;
            skyColor.lerpColors(cNight, cSunrise, alpha);
            if (alpha > 0.5) skyColor.lerp(cDay, (alpha - 0.5) * 2);
            lightInt = alpha * 1.5;
            ambientInt = 0.1 + alpha * 0.5;
        } else if (t >= 7 && t < 17) {
            // Day
            skyColor.copy(cDay);
            lightInt = 1.5;
            ambientInt = 0.6;
        } else if (t >= 17 && t < 19) {
            // Sunset
            const alpha = (t - 17) / 2;
            skyColor.lerpColors(cDay, cSunset, alpha);
            if (alpha > 0.5) skyColor.lerp(cNight, (alpha - 0.5) * 2);
            lightInt = 1.5 - alpha * 1.5;
            ambientInt = 0.6 - alpha * 0.5;
        } else {
            // Night
            skyColor.copy(cNight);
            lightInt = 0.2;
            ambientInt = 0.1;
            this.directionalLight.color.setHex(0xaaaaff);
        }

        if (t >= 6 && t < 18) {
            this.directionalLight.color.setHex(0xffffff);
        }

        if (this.currentWeather === 'rain') {
            skyColor.lerp(new THREE.Color(0x050510), 0.8);
            lightInt *= 0.3;
            ambientInt *= 0.3;
            fogDensity = 0.02;
        } else if (this.currentWeather === 'snow') {
            skyColor.lerp(new THREE.Color(0xeeeeee), 0.8);
            lightInt *= 0.5;
            ambientInt = 0.5;
            fogDensity = 0.03;
        }

        this.scene.background = skyColor;
        this.scene.fog.color.copy(skyColor);
        this.scene.fog.density = fogDensity;

        this.directionalLight.intensity = lightInt;
        this.ambientLight.intensity = ambientInt;
    }
}
