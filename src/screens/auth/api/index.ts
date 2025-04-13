import { POST, PUT } from "@/api/base";
import { IGetOTP, ISetupProfile, IVerifyOTP } from "./types";

export async function getOTP({data}:IGetOTP) {
  const res = POST({
    route: "/users/signup",
    data
  });
  return res;
}

export async function verifyOTP({data}:IVerifyOTP) {
  const res = POST({
    route: "/users/verify-otp",
    data
  });
  return res;
}

export async function setupProfile({data}:ISetupProfile) {
  const res = PUT({
    route: "/users/users/onboarding",
    data
  });
  return res;
}