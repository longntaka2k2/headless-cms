import type { InternalAxiosRequestConfig } from "axios";
import axios from "axios";
import qs from "qs";
import { v4 as uuidV4 } from "uuid";
import Cookies from "js-cookie";

// import {
//   GRANT_TYPE_REFRESH_TOKEN,
//   USER_ANONYMOUS_ID_KEY,
// } from "@/constants/config";

// import {
//   capitalize,
//   convertMessageCodeToCamelCase,
//   getDomain,
//   getLocalStorage,
//   getLocalUserId,
//   saveAuthInfo,

// } from "../utils";

let isRefreshing = false;
let failedQueue: {
  resolve: (value: unknown) => void;
  reject: (reason?: any) => void;
}[] = [];

const processQueue = (error: any, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_GATEWAY,
  timeout: 20000,
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const originalRequest = error.config;
    const refreshToken = Cookies.get("refreshToken");

    if (error.response?.status === 401) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            return axios(originalRequest);
          })
          .catch((err) => {
            return Promise.reject(err);
          });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      if (refreshToken) {
        return new Promise((resolve, reject) => {
          instance
            .post("/connect/token", {
              client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
              client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
              refresh_token: refreshToken,
            })
            .then(({ data }) => {
              axios.defaults.headers.common.authorization = `Bearer ${data.access_token}`;
              originalRequest.headers.authorization = `Bearer ${data.access_token}`;
              processQueue(null, data.access_token);
              resolve(axios(originalRequest));
            })
            .catch((err) => {
              processQueue(err, null);
              reject(err);
            })
            .then(() => {
              isRefreshing = false;
            });
        });
      }

      if (
        !window.location.pathname.includes("/account") &&
        !window.location.pathname.includes("/quick-link")
      ) {
        // Router.replace("/");
      }
    }

    if (error.response?.status === 400) {
      const err = error.response?.data.error;

      const dataObj = error.response?.data.data
        ? { data: error.response?.data.data }
        : {};
      const errorCode = {
        ...dataObj,
        errorCode: err.errorCode,
      };

      const errorDescription = {
        ...dataObj,
        errorDescription: err.description && err.description[0],
      };

      const errorF = {
        ...dataObj,
        errorFrom: err,
      };

      if (err.errorCode) {
        return Promise.reject(errorCode);
      }

      if (err.description) {
        return Promise.reject(errorDescription);
      }
      return Promise.reject<string[]>(errorF);
    }
    return Promise.reject<Object>(error);
  }
);

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const accessToken = Cookies.get("accessToken");

    // const workspace = JSON.parse(localStorage.getItem("workspace")!);
    // const market = localStorage.getItem("market");

    // config.headers["x-workspace-id"] = workspace?.id ?? "";

    // config.headers["x-market-id"] =
    //   config.headers["x-market-id"] ?? (market ? JSON.parse(market)?.id : "");

    config.headers.IdempotencyKey = config.headers.IdempotencyKey ?? uuidV4();
    config.headers.Accept = "application/json;charset=UTF-8";

    config.headers.authorization = `Bearer ${accessToken}`;

    config.paramsSerializer = {
      ...(config.paramsSerializer ?? {}),
      serialize: (params) => {
        return qs.stringify(params);
      },
    };

    return config;
  },
  () => {}
);
