import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "@/auth/AuthContext";

export const Header = () => {
  const navigate = useNavigate();

  const { user, logout } = useAuth();

  const isAdmin =
    user?.roles.includes("Admin") ?? false;

  const handleLogout = async () => {
    await logout();

    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between">
        <div>
          <Link
            to="/"
            className="text-xl font-bold"
          >
            XPBRO
          </Link>
        </div>

        <nav className="flex flex-wrap gap-4">
          <Link
            to="/dashboard"
            className="hover:text-blue-600"
          >
            Dashboard
          </Link>

          <Link
            to="/profile"
            className="hover:text-blue-600"
          >
            Profile
          </Link>

          {isAdmin && (
            <Link
              to="/administration/users"
              className="hover:text-blue-600"
            >
              Users
            </Link>
          )}
        </nav>

        <div className="flex flex-col gap-2 md:items-end">
          <div className="text-sm">
            <div className="font-medium">
              {user?.firstName}{" "}
              {user?.lastName}
            </div>

            <div className="text-gray-500">
              {user?.email}
            </div>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            className="rounded bg-red-600 px-4 py-2 text-white"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};
