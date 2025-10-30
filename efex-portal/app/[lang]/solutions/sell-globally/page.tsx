import { getDictionary } from "@/app/getDictionary";
import { Metadata, ResolvingMetadata } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const WithEFEX = dynamic(
  () => import("@/components/solutions/selling-globally/WithEfex")
);
const WhatMakesEFEX = dynamic(
  () => import("@/components/solutions/selling-globally/what-makes-efex/index")
);
const BiggestChallenges = dynamic(
  () =>
    import("@/components/solutions/selling-globally/biggest-challenges/index")
);
const LetHelp = dynamic(
  () => import("@/components/solutions/selling-globally/LetHelp")
);
const ShoppingCart = dynamic(
  () => import("@/components/solutions/selling-globally/ShoppingCart")
);
const Seamlessly = dynamic(
  () => import("@/components/solutions/selling-globally/Seamlessly")
);
const Banner = dynamic(
  () => import("@/components/solutions/selling-globally/Banner")
);
const WhyShould = dynamic(
  () => import("@/components/solutions/selling-globally/WhyShould")
);
const TrustSecurity = dynamic(
  () => import("@/components/solutions/selling-globally/TrustSecurity")
);
const CustomerStories = dynamic(
  () => import("@/components/solutions/selling-globally/CustomerStories")
);
const OurPartners = dynamic(
  () => import("@/components/solutions/selling-globally/OurPartnres")
);
const Service = dynamic(
  () => import("@/components/solutions/selling-globally/service-journey/index")
);
const Resources = dynamic(
  () => import("@/components/solutions/selling-globally/Resources")
);
const RemoveingAnyBarriers = dynamic(
  () => import("@/components/solutions/selling-globally/RemoveingAnyBarriers")
);

const FromVietNam = dynamic(
  () => import("@/components/commons/FromVietNam")
);

