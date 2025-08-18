import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function HolographicInterface() {
  const groupRef = useRef<THREE.Group>(null!);
  
  useEffect(() => {
    if (groupRef.current) {
      // Create holographic UI elements
      const elements = [
        { type: 'rect', width: 4, height: 0.1, color: '#60A5FA' },
        { type: 'rect', width: 3, height: 0.1, color: '#8B5CF6' },
        { type: 'rect', width: 2, height: 0.1, color: '#06B6D4' },
      ];
      
      elements.forEach((element, index) => {
        const geometry = new THREE.PlaneGeometry(element.width, element.height);
        const material = new THREE.MeshBasicMaterial({
          color: element.color,
          transparent: true,
          opacity: 0.8,
          side: THREE.DoubleSide
        });
        
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.y = index * 0.5 - 0.5;
        mesh.position.z = 0;
        
        groupRef.current.add(mesh);
      });
    }
  }, []);
  
  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.elapsedTime;
      
      groupRef.current.children.forEach((child, index) => {
        const mesh = child as THREE.Mesh;
        const material = mesh.material as THREE.MeshBasicMaterial;
        
        // Breathing animation
        material.opacity = 0.6 + Math.sin(time * 2 + index) * 0.2;
        
        // Gentle float
        mesh.position.x = Math.sin(time * 0.5 + index) * 0.2;
      });
      
      // Overall rotation
      groupRef.current.rotation.y = Math.sin(time * 0.3) * 0.1;
    }
  });
  
  return <group ref={groupRef} />;
}

function FloatingOrbs() {
  const groupRef = useRef<THREE.Group>(null!);
  
  useEffect(() => {
    if (groupRef.current) {
      // Create floating orbs
      for (let i = 0; i < 8; i++) {
        const geometry = new THREE.SphereGeometry(0.1, 16, 16);
        const material = new THREE.MeshBasicMaterial({
          color: new THREE.Color().setHSL(i / 8, 0.8, 0.6),
          transparent: true,
          opacity: 0.7
        });
        
        const orb = new THREE.Mesh(geometry, material);
        const radius = 3 + Math.random() * 2;
        const angle = (i / 8) * Math.PI * 2;
        
        orb.position.x = Math.cos(angle) * radius;
        orb.position.y = Math.sin(angle) * radius;
        orb.position.z = (Math.random() - 0.5) * 2;
        
        groupRef.current.add(orb);
      }
    }
  }, []);
  
  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.elapsedTime;
      
      groupRef.current.children.forEach((child, index) => {
        const orb = child as THREE.Mesh;
        const baseRadius = 3 + (index % 3);
        
        // Orbital motion
        const speed = 0.5 + index * 0.1;
        const angle = time * speed + (index / 8) * Math.PI * 2;
        
        orb.position.x = Math.cos(angle) * baseRadius;
        orb.position.y = Math.sin(angle) * baseRadius;
        orb.position.z = Math.sin(time + index) * 1;
        
        // Pulsing scale
        const scale = 1 + Math.sin(time * 3 + index) * 0.3;
        orb.scale.setScalar(scale);
      });
    }
  });
  
  return <group ref={groupRef} />;
}

function HeroScene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={0.8} color="#8B5CF6" />
      <pointLight position={[-5, -5, 5]} intensity={0.6} color="#06B6D4" />
      
      <HolographicInterface />
      <FloatingOrbs />
    </>
  );
}

const InteractiveHero = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-10 opacity-80 dark:opacity-90">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <HeroScene />
      </Canvas>
    </div>
  );
};

export default InteractiveHero;