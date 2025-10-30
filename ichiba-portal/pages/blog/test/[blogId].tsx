// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCircleDot } from "@fortawesome/free-solid-svg-icons";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import endpoints from "@/const/endpoints";
// import MetadataComponent from "@/components/metaSEO/metaSeo";
// import Image from "next/image";
// import ReadMore from "@/components/blog/ReadMore";
// import { GetStrapiRelation } from "@/utils/utils";
// import RichText from "@/components/blog/Richtext";
// import Share from "@/components/blog/Share";
// import clsx from "clsx";
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const locale = () => {
    switch (ctx?.locale) {
      case "en":
        return endpoints.blog;
      case "vi":
        return endpoints.blog;
    }
  };
  const qs = require("qs");
  const query = qs.stringify(
    {
      filters: {
        slug: {
          $eq: ctx?.query?.blogId,
        },
      },
    },
    {
      encodeValuesOnly: true, // prettify URL
    },
  );
  const queryCategory = qs.stringify(
    {
      filters: {
        locale: {
          $eq: ctx?.locale,
        },
      },
      sort: ["order:asc"],
    },
    {
      encodeValuesOnly: true, // prettify URL
    },
  );

  const { data } = await fetch(
    `${locale()}?${query}&&populate=deep&${queryCategory}`,
  ).then((x) => x.json());

  const dataCategory = await fetch(
    `${endpoints.categoryBlog}?populate=deep&${queryCategory}`,
  ).then((x) => x.json());

  return {
    props: {
      category: dataCategory?.data,
      blogId: ctx?.query?.blogId,
      locale: ctx?.locale,
      data: data,
      resolvedUrl: ctx.resolvedUrl,
      ...(await serverSideTranslations(ctx?.locale as string)),
    },
  };
};

export default function Page(props: any) {
  // let blogDetail = props?.data[0];
  // const currentUrl =
  //   postData.locale == "vi"
  //     ? `https://ichiba.vn/vi${props.resolvedUrl}`
  //     : `https://ichiba.net/en${props.resolvedUrl}`;

  return <div className="blogDetail">aaaaaaa</div>;
}
