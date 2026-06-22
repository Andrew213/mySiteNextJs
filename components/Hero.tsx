"use client";

import Image from "next/image";
import AnimatedTitleAccent from "@/components/ui/AnimatedTitleAccent";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const hero = heroRef.current;

    if (!hero) return;

    const items = hero.querySelectorAll<HTMLElement>(".hero-intro-item");
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      gsap.set(items, { autoAlpha: 1 });
      return;
    }

    const context = gsap.context(() => {
      gsap.to(items, {
        autoAlpha: 1,
        duration: 0.9,
        ease: "power2.out",
        stagger: 0.14,
      });
    }, hero);

    return () => context.revert();
  }, []);

  return (
    <section ref={heroRef} id="hero" className="relative flex flex-1">
      <div className="container relative flex min-h-0 flex-1 flex-col text-foreground max-small:pb-[calc(32px+env(safe-area-inset-bottom,0px))]">
        <div
          aria-hidden="true"
          className="absolute right-[34px] top-2 z-10 h-28 w-28 rounded-full border border-(--border) bg-portfolio-window p-1.5 shadow-[0_0_45px_var(--bubble-dark)] [display:none] max-tablet:block max-mobile:[display:none]"
        >
          <Image
            className="h-full w-full rounded-full object-cover"
            src="/me-light.png"
            alt=""
            width={112}
            height={112}
          />
          <span className="absolute -bottom-2 -left-3 h-7 w-7 rounded-full bg-(image:--gradient-decor-bubble)" />
          <span className="absolute -right-2 top-3 h-3 w-3 rounded-full bg-(image:--gradient-decor-bubble)" />
        </div>

        <div className="my-auto flex items-center justify-between gap-16 py-10 max-tablet:justify-center max-mobile:py-6">
          <div className="max-w-[680px] max-tablet:text-center">
            <h1 className="hero-intro-item hero-title font-comfortaa-bold text-[clamp(34px,3.5vw,52px)] leading-[1.18] tracking-[-0.035em] max-phone:text-[30px]">
              <span>Разрабатываю</span> <span>сайты,</span>{" "}
              <AnimatedTitleAccent>веб-приложения</AnimatedTitleAccent>{" "}
              <span>и</span> <span>Telegram-сервисы</span>
            </h1>
            <p className="hero-intro-item mt-6 max-w-[640px] text-[clamp(15px,1.1vw,18px)] leading-[1.65] opacity-75 max-tablet:mx-auto">
              Создаю понятные интерфейсы для людей, стартапов, команд и
              компаний: личные кабинеты, админ-панели, каталоги, формы и
              интеграции с внешними сервисами.
            </p>
            <div className="hero-intro-item mt-8 flex items-center max-tablet:justify-center">
              <a href="#contacts" className="button !text-white">
                Обсудить проект
              </a>
            </div>
            <ul className="hero-intro-item mt-8 flex-wrap justify-center gap-2.5 [display:none] max-tablet:flex max-mobile:[display:none]">
              {["React", "TypeScript", "Next.js", "Node.js"].map(
                (technology) => (
                  <li
                    key={technology}
                    className="rounded-full border border-(--border) bg-portfolio-window px-4 py-2 text-xs tracking-wide opacity-80"
                  >
                    {technology}
                  </li>
                ),
              )}
            </ul>
          </div>

          <div className="relative mr-[83px] h-80 w-80 shrink-0 before:absolute before:left-1/2 before:top-1/2 before:-z-[1] before:h-87.5 before:w-87.5 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-(--bubble-dark) before:opacity-20 before:content-[''] after:absolute after:left-1/2 after:top-1/2 after:z-[-1] after:h-95 after:w-95 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-(--bubble-dark) after:opacity-20 after:content-[''] max-tablet:hidden">
            <Image
              className="h-full w-full object-contain"
              src="/me-light.png"
              alt="Andrey Kochanov"
              width={320}
              height={320}
              priority
            />
            <div
              aria-hidden="true"
              className="avatar-decor pointer-events-none absolute inset-[-34px] -z-[1]"
            >
              <span className="absolute left-[28px] top-[86px] h-[54px] w-[54px] animate-[avatar-bubble-left_5.4s_ease-in-out_infinite] rounded-full bg-(image:--gradient-decor-bubble)" />
              <span className="absolute right-[-46px] top-[144px] h-[54px] w-[54px] animate-[avatar-bubble-right_6.2s_ease-in-out_infinite] rounded-full bg-(image:--gradient-decor-bubble)" />
              <span className="absolute left-[8px] top-[148px] h-[22px] w-[22px] animate-[avatar-small-left_4.6s_ease-in-out_infinite] rounded-full bg-(image:--gradient-decor-bubble)" />
              <span className="absolute right-[-18px] top-[78px] h-[22px] w-[22px] animate-[avatar-small-right_4.2s_ease-in-out_infinite] rounded-full bg-(image:--gradient-decor-bubble)" />
              <span className="absolute  top-[50px] right-[20px] h-[111px] w-[111px] animate-[avatar-arc-top_4.2s_ease-in-out_infinite]   bg-(image:--hero-decor-1) bg-no-repeat" />
              <span className="absolute right-[16px] bottom-[30px] animate-[avatar-arc-bottom_4.2s_ease-in-out_infinite]   h-[111px] w-[111px]  bg-(image:--hero-decor-2) bg-no-repeat" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
