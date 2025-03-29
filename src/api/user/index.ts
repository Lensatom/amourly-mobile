import { api, tokenInterceptor } from "..";

export async function getOTP(
  {data}:
  {data: {email: string}}
) {
  const response = await api.post<any>("/users/signup", data);
  return response.data;
}

interface VerifyOTP {
  data: {
    email: string;
    otp: string
  }
}
export async function verifyOTP({data}:VerifyOTP) {
  const response = await api.post<any>("/users/verify-otp", data);
  return response.data;
}

export async function getUser() {
  const eject = tokenInterceptor();
  const response = await api.get<any>("/user");
  eject();
  return response.data.user;
}