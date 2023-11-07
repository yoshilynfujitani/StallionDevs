import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteComment as deleteCommentAPI } from "../../services/Posts/apiComments";
import toast from "react-hot-toast";

export function useDeleteComment() {
  const queryClient = useQueryClient();
  const { mutate: deleteComment, isLoading: deletetingComment } = useMutation({
    mutationFn: deleteCommentAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      toast.success("Succesfully deleted comment");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { deleteComment, deletetingComment };
}
