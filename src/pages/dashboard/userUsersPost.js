import { useQuery } from "@tanstack/react-query";
import { getUserPosts } from "../../services/Posts/apiPost";
import { useUser } from "../auth/useUser";

export function useUsersPost() {
  const { user } = useUser();
  let userId = user.id;
  let { data, isLoading } = useQuery({
    queryFn: () => getUserPosts(userId),
    queryKey: ["usersPost"],
  });

  return { data, isLoading };
}
