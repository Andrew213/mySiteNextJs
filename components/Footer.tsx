"use client";

import { useTheme } from "@/lib/useTheme";

const navItems = [
  { label: "Обо мне", target: "hero" },
  { label: "Работы", target: "projects" },
  { label: "Навыки", target: "skills" },
  { label: "Обучение", target: "education" },
  { label: "Контакты", target: "contacts" },
];

export default function Footer() {
  const { isLightTheme, toggleTheme } = useTheme();

  return (
    <footer
      id="footer"
      data-scroll-section
      className="border-t border-(--border) bg-portfolio-project"
    >
      <div className="container py-6 max-phone:py-5">
        <p className="mb-3 font-comfortaa-semibold text-xl text-foreground max-mobile:text-center max-phone:text-lg">
          Перейти к
        </p>

        <div className="flex items-center justify-between gap-5 max-mobile:flex-col">
          <nav aria-label="Навигация в подвале" className="max-mobile:w-full">
            <ul className="flex overflow-hidden rounded-full border border-(--border) bg-portfolio-window max-mobile:grid max-mobile:grid-cols-2 max-mobile:gap-2 max-mobile:overflow-visible max-mobile:rounded-none max-mobile:border-0 max-mobile:bg-transparent max-small:grid-cols-1">
              {navItems.map((item) => (
                <li
                  key={item.target}
                  className="border-l border-(--border) first:border-l-0 max-mobile:border-l-0"
                >
                  <a
                    href={`#${item.target}`}
                    data-scroll-to={item.target}
                    className="block whitespace-nowrap px-4 py-2.5 font-comfortaa-semibold text-xs text-foreground transition-colors duration-300 hover:bg-portfolio-window max-mobile:rounded-full max-mobile:border max-mobile:border-(--border) max-mobile:bg-portfolio-window max-mobile:text-center max-mobile:text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex shrink-0 items-center gap-4">
            <input
              type="checkbox"
              id="footerThemeSwitch"
              name="footer-theme-switch"
              checked={isLightTheme}
              className="sr-only"
              onChange={(event) => toggleTheme(event.target.checked)}
            />
            <label
              htmlFor="footerThemeSwitch"
              aria-label="Переключить тему"
              className="relative block h-10 w-16 cursor-pointer rounded-full bg-portfolio-window shadow-[inset_-4px_4px_10px_rgba(0,0,0,0.4)] transition-colors duration-200"
            >
              <span
                className={`absolute left-0 top-1 h-8 w-8 rounded-full bg-(image:--theme-switcher-bg) bg-center bg-no-repeat transition-transform duration-300 ease-out will-change-transform ${
                  isLightTheme ? "translate-x-8" : ""
                }`}
              />
            </label>

            <a
              href="#hero"
              data-scroll-to="hero"
              aria-label="Вернуться наверх"
              className="relative block h-10 w-10 rotate-180 rounded-full bg-(image:--icon-scroll-bg) bg-center bg-no-repeat before:absolute before:left-1/2 before:top-1/2 before:-z-[1] before:h-[52px] before:w-[52px] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-(--bubble-dark) before:opacity-15 before:content-['']"
            />
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-(--border) pt-4 text-xs text-foreground/45 max-mobile:flex-col max-mobile:text-center">
          <span>&copy; Andrey Kochanov</span>
          <a
            href="mailto:a.kochanov31@yandex.ru"
            className="transition-colors duration-300 hover:text-portfolio-link"
          >
            a.kochanov31@yandex.ru
          </a>
        </div>
      </div>
    </footer>
  );
}
