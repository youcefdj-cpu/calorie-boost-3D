"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function HoneycombGrid() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const count = 100;

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useMemo(() => {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 8 + Math.random() * 6;
      dummy.position.set(
        Math.cos(angle) * radius,
        (Math.random() - 0.5) * 10,
        -12 - Math.random() * 4
      );
      dummy.scale.setScalar(0.3 + Math.random() * 0.5);
      dummy.updateMatrix();
      if (meshRef.current) {
        meshRef.current.setMatrixAt(i, dummy.matrix);
      }
    }
    if (meshRef.current) {
      meshRef.current.instanceMatrix.needsUpdate = true;
    }
  }, [dummy]);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <cylinderGeometry args={[0.4, 0.4, 0.05, 6]} />
      <meshBasicMaterial color="#F5A623" transparent opacity={0.04} />
    </instancedMesh>
  );
}
