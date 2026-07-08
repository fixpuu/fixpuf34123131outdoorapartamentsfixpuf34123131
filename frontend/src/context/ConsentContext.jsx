import { createContext, useContext, useEffect, useState, useCallback } from "react";

/**
 * Consent Context — gestisce il consenso cookie conforme GDPR/Garante Privacy.
 *
 * Stato consenso persistito in localStorage sotto la chiave "oa_consent_v1".
 * Struttura: { version, timestamp, choices: { necessary, functional, analytics, marketing } }
 *
 * - `necessary` è sempre true (cookie tecnici indispensabili).
 * - Gli altri sono OFF di default finché l'utente non presta consenso esplicito.
 * - Se l'utente sceglie "Rifiuta tutti", vengono tutti impostati a false (tranne necessary).
 * - Se l'utente clicca "Accetta tutti", vengono tutti a true.
 * - Con "Personalizza" può selezionare singolarmente.
 *
 * Consent Mode: qualsiasi script di terze parti (Octorate, Google Analytics, ecc.)
 * deve essere caricato SOLO se la relativa categoria è true. Vedi hook useConsent().
 */

const STORAGE_KEY = "oa_consent_v1";
const VERSION = 1;

const DEFAULT_CHOICES = {
  necessary: true,
  functional: false,
  analytics: false,
  marketing: false,
};

const ConsentContext = createContext(null);

export const ConsentProvider = ({ children }) => {
  const [choices, setChoices] = useState(DEFAULT_CHOICES);
  const [decided, setDecided] = useState(false); // ha già scelto?
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        setShowBanner(true);
        return;
      }
      const parsed = JSON.parse(raw);
      if (parsed?.version !== VERSION) {
        // versione informativa cambiata → richiedi nuovo consenso
        setShowBanner(true);
        return;
      }
      setChoices({ ...DEFAULT_CHOICES, ...(parsed.choices || {}) });
      setDecided(true);
    } catch {
      setShowBanner(true);
    }
  }, []);

  const persist = useCallback((next) => {
    const record = {
      version: VERSION,
      timestamp: new Date().toISOString(),
      choices: next,
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
    } catch {
      /* storage disabled — non blocca l'app */
    }
  }, []);

  const acceptAll = useCallback(() => {
    const next = { necessary: true, functional: true, analytics: true, marketing: true };
    setChoices(next);
    setDecided(true);
    setShowBanner(false);
    setShowPreferences(false);
    persist(next);
  }, [persist]);

  const rejectAll = useCallback(() => {
    const next = { ...DEFAULT_CHOICES };
    setChoices(next);
    setDecided(true);
    setShowBanner(false);
    setShowPreferences(false);
    persist(next);
  }, [persist]);

  const savePreferences = useCallback(
    (partial) => {
      const next = { ...DEFAULT_CHOICES, ...partial, necessary: true };
      setChoices(next);
      setDecided(true);
      setShowBanner(false);
      setShowPreferences(false);
      persist(next);
    },
    [persist]
  );

  const openPreferences = useCallback(() => {
    setShowPreferences(true);
    setShowBanner(false);
  }, []);

  const reopenBanner = useCallback(() => {
    setShowPreferences(true);
  }, []);

  const value = {
    choices,
    decided,
    showBanner,
    showPreferences,
    setShowPreferences,
    acceptAll,
    rejectAll,
    savePreferences,
    openPreferences,
    reopenBanner,
  };

  return <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>;
};

export const useConsent = () => {
  const ctx = useContext(ConsentContext);
  if (!ctx) throw new Error("useConsent must be used within ConsentProvider");
  return ctx;
};
