import { useMutation } from "@tanstack/react-query";

import { usersApi } from "@/api/users.api";

interface ResetUserPasswordVariables {
  userId: string;
  newPassword: string;
}

export const useResetUserPassword = () => {
  return useMutation({
    mutationFn: ({
      userId,
      newPassword,
    }: ResetUserPasswordVariables) =>
      usersApi.resetPassword(userId, {
        newPassword,
      }),
  });
};
