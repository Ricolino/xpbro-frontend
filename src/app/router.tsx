import {
  createBrowserRouter,
  Navigate,
} from "react-router-dom";

import { AdminRoute } from "@/auth/AdminRoute";
import { ProtectedRoute } from "@/auth/ProtectedRoute";

import { AppLayout } from "@/components/layouts/AppLayout";
import { PublicLayout } from "@/components/layouts/PublicLayout";

import Home from "@/pages/Home";

import { LoginPage } from "@/pages/auth/LoginPage";
import { RegisterPage } from "@/pages/auth/RegisterPage";
import { GoogleCallbackPage } from "@/pages/auth/GoogleCallbackPage";

import { DashboardPage } from "@/pages/dashboard/DashboardPage";

import { UserProfilePage } from "@/pages/profile/UserProfilePage";

import { AdminUsersPage } from "@/pages/administration/AdminUsersPage";

export const router = createBrowserRouter([
  //
  // PUBLIC
  //
  {
    element: <PublicLayout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/login",
        element: <LoginPage />,
      },

      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },

  //
  // GOOGLE CALLBACK
  //
  {
    path: "/auth/callback",
    element: <GoogleCallbackPage />,
  },

  //
  // AUTHENTICATED
  //
  {
    element: <ProtectedRoute />,

    children: [
      {
        element: <AppLayout />,

        children: [
          {
            path: "/dashboard",
            element: <DashboardPage />,
          },

          {
            path: "/profile",
            element: <UserProfilePage />,
          },
        ],
      },
    ],
  },

  //
  // ADMIN
  //
  {
    element: <AdminRoute />,

    children: [
      {
        element: <AppLayout />,

        children: [
          {
            path: "/administration/users",
            element: <AdminUsersPage />,
          },
        ],
      },
    ],
  },

  //
  // FALLBACK
  //
  {
    path: "*",
    element: (
      <Navigate
        to="/"
        replace
      />
    ),
  },
]);
