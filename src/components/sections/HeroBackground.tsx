"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  { src: "/images/hero/honeycomb.jpg", alt: "عسل طبيعي" },
  { src: "/images/hero/almonds.jpg", alt: "مكسرات طازجة" },
  { src: "/images/hero/acai-bowl.jpg", alt: "شوفان وفواكه" },
  { src: "/images/hero/olive-oil.jpg", alt: "زيت زيتون" },
  { src: "/images/hero/honey-jar-nuts.jpg", alt: "منتجات طبيعية" },
];

export function HeroBackground() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${images[current].src})`,
          }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30" />
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-500 ${
              i === current
                ? "bg-honey-300 w-8 h-2"
                : "bg-white/40 w-2 h-2 hover:bg-white/60"
            }`}
            aria-label={`صورة ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
