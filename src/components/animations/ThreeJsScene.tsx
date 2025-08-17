import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <group position={[-2, 0, 0]}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#8B5CF6" wireframe />
      </mesh>
    </group>
  );
}

function AnimatedBox() {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.z += delta * 0.8;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={[2, 0, 0]}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial color="#10B981" />
    </mesh>
  );
}

function FloatingText() {
  return (
    <group position={[0, -3, 0]}>
      <mesh>
        <planeGeometry args={[4, 1]} />
        <meshBasicMaterial color="#3B82F6" transparent opacity={0.8} />
      </mesh>
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <AnimatedSphere />
      <AnimatedBox />
      <FloatingText />
      <OrbitControls enableZoom={false} enablePan={false} />
    </>
  );
}

const ThreeJsScene = () => {
  return (
    <div className="w-full h-64 bg-gradient-to-br from-background via-muted to-background rounded-lg overflow-hidden">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <Scene />
      </Canvas>
    </div>
  );
};

export default ThreeJsScene;