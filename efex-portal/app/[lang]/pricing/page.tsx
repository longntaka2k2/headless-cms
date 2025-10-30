import { getDictionary } from "@/app/getDictionary";
import BannerPricing from "@/components/pricing/Banner";
import FrequentlyQuestions from "@/components/pricing/FrequentlyQuestions";
import Solution from "@/components/pricing/Solution";
import { ResolvingMetadata, Metadata } from "next";
import FromVietNam from "@/components/commons/FromVietNam";

type Props = {
  params: { lang: string };
};
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const lang = await getDictionary(params.lang ?? "en");
  const link = `https://efex.vn/${params.lang}/pricing`;
  return {
    title: lang?.meta?.pricing?.title,
    description: lang?.meta?.pricing?.des,
    alternates: { canonical: link },
    openGraph: {
      type: "website",
      url: link,
      title: lang?.meta?.pricing?.title,
      description: lang?.meta?.pricing?.des,
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
      title: lang?.meta?.pricing?.title,
      description: lang?.meta?.pricing?.des,
    },
  };
}
const Pricing = async ({
  params,
}: {
  params: {
    lang: string;
    slug: string;
  };
}) => {
  const lang = await getDictionary(params.lang ? params.lang : "en");

  return (
    <div className="">
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
                  "name": "EFEX Fulfillment Pricing: Pay as you go",
                  "description": "Cut operating costs by up to 70% with Fulfillment by EFEX. The fulfillment fee will be based on the number of orders fulfilled. Just pay as you really go!",
                  "url": "https://efex.vn/en/pricing",
                  "isPartOf": {
                    "@type": "WebSite",
                    "name": "EFEX",
                    "@id": "https://efex.vn/en/pricing/#WebSite"
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
                        "@id": "https://efex.vn/en/pricing"
                      }
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "item": {
                        "name": "EFEX Fulfillment Pricing: Pay as you go",
                        "@id": "https://efex.vn/en/pricing"
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
                  "name": "Bảng Giá Dịch Vụ: Fulfillment by EFEX",
                  "description": "Tiết kiệm tới 70% chi phí vận hành với Fulfillment by EFEX. Dùng bao nhiêu trả bấy nhiêu dựa trên số lượng đơn hàng được xử lý.",
                  "url": "https://efex.vn/vi/pricing",
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
                        "name": "Bảng Giá Dịch Vụ: Fulfillment by EFEX",
                        "@id": "https://efex.vn/vi/pricing"
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
      <BannerPricing lang={lang?.pricing?.banner} locale={params.lang} />
      <Solution lang={lang?.pricing?.solution} />
      <FrequentlyQuestions
        lang={lang?.pricing?.frequentlyQuestions}
        params={params}
      />
      <FromVietNam lang={lang} />
    </div>
  );
};

export default Pricing;
