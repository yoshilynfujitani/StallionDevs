import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../services/apiUser";

export function useGetUsers() {
  const { data: userInfo, isLoading } = useQuery({
    queryFn: getUsers,
    queryKey: ["users"],
  });

  return { isLoading, userInfo };
}
