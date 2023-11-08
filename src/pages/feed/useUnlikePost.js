import { useMutation, useQueryClient } from "@tanstack/react-query";
import { unlikePost as unlikePostAPI } from "../../services/Posts/apiLikes";
import toast from "react-hot-toast";

export function useUnlikePost() {
  const queryClient = useQueryClient();
  const { mutate: unlikePost, isLoading: unlikingPost } = useMutation({
    mutationFn: unlikePostAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { unlikePost, unlikingPost };
}
