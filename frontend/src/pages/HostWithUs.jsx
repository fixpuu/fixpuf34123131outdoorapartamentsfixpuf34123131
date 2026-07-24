import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { submitHostRequest } from "@/lib/api";
import { Seo } from "@/components/Seo";
import { breadcrumbLd } from "@/lib/structuredData";
import { HOST } from "@/constants/testIds";

const HEADER_IMAGE =
  "https://images.unsplash.com/photo-1545158535-c3f7168c28b6";

const initial = {
  full_name: "",
  phone: "",
  property_address: "",
  email: "",
  description: "",
};

export default function HostWithUs() {
  const [form, setForm] = useState(initial);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const setField = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const validate = () => {
    const e = {};
    if (!form.full_name.trim() || form.full_name.trim().length < 2)
      e.full_name = "Inserisci nome e cognome";
    if (!form.phone.trim() || form.phone.trim().length < 4)
      e.phone = "Inserisci un numero di telefono valido";
    if (!form.property_address.trim() || form.property_address.trim().length < 4)
      e.property_address = "Inserisci l'indirizzo dell'immobile";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Inserisci un'email valida";
    if (!privacyAccepted)
      e.privacy = "Per inviare la richiesta devi accettare l'informativa privacy";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      await submitHostRequest(form);
      setSuccess(true);
      setForm(initial);
      setPrivacyAccepted(false);
      toast.success("Richiesta inviata correttamente. Ti contatteremo a breve.");
    } catch (err) {
      toast.error("Errore nell'invio. Riprova tra qualche istante.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-[#0A0A0A] min-h-screen">
      <Seo
        title="Affidaci il tuo immobile — Gestione appartamenti a Pila"
        description="Sei proprietario di un appartamento a Pila, Valle d'Aosta? Affidalo in gestione a Outdoor Apartments: promozione, prenotazioni, check-in, pulizie e rendicontazione trasparente. Richiedi informazioni."
        path="/affidaci-il-tuo-immobile"
        jsonLd={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Affidaci il tuo immobile", path: "/affidaci-il-tuo-immobile" },
        ])}
      />
      {/* HEADER */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <img
          src={HEADER_IMAGE}
          alt="Chalet in montagna a Pila — gestione immobili per proprietari"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 h-full flex flex-col items-start justify-end px-6 md:px-10 pb-16 md:pb-24 max-w-[1400px] mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-[10px] uppercase tracking-[0.32em] text-[#B7CFC0] mb-6"
          >
            Per i proprietari
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="font-serif-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.02] max-w-4xl"
          >
            Affidaci <span className="italic">il tuo immobile.</span>
          </motion.h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#5F8F76] mb-6">
              Il nostro servizio
            </p>
            <h2 className="font-serif-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-10">
              Gestione professionale, <span className="italic">senza pensieri.</span>
            </h2>
            <div className="space-y-6 text-white/70 text-base md:text-lg leading-relaxed max-w-lg">
              <p>
                Ci occupiamo dell'intero ciclo di ospitalità del tuo appartamento a
                Pila: promozione multi-canale, gestione delle prenotazioni, accoglienza
                degli ospiti, pulizie, manutenzione e assistenza continua.
              </p>
              <p>
                Tu ricevi rendimenti chiari, report trasparenti e la tranquillità di
                sapere che la tua casa è in mani esperte. Il resto lo facciamo noi.
              </p>
            </div>

            <ul className="mt-14 space-y-5">
              {[
                "Promozione su portali e canale diretto",
                "Check-in e check-out gestiti dal nostro team",
                "Pulizie e biancheria professionali",
                "Manutenzione ordinaria e straordinaria",
                "Reportistica e rendicontazione mensile",
              ].map((item) => (
                <li key={item} className="flex items-start gap-4 text-white/85">
                  <Check size={16} className="text-[#5F8F76] mt-1" />
                  <span className="text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="bg-[#141414] border border-white/10 p-8 md:p-12"
          >
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#5F8F76] mb-4">
              Richiedi informazioni
            </p>
            <h3 className="font-serif-display text-3xl md:text-4xl mb-10 leading-tight">
              Parliamone.
            </h3>

            {success ? (
              <div
                data-testid={HOST.success}
                className="border border-[#5F8F76]/40 bg-[#2E4F3E]/15 p-8 text-center"
              >
                <Check size={28} className="mx-auto text-[#5F8F76] mb-4" />
                <h4 className="font-serif-display text-2xl mb-3">
                  Richiesta ricevuta.
                </h4>
                <p className="text-white/70 text-sm leading-relaxed">
                  Grazie per averci contattato. Il nostro team ti risponderà entro
                  48 ore.
                </p>
                <button
                  type="button"
                  onClick={() => setSuccess(false)}
                  className="mt-8 text-xs uppercase tracking-[0.28em] text-[#5F8F76] hover:text-white transition-colors"
                >
                  Invia un'altra richiesta
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                data-testid={HOST.form}
                className="space-y-8"
              >
                <Field
                  label="Nome e cognome *"
                  error={errors.full_name}
                >
                  <input
                    type="text"
                    data-testid={HOST.fullName}
                    value={form.full_name}
                    onChange={(e) => setField("full_name", e.target.value)}
                    className="w-full bg-transparent border-b border-white/20 focus:border-white outline-none py-3 text-white text-sm"
                    placeholder="Mario Rossi"
                  />
                </Field>
                <Field label="Numero di telefono *" error={errors.phone}>
                  <input
                    type="tel"
                    data-testid={HOST.phone}
                    value={form.phone}
                    onChange={(e) => setField("phone", e.target.value)}
                    className="w-full bg-transparent border-b border-white/20 focus:border-white outline-none py-3 text-white text-sm"
                    placeholder="+39 333 000 0000"
                  />
                </Field>
                <Field
                  label="Indirizzo completo dell'immobile *"
                  error={errors.property_address}
                >
                  <input
                    type="text"
                    data-testid={HOST.address}
                    value={form.property_address}
                    onChange={(e) => setField("property_address", e.target.value)}
                    className="w-full bg-transparent border-b border-white/20 focus:border-white outline-none py-3 text-white text-sm"
                    placeholder="Via, numero civico, città (AO)"
                  />
                </Field>
                <Field label="Indirizzo email *" error={errors.email}>
                  <input
                    type="email"
                    data-testid={HOST.email}
                    value={form.email}
                    onChange={(e) => setField("email", e.target.value)}
                    className="w-full bg-transparent border-b border-white/20 focus:border-white outline-none py-3 text-white text-sm"
                    placeholder="tua@email.it"
                  />
                </Field>
                <Field label="Descrizione dell'immobile (facoltativo)">
                  <textarea
                    rows={4}
                    data-testid={HOST.description}
                    value={form.description}
                    onChange={(e) => setField("description", e.target.value)}
                    className="w-full bg-transparent border-b border-white/20 focus:border-white outline-none py-3 text-white text-sm resize-none"
                    placeholder="Metratura, numero di camere, servizi, note..."
                  />
                </Field>

                <div>
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      data-testid={HOST.privacyConsent}
                      checked={privacyAccepted}
                      onChange={(e) => setPrivacyAccepted(e.target.checked)}
                      className="mt-1 w-4 h-4 accent-[#2E4F3E] cursor-pointer flex-shrink-0"
                    />
                    <span className="text-xs text-white/70 leading-relaxed">
                      Ho letto e accetto l'
                      <Link
                        to="/privacy-policy"
                        target="_blank"
                        rel="noopener"
                        className="underline text-[#B7CFC0] hover:text-white transition-colors"
                      >
                        Informativa Privacy
                      </Link>{" "}
                      e autorizzo il trattamento dei miei dati per la finalità di
                      contatto commerciale. *
                    </span>
                  </label>
                  {errors.privacy && (
                    <p className="mt-2 text-[11px] text-red-400/80">{errors.privacy}</p>
                  )}
                </div>

                <button
                  type="submit"
                  data-testid={HOST.submit}
                  disabled={submitting}
                  className="w-full inline-flex items-center justify-center gap-3 bg-[#2E4F3E] text-white hover:bg-[#233B2E] disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300 px-10 py-4 text-xs tracking-[0.28em] uppercase"
                >
                  {submitting ? "Invio in corso…" : (
                    <>Invia richiesta <Send size={14} /></>
                  )}
                </button>
                <p className="text-white/40 text-[11px] leading-relaxed">
                  I dati saranno trattati esclusivamente per rispondere alla tua
                  richiesta. Vedi Informativa Privacy per dettagli.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

const Field = ({ label, error, children }) => (
  <div>
    <label className="block text-[10px] uppercase tracking-[0.22em] text-white/50 mb-2">
      {label}
    </label>
    {children}
    {error && (
      <p className="mt-2 text-[11px] text-red-400/80">{error}</p>
    )}
  </div>
);
