import Image from "next/image";
import imgPOS from "@/public/images/products/imgPOS.svg";
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import BoxContentEcosystem from "../boxContentEcosystem";

export default function ProductsPOS() {
  const { t } = useTranslation("products");

  const listPOS = [
    {
      title: t("pos.list.0"),
    },
    {
      title: t("pos.list.1"),
    },
    {
      title: t("pos.list.2"),
    },
    {
      title: t("pos.list.3"),
    },
  ];

  return (
    <div className="tw-w-full tw-grid tw-gap-4 lg:tw-gap-6 tw-py-4 lg:tw-py-8 tw-overflow-hidden lg:tw-overflow-visible">
      <div className="tw-px-4 lg:tw-px-9">
        <BoxContentEcosystem
          icon="https://cms-strapi.ichiba.net/uploads/POS_5b3a24b450.svg"
          heading={t("pos.heading").toString()}
          title={t("pos.title").toString()}
          subTitle={t("pos.subTitle").toString()}
          list={listPOS as []}
          link="/products/pos/overview"
        />
      </div>

      <div
        style={{
          boxShadow:
            "5.152px 1.03px 10.304px 0px #FFF inset, -1.03px -5.152px 10.304px 0px rgba(147, 185, 221, 0.40) inset, 20.609px 30.913px 41.217px 0px rgba(68, 111, 195, 0.15)",
        }}
        className={clsx(
          "tw-bg-[#F9FDFF] tw-w-full tw-max-h-[290px] tw-h-full tw-rounded-[9px] tw-p-[6px]",
          "lg:tw-rounded-[15px] lg:tw-py-[10px] lg:tw-translate-x-[36px]",
        )}
      >
        <Image src={imgPOS} alt="imgPOS" className="tw-w-full tw-h-full" />
      </div>
    </div>
  );
}
