import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Star, MapPin, ArrowLeft, ArrowRight, Phone, MessageCircle, Wifi, Car, Snowflake, CigaretteOff, Users, Check, ShieldCheck, Clock, FileText, Ban, Dog } from "lucide-react";
import { fetchApartment } from "@/lib/api";
import { ApartmentGallery } from "@/components/ApartmentGallery";
import { Seo } from "@/components/Seo";
import { apartmentLd, breadcrumbLd } from "@/lib/structuredData";
import { APT } from "@/constants/testIds";
import { SITE } from "@/lib/siteConfig";
import { GENERAL_HOUSE_RULES } from "@/constants/apartments";

const AMENITY_META = {
  wifi_free: { icon: Wifi, label: "Wifi gratuito" },
  parking_free: { icon: Car, label: "Parcheggio gratuito" },
  ski_in_ski_out: { icon: Snowflake, label: "Sci ai piedi" },
  non_smoking: { icon: CigaretteOff, label: "Camere non fumatori" },
  family_rooms: { icon: Users, label: "Camere familiari" },
};

export default function ApartmentDetail() {
  const { id } = useParams();
  const { data: apt, isLoading, isError } = useQuery({
    queryKey: ["apartment", id],
    queryFn: () => fetchApartment(id),
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0A0A0A] text-white/50">
        Caricamento…
      </div>
    );
  }
  if (isError || !apt) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#0A0A0A] gap-6">
        <p className="text-white/70">Appartamento non trovato.</p>
        <Link to="/appartamenti" className="text-[#5F8F76] uppercase text-xs tracking-[0.28em]">
          ← Torna agli appartamenti
        </Link>
      </div>
    );
  }

  const metaDesc = `${apt.name} a ${apt.short_location}: ${apt.description.slice(0, 120)}… Prenota direttamente il tuo soggiorno a Pila con Outdoor Apartments.`;

  return (
    <div className="bg-[#0A0A0A] min-h-screen pb-24 lg:pb-0" data-testid={APT.detail}>
      <Seo
        title={`${apt.name} — ${apt.short_location}`}
        description={metaDesc}
        path={`/appartamenti/${apt.id}`}
        type="article"
        image={apt.image}
        jsonLd={[
          apartmentLd(apt),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Appartamenti", path: "/appartamenti" },
            { name: apt.name, path: `/appartamenti/${apt.id}` },
          ]),
        ]}
      />
      {/* HERO */}
      <section className="relative h-[78vh] sm:h-[88vh] w-full overflow-hidden">
        <ApartmentGallery images={apt.gallery?.length ? apt.gallery : [apt.image]} name={apt.name} className="absolute inset-0 h-full w-full" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
        <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-10 pb-16 md:pb-24 max-w-[1400px] mx-auto">
          <Link
            to="/appartamenti"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-xs uppercase tracking-[0.28em] mb-8"
          >
            <ArrowLeft size={14} /> Tutti gli appartamenti
          </Link>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-[10px] uppercase tracking-[0.32em] text-[#B7CFC0] mb-6 flex items-center gap-3"
          >
            <MapPin size={12} /> {apt.address || apt.location}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="font-serif-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.02]"
          >
            {apt.name}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-4 text-white/80"
          >
            {apt.rating > 0 && (
              <div className="flex items-center gap-2">
                <Star size={16} className="text-[#5F8F76] fill-[#5F8F76]" />
                <span className="text-base font-medium">{apt.rating.toFixed(1)} / 10</span>
                {apt.reviews_count > 0 && (
                  <span className="text-white/60 text-sm">({apt.reviews_count} recensioni)</span>
                )}
              </div>
            )}
            {apt.cin && (
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 text-xs font-mono tracking-wider border border-white/15">
                <ShieldCheck size={14} className="text-[#5F8F76]" /> CIN: {apt.cin}
              </div>
            )}
            {apt.cir && (
              <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md px-3 py-1.5 text-xs font-mono tracking-wider border border-white/10 text-white/70">
                CIR: {apt.cir}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-14 lg:gap-20">
          <div className="lg:col-span-2 space-y-14">
            {/* LEGAL DATA & BADGES */}
            <div className="border border-white/15 bg-[#141414] p-6 md:p-8 space-y-6">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <ShieldCheck size={20} className="text-[#5F8F76]" />
                <h3 className="font-serif-display text-xl text-white">Trasparenza Legale & Identificativi</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono text-white/80">
                <div>
                  <span className="text-white/40 block text-[10px] uppercase tracking-widest font-sans">Codice Identificativo Nazionale (CIN)</span>
                  <span className="text-sm font-semibold text-[#B7CFC0]">{apt.cin || "In corso di registrazione"}</span>
                </div>
                <div>
                  <span className="text-white/40 block text-[10px] uppercase tracking-widest font-sans">Codice Identificativo Regionale (CIR)</span>
                  <span className="text-sm font-semibold text-[#B7CFC0]">{apt.cir || "In corso di registrazione"}</span>
                </div>
                <div>
                  <span className="text-white/40 block text-[10px] uppercase tracking-widest font-sans">Indirizzo Struttura</span>
                  <span className="text-white">{apt.address || apt.location}</span>
                </div>
                <div>
                  <span className="text-white/40 block text-[10px] uppercase tracking-widest font-sans">Capienza Massima</span>
                  <span className="text-white">{apt.max_guests ? `${apt.max_guests} Ospiti` : 'Vedi dettagli'} {apt.units_detail ? `(${apt.units_detail})` : ''}</span>
                </div>
              </div>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.32em] text-[#5F8F76] mb-6">Descrizione</p>
            <h2 className="font-serif-display text-3xl md:text-4xl lg:text-5xl leading-[1.1] mb-10">
              Un rifugio <span className="italic">nella neve.</span>
            </h2>
            <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-2xl">
              {apt.description}
            </p>
            </div>

            <div className="mt-16">
              <p className="text-[10px] uppercase tracking-[0.32em] text-[#5F8F76] mb-8">
                Servizi principali
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-10">
                {apt.amenities.map((a) => {
                  const meta = AMENITY_META[a];
                  if (!meta) return null;
                  const Icon = meta.icon;
                  return (
                    <li key={a} className="flex items-center gap-4 text-white/80">
                      <span className="w-9 h-9 flex items-center justify-center border border-white/15 text-[#5F8F76]">
                        <Icon size={15} />
                      </span>
                      <span className="text-sm">{meta.label}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* TOURIST TAX & PETS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              <div className="border border-white/10 bg-[#141414] p-6 space-y-3">
                <div className="flex items-center gap-3 text-[#5F8F76]">
                  <FileText size={18} />
                  <h4 className="text-sm uppercase tracking-wider font-semibold text-white">Imposta di Soggiorno</h4>
                </div>
                {apt.tourist_tax && apt.tourist_tax.length > 0 ? (
                  <ul className="space-y-2 text-xs text-white/70">
                    {apt.tourist_tax.map((t, idx) => (
                      <li key={idx} className="border-b border-white/5 pb-2 last:border-0">
                        <span className="block text-white/40 text-[10px] font-mono">{t.period}:</span>
                        <strong className="text-white">{t.rate}</strong>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-xs text-white/60">Secondo regolamento comunale locale.</p>
                )}
              </div>

              <div className="border border-white/10 bg-[#141414] p-6 space-y-3">
                <div className="flex items-center gap-3 text-[#5F8F76]">
                  <Dog size={18} />
                  <h4 className="text-sm uppercase tracking-wider font-semibold text-white">Politica Animali</h4>
                </div>
                <p className="text-xs text-white/80 leading-relaxed">
                  {apt.pets_note || (apt.pets_allowed ? "Animali ammessi previa richiesta (con supplemento)." : "No animali ammessi.")}
                </p>
              </div>
            </div>

            {/* HOUSE RULES & CANCELLATION */}
            <div className="border border-white/10 bg-[#141414] p-6 md:p-8 space-y-6">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <Clock size={20} className="text-[#5F8F76]" />
                <h3 className="font-serif-display text-xl text-white">Orari & Condizioni di Soggiorno</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-white/80">
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-widest text-white/40 font-sans">Check-in & Check-out</p>
                  <p><strong className="text-white">Check-in:</strong> {GENERAL_HOUSE_RULES.checkIn}</p>
                  <p><strong className="text-white">Check-out:</strong> {GENERAL_HOUSE_RULES.checkOut}</p>
                  <p className="text-xs text-white/50 pt-2"><Ban size={12} className="inline mr-1 text-red-400" /> {GENERAL_HOUSE_RULES.events} | {GENERAL_HOUSE_RULES.smoking}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-widest text-white/40 font-sans">Caparra & Cancellazioni</p>
                  <p className="text-xs text-white/70 leading-relaxed"><strong className="text-white">Caparra:</strong> {GENERAL_HOUSE_RULES.deposit}</p>
                  <p className="text-xs text-white/70 leading-relaxed"><strong className="text-white">Rimborso:</strong> {GENERAL_HOUSE_RULES.cancellation}</p>
                </div>
              </div>
            </div>

            <div className="mt-16 flex items-start gap-4 p-6 border border-white/10 bg-[#141414]">
              <Check size={18} className="text-[#5F8F76] mt-1" />
              <div>
                <p className="text-sm text-white/90 mb-1">Ospitalità curata e trasparente</p>
                <p className="text-white/60 text-sm leading-relaxed">
                  Ogni soggiorno è seguito dal nostro team locale: check-in personalizzato,
                  pulizia impeccabile e assistenza durante tutta la permanenza.
                </p>
              </div>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 h-fit border border-white/10 bg-[#141414] p-7 md:p-8">
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#B7CFC0] mb-5">Prenotazione</p>
            <h3 className="font-serif-display text-3xl leading-tight mb-4">Trova le date perfette.</h3>
            <p className="text-sm leading-relaxed text-white/65 mb-8">
              Verifica tutte le disponibilità e le tariffe direttamente dalla home.
            </p>
            <Link
              to="/#booking"
              className="w-full inline-flex min-h-11 items-center justify-center gap-3 bg-[#2E4F3E] px-5 py-4 text-center text-xs font-medium uppercase tracking-[0.18em] text-white transition-colors duration-200 hover:bg-[#233B2E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Vedi disponibilità <ArrowRight size={15} aria-hidden="true" />
            </Link>
            <div className="mt-7 border-t border-white/10 pt-6">
              <p className="text-sm text-white/85 mb-3">Vuoi prenotare proprio {apt.name}?</p>
              <a
                href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                className="inline-flex min-h-11 items-center gap-3 text-sm text-[#B7CFC0] transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <Phone size={16} aria-hidden="true" /> Chiama per la disponibilità
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* MOBILE STICKY ACTION BAR */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#121212]/95 backdrop-blur-lg border-t border-white/15 px-4 py-3 pb-safe shadow-2xl flex items-center justify-between gap-3">
        <div className="min-w-0 flex-1">
          <p className="font-serif-display text-sm text-white truncate font-medium">
            {apt.name}
          </p>
          <p className="text-[10px] uppercase tracking-wider text-[#B7CFC0] truncate">
            {apt.short_location}
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <a
            href={`tel:${SITE.phoneRaw}`}
            aria-label="Chiama direttamente"
            className="flex h-11 w-11 items-center justify-center border border-white/20 bg-white/5 text-white active:bg-white/20 transition-colors"
          >
            <Phone size={18} />
          </a>
          <a
            href={`https://wa.me/${SITE.phoneRaw.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Ciao, vorrei informazioni su ${apt.name} a Pila.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contatta su WhatsApp"
            className="flex h-11 w-11 items-center justify-center border border-white/20 bg-[#25D366]/20 text-[#25D366] active:bg-[#25D366]/30 transition-colors"
          >
            <MessageCircle size={18} />
          </a>
          <Link
            to="/#booking"
            className="inline-flex h-11 items-center justify-center bg-[#2E4F3E] active:bg-[#233B2E] px-4 text-xs uppercase tracking-wider font-medium text-white transition-colors"
          >
            Prenota
          </Link>
        </div>
      </div>
    </div>
  );
}
