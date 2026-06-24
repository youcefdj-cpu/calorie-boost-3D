"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { useUIStore } from "@/lib/store/uiStore";
import { products } from "@/lib/data/products";
import type { Product } from "@/lib/data/products";

type CategoryId = "all" | "honey" | "nuts" | "oats" | "organic" | "recipes";

interface CategoryInfo {
  id: CategoryId;
  label: string;
  emoji: string;
  tagline: string;
}

const categories: CategoryInfo[] = [
  { id: "honey", label: "عسل", emoji: "🍯", tagline: "عسل طبيعي 100% من أفضل المناحل" },
  { id: "nuts", label: "مكسرات", emoji: "🥜", tagline: "مكسرات طازجة فاخرة محمصة بعناية" },
  { id: "oats", label: "شوفان", emoji: "🌾", tagline: "شوفان عضوي كامل الحبة" },
  { id: "organic", label: "عضوي", emoji: "🌿", tagline: "منتجات عضوية مختارة بعناية" },
  { id: "recipes", label: "وصفات", emoji: "📖", tagline: "وصفات طبيعية سهلة التحضير" },
  { id: "all", label: "الكل", emoji: "✨", tagline: "تصفح جميع منتجاتنا المتنوعة" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export function Products() {
  const [activeCategory, setActiveCategory] = useState<CategoryId | null>(null);
  const selectProduct = useUIStore((s) => s.selectProduct);

  const filtered = activeCategory && activeCategory !== "all"
    ? products.filter((p) => p.category === activeCategory)
    : activeCategory === "all"
    ? products
    : [];

  return (
    <section className="relative z-20 py-20 md:py-32 px-4" style={{ background: 'var(--bg-base)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center mb-4"
          style={{ color: 'var(--text-primary)' }}
        >
          {activeCategory ? products.find(p => p.category === activeCategory)?.name ?? "منتجاتنا" : "منتجاتنا"}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-10"
          style={{ color: 'var(--text-muted)' }}
        >
          {activeCategory ? "اختر منتجاً للتفاصيل" : "اختر فئة لاستكشاف المنتجات"}
        </motion.p>

        <AnimatePresence mode="wait">
          {!activeCategory ? (
            <motion.div
              key="categories"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
            >
              {categories.map((cat) => (
                <motion.button
                  key={cat.id}
                  variants={cardVariants}
                  onClick={() => setActiveCategory(cat.id)}
                  className="glass rounded-2xl p-6 md:p-8 text-center group cursor-pointer transition-all duration-300 hover:border-honey-300/40 hover:shadow-lg hover:shadow-honey-300/5"
                  style={{ border: '1px solid var(--border-light)' }}
                >
                  <div className="text-5xl md:text-6xl mb-3 group-hover:scale-110 transition-transform duration-500">
                    {cat.emoji}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                    {cat.label}
                  </h3>
                  <p className="text-xs md:text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    {cat.tagline}
                  </p>
                  <div className="mt-4 flex items-center justify-center gap-1 text-honey-300 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>اكتشف المنتجات</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </motion.button>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="products"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.button
                variants={cardVariants}
                onClick={() => setActiveCategory(null)}
                className="flex items-center gap-2 mb-6 px-4 py-2 rounded-full glass hover:border-honey-300/30 transition-all duration-300 text-sm font-medium"
                style={{ color: 'var(--text-secondary)' }}
              >
                <ArrowRight className="w-4 h-4" />
                جميع الفئات
              </motion.button>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onSelect={() => selectProduct(product.id)}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
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
      variants={cardVariants}
      whileHover={{ y: -8 }}
      className="glass rounded-2xl p-4 md:p-6 flex flex-col items-center text-center group cursor-pointer transition-all duration-300"
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
