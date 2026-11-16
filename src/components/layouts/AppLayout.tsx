import { Link, Outlet, useNavigate } from "react-router-dom";

import { useAuth } from "@/auth/AuthContext";

export const AppLayout = () => {
  const navigate = useNavigate();

  const { user, logout } = useAuth();

  const isAdmin =
    user?.roles.includes("Admin") ?? false;

  const handleLogout = async () => {
    await logout();

    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <Link
              to="/"
              className="text-xl font-bold"
            >
              XPBRO
            </Link>
          </div>

          <nav className="flex items-center gap-6">
            <Link
              to="/"
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

          <div className="flex items-center gap-4">
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

      <main className="mx-auto max-w-7xl p-6">
        <Outlet />
      </main>
    </div>
  );
};
