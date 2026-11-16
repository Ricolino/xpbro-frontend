import { useState } from "react";

import { useAssignRole } from "@/hooks/useAssignRole";
import { useRemoveRole } from "@/hooks/useRemoveRole";

interface UserRolesModalProps {
  open: boolean;

  userId: string;
  userEmail: string;

  roles: string[];

  onClose: () => void;
}

const AVAILABLE_ROLES = [
  "Admin",
  "Manager",
  "User",
];

export const UserRolesModal = ({
  open,
  userId,
  userEmail,
  roles,
  onClose,
}: UserRolesModalProps) => {
  const assignRole = useAssignRole();

  const removeRole = useRemoveRole();

  const [selectedRole, setSelectedRole] =
    useState("User");

  if (!open) {
    return null;
  }

  const handleAssignRole = async () => {
    await assignRole.mutateAsync({
      userId,
      role: selectedRole,
    });
  };

  const handleRemoveRole = async (
    role: string
  ) => {
    await removeRole.mutateAsync({
      userId,
      role,
    });
  };

  const isLoading =
    assignRole.isPending ||
    removeRole.isPending;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-lg rounded-lg bg-white p-6 shadow-lg">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold">
            Manage Roles
          </h2>

          <button
            type="button"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <div className="mb-4">
          <div className="font-medium">
            User
          </div>

          <div className="text-sm text-gray-500">
            {userEmail}
          </div>
        </div>

        <div className="mb-6">
          <div className="mb-2 font-medium">
            Current Roles
          </div>

          {roles.length === 0 ? (
            <div className="text-sm text-gray-500">
              No roles assigned.
            </div>
          ) : (
            <div className="flex flex-wrap gap-2">
              {roles.map((role) => (
                <div
                  key={role}
                  className="flex items-center gap-2 rounded border px-3 py-1"
                >
                  <span>{role}</span>

                  <button
                    type="button"
                    disabled={isLoading}
                    onClick={() =>
                      handleRemoveRole(
                        role
                      )
                    }
                    className="text-red-600"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mb-6">
          <div className="mb-2 font-medium">
            Assign Role
          </div>

          <div className="flex gap-2">
            <select
              value={selectedRole}
              onChange={(e) =>
                setSelectedRole(
                  e.target.value
                )
              }
              className="flex-1 rounded border p-2"
            >
              {AVAILABLE_ROLES.map(
                (role) => (
                  <option
                    key={role}
                    value={role}
                  >
                    {role}
                  </option>
                )
              )}
            </select>

            <button
              type="button"
              disabled={isLoading}
              onClick={handleAssignRole}
              className="rounded bg-blue-600 px-4 py-2 text-white"
            >
              Assign
            </button>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="rounded border px-4 py-2"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
