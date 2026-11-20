export const Footer = () => {
  const currentYear =
    new Date().getFullYear();

  return (
    <footer className="hidden md:block border-t bg-white">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <section>
            <h3 className="mb-2 font-semibold">
              XPBRO
            </h3>

            <p className="text-sm text-gray-600">
              Community platform for
              board game enthusiasts,
              collections, events and
              social interaction.
            </p>
          </section>

          <section>
            <h3 className="mb-2 font-semibold">
              Links
            </h3>

            <ul className="space-y-1 text-sm text-gray-600">
              <li>
                Terms of Service
              </li>

              <li>
                Privacy Policy
              </li>

              <li>
                Cookie Policy
              </li>

              <li>
                Community Rules
              </li>
            </ul>
          </section>

          <section>
            <h3 className="mb-2 font-semibold">
              Contact
            </h3>

            <div className="space-y-1 text-sm text-gray-600">
              <p>
                support@xpbro.com
              </p>

              <p>
                Bucharest, Romania
              </p>

              <p>
                Discord & Social
                Links Coming Soon
              </p>
            </div>
          </section>
        </div>

        <div className="mt-8 border-t pt-4 text-center text-sm text-gray-500">
          <p>
            © {currentYear} XPBRO.
            All rights reserved.
          </p>

          <p className="mt-2">
            XPBRO is an independent
            community platform.
            Board game trademarks,
            logos and intellectual
            property remain the
            property of their
            respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
};
