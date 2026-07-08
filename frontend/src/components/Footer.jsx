import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, Phone, Cookie } from "lucide-react";
import { useConsent } from "@/context/ConsentContext";
import { FOOTER } from "@/constants/testIds";

const LOGO_URL =
  "https://customer-assets.emergentagent.com/job_0edc567d-bda4-4c1d-90f5-e4bdc5cabf5a/artifacts/tnx5w7d9_image.png";

export const Footer = () => {
  const { reopenBanner } = useConsent();
  return (
    <footer
      data-testid={FOOTER.root}
      id="contatti"
      className="relative bg-black border-t border-white/10 pt-24 pb-10 px-6 md:px-10"
    >
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-14">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-3">
            <img src={LOGO_URL} alt="Outdoor Apartments" className="w-12 h-12" />
            <span className="font-serif-display text-2xl">
              Outdoor <span className="italic text-white/70">Apartments</span>
            </span>
          </Link>
          <p className="mt-8 text-white/60 max-w-md leading-relaxed text-sm">
            Gestione professionale di appartamenti e chalet in affitto turistico a
            Pila, Valle d'Aosta. Ospitalità curata per gli ospiti, tranquillità
            garantita per i proprietari.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-white/40 mb-5">Naviga</p>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="text-white/80 hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/appartamenti" className="text-white/80 hover:text-white transition-colors">Appartamenti</Link></li>
            <li><Link to="/affidaci-il-tuo-immobile" className="text-white/80 hover:text-white transition-colors">Affidaci il tuo immobile</Link></li>
            <li><Link to="/contatti" className="text-white/80 hover:text-white transition-colors">Contatti</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-white/40 mb-5">Contatti</p>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3 text-white/80">
              <Mail size={14} className="text-[#5F8F76]" />
              <a href="mailto:info@outdoorapartments.it" className="hover:text-white transition-colors">
                info@outdoorapartments.it
              </a>
            </li>
            <li className="flex items-center gap-3 text-white/80">
              <Phone size={14} className="text-[#5F8F76]" />
              <a href="tel:+390000000000" className="hover:text-white transition-colors">
                +39 000 000 0000
              </a>
            </li>
          </ul>
          <div className="flex gap-4 mt-8">
            <a href="#" aria-label="Instagram" className="p-2 border border-white/15 hover:border-white transition-colors">
              <Instagram size={16} />
            </a>
            <a href="#" aria-label="Facebook" className="p-2 border border-white/15 hover:border-white transition-colors">
              <Facebook size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="text-xs text-white/40">
          © {new Date().getFullYear()} Outdoor Apartments — Pila, Valle d'Aosta
        </p>
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] uppercase tracking-[0.22em] text-white/50">
          <li>
            <Link to="/privacy-policy" data-testid={FOOTER.privacyLink} className="hover:text-white transition-colors">
              Privacy
            </Link>
          </li>
          <li>
            <Link to="/cookie-policy" data-testid={FOOTER.cookieLink} className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </li>
          <li>
            <Link to="/note-legali" data-testid={FOOTER.legalLink} className="hover:text-white transition-colors">
              Note Legali
            </Link>
          </li>
          <li>
            <button
              type="button"
              onClick={reopenBanner}
              data-testid={FOOTER.cookieManage}
              className="inline-flex items-center gap-2 hover:text-white transition-colors"
            >
              <Cookie size={12} /> Gestisci cookie
            </button>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
