import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from "react";
import { TRANSLATIONS } from "./translations";
import { getLocalizedApartment } from "./apartmentTranslations";

const LanguageContext = createContext(null);

const STORAGE_KEY = "oa_language";
const SUPPORTED_LANGUAGES = ["it", "en", "fr"];

export const LANGUAGE_META = {
  it: { code: "it", label: "Italiano", short: "IT", flag: "🇮🇹" },
  en: { code: "en", label: "English", short: "EN", flag: "🇬🇧" },
  fr: { code: "fr", label: "Français", short: "FR", flag: "🇫🇷" },
};

/**
 * Rilevamento intelligente della lingua dell'utente:
 * 1. Preferenza precedentemente salvata in localStorage
 * 2. Lingua del browser/sistema operativo (fr -> francese, it -> italiano, en o altro -> inglese)
 * 3. Fallback: italiano
 */
export const detectInitialLanguage = () => {
  if (typeof window === "undefined") return "it";

  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && SUPPORTED_LANGUAGES.includes(saved)) {
      return saved;
    }
  } catch (err) {
    // localStorage non accessibile (es. modalità incognito restrittiva)
  }

  // Analisi lingua del browser
  try {
    const browserLangs = navigator.languages?.length
      ? navigator.languages
      : [navigator.language || navigator.userLanguage || "it"];

    for (const raw of browserLangs) {
      if (!raw) continue;
      const clean = raw.toLowerCase().trim();
      if (clean.startsWith("fr")) return "fr";
      if (clean.startsWith("it")) return "it";
      if (clean.startsWith("en")) return "en";
    }

    // Se la lingua primaria non è italiana, per i turisti internazionali default inglese
    const primary = (navigator.language || "").toLowerCase();
    if (primary && !primary.startsWith("it")) {
      return "en";
    }
  } catch (err) {
    // Errore nel rilevamento
  }

  return "it";
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(() => detectInitialLanguage());

  // Applica attributo lang all'elemento HTML per accessibilità e SEO
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = language;
    }
  }, [language]);

  const setLanguage = useCallback((lang) => {
    if (!SUPPORTED_LANGUAGES.includes(lang)) return;
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (err) {
      // ignore
    }
  }, []);

  /**
   * Helper t("sezione.chiave", { n: 4 })
   */
  const t = useCallback(
    (keyPath, vars = {}) => {
      const parts = keyPath.split(".");
      let val = TRANSLATIONS[language];
      for (const part of parts) {
        val = val?.[part];
        if (val === undefined) break;
      }

      // Fallback a italiano se manca nella lingua corrente
      if (val === undefined && language !== "it") {
        let fallbackVal = TRANSLATIONS.it;
        for (const part of parts) {
          fallbackVal = fallbackVal?.[part];
          if (fallbackVal === undefined) break;
        }
        val = fallbackVal;
      }

      if (typeof val === "string") {
        // Sostituzione variabili {n}
        return Object.entries(vars).reduce(
          (acc, [k, v]) => acc.replace(new RegExp(`\\{${k}\\}`, "g"), v),
          val
        );
      }

      return val !== undefined ? val : keyPath;
    },
    [language]
  );

  /**
   * Localizza i dati di un appartamento
   */
  const localize = useCallback(
    (apartment) => {
      return getLocalizedApartment(apartment, language);
    },
    [language]
  );

  const contextValue = useMemo(
    () => ({
      language,
      setLanguage,
      t,
      localize,
      languages: SUPPORTED_LANGUAGES.map((code) => LANGUAGE_META[code]),
      currentLangMeta: LANGUAGE_META[language] || LANGUAGE_META.it,
    }),
    [language, setLanguage, t, localize]
  );

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
};
