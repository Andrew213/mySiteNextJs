"use client";

import dynamic from "next/dynamic";
import { useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

const ProjectsSlider = dynamic(() => import("@/components/ui/ProjectsSlider"), {
  ssr: false,
});

type ProjectsListProps = {
  children: ReactNode;
};

export default function ProjectsList({ children }: ProjectsListProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSliderLayout, setIsSliderLayout] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1395px)");
    const updateLayout = () => setIsSliderLayout(mediaQuery.matches);

    updateLayout();
    mediaQuery.addEventListener("change", updateLayout);

    return () => mediaQuery.removeEventListener("change", updateLayout);
  }, []);

  return (
    <>
      {isSliderLayout ? (
        <ProjectsSlider>{children}</ProjectsSlider>
      ) : (
        <>
          <ul
            className={cn(
              "projects-grid grid grid-cols-12 gap-[30px] overflow-hidden p-10",
              isExpanded && "projects-grid-expanded",
            )}
          >
            {children}
          </ul>

          {!isExpanded && (
            <button
              className="button mx-auto mt-[30px] block"
              type="button"
              onClick={() => setIsExpanded(true)}
            >
              Раскрыть список
            </button>
          )}
        </>
      )}
    </>
  );
}
