'use client';

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { Language, languages, translations } from "@/lib/translations";

type LanguageContextType = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (path: string) => string;
  languages: Record<Language, string>;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

const getNested = (obj: Record<string, unknown>, path: string): unknown =>
  path.split(".").reduce<unknown>((acc, key) => {
    if (typeof acc === "object" && acc !== null && key in acc) {
      return (acc as Record<string, unknown>)[key];
    }
    return null;
  }, obj);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLangState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("lang") as Language | null;
      if (stored && translations[stored]) return stored;
    }
    return "en";
  });

  const setLang = useCallback((value: Language) => {
    setLangState(value);
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", value);
    }
  }, []);

  const t = useCallback(
    (path: string) => {
      const value = getNested(translations[lang], path);
      return typeof value === "string" ? value : path;
    },
    [lang],
  );

  const value = useMemo(() => ({ lang, setLang, t, languages }), [lang, setLang, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};

