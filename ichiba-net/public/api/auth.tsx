import { AxiosResponse } from "axios";
import { instance } from "./axios-auth";
import { Profile } from "@/types/response";
import { commons } from "@/constants/endpoints";

export const getProfile = (): Promise<AxiosResponse<Profile>> => {
  return instance.get<Profile>(commons.profile);
};
