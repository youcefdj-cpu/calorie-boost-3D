"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle } from "lucide-react";
import { useUIStore } from "@/lib/store/uiStore";
import { products } from "@/lib/data/products";
import type { Product } from "@/lib/data/products";

export function ProductModal() {
  const selectedProduct = useUIStore((s) => s.selectedProduct);
  const selectProduct = useUIStore((s) => s.selectProduct);

  const product = selectedProduct ? products.find((p) => p.id === selectedProduct) : null;

  const whatsappUrl = product
    ? `https://wa.me/213781379506?text=${encodeURIComponent(
        `مرحباً كالوري بوست، أريد ${product.name} بـ ${product.price.toLocaleString("ar-DZ")} د.ج\nالدفع عند الاستلام\nالعنوان: [يملأ العميل]`
      )}`
    : "#";

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => selectProduct(null)}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="glass-strong rounded-3xl max-w-md w-full relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => selectProduct(null)}
              className="absolute top-4 left-4 z-10 p-1.5 rounded-full glass hover:bg-honey-300/20 transition-colors"
            >
              <X className="w-5 h-5" style={{ color: 'var(--text-primary)' }} />
            </button>

            <div className="p-6 md:p-8 text-center">
              <div className="text-7xl md:text-8xl mb-4">{product.image}</div>

              {product.badge && (
                <span className={`text-xs font-bold px-3 py-1 rounded-full inline-block mb-2 ${
                  product.badge === "bestseller"
                    ? "bg-honey-300/20 text-honey-300"
                    : product.badge === "new"
                    ? "bg-organic/20 text-organic"
                    : "bg-honey-200/20 text-honey-200"
                }`}>
                  {product.badge === "bestseller" ? "🏆 الأكثر مبيعاً" : product.badge === "new" ? "🆕 جديد" : "💰 تخفيض"}
                </span>
              )}

              <h2 className="text-2xl md:text-3xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>
                {product.name}
              </h2>

              <p className="text-sm mb-2" style={{ color: 'var(--text-muted)' }}>
                {product.nameEn}
              </p>

              <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                {product.description}
              </p>

              <div className="inline-flex items-center gap-1.5 bg-organic/10 text-organic text-xs font-bold px-3 py-1 rounded-full mb-4">
                <span>✅</span>
                <span>الدفع عند الاستلام</span>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold text-gradient">
                  {product.price.toLocaleString("ar-DZ")}
                </span>
                <span className="text-lg text-honey-300 mr-1">د.ج</span>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full bg-[#25D366] text-white font-bold py-3.5 rounded-xl hover:bg-[#20BD5A] transition-all duration-300 text-base"
              >
                <MessageCircle className="w-5 h-5" />
                اطلب عبر واتساب
              </a>

              <p className="text-xs mt-3" style={{ color: 'var(--text-muted)' }}>
                يمكنك تعديل الرسالة قبل الإرسال
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
