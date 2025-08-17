import { useEffect, useRef } from 'react';
import { Engine, Scene, ArcRotateCamera, HemisphericLight, MeshBuilder, StandardMaterial, Color3, Vector3 } from '@babylonjs/core';

const BabylonJsScene = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<Engine | null>(null);
  const sceneRef = useRef<Scene | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Create Babylon.js engine and scene
    const engine = new Engine(canvasRef.current, true);
    engineRef.current = engine;

    const scene = new Scene(engine);
    sceneRef.current = scene;

    // Create camera
    const camera = new ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 10, Vector3.Zero(), scene);
    camera.attachControl(canvasRef.current, true);

    // Create light
    const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);
    light.intensity = 0.7;

    // Create animated torus
    const torus = MeshBuilder.CreateTorus("torus", { diameter: 3, thickness: 1 }, scene);
    const torusMaterial = new StandardMaterial("torusMaterial", scene);
    torusMaterial.diffuseColor = new Color3(0.545, 0.365, 0.961); // Primary color
    torus.material = torusMaterial;

    // Create animated box
    const box = MeshBuilder.CreateBox("box", { size: 2 }, scene);
    box.position.x = 4;
    const boxMaterial = new StandardMaterial("boxMaterial", scene);
    boxMaterial.diffuseColor = new Color3(0.063, 0.725, 0.506); // Accent color
    box.material = boxMaterial;

    // Create animated sphere
    const sphere = MeshBuilder.CreateSphere("sphere", { diameter: 2 }, scene);
    sphere.position.x = -4;
    const sphereMaterial = new StandardMaterial("sphereMaterial", scene);
    sphereMaterial.diffuseColor = new Color3(0.239, 0.512, 0.961); // Secondary color
    sphere.material = sphereMaterial;

    // Animation loop
    scene.registerBeforeRender(() => {
      torus.rotation.y += 0.01;
      torus.rotation.x += 0.005;
      
      box.rotation.z += 0.02;
      box.position.y = Math.sin(Date.now() * 0.003) * 0.5;
      
      sphere.rotation.y -= 0.015;
      sphere.position.y = Math.cos(Date.now() * 0.002) * 0.8;
    });

    // Start rendering
    engine.runRenderLoop(() => {
      scene.render();
    });

    // Handle resize
    const handleResize = () => {
      engine.resize();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      engine.dispose();
    };
  }, []);

  return (
    <div className="w-full h-64 bg-gradient-to-br from-muted via-background to-muted rounded-lg overflow-hidden relative">
      <canvas 
        ref={canvasRef} 
        className="w-full h-full"
        style={{ outline: 'none' }}
      />
      <div className="absolute bottom-4 left-4 text-sm font-semibold text-primary bg-background/80 px-3 py-1 rounded-full">
        Babylon.js Scene
      </div>
    </div>
  );
};

export default BabylonJsScene;