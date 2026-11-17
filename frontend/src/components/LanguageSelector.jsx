import { useState, useRef, useEffect } from "react";
import { ChevronDown, Check, Globe } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

/**
 * Selettore lingua elegante e minimale in stile Outdoor Apartments.
 * Supporta visualizzazione dropdown (desktop) o segmentata (mobile).
 */
export const LanguageSelector = ({ variant = "dropdown", className = "" }) => {
  const { language, setLanguage, languages, currentLangMeta } = useLanguage();
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  // Chiusura al click esterno
  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  // Variante Segmentata (Perfetta per il menu mobile)
  if (variant === "segmented") {
    return (
      <div className={`flex items-center gap-1.5 p-1 bg-white/[0.04] border border-white/10 ${className}`}>
        {languages.map((item) => {
          const isActive = item.code === language;
          return (
            <button
              key={item.code}
              type="button"
              onClick={() => setLanguage(item.code)}
              className={`flex-1 min-h-[40px] flex items-center justify-center gap-2 px-3 py-2 text-xs uppercase tracking-[0.2em] font-medium transition-all ${
                isActive
                  ? "bg-[#2E4F3E] text-white shadow-sm"
                  : "text-white/60 hover:text-white hover:bg-white/[0.05]"
              }`}
              aria-pressed={isActive}
            >
              <span>{item.flag}</span>
              <span>{item.short}</span>
            </button>
          );
        })}
      </div>
    );
  }

  // Variante Dropdown (Desktop / Navbar)
  return (
    <div ref={containerRef} className={`relative inline-block ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label="Seleziona lingua"
        className="min-h-[38px] px-3.5 py-1.5 flex items-center gap-2.5 bg-black/40 hover:bg-black/60 border border-white/15 hover:border-white/35 text-white/90 hover:text-white text-xs uppercase tracking-[0.22em] font-medium transition-all"
      >
        <span className="text-sm leading-none" aria-hidden="true">
          {currentLangMeta.flag}
        </span>
        <span>{currentLangMeta.short}</span>
        <ChevronDown
          size={13}
          className={`text-white/50 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute right-0 mt-2 w-44 bg-[#111111]/98 backdrop-blur-xl border border-white/15 shadow-2xl z-50 py-1 divide-y divide-white/5 animate-in fade-in zoom-in-95 duration-150"
        >
          {languages.map((item) => {
            const isSelected = item.code === language;
            return (
              <button
                key={item.code}
                role="option"
                aria-selected={isSelected}
                type="button"
                onClick={() => {
                  setLanguage(item.code);
                  setOpen(false);
                }}
                className={`w-full flex items-center justify-between px-4 py-2.5 text-xs uppercase tracking-[0.18em] transition-colors ${
                  isSelected
                    ? "bg-[#2E4F3E]/40 text-white font-semibold"
                    : "text-white/70 hover:text-white hover:bg-white/[0.06]"
                }`}
              >
                <span className="flex items-center gap-2.5">
                  <span className="text-base" aria-hidden="true">{item.flag}</span>
                  <span>{item.label}</span>
                </span>
                {isSelected && <Check size={14} className="text-[#5F8F76]" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
