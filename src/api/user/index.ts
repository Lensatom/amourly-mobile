import { api, tokenInterceptor } from "..";

export async function getUser() {
  const eject = tokenInterceptor();
  const response = await api.get<any>("/user");
  eject();
  return response.data.user;
}