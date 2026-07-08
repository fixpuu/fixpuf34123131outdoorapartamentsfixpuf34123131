import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X, Cookie, ShieldCheck } from "lucide-react";
import { useConsent } from "@/context/ConsentContext";
import { CONSENT } from "@/constants/testIds";

/**
 * CookieBanner — banner GDPR/Garante Privacy compliant.
 *
 * - Compare al primo accesso (o quando cambia la versione dell'informativa).
 * - Tre opzioni di PARI livello grafico: Accetta tutti, Rifiuta tutti, Personalizza.
 * - Nessuna categoria non-necessaria pre-selezionata.
 * - Riaperture: link "Gestisci cookie" nel footer.
 */
export const CookieBanner = () => {
  const {
    showBanner,
    showPreferences,
    setShowPreferences,
    acceptAll,
    rejectAll,
    savePreferences,
    openPreferences,
  } = useConsent();

  if (!showBanner && !showPreferences) return null;

  return (
    <>
      {showBanner && !showPreferences && (
        <div
          data-testid={CONSENT.banner}
          role="dialog"
          aria-live="polite"
          aria-label="Preferenze cookie"
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
        >
          <div className="mx-auto max-w-[1400px] bg-[#0f0f0f] border border-white/15 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 p-6 md:p-8">
              <div className="flex items-start gap-4">
                <Cookie size={22} className="text-[#5F8F76] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-white/50 mb-3">
                    Cookie & Privacy
                  </p>
                  <h2 className="font-serif-display text-2xl md:text-3xl leading-tight mb-3">
                    Rispettiamo la tua privacy.
                  </h2>
                  <p className="text-white/70 text-sm leading-relaxed max-w-2xl">
                    Utilizziamo cookie tecnici indispensabili al funzionamento del sito e,
                    solo previo tuo consenso, cookie analitici, funzionali o di
                    profilazione anche di terze parti. Puoi accettare tutti, rifiutarli
                    tutti o personalizzare le tue preferenze in qualsiasi momento.
                    Leggi la nostra{" "}
                    <Link to="/cookie-policy" className="underline text-[#B7CFC0]">
                      Cookie Policy
                    </Link>{" "}
                    e l'{" "}
                    <Link to="/privacy-policy" className="underline text-[#B7CFC0]">
                      Informativa Privacy
                    </Link>
                    .
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-3 items-stretch">
                <button
                  type="button"
                  data-testid={CONSENT.rejectAll}
                  onClick={rejectAll}
                  className="border border-white/25 hover:border-white text-white transition-colors px-5 py-3 text-[11px] tracking-[0.22em] uppercase whitespace-nowrap"
                >
                  Rifiuta tutti
                </button>
                <button
                  type="button"
                  data-testid={CONSENT.customize}
                  onClick={openPreferences}
                  className="border border-white/25 hover:border-white text-white transition-colors px-5 py-3 text-[11px] tracking-[0.22em] uppercase whitespace-nowrap"
                >
                  Personalizza
                </button>
                <button
                  type="button"
                  data-testid={CONSENT.acceptAll}
                  onClick={acceptAll}
                  className="bg-[#2E4F3E] hover:bg-[#233B2E] text-white transition-colors px-5 py-3 text-[11px] tracking-[0.22em] uppercase whitespace-nowrap"
                >
                  Accetta tutti
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showPreferences && <PreferencesModal onClose={() => setShowPreferences(false)} onSave={savePreferences} />}
    </>
  );
};

const PreferencesModal = ({ onClose, onSave }) => {
  const [functional, setFunctional] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  return (
    <div
      data-testid={CONSENT.prefsModal}
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[110] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 overflow-y-auto"
    >
      <div className="w-full max-w-2xl bg-[#0f0f0f] border border-white/15 my-8">
        <div className="flex items-start justify-between p-6 md:p-8 border-b border-white/10">
          <div className="flex items-start gap-3">
            <ShieldCheck size={22} className="text-[#5F8F76] mt-1" />
            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-white/50 mb-2">
                Preferenze cookie
              </p>
              <h3 className="font-serif-display text-2xl md:text-3xl leading-tight">
                Gestisci il consenso.
              </h3>
            </div>
          </div>
          <button type="button" onClick={onClose} aria-label="Chiudi" className="text-white/60 hover:text-white">
            <X size={20} />
          </button>
        </div>

        <div className="p-6 md:p-8 space-y-5">
          <CategoryRow
            title="Cookie tecnici / necessari"
            description="Indispensabili al funzionamento del sito (navigazione, sicurezza, memorizzazione delle preferenze cookie). Non richiedono consenso."
            locked
            checked
          />
          <CategoryRow
            title="Cookie funzionali"
            description="Migliorano l'esperienza ricordando preferenze non essenziali (es. lingua)."
            checked={functional}
            onChange={setFunctional}
            testId={CONSENT.toggleFunctional}
          />
          <CategoryRow
            title="Cookie analitici"
            description="Statistiche anonime sulla navigazione (es. Google Analytics quando integrato)."
            checked={analytics}
            onChange={setAnalytics}
            testId={CONSENT.toggleAnalytics}
          />
          <CategoryRow
            title="Cookie di marketing / terze parti"
            description="Utilizzati da servizi esterni (es. widget di prenotazione Octorate, social media) per finalità di profilazione."
            checked={marketing}
            onChange={setMarketing}
            testId={CONSENT.toggleMarketing}
          />
        </div>

        <div className="p-6 md:p-8 border-t border-white/10 flex flex-col-reverse sm:flex-row gap-3 sm:justify-between items-stretch sm:items-center">
          <Link
            to="/cookie-policy"
            onClick={onClose}
            className="text-[11px] uppercase tracking-[0.22em] text-white/60 hover:text-white transition-colors"
          >
            Leggi la Cookie Policy
          </Link>
          <button
            type="button"
            data-testid={CONSENT.prefsSave}
            onClick={() => onSave({ functional, analytics, marketing })}
            className="bg-[#2E4F3E] hover:bg-[#233B2E] text-white transition-colors px-8 py-3 text-[11px] tracking-[0.22em] uppercase"
          >
            Salva preferenze
          </button>
        </div>
      </div>
    </div>
  );
};

const CategoryRow = ({ title, description, checked, onChange, locked, testId }) => (
  <div className="flex items-start gap-4 p-4 border border-white/10">
    <label className="mt-1 relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={!!checked}
        disabled={locked}
        onChange={(e) => onChange?.(e.target.checked)}
        data-testid={testId}
        className="sr-only peer"
      />
      <span className={`w-10 h-5 border ${locked ? "bg-[#2E4F3E]/60 border-[#2E4F3E]" : "bg-transparent border-white/30"} peer-checked:bg-[#2E4F3E] peer-checked:border-[#2E4F3E] transition-colors relative`}>
        <span className={`absolute top-0.5 ${checked ? "left-5" : "left-0.5"} w-3.5 h-3.5 bg-white transition-all`} />
      </span>
    </label>
    <div className="flex-1">
      <p className="text-white text-sm font-medium mb-1">
        {title} {locked && <span className="text-white/40 text-[10px] uppercase tracking-widest ml-2">Sempre attivo</span>}
      </p>
      <p className="text-white/60 text-xs leading-relaxed">{description}</p>
    </div>
  </div>
);

export default CookieBanner;
