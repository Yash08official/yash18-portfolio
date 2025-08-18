import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// Mouse position state
const mousePosition = { x: 0, y: 0 };

function ParticleField() {
  const meshRef = useRef<THREE.Points>(null!);
  const materialRef = useRef<THREE.PointsMaterial>(null!);
  const velocitiesRef = useRef<Float32Array>(null!);
  
  useEffect(() => {
    if (meshRef.current) {
      const geometry = new THREE.BufferGeometry();
      const particleCount = 3000;
      const positions = new Float32Array(particleCount * 3);
      const velocities = new Float32Array(particleCount * 3);
      
      for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 150;
        positions[i + 1] = (Math.random() - 0.5) * 150;
        positions[i + 2] = (Math.random() - 0.5) * 150;
        
        velocities[i] = (Math.random() - 0.5) * 0.02;
        velocities[i + 1] = (Math.random() - 0.5) * 0.02;
        velocities[i + 2] = (Math.random() - 0.5) * 0.02;
      }
      
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      velocitiesRef.current = velocities;
      meshRef.current.geometry = geometry;
    }

    // Mouse move listener
    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.x = (event.clientX / window.innerWidth) * 2 - 1;
      mousePosition.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state) => {
    if (meshRef.current && materialRef.current && velocitiesRef.current) {
      const positions = meshRef.current.geometry.attributes.position.array as Float32Array;
      const velocities = velocitiesRef.current;
      
      // Mouse interaction force
      const mouseForce = 2;
      const mouseX = mousePosition.x * 50;
      const mouseY = mousePosition.y * 50;
      
      for (let i = 0; i < positions.length; i += 3) {
        // Calculate distance to mouse
        const dx = positions[i] - mouseX;
        const dy = positions[i + 1] - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Apply mouse repulsion
        if (distance < 20) {
          const force = (20 - distance) / 20;
          velocities[i] += (dx / distance) * force * 0.001;
          velocities[i + 1] += (dy / distance) * force * 0.001;
        }
        
        // Update positions
        positions[i] += velocities[i];
        positions[i + 1] += velocities[i + 1];
        positions[i + 2] += velocities[i + 2];
        
        // Boundary wrapping
        if (Math.abs(positions[i]) > 75) positions[i] = -positions[i];
        if (Math.abs(positions[i + 1]) > 75) positions[i + 1] = -positions[i + 1];
        if (Math.abs(positions[i + 2]) > 75) positions[i + 2] = -positions[i + 2];
        
        // Damping
        velocities[i] *= 0.99;
        velocities[i + 1] *= 0.99;
        velocities[i + 2] *= 0.99;
      }
      
      meshRef.current.geometry.attributes.position.needsUpdate = true;
      
      // Dynamic color cycling
      const time = state.clock.elapsedTime;
      const hue = (time * 0.1) % 1;
      materialRef.current.color.setHSL(hue, 0.8, 0.6);
      
      // Gentle rotation
      meshRef.current.rotation.y += 0.001;
    }
  });

  return (
    <points ref={meshRef}>
      <pointsMaterial
        ref={materialRef}
        size={1.5}
        transparent
        opacity={0.8}
        sizeAttenuation={true}
        color="#60A5FA"
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function CodeMatrix() {
  const groupRef = useRef<THREE.Group>(null!);
  
  useEffect(() => {
    if (groupRef.current) {
      // Create floating code symbols
      const codeChars = ['<', '>', '{', '}', '(', ')', '[', ']', '/', '*', '+', '-', '='];
      
      codeChars.forEach((char, index) => {
        const geometry = new THREE.PlaneGeometry(2, 2);
        const canvas = document.createElement('canvas');
        canvas.width = 64;
        canvas.height = 64;
        const context = canvas.getContext('2d');
        
        if (context) {
          context.fillStyle = '#1E40AF';
          context.font = '48px monospace';
          context.textAlign = 'center';
          context.textBaseline = 'middle';
          context.fillText(char, 32, 32);
        }
        
        const texture = new THREE.CanvasTexture(canvas);
        const material = new THREE.MeshBasicMaterial({
          map: texture,
          transparent: true,
          opacity: 0.6
        });
        
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(
          (Math.random() - 0.5) * 80,
          (Math.random() - 0.5) * 80,
          (Math.random() - 0.5) * 80
        );
        
        groupRef.current.add(mesh);
      });
    }
  }, []);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((child, index) => {
        const mesh = child as THREE.Mesh;
        mesh.rotation.z += 0.01 * (index + 1);
        mesh.position.y += Math.sin(state.clock.elapsedTime + index) * 0.01;
        
        // Mouse interaction
        const dx = mesh.position.x - mousePosition.x * 30;
        const dy = mesh.position.y - mousePosition.y * 30;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 15) {
          mesh.scale.setScalar(1.5);
          const material = mesh.material as THREE.MeshBasicMaterial;
          material.opacity = 0.9;
        } else {
          mesh.scale.setScalar(1);
          const material = mesh.material as THREE.MeshBasicMaterial;
          material.opacity = 0.6;
        }
      });
    }
  });
  
  return <group ref={groupRef} />;
}

