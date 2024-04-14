# Threejs

## Como correr 

```
npm install 
npm run dev
```

## Relevante 
Utilizando esta funcion

```
const animate = () => {
  const elapsedTime = clock.getElapsedTime();
  requestAnimationFrame(animate);
  mesh.lookAt(new THREE.Vector3(cursor.x, cursor.y, 1));

  renderer.render(scene, camera);
};

animate();
```

Poder animar el cubo dependeindo de la posicion del teclado con el metodo lookAt una de las caras del cubo buscara al "raton" y lo seguira de manera fluida
