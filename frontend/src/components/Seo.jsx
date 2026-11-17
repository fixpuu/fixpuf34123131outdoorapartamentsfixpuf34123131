import { Helmet } from "react-helmet-async";
import { SITE } from "@/lib/siteConfig";
import { useLanguage } from "@/i18n/LanguageContext";

/**
 * Seo — componente ad altissima ottimizzazione per meta tag SEO, Local GEO + JSON-LD.
 *
 * Props:
 *  - title: titolo pagina (se non include già il brand, verrà aggiunto con unione ottimizzata)
 *  - description: meta description ad alto tasso di conversione (CTR)
 *  - path: percorso relativo (es. "/appartamenti") per canonical + og:url + hreflang
 *  - image: og image opzionale ad alta risoluzione
 *  - type: og:type (default "website")
 *  - jsonLd: oggetto o array di oggetti JSON-LD (structured data Schema.org)
 *  - noindex: se true, blocca l'indicizzazione
 */
export const Seo = ({
  title,
  description,
  path = "/",
  image,
  type = "website",
  jsonLd,
  noindex = false,
}) => {
  const { language = "it" } = useLanguage();

  // Evita duplicazione del brand se è già presente nel titolo fornito
  let fullTitle = title || SITE.defaultTitle;
  if (title && !title.toLowerCase().includes("outdoor apartments")) {
    fullTitle = `${title} | ${SITE.name}`;
  }

  const desc = description || SITE.defaultDescription;
  const canonical = `${SITE.url}${path === "/" ? "" : path}`;
  const ogImg = image
    ? image.startsWith("http")
      ? image
      : `${SITE.url}${image}`
    : SITE.ogImage;
  const blocks = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  const localeMap = {
    it: "it_IT",
    en: "en_US",
    fr: "fr_FR",
  };
  const currentLocale = localeMap[language] || SITE.locale;

  return (
    <Helmet prioritizeSeoTags>
      <html lang={language} />
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta name="keywords" content={SITE.keywords.join(", ")} />
      <link rel="canonical" href={canonical} />

      {/* Hreflang multi-lingua per posizionamento Google internazionale */}
      <link rel="alternate" hrefLang="it" href={canonical} />
      <link rel="alternate" hrefLang="en" href={canonical} />
      <link rel="alternate" hrefLang="fr" href={canonical} />
      <link rel="alternate" hrefLang="x-default" href={canonical} />

      <meta
        name="robots"
        content={
          noindex
            ? "noindex, follow"
            : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        }
      />

      {/* GEO Targeting & Local SEO: Pila / Gressan / Valle d'Aosta */}
      <meta name="geo.region" content="IT-23" />
      <meta name="geo.placename" content="Pila, Gressan, Valle d'Aosta, Italia" />
      <meta
        name="geo.position"
        content={`${SITE.geo.latitude};${SITE.geo.longitude}`}
      />
      <meta name="ICBM" content={`${SITE.geo.latitude}, ${SITE.geo.longitude}`} />
      <meta name="DC.title" content={fullTitle} />
      <meta name="DC.creator" content={SITE.legalName} />
      <meta name="DC.coverage" content="Pila, Gressan, Aosta, Valle d'Aosta, Italia" />
      <meta name="DC.language" content={language} />

      {/* Open Graph / Facebook / WhatsApp */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:locale" content={currentLocale} />
      <meta property="og:locale:alternate" content="it_IT" />
      <meta property="og:locale:alternate" content="en_US" />
      <meta property="og:locale:alternate" content="fr_FR" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImg} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="place:location:latitude" content={String(SITE.geo.latitude)} />
      <meta property="place:location:longitude" content={String(SITE.geo.longitude)} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={ogImg} />

      {/* Schema.org Structured Data */}
      {blocks.map((block, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(block)}
        </script>
      ))}
    </Helmet>
  );
};

export default Seo;
