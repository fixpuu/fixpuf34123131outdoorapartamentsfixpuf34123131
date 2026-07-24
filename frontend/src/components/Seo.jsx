import { Helmet } from "react-helmet-async";
import { SITE } from "@/lib/siteConfig";

/**
 * Seo — componente riutilizzabile per meta tag SEO/GEO + JSON-LD per pagina.
 *
 * Props:
 *  - title: titolo pagina (verrà unito al brand)
 *  - description: meta description
 *  - path: percorso relativo (es. "/appartamenti") per canonical + og:url
 *  - image: og image opzionale
 *  - type: og:type (default "website")
 *  - jsonLd: oggetto o array di oggetti JSON-LD aggiuntivi (structured data)
 *  - noindex: se true, blocca l'indicizzazione (es. pagine legali facoltative)
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
  const fullTitle = title ? `${title} | ${SITE.name}` : SITE.defaultTitle;
  const desc = description || SITE.defaultDescription;
  const canonical = `${SITE.url}${path === "/" ? "" : path}`;
  const ogImg = image || SITE.ogImage;
  const blocks = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet prioritizeSeoTags>
      <html lang={SITE.lang} />
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta name="keywords" content={SITE.keywords.join(", ")} />
      <link rel="canonical" href={canonical} />
      <meta
        name="robots"
        content={noindex ? "noindex, follow" : "index, follow, max-image-preview:large"}
      />

      {/* Geo targeting */}
      <meta name="geo.region" content="IT-23" />
      <meta name="geo.placename" content="Pila, Valle d'Aosta" />
      <meta
        name="geo.position"
        content={`${SITE.geo.latitude};${SITE.geo.longitude}`}
      />
      <meta name="ICBM" content={`${SITE.geo.latitude}, ${SITE.geo.longitude}`} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:locale" content={SITE.locale} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImg} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={ogImg} />

      {blocks.map((block, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(block)}
        </script>
      ))}
    </Helmet>
  );
};

export default Seo;
