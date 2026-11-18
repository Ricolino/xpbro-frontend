import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "@/auth/AuthContext";
import { Loading } from "@/components/common/Loading";

export const ProtectedRoute = () => {
  const {
    isAuthenticated,
    isLoading,
  } = useAuth();

  if (isLoading) {
  return (
    <Loading
      title="Checking session"
      message="Authenticating user..."
    />
  );
}

  if (!isAuthenticated) {
    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }

  return <Outlet />;
};
