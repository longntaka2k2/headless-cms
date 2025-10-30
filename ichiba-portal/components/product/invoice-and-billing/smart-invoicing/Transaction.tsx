import { useTranslation } from "next-i18next";
import Image from "next/image";
import clsx from "clsx";

export default function Transaction() {
  const { t } = useTranslation("invoice-and-billing");

  return (
    <div
      className={clsx(
        "tw-bg-[linear-gradient(66deg,_rgba(196,_209,_255,_0.00)_-1.26%,_rgba(142,_190,_244,_0.32)_102.82%)]",
        "tw-flex tw-items-center tw-overflow-hidden tw-shadow-[0px_0px_20px_0px_rgba(0,_0,_0,_0.11)]",
        "tw-flex-col tw-gap-5 tw-rounded-xl lg:tw-rounded-2xl tw-py-6 lg:tw-py-8",
        "tw-border-2 lg:tw-border-[3px] tw-border-white"
      )}
    >
      <div className="tw-px-4 lg:tw-px-6 ">
        <h3 className="tw-mb-2 lg:tw-mb-4 tw-text-lg lg:tw-text-2xl tw-font-bold">
          {t("smartInvoicing.items.1.title")}
        </h3>
        <div className="tw-flex tw-flex-col tw-gap-4">
          {(
            t(`smartInvoicing.items.1.content`, {
              returnObjects: true,
            }) as string[]
          ).map((item: any, index) => (
            <div key={index} className="tw-flex tw-gap-2 lg:tw-gap-4">
              <Image
                src={
                  "https://cms-strapi.ichiba.net/uploads/Group_1_79183829a3.svg"
                }
                width={24}
                height={24}
                className="tw-w-6 tw-h-6"
                alt="icon-check"
              />
              <p className="tw-text-sm xl:tw-text-base tw-mb-0">{item}</p>
            </div>
          ))}
        </div>
      </div>

      <Image
        src={"https://cms-strapi.ichiba.net/uploads/Illus_2_1_5af2419c6d.svg"}
        width={545}
        height={350}
        alt={t("smartInvoicing.items.1.title")}
        className="tw-mx-auto"
      />
    </div>
  );
}
