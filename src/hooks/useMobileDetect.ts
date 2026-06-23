"use client";

import { useEffect, useState } from "react";

interface MobileDetect {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isIOS: boolean;
  isAndroid: boolean;
}

export function useMobileDetect(): MobileDetect {
  const [detect, setDetect] = useState<MobileDetect>({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    isIOS: false,
    isAndroid: false,
  });

  useEffect(() => {
    const ua = navigator.userAgent;
    const mobile = /mobile|iphone|ipod|android|blackberry|opera mini|iemobile/i.test(ua);
    const tablet = /tablet|ipad|playbook|silk/i.test(ua) || (mobile && /ipad|android(?!.*mobile)/i.test(ua));
    const ios = /iphone|ipad|ipod/i.test(ua);
    const android = /android/i.test(ua);

    setDetect({
      isMobile: mobile && !tablet,
      isTablet: tablet,
      isDesktop: !mobile && !tablet,
      isIOS: ios,
      isAndroid: android,
    });
  }, []);

  return detect;
}
