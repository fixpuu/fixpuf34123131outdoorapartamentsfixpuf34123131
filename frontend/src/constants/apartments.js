import { PHOTO_GALLERIES } from "./photoManifest";

const APARTMENTS_SEED = [
    {
        "id": "white-relax",
        "name": "White Relax",
        "location": "Località Pila, 11020 Pila (AO)",
        "short_location": "Pila, Valle d'Aosta",
        "rating": 9.6,
        "reviews_count": 6,
        "amenities": ["parking_free", "wifi_free", "ski_in_ski_out", "non_smoking"],
        "gallery_key": "white-relax",
        "description": "Un rifugio luminoso ai piedi delle piste di Pila. White Relax ti accoglie con superfici chiare, dettagli in legno e ampie vetrate che catturano la luce delle Alpi. Ideale per chi cerca il comfort dello sci ai piedi senza rinunciare all'eleganza.",
    },
    {
        "id": "abete-n-10",
        "name": "Abete N 10",
        "location": "Frazione Pila, 11020 Pila (AO)",
        "short_location": "Pila, Valle d'Aosta",
        "rating": 9.4,
        "reviews_count": 17,
        "amenities": ["wifi_free", "non_smoking"],
        "gallery_key": "abete-n10",
        "description": "Abete N 10 unisce il calore del legno alpino a un design contemporaneo. Un appartamento raccolto e curato nei dettagli, perfetto per una fuga di coppia o piccoli gruppi che vogliono immergersi nell'atmosfera di Pila.",
    },
    {
        "id": "pila-29",
        "name": "Pila 29",
        "location": "Frazione Pila, 11020 Pila (AO)",
        "short_location": "Pila, Valle d'Aosta",
        "rating": 9.3,
        "reviews_count": 30,
        "amenities": ["parking_free", "family_rooms", "wifi_free", "non_smoking"],
        "gallery_key": "pila-29",
        "description": "Spazioso e pensato per le famiglie, Pila 29 offre ambienti versatili e una posizione strategica nel cuore della frazione. Le camere familiari e il parcheggio gratuito lo rendono la scelta ideale per chi viaggia con bambini.",
    },
    {
        "id": "ski-sky-studio-85",
        "name": "Ski&Sky Studiò 85",
        "location": "Frazione Pila, 11020 Pila (AO)",
        "short_location": "Pila, Valle d'Aosta",
        "rating": 10.0,
        "reviews_count": 12,
        "amenities": ["parking_free", "wifi_free", "non_smoking"],
        "gallery_key": "ski-and-sky",
        "description": "Un monolocale di design con affaccio sulle vette. Ski&Sky Studiò 85 celebra l'essenzialità alpina: materiali autentici, luce naturale e una vista che diventa protagonista di ogni soggiorno.",
    },
    {
        "id": "chalet-saint-salod",
        "name": "Chalet Saint Salod - Pila",
        "location": "Charvensod (AO), zona Pila",
        "short_location": "Charvensod, Valle d'Aosta",
        "rating": 8.8,
        "reviews_count": 0,
        "amenities": ["non_smoking", "parking_free", "wifi_free"],
        "gallery_key": "saint-salod",
        "description": "Un vero chalet di montagna immerso nella quiete di Charvensod, a pochi minuti da Pila. Chalet Saint Salod restituisce l'anima autentica della Valle d'Aosta con travi a vista, pietra e legno locale.",
    },
    {
        "id": "studio-pila-1800",
        "name": "Studiò Pila 1800",
        "location": "Frazione Pila, 11020 Pila (AO)",
        "short_location": "Pila, Valle d'Aosta",
        "rating": 9.3,
        "reviews_count": 46,
        "amenities": ["parking_free", "wifi_free", "non_smoking"],
        "gallery_key": "pila-1800",
        "description": "Studiò Pila 1800 prende il nome dall'altitudine che lo circonda. Un rifugio contemporaneo con arredi selezionati, ideale per chi cerca uno spazio intimo dopo una giornata sulle piste.",
    },
    {
        "id": "pila-63",
        "name": "Pila 63",
        "location": "Frazione Pila, 11020 Pila (AO)",
        "short_location": "Pila, Valle d'Aosta",
        "rating": 9.5,
        "reviews_count": 22,
        "amenities": ["parking_free", "ski_in_ski_out", "non_smoking"],
        "gallery_key": "pila-63",
        "description": "Pila 63 è la definizione di ski-in ski-out. Apri la porta e sei già sulla neve. Un appartamento essenziale, elegante, pensato per chi vive la montagna con intensità.",
    },
    {
        "id": "pila-64",
        "name": "Pila64",
        "location": "Frazione Pila, 11020 Pila (AO)",
        "short_location": "Pila, Valle d'Aosta",
        "rating": 10.0,
        "reviews_count": 2,
        "amenities": ["parking_free", "wifi_free", "ski_in_ski_out", "non_smoking"],
        "gallery_key": "pila-64",
        "description": "Il gemello di Pila 63 con un'anima ancora più raccolta. Pila64 offre tutti i comfort di un appartamento moderno, con lo sci ai piedi e le luci del comprensorio a portata di sguardo.",
    },
];

export const APARTMENTS = APARTMENTS_SEED.map((apt) => {
    const gallery = [
        ...(PHOTO_GALLERIES[apt.gallery_key] || []),
        ...(apt.id === "pila-29" ? (PHOTO_GALLERIES["pila-1400"] || []) : []),
    ];
    if (apt.id === "pila-63" && gallery.length > 1) {
        gallery.unshift(gallery.splice(1, 1)[0]);
    }
    const cover = gallery[0];

    return {
        ...apt,
        gallery,
        image: cover || "/logo.png",
    };
});
