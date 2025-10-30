/** Type for api response */

import {
  BaseProp,
  RelationalData,
  StrapiData,
  StrapiDataCollection,
  StrapiMediaAttributes,
} from "./strapiModel";

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

export interface GetPostQueryResponse {
  data: GetPostQueryDataType[];
  meta: MetaType;
}

export interface GetSingleQueryResponse<T> {
  data: RelationalData<T>;
  meta: {};
}

export interface ReviewCategoryAtrributes extends BaseProp {
  name: string;
  slug: string;
}
export interface ReviewAttributes extends BaseProp {
  title: string;
  description: string;
  username: string;
  country?: string;
  price?: number;
  weight?: number;
  carrier?: string;
  slug: string;
  media: StrapiDataCollection<StrapiMediaAttributes>;
  review_categories: StrapiDataCollection<ReviewCategoryAtrributes>;
}
export interface Review extends BaseProp {
  title: string;
  description: string;
  username: string;
  country?: string;
  price?: number;
  weight?: number;
  carrier?: string;
  slug: string;
  robots?: string;
  media: StrapiMediaAttributes[];
  review_categories: ReviewCategoryAtrributes[];
}
export interface DocCategoryAtrributes extends BaseProp {
  name: string;
  slug: string;
  order: number;
  type: string;
  doc_pages?: StrapiDataCollection<DocAttributes>;
}
export interface DocCategory extends BaseProp, DocCategoryAtrributes {
  id: number;
}
export interface DocAttributes extends BaseProp {
  title: string;
  slug: string;
  metaTitle?: string;
  author?: string;
  metaDescription?: string;
  content: string;
  thumbnail: RelationalData<StrapiMediaAttributes>;
  thumbnailLink?: string;
  doc_category: StrapiData<DocCategoryAtrributes>;
  publishedAt: string;
}
export interface Doc extends BaseProp {
  title: string;
  slug: string;
  metaTitle?: string;
  author?: string;
  metaDescription?: string;
  content: string;
  thumbnail: StrapiMediaAttributes;
  thumbnailLink?: string;
  doc_category: DocCategory;
}
export interface GetDocQueryResponse
  extends StrapiDataCollection<DocAttributes> {
  meta: MetaType;
}
export interface GetReviewQueryResponse
  extends StrapiDataCollection<ReviewAttributes> {
  meta: MetaType;
}
export interface GetCollectionQueryResponse<T> extends StrapiDataCollection<T> {
  meta: MetaType;
}
interface GetPostQueryDataType {
  id: number;
  attributes: AttributesType;
}

interface AttributesType extends BaseProp {
  title: string;
  slug: string;
  body: string;
  author: string;
  publishedAt: string;
  locale: string;
  metaTitle: string;
  metaDescription: string;
}

interface MetaType {
  pagination: PaginationType;
}

interface PaginationType {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export default interface IProfile {
  id: string;
  fullName: string;
  code: any;
  email: string;
  company: any;
  countryCode: string;
  prefixPhoneNumber: any;
  phoneNumber: any;
  birthDay: any;
  gender: any;
  status: number;
  deleteScheduleDate: any;
  avatarUrl: any;
  accountType: number;
  subscribeType: number;
  phoneNumberConfirmed: boolean;
  emailConfirmed: boolean;
  sessionCountryCode: any;
  sessionLanguageCode: string;
  sessionCurrencyCode: string;
  sessionDateFormat: string;
  sessionTimeFormat: string;
  sessionTimeZone: string;
  countryCodePhoneNumber: any;
  configs: any[];
}
