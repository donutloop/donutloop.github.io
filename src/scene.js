import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';


let scene, camera, renderer, controls;

export function initScene() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x050510); // Deep Blue Night/Dusk
    scene.fog = new THREE.FogExp2(0x050510, 0.025); // Dense urban haze



    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
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

export function animate(updateCallback) {
    requestAnimationFrame(() => animate(updateCallback));
    if (updateCallback) updateCallback();
    renderer.render(scene, camera);
}
