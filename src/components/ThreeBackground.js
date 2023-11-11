import { Stats, OrbitControls } from '@react-three/drei';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshBasicMaterial, SphereGeometry } from 'three';

function Model() {
  const gltf = useLoader(GLTFLoader, '/scene.gltf');
  const scale = window.innerHeight / 400;

  useFrame((state, delta) => (gltf.scene.rotation.y -= delta / 5));

  return (
    <primitive
      object={gltf.scene}
      scale={[scale, scale, scale]}
      position={[window.innerWidth / 2, 0, 0]} // z-coordinate is 0
    />
  );
}

function Stars() {
  let group = [];
  const material = new MeshBasicMaterial({ color: 0xffffff }); // white color
  const geometry = new SphereGeometry(1, 32, 32); // sphere shape

  for (let i = 0; i < 1000; i++) {
    const [x, y, z] = Array(3)
      .fill()
      .map(() => Math.random() * 1600 - 800);
    group.push(
      <mesh
        position={[x, y, z - 10000]} // place stars much further away
        material={material}
        geometry={geometry}
      />
    );
  }
  return group;
}

export default function App() {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        position: 'fixed',
        top: 0,
        backgroundColor: 'transparent',
        zIndex: 1,
      }}
    >
      <Canvas
        orthographic
        camera={{
          near: -10000, // adjust near clipping plane
          far: 10000, // adjust far clipping plane
        }}
        style={{ pointerEvents: 'none' }}
      >
        <directionalLight
          intensity={0.05}
          position={[-3.3, -1.0, 4.4]}
          castShadow
        />
        <Model />
        <Stars />
      </Canvas>
    </div>
  );
}
