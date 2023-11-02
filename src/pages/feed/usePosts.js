import { useQuery } from "@tanstack/react-query";
import { getPostDetails } from "../../services/Posts/apiPost";

export function usePosts() {
  const { data: posts, isLoading } = useQuery({
    queryFn: getPostDetails,
    queryKey: ["posts"],
  });

  return { posts, isLoading };
}
