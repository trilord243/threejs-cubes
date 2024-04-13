import * as THREE from "three";

//escena
const scene = new THREE.Scene();

//Mesh
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

//camera

const aspectRatio = window.innerWidth / window.innerHeight;

const camera = new THREE.PerspectiveCamera(75, aspectRatio); // 1 argumento es el campo de vision
camera.position.z = 5;
camera.position.y = 1;
camera.position.x = 1;

scene.add(camera);

//renderer

const canvas = document.querySelector(".draw");

const renderer = new THREE.WebGLRenderer({ canvas }); //canvas elemento html
renderer.setSize(window.innerWidth, window.innerHeight); //webgl renderer
renderer.render(scene, camera);
