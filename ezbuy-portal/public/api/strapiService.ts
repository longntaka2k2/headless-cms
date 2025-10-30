import { AxiosResponse } from "axios";
import { axiosInstance } from "./axiosInstance";
import strapiEndpoint from "./strapiEnpoint";
import qs from "qs";

export const getStrapiData = async (
  url: string
): Promise<AxiosResponse<any>> => {
  try {
    const response = await axiosInstance.get(url);
    return response?.data;
  } catch (error) {
    console.error(JSON.stringify(error));
    throw new Error("Failed to fetch API data");
  }
};
const fetchStrapiData = async (url: string, opt?: RequestInit) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, opt);
  return response.json();
};

const getStrapiMediaUrl = (data: any): string =>
  data?.data?.attributes?.url &&
  `${process.env.NEXT_PUBLIC_API_URL}${data?.data?.attributes?.url}`;

const getBlogCategories = async (locale?: string) => {
  const res = await fetchStrapiData(
    `${strapiEndpoint.getBlogCategories}?[locale]=${locale ?? "en"}`
  );
  return res?.data;
};

const getPost = async (slug: string) => {
  const query = qs.stringify(
    {
      filters: {
        slug: slug,
      },
      populate: "banner",
    },
    { encodeValuesOnly: true }
  );
  const res = await getStrapiData(`${strapiEndpoint.getBlog}?${query}`);
  return res?.data;
};

const getPosts = async (
  locale: string,
  pageNumber?: number,
  pageSize?: number,
  category?: string | undefined
) => {
  const query = qs.stringify({
    populate: ["*"],
    locale: locale,
    filters: category
      ? {
          blog_category: {
            slug: category,
          },
        }
      : undefined,
    pagination: {
      start: pageNumber ?? 1,
      limit: pageSize ?? 9,
    },
    sort: ["pushlishedAt:desc", "updatedAt:desc"],
  });
  const res = await getStrapiData(`${strapiEndpoint.getBlog}?${query}`);
  return res?.data;
};
export interface StrapiQuery {
  locale: string;
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

const getPostsQuery = async (query: StrapiQuery, opt?: RequestInit) => {
  const res = await fetchStrapiData(
    `${strapiEndpoint.getBlog}?${qs.stringify(query)}`,
    // Revalidate at most every hour
    opt ?? { next: { revalidate: 3600 } }
  );
  return res?.data;
};


const getDocpage = async (slug: string,locale : string) => {
  const query = qs.stringify(
    {
      locale: locale,
      filters: {
        slug: slug,
      },
      populate: "banner",
    },
    { encodeValuesOnly: true }
  );
  const res = await getStrapiData(`${strapiEndpoint.getDocPages}?${query}`);
  return res?.data;
};

const getDocCategories = async (locale?: string) => {
  const query = qs.stringify(
    {
      locale: locale,
    },
    { encodeValuesOnly: true }
  );
  const res = await getStrapiData(
    `${strapiEndpoint.getDocCategory}?${query}`
  );
  return res;
};

const getCaseStudies = async (
  locale: string,
  pageNumber?: number,
  pageSize?: number,
  slug?: string | undefined
) => {
  const query = qs.stringify({
    populate: ["image", "tags", "topic_case_study", "logoBrand"],
    locale: locale,
    sort: ["publishedAt:DESC"],
    filters: slug
      ? {
          blog_categories: {
            slug: slug,
          },
        }
      : undefined,
    pagination: {
      page: pageNumber ?? 1,
      pageSize: pageSize ?? 9,
    },
  });
  const res = await fetchStrapiData(`${strapiEndpoint.caseStudies}?${query}`);

  if (res?.data) {
    // Xử lý dữ liệu trả về
    return res.data.map((post: any) => {
      const attributes = post.attributes;

      return {
        ...post.attributes,
        author: attributes.author,
      };
    });
  }
  return [];
};

const getCaseStudyBySlug = async (slug: string, locale: string) => {
  const query = qs.stringify(
    {
      populate: ["image", "tags", "topic_case_study", "logoBrand"],
      locale: locale,
      filters: {
        slug: slug,
      },
    },
    { encodeValuesOnly: true }
  );
  try {
    const res = await getStrapiData(`${strapiEndpoint.caseStudies}?${query}`);
    return res?.data?.at(0)?.attributes;
  } catch (strapiError) {
    console.error("Error fetching data from Strapi:", strapiError);
    return false; // Re-throw the error for further handling
  }
};

const getCaseStudiesByTag = async (
  locale: string,
  pageNumber?: number,
  pageSize?: number,
  tags?: string[]
) => {
  const query = qs.stringify({
    populate: ["image", "tags", "topic_case_study", "logoBrand"],
    locale: locale,
    sort: ["publishedAt:DESC"],
    filters: tags?.length
      ? {
          tags: {
            data: {
              attributes: {
                slug: {
                  $in: tags
                }
              }
            }
          }
        }
      : undefined,
    pagination: {
      page: pageNumber ?? 1,
      pageSize: pageSize ?? 9,
    },
  });
  const res = await fetchStrapiData(`${strapiEndpoint.caseStudies}?${query}`);

  if (res?.data) {
    return res.data.map((post: any) => {
      const attributes = post.attributes;
      return {
        ...post.attributes,
        author: attributes.author,
      };
    });
  }
  return [];
};

export { 
  getBlogCategories,
  getPosts,
  getPost,
  getStrapiMediaUrl,
  fetchStrapiData,
  getPostsQuery,
  getDocpage,
  getDocCategories,
  getCaseStudies,
  getCaseStudyBySlug,
  getCaseStudiesByTag,
};
