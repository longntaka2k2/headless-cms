export interface ItemNavApplication {
  subscriptionId: string;
  expiredDate: string;
  planId: string;
  workspaceId: string;
  workspaceName: string;
  workspaceSlug: string;
  workspaceLogoUrl: string;
}

export interface WorkspaceSideBar {
  applicationId?: string;
  applicationName: string;
  applicationShortName: string;
  applicationLogoUrl: string;
  applicationUrl?: string;
  workspaces: ItemNavApplication[];
}

export interface NavApplication {
  isWorkspaceDisabled?: boolean;
  items: WorkspaceSideBar[];
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

export interface Workspaces {
  workspaceId: string;
  name: string;
  email: any;
  prefixPhoneNumber: string;
  phoneNumber: string;
  logoUrl: string;
  address: any;
  status: boolean;
  senderId: any;
  countryCode: string;
  slug: string;
  size: any;
  type: any;
  workspaceName: string;
  countryCodePhoneNumber: any;
  createdBy: string;
  numberOfUsers: number;
  workspaceStatus: number;
}

export interface Apps {
  id: string;
  code: string;
  name: string;
  shortName: string;
  logoUrl: string;
  url: string;
  workspaceCount: number;
  workspaceRequired: boolean;
  isDisabled: boolean;
  workspaceOwnerEmptyCount: number;
  isShowShortName: boolean;
  applicationGroupId: string;
  status: number;
  order: number;
}
