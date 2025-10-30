import { getDictionary } from "@/app/getDictionary";
import AboutUsComponent from "@/components/about-us/page";
import FromVietNam from "@/components/commons/FromVietNam";

import { ResolvingMetadata, Metadata } from "next";

type Props = {
  params: { lang: string };
};
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const lang = await getDictionary(params.lang ? params.lang : "en");
  const link = `https://efex.vn/${params.lang}/company/about-us`;
  return {
    title: lang?.meta?.aboutUs?.title,
    description: lang?.meta?.aboutUs?.des,
    alternates: { canonical: link },
    openGraph: {
      type: "website",
      url: link,
      title: lang?.meta?.aboutUs?.title,
      description: lang?.meta?.aboutUs?.des,
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
      title: lang?.meta?.aboutUs?.title,
      description: lang?.meta?.aboutUs?.des,
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
                  "@type": "AboutPage",
                  "name": "EFEX - About Us",
                  "description": "We are committed to safely processing and delivering products from Vietnam to consumers globally, providing efficient and reliable services through our extensive network.",
                  "publisher": {
                    "@type": "Organization",
                    "name": "EFEX",
                    "@id": "https://efex.vn/en/#Organization"
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
                        "name": "EFEX - About Us",
                        "@id": "https://efex.vn/en/company/about-us"
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
                  "@type": "AboutPage",
                  "name": "EFEX- Về chúng tôi",
                  "description": "Đồng hành cùng doanh nghiệp kinh doanh hàng Việt đi khắp thế giới một cách an toàn, hiệu quả thông qua hệ sinh thái dịch vụ fulfillment và vận chuyển quốc tế toàn diện.",
                  "publisher": {
                    "@type": "Organization",
                    "name": "EFEX",
                    "@id": "https://efex.vn/vi/#Organization"
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
                        "name": "EFEX - Về chúng tôi",
                        "@id": "https://efex.vn/vi/company/about-us"
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
      <AboutUsComponent lang={lang} params={params.lang} />
      <FromVietNam lang={lang} />
    </>
  );
};
export default AboutUs;
