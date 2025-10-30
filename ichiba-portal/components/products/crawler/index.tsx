import Image from "next/image";
import imgPIM from "@/public/images/products/imgPIM.svg";
import clsx from "clsx";
import BoxContentEcosystem from "../boxContentEcosystem";
import { useTranslation } from "next-i18next";

export default function ProductsCrawler() {
  const { t } = useTranslation("products");

  const listPIM = [
    {
      title: t("crawler.list.0"),
    },
    {
      title: t("crawler.list.1"),
    },
    {
      title: t("crawler.list.2"),
    },
  ];
  return (
    <div
      className={clsx(
        "tw-w-full tw-grid tw-gap-4 tw-bg-[#F8F8FB] tw-rounded-xl",
        "lg:tw-gap-10 tw-p-4 lg:tw-py-8 lg:tw-px-9 lg:tw-rounded-3xl",
      )}
    >
      <div
        style={{
          boxShadow:
            "5.152px 1.03px 10.304px 0px #FFF inset, -1.03px -5.152px 10.304px 0px rgba(147, 185, 221, 0.40) inset, 20.609px 30.913px 41.217px 0px rgba(68, 111, 195, 0.15)",
        }}
        className="tw-bg-[#F9FDFF] tw-w-full tw-max-h-[290px] tw-h-full tw-rounded-[9px] lg:tw-rounded-[15px] tw-p-[6px] lg:tw-py-[10px]"
      >
        <Image src={imgPIM} alt="imgPIM" className="tw-w-full tw-h-full" />
      </div>

      <div>
        <BoxContentEcosystem
          icon="https://cms-strapi.ichiba.net/uploads/PIM_027b76eb45.svg"
          heading={t("crawler.heading").toString()}
          title={t("crawler.title").toString()}
          subTitle={t("crawler.subTitle").toString()}
          list={listPIM as []}
          link="products/crawler/overview"
        />
      </div>
    </div>
  );
}
