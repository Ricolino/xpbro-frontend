import axios from "axios";
import type {
  AxiosError,
  InternalAxiosRequestConfig,
} from "axios";

let accessToken: string | null = null;

export const setAccessToken = (
  token: string | null
) => {
  accessToken = token;
};

export const getAccessToken = () => {
  return accessToken;
};

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

api.interceptors.request.use(
  (
    config: InternalAxiosRequestConfig
  ) => {
    if (accessToken) {
      config.headers.Authorization =
        `Bearer ${accessToken}`;
    }

    return config;
  }
);

api.interceptors.response.use(
  (response) => response,

  async (
    error: AxiosError
  ): Promise<never> => {
    const originalRequest =
      error.config as InternalAxiosRequestConfig & {
        _retry?: boolean;
      };

    if (
      error.response?.status !== 401 ||
      originalRequest?._retry
    ) {
      return Promise.reject(error);
    }

    originalRequest._retry = true;

    try {
      const response =
        await axios.post<{
          accessToken: string;
        }>(
          `${import.meta.env.VITE_API_URL}/auth/refresh`,
          {},
          {
            withCredentials: true,
          }
        );

      const newAccessToken =
        response.data.accessToken;

      setAccessToken(
        newAccessToken
      );

      originalRequest.headers.Authorization =
        `Bearer ${newAccessToken}`;

      return api(originalRequest);
    } catch {
      setAccessToken(null);

      return Promise.reject(error);
    }
  }
);

export default api;
