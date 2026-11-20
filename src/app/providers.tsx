import type { ReactNode } from "react";

import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "@/app/query-client";
import { AuthProvider } from "@/auth/AuthContext";
import { Toaster } from "react-hot-toast";

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
        
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
          }}
        />
      </AuthProvider>
    </QueryClientProvider>
  );
};
