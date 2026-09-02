"use client";

import { LANGTYPES } from "@/i8n/translations";
import { createContext, PropsWithChildren, useContext } from "react";

const TranslationContext = createContext<LANGTYPES | null>(null);

type Props = PropsWithChildren<{
  lang: LANGTYPES;
}>;

export const TranslationProvider: React.FC<Props> = ({ children, lang }) => {
  return (
    <TranslationContext.Provider value={lang}>
      {children}
    </TranslationContext.Provider>
  );
};

export function useLanguage(): LANGTYPES {
  const lang = useContext(TranslationContext);
  if (lang === null) {
    throw new Error("useLanguage must be used with TranslationProvider");
  }

  return lang;
}
