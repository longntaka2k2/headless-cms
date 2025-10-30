import { AxiosResponse } from "axios";
import instance from "@/api/axios";
import { Apps, NavApplication, Profile, Workspaces } from "@/types";
import { commons } from "@/const/endpoints";

export const getApplicationInSidebar = (): Promise<
  AxiosResponse<NavApplication>
> => {
  return instance.get(commons.applicationInSidebar);
};

export const getProfile = (): Promise<AxiosResponse<Profile>> => {
  return instance.get<Profile>(commons.profile);
};

export const getApps = (): Promise<AxiosResponse<Apps[]>> => {
  return instance.get(commons.apps);
};

export const getWps = (wpId: string): Promise<AxiosResponse<Workspaces>> => {
  return instance.get(commons.wp, {
    params: { workspaceId: wpId },
  });
};
