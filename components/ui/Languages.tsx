"use client";

import { LANGTYPES, LANGUAGES_CODES } from "@/i8n/translations";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/providers/TranslationProvider";
import { useRouter } from "next/navigation";
import { useState } from "react";

const languages: Array<{ code: LANGTYPES; label: string }> = [
  { code: LANGUAGES_CODES.ru, label: "RU" },
  { code: LANGUAGES_CODES.en, label: "EN" },
];

const Languages: React.FC = () => {
  const lang = useLanguage();

  const router = useRouter();

  const [visualLang, setVisualLang] = useState(lang);

  const isEnglish = visualLang === LANGUAGES_CODES.en;

  const handleLanguageChange = (language: LANGTYPES) => {
    if (language === lang) return;

    setVisualLang(language);

    setTimeout(() => {
      router.push(`/${language.toLowerCase()}`);
    }, 300);
  };

  return (
    <div
      aria-label="Выбор языка"
      role="group"
      className="relative z-10 shrink-0"
    >
      <div className="relative grid h-12 w-28 grid-cols-2 overflow-hidden rounded-full border border-[var(--border-link)] bg-portfolio-window p-1 shadow-[inset_-4px_4px_10px_rgba(0,0,0,0.26),0_10px_28px_rgba(92,11,224,0.18)] backdrop-blur transition-colors duration-300">
        <span
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute left-1 top-1 h-10 w-[50px] rounded-full bg-(image:--gradient) shadow-[0_0_18px_var(--normal)] transition-transform duration-300 ease-out will-change-transform motion-reduce:transition-none",
            isEnglish ? "translate-x-13" : "translate-x-0",
          )}
        />

        {languages.map((language) => {
          const isActive = lang === language.code;

          return (
            <button
              className={cn(
                "relative z-10 flex h-10 items-center justify-center rounded-full text-sm font-comfortaa-semibold transition duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-portfolio-normal",
                isActive
                  ? "scale-105 text-white drop-shadow-[0_1px_6px_rgba(255,255,255,0.45)]"
                  : "text-foreground/70 hover:scale-105 hover:text-foreground",
              )}
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              type="button"
            >
              {language.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Languages;
