import { useAuth } from "@/auth/AuthContext";

export const DashboardPage = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="text-gray-600">
          Welcome back,
          {" "}
          {user?.firstName}.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <h2 className="text-sm font-medium text-gray-500">
            Games Owned
          </h2>

          <div className="mt-2 text-3xl font-bold">
            0
          </div>
        </div>

        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <h2 className="text-sm font-medium text-gray-500">
            Games Played
          </h2>

          <div className="mt-2 text-3xl font-bold">
            0
          </div>
        </div>

        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <h2 className="text-sm font-medium text-gray-500">
            Posts
          </h2>

          <div className="mt-2 text-3xl font-bold">
            0
          </div>
        </div>

        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <h2 className="text-sm font-medium text-gray-500">
            Achievements
          </h2>

          <div className="mt-2 text-3xl font-bold">
            0
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-lg border bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold">
            Recent Activity
          </h2>

          <div className="space-y-3">
            <div className="rounded border p-3">
              Activity history
              will appear here.
            </div>

            <div className="rounded border p-3">
              Board game collection
              updates will appear here.
            </div>

            <div className="rounded border p-3">
              Social interactions
              will appear here.
            </div>
          </div>
        </section>

        <section className="rounded-lg border bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold">
            Upcoming Features
          </h2>

          <ul className="space-y-2">
            <li>
              • Game Collection
            </li>

            <li>
              • Wishlist
            </li>

            <li>
              • Session Tracking
            </li>

            <li>
              • BGG Integration
            </li>

            <li>
              • BGA Integration
            </li>

            <li>
              • Achievement System
            </li>
          </ul>
        </section>
      </div>

      <section className="rounded-lg border bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold">
          Quick Actions
        </h2>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded border p-4">
            Collection
            <div className="text-sm text-gray-500">
              Coming Soon
            </div>
          </div>

          <div className="rounded border p-4">
            Posts
            <div className="text-sm text-gray-500">
              Coming Soon
            </div>
          </div>

          <div className="rounded border p-4">
            Friends
            <div className="text-sm text-gray-500">
              Coming Soon
            </div>
          </div>

          <div className="rounded border p-4">
            Events
            <div className="text-sm text-gray-500">
              Coming Soon
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
