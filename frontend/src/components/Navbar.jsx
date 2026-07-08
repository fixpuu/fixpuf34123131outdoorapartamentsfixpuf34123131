import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { NAV } from "@/constants/testIds";

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
          aria-label="Menu"
          className="lg:hidden text-white p-2"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div
          data-testid={NAV.mobileMenu}
          className="lg:hidden bg-black/95 backdrop-blur-md border-t border-white/10"
        >
          <ul className="px-6 py-8 flex flex-col gap-6">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  data-testid={`${l.tid}-mobile`}
                  className={({ isActive }) =>
                    `text-sm uppercase tracking-[0.22em] ${
                      isActive ? "text-white" : "text-white/70"
                    }`
                  }
                  end={l.to === "/"}
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
