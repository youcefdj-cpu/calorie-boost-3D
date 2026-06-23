"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import type { OrbitControls as OrbitControlsType } from "three-stdlib";

export function CameraRig({ qualityTier }: { qualityTier: "high" | "low" }) {
  const controlsRef = useRef<OrbitControlsType>(null);

  useFrame((state) => {
    const scrollY = (state as any).scroll?.scrollY ?? 0;
    const maxScroll = Math.max(document.body.scrollHeight - window.innerHeight, 1);
    const progress = scrollY / maxScroll;
    if (controlsRef.current) {
      controlsRef.current.target.y = progress * -2;
    }
  });

  return (
    <OrbitControls
      ref={controlsRef}
      enablePan={false}
      enableZoom={qualityTier === "high"}
      minDistance={4}
      maxDistance={12}
      autoRotate
      autoRotateSpeed={0.5}
      rotateSpeed={qualityTier === "high" ? 0.8 : 0.4}
      target={[0, 0, 0]}
    />
  );
}
