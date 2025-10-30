import { GraphQLClient } from "graphql-request";
// import * as Dom from 'graphql-request/dist/types.dom';
import gql from "graphql-tag";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Dimension: any;
  HexColor: any;
  JSON: any;
  Quality: any;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: "Asset";
  contentType?: Maybe<Scalars["String"]>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars["String"]>;
  fileName?: Maybe<Scalars["String"]>;
  height?: Maybe<Scalars["Int"]>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars["Int"]>;
  sys: Sys;
  title?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  width?: Maybe<Scalars["Int"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  transform?: InputMaybe<ImageTransformOptions>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type AssetCollection = {
  __typename?: "AssetCollection";
  items: Array<Maybe<Asset>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars["String"]>;
  contentType_contains?: InputMaybe<Scalars["String"]>;
  contentType_exists?: InputMaybe<Scalars["Boolean"]>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  contentType_not?: InputMaybe<Scalars["String"]>;
  contentType_not_contains?: InputMaybe<Scalars["String"]>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars["String"]>;
  description_contains?: InputMaybe<Scalars["String"]>;
  description_exists?: InputMaybe<Scalars["Boolean"]>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  description_not?: InputMaybe<Scalars["String"]>;
  description_not_contains?: InputMaybe<Scalars["String"]>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  fileName?: InputMaybe<Scalars["String"]>;
  fileName_contains?: InputMaybe<Scalars["String"]>;
  fileName_exists?: InputMaybe<Scalars["Boolean"]>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  fileName_not?: InputMaybe<Scalars["String"]>;
  fileName_not_contains?: InputMaybe<Scalars["String"]>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  height?: InputMaybe<Scalars["Int"]>;
  height_exists?: InputMaybe<Scalars["Boolean"]>;
  height_gt?: InputMaybe<Scalars["Int"]>;
  height_gte?: InputMaybe<Scalars["Int"]>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  height_lt?: InputMaybe<Scalars["Int"]>;
  height_lte?: InputMaybe<Scalars["Int"]>;
  height_not?: InputMaybe<Scalars["Int"]>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  size?: InputMaybe<Scalars["Int"]>;
  size_exists?: InputMaybe<Scalars["Boolean"]>;
  size_gt?: InputMaybe<Scalars["Int"]>;
  size_gte?: InputMaybe<Scalars["Int"]>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  size_lt?: InputMaybe<Scalars["Int"]>;
  size_lte?: InputMaybe<Scalars["Int"]>;
  size_not?: InputMaybe<Scalars["Int"]>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]>;
  title_contains?: InputMaybe<Scalars["String"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  title_not?: InputMaybe<Scalars["String"]>;
  title_not_contains?: InputMaybe<Scalars["String"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  url?: InputMaybe<Scalars["String"]>;
  url_contains?: InputMaybe<Scalars["String"]>;
  url_exists?: InputMaybe<Scalars["Boolean"]>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  url_not?: InputMaybe<Scalars["String"]>;
  url_not_contains?: InputMaybe<Scalars["String"]>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  width?: InputMaybe<Scalars["Int"]>;
  width_exists?: InputMaybe<Scalars["Boolean"]>;
  width_gt?: InputMaybe<Scalars["Int"]>;
  width_gte?: InputMaybe<Scalars["Int"]>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  width_lt?: InputMaybe<Scalars["Int"]>;
  width_lte?: InputMaybe<Scalars["Int"]>;
  width_not?: InputMaybe<Scalars["Int"]>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
};

export type AssetLinkingCollections = {
  __typename?: "AssetLinkingCollections";
  blogDetailCollection?: Maybe<BlogDetailCollection>;
  componentSolutionCollection?: Maybe<ComponentSolutionCollection>;
  determinedCollection?: Maybe<DeterminedCollection>;
  determinedItemsCollection?: Maybe<DeterminedItemsCollection>;
  entryCollection?: Maybe<EntryCollection>;
  eventItemsCollection?: Maybe<EventItemsCollection>;
  homeBannerCollection?: Maybe<HomeBannerCollection>;
  ichibaCommunityCollection?: Maybe<IchibaCommunityCollection>;
  ichibaCommunityItemsCollection?: Maybe<IchibaCommunityItemsCollection>;
  layoutBlogDetailCollection?: Maybe<LayoutBlogDetailCollection>;
  ourCustomersCollection?: Maybe<OurCustomersCollection>;
  outProductOfTabCollection?: Maybe<OutProductOfTabCollection>;
  signUpBlogCollection?: Maybe<SignUpBlogCollection>;
};

export type AssetLinkingCollectionsBlogDetailCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type AssetLinkingCollectionsComponentSolutionCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type AssetLinkingCollectionsDeterminedCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type AssetLinkingCollectionsDeterminedItemsCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type AssetLinkingCollectionsEventItemsCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type AssetLinkingCollectionsHomeBannerCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type AssetLinkingCollectionsIchibaCommunityCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type AssetLinkingCollectionsIchibaCommunityItemsCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type AssetLinkingCollectionsLayoutBlogDetailCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type AssetLinkingCollectionsOurCustomersCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type AssetLinkingCollectionsOutProductOfTabCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type AssetLinkingCollectionsSignUpBlogCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export enum AssetOrder {
  ContentTypeAsc = "contentType_ASC",
  ContentTypeDesc = "contentType_DESC",
  FileNameAsc = "fileName_ASC",
  FileNameDesc = "fileName_DESC",
  HeightAsc = "height_ASC",
  HeightDesc = "height_DESC",
  SizeAsc = "size_ASC",
  SizeDesc = "size_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  UrlAsc = "url_ASC",
  UrlDesc = "url_DESC",
  WidthAsc = "width_ASC",
  WidthDesc = "width_DESC",
}

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/blog) */
export type Blog = Entry & {
  __typename?: "Blog";
  blogSideRightCollection?: Maybe<BlogBlogSideRightCollection>;
  browserAllCollection?: Maybe<BlogBrowserAllCollection>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<BlogLinkingCollections>;
  mostPopularCollection?: Maybe<BlogMostPopularCollection>;
  newsBlog?: Maybe<Entry>;
  signUp?: Maybe<Entry>;
  sys: Sys;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/blog) */
export type BlogBlogSideRightCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/blog) */
export type BlogBrowserAllCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/blog) */
export type BlogLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/blog) */
export type BlogMostPopularCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/blog) */
export type BlogNewsBlogArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/blog) */
export type BlogSignUpArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

