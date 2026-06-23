"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Phone, MapPin, Send } from "lucide-react";
import { Navbar } from "@/components/ui/Navbar";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import { Footer } from "@/components/sections/Footer";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `الاسم: ${form.name}\nالهاتف: ${form.phone}\nالرسالة: ${form.message}`
    );
    window.open(`https://wa.me/213781379506?text=${text}`, "_blank");
  };

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-base)' }}>
      <Navbar />
      <div className="pt-28 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-gradient text-center mb-2"
          >
            اتصل بنا
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mb-12"
            style={{ color: 'var(--text-muted)' }}
          >
            نحن هنا للإجابة على استفساراتك
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <form onSubmit={handleSubmit} className="glass rounded-3xl p-6 md:p-8 space-y-5">
                <div>
                  <label className="block text-sm mb-2" style={{ color: 'var(--text-muted)' }}>الاسم</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl border outline-none transition-colors text-sm"
                    style={{ background: 'var(--bg-surface)', color: 'var(--text-primary)', borderColor: 'var(--border-light)' }}
                    placeholder="اسمك الكريم"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2" style={{ color: 'var(--text-muted)' }}>رقم الهاتف</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl border outline-none transition-colors text-sm"
                    style={{ background: 'var(--bg-surface)', color: 'var(--text-primary)', borderColor: 'var(--border-light)' }}
                    placeholder="رقم هاتفك"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2" style={{ color: 'var(--text-muted)' }}>الرسالة</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border outline-none transition-colors text-sm resize-none"
                    style={{ background: 'var(--bg-surface)', color: 'var(--text-primary)', borderColor: 'var(--border-light)' }}
                    placeholder="رسالتك..."
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 w-full bg-honey-300 font-bold py-3 rounded-xl hover:bg-honey-200 transition-all duration-300 honey-glow"
                  style={{ color: '#0F0F0F' }}
                >
                  <Send className="w-5 h-5" />
                  إرسال عبر واتساب
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="glass rounded-3xl p-6">
                <h3 className="text-lg font-bold mb-4" style={{ color: 'var(--text-primary)' }}>معلومات الاتصال</h3>
                <div className="space-y-4">
                  <a
                    href="tel:0781379506"
                    className="flex items-center gap-3 transition-colors"
                    style={{ color: 'var(--text-secondary)' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#F5A623'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                  >
                    <div className="p-2 glass rounded-full">
                      <Phone className="w-5 h-5 text-honey-300" />
                    </div>
                    <div>
                      <p className="text-xs" style={{ color: 'var(--text-muted)' }}>الهاتف</p>
                      <p className="text-sm font-medium">0781 37 95 06</p>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/213781379506"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 transition-colors"
                    style={{ color: 'var(--text-secondary)' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#F5A623'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                  >
                    <div className="p-2 glass rounded-full">
                      <MessageCircle className="w-5 h-5 text-honey-300" />
                    </div>
                    <div>
                      <p className="text-xs" style={{ color: 'var(--text-muted)' }}>واتساب</p>
                      <p className="text-sm font-medium">0781 37 95 06</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-3" style={{ color: 'var(--text-secondary)' }}>
                    <div className="p-2 glass rounded-full shrink-0">
                      <MapPin className="w-5 h-5 text-honey-300" />
                    </div>
                    <div>
                      <p className="text-xs" style={{ color: 'var(--text-muted)' }}>العنوان</p>
                      <p className="text-sm font-medium">Rue Ain Guessma, Tiaret, Algeria</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass rounded-3xl p-6">
                <h3 className="text-lg font-bold mb-4" style={{ color: 'var(--text-primary)' }}>ساعات العمل</h3>
                <div className="space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                  <p>السبت - الخميس: 9:00 صباحاً - 8:00 مساءً</p>
                  <p>الجمعة: مغلق</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
