import { api, tokenInterceptor } from "./config";

// ===== POST =====
export interface IPOST {
  route: string;
  data: any;
  authorization?: boolean;
  isFormData?: boolean;
}
export const POST = async ({
  route,
  data,
  authorization=true,
  isFormData=false
}:IPOST) => {
  const eject = tokenInterceptor();
  const response = await api.post(
    route,
    data,
    {headers: {
      "Content-Type": isFormData ? "multipart/form-data" : "application/json",
    }}
  );
  if (authorization) eject();
  return response.data;
}

// ===== GET =====
export interface IGET {
  route: string;
  authorization?: boolean;
}
export const GET = async ({
  route,
  authorization=true
}:IGET) => {
  const eject = tokenInterceptor();
  const response = await api.get(
    route,
    {headers: {
      "Content-Type": "application/json",
    }}
  );
  if (authorization) eject();
  return response.data;
}

// ===== PUT =====
export interface IPUT {
  route: string;
  data: any;
  authorization?: boolean;
  isFormData?: boolean;
}
export const PUT = async ({
  route,
  data,
  authorization=true,
  isFormData=false
}:IPUT) => {
  const eject = tokenInterceptor();
  const response = await api.put(
    route,
    data,
    {headers: {
      "Content-Type": isFormData ? "multipart/form-data" : "application/json",
    }}
  );
  if (authorization) eject();
  return response.data;
}

// ===== DELETE =====
export interface IDELETE {
  route: string;
  data: any;
  authorization?: boolean;
  isFormData?: boolean;
}
export const DELETE = async ({
  route,
  authorization=true
}:IDELETE) => {
  const eject = tokenInterceptor();
  const response = await api.delete(
    route
  );
  if (authorization) eject();
  return response.data;
}