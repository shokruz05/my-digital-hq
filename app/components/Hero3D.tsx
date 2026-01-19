"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

function AnimatedSphere() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
      meshRef.current.scale.setScalar(2 + Math.sin(state.clock.elapsedTime) * 0.2);
    }
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1, 2]} />
      <meshStandardMaterial color="#00ff88" wireframe />
    </mesh>
  );
}

export default function Hero3D() {
  return (
    // 👇 ВОТ ЗДЕСЬ ИСПРАВЛЕНИЕ: pointerEvents: 'none'
    // Это разрешает кликать сквозь сферу по кнопкам
    <div style={{ 
      position: 'absolute', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      zIndex: 0,
      pointerEvents: 'none' 
    }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 2]} intensity={1} />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
}