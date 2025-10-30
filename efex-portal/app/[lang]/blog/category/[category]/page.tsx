/* eslint-disable react-hooks/rules-of-hooks */
import { GetStaticProps, Metadata, ResolvingMetadata } from "next";

import { getDictionary } from "@/app/getDictionary";
import CategoryComponent from "@/components/blog/category/page";
import { getBlogCategories, getPosts } from "@/public/api/strapiService";
import FromVietNam from "@/components/commons/FromVietNam";

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
    `https://efex.vn/${params.lang}/blog/category/${params.category}` as string;

  return {
    title: `${category}${lang?.meta?.category?.title}`,
    description: `${category}${lang?.meta?.category?.des}`,
    alternates: { canonical: link },
    openGraph: {
      type: "website",
      url: link,
      title: `${category}${lang?.meta?.category?.title}`,
      description: `${category}${lang?.meta?.category?.des}`,
      siteName: "EFEX",
      images: [
        {
          url: "https://strapi-efex.ichiba.net/uploads/Group_25d6589200.svg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@EfexVietnam",
      creator: "@EfexVietnam",
      images: "https://strapi-efex.ichiba.net/uploads/Group_25d6589200.svg",
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
  const categories = await getPosts(
    params.lang as string,
    1,
    9,
    params?.category
  );

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
      {/* <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
            {
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "CollectionPage",
                  "name": "${category}${lang?.meta?.category?.title}",
                  "headline": "${category}${lang?.meta?.category?.title}",
                  "about": {
                    "@type": "Organization",
                    "name": "EFEX",
                    "@id": ${
                      params.lang === "en"
                        ? `"https://efex.vn/en/#Organization"`
                        : `"https://efex.vn/vi/#Organization"`
                    }
                  },
                  "mainEntity": {
                    "@type": "ItemList",
                    "numberOfItems": ${categories.length},
                    "itemListOrder": "http://schema.org/ItemListUnordered",
                    "itemListElement": [
                      ${categories
                        .map(
                          (category: any, index: number) => `
                        {
                          "@type": "BlogPosting",
                          "@id": ${
                            params.lang === "en"
                              ? `"https://efex.vn/en/blog/${category.attributes.slug}/#BlogPosting"`
                              : `"https://efex.vn/vi/blog/${category.attributes.slug}/#BlogPosting"`
                          }
                        }${index < categories.length - 1 ? "," : ""}
                      `
                        )
                        .join("")}
                    ]
                  },
                  "url": ${
                    params.lang === "en"
                      ? `"https://efex.vn/en/blog/category/${params.category}"`
                      : `"https://efex.vn/vi/blog/category/${params.category}"`
                  }, 
                  "isPartOf": { 
                    "@type": "WebPage",
                    "name": ${
                      params.lang === "en"
                        ? `"EFEX Blog - The Ultimate Guide about Order Fulfillment"`
                        : `"EFEX Blog - Thông Tin Mới Nhất Về Order Fulfillment"`
                    },
                    "@id": ${
                      params.lang === "en"
                        ? `"https://efex.vn/en/blog/#WebPage"`
                        : `"https://efex.vn/vi/blog/#WebPage"`
                    }
                  }
                },
                {
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "item": {
                        "name": "Trang chủ",
                        "@id": ${
                          params.lang === "en"
                            ? `"https://efex.vn/en"`
                            : `"https://efex.vn/vi"`
                        }
                      }
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "item": {
                        "name": ${
                          params.lang === "en"
                            ? `"EFEX Blog - The Ultimate Guide about Order Fulfillment"`
                            : `"EFEX Blog - Thông Tin Mới Nhất Về Order Fulfillment"`
                        },
                        "@id": ${
                          params.lang === "en"
                            ? `"https://efex.vn/en/blog"`
                            : `"https://efex.vn/vi/blog"`
                        }
                      }
                    },
                    {
                      "@type": "ListItem",
                      "position": 3,
                      "item": {
                        "name": "${category}${lang?.meta?.category?.title}",
                        "@id": ${
                          params.lang === "en"
                            ? `"https://efex.vn/en/blog/category/${params.category}"`
                            : `"https://efex.vn/vi/blog/category/${params.category}"`
                        }
                      }
                    }
                  ]
                }
              ]
            }
      `,
          }}
        />
      </head> */}

      <head>
        {params.lang === "en" && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `
              {
                "@context": "https://schema.org",
                "@graph": [
                  {
                    "@type": "CollectionPage",
                    "name": "${category}${lang?.meta?.category?.title}",
                    "headline": "${category}${lang?.meta?.category?.title}",
                    "about": {
                      "@type": "Organization",
                      "name": "EFEX",
                      "@id": "https://efex.vn/en/#Organization"
                    },
                    "mainEntity": {
                      "@type": "ItemList",
                      "numberOfItems": "${categories.length}",
                      "itemListOrder": "http://schema.org/ItemListUnordered",
                      "itemListElement": [
                        ${categories
                          .map(
                            (category: any, index: number) => `
                            {
                              "@type": "BlogPosting",
                              "@id": "https://efex.vn/en/blog/${
                                category?.slug
                              }/#BlogPosting"
                            }${index < categories.length - 1 ? "," : ""}
                          `
                          )
                          .join("")}
                      ]
                    },
                    "url": "https://efex.vn/en/blog/category/${
                      params.category
                    }", 
                    "isPartOf": { 
                      "@type": "WebPage",
                      "name": "EFEX Blog - The Ultimate Guide about Order Fulfillment",
                      "@id": "https://efex.vn/en/blog/#WebPage"
                    }
                  },
                  {
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                      // Home -> Blog -> Shipping
                      {
                        "@type": "ListItem",
                        "position": 1,
                        "item": {
                          "name": "Home",
                          "@id": "https://efex.vn/en"
                        }
                      },
                      {
                        "@type": "ListItem",
                        "position": 2,
                        "item": {
                          "name": "Blog",
                          "@id": "https://efex.vn/en/blog"
                        }
                      },
                      {
                        "@type": "ListItem",
                        "position": 3,
                        "item": {
                          "name": "${category}${lang?.meta?.category?.title}",
                          "@id": "https://efex.vn/en/blog/category/${
                            params.category
                          }"
                        }
                      }
                    ]
                  }
                ]
              }
      `,
            }}
          />
        )}
        {params.lang === "vi" && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `
              {
                "@context": "https://schema.org",
                "@graph": [
                  {
                    "@type": "CollectionPage",
                    "name": "${category}${lang?.meta?.category?.title}",
                    "headline": "${category}${lang?.meta?.category?.title}",
                    "about": {
                      "@type": "Organization",
                      "name": "EFEX",
                      "@id": "https://efex.vn/vi/#Organization"
                    },
                    "mainEntity": {
                      "@type": "ItemList",
                      "numberOfItems": "${categories.length}",
                      "itemListOrder": "http://schema.org/ItemListUnordered",
                      "itemListElement": [
                        ${categories
                          .map(
                            (category: any, index: number) => `
                            {
                              "@type": "BlogPosting",
                              "@id": "https://efex.vn/vi/blog/${
                                category?.slug
                              }/#BlogPosting"
                            }${index < categories.length - 1 ? "," : ""}
                          `
                          )
                          .join("")}
                      ]
                    },
                    "url": "https://efex.vn/vi/blog/category/${
                      params.category
                    }", 
                    "isPartOf": { 
                      "@type": "WebPage",
                      "name": "EFEX Blog - Thông Tin Mới Nhất Về Order Fulfillment",
                      "@id": "https://efex.vn/vi/blog/#WebPage"
                    }
                  },
                  {
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                    // Trang chủ -> Blog -> Dịch Vụ Fulfillment
                      {
                        "@type": "ListItem",
                        "position": 1,
                        "item": {
                          "name": "Trang chủ",
                          "@id": "https://efex.vn/vi"
                        }
                      },
                      {
                        "@type": "ListItem",
                        "position": 2,
                        "item": {
                          "name": "Blog",
                          "@id": "https://efex.vn/vi/blog"
                        }
                      },
                      {
                        "@type": "ListItem",
                        "position": 3,
                        "item": {
                          "name": "EFEX Blog - Thông Tin Mới Nhất Về Order Fulfillment",
                          "@id": "https://efex.vn/vi/blog/category/${
                            params.category
                          }"
                        }
                      }
                    ]
                  }
                ]
              }
      `,
            }}
          />
        )}
      </head>
      <CategoryComponent
        params={{
          category: params.category,
          lang: params.lang,
        }}
        lang={lang}
      />
      <FromVietNam lang={lang} />
    </>
  );
};
export default Category;
