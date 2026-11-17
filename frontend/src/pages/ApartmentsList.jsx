import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { ApartmentCard } from "@/components/ApartmentCard";
import { Seo } from "@/components/Seo";
import { fetchApartments } from "@/lib/api";
import { itemListLd, breadcrumbLd } from "@/lib/structuredData";
import { APT } from "@/constants/testIds";
import { useLanguage } from "@/i18n/LanguageContext";

const HEADER_IMAGE =
  "/images/apartments/pila-1800/001.jpg";

export default function ApartmentsList() {
  const { t } = useLanguage();
  const { data: apartments = [], isLoading } = useQuery({
    queryKey: ["apartments"],
    queryFn: fetchApartments,
  });

  return (
    <div className="bg-[#0A0A0A] min-h-screen">
      <Seo
        title={t("apartmentsList.title")}
        description={t("apartmentsList.subtitle")}
        path="/appartamenti"
        jsonLd={[
          breadcrumbLd([
            { name: t("nav.home"), path: "/" },
            { name: t("nav.apartments"), path: "/appartamenti" },
          ]),
          apartments.length ? itemListLd(apartments) : null,
        ].filter(Boolean)}
      />
      {/* HEADER */}
      <section className="relative h-[55vh] sm:h-[70vh] w-full overflow-hidden">
        <img
          src={HEADER_IMAGE}
          alt="Appartamenti Pila"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 h-full flex flex-col items-start justify-end px-5 sm:px-6 md:px-10 pb-12 sm:pb-16 md:pb-24 max-w-[1400px] mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-[10px] uppercase tracking-[0.32em] text-[#B7CFC0] mb-4 sm:mb-6"
          >
            {t("apartmentsList.tag")}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="font-serif-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.02] max-w-4xl"
          >
            {t("apartmentsList.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="mt-4 sm:mt-6 text-white/70 text-sm sm:text-base md:text-lg max-w-xl"
          >
            {t("apartmentsList.subtitle")}
          </motion.p>
        </div>
      </section>

      {/* GRID */}
      <section className="py-14 sm:py-24 md:py-32 px-5 sm:px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          {isLoading ? (
            <p className="text-white/50 text-sm">{t("common.loading")}</p>
          ) : (
            <div
              data-testid={APT.list}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14"
            >
              {apartments.map((apt, i) => (
                <ApartmentCard key={apt.id} apartment={apt} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
