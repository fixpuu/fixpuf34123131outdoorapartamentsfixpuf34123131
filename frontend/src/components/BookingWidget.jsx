import { useState } from "react";
import { CalendarDays, Users, Search } from "lucide-react";
import { BOOKING } from "@/constants/testIds";

/**
 * BookingWidget — Octorate placeholder.
 * Contiene un contenitore evidenziato (dashed) dove incollare lo script embed di Octorate,
 * insieme a una mock UI (date, ospiti, CTA) coerente con lo stile del sito.
 */
export const BookingWidget = ({ variant = "default" }) => {
  const today = new Date().toISOString().split("T")[0];
  const tomorrow = new Date(Date.now() + 24 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[0];

  const [checkin, setCheckin] = useState(today);
  const [checkout, setCheckout] = useState(tomorrow);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  return (
    <div
      data-testid={BOOKING.widget}
      className={`relative bg-[#141414] border border-white/10 ${
        variant === "sidebar" ? "p-6" : "p-8 md:p-10"
      }`}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1.5 h-1.5 bg-[#5F8F76] rounded-full" />
        <p className="text-[10px] uppercase tracking-[0.28em] text-white/50">
          Prenotazione diretta
        </p>
      </div>

      <h3 className="font-serif-display text-2xl md:text-3xl mb-8 leading-tight">
        Verifica disponibilità
      </h3>

      {/* Mock UI */}
      <div className={`grid ${variant === "sidebar" ? "grid-cols-1 gap-5" : "grid-cols-1 md:grid-cols-4 gap-5"}`}>
        <div>
          <label className="text-[10px] uppercase tracking-[0.22em] text-white/50 flex items-center gap-2 mb-2">
            <CalendarDays size={12} /> Check-in
          </label>
          <input
            type="date"
            value={checkin}
            onChange={(e) => setCheckin(e.target.value)}
            data-testid={BOOKING.checkin}
            className="w-full bg-transparent border-b border-white/20 text-white focus:border-white focus:outline-none py-3 font-manrope text-sm"
          />
        </div>
        <div>
          <label className="text-[10px] uppercase tracking-[0.22em] text-white/50 flex items-center gap-2 mb-2">
            <CalendarDays size={12} /> Check-out
          </label>
          <input
            type="date"
            value={checkout}
            onChange={(e) => setCheckout(e.target.value)}
            data-testid={BOOKING.checkout}
            className="w-full bg-transparent border-b border-white/20 text-white focus:border-white focus:outline-none py-3 font-manrope text-sm"
          />
        </div>
        <div>
          <label className="text-[10px] uppercase tracking-[0.22em] text-white/50 flex items-center gap-2 mb-2">
            <Users size={12} /> Adulti
          </label>
          <select
            value={adults}
            onChange={(e) => setAdults(Number(e.target.value))}
            data-testid={BOOKING.adults}
            className="w-full bg-transparent border-b border-white/20 text-white focus:border-white focus:outline-none py-3 font-manrope text-sm"
          >
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <option key={n} value={n} className="bg-black">
                {n} {n === 1 ? "adulto" : "adulti"}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-[10px] uppercase tracking-[0.22em] text-white/50 flex items-center gap-2 mb-2">
            <Users size={12} /> Bambini
          </label>
          <select
            value={children}
            onChange={(e) => setChildren(Number(e.target.value))}
            data-testid={BOOKING.children}
            className="w-full bg-transparent border-b border-white/20 text-white focus:border-white focus:outline-none py-3 font-manrope text-sm"
          >
            {[0, 1, 2, 3, 4].map((n) => (
              <option key={n} value={n} className="bg-black">
                {n} {n === 1 ? "bambino" : "bambini"}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        type="button"
        data-testid={BOOKING.search}
        onClick={() => {
          document
            .getElementById("octorate-embed")
            ?.scrollIntoView({ behavior: "smooth", block: "center" });
        }}
        className="mt-10 w-full md:w-auto inline-flex items-center justify-center gap-3 bg-[#2E4F3E] text-white hover:bg-[#233B2E] transition-colors duration-300 px-10 py-4 text-xs tracking-[0.28em] uppercase font-medium"
      >
        <Search size={14} /> Cerca disponibilità
      </button>

      {/* Octorate embed placeholder */}
      <div
        id="octorate-embed"
        data-testid={BOOKING.placeholder}
        className="mt-10 border border-dashed border-white/25 p-6 md:p-8 text-center"
      >
        <p className="text-[10px] uppercase tracking-[0.28em] text-[#5F8F76] mb-3">
          Widget di prenotazione Octorate
        </p>
        <p className="text-white/60 text-sm max-w-xl mx-auto leading-relaxed">
          Incolla qui lo script embed di Octorate. Questo contenitore ospiterà
          il sistema reale di disponibilità e prenotazione diretta.
        </p>
        <code className="mt-4 inline-block text-[11px] text-white/40 font-mono">
          &lt;!-- OCTORATE EMBED SCRIPT --&gt;
        </code>
      </div>
    </div>
  );
};

export default BookingWidget;
