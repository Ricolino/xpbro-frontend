import { Trophy } from "lucide-react";

export const Footer = () => {
  const currentYear =
    new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/60 bg-transparent">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand */}
          <section>
            <div className="mb-4 flex items-center gap-3">
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
            </div>

            <p className="max-w-sm text-sm leading-relaxed text-slate-400">
              The universal hub for your gaming life.
              Track board games, monitor your digital
              adventures, build squads, and keep your
              gaming history in one place.
            </p>
          </section>

          {/* Links */}
          <section>
            <h3 className="mb-4 font-semibold text-white">
              Links
            </h3>

            <ul className="space-y-2 text-sm text-slate-400">
              <li className="transition-colors hover:text-white">
                Terms of Service
              </li>

              <li className="transition-colors hover:text-white">
                Privacy Policy
              </li>

              <li className="transition-colors hover:text-white">
                Cookie Policy
              </li>

              <li className="transition-colors hover:text-white">
                Community Rules
              </li>
            </ul>
          </section>

          {/* Contact */}
          <section>
            <h3 className="mb-4 font-semibold text-white">
              Contact
            </h3>

            <div className="space-y-2 text-sm text-slate-400">
              <p className="transition-colors hover:text-white">
                support@xpbro.com
              </p>

              <p>
                Discord, Steam and additional social
                integrations coming soon.
              </p>
            </div>
          </section>
        </div>

        <div className="mt-10 border-t border-slate-800/60 pt-6">
          <div className="text-center text-sm text-slate-500">
            <p>
              © {currentYear} XPBRO. All rights
              reserved.
            </p>

            <p className="mx-auto mt-3 max-w-3xl leading-relaxed">
              XPBRO is an independent gaming
              community platform. All game names,
              trademarks, logos and related intellectual
              property belong to their respective owners.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
