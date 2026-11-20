import type { UserSummary } from "@/types";
import { EmptyState } from "../common/EmptyState";

interface UserTableProps {
  users: UserSummary[];

  onEnable: (id: string) => void;
  onDisable: (id: string) => void;
  onDelete: (id: string) => void;

  onManageRoles: (
    user: UserSummary
  ) => void;

  onResetPassword: (
    user: UserSummary
  ) => void;
}

export const UserTable = ({
  users,
  onEnable,
  onDisable,
  onDelete,
  onManageRoles,
  onResetPassword,
}: UserTableProps) => {
  if (users.length === 0) {
  return (
    <EmptyState
      title="No users found"
      message="There are currently no users to display."
    />
  );
}

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border bg-white">
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
                <div className="flex flex-wrap gap-2">
                  {user.isActive ? (
                    <button
                      type="button"
                      onClick={() =>
                        onDisable(
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
                        onEnable(
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
                      onManageRoles(
                        user
                      )
                    }
                    className="rounded bg-blue-600 px-3 py-1 text-white"
                  >
                    Roles
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      onResetPassword(
                        user
                      )
                    }
                    className="rounded bg-purple-600 px-3 py-1 text-white"
                  >
                    Reset Password
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      onDelete(
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
  );
};
