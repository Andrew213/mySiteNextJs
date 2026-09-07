"use client";

import { SkillsSectionText } from "@/i8n/Texts";
import { useLanguage } from "@/providers/TranslationProvider";

export default function Skills() {
  const lang = useLanguage();

  const highlights = SkillsSectionText.highlights[lang];
  const skills = SkillsSectionText.skills[lang];

  return (
    <section id="skills" className="container inner" data-scroll-reveal>
      <h2 className="title">{SkillsSectionText[lang].title}</h2>

      <div className="mb-20 grid grid-cols-3 gap-px overflow-hidden rounded-3xl border border-(--border) bg-(--border) max-mobile:grid-cols-1">
        {highlights.map((highlight) => (
          <div
            key={highlight.title}
            className="bg-background/90 px-7 py-6 text-center backdrop-blur-xl"
          >
            <p className="mb-2 bg-(image:--gradient-text) bg-clip-text font-comfortaa-semibold text-4xl text-transparent">
              {highlight.title}
            </p>
            <p className="text-sm leading-[150%] text-foreground/75">
              {highlight.description}
            </p>
          </div>
        ))}
      </div>

      <ul className="grid grid-cols-3 gap-x-[30px] gap-y-20 max-[1340px]:grid-cols-2 max-mobile:grid-cols-1">
        {skills.map((skill, index) => (
          <li
            key={skill.title}
            className="group relative flex min-h-[330px] flex-col rounded-3xl border border-(--border) bg-portfolio-window px-6 pb-6 pt-14 backdrop-blur-[50px] transition-transform transition-[background-color,border-color] duration-300 hover:-translate-y-2 hover:bg-portfolio-project"
          >
            <div className="absolute left-1/2 top-0 flex h-[92px] w-[92px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-(image:--gradient-decor-bubble) shadow-[0_0_30px] shadow-portfolio-normal/70 transition-transform duration-300 group-hover:scale-110">
              <div className="absolute bottom-0 h-1/2 w-full rounded-b-full bg-(image:--gradient-decor-bubble) opacity-80 blur-[10px]" />
              <span className="relative font-comfortaa-semibold text-4xl text-white">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <h3 className="mb-4 text-center font-comfortaa-semibold text-2xl text-foreground">
              {skill.title}
            </h3>
            <p className="mb-6 text-center text-[15px] leading-[165%] text-foreground/80">
              {skill.description}
            </p>

            <ul className="mt-auto flex flex-wrap justify-center gap-2">
              {skill.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-(--border-link) bg-portfolio-project px-3 py-1.5 text-xs text-foreground/85"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
