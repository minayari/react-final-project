import axios from "axios";

const api = axios.create({
  baseURL: "https://fakestoreapi.com",
});

api.interceptors.request.use((req) => {
  return req;
});

api.interceptors.response.use((res) => {
  return res;
});

export default api;
