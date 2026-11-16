import { useState } from "react";

import { accountApi } from "@/api/account.api";
import { useAuth } from "@/auth/AuthContext";

export const ProfilePage = () => {
  const { user, refreshUser } = useAuth();

  const [firstName, setFirstName] = useState(
    user?.firstName ?? ""
  );

  const [lastName, setLastName] = useState(
    user?.lastName ?? ""
  );

  const [currentPassword, setCurrentPassword] =
    useState("");

  const [newPassword, setNewPassword] =
    useState("");

  const [message, setMessage] = useState("");

  const [error, setError] = useState("");

  const [isSavingProfile, setIsSavingProfile] =
    useState(false);

  const [isChangingPassword, setIsChangingPassword] =
    useState(false);

  const handleProfileSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    try {
      setError("");
      setMessage("");
      setIsSavingProfile(true);

      await accountApi.updateProfile({
        firstName,
        lastName,
      });

      await refreshUser();

      setMessage(
        "Profile updated successfully."
      );
    } catch {
      setError(
        "Unable to update profile."
      );
    } finally {
      setIsSavingProfile(false);
    }
  };

  const handlePasswordSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    try {
      setError("");
      setMessage("");
      setIsChangingPassword(true);

      await accountApi.changePassword({
        currentPassword,
        newPassword,
      });

      setCurrentPassword("");
      setNewPassword("");

      setMessage(
        "Password changed successfully."
      );
    } catch {
      setError(
        "Unable to change password."
      );
    } finally {
      setIsChangingPassword(false);
    }
  };

  return (
    <div className="mx-auto max-w-3xl p-6">
      <h1 className="mb-6 text-3xl font-bold">
        Profile
      </h1>

      {message && (
        <div className="mb-4 rounded border border-green-300 bg-green-50 p-3 text-green-700">
          {message}
        </div>
      )}

      {error && (
        <div className="mb-4 rounded border border-red-300 bg-red-50 p-3 text-red-700">
          {error}
        </div>
      )}

      <div className="mb-8 rounded border p-6">
        <h2 className="mb-4 text-xl font-semibold">
          Profile Information
        </h2>

        <form
          onSubmit={handleProfileSubmit}
          className="space-y-4"
        >
          <div>
            <label
              htmlFor="email"
              className="mb-1 block"
            >
              Email
            </label>

            <input
              id="email"
              value={user?.email ?? ""}
              disabled
              className="w-full rounded border bg-gray-100 p-2"
            />
          </div>

          <div>
            <label
              htmlFor="firstName"
              className="mb-1 block"
            >
              First Name
            </label>

            <input
              id="firstName"
              value={firstName}
              onChange={(e) =>
                setFirstName(
                  e.target.value
                )
              }
              className="w-full rounded border p-2"
              required
            />
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="mb-1 block"
            >
              Last Name
            </label>

            <input
              id="lastName"
              value={lastName}
              onChange={(e) =>
                setLastName(
                  e.target.value
                )
              }
              className="w-full rounded border p-2"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSavingProfile}
            className="rounded bg-blue-600 px-4 py-2 text-white disabled:opacity-50"
          >
            {isSavingProfile
              ? "Saving..."
              : "Save Profile"}
          </button>
        </form>
      </div>

      <div className="rounded border p-6">
        <h2 className="mb-4 text-xl font-semibold">
          Change Password
        </h2>

        <form
          onSubmit={handlePasswordSubmit}
          className="space-y-4"
        >
          <div>
            <label
              htmlFor="currentPassword"
              className="mb-1 block"
            >
              Current Password
            </label>

            <input
              id="currentPassword"
              type="password"
              value={currentPassword}
              onChange={(e) =>
                setCurrentPassword(
                  e.target.value
                )
              }
              className="w-full rounded border p-2"
              required
            />
          </div>

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
              required
            />
          </div>

          <button
            type="submit"
            disabled={isChangingPassword}
            className="rounded bg-blue-600 px-4 py-2 text-white disabled:opacity-50"
          >
            {isChangingPassword
              ? "Changing..."
              : "Change Password"}
          </button>
        </form>
      </div>
    </div>
  );
};
