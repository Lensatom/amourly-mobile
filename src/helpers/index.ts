import { ACCESS_TOKEN_KEY } from "@/constants";
import * as SecureStore from "expo-secure-store";
import { ToastAndroid } from "react-native";

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

export const formatDate = (date: any) => {
  const validDate = date instanceof Date ? date : new Date(date);
  if (isNaN(validDate.getTime())) {
    console.error("Invalid date:", date);
    return "Invalid Date";
  }
  const day = String(validDate.getDate()).padStart(2, '0');
  const month = String(validDate.getMonth() + 1).padStart(2, '0');
  const year = validDate.getFullYear();
  return `${day} / ${month} / ${year}`;
};

export const showToast = (message: string) => {
  ToastAndroid.showWithGravityAndOffset(
    message,
    ToastAndroid.LONG,
    ToastAndroid.BOTTOM,
    25,
    50,
  )
}