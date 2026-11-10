/**
 * LISTA COMPLETA APPARTAMENTI (Pagina "/appartamenti")
 * 
 * Qui trovi l'elenco e l'ordine di tutti gli appartamenti del sito.
 * Per modificare i dettagli di un singolo appartamento (testo, letti, foto, prezzi),
 * apri direttamente il file dedicato nella cartella: src/constants/apartments/
 */
import abeteN10 from "./apartments/abete-n-10";
import saintSalodFienile from "./apartments/chalet-saint-salod-fienile";
import saintSalodZia from "./apartments/chalet-saint-salod-zia";
import whiteRelax from "./apartments/white-relax";
import pila29 from "./apartments/pila-29";
import skiSkyStudio85 from "./apartments/ski-sky-studio-85";
import studioPila1800 from "./apartments/studio-pila-1800";
import laTanaDelleMarmotte from "./apartments/la-tana-delle-marmotte";
import studio33 from "./apartments/studio-33";
import pila63 from "./apartments/pila-63";
import pila64 from "./apartments/pila-64";

export const ALL_APARTMENTS = [
    // 1. AOSTA
    abeteN10,

    // 2. CHARVENSOD
    saintSalodFienile,
    saintSalodZia,

    // 3. PILA
    whiteRelax,
    pila29,
    skiSkyStudio85,
    studioPila1800,
    laTanaDelleMarmotte,
    studio33,
    pila63,
    pila64
];

export default ALL_APARTMENTS;
