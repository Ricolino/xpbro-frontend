import { useEffect } from "react";
import {
  useNavigate,
  useSearchParams,
} from "react-router-dom";

import { useAuth } from "@/auth/AuthContext";
import { Loading } from "@/components/common/Loading";

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
  <Loading
    title="Signing in..."
    message="Completing Google authentication."
  />
);
};
