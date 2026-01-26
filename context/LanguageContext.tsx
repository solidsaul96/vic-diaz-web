"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { translations } from "@/lib/translations";

// Definimos los tipos para que TypeScript no se queje
type Language = "es" | "en";
type Content = typeof translations.es;

interface LanguageContextType {
  language: Language;
  t: Content;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es");

  // Seleccionamos el diccionario correcto según el idioma actual
  const t = translations[language];

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };

  return (
    <LanguageContext.Provider value={{ language, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Este es el hook que usamos en los componentes para acceder al idioma
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage debe usarse dentro de un LanguageProvider");
  }
  return context;
}