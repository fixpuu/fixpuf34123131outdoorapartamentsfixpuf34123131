import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const ApartmentGallery = ({ images = [], name, className = "", interactive = true }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [pressedControl, setPressedControl] = useState(null);
  const hasMultipleImages = images.length > 1;

  const show = (index, control = null) => {
    setActiveIndex((index + images.length) % images.length);
    if (control) {
      setPressedControl(control);
      window.setTimeout(() => setPressedControl(null), 220);
    }
  };

  useEffect(() => {
    if (!hasMultipleImages || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % images.length);
    }, 3000);
    return () => window.clearInterval(timer);
  }, [hasMultipleImages, images.length]);

  if (!images.length) return null;

  return (
    <div className={`group relative isolate overflow-hidden bg-[#141414] ${className}`}>
      {images.map((image, index) => (
        <img
          key={image}
          src={image}
          alt={`${name} — foto ${index + 1}`}
          loading={index === 0 ? "eager" : "lazy"}
          decoding="async"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 motion-reduce:transition-none ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />

      {hasMultipleImages && interactive && (
        <>
          <button
            type="button"
            onClick={(event) => { event.preventDefault(); event.stopPropagation(); show(activeIndex - 1, "previous"); }}
            aria-label={`Foto precedente di ${name}`}
            className={`absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/30 bg-black/55 text-white backdrop-blur-sm transition duration-200 hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${pressedControl === "previous" ? "scale-90 bg-black/85" : "scale-100"}`}
          >
            <ChevronLeft size={20} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={(event) => { event.preventDefault(); event.stopPropagation(); show(activeIndex + 1, "next"); }}
            aria-label={`Foto successiva di ${name}`}
            className={`absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/30 bg-black/55 text-white backdrop-blur-sm transition duration-200 hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${pressedControl === "next" ? "scale-90 bg-black/85" : "scale-100"}`}
          >
            <ChevronRight size={20} aria-hidden="true" />
          </button>
          <span className="absolute right-5 top-5 z-20 bg-black/55 px-3 py-1.5 text-[10px] tracking-[0.16em] text-white/90">
            {activeIndex + 1} / {images.length}
          </span>
        </>
      )}
    </div>
  );
};

export default ApartmentGallery;