export type BlogBlogSideRightCollection = {
  __typename?: "BlogBlogSideRightCollection";
  items: Array<Maybe<Entry>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type BlogBrowserAllCollection = {
  __typename?: "BlogBrowserAllCollection";
  items: Array<Maybe<Entry>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type BlogCollection = {
  __typename?: "BlogCollection";
  items: Array<Maybe<Blog>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/blogDetail) */
export type BlogDetail = Entry & {
  __typename?: "BlogDetail";
  author?: Maybe<Scalars["String"]>;
  authorBiography?: Maybe<Scalars["String"]>;
  avtAuthor?: Maybe<Asset>;
  category?: Maybe<Scalars["String"]>;
  content?: Maybe<Scalars["String"]>;
  contentRichText?: Maybe<BlogDetailContentRichText>;
  contentfulMetadata: ContentfulMetadata;
  date?: Maybe<Scalars["String"]>;
  img?: Maybe<Asset>;
  linkedFrom?: Maybe<BlogDetailLinkingCollections>;
  metadataCollection?: Maybe<BlogDetailMetadataCollection>;
  relatedProductsCollection?: Maybe<BlogDetailRelatedProductsCollection>;
  slug?: Maybe<Scalars["String"]>;
  sys: Sys;
  title?: Maybe<Scalars["String"]>;
  topic?: Maybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/blogDetail) */
export type BlogDetailAuthorArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/blogDetail) */
export type BlogDetailAuthorBiographyArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/blogDetail) */
export type BlogDetailAvtAuthorArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/blogDetail) */
export type BlogDetailCategoryArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/blogDetail) */
export type BlogDetailContentArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/blogDetail) */
export type BlogDetailContentRichTextArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/blogDetail) */
export type BlogDetailDateArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/blogDetail) */
export type BlogDetailImgArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/blogDetail) */
export type BlogDetailLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/blogDetail) */
export type BlogDetailMetadataCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/blogDetail) */
export type BlogDetailRelatedProductsCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/blogDetail) */
export type BlogDetailSlugArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/blogDetail) */
export type BlogDetailTitleArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/blogDetail) */
export type BlogDetailTopicArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type BlogDetailCollection = {
  __typename?: "BlogDetailCollection";
  items: Array<Maybe<BlogDetail>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type BlogDetailContentRichText = {
  __typename?: "BlogDetailContentRichText";
  json: Scalars["JSON"];
  links: BlogDetailContentRichTextLinks;
};

export type BlogDetailContentRichTextAssets = {
  __typename?: "BlogDetailContentRichTextAssets";
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type BlogDetailContentRichTextEntries = {
  __typename?: "BlogDetailContentRichTextEntries";
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type BlogDetailContentRichTextLinks = {
  __typename?: "BlogDetailContentRichTextLinks";
  assets: BlogDetailContentRichTextAssets;
  entries: BlogDetailContentRichTextEntries;
};

export type BlogDetailFilter = {
  AND?: InputMaybe<Array<InputMaybe<BlogDetailFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<BlogDetailFilter>>>;
  author?: InputMaybe<Scalars["String"]>;
  authorBiography?: InputMaybe<Scalars["String"]>;
  authorBiography_contains?: InputMaybe<Scalars["String"]>;
  authorBiography_exists?: InputMaybe<Scalars["Boolean"]>;
  authorBiography_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  authorBiography_not?: InputMaybe<Scalars["String"]>;
  authorBiography_not_contains?: InputMaybe<Scalars["String"]>;
  authorBiography_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  author_contains?: InputMaybe<Scalars["String"]>;
  author_exists?: InputMaybe<Scalars["Boolean"]>;
  author_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  author_not?: InputMaybe<Scalars["String"]>;
  author_not_contains?: InputMaybe<Scalars["String"]>;
  author_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  avtAuthor_exists?: InputMaybe<Scalars["Boolean"]>;
  category?: InputMaybe<Scalars["String"]>;
  category_contains?: InputMaybe<Scalars["String"]>;
  category_exists?: InputMaybe<Scalars["Boolean"]>;
  category_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  category_not?: InputMaybe<Scalars["String"]>;
  category_not_contains?: InputMaybe<Scalars["String"]>;
  category_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  content?: InputMaybe<Scalars["String"]>;
  contentRichText_contains?: InputMaybe<Scalars["String"]>;
  contentRichText_exists?: InputMaybe<Scalars["Boolean"]>;
  contentRichText_not_contains?: InputMaybe<Scalars["String"]>;
  content_contains?: InputMaybe<Scalars["String"]>;
  content_exists?: InputMaybe<Scalars["Boolean"]>;
  content_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  content_not?: InputMaybe<Scalars["String"]>;
  content_not_contains?: InputMaybe<Scalars["String"]>;
  content_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  date?: InputMaybe<Scalars["String"]>;
  date_contains?: InputMaybe<Scalars["String"]>;
  date_exists?: InputMaybe<Scalars["Boolean"]>;
  date_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  date_not?: InputMaybe<Scalars["String"]>;
  date_not_contains?: InputMaybe<Scalars["String"]>;
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  img_exists?: InputMaybe<Scalars["Boolean"]>;
  metadataCollection_exists?: InputMaybe<Scalars["Boolean"]>;
  relatedProductsCollection_exists?: InputMaybe<Scalars["Boolean"]>;
  slug?: InputMaybe<Scalars["String"]>;
  slug_contains?: InputMaybe<Scalars["String"]>;
  slug_exists?: InputMaybe<Scalars["Boolean"]>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  slug_not?: InputMaybe<Scalars["String"]>;
  slug_not_contains?: InputMaybe<Scalars["String"]>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]>;
  title_contains?: InputMaybe<Scalars["String"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  title_not?: InputMaybe<Scalars["String"]>;
  title_not_contains?: InputMaybe<Scalars["String"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  topic?: InputMaybe<Scalars["String"]>;
  topic_contains?: InputMaybe<Scalars["String"]>;
  topic_exists?: InputMaybe<Scalars["Boolean"]>;
  topic_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  topic_not?: InputMaybe<Scalars["String"]>;
  topic_not_contains?: InputMaybe<Scalars["String"]>;
  topic_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type BlogDetailLinkingCollections = {
  __typename?: "BlogDetailLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
};

export type BlogDetailLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type BlogDetailMetadataCollection = {
  __typename?: "BlogDetailMetadataCollection";
  items: Array<Maybe<Entry>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export enum BlogDetailOrder {
  AuthorBiographyAsc = "authorBiography_ASC",
  AuthorBiographyDesc = "authorBiography_DESC",
  AuthorAsc = "author_ASC",
  AuthorDesc = "author_DESC",
  CategoryAsc = "category_ASC",
  CategoryDesc = "category_DESC",
  DateAsc = "date_ASC",
  DateDesc = "date_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  TopicAsc = "topic_ASC",
  TopicDesc = "topic_DESC",
}

export type BlogDetailRelatedProductsCollection = {
  __typename?: "BlogDetailRelatedProductsCollection";
  items: Array<Maybe<Entry>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type BlogFilter = {
  AND?: InputMaybe<Array<InputMaybe<BlogFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<BlogFilter>>>;
  blogSideRightCollection_exists?: InputMaybe<Scalars["Boolean"]>;
  browserAllCollection_exists?: InputMaybe<Scalars["Boolean"]>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  mostPopularCollection_exists?: InputMaybe<Scalars["Boolean"]>;
  newsBlog_exists?: InputMaybe<Scalars["Boolean"]>;
  signUp_exists?: InputMaybe<Scalars["Boolean"]>;
  sys?: InputMaybe<SysFilter>;
};

export type BlogLinkingCollections = {
  __typename?: "BlogLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
};

export type BlogLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type BlogMostPopularCollection = {
  __typename?: "BlogMostPopularCollection";
  items: Array<Maybe<Entry>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export enum BlogOrder {
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/careerDetail) */
export type CareerDetail = Entry & {
  __typename?: "CareerDetail";
  body?: Maybe<CareerDetailBody>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<CareerDetailLinkingCollections>;
  slug?: Maybe<Scalars["String"]>;
  sys: Sys;
  title?: Maybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/careerDetail) */
export type CareerDetailBodyArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/careerDetail) */
export type CareerDetailLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/careerDetail) */
export type CareerDetailSlugArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/careerDetail) */
export type CareerDetailTitleArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type CareerDetailBody = {
  __typename?: "CareerDetailBody";
  json: Scalars["JSON"];
  links: CareerDetailBodyLinks;
};

export type CareerDetailBodyAssets = {
  __typename?: "CareerDetailBodyAssets";
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type CareerDetailBodyEntries = {
  __typename?: "CareerDetailBodyEntries";
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type CareerDetailBodyLinks = {
  __typename?: "CareerDetailBodyLinks";
  assets: CareerDetailBodyAssets;
  entries: CareerDetailBodyEntries;
};

export type CareerDetailCollection = {
  __typename?: "CareerDetailCollection";
  items: Array<Maybe<CareerDetail>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type CareerDetailFilter = {
  AND?: InputMaybe<Array<InputMaybe<CareerDetailFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CareerDetailFilter>>>;
  body_contains?: InputMaybe<Scalars["String"]>;
  body_exists?: InputMaybe<Scalars["Boolean"]>;
  body_not_contains?: InputMaybe<Scalars["String"]>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  slug?: InputMaybe<Scalars["String"]>;
  slug_contains?: InputMaybe<Scalars["String"]>;
  slug_exists?: InputMaybe<Scalars["Boolean"]>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  slug_not?: InputMaybe<Scalars["String"]>;
  slug_not_contains?: InputMaybe<Scalars["String"]>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]>;
  title_contains?: InputMaybe<Scalars["String"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  title_not?: InputMaybe<Scalars["String"]>;
  title_not_contains?: InputMaybe<Scalars["String"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type CareerDetailLinkingCollections = {
  __typename?: "CareerDetailLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
};

export type CareerDetailLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export enum CareerDetailOrder {
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/componentSolution) */
export type ComponentSolution = Entry & {
  __typename?: "ComponentSolution";
  contentfulMetadata: ContentfulMetadata;
  img?: Maybe<Asset>;
  itemsLeftCollection?: Maybe<ComponentSolutionItemsLeftCollection>;
  itemsRightCollection?: Maybe<ComponentSolutionItemsRightCollection>;
  linkedFrom?: Maybe<ComponentSolutionLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/componentSolution) */
export type ComponentSolutionImgArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/componentSolution) */
export type ComponentSolutionItemsLeftCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/componentSolution) */
export type ComponentSolutionItemsRightCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/componentSolution) */
export type ComponentSolutionLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/componentSolution) */
export type ComponentSolutionTitleArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type ComponentSolutionCollection = {
  __typename?: "ComponentSolutionCollection";
  items: Array<Maybe<ComponentSolution>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type ComponentSolutionFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentSolutionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentSolutionFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  img_exists?: InputMaybe<Scalars["Boolean"]>;
  itemsLeftCollection_exists?: InputMaybe<Scalars["Boolean"]>;
  itemsRightCollection_exists?: InputMaybe<Scalars["Boolean"]>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]>;
  title_contains?: InputMaybe<Scalars["String"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  title_not?: InputMaybe<Scalars["String"]>;
  title_not_contains?: InputMaybe<Scalars["String"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type ComponentSolutionItemsLeftCollection = {
  __typename?: "ComponentSolutionItemsLeftCollection";
  items: Array<Maybe<Entry>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type ComponentSolutionItemsRightCollection = {
  __typename?: "ComponentSolutionItemsRightCollection";
  items: Array<Maybe<Entry>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type ComponentSolutionLinkingCollections = {
  __typename?: "ComponentSolutionLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
};

export type ComponentSolutionLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export enum ComponentSolutionOrder {
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/contentPrivacy) */
export type ContentPrivacy = Entry & {
  __typename?: "ContentPrivacy";
  content?: Maybe<ContentPrivacyContent>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<ContentPrivacyLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/contentPrivacy) */
export type ContentPrivacyContentArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/contentPrivacy) */
export type ContentPrivacyLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/contentPrivacy) */
export type ContentPrivacyTitleArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type ContentPrivacyCollection = {
  __typename?: "ContentPrivacyCollection";
  items: Array<Maybe<ContentPrivacy>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type ContentPrivacyContent = {
  __typename?: "ContentPrivacyContent";
  json: Scalars["JSON"];
  links: ContentPrivacyContentLinks;
};

export type ContentPrivacyContentAssets = {
  __typename?: "ContentPrivacyContentAssets";
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ContentPrivacyContentEntries = {
  __typename?: "ContentPrivacyContentEntries";
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ContentPrivacyContentLinks = {
  __typename?: "ContentPrivacyContentLinks";
  assets: ContentPrivacyContentAssets;
  entries: ContentPrivacyContentEntries;
};

export type ContentPrivacyFilter = {
  AND?: InputMaybe<Array<InputMaybe<ContentPrivacyFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ContentPrivacyFilter>>>;
  content_contains?: InputMaybe<Scalars["String"]>;
  content_exists?: InputMaybe<Scalars["Boolean"]>;
  content_not_contains?: InputMaybe<Scalars["String"]>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]>;
  title_contains?: InputMaybe<Scalars["String"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  title_not?: InputMaybe<Scalars["String"]>;
  title_not_contains?: InputMaybe<Scalars["String"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type ContentPrivacyLinkingCollections = {
  __typename?: "ContentPrivacyLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
};

export type ContentPrivacyLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export enum ContentPrivacyOrder {
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export type ContentfulMetadata = {
  __typename?: "ContentfulMetadata";
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars["Boolean"]>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: "ContentfulTag";
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/determined) */
export type Determined = Entry & {
  __typename?: "Determined";
  background?: Maybe<Asset>;
  content?: Maybe<Scalars["String"]>;
  contentAudits?: Maybe<Scalars["String"]>;
  contentfulMetadata: ContentfulMetadata;
  iconsAuditsCollection?: Maybe<AssetCollection>;
  itemsDeterminedCollection?: Maybe<DeterminedItemsDeterminedCollection>;
  linkedFrom?: Maybe<DeterminedLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars["String"]>;
  titleAudits?: Maybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/determined) */
export type DeterminedBackgroundArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/determined) */
export type DeterminedContentArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/determined) */
export type DeterminedContentAuditsArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/determined) */
export type DeterminedIconsAuditsCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/determined) */
export type DeterminedItemsDeterminedCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/determined) */
export type DeterminedLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/determined) */
export type DeterminedTitleArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/determined) */
export type DeterminedTitleAuditsArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type DeterminedCollection = {
  __typename?: "DeterminedCollection";
  items: Array<Maybe<Determined>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type DeterminedFilter = {
  AND?: InputMaybe<Array<InputMaybe<DeterminedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<DeterminedFilter>>>;
  background_exists?: InputMaybe<Scalars["Boolean"]>;
  content?: InputMaybe<Scalars["String"]>;
  contentAudits?: InputMaybe<Scalars["String"]>;
  contentAudits_contains?: InputMaybe<Scalars["String"]>;
  contentAudits_exists?: InputMaybe<Scalars["Boolean"]>;
  contentAudits_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  contentAudits_not?: InputMaybe<Scalars["String"]>;
  contentAudits_not_contains?: InputMaybe<Scalars["String"]>;
  contentAudits_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  content_contains?: InputMaybe<Scalars["String"]>;
  content_exists?: InputMaybe<Scalars["Boolean"]>;
  content_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  content_not?: InputMaybe<Scalars["String"]>;
  content_not_contains?: InputMaybe<Scalars["String"]>;
  content_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  iconsAuditsCollection_exists?: InputMaybe<Scalars["Boolean"]>;
  itemsDeterminedCollection_exists?: InputMaybe<Scalars["Boolean"]>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]>;
  titleAudits?: InputMaybe<Scalars["String"]>;
  titleAudits_contains?: InputMaybe<Scalars["String"]>;
  titleAudits_exists?: InputMaybe<Scalars["Boolean"]>;
  titleAudits_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  titleAudits_not?: InputMaybe<Scalars["String"]>;
  titleAudits_not_contains?: InputMaybe<Scalars["String"]>;
  titleAudits_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  title_contains?: InputMaybe<Scalars["String"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  title_not?: InputMaybe<Scalars["String"]>;
  title_not_contains?: InputMaybe<Scalars["String"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/determinedItems) */
export type DeterminedItems = Entry & {
  __typename?: "DeterminedItems";
  content?: Maybe<Scalars["String"]>;
  contentfulMetadata: ContentfulMetadata;
  img?: Maybe<Asset>;
  linkedFrom?: Maybe<DeterminedItemsLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/determinedItems) */
export type DeterminedItemsContentArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/determinedItems) */
export type DeterminedItemsImgArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/determinedItems) */
export type DeterminedItemsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/determinedItems) */
export type DeterminedItemsTitleArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type DeterminedItemsCollection = {
  __typename?: "DeterminedItemsCollection";
  items: Array<Maybe<DeterminedItems>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type DeterminedItemsDeterminedCollection = {
  __typename?: "DeterminedItemsDeterminedCollection";
  items: Array<Maybe<Entry>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type DeterminedItemsFilter = {
  AND?: InputMaybe<Array<InputMaybe<DeterminedItemsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<DeterminedItemsFilter>>>;
  content?: InputMaybe<Scalars["String"]>;
  content_contains?: InputMaybe<Scalars["String"]>;
  content_exists?: InputMaybe<Scalars["Boolean"]>;
  content_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  content_not?: InputMaybe<Scalars["String"]>;
  content_not_contains?: InputMaybe<Scalars["String"]>;
  content_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  img_exists?: InputMaybe<Scalars["Boolean"]>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]>;
  title_contains?: InputMaybe<Scalars["String"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  title_not?: InputMaybe<Scalars["String"]>;
  title_not_contains?: InputMaybe<Scalars["String"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type DeterminedItemsLinkingCollections = {
  __typename?: "DeterminedItemsLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
};

export type DeterminedItemsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export enum DeterminedItemsOrder {
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export type DeterminedLinkingCollections = {
  __typename?: "DeterminedLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
};

export type DeterminedLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export enum DeterminedOrder {
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAuditsAsc = "titleAudits_ASC",
  TitleAuditsDesc = "titleAudits_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: "EntryCollection";
  items: Array<Maybe<Entry>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/eventItems) */
export type EventItems = Entry & {
  __typename?: "EventItems";
  content?: Maybe<Scalars["String"]>;
  contentfulMetadata: ContentfulMetadata;
  date?: Maybe<Scalars["String"]>;
  img?: Maybe<Asset>;
  linkedFrom?: Maybe<EventItemsLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/eventItems) */
export type EventItemsContentArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/eventItems) */
export type EventItemsDateArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/eventItems) */
export type EventItemsImgArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/eventItems) */
export type EventItemsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/eventItems) */
export type EventItemsTitleArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type EventItemsCollection = {
  __typename?: "EventItemsCollection";
  items: Array<Maybe<EventItems>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type EventItemsFilter = {
  AND?: InputMaybe<Array<InputMaybe<EventItemsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EventItemsFilter>>>;
  content?: InputMaybe<Scalars["String"]>;
  content_contains?: InputMaybe<Scalars["String"]>;
  content_exists?: InputMaybe<Scalars["Boolean"]>;
  content_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  content_not?: InputMaybe<Scalars["String"]>;
  content_not_contains?: InputMaybe<Scalars["String"]>;
  content_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  date?: InputMaybe<Scalars["String"]>;
  date_contains?: InputMaybe<Scalars["String"]>;
  date_exists?: InputMaybe<Scalars["Boolean"]>;
  date_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  date_not?: InputMaybe<Scalars["String"]>;
  date_not_contains?: InputMaybe<Scalars["String"]>;
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  img_exists?: InputMaybe<Scalars["Boolean"]>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]>;
  title_contains?: InputMaybe<Scalars["String"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  title_not?: InputMaybe<Scalars["String"]>;
  title_not_contains?: InputMaybe<Scalars["String"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type EventItemsLinkingCollections = {
  __typename?: "EventItemsLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
};

export type EventItemsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export enum EventItemsOrder {
  DateAsc = "date_ASC",
  DateDesc = "date_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/homeBanner) */
export type HomeBanner = Entry & {
  __typename?: "HomeBanner";
  buttonFreeTrial?: Maybe<Scalars["String"]>;
  buttonTakeTour?: Maybe<Scalars["String"]>;
  content?: Maybe<Array<Maybe<Scalars["String"]>>>;
  content1?: Maybe<Scalars["String"]>;
  content2?: Maybe<Scalars["String"]>;
  contentfulMetadata: ContentfulMetadata;
  img?: Maybe<Asset>;
  linkedFrom?: Maybe<HomeBannerLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/homeBanner) */
export type HomeBannerButtonFreeTrialArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/homeBanner) */
export type HomeBannerButtonTakeTourArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/homeBanner) */
export type HomeBannerContentArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/homeBanner) */
export type HomeBannerContent1Args = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/homeBanner) */
export type HomeBannerContent2Args = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/homeBanner) */
export type HomeBannerImgArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/homeBanner) */
export type HomeBannerLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/homeBanner) */
export type HomeBannerTitleArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type HomeBannerCollection = {
  __typename?: "HomeBannerCollection";
  items: Array<Maybe<HomeBanner>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type HomeBannerFilter = {
  AND?: InputMaybe<Array<InputMaybe<HomeBannerFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HomeBannerFilter>>>;
  buttonFreeTrial?: InputMaybe<Scalars["String"]>;
  buttonFreeTrial_contains?: InputMaybe<Scalars["String"]>;
  buttonFreeTrial_exists?: InputMaybe<Scalars["Boolean"]>;
  buttonFreeTrial_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  buttonFreeTrial_not?: InputMaybe<Scalars["String"]>;
  buttonFreeTrial_not_contains?: InputMaybe<Scalars["String"]>;
  buttonFreeTrial_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  buttonTakeTour?: InputMaybe<Scalars["String"]>;
  buttonTakeTour_contains?: InputMaybe<Scalars["String"]>;
  buttonTakeTour_exists?: InputMaybe<Scalars["Boolean"]>;
  buttonTakeTour_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  buttonTakeTour_not?: InputMaybe<Scalars["String"]>;
  buttonTakeTour_not_contains?: InputMaybe<Scalars["String"]>;
  buttonTakeTour_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  content1?: InputMaybe<Scalars["String"]>;
  content1_contains?: InputMaybe<Scalars["String"]>;
  content1_exists?: InputMaybe<Scalars["Boolean"]>;
  content1_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  content1_not?: InputMaybe<Scalars["String"]>;
  content1_not_contains?: InputMaybe<Scalars["String"]>;
  content1_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  content2?: InputMaybe<Scalars["String"]>;
  content2_contains?: InputMaybe<Scalars["String"]>;
  content2_exists?: InputMaybe<Scalars["Boolean"]>;
  content2_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  content2_not?: InputMaybe<Scalars["String"]>;
  content2_not_contains?: InputMaybe<Scalars["String"]>;
  content2_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  content_contains_all?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  content_contains_none?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  content_contains_some?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  content_exists?: InputMaybe<Scalars["Boolean"]>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  img_exists?: InputMaybe<Scalars["Boolean"]>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]>;
  title_contains?: InputMaybe<Scalars["String"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  title_not?: InputMaybe<Scalars["String"]>;
  title_not_contains?: InputMaybe<Scalars["String"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type HomeBannerLinkingCollections = {
  __typename?: "HomeBannerLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
};

export type HomeBannerLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export enum HomeBannerOrder {
  ButtonFreeTrialAsc = "buttonFreeTrial_ASC",
  ButtonFreeTrialDesc = "buttonFreeTrial_DESC",
  ButtonTakeTourAsc = "buttonTakeTour_ASC",
  ButtonTakeTourDesc = "buttonTakeTour_DESC",
  Content1Asc = "content1_ASC",
  Content1Desc = "content1_DESC",
  Content2Asc = "content2_ASC",
  Content2Desc = "content2_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/ichibaCommunity) */
export type IchibaCommunity = Entry & {
  __typename?: "IchibaCommunity";
  background?: Maybe<Asset>;
  button?: Maybe<Scalars["String"]>;
  content?: Maybe<Scalars["String"]>;
  contentfulMetadata: ContentfulMetadata;
  img?: Maybe<Asset>;
  itemsContentCollection?: Maybe<IchibaCommunityItemsContentCollection>;
  linkedFrom?: Maybe<IchibaCommunityLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/ichibaCommunity) */
export type IchibaCommunityBackgroundArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/ichibaCommunity) */
export type IchibaCommunityButtonArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/ichibaCommunity) */
export type IchibaCommunityContentArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/ichibaCommunity) */
export type IchibaCommunityImgArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/ichibaCommunity) */
export type IchibaCommunityItemsContentCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/ichibaCommunity) */
export type IchibaCommunityLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/ichibaCommunity) */
export type IchibaCommunityTitleArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IchibaCommunityCollection = {
  __typename?: "IchibaCommunityCollection";
  items: Array<Maybe<IchibaCommunity>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type IchibaCommunityFilter = {
  AND?: InputMaybe<Array<InputMaybe<IchibaCommunityFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IchibaCommunityFilter>>>;
  background_exists?: InputMaybe<Scalars["Boolean"]>;
  button?: InputMaybe<Scalars["String"]>;
  button_contains?: InputMaybe<Scalars["String"]>;
  button_exists?: InputMaybe<Scalars["Boolean"]>;
  button_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  button_not?: InputMaybe<Scalars["String"]>;
  button_not_contains?: InputMaybe<Scalars["String"]>;
  button_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  content?: InputMaybe<Scalars["String"]>;
  content_contains?: InputMaybe<Scalars["String"]>;
  content_exists?: InputMaybe<Scalars["Boolean"]>;
  content_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  content_not?: InputMaybe<Scalars["String"]>;
  content_not_contains?: InputMaybe<Scalars["String"]>;
  content_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  img_exists?: InputMaybe<Scalars["Boolean"]>;
  itemsContentCollection_exists?: InputMaybe<Scalars["Boolean"]>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]>;
  title_contains?: InputMaybe<Scalars["String"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  title_not?: InputMaybe<Scalars["String"]>;
  title_not_contains?: InputMaybe<Scalars["String"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/ichibaCommunityItems) */
export type IchibaCommunityItems = Entry & {
  __typename?: "IchibaCommunityItems";
  content?: Maybe<Scalars["String"]>;
  contentfulMetadata: ContentfulMetadata;
  img?: Maybe<Asset>;
  linkedFrom?: Maybe<IchibaCommunityItemsLinkingCollections>;
  slug?: Maybe<Scalars["String"]>;
  sys: Sys;
  title?: Maybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/ichibaCommunityItems) */
export type IchibaCommunityItemsContentArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/ichibaCommunityItems) */
export type IchibaCommunityItemsImgArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/ichibaCommunityItems) */
export type IchibaCommunityItemsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/ichibaCommunityItems) */
export type IchibaCommunityItemsSlugArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/ichibaCommunityItems) */
export type IchibaCommunityItemsTitleArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type IchibaCommunityItemsCollection = {
  __typename?: "IchibaCommunityItemsCollection";
  items: Array<Maybe<IchibaCommunityItems>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type IchibaCommunityItemsContentCollection = {
  __typename?: "IchibaCommunityItemsContentCollection";
  items: Array<Maybe<Entry>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type IchibaCommunityItemsFilter = {
  AND?: InputMaybe<Array<InputMaybe<IchibaCommunityItemsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IchibaCommunityItemsFilter>>>;
  content?: InputMaybe<Scalars["String"]>;
  content_contains?: InputMaybe<Scalars["String"]>;
  content_exists?: InputMaybe<Scalars["Boolean"]>;
  content_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  content_not?: InputMaybe<Scalars["String"]>;
  content_not_contains?: InputMaybe<Scalars["String"]>;
  content_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  img_exists?: InputMaybe<Scalars["Boolean"]>;
  slug?: InputMaybe<Scalars["String"]>;
  slug_contains?: InputMaybe<Scalars["String"]>;
  slug_exists?: InputMaybe<Scalars["Boolean"]>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  slug_not?: InputMaybe<Scalars["String"]>;
  slug_not_contains?: InputMaybe<Scalars["String"]>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]>;
  title_contains?: InputMaybe<Scalars["String"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  title_not?: InputMaybe<Scalars["String"]>;
  title_not_contains?: InputMaybe<Scalars["String"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type IchibaCommunityItemsLinkingCollections = {
  __typename?: "IchibaCommunityItemsLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
};

export type IchibaCommunityItemsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export enum IchibaCommunityItemsOrder {
  ContentAsc = "content_ASC",
  ContentDesc = "content_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export type IchibaCommunityLinkingCollections = {
  __typename?: "IchibaCommunityLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
};

export type IchibaCommunityLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export enum IchibaCommunityOrder {
  ButtonAsc = "button_ASC",
  ButtonDesc = "button_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export enum ImageFormat {
  Avif = "AVIF",
  /** JPG image format. */
  Jpg = "JPG",
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = "JPG_PROGRESSIVE",
  /** PNG image format */
  Png = "PNG",
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = "PNG8",
  /** WebP image format. */
  Webp = "WEBP",
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = "BOTTOM",
  /** Focus the resizing on the bottom left. */
  BottomLeft = "BOTTOM_LEFT",
  /** Focus the resizing on the bottom right. */
  BottomRight = "BOTTOM_RIGHT",
  /** Focus the resizing on the center. */
  Center = "CENTER",
  /** Focus the resizing on the largest face. */
  Face = "FACE",
  /** Focus the resizing on the area containing all the faces. */
  Faces = "FACES",
  /** Focus the resizing on the left. */
  Left = "LEFT",
  /** Focus the resizing on the right. */
  Right = "RIGHT",
  /** Focus the resizing on the top. */
  Top = "TOP",
  /** Focus the resizing on the top left. */
  TopLeft = "TOP_LEFT",
  /** Focus the resizing on the top right. */
  TopRight = "TOP_RIGHT",
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = "CROP",
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = "FILL",
  /** Resizes the image to fit into the specified dimensions. */
  Fit = "FIT",
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = "PAD",
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = "SCALE",
  /** Creates a thumbnail from the image. */
  Thumb = "THUMB",
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars["HexColor"]>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars["Int"]>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars["Dimension"]>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars["Quality"]>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars["Dimension"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/lastestCompany) */
export type LastestCompany = Entry & {
  __typename?: "LastestCompany";
  content?: Maybe<Scalars["String"]>;
  contentfulMetadata: ContentfulMetadata;
  itemsCollection?: Maybe<LastestCompanyItemsCollection>;
  linkedFrom?: Maybe<LastestCompanyLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/lastestCompany) */
export type LastestCompanyContentArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/lastestCompany) */
export type LastestCompanyItemsCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/lastestCompany) */
export type LastestCompanyLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/lastestCompany) */
export type LastestCompanyTitleArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type LastestCompanyCollection = {
  __typename?: "LastestCompanyCollection";
  items: Array<Maybe<LastestCompany>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type LastestCompanyFilter = {
  AND?: InputMaybe<Array<InputMaybe<LastestCompanyFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<LastestCompanyFilter>>>;
  content?: InputMaybe<Scalars["String"]>;
  content_contains?: InputMaybe<Scalars["String"]>;
  content_exists?: InputMaybe<Scalars["Boolean"]>;
  content_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  content_not?: InputMaybe<Scalars["String"]>;
  content_not_contains?: InputMaybe<Scalars["String"]>;
  content_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  itemsCollection_exists?: InputMaybe<Scalars["Boolean"]>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]>;
  title_contains?: InputMaybe<Scalars["String"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  title_not?: InputMaybe<Scalars["String"]>;
  title_not_contains?: InputMaybe<Scalars["String"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type LastestCompanyItemsCollection = {
  __typename?: "LastestCompanyItemsCollection";
  items: Array<Maybe<Entry>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type LastestCompanyLinkingCollections = {
  __typename?: "LastestCompanyLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
};

export type LastestCompanyLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export enum LastestCompanyOrder {
  ContentAsc = "content_ASC",
  ContentDesc = "content_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/layoutBlogDetail) */
export type LayoutBlogDetail = Entry & {
  __typename?: "LayoutBlogDetail";
  contentfulMetadata: ContentfulMetadata;
  getStarted?: Maybe<Scalars["String"]>;
  getStartedBg?: Maybe<Scalars["String"]>;
  getStartedImg?: Maybe<Asset>;
  linkedFrom?: Maybe<LayoutBlogDetailLinkingCollections>;
  mostPopularCollection?: Maybe<LayoutBlogDetailMostPopularCollection>;
  sys: Sys;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/layoutBlogDetail) */
export type LayoutBlogDetailGetStartedArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/layoutBlogDetail) */
export type LayoutBlogDetailGetStartedBgArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/layoutBlogDetail) */
export type LayoutBlogDetailGetStartedImgArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/layoutBlogDetail) */
export type LayoutBlogDetailLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/layoutBlogDetail) */
export type LayoutBlogDetailMostPopularCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type LayoutBlogDetailCollection = {
  __typename?: "LayoutBlogDetailCollection";
  items: Array<Maybe<LayoutBlogDetail>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type LayoutBlogDetailFilter = {
  AND?: InputMaybe<Array<InputMaybe<LayoutBlogDetailFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<LayoutBlogDetailFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  getStarted?: InputMaybe<Scalars["String"]>;
  getStartedBg?: InputMaybe<Scalars["String"]>;
  getStartedBg_contains?: InputMaybe<Scalars["String"]>;
  getStartedBg_exists?: InputMaybe<Scalars["Boolean"]>;
  getStartedBg_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  getStartedBg_not?: InputMaybe<Scalars["String"]>;
  getStartedBg_not_contains?: InputMaybe<Scalars["String"]>;
  getStartedBg_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  getStartedImg_exists?: InputMaybe<Scalars["Boolean"]>;
  getStarted_contains?: InputMaybe<Scalars["String"]>;
  getStarted_exists?: InputMaybe<Scalars["Boolean"]>;
  getStarted_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  getStarted_not?: InputMaybe<Scalars["String"]>;
  getStarted_not_contains?: InputMaybe<Scalars["String"]>;
  getStarted_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  mostPopularCollection_exists?: InputMaybe<Scalars["Boolean"]>;
  sys?: InputMaybe<SysFilter>;
};

export type LayoutBlogDetailLinkingCollections = {
  __typename?: "LayoutBlogDetailLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
};

export type LayoutBlogDetailLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type LayoutBlogDetailMostPopularCollection = {
  __typename?: "LayoutBlogDetailMostPopularCollection";
  items: Array<Maybe<Entry>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export enum LayoutBlogDetailOrder {
  GetStartedBgAsc = "getStartedBg_ASC",
  GetStartedBgDesc = "getStartedBg_DESC",
  GetStartedAsc = "getStarted_ASC",
  GetStartedDesc = "getStarted_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/metadata) */
export type Metadata = Entry & {
  __typename?: "Metadata";
  content?: Maybe<Scalars["String"]>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars["String"]>;
  httpEquiv?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  linkedFrom?: Maybe<MetadataLinkingCollections>;
  name?: Maybe<Scalars["String"]>;
  property?: Maybe<Scalars["String"]>;
  sys: Sys;
  title?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/metadata) */
export type MetadataContentArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/metadata) */
export type MetadataDescriptionArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/metadata) */
export type MetadataHttpEquivArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/metadata) */
export type MetadataIdArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/metadata) */
export type MetadataLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/metadata) */
export type MetadataNameArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/metadata) */
export type MetadataPropertyArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/metadata) */
export type MetadataTitleArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/metadata) */
export type MetadataTypeArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type MetadataCollection = {
  __typename?: "MetadataCollection";
  items: Array<Maybe<Metadata>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type MetadataFilter = {
  AND?: InputMaybe<Array<InputMaybe<MetadataFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MetadataFilter>>>;
  content?: InputMaybe<Scalars["String"]>;
  content_contains?: InputMaybe<Scalars["String"]>;
  content_exists?: InputMaybe<Scalars["Boolean"]>;
  content_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  content_not?: InputMaybe<Scalars["String"]>;
  content_not_contains?: InputMaybe<Scalars["String"]>;
  content_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars["String"]>;
  description_contains?: InputMaybe<Scalars["String"]>;
  description_exists?: InputMaybe<Scalars["Boolean"]>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  description_not?: InputMaybe<Scalars["String"]>;
  description_not_contains?: InputMaybe<Scalars["String"]>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  httpEquiv?: InputMaybe<Scalars["String"]>;
  httpEquiv_contains?: InputMaybe<Scalars["String"]>;
  httpEquiv_exists?: InputMaybe<Scalars["Boolean"]>;
  httpEquiv_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  httpEquiv_not?: InputMaybe<Scalars["String"]>;
  httpEquiv_not_contains?: InputMaybe<Scalars["String"]>;
  httpEquiv_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  id?: InputMaybe<Scalars["String"]>;
  id_contains?: InputMaybe<Scalars["String"]>;
  id_exists?: InputMaybe<Scalars["Boolean"]>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  id_not?: InputMaybe<Scalars["String"]>;
  id_not_contains?: InputMaybe<Scalars["String"]>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  name?: InputMaybe<Scalars["String"]>;
  name_contains?: InputMaybe<Scalars["String"]>;
  name_exists?: InputMaybe<Scalars["Boolean"]>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  name_not?: InputMaybe<Scalars["String"]>;
  name_not_contains?: InputMaybe<Scalars["String"]>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  property?: InputMaybe<Scalars["String"]>;
  property_contains?: InputMaybe<Scalars["String"]>;
  property_exists?: InputMaybe<Scalars["Boolean"]>;
  property_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  property_not?: InputMaybe<Scalars["String"]>;
  property_not_contains?: InputMaybe<Scalars["String"]>;
  property_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]>;
  title_contains?: InputMaybe<Scalars["String"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  title_not?: InputMaybe<Scalars["String"]>;
  title_not_contains?: InputMaybe<Scalars["String"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  type?: InputMaybe<Scalars["String"]>;
  type_contains?: InputMaybe<Scalars["String"]>;
  type_exists?: InputMaybe<Scalars["Boolean"]>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  type_not?: InputMaybe<Scalars["String"]>;
  type_not_contains?: InputMaybe<Scalars["String"]>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type MetadataLinkingCollections = {
  __typename?: "MetadataLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
};

export type MetadataLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export enum MetadataOrder {
  ContentAsc = "content_ASC",
  ContentDesc = "content_DESC",
  DescriptionAsc = "description_ASC",
  DescriptionDesc = "description_DESC",
  HttpEquivAsc = "httpEquiv_ASC",
  HttpEquivDesc = "httpEquiv_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  PropertyAsc = "property_ASC",
  PropertyDesc = "property_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  TypeAsc = "type_ASC",
  TypeDesc = "type_DESC",
}

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/newsEvents) */
export type NewsEvents = Entry & {
  __typename?: "NewsEvents";
  content?: Maybe<Scalars["String"]>;
  contentfulMetadata: ContentfulMetadata;
  eventsItemsCollection?: Maybe<NewsEventsEventsItemsCollection>;
  linkedFrom?: Maybe<NewsEventsLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/newsEvents) */
export type NewsEventsContentArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/newsEvents) */
export type NewsEventsEventsItemsCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/newsEvents) */
export type NewsEventsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/newsEvents) */
export type NewsEventsTitleArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type NewsEventsCollection = {
  __typename?: "NewsEventsCollection";
  items: Array<Maybe<NewsEvents>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type NewsEventsEventsItemsCollection = {
  __typename?: "NewsEventsEventsItemsCollection";
  items: Array<Maybe<Entry>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type NewsEventsFilter = {
  AND?: InputMaybe<Array<InputMaybe<NewsEventsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<NewsEventsFilter>>>;
  content?: InputMaybe<Scalars["String"]>;
  content_contains?: InputMaybe<Scalars["String"]>;
  content_exists?: InputMaybe<Scalars["Boolean"]>;
  content_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  content_not?: InputMaybe<Scalars["String"]>;
  content_not_contains?: InputMaybe<Scalars["String"]>;
  content_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  eventsItemsCollection_exists?: InputMaybe<Scalars["Boolean"]>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]>;
  title_contains?: InputMaybe<Scalars["String"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  title_not?: InputMaybe<Scalars["String"]>;
  title_not_contains?: InputMaybe<Scalars["String"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type NewsEventsLinkingCollections = {
  __typename?: "NewsEventsLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
};

export type NewsEventsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export enum NewsEventsOrder {
  ContentAsc = "content_ASC",
  ContentDesc = "content_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/ourCustomers) */
export type OurCustomers = Entry & {
  __typename?: "OurCustomers";
  content?: Maybe<Scalars["String"]>;
  contentfulMetadata: ContentfulMetadata;
  iconsCollection?: Maybe<AssetCollection>;
  linkedFrom?: Maybe<OurCustomersLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/ourCustomers) */
export type OurCustomersContentArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/ourCustomers) */
export type OurCustomersIconsCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/ourCustomers) */
export type OurCustomersLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/ourCustomers) */
export type OurCustomersTitleArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type OurCustomersCollection = {
  __typename?: "OurCustomersCollection";
  items: Array<Maybe<OurCustomers>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type OurCustomersFilter = {
  AND?: InputMaybe<Array<InputMaybe<OurCustomersFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<OurCustomersFilter>>>;
  content?: InputMaybe<Scalars["String"]>;
  content_contains?: InputMaybe<Scalars["String"]>;
  content_exists?: InputMaybe<Scalars["Boolean"]>;
  content_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  content_not?: InputMaybe<Scalars["String"]>;
  content_not_contains?: InputMaybe<Scalars["String"]>;
  content_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  iconsCollection_exists?: InputMaybe<Scalars["Boolean"]>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]>;
  title_contains?: InputMaybe<Scalars["String"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  title_not?: InputMaybe<Scalars["String"]>;
  title_not_contains?: InputMaybe<Scalars["String"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type OurCustomersLinkingCollections = {
  __typename?: "OurCustomersLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
};

export type OurCustomersLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export enum OurCustomersOrder {
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/ourProducts) */
export type OurProducts = Entry & {
  __typename?: "OurProducts";
  content?: Maybe<Scalars["String"]>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<OurProductsLinkingCollections>;
  sys: Sys;
  tabProductCollection?: Maybe<OurProductsTabProductCollection>;
  title?: Maybe<Scalars["String"]>;
  typeName?: Maybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/ourProducts) */
export type OurProductsContentArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/ourProducts) */
export type OurProductsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/ourProducts) */
export type OurProductsTabProductCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/ourProducts) */
export type OurProductsTitleArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/ourProducts) */
export type OurProductsTypeNameArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type OurProductsCollection = {
  __typename?: "OurProductsCollection";
  items: Array<Maybe<OurProducts>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type OurProductsFilter = {
  AND?: InputMaybe<Array<InputMaybe<OurProductsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<OurProductsFilter>>>;
  content?: InputMaybe<Scalars["String"]>;
  content_contains?: InputMaybe<Scalars["String"]>;
  content_exists?: InputMaybe<Scalars["Boolean"]>;
  content_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  content_not?: InputMaybe<Scalars["String"]>;
  content_not_contains?: InputMaybe<Scalars["String"]>;
  content_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  tabProductCollection_exists?: InputMaybe<Scalars["Boolean"]>;
  title?: InputMaybe<Scalars["String"]>;
  title_contains?: InputMaybe<Scalars["String"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  title_not?: InputMaybe<Scalars["String"]>;
  title_not_contains?: InputMaybe<Scalars["String"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  typeName?: InputMaybe<Scalars["String"]>;
  typeName_contains?: InputMaybe<Scalars["String"]>;
  typeName_exists?: InputMaybe<Scalars["Boolean"]>;
  typeName_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  typeName_not?: InputMaybe<Scalars["String"]>;
  typeName_not_contains?: InputMaybe<Scalars["String"]>;
  typeName_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type OurProductsLinkingCollections = {
  __typename?: "OurProductsLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
};

export type OurProductsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export enum OurProductsOrder {
  ContentAsc = "content_ASC",
  ContentDesc = "content_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  TypeNameAsc = "typeName_ASC",
  TypeNameDesc = "typeName_DESC",
}

export type OurProductsTabProductCollection = {
  __typename?: "OurProductsTabProductCollection";
  items: Array<Maybe<Entry>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/outProductOfTab) */
export type OutProductOfTab = Entry & {
  __typename?: "OutProductOfTab";
  animation?: Maybe<Scalars["String"]>;
  bio?: Maybe<OutProductOfTabBio>;
  content?: Maybe<Scalars["String"]>;
  contentfulMetadata: ContentfulMetadata;
  icon?: Maybe<Asset>;
  img?: Maybe<Asset>;
  learnMore?: Maybe<Scalars["String"]>;
  linkedFrom?: Maybe<OutProductOfTabLinkingCollections>;
  listServices?: Maybe<Array<Maybe<Scalars["String"]>>>;
  sys: Sys;
  title?: Maybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/outProductOfTab) */
export type OutProductOfTabAnimationArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/outProductOfTab) */
export type OutProductOfTabBioArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/outProductOfTab) */
export type OutProductOfTabContentArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/outProductOfTab) */
export type OutProductOfTabIconArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/outProductOfTab) */
export type OutProductOfTabImgArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/outProductOfTab) */
export type OutProductOfTabLearnMoreArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/outProductOfTab) */
export type OutProductOfTabLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/outProductOfTab) */
export type OutProductOfTabListServicesArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/outProductOfTab) */
export type OutProductOfTabTitleArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type OutProductOfTabBio = {
  __typename?: "OutProductOfTabBio";
  json: Scalars["JSON"];
  links: OutProductOfTabBioLinks;
};

