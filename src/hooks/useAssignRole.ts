import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

import { usersApi } from "@/api/users.api";

interface AssignRoleVariables {
  userId: string;
  role: string;
}

export const useAssignRole = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      userId,
      role,
    }: AssignRoleVariables) =>
      usersApi.assignRole(userId, {
        role,
      }),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
  });
};
