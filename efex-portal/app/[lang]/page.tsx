import { Suspense } from "react";
import dynamic from "next/dynamic";
import { getDictionary } from "../getDictionary";
import { Metadata, ResolvingMetadata } from "next";

const BestEnd = dynamic(() => import("@/components/home/BestEndToEnd"));
const WhatIsFulfillment = dynamic(
  () => import("@/components/home/WhatIsFulfillment")
);
const HowWorks = dynamic(() => import("@/components/home/HowWorks"));
const CutCost = dynamic(() => import("@/components/home/CutCost"));
const WhyChooseEfex = dynamic(() => import("@/components/home/WhyChooseEfex"));
const Save = dynamic(() => import("@/components/home/Save"));
const WhatWeDo = dynamic(() => import("@/components/home/what-we-do/index"));
const WeAreCPN = dynamic(() => import("@/components/home/we-are/index"));

const OutPartner = dynamic(() => import("@/components/home/OutPartner"));
const CustomerStories = dynamic(
  () => import("@/components/home/CustomerStories")
);
const LastestNews = dynamic(() => import("@/components/home/LastestNews"));
const Looking = dynamic(() => import("@/components/home/Looking"));
const FromVietNam = dynamic(() => import("@/components/commons/FromVietNam"));

type Props = {
  params: { lang: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const lang = await getDictionary(params.lang ? params.lang : "en");
  const link = `https://efex.vn/${params.lang}` as string;
  return {
    title: lang?.meta?.home?.title,
    description: lang?.meta?.home?.des,
    alternates: { canonical: link },
    openGraph: {
      type: "website",
      url: link,
      title: lang?.meta?.home?.title,
      description: lang?.meta?.home?.des,
      siteName: "EFEX",
      images: [
        {
          url: "https://strapi-efex.ichiba.net/uploads/60_1_552ed1e5fc.png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@EfexVietnam",
      creator: "@EfexVietnam",
      images: "https://strapi-efex.ichiba.net/uploads/60_1_552ed1e5fc.png",
      title: lang?.meta?.home?.title,
      description: lang?.meta?.home?.des,
    },
  };
}

const Home = async ({
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
                  "@graph": 
                  [
                    {
                    "@type": "Organization",
                    "name": "EFEX",
                    "@id": "https://efex.vn/en/#Organization",
                    "description": "EFEX: Best end-to-end order fulfillment solution. Optimize warehousing, shipping, and order processing with advanced tech. Boost efficiency, cut costs.",
                    "disambiguatingDescription": "EFEX: Best end-to-end order fulfillment solution. Optimize warehousing, shipping, and order processing with advanced tech. Boost efficiency, cut costs.",
                    "vatID": "0108746033",
                    "url": "https://efex.vn/en",
                    "sameAs": ["https://www.facebook.com/efex.asia", "https://www.linkedin.com/company/efexfulfillment/", "https://www.youtube.com/@efex.fulfillment", "https://twitter.com/EfexVietnam", "https://www.tiktok.com/@efex.fulfillment"],
                    "logo": {
                      "@type": "ImageObject",
                      "@id": "https://efex.vn/en/#logo",
                      "url": "https://efex.vn/_next/static/media/logoPC.06cb50c1.svg",
                      "width": 227,
                      "height": 40,
                      "caption": "Logo EFEX"
                    },
                    "image": {
                      "@id": "https://efex.vn/en/#logo"
                    },
                    "location": {
                      "@type": "Place",
                      "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "1606 Audrey Dr, Garland, TX 75040, USA",
                        "addressLocality": "Audrey Dr",
                        "addressRegion": "Texas",
                        "postalCode": "12000",
                        "addressCountry": "USA"
                      }
                    },
                    "foundingDate": "2021",
                    "contactPoint": {
                      "@type": "ContactPoint",
                      "email": "admin@efex.asia",
                      "contactType": "customer service",
                      "contactOption": "TollFree"
                    }
                    }, 
                    {
                    "@type": "WebSite",
                    "name": "EFEX",
                    "@id": "https://efex.vn/en/#WebSite",
                    "alternateName": ["EFEX ASIA", "EFEX ASIA LOGISTICS SERVICE JOINT STOCK COMPANY"],
                    "url": "https://efex.vn/en",
                    "description": "EFEX: Best end-to-end order fulfillment solution. Optimize warehousing, shipping, and order processing with advanced tech. Boost efficiency, cut costs.",
                    "keywords": ["order fulfillment service", "fulfillment service", "cross-border shipping", "sell in vietnam", "end-to-end order fulfillment solution", "all-in-one ecommerce order fulfillment solution", "best cross border shipping service"],
                    "disambiguatingDescription": "EFEX: Best end-to-end order fulfillment solution. Optimize warehousing, shipping, and order processing with advanced tech. Boost efficiency, cut costs.",
                    "sameAs": ["https://www.facebook.com/efex.asia", "https://www.linkedin.com/company/efexfulfillment/", "https://www.youtube.com/@efex.fulfillment", "https://twitter.com/EfexVietnam", "https://www.tiktok.com/@efex.fulfillment"]
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
                "@graph": 
                [
                  {
                  "@type": "Organization",
                  "name": "EFEX",
                  "@id": "https://efex.vn/vi/#Organization",
                  "description": "EFEX-Ecommerce Fulfillment & Express cung cấp dịch vụ hoàn thiện đơn hàng, thuê kho Fulfillment và vận chuyển để hợp lý hóa, gia tăng hiệu quả kinh doanh và gia tăng sự hài lòng của khách hàng.",
                  "disambiguatingDescription": "EFEX-Ecommerce Fulfillment & Express cung cấp dịch vụ hoàn thiện đơn hàng, thuê kho Fulfillment và vận chuyển để hợp lý hóa, gia tăng hiệu quả kinh doanh và gia tăng sự hài lòng của khách hàng.",
                  "vatID": "0108746033",
                  "url": "https://efex.vn/vi",
                  "sameAs": ["https://www.facebook.com/efex.asia", "https://www.linkedin.com/company/efexfulfillment/", "https://www.youtube.com/@efex.fulfillment", "https://twitter.com/EfexVietnam", "https://www.tiktok.com/@efex.fulfillment"],
                  "logo": {
                    "@type": "ImageObject",
                    "@id": "https://efex.vn/vi/#logo",
                    "url": "https://efex.vn/_next/static/media/logoPC.06cb50c1.svg",
                    "width": 227,
                    "height": 40,
                    "caption": "Logo EFEX"
                  },
                  "image": {
                    "@id": "https://efex.vn/vi/#logo"
                  },
                  "location": {
                    "@type": "Place",
                    "address": {
                      "@type": "PostalAddress",
                      "streetAddress": "Tầng 5, The Nine Tower, số 9 Phạm Văn Đồng, Cầu Giấy, Hà Nội",
                      "addressLocality": "Phạm Văn Đồng",
                      "addressRegion": "Hà Nội",
                      "postalCode": "12000",
                      "addressCountry": "Việt Nam"
                    }
                  },
                  "foundingDate": "2021",
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "email": "admin@efex.asia",
                    "contactType": "customer service",
                    "contactOption": "TollFree"
                  }
                  }, 
                  {
                  "@type": "WebSite",
                  "name": "EFEX",
                  "@id": "https://efex.vn/vi/#WebSite",
                  "alternateName": ["EFEX ASIA", "Công ty cổ phần dịch vụ hậu cần EFEX Asia"],
                  "url": "https://efex.vn/vi",
                  "description": "EFEX-Ecommerce Fulfillment & Express cung cấp dịch vụ hoàn thiện đơn hàng, thuê kho Fulfillment và vận chuyển để hợp lý hóa, gia tăng hiệu quả kinh doanh và gia tăng sự hài lòng của khách hàng.",
                  "keywords": ["dịch vụ order fulfillment", "dịch vụ fulfillment", "dịch vụ hoàn tất đơn hàng", "giải pháp fulfillment", "bán hàng xuyên biên giới", "vận chuyển xuyên biên giới", "fulfillment xuyên biên giới"],
                  "disambiguatingDescription": "EFEX-Ecommerce Fulfillment & Express cung cấp dịch vụ hoàn thiện đơn hàng, thuê kho Fulfillment và vận chuyển để hợp lý hóa, gia tăng hiệu quả kinh doanh và gia tăng sự hài lòng của khách hàng.",
                  "sameAs": ["https://www.facebook.com/efex.asia", "https://www.linkedin.com/company/efexfulfillment/", "https://www.youtube.com/@efex.fulfillment", "https://twitter.com/EfexVietnam", "https://www.tiktok.com/@efex.fulfillment"]
                  }
                ]
              }
    `,
            }}
          />
        )}
      </head>

      <div className="overflow-hidden">
        <BestEnd lang={lang} />
        <WhatIsFulfillment lang={lang} />
        <CutCost lang={lang} />
        <HowWorks lang={lang} />
        <WhatWeDo lang={lang} />
        <WhyChooseEfex lang={lang} />
        <Save lang={lang} />
        <WeAreCPN lang={lang} />
        <OutPartner lang={lang} />
        <CustomerStories lang={lang} />
        <LastestNews
          params={{
            lang: params.lang,
          }}
        />
        <Looking lang={lang} />
        <FromVietNam lang={lang} />
      </div>
    </Suspense>
  );
};

export default Home;
