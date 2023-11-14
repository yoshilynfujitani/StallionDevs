import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/apiAuth";

export function useUser() {
  const { data: user, isLoading } = useQuery({
    queryFn: getUser,
    queryKey: ["authUser"],
  });

  return { isLoading, user, isAuthenticated: user?.role === "authenticated" };
}
