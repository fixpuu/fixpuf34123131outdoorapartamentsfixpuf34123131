import { Link } from "react-router-dom";
import { Instagram, Mail, Phone, Cookie, ShieldCheck } from "lucide-react";
import { useConsent } from "@/context/ConsentContext";
import { FOOTER } from "@/constants/testIds";
import { SITE } from "@/lib/siteConfig";
import { useLanguage } from "@/i18n/LanguageContext";
import { LanguageSelector } from "@/components/LanguageSelector";

const LOGO_URL =
  "https://customer-assets.emergentagent.com/job_0edc567d-bda4-4c1d-90f5-e4bdc5cabf5a/artifacts/tnx5w7d9_image.png";

export const Footer = () => {
  const { reopenBanner } = useConsent();
  const { t } = useLanguage();

  return (
    <footer
      data-testid={FOOTER.root}
      id="contatti"
      className="relative bg-black border-t border-white/10 pt-16 md:pt-24 pb-12 pb-safe px-5 sm:px-6 md:px-10"
    >
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-14">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-3">
            <img src={LOGO_URL} alt="Outdoor Apartments" className="w-12 h-12" />
            <span className="font-serif-display text-2xl">
              Outdoor <span className="italic text-white/70">Apartments</span>
            </span>
          </Link>
          <p className="mt-6 text-white/60 max-w-md leading-relaxed text-sm">
            {t("footer.desc")}
          </p>
          <div className="mt-6 text-xs text-white/45 space-y-1 font-mono">
            <p className="font-semibold text-white/70 font-sans">{SITE.legalName}</p>
            <p>Sede legale: {SITE.legalAddress}</p>
            <p>P.IVA: {SITE.vatId} | C.F.: {SITE.fiscalCode} | REA: {SITE.rea}</p>
            <p>PEC: <a href={`mailto:${SITE.pec}`} className="underline hover:text-white">{SITE.pec}</a></p>
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-white/40 mb-5">
            {t("footer.navTitle")}
          </p>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="text-white/80 hover:text-white transition-colors">{t("nav.home")}</Link></li>
            <li><Link to="/appartamenti" className="text-white/80 hover:text-white transition-colors">{t("nav.apartments")}</Link></li>
            <li><Link to="/affidaci-il-tuo-immobile" className="text-white/80 hover:text-white transition-colors">{t("nav.hostWithUs")}</Link></li>
            <li><Link to="/contatti" className="text-white/80 hover:text-white transition-colors">{t("nav.contact")}</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-white/40 mb-5">
            {t("footer.contactTitle")}
          </p>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3 text-white/80">
              <Mail size={14} className="text-[#5F8F76]" />
              <a href={`mailto:${SITE.email}`} className="hover:text-white transition-colors">
                {SITE.email}
              </a>
            </li>
            <li className="flex items-center gap-3 text-white/80">
              <Phone size={14} className="text-[#5F8F76]" />
              <a href={`tel:${SITE.phoneRaw}`} className="hover:text-white transition-colors">
                {SITE.phone}
              </a>
            </li>
          </ul>

          <div className="mt-6">
            <p className="text-[10px] uppercase tracking-[0.24em] text-white/40 mb-3">
              {t("lang.chooseLang")}
            </p>
            <LanguageSelector variant="segmented" className="max-w-[240px]" />
          </div>

          <div className="flex gap-4 mt-6">
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram @outdoor_apartments"
              className="p-2 border border-white/15 hover:border-white transition-colors text-white/80 hover:text-white"
            >
              <Instagram size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <ShieldCheck size={14} className="text-[#5F8F76]" />
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} {SITE.legalName} — {t("footer.copyright")}
          </p>
        </div>
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] uppercase tracking-[0.22em] text-white/50">
          <li>
            <Link to="/privacy-policy" data-testid={FOOTER.privacyLink} className="hover:text-white transition-colors">
              {t("footer.privacy")}
            </Link>
          </li>
          <li>
            <Link to="/cookie-policy" data-testid={FOOTER.cookieLink} className="hover:text-white transition-colors">
              {t("footer.cookie")}
            </Link>
          </li>
          <li>
            <Link to="/note-legali" data-testid={FOOTER.legalLink} className="hover:text-white transition-colors">
              {t("footer.legalNotes")}
            </Link>
          </li>
          <li>
            <button
              type="button"
              onClick={reopenBanner}
              data-testid={FOOTER.cookieManage}
              className="inline-flex items-center gap-2 hover:text-white transition-colors"
            >
              <Cookie size={12} /> {t("footer.manageCookies")}
            </button>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
