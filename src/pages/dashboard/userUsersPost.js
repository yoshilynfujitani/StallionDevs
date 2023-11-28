import { useQuery } from "@tanstack/react-query";
import { getUserPosts } from "../../services/Posts/apiPost";

export function useUsersPost() {
  let { data, isLoading } = useQuery({
    queryFn: getUserPosts,
    queryKey: ["usersPost"],
  });

  return { data, isLoading };
}
