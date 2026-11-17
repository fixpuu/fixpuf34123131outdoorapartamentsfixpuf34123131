import { SITE } from "@/lib/siteConfig";

const postalAddress = () => ({
  "@type": "PostalAddress",
  streetAddress: SITE.geo.streetAddress,
  addressLocality: SITE.geo.locality,
  addressRegion: SITE.geo.region,
  postalCode: SITE.geo.postalCode,
  addressCountry: SITE.geo.country,
});

const amenityLabelMap = {
  wifi_free: "WiFi gratuito ad alta velocità",
  parking_free: "Parcheggio gratuito",
  ski_in_ski_out: "Accesso diretto alle piste da sci (Ski-in / Ski-out)",
  panoramic_terrace: "Terrazzo / Balcone panoramico con vista Alpi",
  family_rooms: "Camere e spazi ideali per famiglie",
  non_smoking: "Struttura per non fumatori",
  pets_allowed: "Animali ammessi (su richiesta)",
};

/**
 * Organizzazione / attività ricettiva locale principale — schema LodgingBusiness + Resort.
 * Fornisce a Google, Google Maps e ai motori AI (GEO: ChatGPT, Perplexity, Gemini)
 * l'identità ufficiale e verificata dell'operatore turistico a Pila.
 */
export const lodgingBusinessLd = (apartments = []) => {
  const ld = {
    "@context": "https://schema.org",
    "@type": ["LodgingBusiness", "Resort"],
    "@id": `${SITE.url}/#business`,
    name: SITE.name,
    alternateName: [
      "Outdoor Apartments Pila",
      "Appartamenti Pila Outdoor Apartments",
      "Chalet e Case Vacanza Pila Valle d'Aosta",
    ],
    legalName: SITE.legalName,
    taxID: SITE.fiscalCode,
    vatID: `IT${SITE.vatId}`,
    description: SITE.defaultDescription,
    url: SITE.url,
    logo: SITE.logo,
    image: SITE.ogImage,
    email: SITE.email,
    telephone: SITE.phone,
    priceRange: "€€",
    currenciesAccepted: "EUR",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    checkinTime: "16:00",
    checkoutTime: "10:00",
    address: postalAddress(),
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
      elevation: SITE.geo.elevation,
    },
    hasMap: `https://maps.google.com/?q=${SITE.geo.latitude},${SITE.geo.longitude}`,
    areaServed: [
      { "@type": "Place", name: "Pila" },
      { "@type": "Place", name: "Gressan" },
      { "@type": "Place", name: "Aosta" },
      { "@type": "Place", name: "Charvensod" },
      { "@type": "AdministrativeArea", name: "Valle d'Aosta" },
      { "@type": "Place", name: "Comprensorio Sciistico Pila 1800" },
    ],
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Sci ai piedi (Ski-in / Ski-out)", value: true },
      { "@type": "LocationFeatureSpecification", name: "WiFi gratuito", value: true },
      { "@type": "LocationFeatureSpecification", name: "Parcheggio gratuito", value: true },
      { "@type": "LocationFeatureSpecification", name: "Vista panoramica Monte Bianco e Alpi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Deposito sci", value: true },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "21:00",
      },
    ],
    sameAs: SITE.sameAs,
    knowsLanguage: ["it", "en", "fr"],
  };

  if (apartments && apartments.length > 0) {
    ld.containsPlace = apartments.map((apt) => ({
      "@type": "Apartment",
      "@id": `${SITE.url}/appartamenti/${apt.id}#apartment`,
      name: apt.name,
      url: `${SITE.url}/appartamenti/${apt.id}`,
      description: apt.description,
      occupancy: {
        "@type": "QuantitativeValue",
        maxValue: apt.max_guests,
      },
      image: apt.image?.startsWith("http") ? apt.image : `${SITE.url}${apt.image || ""}`,
    }));

    ld.hasOfferCatalog = {
      "@type": "OfferCatalog",
      name: "Appartamenti e Chalet a Pila",
      itemListElement: apartments.map((apt, i) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Apartment",
          name: apt.name,
          url: `${SITE.url}/appartamenti/${apt.id}`,
        },
        priceCurrency: "EUR",
        businessFunction: "http://purl.org/goodrelations/v1#LeaseOut",
      })),
    };
  }

  return ld;
};

export const websiteLd = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  name: SITE.name,
  alternateName: "Outdoor Apartments Pila Valle d'Aosta",
  url: SITE.url,
  inLanguage: ["it-IT", "en-US", "fr-FR"],
  publisher: { "@id": `${SITE.url}/#business` },
});

/** Breadcrumb list. items: [{name, path}] */
export const breadcrumbLd = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: `${SITE.url}${it.path === "/" ? "" : it.path}`,
  })),
});

/** Singolo appartamento come Apartment + AggregateRating + Geo + Dati Ufficiali (CIN/CIR). */
export const apartmentLd = (apt) => {
  const isCharvensod = (apt.location || "").toLowerCase().includes("charvensod");
  const lat = isCharvensod ? 45.715 : SITE.geo.latitude;
  const lon = isCharvensod ? 7.325 : SITE.geo.longitude;
  const locality = isCharvensod ? "Charvensod" : "Pila, Gressan";

  const galleryImages =
    apt.gallery && apt.gallery.length
      ? apt.gallery.slice(0, 8).map((img) => (img.startsWith("http") ? img : `${SITE.url}${img}`))
      : [apt.image?.startsWith("http") ? apt.image : `${SITE.url}${apt.image || ""}`];

  const ld = {
    "@context": "https://schema.org",
    "@type": ["Apartment", "Accommodation"],
    "@id": `${SITE.url}/appartamenti/${apt.id}#apartment`,
    name: `${apt.name} — Appartamento a ${locality} (Valle d'Aosta)`,
    description: apt.description,
    url: `${SITE.url}/appartamenti/${apt.id}`,
    image: galleryImages,
    identifier: apt.cin || undefined,
    taxID: apt.cir || undefined,
    containedInPlace: { "@id": `${SITE.url}/#business` },
    numberOfRooms: apt.specs?.rooms ? 2 : 1,
    occupancy: {
      "@type": "QuantitativeValue",
      maxValue: apt.max_guests,
      unitCode: "C62",
    },
    petsAllowed: apt.pets_allowed ? "http://schema.org/True" : "http://schema.org/False",
    address: {
      "@type": "PostalAddress",
      streetAddress: apt.address || apt.location,
      addressLocality: locality,
      addressRegion: "Valle d'Aosta",
      postalCode: "11020",
      addressCountry: "IT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: lat,
      longitude: lon,
      elevation: isCharvensod ? "750 m" : "1800 m",
    },
    amenityFeature: (apt.amenities || []).map((code) => ({
      "@type": "LocationFeatureSpecification",
      name: amenityLabelMap[code] || code,
      value: true,
    })),
  };

  if (apt.reviews_count > 0) {
    ld.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: apt.rating,
      bestRating: 10,
      worstRating: 0,
      ratingCount: apt.reviews_count,
    };
  }

  return ld;
};

/** ItemList di appartamenti per la pagina catalogo. */
export const itemListLd = (apartments) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: apartments.map((apt, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: `${SITE.url}/appartamenti/${apt.id}`,
    name: apt.name,
    image: apt.image?.startsWith("http") ? apt.image : `${SITE.url}${apt.image || ""}`,
  })),
});

/** FAQPage — fondamentale per GEO (risposte pronte per Perplexity, ChatGPT, Gemini). */
export const faqLd = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
});
