import { create } from "zustand";
import { persist } from "zustand/middleware";

type Theme = "dark" | "light" | "system";

interface ThemeState {
  theme: Theme;
  resolved: "dark" | "light";
  setTheme: (theme: Theme) => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: "dark",
      resolved: "dark",
      setTheme: (theme) => {
        const isDark =
          theme === "system"
            ? window.matchMedia("(prefers-color-scheme: dark)").matches
            : theme === "dark";
        set({ theme, resolved: isDark ? "dark" : "light" });
        document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
      },
    }),
    { name: "calorie-boost-theme" }
  )
);
