"use client";

import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

export default function AnimatedTitleAccent({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const accentRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const accent = accentRef.current;

    if (!accent || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const context = gsap.context(() => {
      gsap.fromTo(
        accent,
        { backgroundPosition: "0% 50%" },
        {
          backgroundPosition: "100% 50%",
          duration: 5,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        },
      );
    }, accent);

    return () => context.revert();
  }, []);

  return (
    <span
      ref={accentRef}
      className="hero-title-accent bg-(image:--gradient-text) bg-clip-text text-transparent"
    >
      {children}
    </span>
  );
}
