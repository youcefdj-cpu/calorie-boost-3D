"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import { useUIStore } from "@/lib/store/uiStore";

export function HoneyJar({
  qualityTier,
}: {
  qualityTier: "high" | "low";
}) {
  const groupRef = useRef<THREE.Group>(null);
  const liquidRef = useRef<THREE.Mesh>(null);
  const lidRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const selectObject = useUIStore((s) => s.selectObject);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    groupRef.current.position.y = Math.sin(t * 0.5) * 0.3;
    groupRef.current.rotation.y += 0.003;

    if (liquidRef.current && hovered) {
      liquidRef.current.rotation.y += 0.02;
    }
    if (lidRef.current && hovered) {
      lidRef.current.position.y = 1.55 + Math.sin(t * 2) * 0.05;
    }
  });

  return (
    <group
      ref={groupRef}
      position={[0, 0, 0]}
      scale={hovered ? 1.15 : 1}
      onPointerEnter={(e) => {
        e.stopPropagation();
        setHovered(true);
        document.body.style.cursor = "pointer";
      }}
      onPointerLeave={() => {
        setHovered(false);
        document.body.style.cursor = "auto";
      }}
      onClick={(e) => {
        e.stopPropagation();
        selectObject("sidr-honey");
      }}
    >
      <mesh
        position={[0, 0, 0]}
        castShadow
      >
        <cylinderGeometry args={[1.3, 1.5, 2.5, qualityTier === "high" ? 64 : 24]} />
        <meshPhysicalMaterial
          color="#F5A623"
          transmission={0.85}
          thickness={1.5}
          roughness={0.1}
          metalness={0}
          ior={1.5}
          clearcoat={1}
          envMapIntensity={1}
          transparent
          opacity={0.7}
        />
      </mesh>

      <mesh ref={liquidRef} position={[0, -0.1, 0]}>
        <cylinderGeometry args={[1.1, 1.3, 1.8, qualityTier === "high" ? 48 : 20]} />
        <meshPhysicalMaterial
          color="#E09000"
          emissive="#F5A623"
          emissiveIntensity={hovered ? 0.5 : 0.15}
          transmission={0.5}
          roughness={0.05}
          metalness={0}
          transparent
          opacity={0.6}
        />
      </mesh>

      <mesh ref={lidRef} position={[0, 1.4, 0]}>
        <cylinderGeometry args={[1.1, 1.2, 0.25, 6]} />
        <meshStandardMaterial
          color="#D4850A"
          roughness={0.6}
          metalness={0.2}
        />
      </mesh>

      <mesh position={[0, 1.5, 0]}>
        <cylinderGeometry args={[1.05, 1.15, 0.05, 6]} />
        <meshStandardMaterial
          color="#B86E00"
          roughness={0.7}
          metalness={0.1}
        />
      </mesh>

      <mesh position={[1.35, 0, 0]} rotation={[0, -0.3, 0]}>
        <planeGeometry args={[0.8, 0.6]} />
        <meshStandardMaterial
          color="#FFF8E7"
          roughness={0.5}
        />
      </mesh>

      <pointLight
        position={[0, 0, 1.5]}
        intensity={hovered ? 1.5 : 0.5}
        color="#F5A623"
        distance={3}
        decay={2}
      />

      {hovered && (
        <Html position={[0, 2.5, 0]} center>
          <div className="glass rounded-xl px-4 py-2 text-center whitespace-nowrap">
            <p className="text-honey-300 font-bold text-sm">عسل السدر</p>
            <p className="text-honey-100 text-xs">1200 د.ج</p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                selectObject("sidr-honey");
              }}
              className="mt-1 text-xs bg-honey-300 text-dark-base px-3 py-1 rounded-full hover:bg-honey-200 transition-colors"
            >
              عرض التفاصيل
            </button>
          </div>
        </Html>
      )}
    </group>
  );
}
