import { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

function ParticleField() {
  const meshRef = useRef<THREE.Points>(null!);
  const materialRef = useRef<THREE.PointsMaterial>(null!);
  
  useEffect(() => {
    if (meshRef.current) {
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(2000 * 3);
      
      for (let i = 0; i < 2000 * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 100;
        positions[i + 1] = (Math.random() - 0.5) * 100;
        positions[i + 2] = (Math.random() - 0.5) * 100;
      }
      
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      meshRef.current.geometry = geometry;
    }
  }, []);

  useFrame((state) => {
    if (meshRef.current && materialRef.current) {
      meshRef.current.rotation.y += 0.001;
      meshRef.current.rotation.x += 0.0005;
      
      // Scroll-based effects
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollProgress = Math.min(scrollY / maxScroll, 1);
      
      // Change color based on scroll
      const hue = scrollProgress * 360;
      materialRef.current.color.setHSL(hue / 360, 0.6, 0.6);
      
      // Rotate based on scroll
      meshRef.current.rotation.z = scrollProgress * Math.PI * 2;
    }
  });

  return (
    <points ref={meshRef}>
      <pointsMaterial
        ref={materialRef}
        size={0.5}
        transparent
        opacity={0.6}
        sizeAttenuation={true}
        color="#8B5CF6"
      />
    </points>
  );
}

function FloatingGeometry() {
  const group = useRef<THREE.Group>(null!);
  
  useFrame((state) => {
    if (group.current) {
      const scrollY = window.scrollY;
      const scrollProgress = scrollY * 0.001;
      
      group.current.rotation.x = scrollProgress * 0.5;
      group.current.rotation.y = scrollProgress * 0.3;
      group.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 2;
    }
  });

  return (
    <group ref={group}>
      {/* Floating wireframe geometries */}
      <mesh position={[-15, 10, -20]}>
        <torusGeometry args={[3, 1, 16, 100]} />
        <meshBasicMaterial color="#10B981" wireframe transparent opacity={0.3} />
      </mesh>
      
      <mesh position={[15, -10, -15]}>
        <octahedronGeometry args={[4]} />
        <meshBasicMaterial color="#3B82F6" wireframe transparent opacity={0.3} />
      </mesh>
      
      <mesh position={[0, 15, -25]}>
        <icosahedronGeometry args={[2]} />
        <meshBasicMaterial color="#F59E0B" wireframe transparent opacity={0.3} />
      </mesh>
      
      <mesh position={[-10, -15, -10]}>
        <dodecahedronGeometry args={[3]} />
        <meshBasicMaterial color="#EF4444" wireframe transparent opacity={0.3} />
      </mesh>
    </group>
  );
}

function AnimatedWaves() {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    if (meshRef.current) {
      const scrollY = window.scrollY;
      meshRef.current.rotation.z = scrollY * 0.001;
      const material = meshRef.current.material as THREE.MeshBasicMaterial;
      material.opacity = 0.1 + Math.sin(state.clock.elapsedTime) * 0.05;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -30]}>
      <planeGeometry args={[100, 100, 32, 32]} />
      <meshBasicMaterial 
        color="#8B5CF6" 
        wireframe 
        transparent 
        opacity={0.1}
      />
    </mesh>
  );
}

function BackgroundScene() {
  const { camera } = useThree();
  
  useEffect(() => {
    camera.position.set(0, 0, 30);
  }, [camera]);

  return (
    <>
      <ParticleField />
      <FloatingGeometry />
      <AnimatedWaves />
    </>
  );
}

const BackgroundThreeJs = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 30], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <BackgroundScene />
      </Canvas>
    </div>
  );
};

export default BackgroundThreeJs;