import { usePathname } from "next/navigation";
import React from "react";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import endpoints from "@/const/endpoints";
import Image from "next/image";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import FormFreeEbook from "@/components/ebooks-reports-whitepapers/FormFreeEbook";

export default function Page(ebooks: any) {
  const { t } = useTranslation("resources");
  const ebook = ebooks?.data?.find(
    (item: any) => item.attributes.slug === ebooks.ebook,
  );
  const handleFocusFooter = () => {
    const footerElement = document.getElementById("formFreeEbook");
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="tw-bg-[linear-gradient(181deg,_#FFF_62.12%,_#98C6FD_143.72%)] tw-px-4 xl:tw-px-0">
        <div className="container tw-grid lg:tw-grid-cols-2 tw-items-center tw-py-6 tw-gap-6">
          <div>
            <h1 className="tw-text-2xl lg:tw-text-5xl tw-font-bold tw-mb-3 lg:tw-mb-6">
              {ebook?.attributes?.title}
            </h1>
            <p className="tw-text-sm lg:tw-text-base tw-mb-6 lg:tw-mb-10">
              {ebook?.attributes?.previewDescription}
            </p>
            <a
              href={
                ebook?.attributes?.linkForm ? ebook?.attributes?.linkForm : "#"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="tw-bg-brand-primary tw-text-white tw-px-6 tw-py-3 tw-no-underline tw-rounded hover:tw-opacity-80 tw-transition"
            >
              {t("form.textBtn")}
            </a>
          </div>
          <Image
            src={
              ebook?.attributes?.imageBanner?.data?.attributes?.url
                ? `https://cms-strapi.ichiba.net${ebook?.attributes?.imageBanner?.data?.attributes?.url}`
                : ""
            }
            width={879}
            height={700}
            alt={ebook?.attributes?.title}
            className="tw-mx-auto"
          />
        </div>
      </div>

      <div className="tw-container tw-py-4 lg:tw-py-20 tw-px-4 xl:tw-px-0">
        <h2 className="tw-text-2xl lg:tw-text-4xl lg:tw-leading-[48px] tw-font-bold tw-text-center tw-mb-6 lg:tw-mb-15">
          {t("whatWill")} <br />[ {ebook?.attributes?.title} ]
        </h2>
        <div className="tw-p-4 lg:tw-p-15 tw-grid tw-gap-6 lg:tw-gap-15 tw-rounded-2xl tw-bg-[linear-gradient(120deg,_#F7F9FD_0.39%,_#F6F6F5_93.95%)]">
          {ebook &&
            ebook?.attributes?.items &&
            ebook?.attributes?.items.map((item: any, index: number) => (
              <div
                key={item?.id}
                className={clsx(
                  "tw-flex tw-items-center tw-gap-4 lg:tw-gap-14",
                  index % 2 === 0
                    ? "tw-flex-col lg:tw-flex-row"
                    : "lg:tw-flex-row-reverse tw-flex-col-reverse",
                )}
              >
                <div className="lg:tw-w-[50%] tw-rounded-2xl tw-border tw-overflow-hidden">
                  <Image
                    src={
                      item?.image?.data?.attributes?.url
                        ? `https://cms-strapi.ichiba.net${item?.image?.data?.attributes?.url}`
                        : ""
                    }
                    width={518}
                    height={416}
                    alt={item?.title}
                    className="tw-mx-auto tw-object-cover"
                  />
                </div>
                <div className="lg:tw-w-[50%]">
                  <h3 className="tw-text-base lg:tw-text-2xl tw-mb-2 lg:tw-mb-6 tw-font-bold">
                    {item?.title}
                  </h3>
                  <p className="tw-text-sm lg:tw-text-base tw-mb-0">
                    {item?.subTitle}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const locale = () => {
    switch (ctx?.locale) {
      case "en":
        return endpoints.ebook;
      case "vi":
        return endpoints.ebook;
    }
  };
  const qs = require("qs");
  const query = qs.stringify(
    {
      locale: ctx?.locale,
      filters: {
        slug: {
          $eq: ctx?.query?.slug,
        },
      },
    },
    {
      encodeValuesOnly: true, // prettify URL
    },
  );

  const { data } = await fetch(`${locale()}?${query}&&populate=deep`).then(
    (x) => x.json(),
  );

  return {
    props: {
      ebook: ctx?.query?.ebook,
      locale: ctx?.locale,
      data: data,
      resolvedUrl: ctx.resolvedUrl,
      ...(await serverSideTranslations(ctx?.locale as string)),
    },
  };
};
