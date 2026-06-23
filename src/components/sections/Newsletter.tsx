"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("شكراً لاشتراكك! سنتواصل معك قريباً");
    setEmail("");
  };

  return (
    <section className="relative z-20 py-20 md:py-32 px-4" style={{ background: 'var(--bg-base)' }}>
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4"
          style={{ color: 'var(--text-primary)' }}
        >
          اشترك في النشرة البريدية
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8"
          style={{ color: 'var(--text-muted)' }}
        >
          احصل على أحدث العروض والمنتجات الجديدة أولاً بأول
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="flex items-center gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="بريدك الإلكتروني"
            required
            className="flex-1 px-5 py-3 rounded-full text-sm outline-none transition-colors"
            style={{
              background: 'var(--bg-surface)',
              color: 'var(--text-primary)',
              border: '1px solid var(--border-light)',
            }}
          />
          <button
            type="submit"
            className="bg-honey-300 p-3 rounded-full hover:bg-honey-200 transition-all duration-300 honey-glow"
            style={{ color: '#0F0F0F' }}
          >
            <Send className="w-5 h-5" />
          </button>
        </motion.form>
      </div>
    </section>
  );
}
