import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { NAV } from "@/constants/testIds";
import { SITE } from "@/lib/siteConfig";

const LOGO_URL =
  "https://customer-assets.emergentagent.com/job_0edc567d-bda4-4c1d-90f5-e4bdc5cabf5a/artifacts/tnx5w7d9_image.png";

const links = [
  { to: "/", label: "Home", tid: NAV.linkHome },
  { to: "/appartamenti", label: "Appartamenti", tid: NAV.linkApartments },
  { to: "/affidaci-il-tuo-immobile", label: "Affidaci il tuo immobile", tid: NAV.linkHost },
  { to: "/contatti", label: "Contatti", tid: NAV.linkContact },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav
      data-testid={NAV.root}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-black/70 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
        <Link
          to="/"
          data-testid={NAV.logo}
          className="flex items-center gap-3 group"
        >
          <img
            src={LOGO_URL}
            alt="Outdoor Apartments"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-serif-display text-white text-lg tracking-wide hidden sm:inline">
            Outdoor <span className="italic text-white/70">Apartments</span>
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                data-testid={l.tid}
                className={({ isActive }) =>
                  `text-xs uppercase tracking-[0.22em] transition-colors duration-300 ${
                    isActive ? "text-white" : "text-white/60 hover:text-white"
                  }`
                }
                end={l.to === "/"}
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          data-testid={NAV.mobileToggle}
          aria-label={open ? "Chiudi menu" : "Apri menu"}
          className="lg:hidden text-white flex items-center justify-center min-h-[44px] min-w-[44px] p-2 active:bg-white/10 transition-colors"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div
          data-testid={NAV.mobileMenu}
          className="lg:hidden bg-[#0A0A0A]/95 backdrop-blur-xl border-t border-white/10 max-h-[calc(100vh-80px)] overflow-y-auto"
        >
          <ul className="px-6 py-6 flex flex-col divide-y divide-white/5">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  data-testid={`${l.tid}-mobile`}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block py-4 text-sm uppercase tracking-[0.24em] font-medium transition-colors ${
                      isActive ? "text-white" : "text-white/70 active:text-white"
                    }`
                  }
                  end={l.to === "/"}
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="p-6 border-t border-white/10 bg-white/[0.02] flex flex-col gap-3 pb-safe">
            <Link
              to="/#booking"
              onClick={() => setOpen(false)}
              className="w-full min-h-[46px] flex items-center justify-center bg-[#2E4F3E] text-white text-xs uppercase tracking-[0.22em] font-medium"
            >
              Verifica disponibilità
            </Link>
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="min-h-[44px] flex items-center justify-center gap-2 border border-white/20 text-white/80 active:text-white text-xs uppercase tracking-wider"
              >
                <Phone size={14} /> Chiama
              </a>
              <a
                href={`https://wa.me/${SITE.phoneRaw.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Ciao, vorrei informazioni sui vostri appartamenti a Pila.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] flex items-center justify-center gap-2 border border-[#25D366]/40 bg-[#25D366]/10 text-[#25D366] text-xs uppercase tracking-wider"
              >
                <MessageCircle size={14} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
