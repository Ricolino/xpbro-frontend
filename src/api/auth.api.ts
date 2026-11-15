import api from "./axios";

import type {
  AuthResponse,
  ForgotPasswordRequest,
  LoginRequest,
  RegisterRequest,
  ResetPasswordRequest,
} from "@/types";

export const authApi = {
  register: async (request: RegisterRequest): Promise<void> => {
    await api.post("/auth/register", request);
  },

  login: async (request: LoginRequest): Promise<AuthResponse> => {
    const response = await api.post<AuthResponse>(
      "/auth/login",
      request
    );

    return response.data;
  },

  refresh: async (): Promise<AuthResponse> => {
    const response = await api.post<AuthResponse>(
      "/auth/refresh"
    );

    return response.data;
  },

  logout: async (): Promise<void> => {
    await api.post("/auth/logout");
  },

  logoutAll: async (): Promise<void> => {
    await api.post("/auth/logout-all");
  },

  googleLogin: (): void => {
    window.location.href =
      `${import.meta.env.VITE_API_URL}/auth/google/login`;
  },

  forgotPassword: async (
    request: ForgotPasswordRequest
  ): Promise<void> => {
    await api.post("/auth/forgot-password", request);
  },

  resetPassword: async (
    request: ResetPasswordRequest
  ): Promise<void> => {
    await api.post("/auth/reset-password", request);
  },

  verifyEmail: async (token: string): Promise<void> => {
    await api.get(
      `/auth/verify-email?token=${encodeURIComponent(token)}`
    );
  },
};
