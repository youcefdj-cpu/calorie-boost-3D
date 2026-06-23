"use client";

import { motion } from "framer-motion";
import { X, MessageCircle } from "lucide-react";
import type { Product } from "@/lib/data/products";

export function ProductCard3D({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) {
  const whatsappUrl = `https://wa.me/213781379506?text=${encodeURIComponent(
    `مرحباً كالوري بوست، أريد ${product.name} بـ ${product.price.toLocaleString("ar-DZ")} د.ج\nالدفع عند الاستلام\nالعنوان: [يملأ العميل]`
  )}`;

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 100, opacity: 0 }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
      className="glass-strong rounded-2xl p-6 md:p-8 max-w-sm w-full relative"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={onClose}
        className="absolute top-4 left-4 p-1 rounded-full hover:bg-honey-300/10 transition-colors"
      >
        <X className="w-5 h-5 text-honey-300" />
      </button>

      <div className="text-6xl text-center mb-4">{product.image}</div>

      <h2 className="text-2xl font-bold text-center mb-2" style={{ color: 'var(--text-primary)' }}>
        {product.name}
      </h2>

      {product.badge && (
        <span className="block text-center text-xs text-honey-300/80 mb-1">
          {product.badge === "bestseller" ? "🏆 الأكثر مبيعاً" : product.badge === "new" ? "🆕 جديد" : "💰 تخفيض"}
        </span>
      )}

      <div className="flex items-center justify-center gap-1.5 mb-3">
        <span className="text-xs font-bold bg-organic/10 text-organic px-2 py-0.5 rounded-full">
          ✅ الدفع عند الاستلام
        </span>
      </div>

      <p className="text-sm text-center mb-4" style={{ color: 'var(--text-muted)' }}>
        {product.description}
      </p>

      <div className="text-center mb-6">
        <span className="text-3xl font-bold text-gradient">
          {product.price.toLocaleString("ar-DZ")}
        </span>
        <span className="text-honey-300 mr-1">د.ج</span>
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white font-bold py-3 rounded-full hover:bg-[#20BD5A] transition-all duration-300"
      >
        <MessageCircle className="w-5 h-5" />
        اطلب عبر واتساب
      </a>

      <p className="text-xs text-center mt-2" style={{ color: 'var(--text-muted)' }}>
        يمكنك تعديل الرسالة قبل الإرسال
      </p>
    </motion.div>
  );
}
