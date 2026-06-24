"use client";

import { HeroBackground } from "./HeroBackground";
import { HeroOverlay } from "@/components/ui/HeroOverlay";
import { Navbar } from "@/components/ui/Navbar";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <HeroBackground />
      <HeroOverlay />
      <Navbar />
    </section>
  );
}
