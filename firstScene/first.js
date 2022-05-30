import * as THREE from "../node_modules/three/build/three.module.js";

const canvas = document.getElementById("canvas");

const canvasSize = {
  width: 800,
  height: 600,
};

const scene = new THREE.Scene();

const cameraParams = {
  fov: 45,
  aspectRatio: canvasSize.width / canvasSize.height,
  near: 0.001,
  far: 100,
};

const camera = new THREE.PerspectiveCamera(
  cameraParams.fov,
  cameraParams.aspectRatio,
  cameraParams.near,
  cameraParams.far
);

camera.position.set(0, 1, 6);

scene.add(camera);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial();
const cube = new THREE.Mesh(geometry, material);

scene.add(cube);

const renderer = new THREE.WebGLRenderer({ canvas: canvas });

renderer.setSize(canvasSize.width, canvasSize.height);

renderer.render(scene, camera);
