import { SITE } from "@/lib/siteConfig";

const postalAddress = () => ({
  "@type": "PostalAddress",
  streetAddress: SITE.geo.streetAddress,
  addressLocality: SITE.geo.locality,
  addressRegion: SITE.geo.region,
  postalCode: SITE.geo.postalCode,
  addressCountry: SITE.geo.country,
});

/** Organizzazione / attività ricettiva locale — usato in home. */
export const lodgingBusinessLd = () => ({
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "@id": `${SITE.url}/#business`,
  name: SITE.name,
  description: SITE.defaultDescription,
  url: SITE.url,
  logo: SITE.logo,
  image: SITE.ogImage,
  email: SITE.email,
  telephone: SITE.phone,
  priceRange: "€€",
  address: postalAddress(),
  geo: {
    "@type": "GeoCoordinates",
    latitude: SITE.geo.latitude,
    longitude: SITE.geo.longitude,
    elevation: SITE.geo.elevation,
  },
  areaServed: [
    { "@type": "Place", name: "Pila" },
    { "@type": "Place", name: "Aosta" },
    { "@type": "AdministrativeArea", name: "Valle d'Aosta" },
  ],
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "WiFi gratuito", value: true },
    { "@type": "LocationFeatureSpecification", name: "Parcheggio gratuito", value: true },
    { "@type": "LocationFeatureSpecification", name: "Sci ai piedi", value: true },
  ],
  sameAs: SITE.sameAs,
  knowsLanguage: ["it", "en", "fr"],
});

export const websiteLd = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  name: SITE.name,
  url: SITE.url,
  inLanguage: "it-IT",
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

/** Singolo appartamento come Apartment + aggregateRating. */
export const apartmentLd = (apt) => {
  const ld = {
    "@context": "https://schema.org",
    "@type": "Apartment",
    name: apt.name,
    description: apt.description,
    url: `${SITE.url}/appartamenti/${apt.id}`,
    image: apt.image,
    numberOfRooms: 1,
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.geo.locality,
      addressRegion: SITE.geo.region,
      postalCode: SITE.geo.postalCode,
      addressCountry: SITE.geo.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    amenityFeature: (apt.amenities || []).map((a) => ({
      "@type": "LocationFeatureSpecification",
      name: a,
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

/** ItemList di appartamenti per la pagina lista. */
export const itemListLd = (apartments) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: apartments.map((apt, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: `${SITE.url}/appartamenti/${apt.id}`,
    name: apt.name,
  })),
});

/** FAQPage — fondamentale per GEO (risposte pronte per motori generativi). */
export const faqLd = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});
