/**
 * Configurazione centralizzata e helper per Octorate Booking Engine.
 */
export const OCTORATE_CONFIG = {
  baseUrl: "https://book.octorate.com/octobook/site/reservation/result.xhtml",
  siteKey: "octosite189658",
  lang: "it",
  ota: "false",
  networkMap: {
    "chalet-saint-salod": "537964",
    "chalet-saint-salod-fienile": "537964",
    "chalet-saint-salod-zia": "537964",
    "pila-29": "760540",
    "studio-11-centro": "32981",
    "studio-pila-1800": "651718",
  },
};

/**
 * Genera l'URL diretto al booking engine Octorate con i parametri minimi necessari.
 * @param {Object} options
 * @param {string|null} [options.apartmentId] - ID interno appartamento (per mappare a network Octorate)
 * @param {string|null} [options.checkin] - Data check-in YYYY-MM-DD
 * @param {string|null} [options.checkout] - Data check-out YYYY-MM-DD
 * @param {number|null} [options.pax] - Numero totale ospiti
 * @returns {string} URL completo Octorate
 */
export const buildOctorateUrl = ({
  apartmentId = null,
  checkin = null,
  checkout = null,
  pax = null,
} = {}) => {
  const params = new URLSearchParams({
    siteKey: OCTORATE_CONFIG.siteKey,
    lang: OCTORATE_CONFIG.lang,
    ota: OCTORATE_CONFIG.ota,
  });

  if (checkin) params.set("checkin", checkin);
  if (checkout) params.set("checkout", checkout);
  if (pax) params.set("pax", pax.toString());

  if (apartmentId && OCTORATE_CONFIG.networkMap[apartmentId]) {
    params.set("network", OCTORATE_CONFIG.networkMap[apartmentId]);
  }

  return `${OCTORATE_CONFIG.baseUrl}?${params.toString()}`;
};
