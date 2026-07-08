import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { ArrowRight, MapPin } from "lucide-react";
import { HOME } from "@/constants/testIds";
import { BookingWidget } from "@/components/BookingWidget";
import { ApartmentCard } from "@/components/ApartmentCard";
import { fetchApartments } from "@/lib/api";

const HERO_IMAGE =
  "https://images.pexels.com/photos/30372740/pexels-photo-30372740.jpeg";
const ABOUT_IMAGE =
  "https://images.pexels.com/photos/17180776/pexels-photo-17180776.jpeg";
const CTA_IMAGE =
  "https://images.unsplash.com/photo-1550503736-c1a2c9033c03";

const LOGO_URL =
  "https://customer-assets.emergentagent.com/job_0edc567d-bda4-4c1d-90f5-e4bdc5cabf5a/artifacts/tnx5w7d9_image.png";

const fade = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

export default function Home() {
  const { data: apartments = [] } = useQuery({
    queryKey: ["apartments"],
    queryFn: fetchApartments,
  });

  const featured = apartments.slice(0, 4);

  return (
    <div className="bg-[#0A0A0A]">
      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src={HERO_IMAGE}
          alt="Pila, Valle d'Aosta"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="grain" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            src={LOGO_URL}
            alt="Outdoor Apartments"
            className="w-20 h-20 md:w-24 md:h-24 mb-10"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/70 mb-6"
          >
            Pila — Valle d'Aosta — 1800 m
          </motion.p>
          <motion.h1
            data-testid={HOME.heroTitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.02] max-w-5xl"
          >
            Outdoor <span className="italic text-white/80">Apartments</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55 }}
            className="mt-8 text-white/70 max-w-xl text-base md:text-lg leading-relaxed"
          >
            La tua vacanza in montagna a Pila.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.75 }}
            className="mt-12 flex flex-col sm:flex-row items-center gap-5"
          >
            <a
              href="#booking"
              data-testid={HOME.heroCta}
              className="inline-flex items-center gap-3 bg-[#2E4F3E] text-white hover:bg-[#233B2E] transition-colors duration-300 px-10 py-4 text-xs tracking-[0.28em] uppercase"
            >
              Prenota il tuo soggiorno <ArrowRight size={14} />
            </a>
            <Link
              to="/appartamenti"
              className="inline-flex items-center gap-3 border border-white/40 hover:border-white hover:bg-white hover:text-black text-white transition-colors duration-300 px-10 py-4 text-xs tracking-[0.28em] uppercase"
            >
              Scopri gli appartamenti
            </Link>
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-white/60">
          <div className="w-px h-16 bg-white/30 mb-3 animate-pulse" />
          <span className="text-[10px] uppercase tracking-[0.32em]">Scorri</span>
        </div>
      </section>

      {/* CHI SIAMO */}
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
              Chi siamo
            </p>
            <h2 className="font-serif-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-10">
              L'ospitalità <span className="italic">in alta quota.</span>
            </h2>
            <div className="space-y-6 text-white/70 text-base md:text-lg leading-relaxed max-w-lg">
              <p>
                Outdoor Apartments gestisce appartamenti e chalet in affitto
                turistico a Pila, in Valle d'Aosta. Un comprensorio sciistico
                intimo, affacciato sul Monte Bianco, dove la montagna diventa
                casa.
              </p>
              <p>
                Ci prendiamo cura delle strutture come fossero nostre: un
                servizio di gestione professionale per i proprietari, un'ospitalità
                curata nei dettagli per chi sceglie di soggiornare da noi.
              </p>
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
                Prenotazione
              </p>
              <h2 className="font-serif-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
                Verifica disponibilità <span className="italic">in tempo reale.</span>
              </h2>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              Il nostro sistema di prenotazione diretta ti permette di verificare
              disponibilità e tariffe senza intermediari.
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
                I nostri appartamenti
              </p>
              <h2 className="font-serif-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
                Una collezione <br />
                <span className="italic">curata di rifugi.</span>
              </h2>
            </div>
            <Link
              to="/appartamenti"
              className="inline-flex items-center gap-3 text-white/70 hover:text-white transition-colors text-xs uppercase tracking-[0.28em]"
            >
              Vedi tutti <ArrowRight size={14} />
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

      {/* CTA HOST */}
      <section className="relative py-32 md:py-48 px-6 md:px-10 overflow-hidden">
        <img
          src={CTA_IMAGE}
          alt="Chalet in montagna"
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
              Sei un proprietario?
            </p>
            <h2 className="font-serif-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-8">
              Affidaci <span className="italic">il tuo immobile.</span>
            </h2>
            <p className="text-white/70 text-base md:text-lg leading-relaxed mb-12">
              Gestione professionale, ospitalità curata e trasparenza. Portiamo il
              tuo appartamento a Pila al livello che merita.
            </p>
            <Link
              to="/affidaci-il-tuo-immobile"
              data-testid={HOME.ctaHost}
              className="inline-flex items-center gap-3 bg-white text-black hover:bg-white/90 transition-colors duration-300 px-10 py-4 text-xs tracking-[0.28em] uppercase"
            >
              Scopri il servizio <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
