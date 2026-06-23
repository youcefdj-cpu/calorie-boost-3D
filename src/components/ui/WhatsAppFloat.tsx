"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/213781379506"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-40 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:bg-[#20BD5A] transition-all duration-300 hover:scale-110 animate-pulse-glow"
      aria-label="اتصل بنا عبر واتساب"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </a>
  );
}
