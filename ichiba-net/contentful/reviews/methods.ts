import { EntriesQueries } from "contentful";
import { contentfulClient } from "../http-client";
import { NotFoundResponse } from "@/http-responses";
import * as ContentfulTypes from "@/types/contentful"; // Import đúng namespace TypeReviewsSkeleton

export const listReviews = async ({
  query,
  language,
}: {
  language: string;
  query?: Partial<
    EntriesQueries<
      ContentfulTypes.TypeReviewsSkeleton,
      "WITHOUT_UNRESOLVABLE_LINKS"
    >
  >;
}) => {
  const response =
    await contentfulClient.withoutUnresolvableLinks.getEntries<
      ContentfulTypes.TypeReviewsSkeleton
    >({
      content_type: "reviews",
      'fields.language.sys.contentType.sys.id': 'language',
      "fields.language.fields.code": language,
      select: [
        "fields.thumnail",
        "fields.star",
        "fields.avatarUser",
        "fields.userName",
        "fields.career",
        "fields.country",
        "fields.originalComment",
        "fields.comment",
        "fields.language",
      ],
      ...query,
    });

  if (!response?.items?.length) {
    throw new NotFoundResponse("No reviews found");
  }

  return response;
};
