import { useTranslation } from "next-i18next";
import Image from "next/image";

const WhatDropshipping = () => {
  const { t } = useTranslation("dropshipping");
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.50) 0%, rgba(135, 188, 255, 0.50) 100%)",
      }}
      className="tw-py-6 lg:tw-py-15"
    >
      <div className="tw-container">
        <h2 className="tw-mb-6 lg:tw-mb-10 tw-text-center tw-text-2xl lg:tw-text-4xl tw-font-bold lg:tw-w-[55%] tw-mx-auto">
          {t("whatDropshipping.title")}
        </h2>

        <div className="tw-grid lg:tw-grid-cols-3 tw-gap-6">
          {(
            t("whatDropshipping.items", {
              returnObjects: true,
            }) as any
          ).map((item: any, index: number) => {
            return (
              <div
                key={index}
                className="tw-p-5 tw-rounded-2xl tw-bg-ic-white-6"
              >
                <div className="tw-w-[46px] tw-h-[46px] tw-mx-auto tw-mb-2">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={46}
                    height={46}
                  />
                </div>
                <h3 className="tw-mb-0 tw-text-sm lg:tw-text-base tw-font-bold tw-text-center">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhatDropshipping;
