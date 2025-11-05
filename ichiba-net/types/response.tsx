/** Type for api response */

export interface GetPostQueryResponse {
  data: GetPostQueryDataType[];
  meta: MetaType;
}

interface GetPostQueryDataType {
  id: number;
  attributes: AttributesType;
}

interface AttributesType {
  title: string;
  slug: string;
  body: string;
  author: string;
  createdAt: string;
  updatedAt: string;
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

export interface Profile {
  sub?: string;
  accountType: number | null;
  avatarUrl: string | null;
  birthDay: string | null;
  company: string | null;
  countryCode: string;
  deleteScheduleDate: string | null;
  email: string;
  emailConfirmed: boolean;
  fullName: string;
  gender: number | null;
  phoneNumber: string;
  phoneNumberConfirmed: boolean;
  prefixPhoneNumber: string | null;
  sessionCountryCode: string | null;
  sessionCurrencyCode: string | null;
  sessionDateFormat: string | null;
  sessionLanguageCode: string | null;
  sessionTimeZone: string | null;
  status: number;
  subscribeType: number;
}
