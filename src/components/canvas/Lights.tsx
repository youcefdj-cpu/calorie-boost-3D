"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const LIGHT_ORBIT_RADIUS = 4;
const LIGHT_HEIGHT = 2;

export function Lights() {
  const light1 = useRef<THREE.PointLight>(null);
  const light2 = useRef<THREE.PointLight>(null);
  const light3 = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (light1.current) {
      light1.current.position.x = Math.sin(t * 0.2) * LIGHT_ORBIT_RADIUS;
      light1.current.position.z = Math.cos(t * 0.2) * LIGHT_ORBIT_RADIUS;
    }
    if (light2.current) {
      light2.current.position.x = Math.sin(t * 0.3 + 2) * (LIGHT_ORBIT_RADIUS - 1);
      light2.current.position.z = Math.cos(t * 0.3 + 2) * (LIGHT_ORBIT_RADIUS - 1);
    }
    if (light3.current) {
      light3.current.position.x = Math.sin(t * 0.15 + 4) * (LIGHT_ORBIT_RADIUS + 1);
      light3.current.position.z = Math.cos(t * 0.15 + 4) * (LIGHT_ORBIT_RADIUS + 1);
    }
  });

  return (
    <>
      <ambientLight intensity={0.3} color="#FFE4B5" />
      <pointLight ref={light1} position={[4, 2, 0]} intensity={25} color="#F5A623" decay={2} />
      <pointLight ref={light2} position={[-3, 1, 3]} intensity={20} color="#E09000" decay={2} />
      <pointLight ref={light3} position={[0, 3, -4]} intensity={15} color="#FFE4B5" decay={2} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} color="#FFF8E7" castShadow />
      <hemisphereLight args={["#FFE4B5", "#0F0F0F", 0.4]} />
    </>
  );
}
