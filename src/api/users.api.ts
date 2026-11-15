import api from "./axios";

import type {
  AssignRoleRequest,
  ResetUserPasswordRequest,
  UpdateUserRequest,
  UserSummary,
} from "@/types";

export const usersApi = {
  getUsers: async (): Promise<UserSummary[]> => {
    const response = await api.get<UserSummary[]>("/users");

    return response.data;
  },

  getUser: async (id: string): Promise<UserSummary> => {
    const response = await api.get<UserSummary>(
      `/users/${id}`
    );

    return response.data;
  },

  updateUser: async (
    id: string,
    request: UpdateUserRequest
  ): Promise<void> => {
    await api.put(
      `/users/${id}`,
      request
    );
  },

  enableUser: async (id: string): Promise<void> => {
    await api.put(
      `/users/${id}/enable`
    );
  },

  disableUser: async (id: string): Promise<void> => {
    await api.put(
      `/users/${id}/disable`
    );
  },

  deleteUser: async (id: string): Promise<void> => {
    await api.delete(
      `/users/${id}`
    );
  },

  getRoles: async (id: string): Promise<string[]> => {
    const response = await api.get<string[]>(
      `/users/${id}/roles`
    );

    return response.data;
  },

  assignRole: async (
    id: string,
    request: AssignRoleRequest
  ): Promise<void> => {
    await api.post(
      `/users/${id}/roles`,
      request
    );
  },

  removeRole: async (
    id: string,
    role: string
  ): Promise<void> => {
    await api.delete(
      `/users/${id}/roles/${role}`
    );
  },

  resetPassword: async (
    id: string,
    request: ResetUserPasswordRequest
  ): Promise<void> => {
    await api.put(
      `/users/${id}/reset-password`,
      request
    );
  },
};
