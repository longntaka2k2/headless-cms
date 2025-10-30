import { Suspense } from "react";
import { getDictionary } from "@/app/getDictionary";
import { Metadata, ResolvingMetadata } from "next";
import Banner from "@/components/sellInVietNam/Banner";
import New from "@/components/sellInVietNam/ANew";
import ECom from "@/components/sellInVietNam/ECom";
import CountLess from "@/components/sellInVietNam/CountLess";
import WhatWeDo from "@/components/sellInVietNam/WhatWeDo";
import Integration from "@/components/sellInVietNam/Integration";
import HowTo from "@/components/sellInVietNam/HowTo";
import Resource from "@/components/sellInVietNam/Resource";
import Quote from "@/components/sellInVietNam/Quote";
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
    `https://efex.vn/${params.lang}/solutions/sell-in-vietnam` as string;
  return {
    title: lang?.meta?.sell?.title,
    description: lang?.meta?.sell?.des,
    alternates: { canonical: link },
    robots: "index, follow",
    openGraph: {
      type: "website",
      url: link,
      title: lang?.meta?.sell?.title,
      description: lang?.meta?.sell?.des,
      siteName: "EFEX",
      images: [
        {
          url: "https://strapi-efex.ichiba.net/uploads/image_835_34764390d8.png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@EfexVietnam",
      creator: "@EfexVietnam",
      images: "https://strapi-efex.ichiba.net/uploads/image_835_34764390d8.png",
      title: lang?.meta?.sell?.title,
      description: lang?.meta?.sell?.des,
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
                  "@type": "Service",
                  "serviceType": "Sell in Vietnam Solution",
                  "provider": {
                    "@type": "Organization",
                    "name": "EFEX",
                    "@id": "https://efex.vn/en/#Organization"
                  },
                  "areaServed": {
                    "@type": "Place",
                    "name": "Vietnam"
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
                      "name": "E-commerce Order Fulfillment Solution",
                      "url": "https://efex.vn/en/solutions/ecommerce-order-fulfillment"
                    },
                    {
                      "@type": "Service",
                      "name": "Sell Globally Solution",
                      "url": "https://efex.vn/en/solutions/sell-globally"
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
                  "availableChannel": [
                    {
                      "@type": "ServiceChannel",
                      "serviceLocation": "No. 8 Le Quang Dao, Phu Do Ward, Nam Tu Liem District, Hanoi, Vietnam",
                      "serviceUrl": "https://efex.vn/en/solutions/ecommerce-order-fulfillment"
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
                  "serviceType": "Bán hàng tại Việt Nam",
                  "provider": {
                    "@type": "Organization",
                    "name": "EFEX",
                    "@id": "https://efex.vn/vi/#Organization"
                  },
                  "areaServed": {
                    "@type": "Place",
                    "name": "Việt Nam"
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
                      "name": "Dịch vụ fulfillment thương mại điện tử",
                      "url": "https://efex.vn/vi/solutions/ecommerce-order-fulfillment"
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
                      "serviceLocation": "Số 8 Lê Quang Đạo, Phường Phú Đô, Quận Nam Từ Liêm, Hà Nội",
                      "serviceUrl": "https://efex.vn/vi/solutions/ecommerce-order-fulfillment"
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
      <Banner lang={lang.sellInVietNam} locale={params.lang} />
      <New lang={lang.sellInVietNam} locale={params.lang} />
      <ECom lang={lang.sellInVietNam} />
      <CountLess lang={lang.sellInVietNam.countless} />
      <WhatWeDo lang={lang.sellInVietNam.whatwedo} params={params} />
      <Integration lang={lang.sellInVietNam.integration} />
      <HowTo lang={lang.sellInVietNam.hearHow} />
      <Resource lang={lang.sellInVietNam.resource} />
      <Quote lang={lang.sellInVietNam.ready} />
      <FromVietNam lang={lang} />
    </Suspense>
  );
};

export default Start;
