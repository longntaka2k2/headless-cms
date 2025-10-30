import { useTranslation } from "next-i18next";
import Image from "next/image";
import clsx from "clsx";

export default function PricingModel() {
  const { t } = useTranslation("invoice-and-billing");

  return (
    <div
      className={clsx(
        "tw-bg-[linear-gradient(144deg,_rgba(227,_238,_255,_0.75)_22.63%,_rgba(255,_237,_216,_0.75)_57.25%,_rgba(255,_255,_255,_0.75)_97.68%)]",
        "tw-flex tw-items-center tw-overflow-hidden tw-shadow-[0px_0px_20px_0px_rgba(0,_0,_0,_0.11)]",
        "tw-flex-col tw-gap-5 tw-rounded-xl lg:tw-rounded-2xl tw-py-6 tw-px-4 lg:tw-px-6  lg:tw-py-8",
        "tw-border-2 lg:tw-border-[3px] tw-border-white"
      )}
    >
      <div>
        <h3 className="tw-mb-2 lg:tw-mb-4 tw-text-lg lg:tw-text-2xl tw-font-bold">
          {t("smartInvoicing.items.2.title")}
        </h3>
        <div className="tw-flex tw-flex-col tw-gap-4">
          {(
            t(`smartInvoicing.items.2.content`, {
              returnObjects: true,
            }) as string[]
          ).map((item: any, index) => (
            <p key={index} className="tw-text-sm xl:tw-text-base tw-mb-0">
              {item}
            </p>
          ))}
        </div>
      </div>

      <Image
        src={
          "https://cms-strapi.ichiba.net/uploads/Group_1171276309_d92d83cf66.svg"
        }
        width={442}
        height={278}
        alt={t("smartInvoicing.items.2.title")}
        className="tw-mx-auto"
      />
    </div>
  );
}
