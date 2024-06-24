import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useThemeStore = create(
  persist(
    (set) => ({
      darkMode: false,
      setTheme: () => set((state) => ({ darkMode: !state.darkMode })),
    }),
    {
      name: "theme-storage",
      getStorage: () => localStorage,
    }
  )
);
