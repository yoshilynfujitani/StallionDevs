import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getSinglePost } from "../../services/Posts/apiPost";

export function usePost() {
  const { id } = useParams();

  const { data: post, isLoading } = useQuery({
    queryFn: () => getSinglePost(id),
    queryKey: ["post", id],
    retry: false,
  });

  return { post, isLoading };
}
