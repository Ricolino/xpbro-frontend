import { useQuery } from "@tanstack/react-query";

import { usersApi } from "@/api/users.api";

export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],

    queryFn: () => usersApi.getUsers(),
  });
};
