"use client";

import { ServicesText } from "@/i8n/Texts";
import { useLanguage } from "@/providers/TranslationProvider";

export default function Services() {
  const lang = useLanguage();

  const { subtitle, services, title, description } = ServicesText[lang];

  return (
    <section
      id="services"
      data-scroll-reveal
      className="container pb-[110px] pt-[70px] max-mobile:pb-20"
    >
      <div className="mb-12 flex items-end justify-between gap-8 max-mobile:block max-mobile:text-center">
        <div>
          <p className="mb-3 font-comfortaa-semibold text-sm uppercase tracking-[0.2em] text-portfolio-link">
            {subtitle}
          </p>
          <h2 className="font-comfortaa-semibold text-[clamp(34px,4vw,48px)] leading-tight">
            {title}
          </h2>
        </div>
        <p className="max-w-[430px] text-base leading-relaxed opacity-70 max-mobile:mx-auto max-mobile:mt-5">
          {description}
        </p>
      </div>

      <ol className="grid grid-cols-3 gap-5 max-tablet:grid-cols-1">
        {services.map((service) => (
          <li
            key={service.number}
            className="group relative overflow-hidden rounded-[28px] border border-(--border) bg-portfolio-project p-8 transition duration-500 hover:-translate-y-2 hover:border-portfolio-normal max-phone:p-6"
          >
            <span className="mb-10 block font-comfortaa-bold text-sm text-portfolio-link">
              {service.number}
            </span>
            <h3 className="max-w-[330px] font-comfortaa-semibold text-2xl leading-snug">
              {service.title}
            </h3>
            <p className="mt-5 text-base leading-[1.7] opacity-70">
              {service.description}
            </p>
            <span
              aria-hidden="true"
              className="absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-(image:--gradient-decor-bubble) opacity-10 blur-xl transition duration-500 group-hover:scale-150 group-hover:opacity-25"
            />
          </li>
        ))}
      </ol>
    </section>
  );
}
