import env from "@/config/env";

export const USER_MANAGEMENT = "/user-management";

export const commons = {
  profile: `${USER_MANAGEMENT}/profiles/current-user`,
  applicationInSidebar: `${USER_MANAGEMENT}/apps/dashboard/sidebar`,
  apps: `${USER_MANAGEMENT}/apps`,
  wp: `${USER_MANAGEMENT}/company-details`,
  login: `/account/login?redirectUrl=`,
  logout: `/account/logout?redirectUrl=${env.NEXT_PUBLIC_BASE_URL}`,
};

const endpoint = {
  home: "/home",
  homeEn: "/home-en",
  navbar: "/navbar",
  navbarv2: "/navbar-v2",
  layoutVn: "/layout-vn",
  layoutEn: "/layout-en",
  blog: "/blogs",
  caseStudies: "/case-studies",
  categoryBlog: "/category-blogs",
  topicBlog: "/topic-blogs",
  topicCaseStudies: "/topic-case-studies",
  tag: "/tags",
  smartCrossBorder_overview: "/cross-border-overview",
  smartCrossBorder_feature: "/cross-border-feature",
  omsOverView: "/oms-overview",
  omsFeature: "/oms-feature",
  pimOverView: "/pim-overview",
  integration: "/integration",
  integrationDetail: "/integrarion-details",
  topic: "/topic-blogs",
};

const endpoints = new Proxy(endpoint, {
  get(target, prop) {
    return (
      process.env.NEXT_PUBLIC_API_URL! + target[prop as keyof typeof target]
    );
  },
});

export default endpoints;
