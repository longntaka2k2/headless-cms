import { Entry } from 'contentful';

export type BlogPostEntry = Entry<
    ContentfulTypes.TypeBlogPostSkeleton,
    'WITHOUT_UNRESOLVABLE_LINKS',
    string
>;
