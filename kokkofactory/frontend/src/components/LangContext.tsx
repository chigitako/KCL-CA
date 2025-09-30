//多言語用処理ファイル
"use client";
import { createContext, useContext, useState, useEffect } from "react";

type Lang = "ja" | "en";

interface LangContextType {
  lang: Lang;
  toggleLang: () => void;
  setLang: (lang: Lang) => void;
}

const LangContext = createContext<LangContextType | undefined>(undefined);

export const LangProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<Lang>("ja");

  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang === "ja" || savedLang === "en") {
      setLang(savedLang);
    }
  }, []);

  const toggleLang = () => {
    setLang((prev) => {
      const newLang = prev === "ja" ? "en" : "ja";
      localStorage.setItem("lang", newLang);
      return newLang;
    });
  };

  return (
    <LangContext.Provider value={{ lang, toggleLang, setLang }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => {
  const context = useContext(LangContext);
  if (!context) throw new Error("useLang must be used within LangProvider");
  return context;
};