import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  Link,
} from "react-router-dom";

import {
  Menu,
  User,
} from "lucide-react";

import { useAuth } from "@/auth/AuthContext";

export const Header = () => {
  const {
    user,
    isAuthenticated,
    logout,
  } = useAuth();

  const [menuOpen, setMenuOpen] =
    useState(false);

  const menuRef =
    useRef<HTMLDivElement>(null);

  const isAdmin =
    user?.roles.includes("Admin") ?? false;

  useEffect(() => {
    const handleClickOutside = (
      event: MouseEvent
    ) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(
          event.target as Node
        )
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  useEffect(() => {
    const handleEscape = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleLogout = async () => {
      closeMenu();
      
      await logout();
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="text-xl font-bold"
        >
          XPBRO
        </Link>

        <div
          ref={menuRef}
          className="relative"
        >
          <button
            type="button"
            aria-haspopup="true"
            aria-expanded={menuOpen}
            aria-label="User menu"
            onClick={() =>
              setMenuOpen(
                (current) => !current
              )
            }
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-blue-600
              text-white
              transition-all
              duration-200
              hover:bg-blue-700
            "
          >
            {isAuthenticated ? (
              <User size={20} />
            ) : (
              <Menu size={20} />
            )}
          </button>

          <div
            className={`
              absolute
              right-0
              mt-2
              w-72
              origin-top-right
              overflow-hidden
              rounded-lg
              border
              bg-white
              shadow-lg

              transition-all
              duration-200
              ease-out

              ${
                menuOpen
                  ? "pointer-events-auto opacity-100 scale-100"
                  : "pointer-events-none opacity-0 scale-95"
              }
            `}
          >
            {!isAuthenticated && (
              <>
                <Link
                  to="/login"
                  onClick={closeMenu}
                  className="block px-4 py-3 hover:bg-gray-100"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  onClick={closeMenu}
                  className="block px-4 py-3 hover:bg-gray-100"
                >
                  Register
                </Link>
              </>
            )}

            {isAuthenticated && (
              <>
                <div className="border-b p-4">
                  <div className="font-semibold">
                    {user?.firstName}{" "}
                    {user?.lastName}
                  </div>

                  <div className="text-sm text-gray-500">
                    {user?.email}
                  </div>
                </div>

                <Link
                  to="/dashboard"
                  onClick={closeMenu}
                  className="block px-4 py-3 hover:bg-gray-100"
                >
                  Dashboard
                </Link>

                <Link
                  to="/profile"
                  onClick={closeMenu}
                  className="block px-4 py-3 hover:bg-gray-100"
                >
                  Profile
                </Link>

                {isAdmin && (
                  <Link
                    to="/administration/users"
                    onClick={closeMenu}
                    className="block px-4 py-3 hover:bg-gray-100"
                  >
                    User Administration
                  </Link>
                )}

                <button
                  type="button"
                  onClick={handleLogout}
                  className="
                    block
                    w-full
                    px-4
                    py-3
                    text-left
                    text-red-600
                    hover:bg-gray-100
                  "
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
