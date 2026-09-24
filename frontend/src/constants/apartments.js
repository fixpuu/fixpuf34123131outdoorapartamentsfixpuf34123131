import { PHOTO_GALLERIES } from "./photoManifest";

const APARTMENTS_SEED = [
    {
        "id": "white-relax",
        "name": "White Relax",
        "location": "Fraz. Pila 54, 11020 Gressan (AO)",
        "address": "Fraz. Pila 54, 11020 Gressan (AO)",
        "short_location": "Pila, Valle d'Aosta",
        "cin": "IT007031C2C9UNGXOH",
        "cir": "VDA_LT_GRESSAN_0219",
        "max_guests": 4,
        "pets_allowed": false,
        "pets_note": "No animali",
        "tourist_tax": [
            { "period": "1 Maggio - 15 Giugno & 1 Ottobre - 30 Novembre", "rate": "€ 1,00 a notte a persona" },
            { "period": "16 Giugno - 30 Settembre & 1 Dicembre - 30 Aprile", "rate": "€ 2,00 a notte a persona" }
        ],
        "rating": 9.6,
        "reviews_count": 6,
        "amenities": ["parking_free", "wifi_free", "ski_in_ski_out", "non_smoking"],
        "gallery_key": "white-relax",
        "description": "Un rifugio luminoso ai piedi delle piste di Pila. White Relax ti accoglie con superfici chiare, dettagli in legno e ampie vetrate che catturano la luce delle Alpi. Ideale per chi cerca il comfort dello sci ai piedi senza rinunciare all'eleganza.",
    },
    {
        "id": "abete-n-10",
        "name": "Abete N 10",
        "location": "Via Malherbes 10, 11100 Aosta (AO)",
        "address": "Via Malherbes 10, 11100 Aosta (AO)",
        "short_location": "Aosta, Valle d'Aosta",
        "cin": "IT007003C2JKTFY72Q",
        "cir": "VDA_AOSTA_0698",
        "max_guests": 4,
        "pets_allowed": true,
        "pets_note": "Animali ammessi previa richiesta (con supplemento)",
        "tourist_tax": [
            { "period": "1 Maggio - 15 Giugno & 1 Ottobre - 30 Novembre", "rate": "€ 0,75 a notte a persona" },
            { "period": "16 Giugno - 30 Settembre & 1 Dicembre - 30 Aprile", "rate": "€ 1,50 a notte a persona" }
        ],
        "rating": 9.4,
        "reviews_count": 17,
        "amenities": ["wifi_free", "non_smoking"],
        "gallery_key": "abete-n10",
        "description": "Abete N 10 unisce il calore del legno alpino a un design contemporaneo. Un appartamento raccolto e curato nei dettagli, perfetto per una fuga di coppia o piccoli gruppi che vogliono immergersi nell'atmosfera di Aosta e Pila.",
    },
    {
        "id": "pila-29",
        "name": "Pila 29",
        "location": "Fraz. Pila 41, 11020 Gressan (AO)",
        "address": "Fraz. Pila 41, 11020 Gressan (AO)",
        "short_location": "Pila, Valle d'Aosta",
        "cin": "In corso di registrazione",
        "cir": "In corso di registrazione",
        "max_guests": 4,
        "pets_allowed": true,
        "pets_note": "Animali ammessi previa richiesta (con supplemento)",
        "tourist_tax": [
            { "period": "Tariffa standard Comune di Gressan", "rate": "In conformità alle disposizioni del Comune di Gressan" }
        ],
        "rating": 9.3,
        "reviews_count": 30,
        "amenities": ["parking_free", "family_rooms", "wifi_free", "non_smoking"],
        "gallery_key": "pila-29",
        "description": "Spazioso e pensato per le famiglie, Pila 29 offre ambienti versatili e una posizione strategica nel cuore della frazione. Le camere familiari e il parcheggio gratuito lo rendono la scelta ideale per chi viaggia con bambini.",
    },
    {
        "id": "ski-sky-studio-85",
        "name": "Ski&Sky Studiò 85",
        "location": "Fraz. Pila 76, 11020 Gressan (AO)",
        "address": "Fraz. Pila 76, 11020 Gressan (AO)",
        "short_location": "Pila, Valle d'Aosta",
        "cin": "IT007031C2K552OJF5",
        "cir": "VDA_GRESSAN_0277",
        "max_guests": 3,
        "pets_allowed": false,
        "pets_note": "No animali",
        "tourist_tax": [
            { "period": "1 Maggio - 15 Giugno & 1 Ottobre - 30 Novembre", "rate": "€ 1,00 a notte a persona" },
            { "period": "16 Giugno - 30 Settembre & 1 Dicembre - 30 Aprile", "rate": "€ 2,00 a notte a persona" }
        ],
        "rating": 10.0,
        "reviews_count": 12,
        "amenities": ["parking_free", "wifi_free", "non_smoking"],
        "gallery_key": "ski-and-sky",
        "description": "Un monolocale di design con affaccio sulle vette. Ski&Sky Studiò 85 celebra l'essenzialità alpina: materiali autentici, luce naturale e una vista che diventa protagonista di ogni soggiorno.",
    },
    {
        "id": "chalet-saint-salod",
        "name": "Chalet Saint Salod",
        "location": "Fraz. Saint Salod 469, 11020 Charvensod (AO)",
        "address": "Fraz. Saint Salod 469, 11020 Charvensod (AO)",
        "short_location": "Charvensod, Valle d'Aosta",
        "cin": "IT007019B4IDVORC5E",
        "cir": "VDA_SR90068885",
        "max_guests": 7,
        "units_detail": "Fienile: max 4 ospiti | Zia: max 3 ospiti",
        "pets_allowed": true,
        "pets_note": "Animali ammessi previa richiesta (con supplemento)",
        "tourist_tax": [
            { "period": "1 Maggio - 15 Giugno & 1 Ottobre - 30 Novembre", "rate": "€ 0,75 a notte a persona" },
            { "period": "16 Giugno - 30 Settembre & 1 Dicembre - 30 Aprile", "rate": "€ 1,50 a notte a persona" }
        ],
        "rating": 8.8,
        "reviews_count": 0,
        "amenities": ["non_smoking", "parking_free", "wifi_free"],
        "gallery_key": "saint-salod",
        "description": "Un vero chalet di montagna immerso nella quiete di Charvensod, a pochi minuti da Pila. Chalet Saint Salod restituisce l'anima autentica della Valle d'Aosta con travi a vista, pietra e legno locale.",
    },
    {
        "id": "studio-pila-1800",
        "name": "Studiò Pila 1800",
        "location": "Fraz. Pila 48, 11020 Gressan (AO)",
        "address": "Fraz. Pila 48, 11020 Gressan (AO)",
        "short_location": "Pila, Valle d'Aosta",
        "cin": "IT007031B4AO444T8M",
        "cir": "VDA_SR9007177",
        "max_guests": 2,
        "pets_allowed": true,
        "pets_note": "Animali ammessi previa richiesta (con supplemento)",
        "tourist_tax": [
            { "period": "1 Maggio - 15 Giugno & 1 Ottobre - 30 Novembre", "rate": "€ 0,75 a notte a persona" },
            { "period": "16 Giugno - 30 Settembre & 1 Dicembre - 30 Aprile", "rate": "€ 1,50 a notte a persona" }
        ],
        "rating": 9.3,
        "reviews_count": 46,
        "amenities": ["parking_free", "wifi_free", "non_smoking"],
        "gallery_key": "pila-1800",
        "description": "Studiò Pila 1800 prende il nome dall'altitudine che lo circonda. Un rifugio contemporaneo con arredi selezionati, ideale per chi cerca uno spazio intimo dopo una giornata sulle piste.",
    },
    {
        "id": "pila-63",
        "name": "Pila 63",
        "location": "Fraz. Pila 48, 11020 Gressan (AO)",
        "address": "Fraz. Pila 48, 11020 Gressan (AO)",
        "short_location": "Pila, Valle d'Aosta",
        "cin": "IT007031C2D44URB7E",
        "cir": "VDA_LT_GRESSAN_0194",
        "max_guests": 6,
        "pets_allowed": false,
        "pets_note": "No animali",
        "tourist_tax": [
            { "period": "1 Maggio - 15 Giugno & 1 Ottobre - 30 Novembre", "rate": "€ 1,00 a notte a persona" },
            { "period": "16 Giugno - 30 Settembre & 1 Dicembre - 30 Aprile", "rate": "€ 2,00 a notte a persona" }
        ],
        "rating": 9.5,
        "reviews_count": 22,
        "amenities": ["parking_free", "ski_in_ski_out", "non_smoking"],
        "gallery_key": "pila-63",
        "description": "Pila 63 è la definizione di ski-in ski-out. Apri la porta e sei già sulla neve. Un appartamento essenziale, elegante, pensato per chi vive la montagna con intensità.",
    },
    {
        "id": "pila-64",
        "name": "Pila64",
        "location": "Fraz. Pila 40, 11020 Gressan (AO)",
        "address": "Fraz. Pila 40, 11020 Gressan (AO)",
        "short_location": "Pila, Valle d'Aosta",
        "cin": "IT007031C2MU2PUVDE",
        "cir": "VDA_LT_GRESSAN_0172",
        "max_guests": 6,
        "pets_allowed": false,
        "pets_note": "No animali",
        "tourist_tax": [
            { "period": "1 Maggio - 15 Giugno & 1 Ottobre - 30 Novembre", "rate": "€ 1,00 a notte a persona" },
            { "period": "16 Giugno - 30 Settembre & 1 Dicembre - 30 Aprile", "rate": "€ 2,00 a notte a persona" }
        ],
        "rating": 10.0,
        "reviews_count": 2,
        "amenities": ["parking_free", "wifi_free", "ski_in_ski_out", "non_smoking"],
        "gallery_key": "pila-64",
        "description": "Il gemello di Pila 63 con un'anima ancora più raccolta. Pila64 offre tutti i comfort di un appartamento moderno, con lo sci ai piedi e le luci del comprensorio a portata di sguardo.",
    },
];

export const GENERAL_HOUSE_RULES = {
    checkIn: "Dalle 16:00",
    checkOut: "Entro le 10:00",
    events: "No feste ed eventi",
    smoking: "Divieto di fumo in tutte le strutture",
    deposit: "Per le prenotazioni dirette si richiede il versamento di una caparra pari al 40% dell'importo totale preventivato.",
    cancellation: "In caso di cancellazione della prenotazione la caparra verrà rimborsata solo se la disdetta perviene entro 30 giorni dalla data di arrivo prevista."
};

export const APARTMENTS = APARTMENTS_SEED.map((apt) => {
    const gallery = [...(PHOTO_GALLERIES[apt.gallery_key] || [])];
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
