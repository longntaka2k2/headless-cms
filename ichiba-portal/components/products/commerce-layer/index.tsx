import Image from "next/image";
import imgCommerceLayer from "@/public/images/products/imgStoreFront.svg";
import clsx from "clsx";
import BoxContentEcosystem from "../boxContentEcosystem";
import { useTranslation } from "next-i18next";

export default function ProductsCommerceLayer() {
  const { t } = useTranslation("products");

  const listOMS = [
    {
      title: t("commerceLayer.list.0"),
    },
    {
      title: t("commerceLayer.list.1"),
    },
    {
      title: t("commerceLayer.list.2"),
    },
    {
      title: t("commerceLayer.list.3"),
    },
    {
      title: t("commerceLayer.list.4"),
    },
    {
      title: t("commerceLayer.list.5"),
    },
  ];

  return (
    <div
      className={clsx(
        "tw-container tw-flex tw-flex-col tw-items-center tw-pb-6 ",
        "lg:tw-flex-row lg:tw-justify-between lg:tw-pb-0",
      )}
    >
      <div className="lg:tw-w-[43%] tw-mb-4 lg:tw-mb-0">
        <BoxContentEcosystem
          icon="https://cms-strapi.ichiba.net/uploads/digital_Commerce_765a2861d7.svg"
          heading={t("commerceLayer.heading").toString()}
          title={t("commerceLayer.title").toString()}
          subTitle={t("commerceLayer.subTitle").toString()}
          list={listOMS as []}
          link="/products/commerce-layer/overview"
        />
      </div>

      <div className="lg:tw-w-[51%]">
        <div
          style={{
            boxShadow:
              "5.152px 1.03px 10.304px 0px #FFF inset, -1.03px -5.152px 10.304px 0px rgba(147, 185, 221, 0.40) inset, 20.609px 30.913px 41.217px 0px rgba(68, 111, 195, 0.15)",
          }}
          className="tw-bg-[#F9FDFF] tw-w-full tw-max-h-[224px] lg:tw-max-h-[409px] tw-h-full tw-rounded-[9px] lg:tw-rounded-[15px] tw-p-[6px] lg:tw-py-[10px] lg:tw-px-3"
        >
          <Image
            src={
              "https://cms-strapi.ichiba.net/uploads/Frame_1171276238_f8e6f867da.svg"
            }
            width={623}
            height={431}
            alt="imgCommerceLayer"
            className="tw-w-full tw-h-full"
          />
        </div>
      </div>
    </div>
  );
}
