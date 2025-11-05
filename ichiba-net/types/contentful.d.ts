import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeAuthorFields {
    name: EntryFieldTypes.Symbol;
    avatar: EntryFieldTypes.AssetLink;
}

export type TypeAuthorSkeleton = EntrySkeletonType<TypeAuthorFields, "author">;
export type TypeAuthor<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeAuthorSkeleton, Modifiers, Locales>;

export interface TypeBlogCategoryFields {
    title: EntryFieldTypes.Symbol;
    slug?: EntryFieldTypes.Symbol;
    language: EntryFieldTypes.EntryLink<EntrySkeletonType>;
}

export type TypeBlogCategorySkeleton = EntrySkeletonType<TypeBlogCategoryFields, "blogCategory">;
export type TypeBlogCategory<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeBlogCategorySkeleton, Modifiers, Locales>;

export interface TypeBlogPageFields {
    title?: EntryFieldTypes.Symbol;
    body?: EntryFieldTypes.RichText;
    image?: EntryFieldTypes.AssetLink;
    recommendedPosts?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<EntrySkeletonType>>;
}

export type TypeBlogPageSkeleton = EntrySkeletonType<TypeBlogPageFields, "blogPage">;
export type TypeBlogPage<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeBlogPageSkeleton, Modifiers, Locales>;

export interface TypeBlogPostFields {
    title: EntryFieldTypes.Symbol;
    shortDescription?: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Symbol;
    author?: EntryFieldTypes.EntryLink<TypeAuthorSkeleton>;
    featuredImage: EntryFieldTypes.AssetLink;
    content: EntryFieldTypes.RichText;
    relatedBlogPosts?: EntryFieldTypes.EntryLink<TypeBlogPostSkeleton>;
    category: EntryFieldTypes.EntryLink<TypeBlogCategorySkeleton>;
    language: EntryFieldTypes.EntryLink<TypeLanguageSkeleton>;
    metaTitle?: EntryFieldTypes.Symbol;
    metaDescription?: EntryFieldTypes.Text;
}

export type TypeBlogPostSkeleton = EntrySkeletonType<TypeBlogPostFields, "blogPost">;
export type TypeBlogPost<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeBlogPostSkeleton, Modifiers, Locales>;

export interface TypeLanguageFields {
    name: EntryFieldTypes.Symbol;
    code: EntryFieldTypes.Symbol;
}

export type TypeLanguageSkeleton = EntrySkeletonType<TypeLanguageFields, "language">;
export type TypeLanguage<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeLanguageSkeleton, Modifiers, Locales>;

export interface TypeResourceFields {
    title: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.Symbol;
    redirectUrl?: EntryFieldTypes.Symbol;
    icon?: EntryFieldTypes.AssetLink;
    language?: EntryFieldTypes.EntryLink<TypeLanguageSkeleton>;
}

export type TypeResourceSkeleton = EntrySkeletonType<TypeResourceFields, "resource">;
export type TypeResource<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeResourceSkeleton, Modifiers, Locales>;

export interface TypeReviewsFields {
    thumnail: EntryFieldTypes.AssetLink;
    star: EntryFieldTypes.Integer;
    avatarUser: EntryFieldTypes.AssetLink;
    userName: EntryFieldTypes.Symbol;
    career: EntryFieldTypes.Symbol;
    country: EntryFieldTypes.AssetLink;
    originalComment: EntryFieldTypes.Text;
    comment: EntryFieldTypes.Text;
    language: EntryFieldTypes.EntryLink<EntrySkeletonType>;
}

export type TypeReviewsSkeleton = EntrySkeletonType<TypeReviewsFields, "reviews">;
export type TypeReviews<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeReviewsSkeleton, Modifiers, Locales>;

export interface TypeSolutionFields {
    title: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.Symbol;
    redirectUrl?: EntryFieldTypes.Symbol;
    icon?: EntryFieldTypes.AssetLink;
    language: EntryFieldTypes.EntryLink<TypeLanguageSkeleton>;
}

export type TypeSolutionSkeleton = EntrySkeletonType<TypeSolutionFields, "solution">;
export type TypeSolution<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeSolutionSkeleton, Modifiers, Locales>;

export as namespace ContentfulTypes;