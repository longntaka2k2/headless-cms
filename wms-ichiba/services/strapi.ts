import endpoints from "@/const/endpoints";

const qs = require("qs");

export interface StrapiQuery {
  locale?: string;
  filters?: any;
  fields?: string[];
  populate?: string[] | string | object;
  publicationState?: "preview" | "live";
  pagination?:
    | {
        page: number;
        pageSize: number;
      }
    | { start: number; limit: number };
  sort?: string | string[];
}

export const GetBlogs = async (query: StrapiQuery) => {
  const { data } = await fetch(
    `${endpoints.blog}?populate=deep&${qs.stringify(query)}`,
  ).then((x) => x.json());
  return data;
};

export const GetIntegrations = async (query: StrapiQuery) => {
  const { data } = await fetch(
    `${endpoints.integrationDetail}?populate=deep&${qs.stringify(query)}`,
  ).then((x) => x.json());
  return data;
};

export const GetCaseStudie = async (query: StrapiQuery) => {
  const { data } = await fetch(
    `${endpoints.caseStudies}?populate=deep&${qs.stringify(query)}`,
  ).then((x) => x.json());
  return data;
};

export const GetTopicCaseStudie = async (query: StrapiQuery) => {
  const { data } = await fetch(
    `${endpoints.topicCaseStudies}?populate=deep&${qs.stringify(query)}`,
  ).then((x) => x.json());
  return data;
};

export const GetTopic = async (query: StrapiQuery) => {
  const { data } = await fetch(
    `${endpoints.topicBlog}?populate=deep&${qs.stringify(query)}`,
  ).then((x) => x.json());
  return data;
};

export const GetTag = async (query: StrapiQuery) => {
  const { data } = await fetch(
    `${endpoints.tag}?populate=deep&${qs.stringify(query)}`,
  ).then((x) => x.json());
  return data;
};

export const GetCategories = async (query: StrapiQuery) => {
  const { data } = await fetch(
    `${endpoints.categoryBlog}?${qs.stringify(query)}`,
  ).then((x) => x.json());
  return data;
};

export const GetTags = async (query: StrapiQuery) => {
  const { data } = await fetch(
    `${endpoints.topic}?${qs.stringify(query)}`,
  ).then((x) => x.json());
  return data;
};

export const GetStrapiData = async (
  endpoint: keyof typeof endpoints,
  query?: StrapiQuery,
) => {
  const { data } = await fetch(
    `${endpoints[endpoint]}?${qs.stringify(query)}`,
  ).then((x) => x.json());
  return data;
};
