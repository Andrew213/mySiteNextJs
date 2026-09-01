"use client";

import { LANGTYPES, LANGUAGES_CODES } from "@/i8n/translations";
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from "react";

type TranslationContextType = [LANGTYPES, Dispatch<SetStateAction<LANGTYPES>>];

const TranslationContext = createContext<TranslationContextType | null>(null);

export const TranslationProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [lang, setLang] = useState<LANGTYPES>(() =>
    navigator.language.toUpperCase() === LANGUAGES_CODES.ru
      ? LANGUAGES_CODES.ru
      : LANGUAGES_CODES.en,
  );

  return (
    <TranslationContext.Provider value={[lang, setLang]}>
      {children}
    </TranslationContext.Provider>
  );
};

export function useLanguage(): TranslationContextType {
  const context = useContext(TranslationContext);
  if (context === null) {
    throw new Error("useLanguage must be used with TranslationProvider");
  }

  return context;
}
