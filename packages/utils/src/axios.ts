import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

// Default axios instance configuration
const defaultConfig: AxiosRequestConfig = {
  baseURL: "http://localhost:3001/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
};

// Create axios instance
export const apiClient: AxiosInstance = axios.create(defaultConfig);

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    // Handle common errors
    if (error.response?.status === 401) {
      // Unauthorized - clear token and redirect to login
      if (typeof window !== "undefined") {
        localStorage.removeItem("token");
        window.location.href = "/auth/login";
      }
    }
    return Promise.reject(error);
  }
);

// Helper function to create API client with custom config
export const createApiClient = (
  baseURL: string,
  config?: AxiosRequestConfig
): AxiosInstance => {
  return axios.create({
    ...defaultConfig,
    baseURL,
    ...config,
  });
};

export default apiClient;
