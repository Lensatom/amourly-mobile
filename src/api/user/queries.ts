import { useQuery } from "@tanstack/react-query";
import { getUser } from ".";

const useQueryUser = () => {
  const fetchUser = useQuery({
    queryKey: ["user"],
    queryFn: () => getUser(),
    retry: false
  });

  return {
    fetchUser
  }
}

export { useQueryUser };