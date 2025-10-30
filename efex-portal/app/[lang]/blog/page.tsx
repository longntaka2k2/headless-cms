import { Metadata, ResolvingMetadata } from "next";

import BlogComponent from "@/components/blog/Blog";
import { getDictionary } from "@/app/getDictionary";

interface Props {
  params: { lang: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const lang = await getDictionary(params.lang ? params.lang : "en");
  const link = `https://efex.vn/${params.lang}/blog` as string;

  return {
    title: lang?.meta?.blog?.title,
    description: lang?.meta?.blog?.des,
    alternates: { canonical: link },
    openGraph: {
      type: "website",
      url: link,
      title: lang?.meta?.blog?.title,
      description: lang?.meta?.blog?.des,
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
      title: lang?.meta?.blog?.title,
      description: lang?.meta?.blog?.des,
    },
  };
}

const Blog = ({ params, searchParams }: Props) => {
  return (
    <>
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
                    "@type": ["WebPage", "CollectionPage"],
                    "name": "EFEX Blog - The Ultimate Guide about Order Fulfillment",
                    "@id": "https://efex.vn/en/blog/#WebPage",
                    "description": "EFEX blog gives you free articles, tips, information, and inspiration on e-commerce fulfillment and logistics.",
                    "url": "https://efex.vn/en/blog",
                    "isPartOf": {
                      "@type": "WebSite",
                      "name": "EFEX",
                      "@id": "https://efex.vn/en/#WebSite"
                    }
                  },
                  {
                    "@type": "BreadcrumbList",
                    "itemListElement": [
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
                          "name": "EFEX Blog - The Ultimate Guide about Order Fulfillment",
                          "@id": "https://efex.vn/en/blog"
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
                    "@type": ["WebPage", "CollectionPage"],
                    "name": "EFEX Blog - Thông Tin Mới Nhất Về Order Fulfillment",
                    "@id": "https://efex.vn/vi/blog/#WebPage",
                    "description": "EFEX blog mang đến các bài viết, tips, và các thông tin hữu ích về hoàn tất đơn hàng thương mại điện tử (ecommerce fulfillment) và logistics.",
                    "url": "https://efex.vn/vi/blog",
                    "isPartOf": {
                      "@type": "WebSite",
                      "name": "EFEX",
                      "@id": "https://efex.vn/vi/#WebSite"
                    }
                  },
                  {
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                    // Trang chủ -> Blog
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
      <BlogComponent
        params={{
          lang: params.lang,
        }}
      />
    </>
  );
};
export default Blog;
