import api from "./axios";

import type {
  ChangePasswordRequest,
  CurrentUser,
  UpdateProfileRequest,
} from "../types";

export const accountApi = {
  me: async (): Promise<CurrentUser> => {
    const response = await api.get<CurrentUser>(
      "/account/me"
    );

    return response.data;
  },

  updateProfile: async (
    request: UpdateProfileRequest
  ): Promise<void> => {
    await api.put(
      "/account/profile",
      request
    );
  },

  changePassword: async (
    request: ChangePasswordRequest
  ): Promise<void> => {
    await api.put(
      "/account/change-password",
      request
    );
  },
};
