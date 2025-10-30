import clsx from "clsx";
import imgManageProducts from "@/public/images/mother-baby/imgManageProducts.svg";
import imgIncreaseBrand from "@/public/images/mother-baby/imgIncreaseBrand.svg";
import imgSuggestSelling from "@/public/images/mother-baby/imgSuggestSelling.svg";
import imgProvideVarious from "@/public/images/mother-baby/imgProvideVarious.svg";
import imgManageLoyal from "@/public/images/mother-baby/imgManageLoyal.svg";
import imgProvideDetailed from "@/public/images/mother-baby/imgProvideDetailed.svg";
import CardContent from "./CardContent";
import { useTranslation } from "next-i18next";

export default function HowDoes() {
  const { t } = useTranslation("mother-baby");

  return (
    <div className="tw-container tw-grid tw-gap-8 lg:tw-gap-10 tw-py-6 lg:tw-py-15">
      <div className="lg:tw-text-center">
        <span
          className={clsx(
            "tw-text-sm tw-text-[#0F62FE] tw-bg-[#E6F3FF]",
            "tw-mb-0 tw-py-[2px] tw-px-5 tw-rounded-3xl",
          )}
        >
          {t("howDoes.label")}
        </span>
        <h2 className="tw-mb-0 tw-text-2xl tw-leading-8 lg:tw-text-4xl lg:tw-leading-[48px] tw-font-bold lg:tw-w-[75%] tw-mx-auto">
          {t("howDoes.heading")}
        </h2>
      </div>

      <CardContent
        image={imgManageProducts}
        title={t("howDoes.item.title.0")}
        subTitle={t("howDoes.item.subTitle.0")}
        className="tw-flex-col tw-gap-6 lg:tw-flex-row-reverse lg:tw-gap-10"
        classNameImg="lg:tw-min-w-[690px] lg:tw-min-h-[319px] tw-w-full tw-h-full"
      />

      <div className="tw-grid lg:tw-grid-cols-2 tw-gap-8 lg:tw-gap-10">
        <CardContent
          image={imgSuggestSelling}
          title={t("howDoes.item.title.1")}
          subTitle={t("howDoes.item.subTitle.1")}
          className="tw-bg-[#F8F4E9] tw-flex-col tw-gap-4 tw-py-6 tw-px-4 lg:tw-px-6 tw-rounded-xl lg:tw-rounded-2xl tw-justify-between tw-text-center"
          classNameImg="tw-min-h-[123px] lg:tw-min-h-[199px] tw-w-full tw-h-full"
        />

        <CardContent
          image={imgIncreaseBrand}
          title={t("howDoes.item.title.2")}
          subTitle={t("howDoes.item.subTitle.2")}
          className="tw-flex-col lg:tw-flex-col-reverse tw-gap-6"
          classNameImg="tw-min-h-[205px] lg:tw-min-h-[337px] tw-w-full tw-h-full"
        />
      </div>

      <CardContent
        image={imgProvideVarious}
        title={t("howDoes.item.title.3")}
        subTitle={t("howDoes.item.subTitle.3")}
        className="tw-flex-col tw-gap-6 lg:tw-flex-row lg:tw-gap-10"
        classNameImg="lg:tw-min-w-[689px] lg:tw-min-h-[364px] tw-w-full tw-h-full"
      />

      <div className="tw-grid lg:tw-grid-cols-2 tw-gap-8 lg:tw-gap-10">
        <CardContent
          image={imgManageLoyal}
          title={t("howDoes.item.title.4")}
          subTitle={t("howDoes.item.subTitle.4")}
          className="tw-flex-col lg:tw-flex-col-reverse tw-gap-6"
          classNameImg="tw-min-h-[226px] lg:tw-min-h-[367px] tw-w-full tw-h-full"
        />

        <CardContent
          image={imgProvideDetailed}
          title={t("howDoes.item.title.5")}
          subTitle={t("howDoes.item.subTitle.5")}
          className="tw-bg-[#F8F4FF] tw-flex-col tw-gap-4 tw-py-6 tw-px-4 lg:tw-px-6 tw-rounded-xl lg:tw-rounded-2xl tw-justify-between"
          classNameImg="tw-min-h-[221px] lg:tw-max-w-[467px] lg:tw-min-h-[319px] tw-w-full tw-h-full"
        />
      </div>
    </div>
  );
}
