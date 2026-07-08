import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
export const API = `${BACKEND_URL}/api`;

export const api = axios.create({ baseURL: API, timeout: 15000 });

export const fetchApartments = async () => {
  const { data } = await api.get("/apartments");
  return data;
};

export const fetchApartment = async (id) => {
  const { data } = await api.get(`/apartments/${id}`);
  return data;
};

export const submitHostRequest = async (payload) => {
  const { data } = await api.post("/host-requests", payload);
  return data;
};
