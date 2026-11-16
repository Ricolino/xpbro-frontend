import type { ReactNode } from "react";

import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "@/app/query-client";
import { AuthProvider } from "@/auth/AuthContext";

interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({
  children,
}: ProvidersProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        {children}
      </AuthProvider>
    </QueryClientProvider>
  );
};
