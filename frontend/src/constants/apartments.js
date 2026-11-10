import { PHOTO_GALLERIES } from "./photoManifest";
import { ALL_APARTMENTS } from "./apartmentsList";
import { HOME_APARTMENT_IDS } from "./homeApartments";

export { HOME_APARTMENT_IDS } from "./homeApartments";
export { ALL_APARTMENTS } from "./apartmentsList";

export const GENERAL_HOUSE_RULES = {
    checkIn: "Dalle 16:00",
    checkOut: "Entro le 10:00",
    events: "No feste ed eventi",
    smoking: "Divieto di fumo in tutte le strutture",
    deposit: "Per le prenotazioni dirette si richiede il versamento di una caparra pari al 40% dell'importo totale preventivato.",
    cancellation: "In caso di cancellazione della prenotazione la caparra verrà rimborsata solo se la disdetta perviene entro 30 giorni dalla data di arrivo prevista."
};

/**
 * Elaborazione gallerie fotografiche e copertine per ogni appartamento.
 */
export const APARTMENTS = ALL_APARTMENTS.map((apt) => {
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

/**
 * Selezione ordinata degli appartamenti per la vetrina della Home Page.
 */
export const HOME_APARTMENTS = (() => {
    const map = new Map(APARTMENTS.map((a) => [a.id, a]));
    const list = HOME_APARTMENT_IDS.map((id) => map.get(id)).filter(Boolean);
    return list.length > 0 ? list : APARTMENTS.slice(0, 4);
})();
