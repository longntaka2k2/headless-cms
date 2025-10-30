import SvgIcon from "@/components/common/SvgIcon";
import Link from "next/link";
import Image from "next/image";
import bgImgageCross from "@/public/images/products/bgImageCross.svg";
import imgCrossBorder from "@/public/images/products/img-cross-boder.svg";
import clsx from "clsx";
import BoxContentEcosystem from "../boxContentEcosystem";
import { useTranslation } from "next-i18next";

export default function SmartCrossBorder() {
  const { t } = useTranslation("products");

  const listCrossBorder = [
    { title: t("smartCrossBorder.list.0")},
    { title: t("smartCrossBorder.list.1")},
    { title: t("smartCrossBorder.list.2")},
  ];

  return (
    <div className="tw-container tw-px-4">
      <div
        style={{
          boxShadow: "0px 0px 12px 0px rgba(54, 50, 46, 0.08)",
        }}
        className={clsx(
          "tw-grid tw-gap-5 tw-px-0 tw-overflow-hidden tw-rounded-xl",
          "lg:tw-grid-cols-2 lg:tw-gap-15 lg:tw-items-center lg:tw-rounded-3xl",
        )}
      >
        <div className="tw-bg-white tw-pt-5 tw-px-4 lg:tw-py-15 lg:tw-pl-15 lg:tw-pr-12">
          <BoxContentEcosystem
            icon="https://cms-strapi.ichiba.net/uploads/cross_4b57c8edfa.svg"
            heading={t("smartCrossBorder.heading").toString()}
            subHeading={t("smartCrossBorder.subHeading").toString()}
            subTitle={t("smartCrossBorder.subTitle").toString()}
            list={listCrossBorder as []}
            link="/products/cross-border-forwarding/overview"
          />
        </div>

        <div
          style={{
            backgroundImage: `url(${bgImgageCross.src})`,
            backgroundRepeat: "no-repeat",
            objectFit: "cover",
          }}
          className="tw-bg-[#EBF0FD] tw-w-full tw-h-full tw-py-7 lg:tw-py-0"
        >
          <div
            style={{
              boxShadow:
                "5.152px 1.03px 10.304px 0px #FFF inset, -1.03px -5.152px 10.304px 0px rgba(147, 185, 221, 0.40) inset, 20.609px 30.913px 41.217px 0px rgba(68, 111, 195, 0.15)",
            }}
            className={clsx(
              "tw-bg-[#F9FDFF] tw-w-full tw-max-h-[204px] tw-h-full tw-rounded-[9px] tw-p-[6px] tw-translate-x-4",
              "lg:tw-max-h-[339px] lg:tw-rounded-[15px] lg:tw-py-[10px] lg:tw-translate-x-[36px] lg:tw-translate-y-[35%]",
            )}
          >
            <Image
              src={imgCrossBorder}
              alt="imgCrossBorder"
              className="tw-w-full tw-max-h-[321px] tw-h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
