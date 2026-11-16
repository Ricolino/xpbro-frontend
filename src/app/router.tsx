import {
  createBrowserRouter,
  Navigate,
} from "react-router-dom";

import { AdminRoute } from "@/auth/AdminRoute";
import { ProtectedRoute } from "@/auth/ProtectedRoute";

import { LoginPage } from "@/pages/auth/LoginPage";
import { RegisterPage } from "@/pages/auth/RegisterPage";
import { GoogleCallbackPage } from "@/pages/auth/GoogleCallbackPage";

import { DashboardPage } from "@/pages/dashboard/DashboardPage";
import { ProfilePage } from "@/pages/profile/ProfilePage";

import { AdminUsersPage } from "@/pages/administration/AdminUsersPage";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },

  {
    path: "/register",
    element: <RegisterPage />,
  },

  {
    path: "/auth/callback",
    element: <GoogleCallbackPage />,
  },

  {
    element: <ProtectedRoute />,

    children: [
      {
        path: "/",
        element: <DashboardPage />,
      },

      {
        path: "/profile",
        element: <ProfilePage />,
      },
    ],
  },

  {
    element: <AdminRoute />,

    children: [
      {
        path: "/administration/users",
        element: <AdminUsersPage />,
      },
    ],
  },

  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);
