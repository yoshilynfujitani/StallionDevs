import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";
import { signUp as signUpAPI } from "../../services/apiAuth";

export function useSignUp() {
  const navigate = useNavigate();

  const { mutate: signUp, isLoading } = useMutation({
    mutationFn: ({ email, password, name }) =>
      signUpAPI({ email, password, name }),

    onSuccess: () => {
      console.log("susccess");
      navigate("/");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { signUp, isLoading };
}
