import SvgIcon from "@/components/common/SvgIcon";
import Image from "next/image";
import imgStoreFront from "@/public/images/products/imgStoreFront.svg";
import BoxContentEcosystem from "../boxContentEcosystem";
import { useTranslation } from "next-i18next";

export default function ProductsStoreFront() {
  const { t } = useTranslation("products");

  const listStoreFront = [
    { title: t("storeFront.list.0") },
    { title: t("storeFront.list.1") },
    { title: t("storeFront.list.2") },
    { title: t("storeFront.list.3") },
  ];

  return (
    <div className="tw-container tw-p-4">
      <div className="tw-flex tw-gap-3 lg:tw-gap-4 tw-items-center tw-mb-4 lg:tw-mb-6">
        <Image
          src="https://cms-strapi.ichiba.net/uploads/Shape_Quare_15837be92d.svg"
          width={64}
          height={64}
          alt=""
          className="tw-w-10 tw-h-10 lg:tw-w-16 lg:tw-h-16"
        />
        <h2 className="tw-mb-0 tw-text-xl lg:tw-text-3xl tw-font-bold">
          {t("storeFront.heading")}
        </h2>
      </div>

      <div className="tw-flex tw-flex-col lg:tw-flex-row lg:tw-items-center tw-gap-4 lg:tw-gap-10">
        <div className="lg:tw-w-[60%]">
          <div className="tw-w-full tw-max-h-[376px] tw-h-full tw-rounded-lg lg:tw-rounded-2xl tw-overflow-hidden">
            <Image
              src={
                "https://cms-strapi.ichiba.net/uploads/Frame_1171276238_b8d6c7b970.svg"
              }
              width={623}
              height={366}
              alt="imgStoreFront"
              className="tw-mx-auto"
            />
          </div>
        </div>

        <div className="lg:tw-w-[40%]">
          <BoxContentEcosystem
            subTitle={t("storeFront.subTitle").toString()}
            list={listStoreFront as []}
            link="/products/storefront-layer/overview"
          />
        </div>
      </div>
    </div>
  );
}
