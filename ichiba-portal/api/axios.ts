import type { AxiosRequestConfig } from "axios";

import axios from "axios";
import Router from "next/router";
import qs from "qs";

import env from "@/config/env";
import { capitalize, convertMessageCodeToCamelCase } from "@/utils/utils";
import { commons } from "@/const/endpoints";

let abortAllRequest = false;
const errorSessionExpired = 444;

const instance = axios.create({
  timeout: 20000,
  withCredentials: true,
});

function getBaseUrl() {
  let host = typeof window !== "undefined" ? window.location.origin : "";
  let urlApi = env.NEXT_PUBLIC_API_GATEWAY_VN;
  if (host != "https://ichiba.vn") {
    urlApi = env.NEXT_PUBLIC_API_GATEWAY_NET;
  }
  return Promise.resolve(urlApi);
}

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const urlApi = error?.config?.baseURL;
    if (error.response.status === 401) {
      if (!abortAllRequest) {
        Router.push(
          `${urlApi}${commons.login}${encodeURIComponent(
            window.location.href,
          )}`,
        );
        abortAllRequest = true;
      }
    }
    if (error.response.status === errorSessionExpired) {
      if (!abortAllRequest) {
        Router.push(`${urlApi}${commons.logout}`);
        abortAllRequest = true;
      }
    }

    if (error.response.status === 403) {
      if (!abortAllRequest) {
        abortAllRequest = true;
        return Router.replace("/403");
      }
    }

    if (error.response.status === 400) {
      const errorNormal =
        error.response.data.error.errorCode &&
        capitalize(error.response.data.error.errorCode[0], "_");

      const errorF = {
        errorFrom:
          error.response.data.error &&
          convertMessageCodeToCamelCase(error.response.data.error),
      };

      if (error.response.data.error.errorCode) {
        const newError = { errorNormal };
        return Promise.reject(newError);
      }

      return Promise.reject<string[]>(errorF);
    }

    return Promise.reject<Object>(error);
  },
);

instance.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    config.baseURL = await getBaseUrl();
    if (config.headers) {
      config.headers = {
        ...config.headers,
        "x-region": window?.region,
        "x-language": window.language,
        "x-currency": window.currency,
      };
    }

    config.paramsSerializer = {
      ...(config.paramsSerializer ?? {}),
      serialize: (params) => {
        return qs.stringify(params);
      },
    };

    return config;
  },
  () => {},
);

export default instance;
