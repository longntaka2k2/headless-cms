import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
const OrtherBenefit = () => {
  const { t } = useTranslation("common");
  const items = [
    {
      title: t("smartCrossBorder.ortherBenefit.items.integrated.title"),
      content: t("smartCrossBorder.ortherBenefit.items.integrated.content"),
      img: "https://cms-strapi.ichiba.net/uploads/Frame_384d6b172f.svg",
    },
    {
      title: t("smartCrossBorder.ortherBenefit.items.multiMarket.title"),
      content: t("smartCrossBorder.ortherBenefit.items.multiMarket.content"),
      img: "https://cms-strapi.ichiba.net/uploads/Frame_4_6e35ce5bad.svg",
    },
    {
      title: t("smartCrossBorder.ortherBenefit.items.sale.title"),
      content: t("smartCrossBorder.ortherBenefit.items.sale.content"),
      img: "https://cms-strapi.ichiba.net/uploads/Frame_3_f482d7459c.svg",
    },
    {
      title: t("smartCrossBorder.ortherBenefit.items.package.title"),
      content: t("smartCrossBorder.ortherBenefit.items.package.content"),
      img: "https://cms-strapi.ichiba.net/uploads/Frame_7e45035bd1.svg",
    },
    {
      title: t("smartCrossBorder.ortherBenefit.items.multiCurrency.title"),
      content: t("smartCrossBorder.ortherBenefit.items.multiCurrency.content"),
      img: "https://cms-strapi.ichiba.net/uploads/Frame_2_a0b1a73c27.svg",
    },
    {
      title: t("smartCrossBorder.ortherBenefit.items.product.title"),
      content: t("smartCrossBorder.ortherBenefit.items.product.content"),
      img: "https://cms-strapi.ichiba.net/uploads/Frame_1_729d33deaa.svg",
    },
  ];
  return (
    <div className="tw-container lg:tw-my-16 tw-bg-[linear-gradient(180deg,_#FFF1E3_0%,_#FFE7D6_100%)] tw-pt-6 tw-pb-10 lg:tw-p-16 tw-rounded-xl lg:tw-rounded-[80px]">
      <div className="tw-text-center">
        <div className="tw-text-[#666] text-sm lg:text-base">
          {t("smartCrossBorder.ortherBenefit.label")}
        </div>
        <div className="tw-text-2xl lg:tw-text-4xl tw-font-bold tw-mt-3 lg:tw-mb-6">
          {t("smartCrossBorder.ortherBenefit.title")}
        </div>
      </div>
      <div className="tw-mt-4 tw-flex tw-snap-x tw-overflow-x-auto tw-w-full tw-gap-4 tw-no-scrollbar tw-p-1 lg:tw-grid lg:tw-grid-cols-3 lg:tw-overflow-x-visible">
        {items.map((value: any, index: number) => (
          <div
            className="tw-bg-white tw-rounded-2xl tw-min-w-[283px] tw-snap-center tw-px-3 tw-pt-4 tw-pb-6 lg:tw-p-6 hover:tw-scale-105 tw-transition-all tw-duration-150 tw-ease-linear"
            key={index}
          >
            <Image
              src={value.img}
              alt={value.img}
              width={146}
              height={146}
              className="tw-p-4 lg:tw-p-6 mx-auto"
            />
            <div className="tw-mt-4 lg:tw-mt-6 tw-font-bold lg:tw-text-xl">
              {value.title}
            </div>
            <div className="tw-text-sm lg:tw-text-base tw-mt-2 lg:tw-mt-4">
              {value.content}
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <Link
          href="/products/cross-border-forwarding/features"
          className="tw-text-sm lg:tw-text-base tw-bg-brand-primary tw-text-white tw-rounded-lg tw-px-8 tw-py-3 tw-no-underline tw-inline-block tw-mt-6"
        >
          {t("learnMore")}
        </Link>
      </div>
    </div>
  );
};
export default OrtherBenefit;
