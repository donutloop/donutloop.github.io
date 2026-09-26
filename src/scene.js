import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';


let scene, camera, renderer, controls;

export function initScene() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x050510); // Deep Blue Night/Dusk
    scene.fog = new THREE.FogExp2(0x050510, 0.025); // Dense urban haze



    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 20000);
    camera.position.set(0, 5, 10);

    renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Softer shadows

    // Tone mapping for realistic lighting
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;

    document.getElementById('app').appendChild(renderer.domElement);

    // [NEW] Reflection System: Environment Map
    // Using PMREMGenerator to create a high-quality environment from a virtual room
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    scene.environment = pmremGenerator.fromScene(new RoomEnvironment(renderer), 0.04).texture;
    // We don't dispose pmremGenerator immediately if we plan to use it for dynamic stuff,
    // but here it's static, so arguably we could. But keeping it simple.

    window.addEventListener('resize', onWindowResize);

    return { scene, camera, renderer };
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

/**
 * [AAA-02] Drive the animation loop through a FrameLoop: exactly ONE update
 * per frame, explicit clamped dt, and a frame budget that drops a frame when
 * the update+render cost overshoots (so the sim never spirals into a death
 * loop). On a budget-skip the frame does no update/render work and the canvas
 * simply keeps its last frame; the sim recovers on the next frame.
 */
export function animate(loop, update) {
    const frame = (now) => {
        const res = loop.tick(now);
        if (!res.first && !res.skipped) {
            // Measure the real update+render cost for the frame budget.
            const t0 = performance.now();
            update(res.dt);
            loop.reportWork(performance.now() - t0);
        }
        requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
}
