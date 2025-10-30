import { Suspense } from "react";
import { getDictionary } from "@/app/getDictionary";
import { Metadata, ResolvingMetadata } from "next";
import Banner from "@/components/solutions/bonded-warehouse/Banner";
import OneStop from "@/components/solutions/bonded-warehouse/OneStop";
import WhatMake from "@/components/solutions/bonded-warehouse/WhatMake";
import WhatDo from "@/components/solutions/bonded-warehouse/WhatDo";
import OurGallery from "@/components/solutions/bonded-warehouse/OurGallery";
import Certificates from "@/components/solutions/bonded-warehouse/Certificates";
import OtherRelate from "@/components/solutions/bonded-warehouse/OtherRelate";
import RelatedArticle from "@/components/solutions/bonded-warehouse/RelatedArticles";
import Ready from "@/components/solutions/bonded-warehouse/Ready";
import FromVietNam from "@/components/commons/FromVietNam";

type Props = {
  params: { lang: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const lang = await getDictionary(params.lang ? params.lang : "en");
  const link =
    `https://efex.vn/${params.lang}/solutions/bonded-warehouse` as string;
  return {
    title: lang?.meta?.bonded?.title,
    description: lang?.meta?.bonded?.des,
    alternates: { canonical: link },
    robots: "index, follow",
    openGraph: {
      type: "website",
      url: link,
      title: lang?.meta?.bonded?.title,
      description: lang?.meta?.bonded?.des,
      siteName: "EFEX",
      images: [
        {
          url: "https://strapi-efex.ichiba.net/uploads/image_835_1_40836254e9.png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@EfexVietnam",
      creator: "@EfexVietnam",
      images:
        "https://strapi-efex.ichiba.net/uploads/image_835_1_40836254e9.png",
      title: lang?.meta?.bonded?.title,
      description: lang?.meta?.bonded?.des,
    },
  };
}

const AboutUs = async ({
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
                  "@type": "Service",
                  "serviceType": "Bonded Warehouse Service",
                  "provider": {
                    "@type": "Organization",
                    "name": "EFEX",
                    "@id": "https://efex.vn/en/#Organization"
                  },
                  "areaServed": {
                    "@type": "Place",
                    "name": "Worldwide"
                  },
                  "description": "Store your goods duty-free with EFEX's network of modern bonded warehouses in Vietnam. Convenient locations near airports/ports, ample secure storage to optimize your import/export supply chain.",
                  "offers": {
                    "@type": "Offer",
                    "priceCurrency": "USD",
                    "price": "Get a Quote",
                    "url": "https://efex.vn/en/contact-sales"
                  },
                  "isRelatedTo": [
                    {
                      "@type": "Service",
                      "name": "E-commerce Order Fulfillment Solution",
                      "url": "https://efex.vn/en/solutions/ecommerce-order-fulfillment"
                    },
                    {
                      "@type": "Service",
                      "name": "Cross-Border Shipping Solution",
                      "url": "https://efex.vn/en/solutions/cross-border-shipping"
                    },
                    {
                      "@type": "Service",
                      "name": "Custom Clearance Service",
                      "url": "https://efex.vn/en/solutions/custom-clearance"
                    },
                    {
                      "@type": "Service",
                      "name": "Sell in Vietnam Solution",
                      "url": "https://efex.vn/en/solutions/sell-in-vietnam"
                    },
                    {
                      "@type": "Service",
                      "name": "B2B & Retail Fulfillment Solution",
                      "url": "https://efex.vn/en/solutions/b2b-retail-fulfillment"
                    }
                  ],
                  "termsOfService": "https://support.efex.vn/en/",
                  "audience": {
                    "@type": "Audience",
                    "audienceType": [
                      "E-commerce businesses",
                      "SMEs",
                      "Distribution Suppliers",
                      "B2B"
                    ]
                  },
                  "sameAs": [
                    "https://www.facebook.com/efex.asia",
                    "https://www.linkedin.com/company/efexfulfillment/",
                    "https://www.youtube.com/@efex.fulfillment",
                    "https://twitter.com/EfexVietnam",
                    "https://www.tiktok.com/@efex.fulfillment"
                  ]
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
                        "name": "Bonded Warehouse Service in Vietnam | EFEX",
                        "@id": "https://efex.vn/en/solutions/bonded-warehouse"
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
                    "@type": "Service",
                    "serviceType": "Thuê kho ngoại quan",
                    "provider": {
                      "@type": "Organization",
                      "name": "EFEX",
                      "@id": "https://efex.vn/vi/#Organization"
                    },
                    "areaServed": {
                      "@type": "Place",
                      "name": "Toàn cầu"
                    },
                    "description": "Tiết kiệm chi phí thuê kho hay quản trị vận hành khi xuất nhập khẩu với dịch vụ thuê kho ngoại quan EFEX. Cam kết diện tích rộng rãi phù hợp với mọi mặt hàng. Kiểm soát chặt chẽ hàng hóa an toàn 24/7.",
                    "offers": {
                      "@type": "Offer",
                      "priceCurrency": "VND",
                      "price": "Liên hệ",
                      "url": "https://efex.vn/vi/contact-sales"
                    },
                    "isRelatedTo": [
                      {
                        "@type": "Service",
                        "name": "Dịch vụ fulfillment thương mại điện tử",
                        "url": "https://efex.vn/vi/solutions/ecommerce-order-fulfillment"
                      },
                      {
                        "@type": "Service",
                        "name": "Vận chuyển xuyên biên giới",
                        "url": "https://efex.vn/vi/solutions/cross-border-shipping"
                      },
                      {
                        "@type": "Service",
                        "name": "Khai thuê hải quan",
                        "url": "https://efex.vn/vi/solutions/custom-clearance"
                      },
                      {
                        "@type": "Service",
                        "name": "Bán hàng xuyên biên giới",
                        "url": "https://efex.vn/vi/solutions/sell-globally"
                      },
                      {
                        "@type": "Service",
                        "name": "Fulfillment B2B và bán lẻ",
                        "url": "https://efex.vn/vi/solutions/b2b-retail-fulfillment"
                      }
                    ],
                    "termsOfService": "https://support.efex.vn/vi/",
                    "audience": {
                      "@type": "Audience",
                      "audienceType": [
                        "Doanh nghiệp thương mại điện tử",
                        "Doanh nghiệp vừa và nhỏ SMEs",
                        "Nhà cung cấp, phân phối"
                      ]
                    },
                    "sameAs": [
                      "https://www.facebook.com/efex.asia",
                      "https://www.linkedin.com/company/efexfulfillment/",
                      "https://www.youtube.com/@efex.fulfillment",
                      "https://twitter.com/EfexVietnam",
                      "https://www.tiktok.com/@efex.fulfillment"
                    ]
                  },
                  {
                    "@type": "BreadcrumbList",
                    "itemListElement": [
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
                          "name": "Dịch Vụ Thuê Kho Ngoại Quan Khắp Việt Nam | EFEX",
                          "@id": "https://efex.vn/vi/solutions/bonded-warehouse"
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
      <Banner params={params} />
      <OneStop params={params} lang={lang} />
      <WhatMake params={params} lang={lang} />
      <WhatDo params={params} lang={lang.bonded.whatDo} />
      <OurGallery lang={lang.bonded.ourGallery} />
      <Certificates lang={lang.bonded.certificates} />
      <OtherRelate lang={lang.bonded.otherRelated} />
      <RelatedArticle params={params} lang={lang.bonded.relatedArticles} />
      <Ready lang={lang.bonded.ready} locale={params.lang} />
      <FromVietNam lang={lang} />
    </Suspense>
  );
};

export default AboutUs;
