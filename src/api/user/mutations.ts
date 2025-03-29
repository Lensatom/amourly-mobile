import { router } from "react-query-kit";
import { getOTP, verifyOTP } from ".";

export const userRouter = router("user", {
  getOTP: router.mutation({
    mutationFn: getOTP,
  }),

  verifyOTP: router.mutation({
    mutationFn: verifyOTP
  }),

  // update: router.mutation({
  //   mutationFn: updateUser,
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: ['user'] });
  //   },
  // }),
})