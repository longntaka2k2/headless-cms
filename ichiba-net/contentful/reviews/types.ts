import { Entry } from 'contentful';

export type ReviewEntry = Entry<
  ContentfulTypes.TypeReviewsSkeleton,
  'WITHOUT_UNRESOLVABLE_LINKS',
  string
>;
