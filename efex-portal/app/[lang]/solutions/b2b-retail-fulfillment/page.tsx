import { getDictionary } from "@/app/getDictionary";
import { Metadata, ResolvingMetadata } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Hero = dynamic(() => import("@/components/solutions/b2b/Hero"));
const DiscoverWhy = dynamic(
  () => import("@/components/solutions/b2b/DiscoverWhy")
);
const B2bRetailFulfillmentProcess = dynamic(
  () => import("@/components/solutions/b2b/B2bRetailFulfillmentProcess")
);
const EvolveWithEfex = dynamic(
  () => import("@/components/solutions/b2b/EvolveWithEfex")
);
const MaximizeProfit = dynamic(
  () => import("@/components/solutions/b2b/MaximizeProfit")
);
const Capabilities = dynamic(
  () => import("@/components/solutions/b2b/Capabilities")
);
const UltimateGuide = dynamic(
  () => import("@/components/solutions/b2b/UltimateGuide")
);
const Consultation = dynamic(
  () => import("@/components/solutions/b2b/Consultation")
);
const RelatedResource = dynamic(
  () => import("@/components/solutions/b2b/RelatedResource")
);
const FromVietNam = dynamic(
  () => import("@/components/commons/FromVietNam")
);
const PopupModal = dynamic(
  () => import("@/components/commons/PopupModal")
);
type Props = {
  params: { lang: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const lang = await getDictionary(params.lang ?? "en");
  const link = `https://efex.vn/${params.lang}/solutions/b2b-retail-fulfillment`;
  return {
    title: lang?.meta?.b2b?.title,
    description: lang?.meta?.b2b?.des,
    alternates: { canonical: link },
    robots: "index, follow",
    openGraph: {
      type: "website",
      url: link,
      title: lang?.meta?.b2b?.title,
      description: lang?.meta?.b2b?.des,
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
      title: lang?.meta?.b2b?.title,
      description: lang?.meta?.b2b?.des,
    },
  };
}

const B2bRetailFulfillment = async ({
  params,
}: {
  params: {
    lang: string;
    slug: string;
  };
}) => {
  const { b2bRetailFulfillment: lang } = await getDictionary(
    params.lang ? params.lang : "en"
  );
  const language = await getDictionary(params.lang ? params.lang : "en");
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
                  "serviceType": "B2B & Retail Fulfillment Solution",
                  "provider": {
                    "@type": "Organization",
                    "name": "EFEX",
                    "@id": "https://efex.vn/en#Organization"
                  },
                  "areaServed": {
                    "@type": "Place",
                    "name": "Worldwide"
                  },
                  "description": "Optimize your supply chain with our B2B & Retail Fulfillment solution. Enjoy significant cost savings, rapid order processing, and a 100% commitment to service level agreements.",
                  "offers": {
                    "@type": "Offer",
                    "priceCurrency": "USD",
                    "price": "Get a Quote",
                    "url": "https://efex.vn/en/contact-sales"
                  },
                  "isSimilarTo": [
                    {
                      "@type": "Service",
                      "name": "E-commerce Order Fulfillment Solution",
                      "url": "https://efex.vn/en/solutions/ecommerce-order-fulfillment"
                    }
                  ],
                  "isRelatedTo": [
                    {
                      "@type": "Service",
                      "name": "Cross-Border Shipping Solution",
                      "url": "https://efex.vn/en/solutions/cross-border-shipping"
                    },
                    {
                      "@type": "Service",
                      "name": "Bonded Warehouse Service",
                      "url": "https://efex.vn/en/solutions/bonded-warehouse"
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
                    }
                  ],
                  "termsOfService": "https://support.efex.vn/en/",
                  "audience": {
                    "@type": "Audience",
                    "audienceType": [
                      "E-commerce businesses",
                      "B2B",
                      "Distribution Suppliers"
                    ]
                  },
                  "availableChannel": [
                    {
                      "@type": "ServiceChannel",
                      "serviceLocation": "No. 8 Le Quang Dao, Phu Do Ward, Nam Tu Liem District, Hanoi, Vietnam",
                      "serviceUrl": "https://efex.vn/en/solutions/b2b-retail-fulfillment"
                    },
                    {
                      "@type": "ServiceChannel",
                      "serviceLocation": "11460-11462 Pagemill Rd, Dallas, TX 75243 TEXAS",
                      "serviceUrl": "https://efex.vn/en/solutions/b2b-retail-fulfillment"
                    },
                    {
                      "@type": "ServiceChannel",
                      "serviceLocation": "10832 Capital Ave Unit 5A, Garden Grove, CA 92843 CALIFORNIA",
                      "serviceUrl": "https://efex.vn/en/solutions/b2b-retail-fulfillment"
                    },
                    {
                      "@type": "ServiceChannel",
                      "serviceLocation": "5839 W Montrose Ave, Chicago, IL, 60634 ILLINOIS",
                      "serviceUrl": "https://efex.vn/en/solutions/b2b-retail-fulfillment"
                    },
                    {
                      "@type": "ServiceChannel",
                      "serviceLocation": "〒136-0075 Tokyo, Koto, Shinsuna, 3 Chome−10−8, 1F Warehouse 3",
                      "serviceUrl": "https://efex.vn/en/solutions/b2b-retail-fulfillment"
                    }
                  ],
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
                        "name": "EFEX: Leading B2B & Retail Fulfillment Solution in Vietnam",
                        "@id": "https://efex.vn/en/solutions/b2b-retail-fulfillment"
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
                  "serviceType": "Fulfillment B2B và bán lẻ",
                  "provider": {
                    "@type": "Organization",
                    "name": "EFEX",
                    "@id": "https://efex.vn/vi/#Organization"
                  },
                  "areaServed": {
                    "@type": "Place",
                    "name": "Toàn cầu"
                  },
                  "description": "Giúp doanh nghiệp & nhà bán lẻ hợp lý hóa hoạt động và cắt giảm chi phí vận hành tới 70%. Xử lý số lượng đơn hàng lớn với tốc độ nhanh như chớp. Cam kết đạt 100% SLA ở mọi bước.",
                  "offers": {
                    "@type": "Offer",
                    "priceCurrency": "VND",
                    "price": "Liên hệ",
                    "url": "https://efex.vn/vi/contact-sales"
                  },
                  "isSimilarTo": [
                    {
                      "@type": "Service",
                      "name": "Dịch vụ fulfillment thương mại điện tử",
                      "url": "https://efex.vn/vi/solutions/ecommerce-order-fulfillment"
                    }
                  ],
                  "isRelatedTo": [
                    {
                      "@type": "Service",
                      "name": "Vận chuyển xuyên biên giới",
                      "url": "https://efex.vn/vi/solutions/cross-border-shipping"
                    },
                    {
                      "@type": "Service",
                      "name": "Thuê kho ngoại quan",
                      "url": "https://efex.vn/vi/solutions/bonded-warehouse"
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
                  "availableChannel": [
                    {
                      "@type": "ServiceChannel",
                      "serviceLocation": "Số 8 Lê Quang Đạo, Phường Phú Đô, Quận Nam Từ Liêm",
                      "serviceUrl": "https://efex.vn/vi/solutions/b2b-retail-fulfillment"
                    },
                    {
                      "@type": "ServiceChannel",
                      "serviceLocation": "11460-11462 Pagemill Rd, Dallas, TX 75243 TEXAS",
                      "serviceUrl": "https://efex.vn/vi/solutions/b2b-retail-fulfillment"
                    },
                    {
                      "@type": "ServiceChannel",
                      "serviceLocation": "10832 Capital Ave Unit 5A, Garden Grove, CA 92843 CALIFORNIA",
                      "serviceUrl": "https://efex.vn/vi/solutions/b2b-retail-fulfillment"
                    },
                    {
                      "@type": "ServiceChannel",
                      "serviceLocation": "5839 W Montrose Ave, Chicago, IL, 60634 ILLINOIS",
                      "serviceUrl": "https://efex.vn/vi/solutions/b2b-retail-fulfillment"
                    },
                    {
                      "@type": "ServiceChannel",
                      "serviceLocation": "〒136-0075 Tokyo, Koto, Shinsuna, 3 CTrang chủ−10−8, 1F Warehouse 3",
                      "serviceUrl": "https://efex.vn/vi/solutions/b2b-retail-fulfillment"
                    }
                  ],
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
                        "name": "EFEX: Giải pháp Fulfillment B2B & Bán lẻ hàng đầu Việt Nam",
                        "@id": "https://efex.vn/vi/solutions/b2b-retail-fulfillment"
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
      <Hero lang={lang} locale={params.lang} />
      <DiscoverWhy lang={lang} />
      <B2bRetailFulfillmentProcess lang={lang} />
      <EvolveWithEfex lang={lang} />
      <MaximizeProfit lang={lang} />
      <Capabilities lang={lang} />
      <UltimateGuide lang={lang} />
      <Consultation lang={lang} locale={params.lang} />
      <RelatedResource lang={lang} />
      <PopupModal />
      <FromVietNam lang={language} />
    </Suspense>
  );
};

export default B2bRetailFulfillment;
