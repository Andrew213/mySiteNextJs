"use client";

import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    let scroll: { destroy: () => void } | null = null;
    let isCancelled = false;

    const initializeScroll = async () => {
      const { default: LocomotiveScroll } = await import("locomotive-scroll");

      if (isCancelled) return;

      scroll = new LocomotiveScroll({
        lenisOptions: {
          lerp: 0.085,
          smoothWheel: true,
        },
      });
    };

    void initializeScroll();

    return () => {
      isCancelled = true;
      scroll?.destroy();
    };
  }, []);

  return null;
}
