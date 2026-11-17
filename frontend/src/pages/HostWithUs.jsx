import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { Seo } from "@/components/Seo";
import { breadcrumbLd } from "@/lib/structuredData";
import { HOST } from "@/constants/testIds";
import { SITE } from "@/lib/siteConfig";
import { useLanguage } from "@/i18n/LanguageContext";

const HEADER_IMAGE =
  "/images/chi-siamo-outdoor-apartments.webp";

const initial = {
  full_name: "",
  phone: "",
  property_address: "",
  email: "",
  description: "",
};

export default function HostWithUs() {
  const { lang, t } = useLanguage();
  const [form, setForm] = useState(initial);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const setField = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const validate = () => {
    const e = {};
    if (!form.full_name.trim() || form.full_name.trim().length < 2)
      e.full_name = lang === "it" ? "Inserisci nome e cognome" : lang === "fr" ? "Veuillez saisir votre nom et prénom" : "Please enter your full name";
    if (!form.phone.trim() || form.phone.trim().length < 4)
      e.phone = lang === "it" ? "Inserisci un numero di telefono valido" : lang === "fr" ? "Veuillez saisir un numéro de téléphone valide" : "Please enter a valid phone number";
    if (!form.property_address.trim() || form.property_address.trim().length < 4)
      e.property_address = lang === "it" ? "Inserisci l'indirizzo dell'immobile" : lang === "fr" ? "Veuillez saisir l'adresse du bien" : "Please enter property address";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = lang === "it" ? "Inserisci un'email valida" : lang === "fr" ? "Veuillez saisir une adresse e-mail valide" : "Please enter a valid email";
    if (!privacyAccepted)
      e.privacy = lang === "it" ? "Per inviare la richiesta devi accettare l'informativa privacy" : lang === "fr" ? "Veuillez accepter la politique de confidentialité" : "Please accept the privacy policy to proceed";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      const subject = encodeURIComponent("Nuova richiesta gestione: " + form.full_name);
      const body = encodeURIComponent(
        `Nome: ${form.full_name}\nTelefono: ${form.phone}\nEmail: ${form.email}\nIndirizzo immobile: ${form.property_address}\nDescrizione: ${form.description || 'Nessuna'}\nLingua: ${lang}\n`
      );
      window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
      
      setSuccess(true);
      setForm(initial);
      setPrivacyAccepted(false);
      toast.success(
        lang === "it"
          ? "Richiesta preparata. Si aprirà il tuo client email."
          : lang === "fr"
          ? "Demande préparée. Votre messagerie va s'ouvrir."
          : "Request prepared. Your email client will now open."
      );
    } catch (err) {
      toast.error(
        lang === "it"
          ? "Errore nell'invio. Riprova tra qualche istante."
          : lang === "fr"
          ? "Une erreur est survenue. Veuillez réessayer."
          : "Error preparing request. Please try again shortly."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const pillars = t("hostWithUs.pillars") || [];

  return (
    <div className="bg-[#0A0A0A] min-h-screen">
      <Seo
        title={
          lang === "it"
            ? "Affidaci il tuo immobile — Gestione appartamenti a Pila"
            : lang === "fr"
            ? "Confiez-nous votre bien — Gestion locative à Pila"
            : "Host with us — Property Management in Pila"
        }
        description={t("hostWithUs.subtitle")}
        path="/affidaci-il-tuo-immobile"
        jsonLd={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: t("hostWithUs.title"), path: "/affidaci-il-tuo-immobile" },
        ])}
      />
      {/* HEADER */}
      <section className="relative h-[55vh] sm:h-[70vh] w-full overflow-hidden">
        <img
          src={HEADER_IMAGE}
          alt={t("hostWithUs.title")}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 h-full flex flex-col items-start justify-end px-5 sm:px-6 md:px-10 pb-12 sm:pb-16 md:pb-24 max-w-[1400px] mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-[10px] uppercase tracking-[0.32em] text-[#B7CFC0] mb-4 sm:mb-6"
          >
            {t("hostWithUs.tag")}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="font-serif-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.02] max-w-4xl"
          >
            {t("hostWithUs.title")}
          </motion.h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-14 sm:py-24 md:py-32 px-5 sm:px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#5F8F76] mb-6">
              {t("hostWithUs.introTag")}
            </p>
            <h2 className="font-serif-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-10">
              {t("hostWithUs.introTitle")}
            </h2>
            <div className="space-y-6 text-white/70 text-base md:text-lg leading-relaxed max-w-lg">
              <p>{t("hostWithUs.introDesc")}</p>
              <p>{t("hostWithUs.subtitle")}</p>
            </div>

            <div className="mt-12 space-y-6">
              {Array.isArray(pillars) &&
                pillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="border-l-2 border-[#5F8F76]/40 pl-5 py-1"
                  >
                    <h4 className="text-white text-base font-medium mb-1">
                      {pillar.title}
                    </h4>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
            </div>
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
              {t("hostWithUs.formTag")}
            </p>
            <h3 className="font-serif-display text-3xl md:text-4xl mb-6 leading-tight">
              {t("hostWithUs.formTitle")}
            </h3>
            <p className="text-white/60 text-sm mb-10 leading-relaxed">
              {t("hostWithUs.formDesc")}
            </p>

            {success ? (
              <div
                data-testid={HOST.success}
                className="border border-[#5F8F76]/40 bg-[#2E4F3E]/15 p-8 text-center"
              >
                <Check size={28} className="mx-auto text-[#5F8F76] mb-4" />
                <h4 className="font-serif-display text-2xl mb-3">
                  {t("hostWithUs.successTitle")}
                </h4>
                <p className="text-white/70 text-sm leading-relaxed">
                  {t("hostWithUs.successDesc")}
                </p>
                <button
                  type="button"
                  onClick={() => setSuccess(false)}
                  className="mt-8 text-xs uppercase tracking-[0.28em] text-[#5F8F76] hover:text-white transition-colors"
                >
                  {lang === "it"
                    ? "Invia un'altra richiesta"
                    : lang === "fr"
                    ? "Envoyer une autre demande"
                    : "Submit another request"}
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
                  label={t("hostWithUs.nameLabel")}
                  error={errors.full_name}
                >
                  <input
                    type="text"
                    data-testid={HOST.fullName}
                    value={form.full_name}
                    onChange={(e) => setField("full_name", e.target.value)}
                    className="w-full min-h-[44px] bg-transparent border-b border-white/20 focus:border-white outline-none py-2.5 text-white text-base md:text-sm"
                    placeholder={t("hostWithUs.namePlaceholder")}
                  />
                </Field>
                <Field label={t("hostWithUs.phoneLabel")} error={errors.phone}>
                  <input
                    type="tel"
                    data-testid={HOST.phone}
                    value={form.phone}
                    onChange={(e) => setField("phone", e.target.value)}
                    className="w-full min-h-[44px] bg-transparent border-b border-white/20 focus:border-white outline-none py-2.5 text-white text-base md:text-sm"
                    placeholder={t("hostWithUs.phonePlaceholder")}
                  />
                </Field>
                <Field
                  label={t("hostWithUs.addressLabel")}
                  error={errors.property_address}
                >
                  <input
                    type="text"
                    data-testid={HOST.address}
                    value={form.property_address}
                    onChange={(e) => setField("property_address", e.target.value)}
                    className="w-full min-h-[44px] bg-transparent border-b border-white/20 focus:border-white outline-none py-2.5 text-white text-base md:text-sm"
                    placeholder={t("hostWithUs.addressPlaceholder")}
                  />
                </Field>
                <Field label={t("hostWithUs.emailLabel")} error={errors.email}>
                  <input
                    type="email"
                    data-testid={HOST.email}
                    value={form.email}
                    onChange={(e) => setField("email", e.target.value)}
                    className="w-full min-h-[44px] bg-transparent border-b border-white/20 focus:border-white outline-none py-2.5 text-white text-base md:text-sm"
                    placeholder={t("hostWithUs.emailPlaceholder")}
                  />
                </Field>
                <Field label={t("hostWithUs.descLabel")}>
                  <textarea
                    rows={4}
                    data-testid={HOST.description}
                    value={form.description}
                    onChange={(e) => setField("description", e.target.value)}
                    className="w-full bg-transparent border-b border-white/20 focus:border-white outline-none py-2.5 text-white text-base md:text-sm resize-none"
                    placeholder={t("hostWithUs.descPlaceholder")}
                  />
                </Field>

                <div>
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      data-testid={HOST.privacyConsent}
                      checked={privacyAccepted}
                      onChange={(e) => setPrivacyAccepted(e.target.checked)}
                      className="mt-1 w-5 h-5 accent-[#2E4F3E] cursor-pointer flex-shrink-0"
                    />
                    <span className="text-xs text-white/70 leading-relaxed">
                      {t("hostWithUs.privacyNotice")}{" "}
                      <Link
                        to="/privacy-policy"
                        target="_blank"
                        rel="noopener"
                        className="underline text-[#B7CFC0] hover:text-white transition-colors"
                      >
                        {t("footer.privacy")}
                      </Link>
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
                  className="w-full min-h-[48px] inline-flex items-center justify-center gap-3 bg-[#2E4F3E] text-white hover:bg-[#233B2E] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed transition-all px-8 py-4 text-xs tracking-[0.24em] uppercase touch-manipulation font-medium"
                >
                  {submitting ? (
                    t("hostWithUs.submitting")
                  ) : (
                    <>
                      {t("hostWithUs.submitBtn")} <Send size={14} />
                    </>
                  )}
                </button>
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
