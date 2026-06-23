"use client";

import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { Suspense, useEffect } from "react";
import { Lights } from "./Lights";
import { HoneyJar } from "./HoneyJar";
import { FloatingShape } from "./FloatingShape";
import { Particles } from "./Particles";
import { HoneycombGrid } from "./HoneycombGrid";
import { CameraRig } from "./CameraRig";
import { useQualityTier } from "@/hooks/useQualityTier";
import { useUIStore } from "@/lib/store/uiStore";

const shapes = [
  { type: "torus" as const, color: "#F5A623", size: 0.6, orbitRadius: 4, speed: 0.25, offset: 0, floatAmp: 0.4 },
  { type: "sphere" as const, color: "#4CAF50", size: 0.5, orbitRadius: 5, speed: 0.2, offset: 1.5, floatAmp: 0.5 },
  { type: "roundedBox" as const, color: "#FFF8E7", size: 0.5, orbitRadius: 3.5, speed: 0.3, offset: 3, floatAmp: 0.3 },
  { type: "capsule" as const, color: "#8B6914", size: 0.5, orbitRadius: 4.5, speed: 0.15, offset: 4.5, floatAmp: 0.35 },
  { type: "teardrop" as const, color: "#D4850A", size: 0.45, orbitRadius: 6, speed: 0.35, offset: 2, floatAmp: 0.45 },
];

export default function Scene() {
  const qualityTier = useQualityTier();
  const setLoading = useUIStore((s) => s.setLoading);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, [setLoading]);

  const visibleShapes = qualityTier === "high" ? shapes : shapes.slice(0, 3);
  const particleCount = qualityTier === "high" ? 50 : 20;

  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0.5, 7], fov: 50, near: 0.1, far: 50 }}
        dpr={qualityTier === "high" ? [1, 2] : [0.75, 1]}
        gl={{
          antialias: qualityTier === "high",
          alpha: false,
          powerPreference: "high-performance",
        }}
        shadows={qualityTier === "high"}
        frameloop={qualityTier === "high" ? "always" : "demand"}
        style={{ background: "#0a0a0f" }}
      >
        <Suspense fallback={null}>
          <Lights />
          <HoneyJar qualityTier={qualityTier} />
          {visibleShapes.map((shape, i) => (
            <FloatingShape key={i} config={shape} qualityTier={qualityTier} />
          ))}
          <Particles count={particleCount} />
          <HoneycombGrid />
          <CameraRig qualityTier={qualityTier} />
          <Environment preset="sunset" />
        </Suspense>
      </Canvas>
    </div>
  );
}
