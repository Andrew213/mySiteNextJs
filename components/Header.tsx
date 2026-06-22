"use client";

import { useState } from "react";
import { cn } from "../lib/utils";
import { useTheme } from "@/lib/useTheme";

const navItems = [
  { label: "Услуги", target: "services" },
  { label: "Работы", target: "projects" },
  { label: "Навыки", target: "skills" },
  { label: "Контакты", target: "contacts" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isLightTheme, toggleTheme } = useTheme();

  return (
    <header className="py-[34px]">
      <div className="container flex items-center justify-between gap-8">
        <button
          aria-label="Открыть меню"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="header-navigation"
          onClick={() => setIsMenuOpen((value) => !value)}
          className={cn(
            "[display:none] rounded-xl bg-portfolio-normal px-6 py-3 pl-5 text-xl text-foreground transition duration-500",
            "max-menu:relative max-menu:top-2 max-menu:z-[3] max-menu:block max-menu:h-5 max-menu:self-start max-menu:bg-transparent max-menu:outline max-menu:outline-invert",
            "max-menu:before:absolute max-menu:before:left-0 max-menu:before:-top-1 max-menu:before:h-[3.65px] max-menu:before:w-full max-menu:before:rounded-full max-menu:before:bg-portfolio-normal max-menu:before:transition max-menu:before:duration-300 max-menu:before:content-['']",
            "max-menu:after:absolute max-menu:after:left-0 max-menu:after:-bottom-1 max-menu:after:h-[3.65px] max-menu:after:w-full max-menu:after:rounded-full max-menu:after:bg-portfolio-normal max-menu:after:transition max-menu:after:duration-300 max-menu:after:content-['']",
            isMenuOpen &&
              "max-menu:z-20 max-menu:before:top-[9px] max-menu:before:rotate-45 max-menu:after:bottom-[7px] max-menu:after:-rotate-45",
          )}
        >
          <span
            className={cn(
              "[display:none]",
              "max-menu:absolute max-menu:left-0 max-menu:top-[9px] max-menu:block max-menu:h-[3.65px] max-menu:w-full max-menu:rounded-full max-menu:bg-portfolio-normal max-menu:transition max-menu:duration-300",
              isMenuOpen && "max-menu:scale-0",
            )}
          />
        </button>

        <nav
          id="header-navigation"
          className={cn(
            "min-w-0 flex-1",
            "max-menu:absolute max-menu:left-0 max-menu:bottom-0 max-menu:top-0 max-menu:z-[9] max-menu:w-screen max-menu:bg-black/90 max-menu:ease-out max-menu:will-change-transform",
            isMenuOpen
              ? "max-menu:translate-x-0 max-menu:transition-transform max-menu:duration-300"
              : "max-menu:-translate-x-full",
          )}
        >
          <ul className="flex items-center justify-start gap-[clamp(16px,4vw,72px)] max-menu:absolute max-menu:left-1/2 max-menu:top-1/2 max-menu:flex-col max-menu:-translate-x-1/2 max-menu:-translate-y-1/2 max-menu:items-start max-menu:gap-5">
            {navItems.map((item) => (
              <li key={item.target}>
                <a
                  href={`#${item.target}`}
                  data-scroll-to={item.target}
                  onClick={() => setIsMenuOpen(false)}
                  className="cursor-pointer whitespace-nowrap text-xl text-foreground max-menu:block max-menu:w-[300px] max-menu:rounded-xl max-menu:bg-portfolio-normal max-menu:py-[15px] max-menu:text-center max-menu:text-white max-menu:transition max-menu:duration-500 max-menu:focus:bg-portfolio-normal"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center justify-end gap-5 max-menu:self-start max-menu:justify-end">
          <input
            type="checkbox"
            id="themeSwitch"
            name="theme-switch"
            checked={isLightTheme}
            className="sr-only"
            onChange={(event) => toggleTheme(event.target.checked)}
          />
          <label
            htmlFor="themeSwitch"
            className="relative z-10 block h-12 w-20 cursor-pointer rounded-full bg-portfolio-window shadow-[inset_-4px_4px_10px_rgba(0,0,0,0.4)] transition-colors duration-200"
          >
            <span
              className={cn(
                "absolute left-0 top-1 h-10 w-10 rounded-full bg-(image:--theme-switcher-bg) bg-center bg-no-repeat transition-transform duration-300 ease-out will-change-transform",
                isLightTheme && "translate-x-10",
              )}
            />
          </label>

          <a
            href="#contacts"
            className="button whitespace-nowrap !text-white max-menu:hidden"
          >
            <span className="relative pl-7 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:text-xl before:leading-none before:text-white before:content-['+']">
              Связаться
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
