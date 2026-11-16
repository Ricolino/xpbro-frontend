import { useState } from "react";

import { useResetUserPassword } from "@/hooks/useResetUserPassword";

interface ResetPasswordModalProps {
  open: boolean;

  userId: string;
  userEmail: string;

  onClose: () => void;
}

export const ResetPasswordModal = ({
  open,
  userId,
  userEmail,
  onClose,
}: ResetPasswordModalProps) => {
  const resetPassword =
    useResetUserPassword();

  const [newPassword, setNewPassword] =
    useState("");

  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [error, setError] =
    useState<string>("");

  const handleSubmit = async () => {
    setError("");

    if (!newPassword.trim()) {
      setError(
        "Password is required."
      );
      return;
    }

    if (
      newPassword !== confirmPassword
    ) {
      setError(
        "Passwords do not match."
      );
      return;
    }

    try {
      await resetPassword.mutateAsync({
        userId,
        newPassword,
      });

      setNewPassword("");
      setConfirmPassword("");

      onClose();
    } catch {
      setError(
        "Unable to reset password."
      );
    }
  };

  const handleClose = () => {
    if (resetPassword.isPending) {
      return;
    }

    setNewPassword("");
    setConfirmPassword("");
    setError("");

    onClose();
  };

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold">
            Reset Password
          </h2>

          <button
            type="button"
            onClick={handleClose}
            disabled={
              resetPassword.isPending
            }
          >
            ✕
          </button>
        </div>

        <div className="mb-6">
          <div className="font-medium">
            User
          </div>

          <div className="text-sm text-gray-500">
            {userEmail}
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label
              htmlFor="newPassword"
              className="mb-1 block"
            >
              New Password
            </label>

            <input
              id="newPassword"
              type="password"
              value={newPassword}
              onChange={(e) =>
                setNewPassword(
                  e.target.value
                )
              }
              className="w-full rounded border p-2"
            />
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="mb-1 block"
            >
              Confirm Password
            </label>

            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(
                  e.target.value
                )
              }
              className="w-full rounded border p-2"
            />
          </div>
        </div>

        {error && (
          <div className="mt-4 rounded border border-red-300 bg-red-50 p-3 text-red-700">
            {error}
          </div>
        )}

        <div className="mt-6 flex justify-end gap-3">
          <button
            type="button"
            onClick={handleClose}
            disabled={
              resetPassword.isPending
            }
            className="rounded border px-4 py-2"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={handleSubmit}
            disabled={
              resetPassword.isPending
            }
            className="rounded bg-blue-600 px-4 py-2 text-white"
          >
            {resetPassword.isPending
              ? "Resetting..."
              : "Reset Password"}
          </button>
        </div>
      </div>
    </div>
  );
};
