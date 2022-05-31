import * as THREE from "../node_modules/three/build/three.module.js";

const canvas = document.getElementById("canvas");

const canvasSize = {
  width: window.innerWidth,
  height: window.innerHeight,
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

camera.position.set(0, 0, 50);

//camera.lookAt(0, 0, 0);

scene.add(camera);

const geometry = new THREE.BoxGeometry(10, 10, 10);
const material = new THREE.MeshBasicMaterial({
  color: "blue",
});
const material2 = new THREE.MeshBasicMaterial({
  color: "red",
});
// { wireframe: true }

const cube = new THREE.Mesh(geometry, material);
const cube2 = new THREE.Mesh(geometry, material2);

cube.position.x = 10;
cube2.position.x = -10;

cube.name = "cube";
cube2.name = "cube2";

scene.add(cube, cube2);

// var domEvents = new THREEx.DomEvents(camera, renderer.domElement);

// domEvents.addEventListener(cube, "click", (event) => {
//   console.log("clicked this")
// });

document.addEventListener("keydown", cubeLeft, false);

function cubeLeft(event) {
  var keyCode = event.which;

  if (keyCode === 65) {
    cube2.position.x -= 0.5;
  } else if (keyCode === 68) {
    cube2.position.x += 0.5;
  } else if (keyCode === 87) {
    cube2.position.y += 0.5;
  } else if (keyCode === 83) {
    cube2.position.y -= 0.5;
  } else if (keyCode === 32) {
    cube2.position.set(-10, 0, 0);
  }

  renderer.render(scene, camera);
}

//     Triangle

// const points = [];

// points.push(new THREE.Vector3(-10, -10, 0));
// points.push(new THREE.Vector3(0, 10, 0));
// points.push(new THREE.Vector3(10, -10, 0));
// points.push(new THREE.Vector3(-10, -10, 0));

// const geometry = new THREE.BufferGeometry().setFromPoints(points);
// const material = new THREE.LineBasicMaterial({ color: "yellow" });

// const line = new THREE.Line(geometry, material);

// scene.add(line);

const renderer = new THREE.WebGLRenderer({ canvas: canvas });

renderer.setSize(canvasSize.width, canvasSize.height);

renderer.render(scene, camera);

// const controls = new OrbitControls(camera, renderer.domElement);
// camera.position.set( 0, 20, 100 );
// controls.minDistance = 1;
// controls.maxDistance = 1000;
// controls.update();

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube2.rotation.y += 0.01;
  //cube.rotation.z += 0.01;
  //controls.update();
  renderer.render(scene, camera);
}

animate();
