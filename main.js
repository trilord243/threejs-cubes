import * as THREE from "three";
import gsap from "gsap";

console.log(gsap);

const scene = new THREE.Scene();

//mesh

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const material2 = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const material3 = new THREE.MeshBasicMaterial({ color: 0x0000ff });
const material4 = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const material5 = new THREE.MeshBasicMaterial({ color: 0xff00ff });
const material6 = new THREE.MeshBasicMaterial({ color: 0x00ffff });

const mesh = new THREE.Mesh(geometry, material);
mesh.position.x = 2;
const mesh2 = new THREE.Mesh(geometry, material2);
mesh2.position.x = -2;
const mesh3 = new THREE.Mesh(geometry, material3);
const mesh4 = new THREE.Mesh(geometry, material4);
mesh4.position.y = 2;
const mesh5 = new THREE.Mesh(geometry, material5);
mesh5.position.y = 2;
mesh5.position.x = 2;
const mesh6 = new THREE.Mesh(geometry, material6);
mesh6.position.y = 2;
mesh6.position.x = -2;

scene.add(mesh, mesh2, mesh3, mesh4, mesh5, mesh6);

// camera

const aspectRatio = window.innerWidth / window.innerHeight;

const camera = new THREE.PerspectiveCamera(75, aspectRatio);
camera.position.z = 5;
camera.position.x = 0;

scene.add(camera);

// renderer

// Mouse listener
const cursor = {
  x: 0,
  y: 0,
};

window.addEventListener("mousemove", (event) => {
  cursor.x = event.clientX / window.innerWidth - 0.5;
  cursor.y = -(event.clientY / window.innerHeight) + 0.5;
});

const canvas = document.querySelector(".draw");

const renderer = new THREE.WebGLRenderer({ canvas });

renderer.setSize(window.innerWidth, window.innerHeight);
const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper);
//clock

const clock = new THREE.Clock();

const animate = () => {
  const elapsedTime = clock.getElapsedTime();
  requestAnimationFrame(animate);
  mesh.lookAt(new THREE.Vector3(cursor.x, cursor.y, 1));

  renderer.render(scene, camera);
};

animate();
