import { ACCESS_TOKEN_KEY } from "@/constants";
import * as SecureStore from "expo-secure-store";

export async function getAccessToken() {
  try {
    const result = await SecureStore.getItemAsync(ACCESS_TOKEN_KEY);

    return result;
  } catch (e) {
    console.log("Failed to get token:", e);
  }
}

export async function setAccessToken(token: string) {
  try {
    await SecureStore.setItemAsync(ACCESS_TOKEN_KEY, token);
    console.log("Token stored successfully");
  } catch (e) {
    console.log("Failed to store token:", e);
  }
}

export async function clearAccessToken(otp?: boolean) {
  try {
    await SecureStore.setItemAsync(ACCESS_TOKEN_KEY, "");
  } catch (e) {
    console.log("Failed to delete token:", e);
  }
}


export const getTime = (timestamp:any) => {
  const time = new Date(timestamp).toLocaleTimeString(
    [],
    {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    }
  )

  return time
}

export const formatDate = (timestamp:any) => {
  const dateObj = new Date(timestamp);
  const normalDate = dateObj.toLocaleDateString();
  return normalDate
}

export const checkInventoryManager = (user:any) => {
  return user.role === "inventory_manager_fuel_station"
}