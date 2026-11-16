import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

import { usersApi } from "@/api/users.api";

interface RemoveRoleVariables {
  userId: string;
  role: string;
}

export const useRemoveRole = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      userId,
      role,
    }: RemoveRoleVariables) =>
      usersApi.removeRole(
        userId,
        role
      ),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
  });
};
