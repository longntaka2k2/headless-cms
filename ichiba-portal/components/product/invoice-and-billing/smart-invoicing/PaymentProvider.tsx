import { useTranslation } from "next-i18next";
import Image from "next/image";
import clsx from "clsx";

export default function PaymentProvider() {
  const { t } = useTranslation("invoice-and-billing");

  return (
    <div
      className={clsx(
        "tw-bg-[linear-gradient(150deg,_rgba(239,_247,_255,_0.90)_29.38%,_rgba(255,_239,_225,_0.90)_134.11%)]",
        "tw-flex tw-items-center tw-overflow-hidden tw-shadow-[0px_0px_20px_0px_rgba(0,_0,_0,_0.11)]",
        "tw-flex-col tw-gap-5 tw-rounded-xl lg:tw-rounded-2xl tw-py-6 lg:tw-py-8",
        "tw-border-2 lg:tw-border-[3px] tw-border-white"
      )}
    >
      <div className="tw-px-4 lg:tw-px-6 ">
        <h3 className="tw-mb-2 lg:tw-mb-4 tw-text-lg lg:tw-text-2xl tw-font-bold">
          {t("smartInvoicing.items.3.title")}
        </h3>
        <div className="tw-flex tw-flex-col tw-gap-4">
          {(
            t(`smartInvoicing.items.3.content`, {
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
        src={"https://cms-strapi.ichiba.net/uploads/Frame_1171276751_13623f315f.svg"}
        width={466}
        height={344}
        alt={t("smartInvoicing.items.3.title")}
        className="tw-mx-auto"
      />
    </div>
  );
}
