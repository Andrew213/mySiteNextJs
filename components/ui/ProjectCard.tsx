import type { Project } from "@/entities/project/types";
import { cn } from "@/lib/utils";

export type ProjectCardProps = {
  index: number;
  project: Project;
  variant?: "compact" | "default" | "featured";
};

export default function ProjectCard({
  index,
  project,
  variant = "default",
}: ProjectCardProps) {
  const isFeatured = variant === "featured";
  const isCompact = variant === "compact";

  return (
    <li
      className={cn(
        "group min-h-[620px] shrink grow-0 snap-start rounded-3xl border border-(--border) bg-portfolio-project p-3 backdrop-blur-[50px] transition-[background-color,border-color] duration-300 transition-transform hover:-translate-y-2 hover:bg-portfolio-window max-[1395px]:basis-[calc(33.333%-20px)] max-[1395px]:shrink-0 max-[1160px]:basis-[calc(50%-15px)] max-[650px]:basis-full",
        variant === "default" && "min-[1396px]:col-span-4",
        isFeatured &&
          "min-[1396px]:col-span-7 min-[1396px]:row-span-2 min-[1396px]:min-h-[760px]",
        isCompact && "min-[1396px]:col-span-5 min-[1396px]:min-h-[365px]",
      )}
    >
      <article
        className={cn(
          "flex h-full min-h-[594px] flex-col",
          isFeatured && "min-[1396px]:min-h-[734px]",
          isCompact && "min-[1396px]:min-h-0",
        )}
      >
        <div
          className={cn(
            "relative mb-5 aspect-[16/10] overflow-hidden rounded-2xl bg-portfolio-window",
            isFeatured && "min-[1396px]:aspect-[16/9]",
            isCompact && "min-[1396px]:h-[190px] min-[1396px]:shrink-0",
          )}
        >
          {project.imageUrl && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              className="absolute inset-0 h-full w-full scale-110 object-cover opacity-45 blur-xl transition-transform duration-500 ease-out group-hover:scale-125"
              src={project.imageUrl}
              alt=""
              aria-hidden="true"
            />
          )}
          {project.videoUrl ? (
            <video
              className="relative h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.02]"
              src={project.videoUrl}
              poster={project.imageUrl || undefined}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
            />
          ) : project.imageUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              className="relative h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.02]"
              src={project.imageUrl}
              alt={project.title}
            />
          ) : null}
          <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-black/35 px-2.5 py-1 text-xs text-white backdrop-blur-md">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div className="flex grow flex-col px-1 pb-1">
          <h3 className="mb-3 font-comfortaa-semibold text-[26px] leading-tight text-foreground">
            {project.title}
          </h3>

          <div className="mb-4 flex flex-wrap gap-2">
            {project.prodUrl && (
              <a
                className="rounded-lg border border-(--border-link) bg-portfolio-window px-3 py-2 text-sm font-bold text-portfolio-link transition-colors duration-300 hover:bg-portfolio-project"
                href={project.prodUrl}
                target="_blank"
                rel="noreferrer"
              >
                Сайт ↗
              </a>
            )}
            {project.gitUrl && (
              <a
                className="rounded-lg border border-(--border-link) bg-portfolio-window px-3 py-2 text-sm font-bold text-portfolio-link transition-colors duration-300 hover:bg-portfolio-project"
                href={project.gitUrl}
                target="_blank"
                rel="noreferrer"
              >
                Код ↗
              </a>
            )}
          </div>

          <div
            className={cn(
              "project-description mb-4 max-h-[188px] min-h-0 grow overflow-y-auto pr-2 text-base leading-[160%] text-foreground/90",
              isFeatured && "min-[1396px]:max-h-[248px]",
              isCompact &&
                "min-[1396px]:max-h-[64px] min-[1396px]:grow-0 min-[1396px]:overflow-y-auto min-[1396px]:pr-2 min-[1396px]:text-sm min-[1396px]:leading-[150%]",
            )}
            dangerouslySetInnerHTML={{ __html: project.description }}
          />

          <div
            className={cn(
              "mt-auto flex flex-wrap gap-2",
              isCompact && "min-[1396px]:[display:none]",
            )}
          >
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-(image:--gradient-tags) px-2.5 py-1.5 text-[11px] text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </li>
  );
}
