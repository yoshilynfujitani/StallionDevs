import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "react-router-dom";
import { getSinglePost } from "../../services/Posts/apiPost";

export function usePost() {
  const [searchParams] = useSearchParams();
  const { id } = useParams();
  const page = !searchParams.get("commentpage")
    ? 1
    : Number(searchParams.get("commentpage"));

  const { data: post, isLoading } = useQuery({
    queryFn: () => getSinglePost({ id, page }),
    queryKey: ["post", id, page],
    retry: false,
  });

  return { post, isLoading };
}
