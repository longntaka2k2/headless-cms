import { Suspense, lazy, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { getDictionary } from "@/app/getDictionary";
import { Metadata, ResolvingMetadata } from "next";
import Banner from "@/components/start/Banner";
import Guideline from "@/components/start/Guideline/page";
import OnAverage from "@/components/start/OnAverage";
import TheUltimateOrder from "@/components/start/TheUntilmateOrder/page";
import CustomerStore from "@/components/start/CustomerStorie";
import Leave from "@/components/start/Leave";
import FromVietNam from "@/components/commons/FromVietNam";

type Props = {
  params: { lang: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const lang = await getDictionary(params.lang ? params.lang : "vi");
  const link = `https://efex.vn/${params.lang}/start` as string;
  return {
    title: lang?.meta?.start?.title,
    description: lang?.meta?.start?.des,
    alternates: { canonical: link },
    robots: "index, follow",
    openGraph: {
      type: "website",
      url: link,
      title: lang?.meta?.start?.title,
      description: lang?.meta?.start?.des,
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
      title: lang?.meta?.start?.title,
      description: lang?.meta?.start?.des,
    },
  };
}

const Start = async ({
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
                  "@type": "WebPage",
                  "name": "A Full Guideline for Starters | Fulfillment by EFEX",
                  "description": "Optimize order fulfillment and expand reach with tips and guides for multi-channel, ecommerce and cross-border fulfillment today with EFEX.",
                  "url": "https://efex.vn/en/start",
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
                        "name": "A Full Guideline for Starters | Fulfillment by EFEX",
                        "@id": "https://efex.vn/en/start"
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
                  "@type": "WebPage",
                  "name": "EFEX: Hướng dẫn Order Fulfillment chi tiết cho các nhà bán hàng",
                  "description": "Tối ưu hóa việc hoàn thiện đơn hàng và mở rộng phạm vi tiếp cận với các mẹo và hướng dẫn Fulfillment đa kênh hay thương mại điện tử cực kỳ chi tiết ngay hôm nay.",
                  "url": "https://efex.vn/vi/start",
                  "isPartOf": {
                    "@type": "WebSite",
                    "name": "EFEX",
                    "@id": "https://efex.vn/vi/#WebSite"
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
                        "@id": "https://efex.vn/vi"
                      }
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "item": {
                        "name": "EFEX: Hướng dẫn Order Fulfillment chi tiết cho các nhà bán hàng",
                        "@id": "https://efex.vn/vi/start"
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
      <Banner lang={lang?.start?.banner} />
      <Guideline lang={lang?.start?.aFull} params={params.lang} />
      <OnAverage lang={lang?.onAverage} />
      <TheUltimateOrder lang={lang?.theUltimate} />
      <CustomerStore lang={lang?.start?.customerStories} />
      <Leave lang={lang?.start?.leave} />
      <FromVietNam lang={lang} />
    </Suspense>
  );
};

export default Start;
