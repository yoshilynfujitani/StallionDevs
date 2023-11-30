import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as LogOutAPI } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogOut() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: logout, isLoading } = useMutation({
    mutationFn: LogOutAPI,

    onSuccess: () => {
      toast.success("Succesfully Logged Out");
      queryClient.invalidateQueries(["users"]);
      navigate("/login");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { logout, isLoading };
}
