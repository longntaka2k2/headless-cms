import { Suspense } from "react";
import { getDictionary } from "@/app/getDictionary";
import { Metadata, ResolvingMetadata } from "next";
import Banner from "@/components/solutions/x-border-shipping/Banner";
import ImpressiveNumber from "@/components/solutions/x-border-shipping/ImpressiveNumber";
import CustomClearance from "@/components/solutions/x-border-shipping/CustomClearance";
import GlobalGrowth from "@/components/solutions/x-border-shipping/GlobalGrowth";
import StayWithin from "@/components/solutions/x-border-shipping/StayWithin";
import ShippingBlog from "@/components/solutions/x-border-shipping/ShippingBlog";
import OptimalShipping from "@/components/solutions/x-border-shipping/OptimalShipping";
import OurDestination from "@/components/solutions/x-border-shipping/OurDestination";
import OurPartners from "@/components/solutions/x-border-shipping/OurPartner";
import CustomerStories from "@/components/solutions/x-border-shipping/CustomerStories";
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
    `https://efex.vn/${params.lang}/solutions/cross-border-shipping` as string;
  return {
    title: lang?.meta?.cross?.title,
    description: lang?.meta?.cross?.des,
    alternates: { canonical: link },
    robots: "index, follow",
    openGraph: {
      type: "website",
      url: link,
      title: lang?.meta?.cross?.title,
      description: lang?.meta?.cross?.des,
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

const CrossBorderShipping = async ({
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
            fbq('track', 'CrossBorder_PageView_VI');
            `,
          }}
        />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<img height="1" width="1" style="display:none"
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
                  "serviceType": "Cross-Border Shipping Solution",
                  "provider": {
                    "@type": "Organization",
                    "name": "EFEX",
                    "@id": "https://efex.vn/en/#Organization"
                  },
                  "areaServed": {
                    "@type": "Place",
                    "name": "Worldwide"
                  },
                  "description": "Deliver your parcel globally with EFEX's hassle-free cross-border shipping service. From customs clearance to international delivery, we've got you covered!",
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
                      "B2B",
                      "B2C"
                    ]
                  },
                  "availableChannel": [
                    {
                      "@type": "ServiceChannel",
                      "serviceLocation": "No. 8 Le Quang Dao, Phu Do Ward, Nam Tu Liem District, Hanoi, Vietnam",
                      "serviceUrl": "https://efex.vn/en/solutions/cross-border-shipping"
                    },
                    {
                      "@type": "ServiceChannel",
                      "serviceLocation": "11460-11462 Pagemill Rd, Dallas, TX 75243 TEXAS",
                      "serviceUrl": "https://efex.vn/en/solutions/cross-border-shipping"
                    },
                    {
                      "@type": "ServiceChannel",
                      "serviceLocation": "10832 Capital Ave Unit 5A, Garden Grove, CA 92843 CALIFORNIA",
                      "serviceUrl": "https://efex.vn/en/solutions/cross-border-shipping"
                    },
                    {
                      "@type": "ServiceChannel",
                      "serviceLocation": "5839 W Montrose Ave, Chicago, IL, 60634 ILLINOIS",
                      "serviceUrl": "https://efex.vn/en/solutions/cross-border-shipping"
                    },
                    {
                      "@type": "ServiceChannel",
                      "serviceLocation": "〒136-0075 Tokyo, Koto, Shinsuna, 3 Chome−10−8, 1F Warehouse 3",
                      "serviceUrl": "https://efex.vn/en/solutions/cross-border-shipping"
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
                        "name": "Global Reach Made Easy with EFEX's Cross-Border Shipping",
                        "@id": "https://efex.vn/en/solutions/cross-border-shipping"
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
                  "serviceType": "Vận chuyển xuyên biên giới",
                  "provider": {
                    "@type": "Organization",
                    "name": "EFEX",
                    "@id": "https://efex.vn/vi/#Organization"
                  },
                  "areaServed": {
                    "@type": "Place",
                    "name": "Toàn cầu"
                  },
                  "description": "Vận chuyển xuyên biên giới tơi hơn 200 quốc giá & vùng lãnh thổ. Vận chuyển đúng hẹn, bảo hiểm 100% giá trị hàng hóa. Tracking đơn hàng mọi lúc, mọi nơi.",
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
                  "availableChannel": [
                    {
                      "@type": "ServiceChannel",
                      "serviceLocation": "Số 8 Lê Quang Đạo, Phường Phú Đô, Quận Nam Từ Liêm, Hà Nội",
                      "serviceUrl": "https://efex.vn/vi/solutions/cross-border-shipping"
                    },
                    {
                      "@type": "ServiceChannel",
                      "serviceLocation": "11460-11462 Pagemill Rd, Dallas, TX 75243 TEXAS",
                      "serviceUrl": "https://efex.vn/vi/solutions/cross-border-shipping"
                    },
                    {
                      "@type": "ServiceChannel",
                      "serviceLocation": "10832 Capital Ave Unit 5A, Garden Grove, CA 92843 CALIFORNIA",
                      "serviceUrl": "https://efex.vn/vi/solutions/cross-border-shipping"
                    },
                    {
                      "@type": "ServiceChannel",
                      "serviceLocation": "5839 W Montrose Ave, Chicago, IL, 60634 ILLINOIS",
                      "serviceUrl": "https://efex.vn/vi/solutions/cross-border-shipping"
                    },
                    {
                      "@type": "ServiceChannel",
                      "serviceLocation": "〒136-0075 Tokyo, Koto, Shinsuna, 3 Chome−10−8, 1F Warehouse 3",
                      "serviceUrl": "https://efex.vn/vi/solutions/cross-border-shipping"
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
                        "name": "EFEX: Vận chuyển xuyên biên giới từ 7-10 ngày",
                        "@id": "https://efex.vn/vi/solutions/cross-border-shipping"
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
      <ImpressiveNumber lang={lang.xBorderShippin.impressiveNumber} />
      <OptimalShipping lang={lang.xBorderShippin.optimalShipping} />
      <CustomClearance
        lang={lang.xBorderShippin.customClearance}
        locale={params.lang}
      />
      <GlobalGrowth lang={lang.xBorderShippin.globalGrowth} />
      <OurDestination lang={lang.xBorderShippin.ourDestination} />
      <OurPartners lang={lang.xBorderShippin.ourPartner} />
      <CustomerStories lang={lang} />
      <ShippingBlog lang={lang.xBorderShippin.blog} />
      <StayWithin params={params} lang={lang.xBorderShippin.stayWithin} />
      <FromVietNam lang={lang} />
    </Suspense>
  );
};

export default CrossBorderShipping;
