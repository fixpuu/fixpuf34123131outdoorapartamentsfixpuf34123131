import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Star, MapPin, ArrowLeft, ArrowRight, Phone, MessageCircle, Wifi, Car, Snowflake, CigaretteOff, Users, Check, ShieldCheck, Clock, FileText, Ban, Dog, SlidersHorizontal, Mountain } from "lucide-react";
import { fetchApartment } from "@/lib/api";
import { ApartmentGallery } from "@/components/ApartmentGallery";
import { Seo } from "@/components/Seo";
import { apartmentLd, breadcrumbLd } from "@/lib/structuredData";
import { APT } from "@/constants/testIds";
import { SITE } from "@/lib/siteConfig";
import { buildOctorateUrl } from "@/lib/octorate";
import { useLanguage } from "@/i18n/LanguageContext";

const AMENITY_ICONS = {
  wifi_free: Wifi,
  parking_free: Car,
  ski_in_ski_out: Snowflake,
  non_smoking: CigaretteOff,
  family_rooms: Users,
  family_friendly: Users,
  panoramic_terrace: Mountain,
  terrazzino_panoramico: Mountain,
};

export default function ApartmentDetail() {
  const { id } = useParams();
  const { t, localize } = useLanguage();

  const { data: rawApt, isLoading, isError } = useQuery({
    queryKey: ["apartment", id],
    queryFn: () => fetchApartment(id),
    enabled: !!id,
  });

  const apt = rawApt ? localize(rawApt) : null;

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0A0A0A] text-white/50">
        {t("common.loading")}
      </div>
    );
  }
  if (isError || !apt) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#0A0A0A] gap-6">
        <p className="text-white/70">{t("common.notFound")}</p>
        <Link to="/appartamenti" className="text-[#5F8F76] uppercase text-xs tracking-[0.28em]">
          ← {t("apartmentDetail.back")}
        </Link>
      </div>
    );
  }

  const galleryImages = apt.gallery?.length ? apt.gallery : [apt.image];

  return (
    <div className="bg-[#0A0A0A] min-h-screen pb-32">
      <Seo
        title={`${apt.name} — Appartamento vacanze a Pila`}
        description={apt.description}
        path={`/appartamenti/${apt.id}`}
        image={galleryImages[0]}
        jsonLd={[
          breadcrumbLd([
            { name: t("nav.home"), path: "/" },
            { name: t("nav.apartments"), path: "/appartamenti" },
            { name: apt.name, path: `/appartamenti/${apt.id}` },
          ]),
          apartmentLd(apt),
        ]}
      />

      {/* TOP BAR / BACK */}
      <div className="pt-28 md:pt-36 max-w-[1600px] mx-auto px-5 sm:px-6 md:px-10 pb-6 flex items-center justify-between">
        <Link
          to="/appartamenti"
          data-testid={APT.backBtn}
          className="inline-flex min-h-11 items-center gap-3 text-xs uppercase tracking-[0.28em] text-white/60 transition-colors duration-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <ArrowLeft size={14} aria-hidden="true" /> {t("apartmentDetail.back")}
        </Link>
        <div className="flex items-center gap-2 text-white/50 text-xs">
          <MapPin size={13} className="text-[#5F8F76]" />
          <span>{apt.location}</span>
        </div>
      </div>

      {/* GALLERY */}
      <section className="max-w-[1600px] mx-auto px-5 sm:px-6 md:px-10">
        <ApartmentGallery images={galleryImages} name={apt.name} variant="detail" />
      </section>

      {/* MAIN CONTENT + SIDEBAR */}
      <section className="max-w-[1600px] mx-auto px-5 sm:px-6 md:px-10 mt-12 md:mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 lg:gap-20">
          <div className="space-y-12">
            {/* IDENTIFICATION CODES & QUICK STATS */}
            <div className="border border-white/10 bg-[#141414] p-5 sm:p-6 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/80 font-mono">
                {apt.cin && (
                  <span className="bg-white/5 px-3 py-1 border border-white/10">
                    <strong className="text-white/40 font-sans mr-1">{t("apartmentDetail.cin")}:</strong> {apt.cin}
                  </span>
                )}
                {apt.cir && (
                  <span className="bg-white/5 px-3 py-1 border border-white/10">
                    <strong className="text-white/40 font-sans mr-1">{t("apartmentDetail.cir")}:</strong> {apt.cir}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-4 text-xs text-white/60">
                {apt.rating > 0 && (
                  <div className="flex items-center gap-1.5">
                    <Star size={13} className="text-[#5F8F76] fill-[#5F8F76]" />
                    <span className="font-semibold text-white">{apt.rating.toFixed(1)}</span>
                    {apt.reviews_count > 0 && <span>({apt.reviews_count})</span>}
                  </div>
                )}
                <div className="flex items-center gap-1.5 border-l border-white/10 pl-4">
                  <Users size={13} className="text-[#5F8F76]" />
                  <span className="text-white">
                    {apt.max_guests ? t("common.maxGuests", { n: apt.max_guests }) : t("common.viewDetails")}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.32em] text-[#5F8F76] mb-6">
                {t("home.aboutTag")}
              </p>
              <h2 className="font-serif-display text-3xl md:text-4xl lg:text-5xl leading-[1.1] mb-10 text-white">
                {apt.name}
              </h2>
              <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-2xl">
                {apt.description}
              </p>
            </div>

            {/* CARATTERISTICHE E DETTAGLI TECNICI */}
            <div className="border border-white/15 bg-[#141414] p-6 md:p-8 space-y-6">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <SlidersHorizontal size={20} className="text-[#5F8F76]" />
                <h3 className="font-serif-display text-xl text-white">
                  {t("apartmentDetail.specsTitle")}
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 text-sm">
                <div className="p-4 bg-white/[0.02] border border-white/5 space-y-1.5">
                  <span className="text-white/40 block text-[10px] uppercase tracking-widest font-sans">
                    {t("apartmentDetail.typology")}
                  </span>
                  <p className="font-medium text-white">{apt.specs?.typology || "Appartamento"}</p>
                </div>
                <div className="p-4 bg-white/[0.02] border border-white/5 space-y-1.5">
                  <span className="text-white/40 block text-[10px] uppercase tracking-widest font-sans">
                    {t("apartmentDetail.floors")}
                  </span>
                  <p className="font-medium text-white">{apt.specs?.floors || "Piano unico"}</p>
                </div>
                <div className="p-4 bg-white/[0.02] border border-white/5 space-y-1.5">
                  <span className="text-white/40 block text-[10px] uppercase tracking-widest font-sans">
                    {t("apartmentDetail.beds")}
                  </span>
                  <p className="font-medium text-white">{apt.specs?.beds || `${apt.max_guests} posti letto`}</p>
                </div>
                <div className="p-4 bg-white/[0.02] border border-white/5 space-y-1.5">
                  <span className="text-white/40 block text-[10px] uppercase tracking-widest font-sans">
                    {t("apartmentDetail.rooms")}
                  </span>
                  <p className="font-medium text-white leading-relaxed">{apt.specs?.rooms || "Zona giorno con cucina, camera da letto, bagno"}</p>
                </div>
              </div>
            </div>

            {/* SERVIZI PRINCIPALI */}
            <div className="mt-16">
              <p className="text-[10px] uppercase tracking-[0.32em] text-[#5F8F76] mb-8">
                {t("apartmentDetail.amenitiesTitle")}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-10">
                {apt.amenities.map((a) => {
                  const Icon = AMENITY_ICONS[a];
                  if (!Icon) return null;
                  const label = t(`amenities.${a}`);
                  return (
                    <li key={a} className="flex items-center gap-4 text-white/80">
                      <span className="w-9 h-9 flex items-center justify-center border border-white/15 text-[#5F8F76]">
                        <Icon size={15} />
                      </span>
                      <span className="text-sm">{label}</span>
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
                  <h4 className="text-sm uppercase tracking-wider font-semibold text-white">
                    {t("apartmentDetail.touristTaxTitle")}
                  </h4>
                </div>
                {apt.tourist_tax && apt.tourist_tax.length > 0 ? (
                  <ul className="space-y-2 text-xs text-white/70">
                    {apt.tourist_tax.map((tItem, idx) => (
                      <li key={idx} className="border-b border-white/5 pb-2 last:border-0">
                        <span className="block text-white/40 text-[10px] font-mono">{tItem.period}:</span>
                        <strong className="text-white">{tItem.rate}</strong>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-xs text-white/60">{t("apartmentDetail.touristTaxFallback")}</p>
                )}
              </div>

              <div className="border border-white/10 bg-[#141414] p-6 space-y-3">
                <div className="flex items-center gap-3 text-[#5F8F76]">
                  <Dog size={18} />
                  <h4 className="text-sm uppercase tracking-wider font-semibold text-white">
                    {t("apartmentDetail.petsTitle")}
                  </h4>
                </div>
                <p className="text-xs text-white/80 leading-relaxed">
                  {apt.pets_note || (apt.pets_allowed ? t("apartmentDetail.petsAllowed") : t("apartmentDetail.petsNotAllowed"))}
                </p>
              </div>
            </div>

            {/* HOUSE RULES & CANCELLATION */}
            <div className="border border-white/10 bg-[#141414] p-6 md:p-8 space-y-6">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <Clock size={20} className="text-[#5F8F76]" />
                <h3 className="font-serif-display text-xl text-white">
                  {t("apartmentDetail.houseRulesTitle")}
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-white/80">
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-widest text-white/40 font-sans">
                    {t("apartmentDetail.checkInOut")}
                  </p>
                  <p><strong className="text-white">{t("apartmentDetail.checkIn")}</strong> {t("houseRules.checkIn")}</p>
                  <p><strong className="text-white">{t("apartmentDetail.checkOut")}</strong> {t("houseRules.checkOut")}</p>
                  <p className="text-xs text-white/50 pt-2"><Ban size={12} className="inline mr-1 text-red-400" /> {t("houseRules.events")} | {t("houseRules.smoking")}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-widest text-white/40 font-sans">
                    {t("apartmentDetail.depositRefund")}
                  </p>
                  <p className="text-xs text-white/70 leading-relaxed"><strong className="text-white">{t("apartmentDetail.deposit")}</strong> {t("houseRules.deposit")}</p>
                  <p className="text-xs text-white/70 leading-relaxed"><strong className="text-white">{t("apartmentDetail.cancellation")}</strong> {t("houseRules.cancellation")}</p>
                </div>
              </div>
            </div>

            <div className="mt-16 flex items-start gap-4 p-6 border border-white/10 bg-[#141414]">
              <Check size={18} className="text-[#5F8F76] mt-1" />
              <div>
                <p className="text-sm text-white/90 mb-1">{t("apartmentDetail.hospitalityTitle")}</p>
                <p className="text-white/60 text-sm leading-relaxed">
                  {t("apartmentDetail.hospitalityDesc")}
                </p>
              </div>
            </div>
          </div>

          {/* SIDEBAR BOOKING */}
          <aside className="lg:sticky lg:top-28 h-fit border border-white/10 bg-[#141414] p-7 md:p-8">
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#B7CFC0] mb-5">
              {apt.coming_soon ? t("common.comingSoon") : t("booking.directBooking")}
            </p>
            <h3 className="font-serif-display text-3xl leading-tight mb-4">
              {apt.coming_soon ? t("apartmentDetail.comingSoonTitle") : t("apartmentDetail.bookingBoxTitle")}
            </h3>
            <p className="text-sm leading-relaxed text-white/65 mb-8">
              {apt.coming_soon
                ? t("apartmentDetail.comingSoonSub")
                : t("apartmentDetail.bookingBoxSub")}
            </p>
            <a
              href={buildOctorateUrl({ apartmentId: apt.id })}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex min-h-11 items-center justify-center gap-3 bg-[#2E4F3E] px-5 py-4 text-center text-xs font-medium uppercase tracking-[0.18em] text-white transition-colors duration-200 hover:bg-[#233B2E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {t("nav.checkAvailability")} <ArrowRight size={15} aria-hidden="true" />
            </a>
            <div className="mt-7 border-t border-white/10 pt-6">
              <p className="text-sm text-white/85 mb-3">{t("apartmentDetail.directCallPrompt", { name: apt.name })}</p>
              <a
                href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                className="inline-flex min-h-11 items-center gap-3 text-sm text-[#B7CFC0] transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <Phone size={16} aria-hidden="true" /> {t("apartmentDetail.directCallBtn")}
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
          <a
            href={buildOctorateUrl({ apartmentId: apt.id })}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center bg-[#2E4F3E] active:bg-[#233B2E] px-4 text-xs uppercase tracking-wider font-medium text-white transition-colors"
          >
            {t("nav.checkAvailability")}
          </a>
        </div>
      </div>
    </div>
  );
}
