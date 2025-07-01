import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("setu-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("setu-theme", theme);
    set({ theme });
  },
}));