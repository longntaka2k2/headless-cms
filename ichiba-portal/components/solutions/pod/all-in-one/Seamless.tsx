import { useTranslation } from "next-i18next";
import clsx from "clsx";
import Image from "next/image";

export const Seamless = () => {
  const { t } = useTranslation("pod");
  return (
    <div
      className={clsx(
        "tw-bg-[linear-gradient(270deg,_rgba(235,_238,_250,_0.00)_0.05%,_rgba(172,_190,_255,_0.50)_99.96%)]",
        "tw-p-4 lg:tw-p-6 tw-rounded-xl lg:tw-rounded-2xl",
      )}
    >
      <div className="tw-p-4 lg:tw-p-9 tw-bg-white tw-flex tw-flex-col lg:tw-flex-row lg:tw-items-centers tw-gap-6 lg:tw-gap-10 tw-rounded-xl">
        <div className="tw-grid tw-gap-4 lg:tw-gap-6">
          <h3 className="tw-text-lg lg:tw-text-xl tw-mb-0 tw-font-bold">
            {t("allInOne.items.0.title")}
          </h3>

          <div className="tw-grid tw-gap-2">
            {(
              t(`allInOne.items.0.contents`, {
                returnObjects: true,
              }) as string[]
            ).map((value: any, index: number) => (
              <div key={index} className="tw-flex tw-gap-3 lg:tw-gap-4">
                <Image
                  src={
                    "https://cms-strapi.ichiba.net/uploads/Group_72442a942f.svg"
                  }
                  width={24}
                  height={24}
                  className="tw-w-6 tw-h-6"
                  alt="icon"
                />
                <p className="tw-text-sm lg:tw-text-base tw-mb-0">{value}</p>
              </div>
            ))}
          </div>

          <div className="tw-flex tw-gap-3 lg:tw-gap-4">
            <Image
              src={
                "https://cms-strapi.ichiba.net/uploads/Group1_d9f837828e.svg"
              }
              width={24}
              height={24}
              className="tw-w-6 tw-h-6"
              alt="icon"
            />

            <div className="tw-text-sm lg:tw-text-base">
              <p className="tw-mb-2 tw-font-bold">{t("allInOne.benefit")}:</p>
              <p className="tw-mb-0">{t("allInOne.items.0.benefit")}</p>
            </div>
          </div>
        </div>

        <Image
          src={t("allInOne.items.0.image") as string}
          width={504}
          height={350}
          className="tw-mx-auto"
          alt="#"
        />
      </div>
    </div>
  );
};

export default Seamless;
