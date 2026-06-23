"use client";

import { useRef, useState, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ShapeConfig {
  type: "torus" | "sphere" | "roundedBox" | "capsule" | "teardrop";
  color: string;
  size: number;
  orbitRadius: number;
  speed: number;
  offset: number;
  floatAmp: number;
  label?: string;
  price?: number;
}

export function FloatingShape({
  config,
  qualityTier,
}: {
  config: ShapeConfig;
  qualityTier: "high" | "low";
}) {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime * config.speed + config.offset;
    const angle = t;
    const radius = config.orbitRadius;
    const rx = Math.cos(angle) * radius;
    const rz = Math.sin(angle * 0.7) * (radius * 0.6);
    groupRef.current.position.x = rx;
    groupRef.current.position.z = rz;
    groupRef.current.position.y = Math.sin(t * 0.8 + config.offset) * config.floatAmp;

    if (!hovered) {
      groupRef.current.rotation.x += 0.005 * config.speed;
      groupRef.current.rotation.y += 0.01 * config.speed;
    }
  });

  const segments = qualityTier === "high" ? 32 : 12;

  const geometry = useMemo(() => {
    switch (config.type) {
      case "torus":
        return <torusGeometry args={[config.size, config.size * 0.4, segments, segments * 2]} />;
      case "sphere":
        return <sphereGeometry args={[config.size, segments, segments]} />;
      case "roundedBox":
        return <boxGeometry args={[config.size * 1.5, config.size * 1.5, config.size * 1.5, 4, 4, 4]} />;
      case "capsule":
        return <capsuleGeometry args={[config.size * 0.6, config.size, segments, segments]} />;
      case "teardrop": {
        const shape = new THREE.Shape();
        shape.moveTo(0, -config.size);
        shape.quadraticCurveTo(config.size * 0.8, -config.size * 0.3, 0, config.size);
        shape.quadraticCurveTo(-config.size * 0.8, -config.size * 0.3, 0, -config.size);
        return <shapeGeometry args={[shape]} />;
      }
      default:
        return <torusGeometry args={[config.size, config.size * 0.4, segments, segments * 2]} />;
    }
  }, [config.type, config.size, segments]);

  return (
    <group ref={groupRef}>
      <mesh
        ref={meshRef}
        scale={hovered ? 1.3 : 1}
        onPointerEnter={(e) => {
          e.stopPropagation();
          setHovered(true);
        }}
        onPointerLeave={() => setHovered(false)}
      >
        {geometry}
        <meshPhysicalMaterial
          color={config.color}
          roughness={0.2}
          metalness={0.1}
          transparent
          opacity={0.85}
          emissive={hovered ? config.color : "#000000"}
          emissiveIntensity={hovered ? 0.5 : 0}
          clearcoat={0.3}
        />
      </mesh>
    </group>
  );
}
