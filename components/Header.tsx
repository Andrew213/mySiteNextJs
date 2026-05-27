"use client";

import { useState } from "react";
import { cn } from "../lib/utils";

const navItems = [
  { label: "Работы", target: "projects" },
  { label: "Навыки", target: "skills" },
  { label: "Технологии", target: "tools" },
  { label: "Контакты", target: "contacts" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLightTheme, setIsLightTheme] = useState(false);

  const toggleTheme = (nextIsLightTheme: boolean) => {
    setIsLightTheme(nextIsLightTheme);
    // document.documentElement.classList.toggle("light-theme", nextIsLightTheme);
    // document.documentElement.classList.toggle("dark-theme", !nextIsLightTheme);
  };

  return (
    <header className="py-[34px]" id="hero">
      <div className="container flex items-center justify-between">
        <button
          aria-label="Открыть меню"
          type="button"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((value) => !value)}
          className={cn(
            "hidden rounded-xl bg-portfolio-normal px-6 py-3 pl-5 text-xl text-foreground transition duration-500",
            "max-phone:relative max-phone:top-2 max-phone:z-[3] max-phone:block max-phone:h-5 max-phone:self-start max-phone:bg-transparent max-phone:outline max-phone:outline-invert",
            "max-phone:before:absolute max-phone:before:left-0 max-phone:before:-top-1 max-phone:before:h-[3.65px] max-phone:before:w-full max-phone:before:rounded-full max-phone:before:bg-portfolio-normal max-phone:before:transition max-phone:before:duration-300 max-phone:before:content-['']",
            "max-phone:after:absolute max-phone:after:left-0 max-phone:after:-bottom-1 max-phone:after:h-[3.65px] max-phone:after:w-full max-phone:after:rounded-full max-phone:after:bg-portfolio-normal max-phone:after:transition max-phone:after:duration-300 max-phone:after:content-['']",
            isMenuOpen &&
              "max-phone:z-20 max-phone:before:top-[9px] max-phone:before:rotate-45 max-phone:after:bottom-[7px] max-phone:after:-rotate-45",
          )}
        >
          <span
            className={cn(
              "hidden",
              "max-phone:absolute max-phone:left-0 max-phone:top-[9px] max-phone:block max-phone:h-[3.65px] max-phone:w-full max-phone:rounded-full max-phone:bg-portfolio-normal max-phone:transition max-phone:duration-300",
              isMenuOpen && "max-phone:scale-0",
            )}
          />
        </button>

        <nav
          className={cn(
            "w-full",
            "max-phone:absolute max-phone:bottom-0 max-phone:top-0 max-phone:z-[9] max-phone:w-screen max-phone:bg-black/90 max-phone:transition max-phone:duration-300",
            isMenuOpen ? "max-phone:left-0" : "max-phone:left-[-1050px]",
          )}
        >
          <ul className="flex items-center justify-between max-menu:flex-col max-menu:items-start max-phone:absolute max-phone:left-1/2 max-phone:top-1/2 max-phone:-translate-x-1/2 max-phone:-translate-y-1/2">
            {navItems.map((item, index) => (
              <li
                key={item.target}
                className={cn(index > 0 && "ml-5 max-menu:ml-0 max-menu:mt-5")}
              >
                <a
                  data-scroll-to={item.target}
                  onClick={() => setIsMenuOpen(false)}
                  className="cursor-pointer whitespace-nowrap text-xl text-foreground max-phone:block max-phone:w-[300px] max-phone:rounded-xl max-phone:bg-portfolio-normal max-phone:py-[15px] max-phone:text-center max-phone:text-white max-phone:transition max-phone:duration-500 max-phone:focus:bg-portfolio-normal"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex w-full max-w-[500px] items-center justify-end max-menu:self-start max-phone:justify-end">
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
            className="relative z-10 mr-5 block h-12 w-20 cursor-pointer rounded-full bg-portfolio-window shadow-[inset_-4px_4px_10px_rgba(0,0,0,0.4)] transition-colors duration-200 max-phone:mr-0"
          >
            <span
              className={cn(
                "absolute left-0 top-1 h-10 w-10 rounded-full bg-[image:var(--theme-switcher-img),var(--gradient)] bg-center bg-no-repeat transition-transform duration-300 ease-out will-change-transform",
                isLightTheme && "translate-x-10",
              )}
            />
          </label>

          <a
            href="mailto:a.kochanov31@yandex.ru"
            className="button whitespace-nowrap !text-white max-phone:hidden"
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
