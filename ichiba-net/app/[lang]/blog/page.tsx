import { Suspense } from "react";
import { getDictionary } from "../../getDictionary";
import BlogPage from "@/components/blog-post/page";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { lang: string };
};
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const lang = await getDictionary(params.lang ? params.lang : "en");
  const link = `https://ichiba.net/${params.lang}/blog`;
  return {
    title: lang?.meta?.blog?.title,
    description: lang?.meta?.blog?.des,
    alternates: { canonical: link },
    openGraph: {
      type: "website",
      url: link,
      title: lang?.meta?.blog?.title,
      description: lang?.meta?.blog?.des,
      siteName: "ICHIBA",
      images: [
        {
          url: "https://cms-strapi.ichiba.net/uploads/Size_40_46722f9991.png",
        },
      ],
    },
  };
}

const Blogs = async ({
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
      <BlogPage lang={lang} locale={params.lang} />
    </Suspense>
  );
};

export default Blogs;
