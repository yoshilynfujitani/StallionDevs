import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/apiUser";
import { useUser } from "../../pages/auth/useUser";

export function useGetUsers() {
  const { user } = useUser();

  let userId = user.id;

  const { data: userInfo, isLoading } = useQuery({
    queryFn: () => getUser(userId),
    queryKey: ["currentUser"],
  });

  return { isLoading, userInfo };
}
