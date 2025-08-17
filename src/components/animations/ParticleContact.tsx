import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function FloatingParticles() {
  const groupRef = useRef<THREE.Group>(null!);
  const particlesRef = useRef<THREE.Points[]>([]);
  
  useEffect(() => {
    if (groupRef.current) {
      // Create multiple particle systems
      const colors = ['#60A5FA', '#8B5CF6', '#06B6D4', '#10B981'];
      
      colors.forEach((color, systemIndex) => {
        const geometry = new THREE.BufferGeometry();
        const particleCount = 200;
        const positions = new Float32Array(particleCount * 3);
        const velocities = new Float32Array(particleCount * 3);
        
        for (let i = 0; i < particleCount * 3; i += 3) {
          positions[i] = (Math.random() - 0.5) * 40;
          positions[i + 1] = (Math.random() - 0.5) * 30;
          positions[i + 2] = (Math.random() - 0.5) * 20;
          
          velocities[i] = (Math.random() - 0.5) * 0.01;
          velocities[i + 1] = Math.random() * 0.005;
          velocities[i + 2] = (Math.random() - 0.5) * 0.01;
        }
        
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.userData = { velocities };
        
        const material = new THREE.PointsMaterial({
          color: color,
          size: 0.8 + systemIndex * 0.2,
          transparent: true,
          opacity: 0.6,
          blending: THREE.AdditiveBlending
        });
        
        const particles = new THREE.Points(geometry, material);
        particles.position.y = systemIndex * 2;
        groupRef.current.add(particles);
        particlesRef.current.push(particles);
      });
    }
  }, []);
  
  useFrame((state) => {
    if (groupRef.current && particlesRef.current.length > 0) {
      const time = state.clock.elapsedTime;
      
      particlesRef.current.forEach((particles, systemIndex) => {
        const positions = particles.geometry.attributes.position.array as Float32Array;
        const velocities = particles.geometry.userData.velocities;
        
        for (let i = 0; i < positions.length; i += 3) {
          // Update positions
          positions[i] += velocities[i];
          positions[i + 1] += velocities[i + 1];
          positions[i + 2] += velocities[i + 2];
          
          // Wave motion
          positions[i] += Math.sin(time + i * 0.1) * 0.001;
          positions[i + 1] += Math.cos(time + i * 0.1) * 0.001;
          
          // Boundary wrapping
          if (positions[i] > 20) positions[i] = -20;
          if (positions[i] < -20) positions[i] = 20;
          if (positions[i + 1] > 15) {
            positions[i + 1] = -15;
            positions[i] = (Math.random() - 0.5) * 40;
            positions[i + 2] = (Math.random() - 0.5) * 20;
          }
          if (positions[i + 2] > 10) positions[i + 2] = -10;
          if (positions[i + 2] < -10) positions[i + 2] = 10;
        }
        
        particles.geometry.attributes.position.needsUpdate = true;
        
        // Gentle rotation
        particles.rotation.y = time * 0.1 * (systemIndex + 1);
        
        // Opacity pulsing
        const material = particles.material as THREE.PointsMaterial;
        material.opacity = 0.4 + Math.sin(time * 2 + systemIndex) * 0.2;
      });
    }
  });
  
  return <group ref={groupRef} />;
}

function ContactScene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.4} color="#8B5CF6" />
      <pointLight position={[-10, 5, -5]} intensity={0.3} color="#06B6D4" />
      
      <FloatingParticles />
    </>
  );
}

const ParticleContact = () => {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-70">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <ContactScene />
      </Canvas>
    </div>
  );
};

export default ParticleContact;