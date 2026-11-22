import { emitSessionExpired } from "@/auth/auth-events";
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

let refreshPromise:
  | Promise<string>
  | null = null;

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

//
// REQUEST INTERCEPTOR
//
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

//
// RESPONSE INTERCEPTOR
//
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

    const isLoginRequest =
  originalRequest.url?.includes(
    "/auth/login"
  );

const isRegisterRequest =
  originalRequest.url?.includes(
    "/auth/register"
  );

const isRefreshRequest =
  originalRequest.url?.includes(
    "/auth/refresh"
  );

const isGoogleCallback =
  originalRequest.url?.includes(
    "/auth/google"
  );

if (
  error.response?.status !== 401 ||
  originalRequest._retry ||
  isRefreshRequest ||
  isLoginRequest ||
  isRegisterRequest ||
  isGoogleCallback
) {
  return Promise.reject(error);
}

    originalRequest._retry = true;

    try {
      //
      // Un singur refresh request
      //
      if (!refreshPromise) {
        refreshPromise = axios
          .post<{
            accessToken: string;
          }>(
            `${apiUrl}/auth/refresh`,
            {},
            {
              withCredentials: true,
            }
          )
          .then((response) => {
            const newToken =
              response.data.accessToken;

            setAccessToken(
              newToken
            );

            return newToken;
          })
          .finally(() => {
            refreshPromise =
              null;
          });
      }

      const newAccessToken =
        await refreshPromise;

      originalRequest.headers.Authorization =
        `Bearer ${newAccessToken}`;

      return api(originalRequest);
    } catch (refreshError) {
      //
      // sesiune expirată
      //
      setAccessToken(null);

      emitSessionExpired();

      return Promise.reject(
        refreshError
      );

    }
  }
);

export default api;
