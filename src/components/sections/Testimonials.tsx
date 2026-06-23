"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "أحمد علي",
    text: "منتجات رائعة وجودة ممتازة. عسل السدر طعمه لا يُقارن! توصيل سريع جداً",
    rating: 5,
  },
  {
    name: "فاطمة الزهراء",
    text: "المكسرات المشكلة طازجة ولذيذة. صار طلبي الدائم من كالوري بوست",
    rating: 5,
  },
  {
    name: "محمد صالح",
    text: "زيت الأركان الأصلي الذي بحثت عنه طويلاً. جودة ممتازة وسعر مناسب",
    rating: 5,
  },
  {
    name: "سارة بن عمر",
    text: "الوصفات الطبيعية سهلة التحضير ومفيدة جداً. أنصح الجميع بتجربتها",
    rating: 4,
  },
];

export function Testimonials() {
  return (
    <section className="relative z-20 py-20 md:py-32 px-4" style={{ background: 'var(--bg-card)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center mb-4"
          style={{ color: 'var(--text-primary)' }}
        >
          ماذا يقول عملاؤنا؟
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
          style={{ color: 'var(--text-muted)' }}
        >
          آراء حقيقية من عملائنا الكرام
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className={`w-4 h-4 ${
                      j < t.rating ? "text-honey-300 fill-honey-300" : ""
                    }`}
                    style={j >= t.rating ? { color: 'var(--bg-surface)' } : {}}
                  />
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="text-honey-300 text-sm font-bold">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
