import { api, tokenInterceptor } from "..";

export async function getOTP(
  {data}:
  {data: {email: string}}
) {
  const response = await api.post<any>("/users/signup", data);
  return response.data;
}


export async function getUser() {
  const eject = tokenInterceptor();
  const response = await api.get<any>("/user");
  eject();
  return response.data.user;
}