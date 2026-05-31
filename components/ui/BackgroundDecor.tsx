"use client";

import gsap from "gsap";
import { useEffect, useMemo, useRef } from "react";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

const DECOR_COUNT = 9;

type DecorDepth = {
  size: number;
  blur: number;
  minScale: number;
  maxScale: number;
  minOpacity: number;
  maxOpacity: number;
  minDuration: number;
  maxDuration: number;
};

type DecorThemeProfile = {
  blurMultiplier: number;
  opacityMultiplier: number;
  durationMultiplier: number;
  scaleMultiplier: number;
};

const DECOR_DEPTHS: DecorDepth[] = [
  {
    size: 320,
    blur: 115,
    minScale: 0.65,
    maxScale: 1.25,
    minOpacity: 0.32,
    maxOpacity: 0.68,
    minDuration: 16,
    maxDuration: 26,
  },
  {
    size: 231,
    blur: 90,
    minScale: 0.45,
    maxScale: 1.15,
    minOpacity: 0.45,
    maxOpacity: 0.9,
    minDuration: 9,
    maxDuration: 16,
  },
  {
    size: 150,
    blur: 65,
    minScale: 0.35,
    maxScale: 0.95,
    minOpacity: 0.55,
    maxOpacity: 1,
    minDuration: 6,
    maxDuration: 11,
  },
];

const DARK_DECOR_PROFILE: DecorThemeProfile = {
  blurMultiplier: 0.9,
  opacityMultiplier: 1.08,
  durationMultiplier: 0.9,
  scaleMultiplier: 1,
};

const LIGHT_DECOR_PROFILE: DecorThemeProfile = {
  blurMultiplier: 1.25,
  opacityMultiplier: 0.72,
  durationMultiplier: 1.25,
  scaleMultiplier: 1.08,
};

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function getThemeProfile() {
  const isLightTheme =
    document.documentElement.classList.contains("light-theme");

  return isLightTheme ? LIGHT_DECOR_PROFILE : DARK_DECOR_PROFILE;
}

function getThemedDepth(depth: DecorDepth): DecorDepth {
  const profile = getThemeProfile();

  return {
    size: depth.size,
    blur: depth.blur * profile.blurMultiplier,
    minScale: depth.minScale * profile.scaleMultiplier,
    maxScale: depth.maxScale * profile.scaleMultiplier,
    minOpacity: clamp(depth.minOpacity * profile.opacityMultiplier, 0, 1),
    maxOpacity: clamp(depth.maxOpacity * profile.opacityMultiplier, 0, 1),
    minDuration: depth.minDuration * profile.durationMultiplier,
    maxDuration: depth.maxDuration * profile.durationMultiplier,
  };
}

function getGradient() {
  const isLightTheme =
    document.documentElement.classList.contains("light-theme");

  if (isLightTheme) {
    return `linear-gradient(random(0,180)deg,
      rgb(255, random(150,205), random(10,30)) random(0,10)%,
      rgb(random(200,255), random(150,229), 0) random(0,50)%,
      rgb(random(200,255), random(50,70), random(10,30)) random(0,50)%)`;
  }

  return `linear-gradient(random(0,180)deg,
    rgb(random(0,102), random(0,30), random(0,255)) random(0,50)%,
    rgb(random(0,69), random(5,8), random(0,168)) random(0,50)%,
    rgb(random(100,169), random(0,30), random(200,255)) random(0,50)%)`;
}

function updateThemeStyle(target: HTMLElement, depth: DecorDepth) {
  const themedDepth = getThemedDepth(depth);

  gsap.to(target, {
    backgroundImage: getGradient(),
    filter: `blur(${themedDepth.blur}px)`,
    opacity: gsap.utils.random(themedDepth.minOpacity, themedDepth.maxOpacity),
    duration: 0.45,
    overwrite: "auto",
  });
}

function getDepth(index: number) {
  return DECOR_DEPTHS[index % DECOR_DEPTHS.length];
}

function tweenProperty(target: HTMLElement, depth: DecorDepth) {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const themedDepth = getThemedDepth(depth);

  gsap.to(target, {
    motionPath: {
      path: [
        { x: gsap.utils.random(0, width), y: gsap.utils.random(0, height) },
        { x: gsap.utils.random(0, width), y: gsap.utils.random(0, height) },
      ],
      curviness: 3,
    },
    scale: gsap.utils.random(themedDepth.minScale, themedDepth.maxScale),
    duration: gsap.utils.random(
      themedDepth.minDuration,
      themedDepth.maxDuration,
    ),
    ease: "linear",
    opacity: gsap.utils.random(themedDepth.minOpacity, themedDepth.maxOpacity),
    onComplete: tweenProperty,
    onCompleteParams: [target, depth],
  });
}

const BackgroundDecor: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const items = useMemo(
    () => Array.from({ length: DECOR_COUNT }, (_, index) => index),
    [],
  );

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) {
      return;
    }

    const lights = Array.from(wrapper.children) as HTMLElement[];
    lights.forEach((el, index) => {
      const depth = getDepth(index);
      const themedDepth = getThemedDepth(depth);

      gsap.set(el, {
        x: gsap.utils.random(0, window.innerWidth),
        y: gsap.utils.random(0, window.innerHeight),
        width: themedDepth.size,
        height: themedDepth.size,
        filter: `blur(${themedDepth.blur}px)`,
        opacity: 0,
        backgroundImage: getGradient(),
      });
      gsap.to(el, {
        opacity: gsap.utils.random(
          themedDepth.minOpacity,
          themedDepth.maxOpacity,
        ),
        ease: "power1.out",
      });
      tweenProperty(el, depth);
    });
    const observer = new MutationObserver(() => {
      lights.forEach((light, index) => {
        updateThemeStyle(light, getDepth(index));
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      observer.disconnect();
      gsap.killTweensOf(wrapper);
      lights.forEach((light) => gsap.killTweensOf(light));
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-20 overflow-hidden"
    >
      {items.map((item) => (
        <div key={item} className="light pointer-events-none" />
      ))}
    </div>
  );
};

export default BackgroundDecor;
