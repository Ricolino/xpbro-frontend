import { useEffect, useState } from "react";

import { usersApi } from "@/api/users.api";

import type { UserSummary } from "@/types";

export const AdminUsersPage = () => {
  const [users, setUsers] = useState<UserSummary[]>([]);

  const [isLoading, setIsLoading] =
    useState(true);

  const [error, setError] =
    useState<string>("");

  const loadUsers = async () => {
    try {
      setError("");

      const result =
        await usersApi.getUsers();

      setUsers(result);
    } catch {
      setError("Unable to load users.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    void loadUsers();
  }, []);

  const handleEnable = async (
    id: string
  ) => {
    try {
      await usersApi.enableUser(id);

      await loadUsers();
    } catch {
      setError("Unable to enable user.");
    }
  };

  const handleDisable = async (
    id: string
  ) => {
    try {
      await usersApi.disableUser(id);

      await loadUsers();
    } catch {
      setError("Unable to disable user.");
    }
  };

  const handleDelete = async (
    id: string
  ) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (!confirmed) {
      return;
    }

    try {
      await usersApi.deleteUser(id);

      await loadUsers();
    } catch {
      setError("Unable to delete user.");
    }
  };

  if (isLoading) {
    return (
      <div className="p-6">
        Loading users...
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="mb-6 text-3xl font-bold">
        User Administration
      </h1>

      {error && (
        <div className="mb-4 rounded border border-red-300 bg-red-50 p-3 text-red-700">
          {error}
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-left">
                Email
              </th>

              <th className="border p-2 text-left">
                First Name
              </th>

              <th className="border p-2 text-left">
                Last Name
              </th>

              <th className="border p-2 text-left">
                Active
              </th>

              <th className="border p-2 text-left">
                Email Confirmed
              </th>

              <th className="border p-2 text-left">
                Roles
              </th>

              <th className="border p-2 text-left">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="border p-2">
                  {user.email}
                </td>

                <td className="border p-2">
                  {user.firstName}
                </td>

                <td className="border p-2">
                  {user.lastName}
                </td>

                <td className="border p-2">
                  {user.isActive
                    ? "Yes"
                    : "No"}
                </td>

                <td className="border p-2">
                  {user.emailConfirmed
                    ? "Yes"
                    : "No"}
                </td>

                <td className="border p-2">
                  {user.roles.join(", ")}
                </td>

                <td className="border p-2">
                  <div className="flex gap-2">
                    {user.isActive ? (
                      <button
                        type="button"
                        onClick={() =>
                          handleDisable(
                            user.id
                          )
                        }
                        className="rounded bg-yellow-500 px-3 py-1 text-white"
                      >
                        Disable
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() =>
                          handleEnable(
                            user.id
                          )
                        }
                        className="rounded bg-green-600 px-3 py-1 text-white"
                      >
                        Enable
                      </button>
                    )}

                    <button
                      type="button"
                      onClick={() =>
                        handleDelete(
                          user.id
                        )
                      }
                      className="rounded bg-red-600 px-3 py-1 text-white"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
