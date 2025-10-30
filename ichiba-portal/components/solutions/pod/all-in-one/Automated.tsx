import { useTranslation } from "next-i18next";
import clsx from "clsx";
import Image from "next/image";

export const Automated = () => {
  const { t } = useTranslation("pod");
  return (
    <div
      className={clsx(
        "tw-bg-[linear-gradient(91deg,_rgba(177,_209,_246,_0.20)_24.67%,_rgba(197,_200,_253,_0.20)_77.28%)]",
        "tw-flex tw-flex-col lg:tw-flex-row lg:tw-items-centers tw-gap-6 lg:tw-gap-10",
        " tw-p-4 lg:tw-p-6 tw-rounded-xl lg:tw-rounded-2xl",
      )}
    >
      <Image
        src={t("allInOne.items.3.image") as string}
        width={504}
        height={350}
        className="tw-flex-1 tw-mx-auto"
        alt="#"
      />
      <div className="tw-grid tw-gap-4 lg:tw-gap-6 tw-flex-1">
        <h3 className="tw-text-lg lg:tw-text-xl tw-mb-0 tw-font-bold">
          {t("allInOne.items.3.title")}
        </h3>

        <div className="tw-grid tw-gap-2">
          {(
            t(`allInOne.items.3.contents`, {
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
            <p className="tw-mb-0">{t("allInOne.items.3.benefit")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Automated;
