import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Star, MapPin, ArrowLeft, ArrowRight, Phone, Wifi, Car, Snowflake, CigaretteOff, Users, Check } from "lucide-react";
import { fetchApartment } from "@/lib/api";
import { ApartmentGallery } from "@/components/ApartmentGallery";
import { Seo } from "@/components/Seo";
import { apartmentLd, breadcrumbLd } from "@/lib/structuredData";
import { APT } from "@/constants/testIds";
import { SITE } from "@/lib/siteConfig";

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
    <div className="bg-[#0A0A0A] min-h-screen" data-testid={APT.detail}>
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
      <section className="relative h-[90vh] w-full overflow-hidden">
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
            <MapPin size={12} /> {apt.short_location}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="font-serif-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.02]"
          >
            {apt.name}
          </motion.h1>
          {apt.rating > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="mt-8 flex items-center gap-6 text-white/80"
            >
              <div className="flex items-center gap-2">
                <Star size={16} className="text-[#5F8F76] fill-[#5F8F76]" />
                <span className="text-base font-medium">{apt.rating.toFixed(1)} / 10</span>
                {apt.reviews_count > 0 && (
                  <span className="text-white/60 text-sm">({apt.reviews_count} recensioni)</span>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-14 lg:gap-20">
          <div className="lg:col-span-2">
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#5F8F76] mb-6">Descrizione</p>
            <h2 className="font-serif-display text-3xl md:text-4xl lg:text-5xl leading-[1.1] mb-10">
              Un rifugio <span className="italic">nella neve.</span>
            </h2>
            <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-2xl">
              {apt.description}
            </p>

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

            <div className="mt-16 flex items-start gap-4 p-6 border border-white/10 bg-[#141414]">
              <Check size={18} className="text-[#5F8F76] mt-1" />
              <div>
                <p className="text-sm text-white/90 mb-1">Ospitalità curata</p>
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
    </div>
  );
}
