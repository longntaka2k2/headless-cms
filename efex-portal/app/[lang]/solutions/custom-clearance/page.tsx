import { getDictionary } from "@/app/getDictionary";
import Capabilities from "@/components/solutions/customClearance/Capabilities";
import Banner from "@/components/solutions/customClearance/Banner";
import ClearanceProcess from "@/components/solutions/customClearance/Process";
import Quote from "@/components/solutions/customClearance/Quote";
import RelatedArticle from "@/components/solutions/customClearance/RelatedArticles";
import WhyEfex from "@/components/solutions/customClearance/WhyEfex";
import { PageProps } from "@/types";
import { Metadata, ResolvingMetadata } from "next";
import WeDoNot from "@/components/solutions/customClearance/WeDoNot";
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
    `https://efex.vn/${params.lang}/solutions/custom-clearance` as string;
  return {
    title: lang?.meta?.custom?.title,
    description: lang?.meta?.custom?.des,
    alternates: { canonical: link },
    robots: "index, follow",
    openGraph: {
      type: "website",
      url: link,
      title: lang?.meta?.custom?.title,
      description: lang?.meta?.custom?.des,
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
      title: lang?.meta?.cross?.title,
      description: lang?.meta?.cross?.des,
    },
  };
}
const CustomeClearance = async ({ params, searchParams }: PageProps) => {
  const lang = await getDictionary(params?.lang ? params?.lang : "en");

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
                  "@type": "Service",
                  "serviceType": "Custom Clearance Service",
                  "provider": {
                    "@type": "Organization",
                    "name": "EFEX",
                    "@id": "https://efex.vn/en/#Organization"
                  },
                  "areaServed": {
                    "@type": "Place",
                    "name": "Worldwide"
                  },
                  "description": "Want to scale business to the potential Vietnamese market? EFEX can effectively help everything from registering a business, promoting the brand, logistics matters, and managing after-sales",
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
                      "name": "Bonded Warehouse Service",
                      "url": "https://efex.vn/en/solutions/bonded-warehouse"
                    },
                    {
                      "@type": "Service",
                      "name": "Cross-Border Shipping Solution",
                      "url": "https://efex.vn/en/solutions/cross-border-shipping"
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
                        "name": "Sell in Vietnam with EFEX | Build your business from A to Z",
                        "@id": "https://efex.vn/en/solutions/sell-in-vietnam"
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
                  "serviceType": "Khai thuê hải quan",
                  "provider": {
                    "@type": "Organization",
                    "name": "EFEX",
                    "@id": "https://efex.vn/vi/#Organization"
                  },
                  "areaServed": {
                    "@type": "Place",
                    "name": "Toàn cầu"
                  },
                  "description": "Giải pháp hỗ trợ kinh doanh đa kênh từ đăng ký, xây dựng doanh nghiệp, giải pháp Marketing, hoàn tất đơn hàng đến quản lý chăm sóc khách hàng. EFEX đều có thể hỗ trợ!",
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
                      "name": "Thuê kho ngoại quan",
                      "url": "https://efex.vn/vi/solutions/bonded-warehouse"
                    },
                    {
                      "@type": "Service",
                      "name": "Vận chuyển xuyên biên giới",
                      "url": "https://efex.vn/vi/solutions/cross-border-shipping"
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
                        "name": "Giải Pháp Hỗ Trợ Kinh Doanh Đa Kênh",
                        "@id": "https://efex.vn/vi/solutions/sell-in-vietnam"
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
      <Banner lang={lang.customClearance.banner} params={params} />
      <ClearanceProcess lang={lang.customClearance.process} params={params} />
      <WhyEfex lang={lang.customClearance.whyEfex} params={params} />
      <WeDoNot lang={lang.customClearance.wedo} />
      <Capabilities lang={lang.customClearance.capabilities} />
      <RelatedArticle lang={lang.customClearance.relateArticle} />
      <Quote lang={lang.customClearance} />
      <FromVietNam lang={lang} />
    </>
  );
};

export default CustomeClearance;
