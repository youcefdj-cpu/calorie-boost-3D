import { create } from "zustand";

interface UIState {
  selectedObject: string | null;
  selectedProduct: string | null;
  isLoading: boolean;
  qualityTier: "high" | "low";
  selectObject: (id: string | null) => void;
  selectProduct: (id: string | null) => void;
  setLoading: (loading: boolean) => void;
  setQualityTier: (tier: "high" | "low") => void;
}

export const useUIStore = create<UIState>()((set) => ({
  selectedObject: null,
  selectedProduct: null,
  isLoading: true,
  qualityTier: "high",

  selectObject: (id) => set({ selectedObject: id }),
  selectProduct: (id) => set({ selectedProduct: id }),
  setLoading: (loading) => set({ isLoading: loading }),
  setQualityTier: (tier) => set({ qualityTier: tier }),
}));
