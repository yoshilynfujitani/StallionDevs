import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addComment as addCommentAPI } from "../../services/Posts/apiComments";
import toast from "react-hot-toast";

export function useAddComment() {
  const queryClient = useQueryClient();
  const { mutate: addComment, isLoading: creatingComment } = useMutation({
    mutationFn: addCommentAPI,
    onSuccess: () => {
      toast.success("Comment Added Succesfully!");
      queryClient.invalidateQueries({ queryKey: ["post"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { addComment, creatingComment };
}
