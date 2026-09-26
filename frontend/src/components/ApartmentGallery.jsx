import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const ApartmentGallery = ({
  images = [],
  name,
  className = "",
  interactive = true,
  autoPlay = false,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [pressedControl, setPressedControl] = useState(null);
  const hasMultipleImages = images.length > 1;

  const touchStartX = useRef(null);
  const touchStartY = useRef(null);
  const touchDiffX = useRef(0);
  const isSwiping = useRef(false);

  const show = (index, control = null) => {
    setActiveIndex((index + images.length) % images.length);
    if (control) {
      setPressedControl(control);
      window.setTimeout(() => setPressedControl(null), 220);
    }
  };

  // Optional auto-play, disabled by default for mobile performance and stability
  useEffect(() => {
    if (!autoPlay || !hasMultipleImages || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % images.length);
    }, 4000);
    return () => window.clearInterval(timer);
  }, [autoPlay, hasMultipleImages, images.length]);

  if (!images.length) return null;

  // Touch Swipe handlers
  const handleTouchStart = (e) => {
    if (!hasMultipleImages || !interactive) return;
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    touchDiffX.current = 0;
    isSwiping.current = false;
  };

  const handleTouchMove = (e) => {
    if (touchStartX.current === null || !interactive) return;
    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    const diffX = touchStartX.current - currentX;
    const diffY = touchStartY.current - currentY;

    // Only consider horizontal swipes
    if (Math.abs(diffX) > 10 && Math.abs(diffX) > Math.abs(diffY)) {
      touchDiffX.current = diffX;
      isSwiping.current = true;
    }
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null || !interactive) return;
    if (isSwiping.current && Math.abs(touchDiffX.current) > 35) {
      e.preventDefault();
      e.stopPropagation();
      if (touchDiffX.current > 0) {
        show(activeIndex + 1, "next");
      } else {
        show(activeIndex - 1, "previous");
      }
    }
    touchStartX.current = null;
    touchStartY.current = null;
    // Keep isSwiping true for 150ms to swallow any synthetic click on parent Link
    window.setTimeout(() => {
      isSwiping.current = false;
    }, 150);
  };

  const handleClickCapture = (e) => {
    if (isSwiping.current) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <div
      className={`group relative isolate overflow-hidden bg-[#141414] select-none ${className}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onClickCapture={handleClickCapture}
    >
      {/* Light DOM rendering: only render active image and immediate neighbors */}
      {images.map((image, index) => {
        const isCurrent = index === activeIndex;
        const isNext = index === (activeIndex + 1) % images.length;
        const isPrev = index === (activeIndex - 1 + images.length) % images.length;

        // Skip rendering non-adjacent images to save mobile memory
        if (!isCurrent && !isNext && !isPrev) {
          return null;
        }

        return (
          <img
            key={image}
            src={image}
            alt={`${name} — foto ${index + 1}`}
            loading={isCurrent && index === 0 ? "eager" : "lazy"}
            decoding="async"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 motion-reduce:transition-none pointer-events-none ${
              isCurrent ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        );
      })}

      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/45 via-transparent to-black/10" />

      {hasMultipleImages && interactive && (
        <>
          {/* Desktop & Touch arrows with accessible hit areas */}
          <button
            type="button"
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              show(activeIndex - 1, "previous");
            }}
            aria-label={`Foto precedente di ${name}`}
            className={`absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/20 bg-black/60 text-white backdrop-blur-md transition-all duration-200 active:scale-95 hover:bg-black/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white touch-manipulation ${
              pressedControl === "previous" ? "scale-90 bg-black/90" : "scale-100"
            }`}
          >
            <ChevronLeft size={20} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              show(activeIndex + 1, "next");
            }}
            aria-label={`Foto successiva di ${name}`}
            className={`absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/20 bg-black/60 text-white backdrop-blur-md transition-all duration-200 active:scale-95 hover:bg-black/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white touch-manipulation ${
              pressedControl === "next" ? "scale-90 bg-black/90" : "scale-100"
            }`}
          >
            <ChevronRight size={20} aria-hidden="true" />
          </button>

          {/* Photo Counter */}
          <span className="absolute right-4 bottom-4 z-20 bg-black/65 backdrop-blur-sm px-2.5 py-1 text-[11px] font-mono tracking-wider text-white/90 border border-white/10 rounded-sm">
            {activeIndex + 1} / {images.length}
          </span>
        </>
      )}
    </div>
  );
};

export default ApartmentGallery;
