"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Navbar } from "@/components/ui/Navbar";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import { ProductModal } from "@/components/ui/ProductModal";
import { Footer } from "@/components/sections/Footer";
import { useUIStore } from "@/lib/store/uiStore";
import { products } from "@/lib/data/products";
import type { Product } from "@/lib/data/products";

const categories = [
  { id: "all", label: "الكل" },
  { id: "honey", label: "عسل" },
  { id: "nuts", label: "مكسرات" },
  { id: "oats", label: "شوفان" },
  { id: "organic", label: "عضوي" },
  { id: "recipes", label: "وصفات" },
];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const selectProduct = useUIStore((s) => s.selectProduct);

  const filtered = activeCategory === "all"
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-base)' }}>
      <Navbar />
      <div className="pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-gradient text-center mb-2"
          >
            المتجر
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mb-10"
            style={{ color: 'var(--text-muted)' }}
          >
            تصفح جميع منتجاتنا الطبيعية
          </motion.p>

          <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  activeCategory === cat.id
                    ? "bg-honey-300 text-dark-base"
                    : "glass"
                }`}
                style={activeCategory !== cat.id ? { color: 'var(--text-secondary)' } : { color: '#0F0F0F' }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filtered.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={() => selectProduct(product.id)}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppFloat />
      <ProductModal />
    </div>
  );
}

function ProductCard({
  product,
  onSelect,
}: {
  product: Product;
  onSelect: () => void;
}) {
  const whatsappUrl = `https://wa.me/213781379506?text=${encodeURIComponent(
    `مرحباً كالوري بوست، أريد ${product.name} بـ ${product.price.toLocaleString("ar-DZ")} د.ج\nالدفع عند الاستلام\nالعنوان: [يملأ العميل]`
  )}`;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -8 }}
      className="glass rounded-2xl p-4 md:p-5 flex flex-col items-center text-center group cursor-pointer transition-all duration-300"
      onClick={onSelect}
    >
      <div className="text-5xl md:text-6xl mb-3 group-hover:scale-110 transition-transform duration-500">
        {product.image}
      </div>

      <div className="flex items-center gap-2 mb-1">
        {product.badge && (
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
            product.badge === "bestseller"
              ? "bg-honey-300/20 text-honey-300"
              : product.badge === "new"
              ? "bg-organic/20 text-organic"
              : "bg-honey-200/20 text-honey-200"
          }`}>
            {product.badge === "bestseller" ? "🏆 الأكثر مبيعاً" : product.badge === "new" ? "جديد" : "تخفيض"}
          </span>
        )}
        <span className="text-[10px] font-bold bg-organic/10 text-organic px-2 py-0.5 rounded-full">
          ✅ الدفع عند الاستلام
        </span>
      </div>

      <h3 className="text-sm md:text-base font-bold mb-1" style={{ color: 'var(--text-primary)' }}>{product.name}</h3>
      <p className="text-xs mb-3 line-clamp-2" style={{ color: 'var(--text-muted)' }}>{product.description}</p>

      <div className="mt-auto">
        <span className="text-lg md:text-xl font-bold text-gradient">
          {product.price.toLocaleString("ar-DZ")}
        </span>
        <span className="text-xs text-honey-300 mr-1">د.ج</span>
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="mt-3 flex items-center justify-center gap-1.5 w-full bg-[#25D366] text-white font-medium text-xs py-2 rounded-full hover:bg-[#20BD5A] transition-all duration-300"
      >
        <MessageCircle className="w-3.5 h-3.5" />
        اطلب عبر واتساب
      </a>
    </motion.div>
  );
}
