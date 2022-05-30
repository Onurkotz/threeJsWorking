import * as THREE from "../node_modules/three/build/three.module.js";

const canvas = document.getElementById("canvas");

const canvasSize = {
  width: 900,
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

camera.position.set(0, 0, 30);
camera.lookAt(0,0,0)

scene.add(camera);

const geometry1 = new THREE.BoxGeometry(2, 1, 2);
const material2 = new THREE.MeshBasicMaterial(
  // { wireframe: true }
  );

const cube = new THREE.Mesh(geometry1, material2);

scene.add(cube);


const points = [];

points.push(new THREE.Vector3(-10, -10, 0));
points.push(new THREE.Vector3(0, 10, 0));
points.push(new THREE.Vector3(10, -10, 0));
points.push(new THREE.Vector3(-10, -10, 0));


const geometry = new THREE.BufferGeometry().setFromPoints(points);
const material = new THREE.LineBasicMaterial({ color: "yellow" });


const line = new THREE.Line(geometry, material);

scene.add(line);

const renderer = new THREE.WebGLRenderer({ canvas: canvas });

renderer.setSize(canvasSize.width, canvasSize.height);

renderer.render(scene, camera);
