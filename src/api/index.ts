import axios from "axios";
import { getAccessToken } from "@/helpers";
import { router } from "expo-router";
import { ToastAndroid } from "react-native";

const BASE_URL = "http://thrivegrantsolutions.com:5000";

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Error logger
api.interceptors.response.use(
  (response) => response,
  (error) => {
    ToastAndroid.showWithGravityAndOffset(
      error.response.status > 500 || error.response.status === 404 ? "Error" : error.response?.data?.message ?? "An error occured",
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
    if (error.response && error.response.status === 401) {
      redirectToLogin();
    } else if (error.response.status === 404 || error.response.status >= 500) {
      // router.replace("/error-boundary")
    }
    console.log(error)
    const url = error.response?.config.url as string;
    const method = error.response?.config.method as string;
    const status = error.response?.status as number;
    const message = error.response?.data?.message as string;
    console.log(`API Error -> ${url}(${status})[${method}]: ${message}`);
    return Promise.reject(error);
  }
);

function redirectToLogin() {
  router.replace('/login-register');
}

export function tokenInterceptor() {
  const interceptor = api.interceptors.request.use(
    async (config) => {
      const token = await getAccessToken();
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      console.log(`using token (access)} : `, token);
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  return () => {
    api.interceptors.request.eject(interceptor);
  };
}