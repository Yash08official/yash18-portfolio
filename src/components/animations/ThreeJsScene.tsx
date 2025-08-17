import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, OrbitControls, Float, Sphere, Box } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.5;
    meshRef.current.rotation.y += delta * 0.3;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 32, 32]} position={[-2, 0, 0]}>
        <meshStandardMaterial color="#8B5CF6" wireframe />
      </Sphere>
    </Float>
  );
}

function AnimatedBox() {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state, delta) => {
    meshRef.current.rotation.z += delta * 0.8;
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5;
  });

  return (
    <Box ref={meshRef} args={[1.5, 1.5, 1.5]} position={[2, 0, 0]}>
      <meshStandardMaterial color="#10B981" />
    </Box>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <AnimatedSphere />
      <AnimatedBox />
      <Text
        position={[0, -3, 0]}
        fontSize={0.5}
        color="#3B82F6"
        anchorX="center"
        anchorY="middle"
      >
        Three.js + React
      </Text>
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