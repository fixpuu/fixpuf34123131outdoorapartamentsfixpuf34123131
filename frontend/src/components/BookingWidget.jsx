import { useState } from "react";
import { CalendarDays, Users, Search } from "lucide-react";
import { BOOKING } from "@/constants/testIds";
import { buildOctorateUrl } from "@/lib/octorate";

/**
 * BookingWidget — Octorate booking engine interface.
 * Permette di selezionare date/ospiti e reindirizza direttamente al booking engine esterno Octorate
 * con i parametri necessari.
 */
export const BookingWidget = ({ variant = "default", apartmentId = null }) => {
  const today = new Date().toISOString().split("T")[0];
  const tomorrow = new Date(Date.now() + 24 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[0];

  const [checkin, setCheckin] = useState(today);
  const [checkout, setCheckout] = useState(tomorrow);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const handleSearch = () => {
    const url = buildOctorateUrl({
      apartmentId,
      checkin,
      checkout,
      pax: adults + children,
    });
    window.open(url, "_blank", "noopener,noreferrer");
  };

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

      {/* Custom Booking UI */}
      <div className={`grid ${variant === "sidebar" ? "grid-cols-1 gap-5" : "grid-cols-2 md:grid-cols-4 gap-4 md:gap-5"}`}>
        <div className="col-span-1">
          <label className="text-[10px] uppercase tracking-[0.22em] text-white/50 flex items-center gap-2 mb-2">
            <CalendarDays size={12} /> Check-in
          </label>
          <input
            type="date"
            value={checkin}
            onChange={(e) => setCheckin(e.target.value)}
            data-testid={BOOKING.checkin}
            className="w-full min-h-[44px] bg-transparent border-b border-white/20 text-white focus:border-white focus:outline-none py-2 md:py-3 font-manrope text-base md:text-sm"
          />
        </div>
        <div className="col-span-1">
          <label className="text-[10px] uppercase tracking-[0.22em] text-white/50 flex items-center gap-2 mb-2">
            <CalendarDays size={12} /> Check-out
          </label>
          <input
            type="date"
            value={checkout}
            onChange={(e) => setCheckout(e.target.value)}
            data-testid={BOOKING.checkout}
            className="w-full min-h-[44px] bg-transparent border-b border-white/20 text-white focus:border-white focus:outline-none py-2 md:py-3 font-manrope text-base md:text-sm"
          />
        </div>
        <div className="col-span-1">
          <label className="text-[10px] uppercase tracking-[0.22em] text-white/50 flex items-center gap-2 mb-2">
            <Users size={12} /> Adulti
          </label>
          <select
            value={adults}
            onChange={(e) => setAdults(Number(e.target.value))}
            data-testid={BOOKING.adults}
            className="w-full min-h-[44px] bg-transparent border-b border-white/20 text-white focus:border-white focus:outline-none py-2 md:py-3 font-manrope text-base md:text-sm"
          >
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <option key={n} value={n} className="bg-[#141414]">
                {n} {n === 1 ? "adulto" : "adulti"}
              </option>
            ))}
          </select>
        </div>
        <div className="col-span-1">
          <label className="text-[10px] uppercase tracking-[0.22em] text-white/50 flex items-center gap-2 mb-2">
            <Users size={12} /> Bambini
          </label>
          <select
            value={children}
            onChange={(e) => setChildren(Number(e.target.value))}
            data-testid={BOOKING.children}
            className="w-full min-h-[44px] bg-transparent border-b border-white/20 text-white focus:border-white focus:outline-none py-2 md:py-3 font-manrope text-base md:text-sm"
          >
            {[0, 1, 2, 3, 4].map((n) => (
              <option key={n} value={n} className="bg-[#141414]">
                {n} {n === 1 ? "bambino" : "bambini"}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        type="button"
        data-testid={BOOKING.search}
        onClick={handleSearch}
        className="mt-8 md:mt-10 w-full md:w-auto min-h-[48px] inline-flex items-center justify-center gap-3 bg-[#2E4F3E] text-white hover:bg-[#233B2E] active:scale-[0.99] transition-all px-8 md:px-10 py-3.5 md:py-4 text-xs tracking-[0.24em] uppercase font-medium touch-manipulation"
      >
        <Search size={14} /> Verifica disponibilità
      </button>
    </div>
  );
};

export default BookingWidget;
