import { useQuery } from "@tanstack/react-query";

import { accountApi } from "@/api/account.api";

export const useCurrentUser = () => {
  return useQuery({
    queryKey: ["me"],

    queryFn: () => accountApi.me(),
  });
};
