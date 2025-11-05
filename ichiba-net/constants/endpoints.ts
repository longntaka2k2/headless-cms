import env from "@/config/env";

export const USER_MANAGEMENT = "/user-management";

export const commons = {
  profile: `${USER_MANAGEMENT}/profiles/current-user`,
  login: `/account/login?redirectUrl=`,
  logout: `/account/logout?redirectUrl=${env.NEXT_PUBLIC_BASE_URL}`,
};

