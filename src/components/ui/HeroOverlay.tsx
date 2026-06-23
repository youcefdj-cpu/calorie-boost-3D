"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function HeroOverlay() {
  return (
    <div className="absolute inset-0 pointer-events-none z-10 flex flex-col items-center justify-center text-center px-4">
      <div className="max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-gradient mb-4"
        >
          كالوري بوست
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
          style={{ color: 'var(--text-secondary)' }}
        >
          تهتم بتوفير كل ما هو مفيد للجسم وذو قيمة غذائية عالية
        </motion.p>

        <motion.a
          href="/shop"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="pointer-events-auto inline-block bg-honey-300 text-dark-base font-bold px-8 py-3 rounded-full text-lg hover:bg-honey-200 transition-all duration-300 honey-glow"
          style={{ color: '#0F0F0F' }}
        >
          تصفح المنتجات
        </motion.a>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex items-center justify-center gap-4 md:gap-8 mt-12"
        >
          {[
            { icon: "✅", text: "الدفع عند الاستلام" },
            { icon: "🚚", text: "توصيل سريع" },
            { icon: "🇩🇿", text: "منتوج بلدي" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-1.5">
              <span className="text-lg">{item.icon}</span>
              <span className="text-xs md:text-sm" style={{ color: 'var(--text-muted)' }}>{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-6 h-6 text-honey-300/60 animate-bounce" />
      </motion.div>
    </div>
  );
}
