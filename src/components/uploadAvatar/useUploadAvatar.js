import { useMutation, useQueryClient } from "@tanstack/react-query";
import { uploadAvatar as uploadAvatarAPI } from "../../services/apiUser";
import toast from "react-hot-toast";

export function useUploadavatar() {
  const queryclient = useQueryClient();
  const { mutate: uploadAvatar, isLoading: uploading } = useMutation({
    mutationFn: uploadAvatarAPI,

    onSuccess: () => {
      toast.success("Uploaded succcesfully");
      queryclient.invalidateQueries({ queryKey: ["currentUser"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { uploadAvatar, uploading };
}
