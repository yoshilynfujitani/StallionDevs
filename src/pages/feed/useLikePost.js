import { useMutation, useQueryClient } from "@tanstack/react-query";
import { likePost as likePostAPI } from "../../services/Posts/apiLikes";
import toast from "react-hot-toast";

export function useLikePost() {
  const queryClient = useQueryClient();
  const { mutate: likePost, isLoading: likingPost } = useMutation({
    mutationFn: likePostAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      toast.success("You liked the post");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { likePost, likingPost };
}
