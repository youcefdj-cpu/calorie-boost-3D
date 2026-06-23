"use client";

import { motion } from "framer-motion";

const fallbackItems = [
  { emoji: "🍯", name: "عسل السدر", price: "1200 د.ج", color: "bg-honey-500/20" },
  { emoji: "🥜", name: "مكسرات مشكلة", price: "1500 د.ج", color: "bg-wood/20" },
  { emoji: "🌾", name: "شوفان طبيعي", price: "800 د.ج", color: "bg-honey-50/10" },
  { emoji: "🫒", name: "زيت أركان", price: "2000 د.ج", color: "bg-organic/20" },
];

export function MobileFallback() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {fallbackItems.map((item, i) => (
        <motion.div
          key={i}
          className={`absolute ${item.color} rounded-2xl p-4 backdrop-blur-sm border border-honey-300/10`}
          style={{
            width: 100,
            height: 100,
            left: `${15 + i * 22}%`,
            top: `${20 + (i % 2) * 40}%`,
          }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        >
          <div className="text-center">
            <span className="text-3xl block mb-1">{item.emoji}</span>
            <p className="text-xs text-honey-100 font-medium">{item.name}</p>
            <p className="text-[10px] text-honey-300">{item.price}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
