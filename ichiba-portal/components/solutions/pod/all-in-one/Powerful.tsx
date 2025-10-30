import { useTranslation } from "next-i18next";
import clsx from "clsx";
import Image from "next/image";

export const Powerful = () => {
  const { t } = useTranslation("pod");
  return (
    <div
      className={clsx(
        "tw-bg-[linear-gradient(97deg,_#F2E6FA_-6.8%,_#E4ECFB_61.05%,_#ECFFF0_122.2%)]",
        "tw-flex tw-flex-col lg:tw-flex-row lg:tw-items-centers tw-gap-6 lg:tw-gap-10",
        "tw-px-4 lg:tw-px-6 tw-rounded-xl lg:tw-rounded-2xl tw-mt-12",
      )}
    >
      <Image
        src={t("allInOne.items.1.image") as string}
        width={504}
        height={350}
        className="tw-flex-1 -tw-translate-y-10 tw-mx-auto"
        alt="#"
      />
      <div className="tw-grid tw-gap-4 lg:tw-gap-6 tw-flex-1 tw-py-4 lg:tw-py-6">
        <h3 className="tw-text-lg lg:tw-text-xl tw-mb-0 tw-font-bold">
          {t("allInOne.items.1.title")}
        </h3>

        <div className="tw-grid tw-gap-2">
          {(
            t(`allInOne.items.1.contents`, {
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
            src={"https://cms-strapi.ichiba.net/uploads/Group1_d9f837828e.svg"}
            width={24}
            height={24}
            className="tw-w-6 tw-h-6"
            alt="icon"
          />

          <div className="tw-text-sm lg:tw-text-base">
            <p className="tw-mb-2 tw-font-bold">{t("allInOne.benefit")}:</p>
            <p className="tw-mb-0">{t("allInOne.items.1.benefit")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Powerful;
