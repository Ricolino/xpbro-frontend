import axios from "axios";
import type {
  AxiosError,
  InternalAxiosRequestConfig,
} from "axios";

const apiUrl =
  import.meta.env.VITE_API_URL;

if (!apiUrl) {
  throw new Error(
    "VITE_API_URL is not configured."
  );
}

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
  baseURL: apiUrl,
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

  async (error: AxiosError) => {
    const originalRequest =
      error.config as
        | (InternalAxiosRequestConfig & {
            _retry?: boolean;
          })
        | undefined;

    if (!originalRequest) {
      return Promise.reject(error);
    }

    if (
      error.response?.status !== 401 ||
      originalRequest._retry
    ) {
      return Promise.reject(error);
    }

    //
    // Evită refresh loop
    //
    if (
      originalRequest.url?.includes(
        "/auth/refresh"
      )
    ) {
      return Promise.reject(error);
    }

    originalRequest._retry = true;

    try {
      const response =
        await axios.post<{
          accessToken: string;
        }>(
          `${apiUrl}/auth/refresh`,
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
