import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

// Avatar character component
function Avatar3D() {
  const groupRef = useRef<THREE.Group>(null!);
  const headRef = useRef<THREE.Mesh>(null!);
  const bodyRef = useRef<THREE.Mesh>(null!);
  const leftArmRef = useRef<THREE.Group>(null!);
  const rightArmRef = useRef<THREE.Group>(null!);
  
  const [isWalkingIn, setIsWalkingIn] = useState(true);

  useEffect(() => {
    // Walking-in effect
    if (groupRef.current) {
      groupRef.current.position.z = -10;
      setTimeout(() => setIsWalkingIn(false), 100);
    }
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    
    const time = state.clock.elapsedTime;
    
    // Walking-in animation
    if (isWalkingIn && groupRef.current.position.z < 0) {
      groupRef.current.position.z += 0.1;
    }
    
    // Idle breathing motion
    if (bodyRef.current && headRef.current) {
      const breathe = Math.sin(time * 2) * 0.02;
      bodyRef.current.scale.y = 1 + breathe;
      headRef.current.position.y = 2.8 + breathe * 2;
    }
    
    // Hand gestures - pointing
    if (rightArmRef.current) {
      const gesture = Math.sin(time * 1.5) * 0.1;
      rightArmRef.current.rotation.z = -0.3 + gesture;
      rightArmRef.current.rotation.x = 0.2 + gesture * 0.5;
    }
    
    // Subtle head movement
    if (headRef.current) {
      headRef.current.rotation.y = Math.sin(time * 0.8) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[0, -1, 0]}>
      {/* Head */}
      <mesh ref={headRef} position={[0, 2.8, 0]}>
        <sphereGeometry args={[0.6, 16, 16]} />
        <meshStandardMaterial color="#F3A5A7" />
      </mesh>
      
      {/* Eyes */}
      <mesh position={[-0.2, 2.9, 0.5]}>
        <sphereGeometry args={[0.08, 8, 8]} />
        <meshStandardMaterial color="#333" />
      </mesh>
      <mesh position={[0.2, 2.9, 0.5]}>
        <sphereGeometry args={[0.08, 8, 8]} />
        <meshStandardMaterial color="#333" />
      </mesh>
      
      {/* Body */}
      <mesh ref={bodyRef} position={[0, 1.5, 0]}>
        <cylinderGeometry args={[0.8, 0.9, 2, 8]} />
        <meshStandardMaterial color="#4F46E5" />
      </mesh>
      
      {/* Left Arm */}
      <group ref={leftArmRef} position={[-1.2, 2, 0]}>
        <mesh>
          <cylinderGeometry args={[0.2, 0.15, 1.5, 8]} />
          <meshStandardMaterial color="#F3A5A7" />
        </mesh>
      </group>
      
      {/* Right Arm (pointing) */}
      <group ref={rightArmRef} position={[1.2, 2, 0]}>
        <mesh>
          <cylinderGeometry args={[0.2, 0.15, 1.5, 8]} />
          <meshStandardMaterial color="#F3A5A7" />
        </mesh>
        {/* Hand */}
        <mesh position={[0, -0.8, 0]}>
          <sphereGeometry args={[0.2, 8, 8]} />
          <meshStandardMaterial color="#F3A5A7" />
        </mesh>
      </group>
      
      {/* Legs */}
      <mesh position={[-0.3, 0.2, 0]}>
        <cylinderGeometry args={[0.25, 0.2, 1.5, 8]} />
        <meshStandardMaterial color="#2563EB" />
      </mesh>
      <mesh position={[0.3, 0.2, 0]}>
        <cylinderGeometry args={[0.25, 0.2, 1.5, 8]} />
        <meshStandardMaterial color="#2563EB" />
      </mesh>
    </group>
  );
}

// Orbiting element component
function OrbitingElement({ 
  text, 
  icon, 
  radius, 
  speed, 
  color, 
  offset, 
  onClick 
}: {
  text: string;
  icon: string;
  radius: number;
  speed: number;
  color: string;
  offset: number;
  onClick: () => void;
}) {
  const meshRef = useRef<THREE.Group>(null!);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime;
      const angle = time * speed + offset;
      
      meshRef.current.position.x = Math.cos(angle) * radius;
      meshRef.current.position.z = Math.sin(angle) * radius;
      meshRef.current.position.y = Math.sin(time + offset) * 0.5;
      
      // Hover glow effect
      if (hovered) {
        meshRef.current.scale.setScalar(1.2);
      } else {
        meshRef.current.scale.setScalar(1);
      }
      
      // Face the camera
      meshRef.current.lookAt(0, 0, 10);
    }
  });

  return (
    <group
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={onClick}
    >
      {/* Background sphere */}
      <mesh>
        <sphereGeometry args={[0.8, 16, 16]} />
        <meshStandardMaterial 
          color={color} 
          transparent 
          opacity={hovered ? 0.9 : 0.7}
          emissive={hovered ? color : '#000000'}
          emissiveIntensity={hovered ? 0.3 : 0}
        />
      </mesh>
      
      {/* Icon */}
      <Text
        position={[0, 0.2, 0.81]}
        fontSize={0.6}
        color="white"
        anchorX="center"
        anchorY="middle"
        font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff"
      >
        {icon}
      </Text>
      
      {/* Text */}
      <Text
        position={[0, -0.3, 0.81]}
        fontSize={0.25}
        color="white"
        anchorX="center"
        anchorY="middle"
        maxWidth={2}
        font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff"
      >
        {text}
      </Text>
    </group>
  );
}

