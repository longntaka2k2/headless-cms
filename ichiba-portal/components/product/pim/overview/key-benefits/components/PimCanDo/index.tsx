import React from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";

const PimCanDo = () => {
  const { t, i18n } = useTranslation("pim");

  return (
    <div
      className="tw-relative tw-bg-no-repeat tw-bg-cover"
      style={{ backgroundImage: "url(/icons/pim/pim-can-do-bg.webp)" }}
    >
      <div className="container">
        <div className="tw-p-4 md:tw-p-10 tw-text-ic-white-6 tw-bg-[#0a1a3d] tw-rounded-[20px] tw-relative tw-z-10">
          <div className="tw-flex tw-flex-col tw-gap-3 tw-w-full md:tw-w-1/2">
            <h4 className="tw-text-2xl md:tw-text-4xl tw-mb-0 tw-font-bold">
              {t("pimCanDo.title")}
            </h4>
            <p className="tw-mb-0 tw-text-ic-ink-2 tw-text-sm md:tw-text-base">
              {t("pimCanDo.subTitle")}
            </p>
          </div>
          <div className="tw-mt-14 tw-grid tw-grid-cols-1 md:tw-grid-cols-2">
            {(
              t(`canDoList`, {
                returnObjects: true,
              }) as string[]
            ).map((item: any, index: number) => (
              <div className="tw-py-6 tw-pr-10 tw-flex tw-gap-6" key={index}>
                <div className="tw-w-[60px] tw-h-[60px] tw-bg-orange-1 tw-rounded-full tw-flex tw-items-center tw-justify-center">
                  <Image
                    width={32}
                    height={32}
                    src="/icons/pim/server-databases-data-big.svg"
                    alt="server-databases-data-big"
                  />
                </div>
                <div className="tw-flex-1">
                  <h6 className="tw-mb-0 tw-text-lg tw-leading-6 tw-font-bold">
                    {item.title}
                  </h6>
                  <p className="tw-mt-3 tw-mb-0 tw-text-sm tw-text-ic-ink-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="tw-absolute tw-top-0 tw-right-0">
            <Image
              width={440}
              height={237}
              src="/icons/pim/artwork-bg.svg"
              alt="artwork"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PimCanDo;
