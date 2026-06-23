"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useUIStore } from "@/lib/store/uiStore";

export function LoadingScreen() {
  const isLoading = useUIStore((s) => s.isLoading);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[100] bg-dark-base flex flex-col items-center justify-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-8">
            كالوري بوست
          </h1>

          <div className="relative w-48 h-1 bg-dark-surface rounded-full overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-r from-honey-500 via-honey-300 to-honey-200 rounded-full"
            />
          </div>

          <div className="mt-8 flex flex-col items-center">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="text-2xl"
            >
              🍯
            </motion.div>
            <p className="text-honey-300/60 text-sm mt-2">جارٍ التحميل...</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
