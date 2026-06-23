"use client";

import { Moon, Sun } from "lucide-react";
import { useThemeStore } from "@/lib/store/themeStore";

export function ThemeToggle() {
  const { resolved, setTheme } = useThemeStore();

  const toggle = () => {
    setTheme(resolved === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggle}
      className="p-2 rounded-full hover:bg-honey-300/10 transition-colors"
      aria-label="تبديل السمة"
    >
      {resolved === "dark" ? (
        <Sun className="w-5 h-5 text-honey-300" />
      ) : (
        <Moon className="w-5 h-5 text-honey-300" />
      )}
    </button>
  );
}
