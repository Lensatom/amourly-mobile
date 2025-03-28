import { queryClient } from "@/layouts/RootLayout";
import { router } from "react-query-kit";
import { getOTP } from ".";

export const userRouter = router("user", {
  getOTP: router.mutation({
    mutationFn: getOTP,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
  }),

  // update: router.mutation({
  //   mutationFn: updateUser,
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: ['user'] });
  //   },
  // }),
})