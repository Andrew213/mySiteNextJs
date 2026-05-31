"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const programs = [
  {
    year: "2023",
    hours: "360 часов",
    title: "Middle frontend-разработчик",
    topics: ["React и SSR", "TypeScript", "Архитектура", "Тестирование"],
    document: {
      src: "/certificates/yandex-middle-frontend.jpeg",
      type: "image",
    },
  },
  {
    year: "2026",
    hours: "180 часов",
    title: "Бэкенд на Node.js для frontend-разработчиков",
    topics: ["Node.js", "NestJS", "PostgreSQL", "Деплой"],
    document: {
      src: "/certificates/yandex-node-backend.pdf#toolbar=0&view=Fit",
      type: "pdf",
    },
  },
] as const;

type Program = (typeof programs)[number];

export default function Education() {
  const [activeProgram, setActiveProgram] = useState<Program | null>(null);
  const [isEducationOpen, setIsEducationOpen] = useState(false);

  useEffect(() => {
    if (!activeProgram) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveProgram(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeProgram]);

  return (
    <>
      <section id="education" className="container inner" data-scroll-reveal>
        <button
          aria-controls="education-content"
          aria-expanded={isEducationOpen}
          className="group flex w-full items-center justify-between gap-6 rounded-3xl border border-(--border) bg-portfolio-window px-8 py-7 text-left backdrop-blur-[50px] transition-[background-color,border-color] duration-300 hover:border-(--border-link) hover:bg-portfolio-project max-phone:rounded-2xl max-phone:px-5 max-phone:py-5"
          type="button"
          onClick={() => setIsEducationOpen((currentValue) => !currentValue)}
        >
          <h2 className="font-comfortaa-semibold text-3xl leading-tight text-foreground max-phone:text-xl">
            Дополнительное обучение
          </h2>

          <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-(--border-link) bg-portfolio-project transition-[background-color] duration-300 group-hover:bg-background/50 max-phone:size-10">
            <span
              aria-hidden="true"
              className={`block size-3 -translate-y-0.5 border-b-2 border-r-2 border-portfolio-link transition-transform duration-500 ${
                isEducationOpen ? "rotate-[225deg]" : "rotate-45"
              }`}
            />
          </span>
        </button>

        <div
          id="education-content"
          className={`grid transition-[grid-template-rows] duration-700 ease-in-out ${
            isEducationOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="min-h-0 overflow-hidden">
            <div className="mb-10 flex items-end justify-between gap-8 pt-10 max-mobile:flex-col max-mobile:items-start max-mobile:gap-4">
              <h3 className="font-comfortaa-semibold text-5xl leading-tight text-foreground max-mobile:text-4xl">
              Продолжаю развиваться
              </h3>

              <div className="shrink-0 text-right max-mobile:text-left">
                <p className="bg-(image:--gradient-text) bg-clip-text font-comfortaa-semibold text-6xl text-transparent max-mobile:text-5xl">
                  540
                </p>
                <p className="text-sm leading-[150%] text-foreground/65">
                  часов практического обучения
                </p>
              </div>
            </div>

            <ul className="grid grid-cols-2 gap-[30px] max-tablet:grid-cols-1">
          {programs.map((program, index) => (
            <li
              key={program.title}
              className="group relative overflow-hidden rounded-3xl border border-(--border) bg-portfolio-window p-7 backdrop-blur-[50px] transition-[transform,background-color] duration-300 hover:-translate-y-2 hover:bg-portfolio-project max-phone:p-5"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-12 -top-16 h-40 w-40 rounded-full bg-(image:--gradient-decor-bubble) opacity-15 blur-[55px]"
              />

              <div className="relative mb-7 grid grid-cols-[minmax(0,1fr)_150px] gap-6 max-phone:grid-cols-1">
                <div>
                  <p className="mb-2 text-xs text-foreground/55">
                    Яндекс Практикум
                  </p>
                  <h3 className="mb-5 font-comfortaa-semibold text-2xl leading-[135%] text-foreground max-phone:text-xl">
                    {program.title}
                  </h3>

                  <span className="rounded-full border border-(--border) bg-background/50 px-3 py-1.5 text-xs text-foreground/75">
                    {program.year}
                  </span>
                </div>

                <button
                  aria-label={`Открыть диплом: ${program.title}`}
                  className="relative aspect-[4/3] overflow-hidden rounded-xl border border-(--border) bg-background/70 transition-transform duration-300 group-hover:scale-[1.03] max-phone:w-full"
                  type="button"
                  onClick={() => setActiveProgram(program)}
                >
                  {program.document.type === "image" ? (
                    <Image
                      className="h-full w-full object-cover"
                      src={program.document.src}
                      alt=""
                      width={300}
                      height={225}
                    />
                  ) : (
                    <span className="flex h-full flex-col items-center justify-center gap-2 px-3 text-center">
                      <span className="font-comfortaa-semibold text-2xl text-portfolio-link">
                        PDF
                      </span>
                      <span className="text-[10px] leading-[140%] text-foreground/60">
                        Удостоверение о повышении квалификации
                      </span>
                    </span>
                  )}
                </button>
              </div>

              <div className="relative mb-6 h-px bg-(--border)" />

              <div className="relative flex items-end justify-between gap-6 max-phone:flex-col max-phone:items-start">
                <ul className="flex flex-wrap gap-2">
                  {program.topics.map((topic) => (
                    <li
                      key={topic}
                      className="rounded-full border border-(--border-link) bg-portfolio-project px-3 py-1.5 text-xs text-foreground/80"
                    >
                      {topic}
                    </li>
                  ))}
                </ul>

                <p className="shrink-0 font-comfortaa-semibold text-lg text-portfolio-link">
                  {program.hours}
                </p>
              </div>

              <button
                className="relative mt-6 text-sm text-portfolio-link transition-colors duration-300 hover:text-foreground"
                type="button"
                onClick={() => setActiveProgram(program)}
              >
                Открыть документ ↗
              </button>

              <span className="pointer-events-none absolute bottom-[-22px] right-5 font-comfortaa-semibold text-[88px] leading-none text-foreground/[0.035]">
                {String(index + 1).padStart(2, "0")}
              </span>
            </li>
          ))}
            </ul>
          </div>
        </div>
      </section>

      {activeProgram && (
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/80 p-6 backdrop-blur-md max-phone:p-0"
          role="dialog"
          aria-modal="true"
          aria-label={activeProgram.title}
          onClick={() => setActiveProgram(null)}
        >
          <div
            className="relative h-[min(88vh,900px)] w-[min(94vw,1400px)] overflow-hidden rounded-2xl border border-white/20 shadow-2xl max-phone:h-dvh max-phone:w-screen max-phone:rounded-none max-phone:border-0"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              aria-label="Закрыть документ"
              className="absolute right-3 top-3 z-10 flex size-10 items-center justify-center rounded-full bg-black/70 text-2xl leading-none text-white transition-colors duration-300 hover:bg-black max-phone:right-[max(12px,env(safe-area-inset-right))] max-phone:top-[max(12px,env(safe-area-inset-top))]"
              type="button"
              onClick={() => setActiveProgram(null)}
            >
              ×
            </button>

            {activeProgram.document.type === "image" ? (
              <Image
                className="h-full w-full object-contain"
                src={activeProgram.document.src}
                alt={`Диплом: ${activeProgram.title}`}
                width={0}
                height={0}
                sizes="100vw"
              />
            ) : (
              <iframe
                className="h-full w-full object-contain scale-[1.02]"
                src={activeProgram.document.src}
                title={`Диплом: ${activeProgram.title}`}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}
