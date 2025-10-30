import qs from "qs";
import strapiEndpoint from "./strapiEnpoint";

import {
  Doc,
  DocAttributes,
  GetDocQueryResponse,
  GetSingleQueryResponse,
  StrapiQuery,
} from "@/types";
import { AxiosResponse } from "axios";
import { axiosInstance } from "./axiosInstance";


export const getStrapiData = async <T>(
  url: string
): Promise<AxiosResponse<T>["data"]> => {
  try {
    const response = await axiosInstance.get(url);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch API data");
  }
};


export const getDocQuery = async (
  query: StrapiQuery
): Promise<GetDocQueryResponse> => {
  const data = await getStrapiData<GetDocQueryResponse>(
    `${strapiEndpoint.getDocPages}?${qs.stringify(query)}`
  );
  return data;
};

export const getDocByIdQuery = async (
  id: number
): Promise<GetSingleQueryResponse<DocAttributes>> => {
  const data = await getStrapiData<GetSingleQueryResponse<DocAttributes>>(
    `${strapiEndpoint.getDocPages}/${id}?populate=*`
  );
  return data;
};

// export const getDocBySlug = async (id: string): Promise<Doc> => {
//   const data = await getStrapiData<Doc>(
//     `${strapiEndpoint.getDocPageBySlug}/${id}`
//   );
//   return data;
// };


