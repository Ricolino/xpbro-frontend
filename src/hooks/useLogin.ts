import { useMutation } from "@tanstack/react-query";

import { useAuth } from "@/auth/AuthContext";

import type { LoginRequest } from "@/types";

export const useLogin = () => {
  const { login } = useAuth();

  return useMutation({
    mutationFn: (request: LoginRequest) =>
      login(request),
  });
};
