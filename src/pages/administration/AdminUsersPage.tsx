import { useState } from "react";

import { ConfirmDialog } from "@/components/common/ConfirmDialog";
import { ResetPasswordModal } from "@/components/users/ResetPasswordModal";
import { UserRolesModal } from "@/components/users/UserRolesModal";
import { UserTable } from "@/components/users/UserTable";

import { useDeleteUser } from "@/hooks/useDeleteUser";
import { useDisableUser } from "@/hooks/useDisableUser";
import { useEnableUser } from "@/hooks/useEnableUser";
import { useUsers } from "@/hooks/useUsers";

import type { UserSummary } from "@/types";
import { Loading } from "@/components/common/Loading";

export const AdminUsersPage = () => {
  const {
    data: users,
    isLoading,
  } = useUsers();

  const enableUser = useEnableUser();
  const disableUser = useDisableUser();
  const deleteUser = useDeleteUser();

  const [selectedUser, setSelectedUser] =
    useState<UserSummary | null>(null);

  const [deleteDialogOpen, setDeleteDialogOpen] =
    useState(false);

  const [rolesModalOpen, setRolesModalOpen] =
    useState(false);

  const [resetPasswordModalOpen,
    setResetPasswordModalOpen] =
    useState(false);

  const handleEnable = async (
    id: string
  ) => {
    await enableUser.mutateAsync(id);
  };

  const handleDisable = async (
    id: string
  ) => {
    await disableUser.mutateAsync(id);
  };

  const handleDeleteClick = (
    id: string
  ) => {
    const user =
      users?.find(
        (x) => x.id === id
      ) ?? null;

    setSelectedUser(user);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (!selectedUser) {
      return;
    }

    await deleteUser.mutateAsync(
      selectedUser.id
    );

    setDeleteDialogOpen(false);
    setSelectedUser(null);
  };

  const handleDeleteCancel = () => {
    setDeleteDialogOpen(false);
    setSelectedUser(null);
  };

  const handleManageRoles = (
    user: UserSummary
  ) => {
    setSelectedUser(user);
    setRolesModalOpen(true);
  };

  const handleResetPassword = (
    user: UserSummary
  ) => {
    setSelectedUser(user);
    setResetPasswordModalOpen(true);
  };

  if (isLoading) {
  return (
    <Loading
      title="Loading users"
      message="Fetching user list..."
    />
  );
}

  return (
    <>
      <div className="p-6">
        <h1 className="mb-6 text-3xl font-bold">
          User Administration
        </h1>

        <UserTable
          users={users ?? []}
          onEnable={handleEnable}
          onDisable={handleDisable}
          onDelete={handleDeleteClick}
          onManageRoles={handleManageRoles}
          onResetPassword={handleResetPassword}
        />
      </div>

      <ConfirmDialog
        open={deleteDialogOpen}
        title="Delete User"
        message={`Are you sure you want to delete ${
          selectedUser?.email ??
          "this user"
        }?`}
        confirmText="Delete"
        isLoading={
          deleteUser.isPending
        }
        onConfirm={
          handleDeleteConfirm
        }
        onCancel={
          handleDeleteCancel
        }
      />

      {selectedUser && (
        <>
          <UserRolesModal
            open={rolesModalOpen}
            userId={selectedUser.id}
            userEmail={
              selectedUser.email
            }
            roles={
              selectedUser.roles
            }
            onClose={() =>
              setRolesModalOpen(
                false
              )
            }
          />

          <ResetPasswordModal
            open={
              resetPasswordModalOpen
            }
            userId={selectedUser.id}
            userEmail={
              selectedUser.email
            }
            onClose={() =>
              setResetPasswordModalOpen(
                false
              )
            }
          />
        </>
      )}
    </>
  );
};