type Props = {
  params: { lang: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const lang = await getDictionary(params.lang ?? "en");
  const link = `https://efex.vn/${params.lang}/solutions/sell-globally`;
  return {
    title: lang?.meta?.sellGlobally?.title,
    description: lang?.meta?.sellGlobally?.des,
    alternates: { canonical: link },
    robots: "index, follow",
    openGraph: {
      type: "website",
      url: link,
      title: lang?.meta?.sellGlobally?.title,
      description: lang?.meta?.sellGlobally?.des,
      siteName: "EFEX",
      images: [
        {
          url: "https://strapi-efex.ichiba.net/uploads/Group_1171276004_2cd1954440.png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@EfexVietnam",
      creator: "@EfexVietnam",
      images:
        "https://strapi-efex.ichiba.net/uploads/Group_1171276004_2cd1954440.png",
      title: lang?.meta?.sellGlobally?.title,
      description: lang?.meta?.sellGlobally?.des,
    },
  };
}

const SellingGlobally = async ({
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
                  "serviceType": "Sell Globally Solution",
                  "provider": {
                    "@type": "Organization",
                    "name": "EFEX",
                    "@id": "https://efex.vn/en/#Organization"
                  },
                  "areaServed": {
                    "@type": "Place",
                    "name": "Worldwide"
                  },
                  "description": "Expand business to globe without the need of changing the operation of your ecommerce website. With EFEX's Javascript tag, your foreign customers can buy items easily and quickly in some minutes.",
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
                      "name": "Sell in Vietnam Solution",
                      "url": "https://efex.vn/en/solutions/sell-in-vietnam"
                    },
                    {
                      "@type": "Service",
                      "name": "E-commerce Order Fulfillment Solution",
                      "url": "https://efex.vn/en/solutions/ecommerce-order-fulfillment"
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
                      "serviceUrl": "https://efex.vn/en/solutions/sell-globally"
                    },
                    {
                      "@type": "ServiceChannel",
                      "serviceLocation": "11460-11462 Pagemill Rd, Dallas, TX 75243 TEXAS",
                      "serviceUrl": "https://efex.vn/en/solutions/sell-globally"
                    },
                    {
                      "@type": "ServiceChannel",
                      "serviceLocation": "10832 Capital Ave Unit 5A, Garden Grove, CA 92843 CALIFORNIA",
                      "serviceUrl": "https://efex.vn/en/solutions/sell-globally"
                    },
                    {
                      "@type": "ServiceChannel",
                      "serviceLocation": "5839 W Montrose Ave, Chicago, IL, 60634 ILLINOIS",
                      "serviceUrl": "https://efex.vn/en/solutions/sell-globally"
                    },
                    {
                      "@type": "ServiceChannel",
                      "serviceLocation": "〒136-0075 Tokyo, Koto, Shinsuna, 3 Chome−10−8, 1F Warehouse 3",
                      "serviceUrl": "https://efex.vn/en/solutions/sell-globally"
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
                        "name": "Sell Globally at Ease with EFEX",
                        "@id": "https://efex.vn/en/solutions/sell-globally"
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
                  "serviceType": "Bán hàng xuyên biên giới",
                  "provider": {
                    "@type": "Organization",
                    "name": "EFEX",
                    "@id": "https://efex.vn/vi/#Organization"
                  },
                  "areaServed": {
                    "@type": "Place",
                    "name": "Toàn cầu"
                  },
                  "description": "Không cần thay đổi website để bán hàng xuyên biên giới. Chỉ cần mã Javascript độc quyền của EFEX, khách hàng nước ngoài sẽ dễ dàng mua sắm ngay trên website hiện tại của bạn trong tích tắc.",
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
                      "name": "Bán hàng tại Việt Nam",
                      "url": "https://efex.vn/vi/solutions/sell-in-vietnam"
                    },
                    {
                      "@type": "Service",
                      "name": "Dịch vụ fulfillment thương mại điện tử",
                      "url": "https://efex.vn/vi/solutions/ecommerce-order-fulfillment"
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
                      "serviceUrl": "https://efex.vn/vi/solutions/sell-globally"
                    },
                    {
                      "@type": "ServiceChannel",
                      "serviceLocation": "11460-11462 Pagemill Rd, Dallas, TX 75243 TEXAS",
                      "serviceUrl": "https://efex.vn/vi/solutions/sell-globally"
                    },
                    {
                      "@type": "ServiceChannel",
                      "serviceLocation": "10832 Capital Ave Unit 5A, Garden Grove, CA 92843 CALIFORNIA",
                      "serviceUrl": "https://efex.vn/vi/solutions/sell-globally"
                    },
                    {
                      "@type": "ServiceChannel",
                      "serviceLocation": "5839 W Montrose Ave, Chicago, IL, 60634 ILLINOIS",
                      "serviceUrl": "https://efex.vn/vi/solutions/sell-globally"
                    },
                    {
                      "@type": "ServiceChannel",
                      "serviceLocation": "〒136-0075 Tokyo, Koto, Shinsuna, 3 Chome−10−8, 1F Warehouse 3",
                      "serviceUrl": "https://efex.vn/vi/solutions/sell-globally"
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
                        "name": "Bán hàng xuyên biên giới dễ dàng cùng EFEX",
                        "@id": "https://efex.vn/vi/solutions/sell-globally"
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
      <WithEFEX locale={params.lang} lang={lang.sellGlobally.withEFEX} />
      <WhatMakesEFEX lang={lang.sellGlobally.whatMakes} />
      <BiggestChallenges lang={lang.sellGlobally.biggestChallenges} />
      <LetHelp locale={params.lang} lang={lang.sellGlobally.letHelp} />
      <ShoppingCart lang={lang.sellGlobally.shoppingCart} />
      <Seamlessly lang={lang.sellGlobally.seamlessly} />
      <Banner lang={lang.sellGlobally.banner} />
      <WhyShould lang={lang.sellGlobally.whyShould} />
      <TrustSecurity lang={lang.sellGlobally.security} />
      <CustomerStories lang={lang.sellGlobally.customerStories} />
      <OurPartners lang={lang.sellGlobally.ourPartners} />
      <Service lang={lang.sellGlobally.service} />
      <Resources lang={lang.sellGlobally.resources} />
      <RemoveingAnyBarriers
        locale={params.lang}
        lang={lang.sellGlobally.removeingAnyBarriers}
      />
      <FromVietNam lang={lang} />
    </Suspense>
  );
};

export default SellingGlobally;