function FloatingGeometry() {
  const group = useRef<THREE.Group>(null!);
  
  useFrame((state) => {
    if (group.current) {
      const time = state.clock.elapsedTime;
      
      group.current.children.forEach((child, index) => {
        const mesh = child as THREE.Mesh;
        
        // Orbital motion around center
        const radius = 20 + index * 5;
        const speed = 0.5 + index * 0.1;
        const angle = time * speed + index * Math.PI * 0.5;
        
        mesh.position.x = Math.cos(angle) * radius;
        mesh.position.z = Math.sin(angle) * radius;
        mesh.position.y = Math.sin(time + index) * 5;
        
        // Self rotation
        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.02;
        mesh.rotation.z += 0.005;
        
        // Mouse interaction
        const dx = mesh.position.x - mousePosition.x * 40;
        const dy = mesh.position.y - mousePosition.y * 40;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 25) {
          mesh.scale.setScalar(1.5);
          const material = mesh.material as THREE.MeshBasicMaterial;
          material.opacity = 0.8;
        } else {
          mesh.scale.setScalar(1);
          const material = mesh.material as THREE.MeshBasicMaterial;
          material.opacity = 0.4;
        }
      });
    }
  });

  return (
    <group ref={group}>
      {/* Floating holographic UI panels */}
      <mesh position={[0, 0, -30]}>
        <planeGeometry args={[8, 5]} />
        <meshBasicMaterial color="#8B5CF6" wireframe transparent opacity={0.4} />
      </mesh>
      
      <mesh position={[20, 0, -25]}>
        <ringGeometry args={[2, 4, 8]} />
        <meshBasicMaterial color="#10B981" wireframe transparent opacity={0.4} />
      </mesh>
      
      <mesh position={[-20, 0, -35]}>
        <cylinderGeometry args={[2, 2, 6, 8]} />
        <meshBasicMaterial color="#3B82F6" wireframe transparent opacity={0.4} />
      </mesh>
      
      <mesh position={[0, 15, -40]}>
        <icosahedronGeometry args={[3]} />
        <meshBasicMaterial color="#06B6D4" wireframe transparent opacity={0.4} />
      </mesh>
      
      <mesh position={[0, -15, -20]}>
        <octahedronGeometry args={[2.5]} />
        <meshBasicMaterial color="#F59E0B" wireframe transparent opacity={0.4} />
      </mesh>
    </group>
  );
}

function ConnectionLines() {
  const linesRef = useRef<THREE.Group>(null!);
  
  useEffect(() => {
    if (linesRef.current) {
      // Create connecting lines between particles
      for (let i = 0; i < 50; i++) {
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(6); // 2 points * 3 coordinates
        
        // Random start and end points
        positions[0] = (Math.random() - 0.5) * 100;
        positions[1] = (Math.random() - 0.5) * 100;
        positions[2] = (Math.random() - 0.5) * 100;
        positions[3] = (Math.random() - 0.5) * 100;
        positions[4] = (Math.random() - 0.5) * 100;
        positions[5] = (Math.random() - 0.5) * 100;
        
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        
        const material = new THREE.LineBasicMaterial({
          color: new THREE.Color().setHSL(i / 50, 0.8, 0.5),
          transparent: true,
          opacity: 0.3,
          blending: THREE.AdditiveBlending
        });
        
        const line = new THREE.Line(geometry, material);
        linesRef.current.add(line);
      }
    }
  }, []);
  
  useFrame((state) => {
    if (linesRef.current) {
      const time = state.clock.elapsedTime;
      
      linesRef.current.children.forEach((child, index) => {
        const line = child as THREE.Line;
        const positions = line.geometry.attributes.position.array as Float32Array;
        
        // Animate line endpoints
        const speed = 0.5 + index * 0.1;
        const radius = 30 + index * 2;
        
        positions[0] = Math.cos(time * speed + index) * radius;
        positions[1] = Math.sin(time * speed + index) * radius;
        positions[2] = Math.sin(time * 0.5 + index) * 10;
        
        positions[3] = Math.cos(time * speed + index + Math.PI) * radius;
        positions[4] = Math.sin(time * speed + index + Math.PI) * radius;
        positions[5] = Math.cos(time * 0.5 + index) * 10;
        
        line.geometry.attributes.position.needsUpdate = true;
        
        // Dynamic opacity based on mouse proximity
        const centerX = (positions[0] + positions[3]) / 2;
        const centerY = (positions[1] + positions[4]) / 2;
        const dx = centerX - mousePosition.x * 50;
        const dy = centerY - mousePosition.y * 50;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        const material = line.material as THREE.LineBasicMaterial;
        material.opacity = distance < 20 ? 0.8 : 0.3;
      });
    }
  });
  
  return <group ref={linesRef} />;
}

function BackgroundScene() {
  const { camera } = useThree();
  
  useEffect(() => {
    camera.position.set(0, 0, 50);
    if ('fov' in camera) {
      camera.fov = 75;
      camera.updateProjectionMatrix();
    }
  }, [camera]);

  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#8B5CF6" />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#06B6D4" />
      
      <ParticleField />
      <FloatingGeometry />
      <CodeMatrix />
      <ConnectionLines />
    </>
  );
}

const BackgroundThreeJs = () => {
  return (
    <div className="fixed inset-0 z-0 opacity-60 dark:opacity-80 mix-blend-screen dark:mix-blend-normal">
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