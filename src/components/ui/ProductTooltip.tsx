"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle } from "lucide-react";
import { products } from "@/lib/data/products";
import { useUIStore } from "@/lib/store/uiStore";

export function ProductTooltip() {
  const selectedObject = useUIStore((s) => s.selectedObject);
  const selectObject = useUIStore((s) => s.selectObject);
  const selectProduct = useUIStore((s) => s.selectProduct);

  const product = selectedObject ? products.find((p) => p.id === selectedObject) : null;

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 flex items-center justify-center p-4"
          onClick={() => selectObject(null)}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
          <div onClick={(e) => e.stopPropagation()}>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-strong rounded-2xl p-6 max-w-sm w-full text-center"
            >
              <div className="text-5xl mb-3">{product.image}</div>
              <h2 className="text-xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>{product.name}</h2>
              <p className="text-2xl font-bold text-gradient mb-4">
                {product.price.toLocaleString("ar-DZ")} د.ج
              </p>
              <div className="flex items-center justify-center gap-2 mb-4">
                <button
                  onClick={() => { selectProduct(product.id); selectObject(null); }}
                  className="bg-honey-300 font-bold px-5 py-2 rounded-full hover:bg-honey-200 transition-all duration-300 text-sm"
                  style={{ color: '#0F0F0F' }}
                >
                  عرض التفاصيل
                </button>
                <a
                  href={`https://wa.me/213781379506?text=${encodeURIComponent(`مرحباً كالوري بوست، أريد ${product.name} بـ ${product.price.toLocaleString("ar-DZ")} د.ج\nالدفع عند الاستلام\nالعنوان: [يملأ العميل]`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 bg-[#25D366] text-white font-medium px-4 py-2 rounded-full hover:bg-[#20BD5A] transition-colors text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  اطلب
                </a>
              </div>
              <button
                onClick={() => selectObject(null)}
                className="text-xs transition-colors"
                style={{ color: 'var(--text-muted)' }}
                onMouseEnter={e => e.currentTarget.style.color = '#F5A623'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
              >
                إغلاق
              </button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
