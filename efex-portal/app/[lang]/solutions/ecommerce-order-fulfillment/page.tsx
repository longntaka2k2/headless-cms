import { getDictionary } from "@/app/getDictionary";
import { Metadata, ResolvingMetadata } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Hero = dynamic(
  () => import("@/components/solutions/ecommerce-order-fulfillment/Hero")
);
const RevenueStory = dynamic(
  () =>
    import("@/components/solutions/ecommerce-order-fulfillment/RevenueStory")
);
const MultiChannel = dynamic(
  () =>
    import("@/components/solutions/ecommerce-order-fulfillment/MultiChannel")
);
const FulfillmentDifference = dynamic(
  () =>
    import(
      "@/components/solutions/ecommerce-order-fulfillment/FulfillmentDifference"
    )
);
const FBEInventoryManagement = dynamic(
  () =>
    import(
      "@/components/solutions/ecommerce-order-fulfillment/FBEInventoryManagement"
    )
);
const OptimizeOrder = dynamic(
  () =>
    import("@/components/solutions/ecommerce-order-fulfillment/OptimizeOrder")
);
const PackingStrategy = dynamic(
  () =>
    import("@/components/solutions/ecommerce-order-fulfillment/PackingStrategy")
);
const ShipStrategically = dynamic(
  () =>
    import(
      "@/components/solutions/ecommerce-order-fulfillment/ShipStrategically"
    )
);
const Partnership = dynamic(
  () => import("@/components/solutions/ecommerce-order-fulfillment/Partnership")
);
const OurCustomers = dynamic(
  () =>
    import("@/components/solutions/ecommerce-order-fulfillment/OurCustomers")
);
const MoreThan = dynamic(
  () => import("@/components/solutions/ecommerce-order-fulfillment/MoreThan")
);
const FrequentlyQuestions = dynamic(
  () =>
    import(
      "@/components/solutions/ecommerce-order-fulfillment/FrequentlyQuestions"
    )
);
const Promises = dynamic(
  () => import("@/components/solutions/ecommerce-order-fulfillment/Promises")
);

const FromVietNam = dynamic(() => import("@/components/commons/FromVietNam"));

const PopupModal = dynamic(() => import("@/components/commons/PopupModal"));

