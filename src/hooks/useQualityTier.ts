"use client";

import { useEffect } from "react";
import { useUIStore } from "@/lib/store/uiStore";
import { useMobileDetect } from "./useMobileDetect";

export function useQualityTier() {
  const { isMobile, isTablet } = useMobileDetect();
  const { qualityTier, setQualityTier } = useUIStore();

  useEffect(() => {
    if (isMobile || isTablet) {
      setQualityTier("low");
    } else {
      setQualityTier("high");
    }
  }, [isMobile, isTablet, setQualityTier]);

  return qualityTier;
}
