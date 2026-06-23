"use client";

import { motion } from "framer-motion";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const { scrollY } = useScrollPosition();
  const isScrolled = scrollY > 50;

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-strong py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <span className="text-gradient text-xl md:text-2xl font-bold">كالوري بوست</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="/" className="text-sm font-medium transition-colors" style={{ color: 'var(--text-secondary)', '--hover-color': '#F5A623' } as React.CSSProperties}
             onMouseEnter={e => e.currentTarget.style.color = '#F5A623'}
             onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
            الرئيسية
          </a>
          <a href="/shop" className="text-sm font-medium transition-colors" style={{ color: 'var(--text-secondary)' }}
             onMouseEnter={e => e.currentTarget.style.color = '#F5A623'}
             onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
            المتجر
          </a>
          <a href="/contact" className="text-sm font-medium transition-colors" style={{ color: 'var(--text-secondary)' }}
             onMouseEnter={e => e.currentTarget.style.color = '#F5A623'}
             onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
            اتصل بنا
          </a>
        </div>

        <div className="flex items-center gap-2">
          <a href="https://wa.me/213781379506" target="_blank" rel="noopener noreferrer"
             className="hidden md:flex items-center gap-1.5 bg-[#25D366] text-white text-xs font-bold px-3 py-1.5 rounded-full hover:bg-[#20BD5A] transition-colors">
            <span>💬</span>
            واتساب
          </a>
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  );
}
