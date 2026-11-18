import { Link } from "react-router-dom";

import { useAuth } from "@/auth/AuthContext";

export const UserProfilePage = () => {
  const { user } = useAuth();

  if (!user) {
    return null;
  }

  const loginType =
    user.email.endsWith("@gmail.com")
      ? "Google (possible)"
      : "Username / Password";

  return (
    <div className="mx-auto max-w-5xl p-6">
      <h1 className="mb-8 text-3xl font-bold">
        User Profile
      </h1>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded border bg-white p-6">
          <h2 className="mb-4 text-xl font-semibold">
            Account Information
          </h2>

          <div className="space-y-3">
            <div>
              <strong>Display Name:</strong>{" "}
              {user.firstName} {user.lastName}
            </div>

            <div>
              <strong>Email:</strong>{" "}
              {user.email}
            </div>

            <div>
              <strong>User Id:</strong>{" "}
              {user.id}
            </div>

            <div>
              <strong>Email Confirmed:</strong>{" "}
              {user.emailConfirmed
                ? "Yes"
                : "No"}
            </div>

            <div>
              <strong>Roles:</strong>{" "}
              {user.roles.join(", ")}
            </div>

            <div>
              <strong>Login Type:</strong>{" "}
              {loginType}
            </div>

            <div>
              <strong>Account Type:</strong>{" "}
              Standard
            </div>
          </div>
        </section>

        <section className="rounded border bg-white p-6">
          <h2 className="mb-4 text-xl font-semibold">
            Profile Picture
          </h2>

          <div className="flex h-48 items-center justify-center rounded border bg-gray-50">
            Coming Soon
          </div>
        </section>

        <section className="rounded border bg-white p-6">
          <h2 className="mb-4 text-xl font-semibold">
            Connected Accounts
          </h2>

          <div className="space-y-4">
            <div className="rounded border p-3">
              Steam Connection
              <div className="text-sm text-gray-500">
                Coming Soon
              </div>
            </div>

            <div className="rounded border p-3">
              BGG Connection
              <div className="text-sm text-gray-500">
                Coming Soon
              </div>
            </div>

            <div className="rounded border p-3">
              BGA Connection
              <div className="text-sm text-gray-500">
                Coming Soon
              </div>
            </div>
          </div>
        </section>

        <section className="rounded border bg-white p-6">
          <h2 className="mb-4 text-xl font-semibold">
            Account Actions
          </h2>

          <div className="flex flex-col gap-3">
            <Link
              to="/profile"
              className="rounded border p-3 hover:bg-gray-50"
            >
              Edit Profile
            </Link>

            <Link
              to="/profile"
              className="rounded border p-3 hover:bg-gray-50"
            >
              Change Password
            </Link>
          </div>
        </section>

        <section className="rounded border bg-white p-6 lg:col-span-2">
          <h2 className="mb-4 text-xl font-semibold">
            Future Features
          </h2>

          <ul className="list-disc space-y-2 pl-6">
            <li>Achievements</li>
            <li>Activity History</li>
            <li>Last Seen</li>
            <li>Premium Membership</li>
            <li>Devices & Sessions</li>
            <li>Steam Statistics</li>
            <li>BGG Statistics</li>
            <li>BGA Statistics</li>
          </ul>
        </section>
      </div>
    </div>
  );
};
