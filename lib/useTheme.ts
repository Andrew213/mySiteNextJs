"use client";

import { useCallback, useEffect, useState } from "react";

const THEME_EVENT = "portfolio-theme-change";
const THEME_STORAGE_KEY = "portfolio-theme";

function applyTheme(isLightTheme: boolean) {
  document.documentElement.classList.toggle("light-theme", isLightTheme);
  document.documentElement.classList.toggle("dark-theme", !isLightTheme);
  window.localStorage.setItem(
    THEME_STORAGE_KEY,
    isLightTheme ? "light" : "dark",
  );
  window.dispatchEvent(
    new CustomEvent<boolean>(THEME_EVENT, { detail: isLightTheme }),
  );
}

export function useTheme() {
  const [isLightTheme, setIsLightTheme] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    const nextIsLightTheme =
      savedTheme === "light" ||
      (savedTheme === null &&
        document.documentElement.classList.contains("light-theme"));

    const handleThemeChange = (event: Event) => {
      setIsLightTheme((event as CustomEvent<boolean>).detail);
    };

    window.addEventListener(THEME_EVENT, handleThemeChange);
    applyTheme(nextIsLightTheme);

    return () => {
      window.removeEventListener(THEME_EVENT, handleThemeChange);
    };
  }, []);

  const toggleTheme = useCallback((nextIsLightTheme: boolean) => {
    applyTheme(nextIsLightTheme);
    setIsLightTheme(nextIsLightTheme);
  }, []);

  return { isLightTheme, toggleTheme };
}