function Scene({ onElementClick }: { onElementClick: (type: string, item: any) => void }) {
  const skills = [
    { text: "React", icon: "⚛️", color: "#61DAFB" },
    { text: "Node.js", icon: "🟢", color: "#339933" },
    { text: "MongoDB", icon: "🍃", color: "#47A248" },
    { text: "Java", icon: "☕", color: "#ED8B00" },
    { text: "Python", icon: "🐍", color: "#3776AB" },
    { text: "Salesforce", icon: "☁️", color: "#00A1E0" },
  ];

  const hobbies = [
    { text: "Cricket", icon: "🏏", color: "#FF6B6B" },
    { text: "Sketching", icon: "✏️", color: "#4ECDC4" },
    { text: "Gaming", icon: "🎮", color: "#45B7D1" },
  ];

  const projects = [
    { text: "Career Sync", icon: "💼", color: "#9B59B6" },
    { text: "Weather App", icon: "🌤️", color: "#F39C12" },
    { text: "Virtual Assistant", icon: "🤖", color: "#E74C3C" },
  ];

  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#ffffff" />
      <pointLight position={[-10, -10, 5]} intensity={0.4} color="#8B5CF6" />
      <spotLight position={[0, 10, 5]} intensity={0.5} angle={0.3} penumbra={1} />

      <Avatar3D />

      {/* Skills orbiting at inner radius */}
      {skills.map((skill, index) => (
        <OrbitingElement
          key={`skill-${index}`}
          text={skill.text}
          icon={skill.icon}
          radius={4}
          speed={0.3}
          color={skill.color}
          offset={(index / skills.length) * Math.PI * 2}
          onClick={() => onElementClick('skill', skill)}
        />
      ))}

      {/* Hobbies orbiting at middle radius */}
      {hobbies.map((hobby, index) => (
        <OrbitingElement
          key={`hobby-${index}`}
          text={hobby.text}
          icon={hobby.icon}
          radius={6}
          speed={0.2}
          color={hobby.color}
          offset={(index / hobbies.length) * Math.PI * 2 + Math.PI}
          onClick={() => onElementClick('hobby', hobby)}
        />
      ))}

      {/* Projects orbiting at outer radius */}
      {projects.map((project, index) => (
        <OrbitingElement
          key={`project-${index}`}
          text={project.text}
          icon={project.icon}
          radius={8}
          speed={0.15}
          color={project.color}
          offset={(index / projects.length) * Math.PI * 2}
          onClick={() => onElementClick('project', project)}
        />
      ))}
    </>
  );
}

const Avatar3DScene = () => {
  const [selectedElement, setSelectedElement] = useState<any>(null);

  const handleElementClick = (type: string, item: any) => {
    setSelectedElement({ type, item });
    console.log(`Clicked ${type}:`, item);
    // Here you can add logic to open modals, navigate, etc.
  };

  return (
    <div className="relative w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <Scene onElementClick={handleElementClick} />
      </Canvas>
      
      {/* Selected element info */}
      {selectedElement && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="absolute bottom-4 left-4 right-4 bg-background/95 backdrop-blur-sm rounded-lg p-4 border border-border"
        >
          <div className="flex items-center justify-between">
            <div>
              <span className="text-lg">{selectedElement.item.icon}</span>
              <span className="ml-2 font-semibold">{selectedElement.item.text}</span>
              <span className="ml-2 text-sm text-muted-foreground">({selectedElement.type})</span>
            </div>
            <button
              onClick={() => setSelectedElement(null)}
              className="text-muted-foreground hover:text-foreground"
            >
              ✕
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Avatar3DScene;