type Props = {
  params: { lang: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const lang = await getDictionary(params.lang ? params.lang : "en");
  const link = `https://efex.vn/${params.lang}/solutions/ecommerce-order-fulfillment`;
  return {
    title: lang?.meta?.ecomm?.title,
    description: lang?.meta?.ecomm?.des,
    alternates: { canonical: link },
    openGraph: {
      type: "website",
      url: link,
      title: lang?.meta?.ecomm?.title,
      description: lang?.meta?.ecomm?.des,
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
      title: lang?.meta?.ecomm?.title,
      description: lang?.meta?.ecomm?.des,
    },
  };
}

const EcommerceOrderFulfillment = async ({
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
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '452204876853625');
              fbq('track', 'PageView');
              fbq('track', 'Ecomfulfillment_PageView_VI');
  `,
          }}
        />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<img
            height="1"
            width="1"
            style="display:none"
            src="https://www.facebook.com/tr?id=452204876853625&ev=PageView&noscript=1"
          />`,
          }}
        />

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
                    "serviceType": "All-in-one ecommerce order fulfillment solution",
                    "provider": {
                      "@type": "Organization",
                      "name": "EFEX",
                      "@id": "https://efex.vn/en/#Organization"
                    },
                    "areaServed": {
                      "@type": "Place",
                      "name": "Worldwide"
                    },
                    "description": "EFEX’s all-in-one eCommerce order fulfillment solution with automated platform integrations helps eCommerce businesses process orders effectively and boost sales.",
                    "offers": {
                      "@type": "Offer",
                      "priceCurrency": "USD",
                      "price": "Get a Quote",
                      "url": "https://efex.vn/en/contact-sales"
                    },
                    "isRelatedTo": [
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
                    "availableChannel": [
                      {
                        "@type": "ServiceChannel",
                        "serviceLocation": "No. 8 Le Quang Dao, Phu Do Ward, Nam Tu Liem District, Hanoi, Vietnam",
                        "serviceUrl": "https://efex.vn/en/solutions/ecommerce-order-fulfillment"
                      },
                      {
                        "@type": "ServiceChannel",
                        "serviceLocation": "11460-11462 Pagemill Rd, Dallas, TX 75243 TEXAS",
                        "serviceUrl": "https://efex.vn/en/solutions/ecommerce-order-fulfillment"
                      },
                      {
                        "@type": "ServiceChannel",
                        "serviceLocation": "10832 Capital Ave Unit 5A, Garden Grove, CA 92843 CALIFORNIA",
                        "serviceUrl": "https://efex.vn/en/solutions/ecommerce-order-fulfillment"
                      },
                      {
                        "@type": "ServiceChannel",
                        "serviceLocation": "5839 W Montrose Ave, Chicago, IL, 60634 ILLINOIS",
                        "serviceUrl": "https://efex.vn/en/solutions/ecommerce-order-fulfillment"
                      },
                      {
                        "@type": "ServiceChannel",
                        "serviceLocation": "〒136-0075 Tokyo, Koto, Shinsuna, 3 Chome−10−8, 1F Warehouse 3",
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
                          "name": "All-in-one Ecommerce Order Fulfillment Solution in Vietnam | EFEX",
                          "@id": "https://efex.vn/en/solutions/ecommerce-order-fulfillment"
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
                  "serviceType": "Giải pháp goàn thiện đơn hàng TMĐT tự động",
                  "provider": {
                    "@type": "Organization",
                    "name": "EFEX",
                    "@id": "https://efex.vn/vi/#Organization"
                  },
                  "areaServed": {
                    "@type": "Place",
                    "name": "Toàn cầu"
                  },
                  "description": "Hoàn thiện đơn hàng đa kênh ngay trong ngày. Lưu kho, quản lý hàng tồn kho 24/7, lấy hàng, đóng gói, và vận chuyển đế vận chuyển đến tận tay khách hàng, hãy để EFEX lo!",
                  "offers": {
                    "@type": "Offer",
                    "priceCurrency": "USD",
                    "price": "Get a Quote",
                    "url": "https://efex.vn/vi/contact-sales"
                  },
                  "isRelatedTo": [
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
                    },
                    {
                      "@type": "Service",
                      "name": "Fulfillment B2B và bán lẻ",
                      "url": "https://efex.vn/vi/solutions/b2b-retail-fulfillment"
                    }
                  ],
                  "termsOfService": "https://support.efex.vn/en/",
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
                      "serviceLocation": "Số 8 Lê Quang Đạo, Phường Phú Đô, Quận Nam Từ Liêm, Hà Nội, Hà Nội",
                      "serviceUrl": "https://efex.vn/vi/solutions/ecommerce-order-fulfillment"
                    },
                    {
                      "@type": "ServiceChannel",
                      "serviceLocation": "11460-11462 Pagemill Rd, Dallas, TX 75243 TEXAS",
                      "serviceUrl": "https://efex.vn/vi/solutions/ecommerce-order-fulfillment"
                    },
                    {
                      "@type": "ServiceChannel",
                      "serviceLocation": "10832 Capital Ave Unit 5A, Garden Grove, CA 92843 CALIFORNIA",
                      "serviceUrl": "https://efex.vn/vi/solutions/ecommerce-order-fulfillment"
                    },
                    {
                      "@type": "ServiceChannel",
                      "serviceLocation": "5839 W Montrose Ave, Chicago, IL, 60634 ILLINOIS",
                      "serviceUrl": "https://efex.vn/vi/solutions/ecommerce-order-fulfillment"
                    },
                    {
                      "@type": "ServiceChannel",
                      "serviceLocation": "〒136-0075 Tokyo, Koto, Shinsuna, 3 Chome−10−8, 1F Warehouse 3",
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
                        "name": "Giải Pháp Hoàn Thiện Đơn Hàng TMĐT Tự Động | EFEX",
                        "@id": "https://efex.vn/vi/solutions/ecommerce-order-fulfillment"
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
      <Hero lang={lang.ecomOrderFulfillment.hero} />
      <RevenueStory lang={lang.ecomOrderFulfillment.revenueStory} />
      <MultiChannel lang={lang.ecomOrderFulfillment.multiChannel} />
      <FulfillmentDifference
        lang={lang.ecomOrderFulfillment.fulfillmentDifference}
      />
      <FBEInventoryManagement
        lang={lang.ecomOrderFulfillment.FBEInventory}
        params={params}
      />
      <OptimizeOrder
        lang={lang.ecomOrderFulfillment.optimizeOrder}
        params={params.lang}
      />
      <PackingStrategy lang={lang.ecomOrderFulfillment.packingStrategy} />
      <ShipStrategically
        lang={lang.ecomOrderFulfillment.shipStrategically}
        locale={params.lang}
      />
      <Partnership lang={lang.ecomOrderFulfillment.partnership} />
      <OurCustomers lang={lang.ecomOrderFulfillment.ourCustomers} />
      <MoreThan lang={lang.ecomOrderFulfillment.moreThan} />
      <FrequentlyQuestions
        lang={lang.ecomOrderFulfillment.frequentlyQuestions}
        params={params}
      />
      <Promises lang={lang.ecomOrderFulfillment.promises} params={params} />
      <PopupModal />
      <FromVietNam lang={lang} />
    </Suspense>
  );
};

export default EcommerceOrderFulfillment;
