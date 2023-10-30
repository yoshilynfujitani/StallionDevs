import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as LoginAPI } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogIn() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => LoginAPI({ email, password }),

    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.user);
      navigate("/home");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { login, isLoading };
}
