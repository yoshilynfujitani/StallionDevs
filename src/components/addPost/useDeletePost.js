import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePost as deletePostAPI } from "../../services/Posts/apiPost";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useDeletePost() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: deletePost, isLoading: deletingPost } = useMutation({
    mutationFn: deletePostAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      queryClient.invalidateQueries({ queryKey: ["usersPost"] });
      navigate("/home");
      toast.success("Post deleted Successfully");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { deletePost, deletingPost };
}
