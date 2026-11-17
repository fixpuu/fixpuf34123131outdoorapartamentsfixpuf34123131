import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { ArrowRight, MapPin, Plus, Minus, Check, Snowflake, ShieldCheck, HeartHandshake } from "lucide-react";
import { useState } from "react";
import { HOME } from "@/constants/testIds";
import { BookingWidget } from "@/components/BookingWidget";
import { ApartmentCard } from "@/components/ApartmentCard";
import { Seo } from "@/components/Seo";
import { fetchHomeApartments } from "@/lib/api";
import {
  lodgingBusinessLd,
  websiteLd,
  breadcrumbLd,
  faqLd,
} from "@/lib/structuredData";
import { useLanguage } from "@/i18n/LanguageContext";

const HERO_IMAGE =
  "/images/hero-outdoor-apartments.jpg";
const ABOUT_IMAGE =
  "/images/chi-siamo-outdoor-apartments.webp";
const CTA_IMAGE =
  "/images/apartments/pila-1800/002.jpg";

const fade = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

export default function Home() {
  const { t } = useLanguage();
  const { data: featured = [] } = useQuery({
    queryKey: ["home-apartments"],
    queryFn: fetchHomeApartments,
  });
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = Array.isArray(t("home.faqs")) ? t("home.faqs") : [];

  return (
    <div className="bg-[#0A0A0A]">
      <Seo
        path="/"
        jsonLd={[
          websiteLd(),
          lodgingBusinessLd(featured),
          breadcrumbLd([{ name: t("nav.home"), path: "/" }]),
          faqs.length ? faqLd(faqs) : null,
        ].filter(Boolean)}
      />
      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src={HERO_IMAGE}
          alt="Appartamenti e chalet a Pila, Valle d'Aosta — vacanze sulla neve"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="grain" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/70 mb-8"
          >
            {t("home.heroSub")}
          </motion.p>
          <motion.h1
            data-testid={HOME.heroTitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.02] max-w-5xl"
          >
            Outdoor <span className="italic text-white/80">Apartments</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55 }}
            className="mt-8 text-white/70 max-w-xl text-base md:text-lg leading-relaxed"
          >
            {t("home.heroClaim")}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.75 }}
            className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto"
          >
            <a
              href="#booking"
              data-testid={HOME.heroCta}
              className="w-full sm:w-auto justify-center inline-flex items-center gap-3 bg-[#2E4F3E] text-white hover:bg-[#233B2E] active:scale-[0.99] transition-all px-8 sm:px-10 py-4 text-xs tracking-[0.28em] uppercase"
            >
              {t("home.bookStay")} <ArrowRight size={14} />
            </a>
            <Link
              to="/appartamenti"
              className="w-full sm:w-auto justify-center inline-flex items-center gap-3 border border-white/40 hover:border-white hover:bg-white hover:text-black text-white active:bg-white/10 transition-all px-8 sm:px-10 py-4 text-xs tracking-[0.28em] uppercase"
            >
              {t("home.exploreApartments")}
            </Link>
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-white/60">
          <div className="w-px h-16 bg-white/30 mb-3 animate-pulse" />
          <span className="text-[10px] uppercase tracking-[0.32em]">{t("common.scroll")}</span>
        </div>
      </section>

      {/* CHI SIAMO / ABOUT US */}
      <section
        id="chi-siamo"
        data-testid={HOME.aboutSection}
        className="py-24 md:py-40 px-6 md:px-10"
      >
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="relative aspect-[4/5] overflow-hidden order-2 lg:order-1"
          >
            <img
              src={ABOUT_IMAGE}
              alt="Interno chalet alpino"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="order-1 lg:order-2"
          >
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#5F8F76] mb-6">
              {t("home.aboutTag")}
            </p>
            <h2 className="font-serif-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-10">
              {t("home.aboutTitle")}
            </h2>
            <div className="space-y-6 text-white/70 text-base md:text-lg leading-relaxed max-w-lg">
              <p>{t("home.aboutP1")}</p>
              <p>{t("home.aboutP2")}</p>
            </div>
            <div className="mt-12 flex items-center gap-5 text-white/50">
              <MapPin size={16} className="text-[#5F8F76]" />
              <span className="text-xs uppercase tracking-[0.28em]">
                Pila (AO) · Valle d'Aosta · Italia
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="px-6 md:px-10 pb-24 md:pb-32">
        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-[1400px] mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-12 items-end">
            <div className="lg:col-span-2">
              <p className="text-[10px] uppercase tracking-[0.32em] text-[#5F8F76] mb-6">
                {t("booking.directBooking")}
              </p>
              <h2 className="font-serif-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
                {t("booking.title")}
              </h2>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              {t("apartmentDetail.bookingBoxSub")}
            </p>
          </div>
          <BookingWidget />
        </motion.div>
      </section>

      {/* FEATURED APARTMENTS */}
      <section className="py-24 md:py-32 px-6 md:px-10 bg-[#0f0f0f]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
          >
            <div>
              <p className="text-[10px] uppercase tracking-[0.32em] text-[#5F8F76] mb-6">
                {t("home.featuredTag")}
              </p>
              <h2 className="font-serif-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
                {t("home.featuredTitle")}
              </h2>
            </div>
            <Link
              to="/appartamenti"
              className="inline-flex items-center gap-3 text-white/70 hover:text-white transition-colors text-xs uppercase tracking-[0.28em]"
            >
              {t("home.viewAllApartments")} <ArrowRight size={14} />
            </Link>
          </motion.div>

          <div
            data-testid={HOME.featuredGrid}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-14"
          >
            {featured.map((apt, i) => (
              <ApartmentCard key={apt.id} apartment={apt} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* PILLARS / PERCHÉ SCEGLIERCI */}
      <section className="py-24 md:py-32 px-6 md:px-10 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-2xl mb-16"
          >
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#5F8F76] mb-6">
              {t("home.pillarsTag")}
            </p>
            <h2 className="font-serif-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              {t("home.pillarsTitle")}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            <div className="p-8 border border-white/10 bg-[#121212] space-y-4">
              <div className="w-10 h-10 flex items-center justify-center border border-white/15 text-[#5F8F76]">
                <Snowflake size={18} />
              </div>
              <h3 className="font-serif-display text-2xl text-white">{t("home.pillar1Title")}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{t("home.pillar1Desc")}</p>
            </div>

            <div className="p-8 border border-white/10 bg-[#121212] space-y-4">
              <div className="w-10 h-10 flex items-center justify-center border border-white/15 text-[#5F8F76]">
                <HeartHandshake size={18} />
              </div>
              <h3 className="font-serif-display text-2xl text-white">{t("home.pillar2Title")}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{t("home.pillar2Desc")}</p>
            </div>

            <div className="p-8 border border-white/10 bg-[#121212] space-y-4">
              <div className="w-10 h-10 flex items-center justify-center border border-white/15 text-[#5F8F76]">
                <ShieldCheck size={18} />
              </div>
              <h3 className="font-serif-display text-2xl text-white">{t("home.pillar3Title")}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{t("home.pillar3Desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPRENSORIO PILA — LOCAL & GEO SEO */}
      <section className="py-24 md:py-32 px-6 md:px-10 border-t border-white/5 bg-[#0e0e0e]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
          >
            <div className="lg:col-span-6 space-y-6">
              <p className="text-[10px] uppercase tracking-[0.32em] text-[#5F8F76]">
                {t("home.pilaTag")}
              </p>
              <h2 className="font-serif-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
                {t("home.pilaTitle")}
              </h2>
              <p className="text-white/70 text-base md:text-lg leading-relaxed">
                {t("home.pilaDesc")}
              </p>
              <div className="pt-2">
                <Link
                  to="/appartamenti"
                  className="inline-flex items-center gap-3 text-[#5F8F76] hover:text-[#7bb195] transition-colors text-xs uppercase tracking-[0.28em]"
                >
                  {t("home.viewAllApartments")} <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-6">
              <div className="p-6 sm:p-8 border border-white/10 bg-[#141414]">
                <div className="text-2xl sm:text-3xl font-serif-display text-white mb-2">
                  {t("home.pilaStat1Val")}
                </div>
                <div className="text-xs uppercase tracking-[0.18em] text-white/60">
                  {t("home.pilaStat1Label")}
                </div>
              </div>
              <div className="p-6 sm:p-8 border border-white/10 bg-[#141414]">
                <div className="text-2xl sm:text-3xl font-serif-display text-white mb-2">
                  {t("home.pilaStat2Val")}
                </div>
                <div className="text-xs uppercase tracking-[0.18em] text-white/60">
                  {t("home.pilaStat2Label")}
                </div>
              </div>
              <div className="p-6 sm:p-8 border border-white/10 bg-[#141414]">
                <div className="text-2xl sm:text-3xl font-serif-display text-white mb-2">
                  {t("home.pilaStat3Val")}
                </div>
                <div className="text-xs uppercase tracking-[0.18em] text-white/60">
                  {t("home.pilaStat3Label")}
                </div>
              </div>
              <div className="p-6 sm:p-8 border border-white/10 bg-[#141414]">
                <div className="text-2xl sm:text-3xl font-serif-display text-white mb-2">
                  {t("home.pilaStat4Val")}
                </div>
                <div className="text-xs uppercase tracking-[0.18em] text-white/60">
                  {t("home.pilaStat4Label")}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 px-6 md:px-10 bg-[#0f0f0f]">
        <div className="max-w-[1000px] mx-auto">
          <motion.div
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-14"
          >
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#5F8F76] mb-6">
              {t("home.faqTag")}
            </p>
            <h2 className="font-serif-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              {t("home.faqTitle")}
            </h2>
          </motion.div>

          <div className="divide-y divide-white/10 border-t border-white/10">
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={i} data-testid={`faq-item-${i}`}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? -1 : i)}
                    className="w-full flex items-center justify-between gap-6 py-7 text-left group"
                    aria-expanded={open}
                  >
                    <span className="font-serif-display text-xl md:text-2xl text-white group-hover:text-[#B7CFC0] transition-colors">
                      {f.q}
                    </span>
                    <span className="text-[#5F8F76] flex-shrink-0">
                      {open ? <Minus size={20} /> : <Plus size={20} />}
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      open ? "max-h-96 pb-8" : "max-h-0"
                    }`}
                  >
                    <p className="text-white/70 text-base leading-relaxed max-w-3xl">
                      {f.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA HOST */}
      <section className="relative py-32 md:py-48 px-6 md:px-10 overflow-hidden">
        <img
          src={CTA_IMAGE}
          alt="Chalet in montagna a Pila — servizio di gestione immobili"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#B7CFC0] mb-6">
              {t("home.ctaHostTag")}
            </p>
            <h2 className="font-serif-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-8">
              {t("home.ctaHostTitle")}
            </h2>
            <p className="text-white/70 text-base md:text-lg leading-relaxed mb-12">
              {t("home.ctaHostDesc")}
            </p>
            <Link
              to="/affidaci-il-tuo-immobile"
              data-testid={HOME.ctaHost}
              className="inline-flex items-center gap-3 bg-white text-black hover:bg-white/90 transition-colors duration-300 px-10 py-4 text-xs tracking-[0.28em] uppercase"
            >
              {t("home.ctaHostBtn")} <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
