import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://strapi-efex.ichiba.net",
  timeout: 20000,
  withCredentials: true,
});
