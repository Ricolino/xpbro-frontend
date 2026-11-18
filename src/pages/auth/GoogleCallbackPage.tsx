import { useEffect } from "react";
import {
  useNavigate,
  useSearchParams,
} from "react-router-dom";

import { useAuth } from "@/auth/AuthContext";

export const GoogleCallbackPage = () => {
  const navigate = useNavigate();

  const [searchParams] =
    useSearchParams();

  const { authenticate } =
    useAuth();

  useEffect(() => {
    const completeGoogleLogin =
      async () => {
        try {
          const token =
            searchParams.get(
              "token"
            );

          if (!token) {
            navigate("/login", {
              replace: true,
            });

            return;
          }

          await authenticate(
            token
          );

          navigate("/", {
            replace: true,
          });
        } catch (error) {
          console.error(
            "Google login failed",
            error
          );

          navigate("/login", {
            replace: true,
          });
        }
      };

    void completeGoogleLogin();
  }, [
    authenticate,
    navigate,
    searchParams,
  ]);

  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="text-center">
        <h1 className="mb-2 text-2xl font-bold">
          Signing in...
        </h1>

        <p className="text-gray-600">
          Completing Google authentication.
        </p>
      </div>
    </div>
  );
};
