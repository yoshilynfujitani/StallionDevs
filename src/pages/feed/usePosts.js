import { useQuery } from "@tanstack/react-query";
import { getPostDetails } from "../../services/Posts/apiPost";
import { useSearchParams } from "react-router-dom";

export function usePosts() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") || "all";

  console.log(category);
  const { data: posts, isLoading } = useQuery({
    queryFn: () => getPostDetails({ category }),
    queryKey: ["posts", category],
  });

  return { posts, isLoading };
}
