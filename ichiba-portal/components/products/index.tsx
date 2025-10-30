import bgBanner from "@/public/images/products/bg-banner.svg";
import bgLogistics from "@/public/images/products/bg-logistics.svg";
import headerLeft from "@/public/images/products/header-left.svg";
import headerRight from "@/public/images/products/header-right.svg";
import ProductsPOS from "./pos";
import ProductsStoreFront from "./store-front";
import Ship4P from "./ship4p";
import SmartCrossBorder from "./cross-border-forwarding";
import Image from "next/image";
import clsx from "clsx";
import Support from "./support";
import { useTranslation } from "next-i18next";
import ProductsCommerceLayer from "./commerce-layer";
import ProductsWMS from "./wms";
import ProductsInvoiceBillings from "./ichiba-invoice-billings";
import Integration from "./integration";

export const ProductsComponent = () => {
  const { t } = useTranslation("products");
  return (
    <section className="tw-relative tw-flex tw-flex-col tw-gap-6 lg:tw-gap-20 tw-overflow-hidden">
      <div
        className={clsx(
          "tw-absolute tw-top-[-1%] tw-left-[-1%] tw-hidden",
          "tw-w-[349px] tw-h-[280px] xl:tw-block -tw-z-1",
        )}
      >
        <Image
          src={headerLeft}
          alt="headerLeft"
          className="tw-w-full tw-h-full"
        />
      </div>

      <div
        className={clsx(
          "tw-absolute tw-right-0 tw-top-0 tw-w-[146px] tw-h-[117px]",
          "sm:tw-w-[369px] sm:tw-h-[253px] -tw-z-1",
        )}
      >
        <Image
          src={headerRight}
          alt="headerRight"
          className="tw-w-full tw-h-full"
        />
      </div>

      <div className="tw-container tw-mt-6 lg:tw-mt-20">
        <h1 className="tw-text-2xl lg:tw-text-5xl tw-font-bold tw-mb-2 lg:tw-mb-3 tw-w-[80%]">
          {t("heading")}
        </h1>
        <div
          style={{
            background:
              "linear-gradient(274deg, #FDE9D3 26.95%, rgba(233, 238, 255, 0.60) 90%)",
          }}
          className="tw-h-[3px] tw-w-[242px] tw-rounded"
        ></div>
      </div>

      <div>
        <div className="tw-container tw-mb-4 lg:tw-mb-6">
          <div className="tw-flex tw-w-[150px] lg:tw-w-[250px] tw-gap-2 tw-items-center">
            <p className="tw-text-xs lg:tw-text-base tw-font-bold tw-mb-0 tw-w-full tw-uppercase tw-text-ic-black-5">
              {t("forSeller")}
            </p>
            <hr className="tw-w-full tw-h-full" />
          </div>
        </div>

        <div className="tw-grid tw-gap-6 lg:tw-gap-20">
          <ProductsCommerceLayer />
          <Ship4P />
          <ProductsStoreFront />
        </div>
      </div>

      <div className="tw-relative">
        <div className="tw-container tw-mb-4 lg:tw-mb-6">
          <div className="tw-flex tw-w-[200px] lg:tw-w-[300px] tw-gap-2 tw-items-center">
            <p className="tw-text-xs lg:tw-text-base tw-font-bold tw-w-full tw-mb-0 tw-uppercase tw-text-ic-black-5">
              {t("forOperator")}
            </p>
            <hr className="tw-w-full tw-h-full" />
          </div>
        </div>

        <div className="tw-grid tw-gap-6 lg:tw-gap-20">
          <ProductsWMS />
          <SmartCrossBorder />
          <div
            className={clsx(
              "tw-w-[821px] tw-h-[381px] tw-hidden lg:tw-block -tw-z-1",
              "tw-absolute tw-top-[50%] tw-translate-y-[-50%] tw-left-[-5%]",
            )}
          >
            <Image
              src={bgLogistics}
              alt="bgLogistics"
              className="tw-w-full tw-h-full"
            />
          </div>
        </div>
      </div>

      <div className="tw-bg-[#F9F5EF] tw-py-6 tw-px-4 lg:tw-px-0 lg:tw-pt-12 lg:tw-pb-[73px]">
        <div className="tw-container tw-mb-4 lg:tw-mb-10">
          <div className="tw-flex tw-w-[129px] lg:tw-w-[200px] tw-gap-2 tw-items-center">
            <p className="tw-text-xs lg:tw-text-base tw-font-bold tw-mb-0 tw-uppercase tw-text-ic-black-5">
              {t("capabilities")}
            </p>
            <hr className="tw-w-full tw-h-full" />
          </div>
        </div>
        <div className="tw-grid tw-gap-6 lg:tw-gap-20">
          <ProductsInvoiceBillings />
          <Integration />
        </div>
      </div>

      <Support />

      <div
        className="tw-py-[52px]"
        style={{
          backgroundImage: `url(${bgBanner.src})`,
          backgroundPosition: "center",
        }}
      >
        <div className="tw-container lg:tw-w-[50%] tw-mx-auto lg:tw-text-center">
          <h2 className="tw-mb-0 tw-text-white tw-text-2xl lg:tw-text-4xl tw-font-bold tw-leading-[32px] lg:tw-leading-[48px]">
            {t("bannerFooter.0")}
          </h2>
          <h2 className="tw-mb-0 tw-text-white tw-text-2xl lg:tw-text-4xl tw-font-bold tw-leading-[32px] lg:tw-leading-[48px]">
            {t("bannerFooter.1")}
          </h2>
        </div>
      </div>
    </section>
  );
};
