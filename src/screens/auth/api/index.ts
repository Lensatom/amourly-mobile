import { POST } from "@/api/base";

interface IGetOTP {
  data: {
    email: string
  }
}
export async function getOTP({data}:IGetOTP) {
  const res = POST({
    route: "/users/signup",
    data
  });
  return res;
}

interface IVerifyOTP {
  data: {
    email: string;
    otp: string
  }
}
export async function verifyOTP({data}:IVerifyOTP) {
  const res = POST({
    route: "/users/verify-otp",
    data
  });
  return res;
}