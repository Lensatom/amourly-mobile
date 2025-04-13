import { router } from "react-query-kit";
import { getOTP, setupProfile, verifyOTP } from ".";

export const authRouter = router("user", {
  getOTP: router.mutation({
    mutationFn: getOTP,
  }),

  verifyOTP: router.mutation({
    mutationFn: verifyOTP
  }),

  setupProfile: router.mutation({
    mutationFn: setupProfile
  })
})