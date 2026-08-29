import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { ArrowRight, MapPin, Plus, Minus } from "lucide-react";
import { useState } from "react";
import { HOME } from "@/constants/testIds";
import { BookingWidget } from "@/components/BookingWidget";
import { ApartmentCard } from "@/components/ApartmentCard";
import { Seo } from "@/components/Seo";
import { fetchApartments } from "@/lib/api";
import {
  websiteLd,
  breadcrumbLd,
  faqLd,
} from "@/lib/structuredData";

const FAQS = [
  {
    q: "Dove si trovano gli appartamenti di Outdoor Apartments?",
    a: "Gli appartamenti e chalet gestiti da Outdoor Apartments si trovano a Pila, frazione del comune di Gressan in Valle d'Aosta (AO), a circa 1800 metri di altitudine, e nelle immediate vicinanze come Charvensod. Pila è un comprensorio sciistico collegato ad Aosta tramite telecabina.",
  },
  {
    q: "Gli appartamenti hanno lo sci ai piedi?",
    a: "Diversi appartamenti come White Relax, Pila 63 e Pila64 offrono l'accesso sci ai piedi (ski-in ski-out), permettendo di raggiungere le piste direttamente dall'alloggio. Ogni scheda appartamento indica i servizi disponibili.",
  },
  {
    q: "Come si prenota un appartamento a Pila?",
    a: "È possibile verificare disponibilità e prenotare direttamente dal sito tramite il sistema di prenotazione diretta, senza intermediari e senza commissioni aggiuntive dei portali.",
  },
  {
    q: "Quali servizi sono inclusi negli appartamenti?",
    a: "A seconda della struttura, gli appartamenti includono WiFi gratuito, parcheggio gratuito, camere non fumatori, camere familiari e in alcuni casi l'accesso sci ai piedi. Tutti gli alloggi sono seguiti da un team locale con ospitalità curata.",
  },
  {
    q: "Sono un proprietario: posso affidare il mio appartamento in gestione?",
    a: "Sì. Outdoor Apartments offre un servizio di gestione professionale per i proprietari di immobili a Pila: promozione, gestione prenotazioni, check-in, pulizie, manutenzione e rendicontazione trasparente. È possibile richiedere informazioni dalla pagina 'Affidaci il tuo immobile'.",
  },
];

// PLACEHOLDER IMAGE — Cima alpina innevata con boschi di conifere in primo piano,
// atmosfera Valle d'Aosta / Monte Emilius. Da sostituire con foto reali di Pila
// appena disponibili.
const HERO_IMAGE =
  "/images/apartments/pila-1800/001.jpg";
const ABOUT_IMAGE =
  "/images/chi-siamo-outdoor-apartments.png";
const CTA_IMAGE =
  "/images/apartments/pila-1800/002.jpg";

const fade = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

export default function Home() {
  const { data: apartments = [] } = useQuery({
    queryKey: ["apartments"],
    queryFn: fetchApartments,
  });
  const [openFaq, setOpenFaq] = useState(0);

  const featured = apartments.slice(0, 4);

  return (
    <div className="bg-[#0A0A0A]">
      <Seo
        path="/"
        jsonLd={[
          websiteLd(),
          breadcrumbLd([{ name: "Home", path: "/" }]),
          faqLd(FAQS),
        ]}
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
            Rifugi autentici, montagne davanti agli occhi e le piste a pochi passi.
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

      {/* FAQ — GEO / rich results */}
      <section className="py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-[1000px] mx-auto">
          <motion.div
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-14"
          >
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#5F8F76] mb-6">
              Domande frequenti
            </p>
            <h2 className="font-serif-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              Tutto su Pila <span className="italic">e i nostri appartamenti.</span>
            </h2>
          </motion.div>

          <div className="divide-y divide-white/10 border-t border-white/10">
            {FAQS.map((f, i) => {
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
