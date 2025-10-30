/* eslint-disable react-hooks/rules-of-hooks */
import { GetStaticProps, Metadata, ResolvingMetadata } from "next";

import { getDictionary } from "@/app/getDictionary";
import { getBlogCategories } from "@/public/api/strapiService";
import CategoryComponent from "@/components/blog/category/page";
interface Props {
  params: {
    category: string | undefined;
    lang: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const lang = await getDictionary(params.lang ? params.lang : "en");

  const data = await getBlogCategories(params.lang);

  // Check if the provided category matches any of the categories in the data
  const matchingCategory = data.find(
    (item: { attributes: { slug: string | undefined } }) =>
      item.attributes.slug === params.category
  );

  let category = "";

  // If a matching category is found, assign its name to the 'category' variable
  if (matchingCategory) {
    category = matchingCategory.attributes.name;
  }

  const link =
    `https://ezbuy.jp/${params.lang}/blog/category/${params.category}` as string;

  return {
    title: `${category}${lang?.meta?.category?.title}`,
    description: `${category}${lang?.meta?.category?.des}`,
    alternates: { canonical: link },
    openGraph: {
      type: "website",
      url: link,
      title: `${category}${lang?.meta?.category?.title}`,
      description: `${category}${lang?.meta?.category?.des}`,
      siteName: "EZBUY",
      images: [
        {
          url: "https://strapi-ezbuy.ichiba.net/uploads/logo_d9ffb053f7.svg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@EzbuyVietnam",
      creator: "@EzbuyVietnam",
      images: "https://strapi-ezbuy.ichiba.net/uploads/logo_d9ffb053f7.svg",
      title: `${category}${lang?.meta?.category?.title}`,
      description: `${category}${lang?.meta?.category?.des}`,
    },
  };
}

const Category = async ({
  params,
}: {
  params: {
    category: string | undefined;
    lang: string;
  };
}) => {
  const lang = await getDictionary(params.lang ? params.lang : "en");
  const data = await getBlogCategories(params.lang);
  const matchingCategory = data.find(
    (item: { attributes: { slug: string | undefined } }) =>
      item.attributes.slug === params.category
  );

  let category = "";

  // If a matching category is found, assign its name to the 'category' variable
  if (matchingCategory) {
    category = matchingCategory.attributes.name;
  }

  return (
    <>
      <CategoryComponent
        params={{
          category: params.category,
          lang: params.lang,
        }}
        lang={lang}
      />
    </>
  );
};
export default Category;
