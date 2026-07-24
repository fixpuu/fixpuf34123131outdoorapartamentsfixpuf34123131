import { APARTMENTS } from "../constants/apartments";

export const fetchApartments = async () => {
  return APARTMENTS;
};

export const fetchApartment = async (id) => {
  const apartment = APARTMENTS.find(a => a.id === id);
  if (!apartment) throw new Error("Apartment not found");
  return apartment;
};

export const submitHostRequest = async (payload) => {
  return true; // Frontend only email handled in component
};
