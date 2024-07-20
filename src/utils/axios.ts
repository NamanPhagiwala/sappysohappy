import axios from "axios";
import { getConfig } from "@/config";

// get config
const config = getConfig();

/** Axios instance for internal/current app's backend. */
const backendAxiosInstance = axios.create({
  baseURL: config.url?.internal?.backend,
});

backendAxiosInstance.interceptors.request.use(
  (config) => {
    // Check if the request method is POST
    if (config.method === "post" || config.method === "put") {
      // Add authorization header for POST requests
      config.headers.Authorization = localStorage.getItem("token");
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
export { backendAxiosInstance };
