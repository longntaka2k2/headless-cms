import { Suspense } from "react";
import { getDictionary } from "../../../getDictionary";
import BlogDetailCPN from "@/components/blog-post/blog-detail";
import { Metadata, ResolvingMetadata } from "next";
import { findBlogPost } from "@/contentful/blog";

export async function generateMetadata(
  {
    params,
  }: {
    params: {
      lang: string;
      slug: string;
    };
  }
): Promise<Metadata> {
  const entry = await findBlogPost({
    language: params.lang,
    query: {
      "fields.slug": params.slug,
    },
  });

  const link = `https://ichiba.net/${params.lang}/blog/${params.slug}`;
  return {
    title: entry.fields.metaTitle,
    description: entry.fields.metaDescription,
    alternates: { canonical: link },
    openGraph: {
      type: "website",
      url: link,
      title: entry.fields.metaTitle,
      description: entry.fields.metaDescription,
      siteName: "ICHIBA",
      images: [
        {
          url: "https://cms-strapi.ichiba.net/uploads/Size_40_46722f9991.png",
        },
      ],
    },
  };
}

const BlogDetail = async ({
  params,
}: {
  params: {
    lang: string;
    slug: string;
  };
}) => {
  const lang = await getDictionary(params.lang ? params.lang : "en");

  return (
    <Suspense fallback={<div></div>}>
      <BlogDetailCPN params={{ slug: params.slug }} />
    </Suspense>
  );
};

export default BlogDetail;
