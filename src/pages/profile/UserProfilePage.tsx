import { useAuth } from "@/auth/AuthContext";

export const UserProfilePage = () => {
  const { user } = useAuth();

  if (!user) {
    return null;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          User Profile
        </h1>

        <p className="text-gray-600">
          Manage your account and connected
          services.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <section className="rounded-lg border bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold">
            Profile Picture
          </h2>

          <div className="flex flex-col items-center gap-4">
            <div
              className="
                flex
                h-28
                w-28
                items-center
                justify-center
                rounded-full
                bg-blue-600
                text-4xl
                font-bold
                text-white
              "
            >
              {(
                user.firstName?.[0] ??
                user.email?.[0] ??
                "U"
              ).toUpperCase()}
            </div>

            <button
              type="button"
              disabled
              className="rounded border px-4 py-2 text-gray-500"
            >
              Upload Photo (Coming Soon)
            </button>
          </div>
        </section>

        <section className="rounded-lg border bg-white p-6 shadow-sm lg:col-span-2">
          <h2 className="mb-4 text-xl font-semibold">
            Account Information
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <div className="text-sm text-gray-500">
                First Name
              </div>

              <div className="font-medium">
                {user.firstName}
              </div>
            </div>

            <div>
              <div className="text-sm text-gray-500">
                Last Name
              </div>

              <div className="font-medium">
                {user.lastName}
              </div>
            </div>

            <div>
              <div className="text-sm text-gray-500">
                Email
              </div>

              <div className="font-medium">
                {user.email}
              </div>
            </div>

            <div>
              <div className="text-sm text-gray-500">
                Email Confirmed
              </div>

              <div className="font-medium">
                {user.emailConfirmed
                  ? "Yes"
                  : "No"}
              </div>
            </div>

            <div>
              <div className="text-sm text-gray-500">
                User ID
              </div>

              <div className="break-all font-medium">
                {user.id}
              </div>
            </div>

            <div>
              <div className="text-sm text-gray-500">
                Account Type
              </div>

              <div className="font-medium">
                Standard
              </div>
            </div>

            <div>
              <div className="text-sm text-gray-500">
                Login Method
              </div>

              <div className="font-medium">
                Username / Password
              </div>
            </div>

            <div>
              <div className="text-sm text-gray-500">
                Roles
              </div>

              <div className="font-medium">
                {user.roles.join(", ")}
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="rounded-lg border bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold">
          Security
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded border p-4">
            <h3 className="font-medium">
              Change Password
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Manage your account password.
            </p>

            <button
              type="button"
              disabled
              className="mt-4 rounded border px-4 py-2 text-gray-500"
            >
              Coming Soon
            </button>
          </div>

          <div className="rounded border p-4">
            <h3 className="font-medium">
              Active Sessions
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              View and manage connected devices.
            </p>

            <button
              type="button"
              disabled
              className="mt-4 rounded border px-4 py-2 text-gray-500"
            >
              Coming Soon
            </button>
          </div>
        </div>
      </section>

      <section className="rounded-lg border bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold">
          Connected Services
        </h2>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded border p-4">
            <h3 className="font-medium">
              Steam
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Connect your Steam account.
            </p>
          </div>

          <div className="rounded border p-4">
            <h3 className="font-medium">
              BoardGameGeek
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Connect your BGG account.
            </p>
          </div>

          <div className="rounded border p-4">
            <h3 className="font-medium">
              Board Game Arena
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Connect your BGA account.
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-lg border bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold">
          Future Features
        </h2>

        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded border p-3">
            Achievements
          </div>

          <div className="rounded border p-3">
            Activity History
          </div>

          <div className="rounded border p-3">
            Last Seen
          </div>

          <div className="rounded border p-3">
            Premium Membership
          </div>

          <div className="rounded border p-3">
            Collection Statistics
          </div>

          <div className="rounded border p-3">
            User Badges
          </div>
        </div>
      </section>
    </div>
  );
};
