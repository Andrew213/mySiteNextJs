"use client";

import gsap from "gsap";
import { useLayoutEffect } from "react";

const REVEAL_SELECTOR = "[data-scroll-reveal]";

export default function ScrollReveal() {
  useLayoutEffect(() => {
    const sections = gsap.utils.toArray<HTMLElement>(REVEAL_SELECTOR);
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) return;

    gsap.set(sections, {
      autoAlpha: 0,
      y: 56,
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const section = entry.target as HTMLElement;

          gsap.to(section, {
            autoAlpha: 1,
            y: 0,
            duration: 0.85,
            ease: "power3.out",
            overwrite: "auto",
          });

          observer.unobserve(section);
        });
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.08,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      gsap.killTweensOf(sections);
    };
  }, []);

  return null;
}
