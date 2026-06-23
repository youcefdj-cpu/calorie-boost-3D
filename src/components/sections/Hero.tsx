"use client";

import dynamic from "next/dynamic";
import { HeroOverlay } from "@/components/ui/HeroOverlay";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { Navbar } from "@/components/ui/Navbar";
import { MobileFallback } from "@/components/ui/MobileFallback";
import { ErrorBoundary } from "react-error-boundary";

const Scene = dynamic(() => import("@/components/canvas/Scene"), {
  ssr: false,
  loading: () => null,
});

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <ErrorBoundary fallback={<MobileFallback />}>
        <Scene />
      </ErrorBoundary>
      <HeroOverlay />
      <Navbar />
      <LoadingScreen />
    </section>
  );
}
