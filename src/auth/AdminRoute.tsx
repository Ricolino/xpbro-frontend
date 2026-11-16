import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "@/auth/AuthContext";

export const AdminRoute = () => {
  const {
    user,
    isAuthenticated,
    isLoading,
  } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }

  const isAdmin = user?.roles.includes("Admin") ?? false;

  if (!isAdmin) {
    return (
      <Navigate
        to="/"
        replace
      />
    );
  }

  return <Outlet />;
};
