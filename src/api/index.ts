import { GET } from "./base";

export async function getUser() {
  const res = GET({
    route: "/users/retrieve/16",
  });
  return res;
}