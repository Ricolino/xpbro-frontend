import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { accountApi } from "@/api/account.api";
import { setAccessToken } from "@/api/axios";
import { useAuth } from "@/auth/AuthContext";

export const GoogleCallbackPage = () => {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const { refreshUser } = useAuth();

  useEffect(() => {
    const completeGoogleLogin = async () => {
      try {
        const token =
          searchParams.get("token");

        if (!token) {
          navigate("/login", {
            replace: true,
          });

          return;
        }

        setAccessToken(token);

        await accountApi.me();

        await refreshUser();

        navigate("/", {
          replace: true,
        });
      } catch {
        setAccessToken(null);

        navigate("/login", {
          replace: true,
        });
      }
    };

    void completeGoogleLogin();
  }, [navigate, refreshUser, searchParams]);

  return (
    <div className="mx-auto mt-20 max-w-md text-center">
      <h1 className="text-2xl font-bold">
        Signing in...
      </h1>

      <p className="mt-2 text-gray-600">
        Completing Google authentication.
      </p>
    </div>
  );
};
