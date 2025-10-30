import { GetPostQueryResponse } from "@/types";
import { AxiosResponse } from "axios";
import qs from "qs";
import { axiosInstance } from "./axiosInstance";
import strapiEndpoint from "./strapiEnpoint";

export const getStrapiData = async (
  url: string
): Promise<AxiosResponse<any>> => {
  try {
    const response = await axiosInstance.get(url);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch API data");
  }
};
export const fetchStrapiData = async (url: string) => {
  try {
    const response = await axiosInstance.get(url);
    return response.data;
  } catch (error) {
    console.error("fetchStrapiData:", error);
    return null;
  }
};
export const getStrapiMediaUrl = (data: any): string =>
  `${process.env.NEXT_PUBLIC_API_URL}${data?.data.attributes?.url}`;
const getBlogCategories = async (locale?: string) => {
  const res = await getStrapiData(
    `${strapiEndpoint.getBlogCategories}?[locale]=${
      locale ?? "vi"
    }&pagination%5BpageSize%5D=50`
  );
  return res?.data;
};

const getPost = async (slug: string, locale: string) => {
  const query = qs.stringify(
    {
      populate: ["blog_categories", "thumbnail", "user", "author"],

      locale: locale,
      filters: {
        slug: slug,
      },
    },
    { encodeValuesOnly: true }
  );
  try {
    const res = await getStrapiData(`${strapiEndpoint.getBlog}?${query}`);
    return res?.data?.at(0)?.attributes;
  } catch (strapiError) {
    console.error("Error fetching data from Strapi:", strapiError);
    return false; // Re-throw the error for further handling
  }
};

const getPosts = async (
  locale: string,
  pageNumber?: number,
  pageSize?: number,
  category?: string | undefined,
  author?: string | undefined
) => {
  const query = qs.stringify({
    populate: ["blog_categories", "thumbnail", "user", "avatar", "author"],
    locale: locale,
    sort: ["publishedAt:DESC"],
    filters: category
      ? {
          blog_categories: {
            slug: category,
          },
          author: {
            slug: author,
          },
        }
      : undefined,
    pagination: {
      page: pageNumber ?? 1,
      pageSize: pageSize ?? 9,
    },
  });
  const res = await fetchStrapiData(`${strapiEndpoint.getBlog}?${query}`);

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

const getAuthors = async (locale?: string) => {
  const res = await getStrapiData(
    `${strapiEndpoint.getAuthors}?[locale]=${locale ?? "vi"}&&populate=*`
  );
  return res?.data;
};

const getUser = async (id: string) => {
  const query = qs.stringify({
    populate: ["avatar"],
    filters: {
      id: {
        $eq: id,
      },
    },
  });
  const res = await fetchStrapiData(`${strapiEndpoint.getUser}?${query}`);
  return res?.data;
};

const getRelatedPosts = async (
  locale: string,
  pageNumber?: number,
  pageSize?: number,
  category?: string | undefined,
  id?: string
) => {
  const query = qs.stringify({
    sort: ["publishedAt:DESC"],
    populate: ["blog_categories", "thumbnail", "user", "avatar", "author"],
    locale: locale,
    filters: {
      blog_categories: {
        slug: category
          ? {
              $eq: category,
              $ne: "promotion",
            }
          : {
              $ne: "promotion",
            },
      },
      id: id
        ? {
            $lt: id,
          }
        : { $gt: 1 },
    },
    pagination: {
      page: pageNumber ?? 1,
      pageSize: pageSize ?? 9,
    },
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

export const getPostsQuery = async (
  query: StrapiQuery
): Promise<GetPostQueryResponse["data"]> => {
  const res = await fetchStrapiData(
    `${strapiEndpoint.getBlog}?${qs.stringify(query)}`
  );
  return res?.data;
};
export const getPostsBySlug = async (slugs: string[], locale: string) =>
  await getPostsQuery({
    populate: ["thumbnail"],
    sort: ["publishedAt:desc"],
    locale: locale ? locale : "en",
    filters: {
      slug: {
        $in: slugs,
      },
    },
    pagination: { page: 1, pageSize: 8 },
  });

const getPostSitemap = async (locale: string, pageNumber: number) => {
  const query = qs.stringify({
    populate: ["banner", "slug"],
    locale: locale,
    fields: ["slug", "createdAt"],
    pagination: {
      pageNumber: pageNumber,
      pageSize: 50,
    },
  });

  const res = await fetchStrapiData(`${strapiEndpoint.getBlog}?${query}`);
  return res?.data;
};
const getAllPosts = async (
  locale: string,
  pageNumber?: number,
  pageSize?: number,
  category?: string | undefined
) => {
  const query = qs.stringify({
    populate: ["banner", "blog_categories"],
    locale: locale,
    filters: category
      ? {
          blog_categories: {
            slug: category,
          },
        }
      : undefined,
    pagination: {
      page: pageNumber ?? 1,
      pageSize: pageSize ?? 9,
    },
  });

  const res = await fetchStrapiData(`${strapiEndpoint.getBlog}?${query}`);
  return res?.data;
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
                  $in: tags,
                },
              },
            },
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

const getDocs = async (
  locale: string,
  pageNumber?: number,
  pageSize?: number,
) => {
  const query = qs.stringify({
    populate: ["*"],
    locale: locale,
    pagination: {
      page: pageNumber ?? 1,
      pageSize: pageSize ?? 9,
    },
  });

  const res = await fetchStrapiData(`${strapiEndpoint.getDocs}?${query}`);
  return res?.data;
};

const getDocBySlug = async (slug: string, locale: string) => {
  const query = qs.stringify(
    {
      populate: ["image"],
      locale: locale,
      filters: {
        slug: slug,
      },
    },
    { encodeValuesOnly: true }
  );
  try {
    const res = await getStrapiData(`${strapiEndpoint.getDocs}?${query}`);
    return res?.data?.at(0)?.attributes;
  } catch (strapiError) {
    console.error("Error fetching data from Strapi:", strapiError);
    return false; // Re-throw the error for further handling
  }
};

export {
  getAllPosts,
  getAuthors,
  getBlogCategories,
  getPost,
  getPosts,
  getPostSitemap,
  getRelatedPosts,
  getUser,
  getCaseStudies,
  getCaseStudyBySlug,
  getCaseStudiesByTag,
  getDocs,
  getDocBySlug,
};
