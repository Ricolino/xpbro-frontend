import { useEffect, useRef, useState } from "react";

import { Link } from "react-router-dom";

import {
  Menu,
  Trophy,
  User,
  X,
} from "lucide-react";

import { useAuth } from "@/auth/AuthContext";

export const Header = () => {
  const {
    user,
    isAuthenticated,
    logout,
  } = useAuth();

  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] =
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
        setMobileMenuOpen(false);
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

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleLogout = async () => {
    closeMenu();
    closeMobileMenu();

    await logout();
  };

  return (
    <header
      className="
        sticky
        top-0
        z-50
        border-b
        border-slate-800/60
        bg-[#0a0c10]/80
        backdrop-blur-xl
      "
    >
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              bg-gradient-to-tr
              from-indigo-600
              to-purple-500
              shadow-lg
              shadow-indigo-500/20
            "
          >
            <Trophy
              size={20}
              className="text-white"
            />
          </div>

          <span
            className="
              bg-gradient-to-r
              from-white
              via-slate-200
              to-indigo-300
              bg-clip-text
              text-xl
              font-black
              tracking-wider
              text-transparent
            "
          >
            XPBRO
            <span className="text-indigo-500">
              .
            </span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {isAuthenticated && (
            <>
              <Link
                to="/dashboard"
                className="
                  text-sm
                  font-medium
                  text-slate-400
                  transition-colors
                  hover:text-white
                "
              >
                Dashboard Preview
              </Link>

              <Link
                to="/profile"
                className="
                  text-sm
                  font-medium
                  text-slate-400
                  transition-colors
                  hover:text-white
                "
              >
                Profile Preview
              </Link>

              {/*{isSquadAdmin && (*/}
                <Link
                  to="/squadAdmin"
                  className="
                    text-sm
                    font-medium
                  text-slate-400
                  transition-colors
                  hover:text-white
                "
                >
                Admin Squad Preview
              </Link>
              {/*)}*/}

              {isAdmin && (
                <Link
                  to="/administration/users"
                  className="
                    text-sm
                    font-medium
                    text-slate-400
                    transition-colors
                    hover:text-white
                  "
                >
                  Administration
                </Link>
              )}
            </>
          )}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() =>
              setMobileMenuOpen(
                (current) => !current
              )
            }
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              border
              border-slate-700
              bg-slate-900/70
              text-slate-300
              transition-all
              duration-200
              hover:border-indigo-500/40
              hover:text-white
              md:hidden
            "
          >
            {mobileMenuOpen ? (
              <X size={20} />
            ) : (
              <Menu size={20} />
            )}
          </button>

          {/* Desktop User Menu */}
          <div
            ref={menuRef}
            className="relative hidden md:block"
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
                rounded-xl
                border
                border-slate-700
                bg-slate-900/70
                text-slate-300
                backdrop-blur-sm
                transition-all
                duration-200
                hover:border-indigo-500/40
                hover:text-white
              "
            >
              <User size={20} />
            </button>

            <div
              className={`
                absolute
                right-0
                mt-2
                w-72
                origin-top-right
                overflow-hidden
                rounded-2xl
                border
                border-slate-800
                bg-slate-900/95
                shadow-2xl
                shadow-black/40
                backdrop-blur-xl

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
                    className="
                      block
                      px-4
                      py-3
                      text-slate-300
                      hover:bg-slate-800/70
                      hover:text-white
                    "
                  >
                    Login
                  </Link>

                  <Link
                    to="/register"
                    onClick={closeMenu}
                    className="
                      block
                      px-4
                      py-3
                      text-slate-300
                      hover:bg-slate-800/70
                      hover:text-white
                    "
                  >
                    Register
                  </Link>
                </>
              )}

              {isAuthenticated && (
                <>
                  <div className="border-b border-slate-800 p-4">
                    <div className="font-semibold text-white">
                      {user?.firstName}{" "}
                      {user?.lastName}
                    </div>

                    <div className="text-sm text-slate-400">
                      {user?.email}
                    </div>
                  </div>

                  <Link
                    to="/dashboard"
                    onClick={closeMenu}
                    className="
                      block
                      px-4
                      py-3
                      text-slate-300
                      hover:bg-slate-800/70
                      hover:text-white
                    "
                  >
                    Dashboard Preview
                  </Link>

                  <Link
                    to="/profile"
                    onClick={closeMenu}
                    className="
                      block
                      px-4
                      py-3
                      text-slate-300
                      hover:bg-slate-800/70
                      hover:text-white
                    "
                  >
                    Profile Preview
                  </Link>

                  {isAdmin && (
                    <Link
                      to="/administration/users"
                      onClick={closeMenu}
                      className="
                        block
                        px-4
                        py-3
                        text-slate-300
                        hover:bg-slate-800/70
                        hover:text-white
                      "
                    >
                      Administration
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
                      text-rose-400
                      hover:bg-slate-800/70
                    "
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden
          overflow-hidden
          border-t
          border-slate-800/60
          bg-[#0a0c10]/95
          backdrop-blur-xl
          transition-all
          duration-300

          ${
            mobileMenuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <div className="flex flex-col px-4 py-4">
          {!isAuthenticated && (
            <>
              <Link
                to="/login"
                onClick={closeMobileMenu}
                className="py-3 text-slate-300"
              >
                Login
              </Link>

              <Link
                to="/register"
                onClick={closeMobileMenu}
                className="py-3 text-slate-300"
              >
                Register
              </Link>
            </>
          )}

          {isAuthenticated && (
            <>
              <div className="mb-4 border-b border-slate-800 pb-4">
                <div className="font-semibold text-white">
                  {user?.firstName}{" "}
                  {user?.lastName}
                </div>

                <div className="text-sm text-slate-400">
                  {user?.email}
                </div>
              </div>

              <Link
                to="/dashboard"
                onClick={closeMobileMenu}
                className="py-3 text-slate-300"
              >
                Dashboard Preview
              </Link>

              <Link
                to="/profile"
                onClick={closeMobileMenu}
                className="py-3 text-slate-300"
              >
                Profile Preview
              </Link>

              {isAdmin && (
                <Link
                  to="/administration/users"
                  onClick={closeMobileMenu}
                  className="py-3 text-slate-300"
                >
                  Administration
                </Link>
              )}

              <button
                type="button"
                onClick={handleLogout}
                className="
                  py-3
                  text-left
                  text-rose-400
                "
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
