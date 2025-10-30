import { AxiosResponse } from "axios";
import { instance } from "./axiosAuth";
import IProfile from "@/types/response";

export const getProfile = (): Promise<AxiosResponse<IProfile>> => {
  return instance.get<IProfile>("/user-management/profiles/current-user");
};
