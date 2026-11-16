import { useAuth } from "@/auth/AuthContext";

export const DashboardPage = () => {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div className="mx-auto max-w-4xl p-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <button
          type="button"
          onClick={handleLogout}
          className="rounded bg-red-600 px-4 py-2 text-white"
        >
          Logout
        </button>
      </div>

      <div className="rounded border p-6">
        <h2 className="mb-4 text-xl font-semibold">
          Current User
        </h2>

        <div className="space-y-2">
          <p>
            <strong>Id:</strong>{" "}
            {user?.id ?? "-"}
          </p>

          <p>
            <strong>Email:</strong>{" "}
            {user?.email ?? "-"}
          </p>

          <p>
            <strong>First Name:</strong>{" "}
            {user?.firstName ?? "-"}
          </p>

          <p>
            <strong>Last Name:</strong>{" "}
            {user?.lastName ?? "-"}
          </p>

          <p>
            <strong>Email Confirmed:</strong>{" "}
            {user?.emailConfirmed
              ? "Yes"
              : "No"}
          </p>

          <p>
            <strong>Roles:</strong>{" "}
            {user?.roles.join(", ") ?? "-"}
          </p>
        </div>
      </div>
    </div>
  );
};
