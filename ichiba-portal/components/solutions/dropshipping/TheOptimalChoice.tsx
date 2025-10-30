import Image from "next/image";
import { useTranslation } from "next-i18next";

const TheOptimalChoice = () => {
  const { t } = useTranslation("dropshipping");
  return (
    <div className="tw-container tw-mt-6 lg:tw-mt-10">
      <h2 className="tw-mb-6 lg:tw-mb-10 tw-text-center tw-text-2xl lg:tw-text-4xl tw-font-bold lg:tw-w-[70%] tw-mx-auto">
        {t("theOptimalChoice.heading")}
      </h2>
      <div className="tw-grid lg:tw-grid-cols-2 tw-gap-6">
        <div className="tw-p-4 lg:tw-p-6 tw-bg-primary-1 tw-rounded-2xl">
          <h3 className="tw-mb-2 lg:tw-mb-6 text-gradient tw-text-lg lg:tw-text-2xl tw-font-bold">
            {t("theOptimalChoice.onlineStore.title")}
          </h3>
          <p className="tw-mb-6 lg:tw-mb-16 tw-text-sm lg:tw-text-base">
            {t("theOptimalChoice.onlineStore.subTitle")}
          </p>

          <Image
            src="https://cms-strapi.ichiba.net/uploads/Frame_1171276478_b8858be85b.svg"
            alt="#"
            width={540}
            height={372}
            className="tw-mx-auto"
          />
        </div>
        <div
          style={{
            background:
              "linear-gradient(219deg, #FDE9D3 7.93%, rgba(233, 238, 255, 0.60) 66.63%)",
          }}
          className="tw-p-4 lg:tw-p-6 tw-rounded-2xl"
        >
          <h3 className="tw-mb-2 lg:tw-mb-6 text-gradient tw-text-lg lg:tw-text-2xl tw-font-bold">
            {t("theOptimalChoice.marketingService.title")}
          </h3>
          <p className="tw-mb-6 tw-text-sm lg:tw-text-base">
            {t("theOptimalChoice.marketingService.subTitle")}
          </p>

          <div className="tw-grid tw-gap-6">
            {(
              t("theOptimalChoice.marketingService.items", {
                returnObjects: true,
              }) as any
            ).map((item: any, index: number) => {
              return (
                <div key={index} className="tw-flex tw-flex-col lg:tw-flex-row tw-gap-6 tw-p-6 tw-rounded-2xl tw-bg-ic-white-6">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={160}
                    height={160}
                    className="tw-mx-auto"
                  />
                  <div>
                    <h4 className="tw-mb-2 tw-text-sm lg:tw-text-base tw-font-bold">
                      {item.title}
                    </h4>
                    <p className="tw-mb-0 tw-text-sm lg:tw-text-base">
                      {item.subTitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheOptimalChoice;