export type OutProductOfTabBioAssets = {
  __typename?: "OutProductOfTabBioAssets";
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type OutProductOfTabBioEntries = {
  __typename?: "OutProductOfTabBioEntries";
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type OutProductOfTabBioLinks = {
  __typename?: "OutProductOfTabBioLinks";
  assets: OutProductOfTabBioAssets;
  entries: OutProductOfTabBioEntries;
};

export type OutProductOfTabCollection = {
  __typename?: "OutProductOfTabCollection";
  items: Array<Maybe<OutProductOfTab>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type OutProductOfTabFilter = {
  AND?: InputMaybe<Array<InputMaybe<OutProductOfTabFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<OutProductOfTabFilter>>>;
  animation?: InputMaybe<Scalars["String"]>;
  animation_contains?: InputMaybe<Scalars["String"]>;
  animation_exists?: InputMaybe<Scalars["Boolean"]>;
  animation_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  animation_not?: InputMaybe<Scalars["String"]>;
  animation_not_contains?: InputMaybe<Scalars["String"]>;
  animation_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  bio_contains?: InputMaybe<Scalars["String"]>;
  bio_exists?: InputMaybe<Scalars["Boolean"]>;
  bio_not_contains?: InputMaybe<Scalars["String"]>;
  content?: InputMaybe<Scalars["String"]>;
  content_contains?: InputMaybe<Scalars["String"]>;
  content_exists?: InputMaybe<Scalars["Boolean"]>;
  content_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  content_not?: InputMaybe<Scalars["String"]>;
  content_not_contains?: InputMaybe<Scalars["String"]>;
  content_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  icon_exists?: InputMaybe<Scalars["Boolean"]>;
  img_exists?: InputMaybe<Scalars["Boolean"]>;
  learnMore?: InputMaybe<Scalars["String"]>;
  learnMore_contains?: InputMaybe<Scalars["String"]>;
  learnMore_exists?: InputMaybe<Scalars["Boolean"]>;
  learnMore_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  learnMore_not?: InputMaybe<Scalars["String"]>;
  learnMore_not_contains?: InputMaybe<Scalars["String"]>;
  learnMore_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  listServices_contains_all?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  listServices_contains_none?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  listServices_contains_some?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  listServices_exists?: InputMaybe<Scalars["Boolean"]>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]>;
  title_contains?: InputMaybe<Scalars["String"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  title_not?: InputMaybe<Scalars["String"]>;
  title_not_contains?: InputMaybe<Scalars["String"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type OutProductOfTabLinkingCollections = {
  __typename?: "OutProductOfTabLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
};

export type OutProductOfTabLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export enum OutProductOfTabOrder {
  AnimationAsc = "animation_ASC",
  AnimationDesc = "animation_DESC",
  ContentAsc = "content_ASC",
  ContentDesc = "content_DESC",
  LearnMoreAsc = "learnMore_ASC",
  LearnMoreDesc = "learnMore_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/page) */
export type Page = Entry & {
  __typename?: "Page";
  componentCollection?: Maybe<PageComponentCollection>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<PageLinkingCollections>;
  metadataCollection?: Maybe<PageMetadataCollection>;
  pageName?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
  sys: Sys;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/page) */
export type PageComponentCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/page) */
export type PageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/page) */
export type PageMetadataCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/page) */
export type PagePageNameArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/page) */
export type PageSlugArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type PageCollection = {
  __typename?: "PageCollection";
  items: Array<Maybe<Page>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type PageComponentCollection = {
  __typename?: "PageComponentCollection";
  items: Array<Maybe<Entry>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type PageFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageFilter>>>;
  componentCollection_exists?: InputMaybe<Scalars["Boolean"]>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  metadataCollection_exists?: InputMaybe<Scalars["Boolean"]>;
  pageName?: InputMaybe<Scalars["String"]>;
  pageName_contains?: InputMaybe<Scalars["String"]>;
  pageName_exists?: InputMaybe<Scalars["Boolean"]>;
  pageName_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  pageName_not?: InputMaybe<Scalars["String"]>;
  pageName_not_contains?: InputMaybe<Scalars["String"]>;
  pageName_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  slug?: InputMaybe<Scalars["String"]>;
  slug_contains?: InputMaybe<Scalars["String"]>;
  slug_exists?: InputMaybe<Scalars["Boolean"]>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  slug_not?: InputMaybe<Scalars["String"]>;
  slug_not_contains?: InputMaybe<Scalars["String"]>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  sys?: InputMaybe<SysFilter>;
};

export type PageLinkingCollections = {
  __typename?: "PageLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
};

export type PageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type PageMetadataCollection = {
  __typename?: "PageMetadataCollection";
  items: Array<Maybe<Entry>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export enum PageOrder {
  PageNameAsc = "pageName_ASC",
  PageNameDesc = "pageName_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

export type Query = {
  __typename?: "Query";
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  blog?: Maybe<Blog>;
  blogCollection?: Maybe<BlogCollection>;
  blogDetail?: Maybe<BlogDetail>;
  blogDetailCollection?: Maybe<BlogDetailCollection>;
  careerDetail?: Maybe<CareerDetail>;
  careerDetailCollection?: Maybe<CareerDetailCollection>;
  componentSolution?: Maybe<ComponentSolution>;
  componentSolutionCollection?: Maybe<ComponentSolutionCollection>;
  contentPrivacy?: Maybe<ContentPrivacy>;
  contentPrivacyCollection?: Maybe<ContentPrivacyCollection>;
  determined?: Maybe<Determined>;
  determinedCollection?: Maybe<DeterminedCollection>;
  determinedItems?: Maybe<DeterminedItems>;
  determinedItemsCollection?: Maybe<DeterminedItemsCollection>;
  entryCollection?: Maybe<EntryCollection>;
  eventItems?: Maybe<EventItems>;
  eventItemsCollection?: Maybe<EventItemsCollection>;
  homeBanner?: Maybe<HomeBanner>;
  homeBannerCollection?: Maybe<HomeBannerCollection>;
  ichibaCommunity?: Maybe<IchibaCommunity>;
  ichibaCommunityCollection?: Maybe<IchibaCommunityCollection>;
  ichibaCommunityItems?: Maybe<IchibaCommunityItems>;
  ichibaCommunityItemsCollection?: Maybe<IchibaCommunityItemsCollection>;
  lastestCompany?: Maybe<LastestCompany>;
  lastestCompanyCollection?: Maybe<LastestCompanyCollection>;
  layoutBlogDetail?: Maybe<LayoutBlogDetail>;
  layoutBlogDetailCollection?: Maybe<LayoutBlogDetailCollection>;
  metadata?: Maybe<Metadata>;
  metadataCollection?: Maybe<MetadataCollection>;
  newsEvents?: Maybe<NewsEvents>;
  newsEventsCollection?: Maybe<NewsEventsCollection>;
  ourCustomers?: Maybe<OurCustomers>;
  ourCustomersCollection?: Maybe<OurCustomersCollection>;
  ourProducts?: Maybe<OurProducts>;
  ourProductsCollection?: Maybe<OurProductsCollection>;
  outProductOfTab?: Maybe<OutProductOfTab>;
  outProductOfTabCollection?: Maybe<OutProductOfTabCollection>;
  page?: Maybe<Page>;
  pageCollection?: Maybe<PageCollection>;
  signUpBlog?: Maybe<SignUpBlog>;
  signUpBlogCollection?: Maybe<SignUpBlogCollection>;
  solutionItem?: Maybe<SolutionItem>;
  solutionItemCollection?: Maybe<SolutionItemCollection>;
  tabOutProducts?: Maybe<TabOutProducts>;
  tabOutProductsCollection?: Maybe<TabOutProductsCollection>;
};

export type QueryAssetArgs = {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<AssetFilter>;
};

export type QueryBlogArgs = {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

export type QueryBlogCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<BlogOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<BlogFilter>;
};

export type QueryBlogDetailArgs = {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

export type QueryBlogDetailCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<BlogDetailOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<BlogDetailFilter>;
};

export type QueryCareerDetailArgs = {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

export type QueryCareerDetailCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<CareerDetailOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<CareerDetailFilter>;
};

export type QueryComponentSolutionArgs = {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

export type QueryComponentSolutionCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<ComponentSolutionOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ComponentSolutionFilter>;
};

export type QueryContentPrivacyArgs = {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

export type QueryContentPrivacyCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<ContentPrivacyOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ContentPrivacyFilter>;
};

export type QueryDeterminedArgs = {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

export type QueryDeterminedCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<DeterminedOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<DeterminedFilter>;
};

export type QueryDeterminedItemsArgs = {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

export type QueryDeterminedItemsCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<DeterminedItemsOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<DeterminedItemsFilter>;
};

export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<EntryFilter>;
};

export type QueryEventItemsArgs = {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

export type QueryEventItemsCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<EventItemsOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<EventItemsFilter>;
};

export type QueryHomeBannerArgs = {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

export type QueryHomeBannerCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<HomeBannerOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<HomeBannerFilter>;
};

export type QueryIchibaCommunityArgs = {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

export type QueryIchibaCommunityCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<IchibaCommunityOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<IchibaCommunityFilter>;
};

export type QueryIchibaCommunityItemsArgs = {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

export type QueryIchibaCommunityItemsCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<IchibaCommunityItemsOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<IchibaCommunityItemsFilter>;
};

export type QueryLastestCompanyArgs = {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

export type QueryLastestCompanyCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<LastestCompanyOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<LastestCompanyFilter>;
};

export type QueryLayoutBlogDetailArgs = {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

export type QueryLayoutBlogDetailCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<LayoutBlogDetailOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<LayoutBlogDetailFilter>;
};

export type QueryMetadataArgs = {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

export type QueryMetadataCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<MetadataOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<MetadataFilter>;
};

export type QueryNewsEventsArgs = {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

export type QueryNewsEventsCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<NewsEventsOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<NewsEventsFilter>;
};

export type QueryOurCustomersArgs = {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

export type QueryOurCustomersCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<OurCustomersOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<OurCustomersFilter>;
};

export type QueryOurProductsArgs = {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

export type QueryOurProductsCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<OurProductsOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<OurProductsFilter>;
};

export type QueryOutProductOfTabArgs = {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

export type QueryOutProductOfTabCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<OutProductOfTabOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<OutProductOfTabFilter>;
};

export type QueryPageArgs = {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

export type QueryPageCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<PageOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<PageFilter>;
};

export type QuerySignUpBlogArgs = {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

export type QuerySignUpBlogCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<SignUpBlogOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<SignUpBlogFilter>;
};

export type QuerySolutionItemArgs = {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

export type QuerySolutionItemCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<SolutionItemOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<SolutionItemFilter>;
};

export type QueryTabOutProductsArgs = {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

export type QueryTabOutProductsCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<TabOutProductsOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<TabOutProductsFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/signUpBlog) */
export type SignUpBlog = Entry & {
  __typename?: "SignUpBlog";
  banner?: Maybe<Asset>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<SignUpBlogLinkingCollections>;
  sys: Sys;
  titleSignUp?: Maybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/signUpBlog) */
export type SignUpBlogBannerArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/signUpBlog) */
export type SignUpBlogLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/signUpBlog) */
export type SignUpBlogTitleSignUpArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type SignUpBlogCollection = {
  __typename?: "SignUpBlogCollection";
  items: Array<Maybe<SignUpBlog>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type SignUpBlogFilter = {
  AND?: InputMaybe<Array<InputMaybe<SignUpBlogFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SignUpBlogFilter>>>;
  banner_exists?: InputMaybe<Scalars["Boolean"]>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  titleSignUp?: InputMaybe<Scalars["String"]>;
  titleSignUp_contains?: InputMaybe<Scalars["String"]>;
  titleSignUp_exists?: InputMaybe<Scalars["Boolean"]>;
  titleSignUp_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  titleSignUp_not?: InputMaybe<Scalars["String"]>;
  titleSignUp_not_contains?: InputMaybe<Scalars["String"]>;
  titleSignUp_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type SignUpBlogLinkingCollections = {
  __typename?: "SignUpBlogLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
};

export type SignUpBlogLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export enum SignUpBlogOrder {
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleSignUpAsc = "titleSignUp_ASC",
  TitleSignUpDesc = "titleSignUp_DESC",
}

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/solutionItem) */
export type SolutionItem = Entry & {
  __typename?: "SolutionItem";
  content?: Maybe<Scalars["String"]>;
  contentRichText?: Maybe<SolutionItemContentRichText>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<SolutionItemLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/solutionItem) */
export type SolutionItemContentArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/solutionItem) */
export type SolutionItemContentRichTextArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/solutionItem) */
export type SolutionItemLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/solutionItem) */
export type SolutionItemTitleArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type SolutionItemCollection = {
  __typename?: "SolutionItemCollection";
  items: Array<Maybe<SolutionItem>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type SolutionItemContentRichText = {
  __typename?: "SolutionItemContentRichText";
  json: Scalars["JSON"];
  links: SolutionItemContentRichTextLinks;
};

export type SolutionItemContentRichTextAssets = {
  __typename?: "SolutionItemContentRichTextAssets";
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type SolutionItemContentRichTextEntries = {
  __typename?: "SolutionItemContentRichTextEntries";
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type SolutionItemContentRichTextLinks = {
  __typename?: "SolutionItemContentRichTextLinks";
  assets: SolutionItemContentRichTextAssets;
  entries: SolutionItemContentRichTextEntries;
};

export type SolutionItemFilter = {
  AND?: InputMaybe<Array<InputMaybe<SolutionItemFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SolutionItemFilter>>>;
  content?: InputMaybe<Scalars["String"]>;
  contentRichText_contains?: InputMaybe<Scalars["String"]>;
  contentRichText_exists?: InputMaybe<Scalars["Boolean"]>;
  contentRichText_not_contains?: InputMaybe<Scalars["String"]>;
  content_contains?: InputMaybe<Scalars["String"]>;
  content_exists?: InputMaybe<Scalars["Boolean"]>;
  content_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  content_not?: InputMaybe<Scalars["String"]>;
  content_not_contains?: InputMaybe<Scalars["String"]>;
  content_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]>;
  title_contains?: InputMaybe<Scalars["String"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  title_not?: InputMaybe<Scalars["String"]>;
  title_not_contains?: InputMaybe<Scalars["String"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type SolutionItemLinkingCollections = {
  __typename?: "SolutionItemLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
};

export type SolutionItemLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export enum SolutionItemOrder {
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export type Sys = {
  __typename?: "Sys";
  environmentId: Scalars["String"];
  firstPublishedAt?: Maybe<Scalars["DateTime"]>;
  id: Scalars["String"];
  publishedAt?: Maybe<Scalars["DateTime"]>;
  publishedVersion?: Maybe<Scalars["Int"]>;
  spaceId: Scalars["String"];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars["DateTime"]>;
  firstPublishedAt_exists?: InputMaybe<Scalars["Boolean"]>;
  firstPublishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  firstPublishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  firstPublishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  firstPublishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  id?: InputMaybe<Scalars["String"]>;
  id_contains?: InputMaybe<Scalars["String"]>;
  id_exists?: InputMaybe<Scalars["Boolean"]>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  id_not?: InputMaybe<Scalars["String"]>;
  id_not_contains?: InputMaybe<Scalars["String"]>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  publishedAt_exists?: InputMaybe<Scalars["Boolean"]>;
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedVersion?: InputMaybe<Scalars["Float"]>;
  publishedVersion_exists?: InputMaybe<Scalars["Boolean"]>;
  publishedVersion_gt?: InputMaybe<Scalars["Float"]>;
  publishedVersion_gte?: InputMaybe<Scalars["Float"]>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  publishedVersion_lt?: InputMaybe<Scalars["Float"]>;
  publishedVersion_lte?: InputMaybe<Scalars["Float"]>;
  publishedVersion_not?: InputMaybe<Scalars["Float"]>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/tabOutProducts) */
export type TabOutProducts = Entry & {
  __typename?: "TabOutProducts";
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<TabOutProductsLinkingCollections>;
  listProductCollection?: Maybe<TabOutProductsListProductCollection>;
  sys: Sys;
  title?: Maybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/tabOutProducts) */
export type TabOutProductsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/tabOutProducts) */
export type TabOutProductsListProductCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

/** [See type definition](https://app.contentful.com/spaces/b2kvfdsbiifr/content_types/tabOutProducts) */
export type TabOutProductsTitleArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type TabOutProductsCollection = {
  __typename?: "TabOutProductsCollection";
  items: Array<Maybe<TabOutProducts>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type TabOutProductsFilter = {
  AND?: InputMaybe<Array<InputMaybe<TabOutProductsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TabOutProductsFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  listProductCollection_exists?: InputMaybe<Scalars["Boolean"]>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]>;
  title_contains?: InputMaybe<Scalars["String"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  title_not?: InputMaybe<Scalars["String"]>;
  title_not_contains?: InputMaybe<Scalars["String"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type TabOutProductsLinkingCollections = {
  __typename?: "TabOutProductsLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
};

export type TabOutProductsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type TabOutProductsListProductCollection = {
  __typename?: "TabOutProductsListProductCollection";
  items: Array<Maybe<Entry>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export enum TabOutProductsOrder {
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export type BlogDetailFragment = {
  __typename?: "BlogDetail";
  title?: string | null;
  content?: string | null;
  slug?: string | null;
  img?: { __typename?: "Asset"; url?: string | null } | null;
};

export type BlogSignUpFragment = {
  __typename?: "SignUpBlog";
  titleSignUp?: string | null;
  banner?: { __typename?: "Asset"; url?: string | null } | null;
};

export type BlogEntryQueryVariables = Exact<{
  locale?: InputMaybe<Scalars["String"]>;
}>;

export type BlogEntryQuery = {
  __typename?: "Query";
  blogCollection?: {
    __typename?: "BlogCollection";
    items: Array<{
      __typename?: "Blog";
      newsBlog?:
        | { __typename?: "Blog" }
        | ({ __typename?: "BlogDetail" } & BlogDetailFragment)
        | { __typename?: "CareerDetail" }
        | { __typename?: "ComponentSolution" }
        | { __typename?: "ContentPrivacy" }
        | { __typename?: "Determined" }
        | { __typename?: "DeterminedItems" }
        | { __typename?: "EventItems" }
        | { __typename?: "HomeBanner" }
        | { __typename?: "IchibaCommunity" }
        | { __typename?: "IchibaCommunityItems" }
        | { __typename?: "LastestCompany" }
        | { __typename?: "LayoutBlogDetail" }
        | { __typename?: "Metadata" }
        | { __typename?: "NewsEvents" }
        | { __typename?: "OurCustomers" }
        | { __typename?: "OurProducts" }
        | { __typename?: "OutProductOfTab" }
        | { __typename?: "Page" }
        | { __typename?: "SignUpBlog" }
        | { __typename?: "SolutionItem" }
        | { __typename?: "TabOutProducts" }
        | null;
      mostPopularCollection?: {
        __typename?: "BlogMostPopularCollection";
        items: Array<
          | { __typename?: "Blog" }
          | ({ __typename?: "BlogDetail" } & BlogDetailFragment)
          | { __typename?: "CareerDetail" }
          | { __typename?: "ComponentSolution" }
          | { __typename?: "ContentPrivacy" }
          | { __typename?: "Determined" }
          | { __typename?: "DeterminedItems" }
          | { __typename?: "EventItems" }
          | { __typename?: "HomeBanner" }
          | { __typename?: "IchibaCommunity" }
          | { __typename?: "IchibaCommunityItems" }
          | { __typename?: "LastestCompany" }
          | { __typename?: "LayoutBlogDetail" }
          | { __typename?: "Metadata" }
          | { __typename?: "NewsEvents" }
          | { __typename?: "OurCustomers" }
          | { __typename?: "OurProducts" }
          | { __typename?: "OutProductOfTab" }
          | { __typename?: "Page" }
          | { __typename?: "SignUpBlog" }
          | { __typename?: "SolutionItem" }
          | { __typename?: "TabOutProducts" }
          | null
        >;
      } | null;
      browserAllCollection?: {
        __typename?: "BlogBrowserAllCollection";
        items: Array<
          | { __typename?: "Blog" }
          | ({ __typename?: "BlogDetail" } & BlogDetailFragment)
          | { __typename?: "CareerDetail" }
          | { __typename?: "ComponentSolution" }
          | { __typename?: "ContentPrivacy" }
          | { __typename?: "Determined" }
          | { __typename?: "DeterminedItems" }
          | { __typename?: "EventItems" }
          | { __typename?: "HomeBanner" }
          | { __typename?: "IchibaCommunity" }
          | { __typename?: "IchibaCommunityItems" }
          | { __typename?: "LastestCompany" }
          | { __typename?: "LayoutBlogDetail" }
          | { __typename?: "Metadata" }
          | { __typename?: "NewsEvents" }
          | { __typename?: "OurCustomers" }
          | { __typename?: "OurProducts" }
          | { __typename?: "OutProductOfTab" }
          | { __typename?: "Page" }
          | { __typename?: "SignUpBlog" }
          | { __typename?: "SolutionItem" }
          | { __typename?: "TabOutProducts" }
          | null
        >;
      } | null;
      blogSideRightCollection?: {
        __typename?: "BlogBlogSideRightCollection";
        items: Array<
          | { __typename?: "Blog" }
          | ({ __typename?: "BlogDetail" } & BlogDetailFragment)
          | { __typename?: "CareerDetail" }
          | { __typename?: "ComponentSolution" }
          | { __typename?: "ContentPrivacy" }
          | { __typename?: "Determined" }
          | { __typename?: "DeterminedItems" }
          | { __typename?: "EventItems" }
          | { __typename?: "HomeBanner" }
          | { __typename?: "IchibaCommunity" }
          | { __typename?: "IchibaCommunityItems" }
          | { __typename?: "LastestCompany" }
          | { __typename?: "LayoutBlogDetail" }
          | { __typename?: "Metadata" }
          | { __typename?: "NewsEvents" }
          | { __typename?: "OurCustomers" }
          | { __typename?: "OurProducts" }
          | { __typename?: "OutProductOfTab" }
          | { __typename?: "Page" }
          | { __typename?: "SignUpBlog" }
          | { __typename?: "SolutionItem" }
          | { __typename?: "TabOutProducts" }
          | null
        >;
      } | null;
      signUp?:
        | { __typename?: "Blog" }
        | { __typename?: "BlogDetail" }
        | { __typename?: "CareerDetail" }
        | { __typename?: "ComponentSolution" }
        | { __typename?: "ContentPrivacy" }
        | { __typename?: "Determined" }
        | { __typename?: "DeterminedItems" }
        | { __typename?: "EventItems" }
        | { __typename?: "HomeBanner" }
        | { __typename?: "IchibaCommunity" }
        | { __typename?: "IchibaCommunityItems" }
        | { __typename?: "LastestCompany" }
        | { __typename?: "LayoutBlogDetail" }
        | { __typename?: "Metadata" }
        | { __typename?: "NewsEvents" }
        | { __typename?: "OurCustomers" }
        | { __typename?: "OurProducts" }
        | { __typename?: "OutProductOfTab" }
        | { __typename?: "Page" }
        | ({ __typename?: "SignUpBlog" } & BlogSignUpFragment)
        | { __typename?: "SolutionItem" }
        | { __typename?: "TabOutProducts" }
        | null;
    } | null>;
  } | null;
};

export type BlogDetailIdQueryVariables = Exact<{
  slug?: InputMaybe<Scalars["String"]>;
  locale?: InputMaybe<Scalars["String"]>;
}>;

export type BlogDetailIdQuery = {
  __typename?: "Query";
  blogDetailCollection?: {
    __typename?: "BlogDetailCollection";
    items: Array<{
      __typename?: "BlogDetail";
      content?: string | null;
      author?: string | null;
      date?: string | null;
      category?: string | null;
      topic?: string | null;
      title?: string | null;
      authorBiography?: string | null;
      contentRichText?: {
        __typename?: "BlogDetailContentRichText";
        json: any;
        links: {
          __typename?: "BlogDetailContentRichTextLinks";
          assets: {
            __typename?: "BlogDetailContentRichTextAssets";
            block: Array<{
              __typename?: "Asset";
              url?: string | null;
              title?: string | null;
              width?: number | null;
              height?: number | null;
              description?: string | null;
              sys: { __typename?: "Sys"; id: string };
            } | null>;
          };
        };
      } | null;
      img?: { __typename?: "Asset"; url?: string | null } | null;
      avtAuthor?: { __typename?: "Asset"; url?: string | null } | null;
      relatedProductsCollection?: {
        __typename?: "BlogDetailRelatedProductsCollection";
        items: Array<
          | { __typename?: "Blog" }
          | ({ __typename?: "BlogDetail" } & MostItemsFragment)
          | { __typename?: "CareerDetail" }
          | { __typename?: "ComponentSolution" }
          | { __typename?: "ContentPrivacy" }
          | { __typename?: "Determined" }
          | { __typename?: "DeterminedItems" }
          | { __typename?: "EventItems" }
          | { __typename?: "HomeBanner" }
          | { __typename?: "IchibaCommunity" }
          | { __typename?: "IchibaCommunityItems" }
          | { __typename?: "LastestCompany" }
          | { __typename?: "LayoutBlogDetail" }
          | { __typename?: "Metadata" }
          | { __typename?: "NewsEvents" }
          | { __typename?: "OurCustomers" }
          | { __typename?: "OurProducts" }
          | { __typename?: "OutProductOfTab" }
          | { __typename?: "Page" }
          | { __typename?: "SignUpBlog" }
          | { __typename?: "SolutionItem" }
          | { __typename?: "TabOutProducts" }
          | null
        >;
      } | null;
    } | null>;
  } | null;
};

export type AssetEntryQueryVariables = Exact<{
  id?: InputMaybe<Scalars["String"]>;
}>;

export type AssetEntryQuery = {
  __typename?: "Query";
  asset?: { __typename?: "Asset"; url?: string | null } | null;
};

export type MostItemsFragment = {
  __typename?: "BlogDetail";
  title?: string | null;
  content?: string | null;
  date?: string | null;
  author?: string | null;
  img?: { __typename?: "Asset"; url?: string | null } | null;
};

export type LayoutBlogDetailQueryVariables = Exact<{ [key: string]: never }>;

export type LayoutBlogDetailQuery = {
  __typename?: "Query";
  layoutBlogDetailCollection?: {
    __typename?: "LayoutBlogDetailCollection";
    items: Array<{
      __typename?: "LayoutBlogDetail";
      getStarted?: string | null;
      getStartedBg?: string | null;
      getStartedImg?: { __typename?: "Asset"; url?: string | null } | null;
      mostPopularCollection?: {
        __typename?: "LayoutBlogDetailMostPopularCollection";
        items: Array<
          | { __typename?: "Blog" }
          | ({ __typename?: "BlogDetail" } & MostItemsFragment)
          | { __typename?: "CareerDetail" }
          | { __typename?: "ComponentSolution" }
          | { __typename?: "ContentPrivacy" }
          | { __typename?: "Determined" }
          | { __typename?: "DeterminedItems" }
          | { __typename?: "EventItems" }
          | { __typename?: "HomeBanner" }
          | { __typename?: "IchibaCommunity" }
          | { __typename?: "IchibaCommunityItems" }
          | { __typename?: "LastestCompany" }
          | { __typename?: "LayoutBlogDetail" }
          | { __typename?: "Metadata" }
          | { __typename?: "NewsEvents" }
          | { __typename?: "OurCustomers" }
          | { __typename?: "OurProducts" }
          | { __typename?: "OutProductOfTab" }
          | { __typename?: "Page" }
          | { __typename?: "SignUpBlog" }
          | { __typename?: "SolutionItem" }
          | { __typename?: "TabOutProducts" }
          | null
        >;
      } | null;
    } | null>;
  } | null;
};

export type TestCareerDetailQueryVariables = Exact<{ [key: string]: never }>;

export type TestCareerDetailQuery = {
  __typename?: "Query";
  careerDetailCollection?: {
    __typename?: "CareerDetailCollection";
    items: Array<{
      __typename?: "CareerDetail";
      title?: string | null;
      slug?: string | null;
      body?: { __typename?: "CareerDetailBody"; json: any } | null;
    } | null>;
  } | null;
};

export type LastestCompanyEntryQueryVariables = Exact<{
  locale?: InputMaybe<Scalars["String"]>;
}>;

export type LastestCompanyEntryQuery = {
  __typename?: "Query";
  lastestCompanyCollection?: {
    __typename?: "LastestCompanyCollection";
    items: Array<{
      __typename?: "LastestCompany";
      title?: string | null;
      content?: string | null;
      itemsCollection?: {
        __typename?: "LastestCompanyItemsCollection";
        items: Array<
          | { __typename?: "Blog" }
          | ({ __typename?: "BlogDetail" } & ItemsfeildFragment)
          | { __typename?: "CareerDetail" }
          | { __typename?: "ComponentSolution" }
          | { __typename?: "ContentPrivacy" }
          | { __typename?: "Determined" }
          | { __typename?: "DeterminedItems" }
          | { __typename?: "EventItems" }
          | { __typename?: "HomeBanner" }
          | { __typename?: "IchibaCommunity" }
          | { __typename?: "IchibaCommunityItems" }
          | { __typename?: "LastestCompany" }
          | { __typename?: "LayoutBlogDetail" }
          | { __typename?: "Metadata" }
          | { __typename?: "NewsEvents" }
          | { __typename?: "OurCustomers" }
          | { __typename?: "OurProducts" }
          | { __typename?: "OutProductOfTab" }
          | { __typename?: "Page" }
          | { __typename?: "SignUpBlog" }
          | { __typename?: "SolutionItem" }
          | { __typename?: "TabOutProducts" }
          | null
        >;
      } | null;
    } | null>;
  } | null;
};

export type ItemsfeildFragment = {
  __typename?: "BlogDetail";
  date?: string | null;
  title?: string | null;
  content?: string | null;
  category?: string | null;
  slug?: string | null;
  img?: { __typename?: "Asset"; url?: string | null } | null;
};

export type BannerDiscoverFragment = {
  __typename?: "HomeBanner";
  img?: { __typename?: "Asset"; url?: string | null } | null;
};

export type VideoDiscoverEntryQueryVariables = Exact<{
  slug?: InputMaybe<Scalars["String"]>;
}>;

export type VideoDiscoverEntryQuery = {
  __typename?: "Query";
  pageCollection?: {
    __typename?: "PageCollection";
    items: Array<{
      __typename?: "Page";
      componentCollection?: {
        __typename?: "PageComponentCollection";
        items: Array<
          | { __typename?: "Blog" }
          | { __typename?: "BlogDetail" }
          | { __typename?: "CareerDetail" }
          | { __typename?: "ComponentSolution" }
          | { __typename?: "ContentPrivacy" }
          | { __typename?: "Determined" }
          | { __typename?: "DeterminedItems" }
          | { __typename?: "EventItems" }
          | ({ __typename?: "HomeBanner" } & HomeBannerFragment)
          | { __typename?: "IchibaCommunity" }
          | { __typename?: "IchibaCommunityItems" }
          | { __typename?: "LastestCompany" }
          | { __typename?: "LayoutBlogDetail" }
          | { __typename?: "Metadata" }
          | { __typename?: "NewsEvents" }
          | { __typename?: "OurCustomers" }
          | { __typename?: "OurProducts" }
          | { __typename?: "OutProductOfTab" }
          | { __typename?: "Page" }
          | { __typename?: "SignUpBlog" }
          | { __typename?: "SolutionItem" }
          | { __typename?: "TabOutProducts" }
          | null
        >;
      } | null;
    } | null>;
  } | null;
};

export type TabProductFragment = {
  __typename?: "TabOutProducts";
  title?: string | null;
  listProductCollection?: {
    __typename?: "TabOutProductsListProductCollection";
    items: Array<
      | { __typename?: "Blog" }
      | { __typename?: "BlogDetail" }
      | { __typename?: "CareerDetail" }
      | { __typename?: "ComponentSolution" }
      | { __typename?: "ContentPrivacy" }
      | { __typename?: "Determined" }
      | { __typename?: "DeterminedItems" }
      | { __typename?: "EventItems" }
      | { __typename?: "HomeBanner" }
      | { __typename?: "IchibaCommunity" }
      | { __typename?: "IchibaCommunityItems" }
      | { __typename?: "LastestCompany" }
      | { __typename?: "LayoutBlogDetail" }
      | { __typename?: "Metadata" }
      | { __typename?: "NewsEvents" }
      | { __typename?: "OurCustomers" }
      | { __typename?: "OurProducts" }
      | ({ __typename?: "OutProductOfTab" } & ListProductFragment)
      | { __typename?: "Page" }
      | { __typename?: "SignUpBlog" }
      | { __typename?: "SolutionItem" }
      | { __typename?: "TabOutProducts" }
      | null
    >;
  } | null;
};

export type ListProductFragment = {
  __typename?: "OutProductOfTab";
  title?: string | null;
  content?: string | null;
  listServices?: Array<string | null> | null;
  animation?: string | null;
  learnMore?: string | null;
  icon?: { __typename?: "Asset"; url?: string | null } | null;
  bio?: { __typename?: "OutProductOfTabBio"; json: any } | null;
  img?: { __typename?: "Asset"; url?: string | null } | null;
};

export type OutProductEntryQueryVariables = Exact<{
  locale?: InputMaybe<Scalars["String"]>;
}>;

export type OutProductEntryQuery = {
  __typename?: "Query";
  ourProductsCollection?: {
    __typename?: "OurProductsCollection";
    items: Array<{
      __typename?: "OurProducts";
      tabProductCollection?: {
        __typename?: "OurProductsTabProductCollection";
        items: Array<
          | { __typename?: "Blog" }
          | { __typename?: "BlogDetail" }
          | { __typename?: "CareerDetail" }
          | { __typename?: "ComponentSolution" }
          | { __typename?: "ContentPrivacy" }
          | { __typename?: "Determined" }
          | { __typename?: "DeterminedItems" }
          | { __typename?: "EventItems" }
          | { __typename?: "HomeBanner" }
          | { __typename?: "IchibaCommunity" }
          | { __typename?: "IchibaCommunityItems" }
          | { __typename?: "LastestCompany" }
          | { __typename?: "LayoutBlogDetail" }
          | { __typename?: "Metadata" }
          | { __typename?: "NewsEvents" }
          | { __typename?: "OurCustomers" }
          | { __typename?: "OurProducts" }
          | { __typename?: "OutProductOfTab" }
          | { __typename?: "Page" }
          | { __typename?: "SignUpBlog" }
          | { __typename?: "SolutionItem" }
          | ({ __typename?: "TabOutProducts" } & TabProductFragment)
          | null
        >;
      } | null;
    } | null>;
  } | null;
};

export type OutCustomerEntryQueryVariables = Exact<{
  locale?: InputMaybe<Scalars["String"]>;
}>;

export type OutCustomerEntryQuery = {
  __typename?: "Query";
  ourCustomersCollection?: {
    __typename?: "OurCustomersCollection";
    items: Array<{
      __typename?: "OurCustomers";
      title?: string | null;
      content?: string | null;
      iconsCollection?: {
        __typename?: "AssetCollection";
        items: Array<{
          __typename?: "Asset";
          url?: string | null;
          description?: string | null;
        } | null>;
      } | null;
    } | null>;
  } | null;
};

export type HomeBannerFragment = {
  __typename?: "HomeBanner";
  title?: string | null;
  buttonFreeTrial?: string | null;
  buttonTakeTour?: string | null;
  content1?: string | null;
  content2?: string | null;
  sections?: Array<string | null> | null;
  img?: { __typename?: "Asset"; url?: string | null } | null;
};

export type OurProductFragment = {
  __typename?: "OurProducts";
  title?: string | null;
  content?: string | null;
  typeName?: string | null;
};

export type DeterminedItemsFragment = {
  __typename?: "DeterminedItems";
  title?: string | null;
  content?: string | null;
  img?: { __typename?: "Asset"; url?: string | null } | null;
};

export type DeterminedFragment = {
  __typename?: "Determined";
  title?: string | null;
  content?: string | null;
  titleAudits?: string | null;
  contentAudits?: string | null;
  background?: { __typename?: "Asset"; url?: string | null } | null;
  iconsAuditsCollection?: {
    __typename?: "AssetCollection";
    items: Array<{ __typename?: "Asset"; url?: string | null } | null>;
  } | null;
  itemsDeterminedCollection?: {
    __typename?: "DeterminedItemsDeterminedCollection";
    items: Array<
      | { __typename?: "Blog" }
      | { __typename?: "BlogDetail" }
      | { __typename?: "CareerDetail" }
      | { __typename?: "ComponentSolution" }
      | { __typename?: "ContentPrivacy" }
      | { __typename?: "Determined" }
      | ({ __typename?: "DeterminedItems" } & DeterminedItemsFragment)
      | { __typename?: "EventItems" }
      | { __typename?: "HomeBanner" }
      | { __typename?: "IchibaCommunity" }
      | { __typename?: "IchibaCommunityItems" }
      | { __typename?: "LastestCompany" }
      | { __typename?: "LayoutBlogDetail" }
      | { __typename?: "Metadata" }
      | { __typename?: "NewsEvents" }
      | { __typename?: "OurCustomers" }
      | { __typename?: "OurProducts" }
      | { __typename?: "OutProductOfTab" }
      | { __typename?: "Page" }
      | { __typename?: "SignUpBlog" }
      | { __typename?: "SolutionItem" }
      | { __typename?: "TabOutProducts" }
      | null
    >;
  } | null;
};

export type HomeBannerEntryQueryVariables = Exact<{
  slug?: InputMaybe<Scalars["String"]>;
  locale?: InputMaybe<Scalars["String"]>;
}>;

export type HomeBannerEntryQuery = {
  __typename?: "Query";
  pageCollection?: {
    __typename?: "PageCollection";
    items: Array<{
      __typename?: "Page";
      componentCollection?: {
        __typename?: "PageComponentCollection";
        items: Array<
          | { __typename?: "Blog" }
          | { __typename?: "BlogDetail" }
          | { __typename?: "CareerDetail" }
          | { __typename?: "ComponentSolution" }
          | { __typename?: "ContentPrivacy" }
          | ({ __typename?: "Determined" } & DeterminedFragment)
          | { __typename?: "DeterminedItems" }
          | { __typename?: "EventItems" }
          | ({ __typename?: "HomeBanner" } & HomeBannerFragment)
          | { __typename?: "IchibaCommunity" }
          | { __typename?: "IchibaCommunityItems" }
          | { __typename?: "LastestCompany" }
          | { __typename?: "LayoutBlogDetail" }
          | { __typename?: "Metadata" }
          | { __typename?: "NewsEvents" }
          | { __typename?: "OurCustomers" }
          | ({ __typename?: "OurProducts" } & OurProductFragment)
          | { __typename?: "OutProductOfTab" }
          | { __typename?: "Page" }
          | { __typename?: "SignUpBlog" }
          | { __typename?: "SolutionItem" }
          | { __typename?: "TabOutProducts" }
          | null
        >;
      } | null;
    } | null>;
  } | null;
};

export type ItemsSolutionFragment = {
  __typename?: "SolutionItem";
  title?: string | null;
  content?: string | null;
  contentRichText?: {
    __typename?: "SolutionItemContentRichText";
    json: any;
  } | null;
};

export type SolutionEntryQueryVariables = Exact<{
  locale?: InputMaybe<Scalars["String"]>;
}>;

export type SolutionEntryQuery = {
  __typename?: "Query";
  componentSolutionCollection?: {
    __typename?: "ComponentSolutionCollection";
    items: Array<{
      __typename?: "ComponentSolution";
      title?: string | null;
      itemsLeftCollection?: {
        __typename?: "ComponentSolutionItemsLeftCollection";
        items: Array<
          | { __typename?: "Blog" }
          | { __typename?: "BlogDetail" }
          | { __typename?: "CareerDetail" }
          | { __typename?: "ComponentSolution" }
          | { __typename?: "ContentPrivacy" }
          | { __typename?: "Determined" }
          | { __typename?: "DeterminedItems" }
          | { __typename?: "EventItems" }
          | { __typename?: "HomeBanner" }
          | { __typename?: "IchibaCommunity" }
          | { __typename?: "IchibaCommunityItems" }
          | { __typename?: "LastestCompany" }
          | { __typename?: "LayoutBlogDetail" }
          | { __typename?: "Metadata" }
          | { __typename?: "NewsEvents" }
          | { __typename?: "OurCustomers" }
          | { __typename?: "OurProducts" }
          | { __typename?: "OutProductOfTab" }
          | { __typename?: "Page" }
          | { __typename?: "SignUpBlog" }
          | ({ __typename?: "SolutionItem" } & ItemsSolutionFragment)
          | { __typename?: "TabOutProducts" }
          | null
        >;
      } | null;
      itemsRightCollection?: {
        __typename?: "ComponentSolutionItemsRightCollection";
        items: Array<
          | { __typename?: "Blog" }
          | { __typename?: "BlogDetail" }
          | { __typename?: "CareerDetail" }
          | { __typename?: "ComponentSolution" }
          | { __typename?: "ContentPrivacy" }
          | { __typename?: "Determined" }
          | { __typename?: "DeterminedItems" }
          | { __typename?: "EventItems" }
          | { __typename?: "HomeBanner" }
          | { __typename?: "IchibaCommunity" }
          | { __typename?: "IchibaCommunityItems" }
          | { __typename?: "LastestCompany" }
          | { __typename?: "LayoutBlogDetail" }
          | { __typename?: "Metadata" }
          | { __typename?: "NewsEvents" }
          | { __typename?: "OurCustomers" }
          | { __typename?: "OurProducts" }
          | { __typename?: "OutProductOfTab" }
          | { __typename?: "Page" }
          | { __typename?: "SignUpBlog" }
          | ({ __typename?: "SolutionItem" } & ItemsSolutionFragment)
          | { __typename?: "TabOutProducts" }
          | null
        >;
      } | null;
      img?: { __typename?: "Asset"; url?: string | null } | null;
    } | null>;
  } | null;
};

export type ItemsIchibaCommunityFragment = {
  __typename?: "IchibaCommunityItems";
  title?: string | null;
  content?: string | null;
  slug?: string | null;
  img?: { __typename?: "Asset"; url?: string | null } | null;
};

export type IchibaCommunityEntryQueryVariables = Exact<{
  locale?: InputMaybe<Scalars["String"]>;
}>;

export type IchibaCommunityEntryQuery = {
  __typename?: "Query";
  ichibaCommunityCollection?: {
    __typename?: "IchibaCommunityCollection";
    items: Array<{
      __typename?: "IchibaCommunity";
      title?: string | null;
      content?: string | null;
      button?: string | null;
      img?: { __typename?: "Asset"; url?: string | null } | null;
      background?: { __typename?: "Asset"; url?: string | null } | null;
      itemsContentCollection?: {
        __typename?: "IchibaCommunityItemsContentCollection";
        items: Array<
          | { __typename?: "Blog" }
          | { __typename?: "BlogDetail" }
          | { __typename?: "CareerDetail" }
          | { __typename?: "ComponentSolution" }
          | { __typename?: "ContentPrivacy" }
          | { __typename?: "Determined" }
          | { __typename?: "DeterminedItems" }
          | { __typename?: "EventItems" }
          | { __typename?: "HomeBanner" }
          | { __typename?: "IchibaCommunity" }
          | ({
              __typename?: "IchibaCommunityItems";
            } & ItemsIchibaCommunityFragment)
          | { __typename?: "LastestCompany" }
          | { __typename?: "LayoutBlogDetail" }
          | { __typename?: "Metadata" }
          | { __typename?: "NewsEvents" }
          | { __typename?: "OurCustomers" }
          | { __typename?: "OurProducts" }
          | { __typename?: "OutProductOfTab" }
          | { __typename?: "Page" }
          | { __typename?: "SignUpBlog" }
          | { __typename?: "SolutionItem" }
          | { __typename?: "TabOutProducts" }
          | null
        >;
      } | null;
    } | null>;
  } | null;
};

export type MetaFeildFragment = {
  __typename?: "Metadata";
  content?: string | null;
  description?: string | null;
  name?: string | null;
  id?: string | null;
  property?: string | null;
  type?: string | null;
  httpEquiv?: string | null;
  title?: string | null;
};

export type MetaEntryQueryVariables = Exact<{
  slug?: InputMaybe<Scalars["String"]>;
  locale?: InputMaybe<Scalars["String"]>;
}>;

export type MetaEntryQuery = {
  __typename?: "Query";
  pageCollection?: {
    __typename?: "PageCollection";
    items: Array<{
      __typename?: "Page";
      metadataCollection?: {
        __typename?: "PageMetadataCollection";
        items: Array<
          | { __typename?: "Blog" }
          | { __typename?: "BlogDetail" }
          | { __typename?: "CareerDetail" }
          | { __typename?: "ComponentSolution" }
          | { __typename?: "ContentPrivacy" }
          | { __typename?: "Determined" }
          | { __typename?: "DeterminedItems" }
          | { __typename?: "EventItems" }
          | { __typename?: "HomeBanner" }
          | { __typename?: "IchibaCommunity" }
          | { __typename?: "IchibaCommunityItems" }
          | { __typename?: "LastestCompany" }
          | { __typename?: "LayoutBlogDetail" }
          | ({ __typename?: "Metadata" } & MetaFeildFragment)
          | { __typename?: "NewsEvents" }
          | { __typename?: "OurCustomers" }
          | { __typename?: "OurProducts" }
          | { __typename?: "OutProductOfTab" }
          | { __typename?: "Page" }
          | { __typename?: "SignUpBlog" }
          | { __typename?: "SolutionItem" }
          | { __typename?: "TabOutProducts" }
          | null
        >;
      } | null;
    } | null>;
  } | null;
};

export type MetaBlogDetailEntryQueryVariables = Exact<{
  slug?: InputMaybe<Scalars["String"]>;
}>;

export type MetaBlogDetailEntryQuery = {
  __typename?: "Query";
  blogDetailCollection?: {
    __typename?: "BlogDetailCollection";
    items: Array<{
      __typename?: "BlogDetail";
      metadataCollection?: {
        __typename?: "BlogDetailMetadataCollection";
        items: Array<
          | { __typename?: "Blog" }
          | { __typename?: "BlogDetail" }
          | { __typename?: "CareerDetail" }
          | { __typename?: "ComponentSolution" }
          | { __typename?: "ContentPrivacy" }
          | { __typename?: "Determined" }
          | { __typename?: "DeterminedItems" }
          | { __typename?: "EventItems" }
          | { __typename?: "HomeBanner" }
          | { __typename?: "IchibaCommunity" }
          | { __typename?: "IchibaCommunityItems" }
          | { __typename?: "LastestCompany" }
          | { __typename?: "LayoutBlogDetail" }
          | ({ __typename?: "Metadata" } & MetaFeildFragment)
          | { __typename?: "NewsEvents" }
          | { __typename?: "OurCustomers" }
          | { __typename?: "OurProducts" }
          | { __typename?: "OutProductOfTab" }
          | { __typename?: "Page" }
          | { __typename?: "SignUpBlog" }
          | { __typename?: "SolutionItem" }
          | { __typename?: "TabOutProducts" }
          | null
        >;
      } | null;
    } | null>;
  } | null;
};

export type EventsitemFragment = {
  __typename?: "BlogDetail";
  title?: string | null;
  content?: string | null;
  date?: string | null;
  slug?: string | null;
  img?: { __typename?: "Asset"; url?: string | null } | null;
};

export type NewsEventEntryQueryVariables = Exact<{
  locale?: InputMaybe<Scalars["String"]>;
}>;

export type NewsEventEntryQuery = {
  __typename?: "Query";
  newsEventsCollection?: {
    __typename?: "NewsEventsCollection";
    items: Array<{
      __typename?: "NewsEvents";
      title?: string | null;
      content?: string | null;
      eventsItemsCollection?: {
        __typename?: "NewsEventsEventsItemsCollection";
        items: Array<
          | { __typename?: "Blog" }
          | ({ __typename?: "BlogDetail" } & EventsitemFragment)
          | { __typename?: "CareerDetail" }
          | { __typename?: "ComponentSolution" }
          | { __typename?: "ContentPrivacy" }
          | { __typename?: "Determined" }
          | { __typename?: "DeterminedItems" }
          | { __typename?: "EventItems" }
          | { __typename?: "HomeBanner" }
          | { __typename?: "IchibaCommunity" }
          | { __typename?: "IchibaCommunityItems" }
          | { __typename?: "LastestCompany" }
          | { __typename?: "LayoutBlogDetail" }
          | { __typename?: "Metadata" }
          | { __typename?: "NewsEvents" }
          | { __typename?: "OurCustomers" }
          | { __typename?: "OurProducts" }
          | { __typename?: "OutProductOfTab" }
          | { __typename?: "Page" }
          | { __typename?: "SignUpBlog" }
          | { __typename?: "SolutionItem" }
          | { __typename?: "TabOutProducts" }
          | null
        >;
      } | null;
    } | null>;
  } | null;
};

export type TrustBlogEntryQueryVariables = Exact<{
  locale?: InputMaybe<Scalars["String"]>;
}>;

export type TrustBlogEntryQuery = {
  __typename?: "Query";
  newsEventsCollection?: {
    __typename?: "NewsEventsCollection";
    items: Array<{
      __typename?: "NewsEvents";
      title?: string | null;
      content?: string | null;
      eventsItemsCollection?: {
        __typename?: "NewsEventsEventsItemsCollection";
        items: Array<
          | { __typename?: "Blog" }
          | ({ __typename?: "BlogDetail" } & EventsitemFragment)
          | { __typename?: "CareerDetail" }
          | { __typename?: "ComponentSolution" }
          | { __typename?: "ContentPrivacy" }
          | { __typename?: "Determined" }
          | { __typename?: "DeterminedItems" }
          | { __typename?: "EventItems" }
          | { __typename?: "HomeBanner" }
          | { __typename?: "IchibaCommunity" }
          | { __typename?: "IchibaCommunityItems" }
          | { __typename?: "LastestCompany" }
          | { __typename?: "LayoutBlogDetail" }
          | { __typename?: "Metadata" }
          | { __typename?: "NewsEvents" }
          | { __typename?: "OurCustomers" }
          | { __typename?: "OurProducts" }
          | { __typename?: "OutProductOfTab" }
          | { __typename?: "Page" }
          | { __typename?: "SignUpBlog" }
          | { __typename?: "SolutionItem" }
          | { __typename?: "TabOutProducts" }
          | null
        >;
      } | null;
    } | null>;
  } | null;
};

export type PrivacyItemFragment = {
  __typename?: "ContentPrivacy";
  title?: string | null;
  content?: { __typename?: "ContentPrivacyContent"; json: any } | null;
};

export type PrivacyQueryVariables = Exact<{
  slug?: InputMaybe<Scalars["String"]>;
}>;

export type PrivacyQuery = {
  __typename?: "Query";
  pageCollection?: {
    __typename?: "PageCollection";
    items: Array<{
      __typename?: "Page";
      componentCollection?: {
        __typename?: "PageComponentCollection";
        items: Array<
          | { __typename?: "Blog" }
          | { __typename?: "BlogDetail" }
          | { __typename?: "CareerDetail" }
          | { __typename?: "ComponentSolution" }
          | ({ __typename?: "ContentPrivacy" } & PrivacyItemFragment)
          | { __typename?: "Determined" }
          | { __typename?: "DeterminedItems" }
          | { __typename?: "EventItems" }
          | { __typename?: "HomeBanner" }
          | { __typename?: "IchibaCommunity" }
          | { __typename?: "IchibaCommunityItems" }
          | { __typename?: "LastestCompany" }
          | { __typename?: "LayoutBlogDetail" }
          | { __typename?: "Metadata" }
          | { __typename?: "NewsEvents" }
          | { __typename?: "OurCustomers" }
          | { __typename?: "OurProducts" }
          | { __typename?: "OutProductOfTab" }
          | { __typename?: "Page" }
          | { __typename?: "SignUpBlog" }
          | { __typename?: "SolutionItem" }
          | { __typename?: "TabOutProducts" }
          | null
        >;
      } | null;
    } | null>;
  } | null;
};

export type TermsEntryQueryVariables = Exact<{
  slug?: InputMaybe<Scalars["String"]>;
}>;

export type TermsEntryQuery = {
  __typename?: "Query";
  pageCollection?: {
    __typename?: "PageCollection";
    items: Array<{
      __typename?: "Page";
      componentCollection?: {
        __typename?: "PageComponentCollection";
        items: Array<
          | { __typename?: "Blog" }
          | { __typename?: "BlogDetail" }
          | { __typename?: "CareerDetail" }
          | { __typename?: "ComponentSolution" }
          | ({ __typename?: "ContentPrivacy" } & PrivacyItemFragment)
          | { __typename?: "Determined" }
          | { __typename?: "DeterminedItems" }
          | { __typename?: "EventItems" }
          | { __typename?: "HomeBanner" }
          | { __typename?: "IchibaCommunity" }
          | { __typename?: "IchibaCommunityItems" }
          | { __typename?: "LastestCompany" }
          | { __typename?: "LayoutBlogDetail" }
          | { __typename?: "Metadata" }
          | { __typename?: "NewsEvents" }
          | { __typename?: "OurCustomers" }
          | { __typename?: "OurProducts" }
          | { __typename?: "OutProductOfTab" }
          | { __typename?: "Page" }
          | { __typename?: "SignUpBlog" }
          | { __typename?: "SolutionItem" }
          | { __typename?: "TabOutProducts" }
          | null
        >;
      } | null;
    } | null>;
  } | null;
};

export const BlogDetailFragmentDoc = gql`
  fragment blogDetail on BlogDetail {
    title
    img {
      url
    }
    content
    slug
  }
`;
export const BlogSignUpFragmentDoc = gql`
  fragment blogSignUp on SignUpBlog {
    titleSignUp
    banner {
      url
    }
  }
`;
export const MostItemsFragmentDoc = gql`
  fragment mostItems on BlogDetail {
    title
    content
    img {
      url
    }
    date
    author
  }
`;
export const ItemsfeildFragmentDoc = gql`
  fragment itemsfeild on BlogDetail {
    date
    title
    content
    img {
      url
    }
    category
    slug
  }
`;
export const BannerDiscoverFragmentDoc = gql`
  fragment bannerDiscover on HomeBanner {
    img {
      url
    }
  }
`;
export const ListProductFragmentDoc = gql`
  fragment listProduct on OutProductOfTab {
    title
    icon {
      url
    }
    content
    bio {
      json
    }
    listServices
    img {
      url
    }
    animation
    learnMore
  }
`;
export const TabProductFragmentDoc = gql`
  fragment tabProduct on TabOutProducts {
    title
    listProductCollection(limit: 6) {
      items {
        ...listProduct
      }
    }
  }
`;
export const HomeBannerFragmentDoc = gql`
  fragment homeBanner on HomeBanner {
    title
    sections: content
    img {
      url
    }
    buttonFreeTrial
    buttonTakeTour
    content1
    content2
  }
`;
export const OurProductFragmentDoc = gql`
  fragment ourProduct on OurProducts {
    title
    content
    typeName
  }
`;
export const DeterminedItemsFragmentDoc = gql`
  fragment determinedItems on DeterminedItems {
    title
    content
    img {
      url
    }
  }
`;
export const DeterminedFragmentDoc = gql`
  fragment determined on Determined {
    title
    content
    titleAudits
    contentAudits
    background {
      url
    }
    iconsAuditsCollection(limit: 3) {
      items {
        url
      }
    }
    itemsDeterminedCollection(limit: 3) {
      items {
        ...determinedItems
      }
    }
  }
`;
export const ItemsSolutionFragmentDoc = gql`
  fragment itemsSolution on SolutionItem {
    title
    content
    contentRichText {
      json
    }
  }
`;
export const ItemsIchibaCommunityFragmentDoc = gql`
  fragment itemsIchibaCommunity on IchibaCommunityItems {
    title
    content
    img {
      url
    }
    slug
  }
`;
export const MetaFeildFragmentDoc = gql`
  fragment metaFeild on Metadata {
    content
    description
    name
    id
    property
    type
    httpEquiv
    title
  }
`;
export const EventsitemFragmentDoc = gql`
  fragment eventsitem on BlogDetail {
    title
    content
    img {
      url
    }
    date
    slug
  }
`;
export const PrivacyItemFragmentDoc = gql`
  fragment privacyItem on ContentPrivacy {
    content {
      json
    }
    title
  }
`;
export const BlogEntryDocument = gql`
  query blogEntry($locale: String = "") {
    blogCollection(locale: $locale) {
      items {
        newsBlog {
          ...blogDetail
        }
        mostPopularCollection(limit: 12) {
          items {
            ...blogDetail
          }
        }
        browserAllCollection(limit: 10) {
          items {
            ...blogDetail
          }
        }
        blogSideRightCollection(limit: 4) {
          items {
            ...blogDetail
          }
        }
        signUp {
          ...blogSignUp
        }
      }
    }
  }
  ${BlogDetailFragmentDoc}
  ${BlogSignUpFragmentDoc}
`;
export const BlogDetailIdDocument = gql`
  query blogDetailId($slug: String = "", $locale: String = "") {
    blogDetailCollection(where: { slug: $slug }, locale: $locale, limit: 1) {
      items {
        contentRichText {
          json
          links {
            assets {
              block {
                sys {
                  id
                }
                url
                title
                width
                height
                description
              }
            }
          }
        }
        img {
          url
        }
        content
        author
        date
        category
        topic
        title
        authorBiography
        avtAuthor {
          url
        }
        relatedProductsCollection(limit: 2) {
          items {
            ...mostItems
          }
        }
      }
    }
  }
  ${MostItemsFragmentDoc}
`;
export const AssetEntryDocument = gql`
  query assetEntry($id: String = "") {
    asset(id: $id) {
      url
    }
  }
`;
export const LayoutBlogDetailDocument = gql`
  query layoutBlogDetail {
    layoutBlogDetailCollection(limit: 1) {
      items {
        getStarted
        getStartedImg {
          url
        }
        getStartedBg
        mostPopularCollection(limit: 2) {
          items {
            ...mostItems
          }
        }
      }
    }
  }
  ${MostItemsFragmentDoc}
`;
export const TestCareerDetailDocument = gql`
  query testCareerDetail {
    careerDetailCollection(limit: 4) {
      items {
        title
        body {
          json
        }
        slug
      }
    }
  }
`;
export const LastestCompanyEntryDocument = gql`
  query lastestCompanyEntry($locale: String = "") {
    lastestCompanyCollection(locale: $locale, limit: 1) {
      items {
        title
        content
        itemsCollection {
          items {
            ...itemsfeild
          }
        }
      }
    }
  }
  ${ItemsfeildFragmentDoc}
`;
export const VideoDiscoverEntryDocument = gql`
  query videoDiscoverEntry($slug: String = "discover") {
    pageCollection(where: { slug: $slug }, limit: 1) {
      items {
        componentCollection(limit: 1) {
          items {
            ...homeBanner
          }
        }
      }
    }
  }
  ${HomeBannerFragmentDoc}
`;
export const OutProductEntryDocument = gql`
  query outProductEntry($locale: String = "") {
    ourProductsCollection(locale: $locale, limit: 1) {
      items {
        tabProductCollection(limit: 5) {
          items {
            ...tabProduct
          }
        }
      }
    }
  }
  ${TabProductFragmentDoc}
  ${ListProductFragmentDoc}
`;
export const OutCustomerEntryDocument = gql`
  query outCustomerEntry($locale: String = "") {
    ourCustomersCollection(locale: $locale) {
      items {
        title
        content
        iconsCollection {
          items {
            url
            description
          }
        }
      }
    }
  }
`;
export const HomeBannerEntryDocument = gql`
  query homeBannerEntry($slug: String = "", $locale: String = "") {
    pageCollection(where: { slug: $slug }, locale: $locale, limit: 1) {
      items {
        componentCollection(limit: 6) {
          items {
            ...homeBanner
            ...ourProduct
            ...determined
          }
        }
      }
    }
  }
  ${HomeBannerFragmentDoc}
  ${OurProductFragmentDoc}
  ${DeterminedFragmentDoc}
  ${DeterminedItemsFragmentDoc}
`;
export const SolutionEntryDocument = gql`
  query solutionEntry($locale: String = "") {
    componentSolutionCollection(limit: 1, locale: $locale) {
      items {
        title
        itemsLeftCollection(limit: 5) {
          items {
            ...itemsSolution
          }
        }
        itemsRightCollection(limit: 5) {
          items {
            ...itemsSolution
          }
        }
        img {
          url
        }
      }
    }
  }
  ${ItemsSolutionFragmentDoc}
`;
export const IchibaCommunityEntryDocument = gql`
  query ichibaCommunityEntry($locale: String = "") {
    ichibaCommunityCollection(locale: $locale, limit: 1) {
      items {
        title
        content
        img {
          url
        }
        background {
          url
        }
        button
        itemsContentCollection(limit: 3) {
          items {
            ...itemsIchibaCommunity
          }
        }
      }
    }
  }
  ${ItemsIchibaCommunityFragmentDoc}
`;
export const MetaEntryDocument = gql`
  query metaEntry($slug: String = "home", $locale: String = "") {
    pageCollection(where: { slug: $slug }, locale: $locale, limit: 1) {
      items {
        metadataCollection {
          items {
            ...metaFeild
          }
        }
      }
    }
  }
  ${MetaFeildFragmentDoc}
`;
export const MetaBlogDetailEntryDocument = gql`
  query metaBlogDetailEntry($slug: String = "") {
    blogDetailCollection(where: { slug: $slug }, limit: 1) {
      items {
        metadataCollection {
          items {
            ...metaFeild
          }
        }
      }
    }
  }
  ${MetaFeildFragmentDoc}
`;
export const NewsEventEntryDocument = gql`
  query newsEventEntry($locale: String = "") {
    newsEventsCollection(locale: $locale, limit: 1) {
      items {
        title
        content
        eventsItemsCollection(limit: 10) {
          items {
            ...eventsitem
          }
        }
      }
    }
  }
  ${EventsitemFragmentDoc}
`;
export const TrustBlogEntryDocument = gql`
  query trustBlogEntry($locale: String = "") {
    newsEventsCollection(locale: $locale, limit: 1) {
      items {
        title
        content
        eventsItemsCollection(limit: 2) {
          items {
            ...eventsitem
          }
        }
      }
    }
  }
  ${EventsitemFragmentDoc}
`;
export const PrivacyDocument = gql`
  query privacy($slug: String = "privacy-policy") {
    pageCollection(where: { slug: $slug }) {
      items {
        componentCollection {
          items {
            ...privacyItem
          }
        }
      }
    }
  }
  ${PrivacyItemFragmentDoc}
`;
export const TermsEntryDocument = gql`
  query termsEntry($slug: String = "terms-and-conditions") {
    pageCollection(where: { slug: $slug }) {
      items {
        componentCollection {
          items {
            ...privacyItem
          }
        }
      }
    }
  }
  ${PrivacyItemFragmentDoc}
`;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string,
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (
  action,
  _operationName,
  _operationType,
) => action();

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper,
) {
  return {
    blogEntry(
      variables?: BlogEntryQueryVariables,
      requestHeaders?: RequestInit["headers"],
    ): Promise<BlogEntryQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<BlogEntryQuery>(BlogEntryDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "blogEntry",
        "query",
      );
    },
    blogDetailId(
      variables?: BlogDetailIdQueryVariables,
      requestHeaders?: RequestInit["headers"],
    ): Promise<BlogDetailIdQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<BlogDetailIdQuery>(BlogDetailIdDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "blogDetailId",
        "query",
      );
    },
    assetEntry(
      variables?: AssetEntryQueryVariables,
      requestHeaders?: RequestInit["headers"],
    ): Promise<AssetEntryQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<AssetEntryQuery>(AssetEntryDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "assetEntry",
        "query",
      );
    },
    layoutBlogDetail(
      variables?: LayoutBlogDetailQueryVariables,
      requestHeaders?: RequestInit["headers"],
    ): Promise<LayoutBlogDetailQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<LayoutBlogDetailQuery>(
            LayoutBlogDetailDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        "layoutBlogDetail",
        "query",
      );
    },
    testCareerDetail(
      variables?: TestCareerDetailQueryVariables,
      requestHeaders?: RequestInit["headers"],
    ): Promise<TestCareerDetailQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<TestCareerDetailQuery>(
            TestCareerDetailDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        "testCareerDetail",
        "query",
      );
    },
    lastestCompanyEntry(
      variables?: LastestCompanyEntryQueryVariables,
      requestHeaders?: RequestInit["headers"],
    ): Promise<LastestCompanyEntryQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<LastestCompanyEntryQuery>(
            LastestCompanyEntryDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        "lastestCompanyEntry",
        "query",
      );
    },
    videoDiscoverEntry(
      variables?: VideoDiscoverEntryQueryVariables,
      requestHeaders?: RequestInit["headers"],
    ): Promise<VideoDiscoverEntryQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<VideoDiscoverEntryQuery>(
            VideoDiscoverEntryDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        "videoDiscoverEntry",
        "query",
      );
    },
    outProductEntry(
      variables?: OutProductEntryQueryVariables,
      requestHeaders?: RequestInit["headers"],
    ): Promise<OutProductEntryQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<OutProductEntryQuery>(
            OutProductEntryDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        "outProductEntry",
        "query",
      );
    },
    outCustomerEntry(
      variables?: OutCustomerEntryQueryVariables,
      requestHeaders?: RequestInit["headers"],
    ): Promise<OutCustomerEntryQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<OutCustomerEntryQuery>(
            OutCustomerEntryDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        "outCustomerEntry",
        "query",
      );
    },
    homeBannerEntry(
      variables?: HomeBannerEntryQueryVariables,
      requestHeaders?: RequestInit["headers"],
    ): Promise<HomeBannerEntryQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<HomeBannerEntryQuery>(
            HomeBannerEntryDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        "homeBannerEntry",
        "query",
      );
    },
    solutionEntry(
      variables?: SolutionEntryQueryVariables,
      requestHeaders?: RequestInit["headers"],
    ): Promise<SolutionEntryQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<SolutionEntryQuery>(SolutionEntryDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "solutionEntry",
        "query",
      );
    },
    ichibaCommunityEntry(
      variables?: IchibaCommunityEntryQueryVariables,
      requestHeaders?: RequestInit["headers"],
    ): Promise<IchibaCommunityEntryQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<IchibaCommunityEntryQuery>(
            IchibaCommunityEntryDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        "ichibaCommunityEntry",
        "query",
      );
    },
    metaEntry(
      variables?: MetaEntryQueryVariables,
      requestHeaders?: RequestInit["headers"],
    ): Promise<MetaEntryQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<MetaEntryQuery>(MetaEntryDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "metaEntry",
        "query",
      );
    },
    metaBlogDetailEntry(
      variables?: MetaBlogDetailEntryQueryVariables,
      requestHeaders?: RequestInit["headers"],
    ): Promise<MetaBlogDetailEntryQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<MetaBlogDetailEntryQuery>(
            MetaBlogDetailEntryDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        "metaBlogDetailEntry",
        "query",
      );
    },
    newsEventEntry(
      variables?: NewsEventEntryQueryVariables,
      requestHeaders?: RequestInit["headers"],
    ): Promise<NewsEventEntryQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<NewsEventEntryQuery>(
            NewsEventEntryDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        "newsEventEntry",
        "query",
      );
    },
    trustBlogEntry(
      variables?: TrustBlogEntryQueryVariables,
      requestHeaders?: RequestInit["headers"],
    ): Promise<TrustBlogEntryQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<TrustBlogEntryQuery>(
            TrustBlogEntryDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        "trustBlogEntry",
        "query",
      );
    },
    privacy(
      variables?: PrivacyQueryVariables,
      requestHeaders?: RequestInit["headers"],
    ): Promise<PrivacyQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<PrivacyQuery>(PrivacyDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "privacy",
        "query",
      );
    },
    termsEntry(
      variables?: TermsEntryQueryVariables,
      requestHeaders?: RequestInit["headers"],
    ): Promise<TermsEntryQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<TermsEntryQuery>(TermsEntryDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "termsEntry",
        "query",
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
