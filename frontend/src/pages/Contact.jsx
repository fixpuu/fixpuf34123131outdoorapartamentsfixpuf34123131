import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

const IMG =
  "https://images.unsplash.com/photo-1517404656827-b10222b9ec59";

export default function Contact() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen">
      <section className="relative h-[60vh] w-full overflow-hidden">
        <img src={IMG} alt="Pila" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 h-full flex flex-col items-start justify-end px-6 md:px-10 pb-16 max-w-[1400px] mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-[10px] uppercase tracking-[0.32em] text-[#B7CFC0] mb-6"
          >
            Contatti
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="font-serif-display text-5xl sm:text-6xl md:text-7xl leading-[1.02]"
          >
            Restiamo <span className="italic">in contatto.</span>
          </motion.h1>
        </div>
      </section>

      <section className="py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#5F8F76] mb-6">
              Outdoor Apartments
            </p>
            <h2 className="font-serif-display text-4xl md:text-5xl leading-[1.05] mb-10">
              Pila, <span className="italic">Valle d'Aosta.</span>
            </h2>
            <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-md">
              Il nostro team è a disposizione per ogni informazione sui soggiorni,
              sugli appartamenti gestiti e sul servizio dedicato ai proprietari.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="space-y-10"
          >
            <ContactRow icon={Mail} label="Email" value="info@outdoorapartments.it" href="mailto:info@outdoorapartments.it" />
            <ContactRow icon={Phone} label="Telefono" value="+39 000 000 0000" href="tel:+390000000000" />
            <ContactRow icon={MapPin} label="Sede" value="Frazione Pila, 11020 Pila (AO) — Italia" />

            <div className="pt-6 border-t border-white/10">
              <p className="text-[10px] uppercase tracking-[0.28em] text-white/50 mb-5">Social</p>
              <div className="flex gap-4">
                <a href="#" className="p-3 border border-white/15 hover:border-white transition-colors" aria-label="Instagram">
                  <Instagram size={16} />
                </a>
                <a href="#" className="p-3 border border-white/15 hover:border-white transition-colors" aria-label="Facebook">
                  <Facebook size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

const ContactRow = ({ icon: Icon, label, value, href }) => {
  const inner = (
    <div className="flex items-start gap-5">
      <span className="w-11 h-11 flex items-center justify-center border border-white/15 text-[#5F8F76] flex-shrink-0">
        <Icon size={16} />
      </span>
      <div>
        <p className="text-[10px] uppercase tracking-[0.28em] text-white/50 mb-1">{label}</p>
        <p className="text-white text-base md:text-lg">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block hover:opacity-80 transition-opacity">{inner}</a>
  ) : (
    <div>{inner}</div>
  );
};
