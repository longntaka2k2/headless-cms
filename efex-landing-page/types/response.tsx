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
