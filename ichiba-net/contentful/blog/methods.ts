import { EntriesQueries } from "contentful";
import { contentfulClient } from "../http-client";
import { NotFoundResponse } from "@/http-responses";
import * as ContentfulTypes from "@/types/contentful"; // Import đúng namespace TypeReviewsSkeleton

export const listBlogPosts = async ({
  query,
  language,
}: {
  language: string;
  query?: Partial<EntriesQueries<ContentfulTypes.TypeBlogPostSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS'>>;
}) => {
  const response =
    await contentfulClient.withoutUnresolvableLinks.getEntries<
      ContentfulTypes.TypeBlogPostSkeleton
    >({
      content_type: 'blogPost',
      'fields.language.sys.contentType.sys.id': 'language',
      'fields.language.fields.code': language,
      select: [
        "fields.title",
        "fields.category",
        "fields.slug",
        "fields.featuredImage",
        "fields.shortDescription",
        "fields.author",
        "fields.content",
        "fields.metaTitle",
        "fields.metaDescription",
        "fields.language",
        "sys.updatedAt",
      ],
      ...query,
    });
  if (!response?.items?.length) {
    throw new NotFoundResponse("No reviews found");
  }
  return response;
};

export const findBlogPost = async ({
  query,
  language,
}: {
  language: string;
  query?: Partial<EntriesQueries<ContentfulTypes.TypeBlogPostSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS'>>;
}) => {
  const entry = await contentfulClient.withoutUnresolvableLinks
    .getEntries<ContentfulTypes.TypeBlogPostSkeleton>({
      select: [
        'fields.title',
        'fields.category',
        'fields.slug',
        'fields.featuredImage',
        'fields.shortDescription',
        'fields.author',
        'fields.content',
        'fields.metaTitle',
        'fields.metaDescription',
        'sys.updatedAt',
      ],
      'fields.language.sys.contentType.sys.id': 'language',
      'fields.language.fields.code': language,
      content_type: 'blogPost',
      limit: 1,
      ...query,
    })
    .then((res) => res.items.at(0));

  if (!entry) {
    throw new NotFoundResponse();
  }

  return entry;
};
