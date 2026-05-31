"use client";

import { Children, useRef, useState, type ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";
import "swiper/css";
import { cn } from "@/lib/utils";

type ProjectsListProps = {
  children: ReactNode;
};

export default function ProjectsList({ children }: ProjectsListProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperInstance | null>(null);
  const projectCards = Children.toArray(children);
  const projectsCount = projectCards.length;

  const moveSlider = (direction: -1 | 1) => {
    if (direction === -1) {
      swiperRef.current?.slidePrev();
    } else {
      swiperRef.current?.slideNext();
    }
  };

  const moveToProject = (index: number) => {
    swiperRef.current?.slideToLoop(index);
  };

  return (
    <>
      <div className="mb-6 [display:none] max-[1395px]:[display:block]">
        <div className="flex items-center justify-center gap-3">
          <button
            aria-label="Предыдущий проект"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-(--border) bg-portfolio-window text-xl text-foreground transition-colors duration-300 hover:bg-portfolio-project max-phone:[display:none]"
            type="button"
            onClick={() => moveSlider(-1)}
          >
            ←
          </button>

          <span className="w-7 text-right text-xs text-foreground/70">
            {String(activeIndex + 1).padStart(2, "0")}
          </span>
          <div className="h-2.5 w-[300px] overflow-hidden rounded-full bg-portfolio-light-active shadow-[inset_0_1px_3px_rgba(0,0,0,0.2)] max-phone:w-full">
            <div
              className="h-full rounded-full bg-(image:--gradient-tags) transition-[width] duration-300"
              style={{
                width: `${
                  projectsCount > 0
                    ? ((activeIndex + 1) / projectsCount) * 100
                    : 0
                }%`,
              }}
            />
          </div>
          <span className="w-7 text-xs text-foreground/70">
            {String(projectsCount).padStart(2, "0")}
          </span>

          <button
            aria-label="Следующий проект"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-(--border) bg-portfolio-window text-xl text-foreground transition-colors duration-300 hover:bg-portfolio-project max-phone:[display:none]"
            type="button"
            onClick={() => moveSlider(1)}
          >
            →
          </button>
        </div>

        <div className="mt-3 flex justify-center gap-2">
          {Array.from({ length: projectsCount }, (_, index) => (
            <button
              key={index}
              aria-label={`Перейти к проекту ${index + 1}`}
              className={cn(
                "h-2.5 w-2.5 rounded-full bg-portfolio-light-active transition-[width,background-color] duration-300",
                activeIndex === index && "w-8 bg-(image:--gradient-tags)",
              )}
              type="button"
              onClick={() => moveToProject(index)}
            />
          ))}
        </div>
      </div>

      <ul
        className={cn(
          "projects-grid grid grid-cols-12 gap-[30px] overflow-hidden p-10 max-[1395px]:[display:none]",
          isExpanded && "projects-grid-expanded",
        )}
      >
        {children}
      </ul>

      <div className="[display:none] max-[1395px]:[display:block]">
        <Swiper
          className="projects-slider"
          loop
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            650: { slidesPerView: 2 },
            1080: { slidesPerView: 3 },
            1161: { slidesPerView: 2 },
            1241: { slidesPerView: 3 },
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setActiveIndex(swiper.realIndex);
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
          }}
        >
          {projectCards.map((projectCard, index) => (
            <SwiperSlide key={index}>{projectCard}</SwiperSlide>
          ))}
        </Swiper>
      </div>

      {!isExpanded && (
        <button
          className="button mx-auto mt-[30px] block max-[1395px]:[display:none]"
          type="button"
          onClick={() => setIsExpanded(true)}
        >
          Раскрыть список
        </button>
      )}
    </>
  );
}
