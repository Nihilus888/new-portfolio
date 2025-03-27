import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function ThreeDViewer() {
  const mountRef = useRef(null);
  const [metadata, setMetadata] = useState(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const light = new THREE.AmbientLight(0xffffff, 1);
    scene.add(light);

    // Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // Load 3D Model
    const loader = new GLTFLoader();
    loader.load('/model.gltf', (gltf) => {
      const model = gltf.scene;
      model.traverse((child) => {
        if (child.isMesh) {
          child.userData = { name: child.name || 'Unknown Object' }; // Example metadata
        }
      });
      scene.add(model);
    });

    // Raycasting for Click Detection
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    function onClick(event) {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(scene.children, true);
      if (intersects.length > 0) {
        setMetadata(intersects[0].object.userData);
      }
    }

    window.addEventListener('click', onClick);

    camera.position.z = 5;
    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }
    animate();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
      window.removeEventListener('click', onClick);
    };
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      <div ref={mountRef} style={{ width: '80vw', height: '100vh' }} />
      {metadata && (
        <div style={{ width: '20vw', padding: '10px', background: '#f4f4f4' }}>
          <h3>Metadata</h3>
          <pre>{JSON.stringify(metadata, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
