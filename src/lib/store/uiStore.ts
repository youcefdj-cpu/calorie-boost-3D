import { create } from "zustand";

interface UIState {
  selectedProduct: string | null;
  selectProduct: (id: string | null) => void;
}

export const useUIStore = create<UIState>()((set) => ({
  selectedProduct: null,
  selectProduct: (id) => set({ selectedProduct: id }),
}));
