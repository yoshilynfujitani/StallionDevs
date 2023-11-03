import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { addPost as addPostAPI } from "../../services/Posts/apiPost";
import { useNavigate } from "react-router-dom";

export function useAddPost() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: addPost, isLoading } = useMutation({
    mutationFn: addPostAPI,

    onSuccess: () => {
      toast.success("Added Post!");
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      navigate("/home");
    },
    onError: (err) => {
      console.log(err.message);
      toast.error(err.message);
    },
  });

  return { addPost, isLoading };
}
