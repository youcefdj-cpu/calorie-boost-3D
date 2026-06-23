"use client";

import { MapPin, Phone, MessageCircle, ExternalLink, CreditCard } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative z-20 py-12 px-4 border-t" style={{ background: 'var(--bg-card)', borderColor: 'var(--border-light)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div>
            <h3 className="text-xl font-bold text-gradient mb-4">كالوري بوست</h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              تهتم بتوفير كل ما هو مفيد للجسم وذو قيمة غذائية عالية
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4" style={{ color: 'var(--text-primary)' }}>روابط سريعة</h4>
            <div className="space-y-2">
              <a href="/" className="block text-sm transition-colors" style={{ color: 'var(--text-muted)' }} onMouseEnter={e => e.currentTarget.style.color = '#F5A623'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>الرئيسية</a>
              <a href="/shop" className="block text-sm transition-colors" style={{ color: 'var(--text-muted)' }} onMouseEnter={e => e.currentTarget.style.color = '#F5A623'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>المتجر</a>
              <a href="/contact" className="block text-sm transition-colors" style={{ color: 'var(--text-muted)' }} onMouseEnter={e => e.currentTarget.style.color = '#F5A623'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>اتصل بنا</a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4" style={{ color: 'var(--text-primary)' }}>معلومات الاتصال</h4>
            <div className="space-y-3">
              <a href="tel:0781379506" className="flex items-center gap-2 text-sm transition-colors" style={{ color: 'var(--text-muted)' }} onMouseEnter={e => e.currentTarget.style.color = '#F5A623'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>
                <Phone className="w-4 h-4" />
                0781 37 95 06
              </a>
              <a href="https://wa.me/213781379506" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm transition-colors" style={{ color: 'var(--text-muted)' }} onMouseEnter={e => e.currentTarget.style.color = '#F5A623'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>
                <MessageCircle className="w-4 h-4" />
                واتساب
              </a>
              <div className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Rue Ain Guessma, Tiaret, Algeria</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4" style={{ color: 'var(--text-primary)' }}>طرق الدفع</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                <CreditCard className="w-4 h-4 text-organic" />
                <span>الدفع عند الاستلام</span>
              </div>
              <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                <span>💵</span>
                <span>نقداً عند التوصيل</span>
              </div>
              <p className="text-xs mt-3" style={{ color: 'var(--text-muted)' }}>
                🚚 نوصل إلى جميع الولايات
              </p>
            </div>
          </div>
        </div>

        <div className="text-center text-sm pt-8 border-t" style={{ color: 'var(--text-muted)', borderColor: 'var(--border-light)' }}>
          © {new Date().getFullYear()} كالوري بوست. جميع الحقوق محفوظة
        </div>
      </div>
    </footer>
  );
}
