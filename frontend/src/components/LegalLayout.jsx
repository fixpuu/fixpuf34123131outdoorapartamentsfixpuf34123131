import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import { Seo } from "@/components/Seo";

/**
 * Legal Layout — wrapper condiviso per le pagine legali.
 * Include un banner ben visibile che segnala la natura di BOZZA dei testi,
 * da far validare da un consulente privacy o avvocato prima della pubblicazione.
 */
export const LegalLayout = ({ eyebrow, title, updated, seoPath, seoDescription, children }) => (
  <div className="bg-[#0A0A0A] min-h-screen">
    <Seo title={eyebrow} description={seoDescription} path={seoPath} />
    <section className="pt-40 pb-16 px-6 md:px-10 border-b border-white/10">
      <div className="max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-[10px] uppercase tracking-[0.32em] text-[#5F8F76] mb-6"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-serif-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]"
        >
          {title}
        </motion.h1>
        {updated && (
          <p className="mt-6 text-white/50 text-xs uppercase tracking-widest">
            Ultimo aggiornamento: {updated}
          </p>
        )}
      </div>
    </section>

    <section className="py-14 px-6 md:px-10">
      <div className="max-w-3xl mx-auto">
        <div className="mb-14 border border-[#5F8F76]/40 bg-[#2E4F3E]/10 p-5 flex items-start gap-4">
          <AlertTriangle size={18} className="text-[#5F8F76] mt-0.5 flex-shrink-0" />
          <p className="text-sm text-white/80 leading-relaxed">
            <strong className="text-white">Bozza / placeholder.</strong> I contenuti di
            questa pagina sono un testo tipo strutturato e vanno sottoposti a un
            consulente privacy o avvocato prima della pubblicazione definitiva. I
            campi tra parentesi quadre <code className="text-[#B7CFC0]">[…]</code>{" "}
            devono essere compilati con i dati reali dell'azienda.
          </p>
        </div>
        <div className="prose-legal text-white/75 text-[15px] leading-[1.75] space-y-8">
          {children}
        </div>
      </div>
    </section>
  </div>
);

export const LegalSection = ({ n, title, children }) => (
  <section>
    <h2 className="font-serif-display text-2xl md:text-3xl text-white mb-4">
      {n && <span className="text-white/40 mr-3">{n}.</span>}
      {title}
    </h2>
    <div className="space-y-4">{children}</div>
  </section>
);
