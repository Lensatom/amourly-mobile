import { queryClient } from "@/layouts/RootLayout";
import { router } from "react-query-kit";
import { getUser } from ".";

export const userRouter = router("user", {
  // update: router.mutation({
  //   mutationFn: updateUser,
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: ['user'] });
  //   },
  // }),
})