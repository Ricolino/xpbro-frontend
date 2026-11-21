import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { accountApi } from "@/api/account.api";
import { authApi } from "@/api/auth.api";
import { setAccessToken } from "@/api/axios";

import {
  subscribeToSessionExpired,
} from "@/auth/auth-events";

import { showError } from "@/utils/toast";

import type {
  CurrentUser,
  LoginRequest,
} from "@/types";

interface AuthContextValue {
  user: CurrentUser | null;

  isAuthenticated: boolean;

  isLoading: boolean;

  login: (
    request: LoginRequest
  ) => Promise<void>;

  logout: () => Promise<void>;

  refreshUser: () => Promise<void>;

  authenticate: (
    accessToken: string
  ) => Promise<void>;

  clearAuthentication: () => void;
}

const AuthContext =
  createContext<AuthContextValue | null>(
    null
  );

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({
  children,
}: AuthProviderProps) => {
  const [user, setUser] =
    useState<CurrentUser | null>(
      null
    );

  const [isLoading, setIsLoading] =
    useState(true);

  const refreshUser = useCallback(
    async () => {
      const currentUser =
        await accountApi.me();

      setUser(currentUser);
    },
    []
  );

  const clearAuthentication =
    useCallback(() => {
      setAccessToken(null);

      setUser(null);
    }, []);

  const authenticate =
    useCallback(
      async (
        accessToken: string
      ) => {
        setAccessToken(
          accessToken
        );

        await refreshUser();
      },
      [refreshUser]
    );

  const login = useCallback(
    async (
      request: LoginRequest
    ) => {
      const response =
        await authApi.login(
          request
        );

      await authenticate(
        response.accessToken
      );
    },
    [authenticate]
  );

  const logout = useCallback(
    async () => {
      try {
        await authApi.logout();
      } finally {
        clearAuthentication();

        window.location.href = "/";
      }
    },
    [clearAuthentication]
  );

  //
  // Bootstrap authentication
  //
  useEffect(() => {
    const bootstrapAuth =
      async () => {
        try {
          const response =
            await authApi.refresh();

          await authenticate(
            response.accessToken
          );
        } catch {
          clearAuthentication();
        } finally {
          setIsLoading(false);
        }
      };

    void bootstrapAuth();
  }, [
    authenticate,
    clearAuthentication,
  ]);

  //
  // Session expired event
  //
  useEffect(() => {
    const unsubscribe =
      subscribeToSessionExpired(
        () => {
          clearAuthentication();

          showError(
            "Your session has expired. Please sign in again."
          );

          window.location.href =
            "/login";
        }
      );

    return unsubscribe;
  }, [clearAuthentication]);

  const value = useMemo<
    AuthContextValue
  >(
    () => ({
      user,

      isAuthenticated:
        !!user,

      isLoading,

      login,
      logout,

      refreshUser,

      authenticate,

      clearAuthentication,
    }),
    [
      user,
      isLoading,

      login,
      logout,

      refreshUser,

      authenticate,
      clearAuthentication,
    ]
  );

  return (
    <AuthContext.Provider
      value={value}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context =
    useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside AuthProvider"
    );
  }

  return context;
};
