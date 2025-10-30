import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";

import OutProductNew from "@/components/home/out-product-new";
import SEO from "@/components/layout/head";
import endpoints from "@/const/endpoints";
import { getPosts } from "@/payload-client";
import { GetServerSideProps } from "next";
import { Metadata, ResolvingMetadata } from "next";
import qs from "qs";
import { useTranslation } from "react-i18next";

const MACH = dynamic(() => import("@/components/home/Mach"), {
  ssr: true,
});
const IChibaSaas = dynamic(() => import("@/components/home/IchibaSaaS"), {
  ssr: true,
});
const ForTeamCPN = dynamic(() => import("@/components/home/ForTeam"), {
  ssr: true,
});
const HomeBannerEn = dynamic(() => import("@/components/home/HomeBannerEN"), {
  ssr: true,
});
const HomeBannerVN = dynamic(() => import("@/components/homeVn/HomeBannerVN"), {
  ssr: true,
});
const HeadlessCommerce = dynamic(
  () => import("@/components/home/HeadlessCommerce"),
  {
    ssr: true,
  },
);
const Slider = dynamic(() => import("@/components/homeVn/slider"), {
  ssr: true,
});
const MultiChannels = dynamic(() => import("@/components/home/MultiChannels"), {
  ssr: true,
});

const Determined = dynamic(() => import("@/components/home/determined"), {
  ssr: true,
});
const OurCustomer = dynamic(() => import("@/components/shared/ourCustomer"), {
  ssr: true,
});
const Community = dynamic(() => import("@/components/home/community"), {
  ssr: true,
});
const CustomerSay = dynamic(() => import("@/components/home/customerSay"), {
  ssr: true,
});
const News = dynamic(() => import("@/components/home/news"), { ssr: true });
const SolutionICB = dynamic(() => import("@/components/home/solution"), {
  ssr: true,
});
const SolutionICBVn = dynamic(() => import("@/components/home/solution-new"), {
  ssr: true,
});

type Props = {
  params: { lang: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  return {
    openGraph: {
      images: [
        {
          url: "https://cms-strapi.ichiba.net/uploads/Size_40_46722f9991.png",
        },
      ],
    },
  };
}

export default function Index(props: any) {
  const body = props.data?.body as any[];
  const seo = props.data?.seo;

  const RenderBody = ({ body }: any) => {
    let ourProductCount = 0;

    return (
      <>
        {body?.map((comp: any, index: number) => {
          const objProps = (additionalKey?: string) => ({
            ...comp,
            key: `${index}_${comp?.__component}${additionalKey ?? ""}`,
          });

          switch (comp.__component) {
            case "home-vn.banner-vn":
              return props.locale == "en" ? (
                <div key={"home-vn.banner-en"}>
                  <HomeBannerEn {...objProps()} />
                  {/* <MultiChannels /> */}
                  <MACH />
                  <ForTeamCPN />
                  <IChibaSaas />
                  {/* <HeadlessCommerce /> */}
                  {/* <Slider {...objProps("_slider")} /> */}
                </div>
              ) : (
                <div key={"home-vn.banner-vn"}>
                  <HomeBannerEn {...objProps()} />
                  {/* <MultiChannels />
                  <Slider {...objProps("_slider")} /> */}
                  <MACH />
                  <ForTeamCPN />
                  <IChibaSaas />
                </div>
              );
            // case "home-vn.solutions":
            //   return props.locale == "en" ? (
            //     <SolutionICB {...objProps()} />
            //   ) : (
            //     <SolutionICBVn {...objProps()} />
            //   );
            // case "home-vn.our-product":
            //   ourProductCount++;
            //   return (
            //     <OutProductNew
            //       {...objProps()}
            //       style={
            //         ourProductCount % 2 == 0
            //           ? { backgroundColor: "#F4F6FE" }
            //           : {}
            //       }
            //     />
            //   );

            case "home-vn.determined":
              return <Determined {...objProps()} />;
            case "home-vn.our-customer":
              return <OurCustomer {...objProps()} />;
            case "home-vn.community":
              return <Community {...objProps()} />;
            case "home-vn.new":
              return <News {...objProps()} />;
            case "home-vn.customer-say":
              return <CustomerSay {...objProps()} />;
            default:
              return <></>;
          }
        })}
      </>
    );
  };
  return (
    <>
      {seo && <SEO {...seo} />}
      {body && <RenderBody body={body} />}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const locale = () => {
    switch (ctx?.locale) {
      case "en":
        return endpoints.homeEn;
      case "vi":
        return endpoints.home;
    }
  };

  let { data } = await fetch(`${locale()}?populate=deep`).then((x) => x.json());

  const query = {
    "category.name": {
      equals: "customersay",
    },
  };
  let listPostCareer = await getPosts(
    qs.stringify(
      {
        where: query, // ensure that `qs` adds the `where` property, too!
        locale: ctx.locale,
      },
      { addQueryPrefix: true },
    ),
  );
  const post = listPostCareer && listPostCareer?.posts;
  return {
    props: {
      post,
      data: data.attributes,
      locale: ctx.locale,
      ...(await serverSideTranslations(ctx?.locale as string)),
    },
  };
};
