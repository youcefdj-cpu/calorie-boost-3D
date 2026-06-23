"use client";

import { motion } from "framer-motion";
import { Leaf, Shield, Truck } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "منتجات طبيعية 100%",
    description: "نقدم أجود المنتجات الطبيعية العضوية من أفضل المصادر حول العالم",
    color: "text-organic",
  },
  {
    icon: Shield,
    title: "جودة مضمونة",
    description: "نختار بعناية كل منتج لضمان أعلى معايير الجودة والطعم الأصلي",
    color: "text-honey-300",
  },
  {
    icon: Truck,
    title: "توصيل سريع",
    description: "نوصل طلبك إلى باب منزلك في أسرع وقت مع الحفاظ على جودة المنتجات",
    color: "text-honey-200",
  },
];

export function Features() {
  return (
    <section className="relative z-20 py-20 md:py-32 px-4" style={{ background: 'var(--bg-base)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center mb-16"
          style={{ color: 'var(--text-primary)' }}
        >
          لماذا <span className="text-gradient">كالوري بوست</span>؟
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="glass rounded-2xl p-6 md:p-8 text-center group hover:border-honey-300/30 transition-all duration-500"
            >
              <div className="inline-flex p-4 rounded-full mb-4 group-hover:scale-110 transition-transform duration-500"
                style={{ background: 'var(--bg-surface)' }}>
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>{feature.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
