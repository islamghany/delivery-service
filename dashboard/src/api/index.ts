import { MOVIES_BASE_URL } from "@/constants";
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";
const axiosInstance = axios.create({
  baseURL: "http://localhost:8080",
});

export const api = (axios: AxiosInstance) => {
  return {
    get: <T>(url: string, config: AxiosRequestConfig = {}) =>
      axios.get<T>(url, config),
    post: <T>(url: string, body: unknown, config: AxiosRequestConfig = {}) =>
      axios.post<T>(url, body, config),
    patch: <T>(url: string, body: unknown, config: AxiosRequestConfig = {}) =>
      axios.patch<T>(url, body, config),
  };
};
export default api(axiosInstance);
