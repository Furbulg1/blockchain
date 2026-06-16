import * as THREE from 'three';
import { initXR } from './xr/xrSetup.js';
import { createBlockchainScene } from './scene/blockchainScene.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0a0a0a);

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth/window.innerHeight,
    0.1,
    1000
);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

// включаємо XR
renderer.xr.enabled = true;

document.body.appendChild(renderer.domElement);

// Контроль для ПК
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

camera.position.set(0, 3, 10);

// Світло
const light = new THREE.PointLight(0xffffff, 1);
light.position.set(10, 10, 10);
scene.add(light);

// Blockchain сцена
createBlockchainScene(scene);

// Кнопка VR
if (navigator.xr) {
    document.body.appendChild(initXR(renderer));
}

function animate() {
    renderer.setAnimationLoop(() => {
        controls.update(); // важливо для ПК
        renderer.render(scene, camera);
    });
}

animate();

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});