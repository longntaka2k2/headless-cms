import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import imgMonitor from "@/public/images/fashion-beauty/imgMonitor.svg";

export default function OurCustomers() {
  const { t } = useTranslation("fashion-beauty");

  const listCustomers = [
    {
      image: imgMonitor,
      customerName: "Mrs. Rebecca Henry",
      career: "Store owner",
      story:
        "Using IChiba POS software helps me update daily sales. At the same time, it helps stores manage inventory easily when updating new products.",
    },
    {
      image: imgMonitor,
      customerName: "Mrs. Rebecca Henry",
      career: "Store owner",
      story:
        "Using IChiba POS software helps me update daily sales. At the same time, it helps stores manage inventory easily when updating new products.",
    },
    {
      image: imgMonitor,
      customerName: "Mrs. Rebecca Henry",
      career: "Store owner",
      story:
        "Using IChiba POS software helps me update daily sales. At the same time, it helps stores manage inventory easily when updating new products.",
    },
    {
      image: imgMonitor,
      customerName: "Mrs. Rebecca Henry",
      career: "Store owner",
      story:
        "Using IChiba POS software helps me update daily sales. At the same time, it helps stores manage inventory easily when updating new products.",
    },
    {
      image: imgMonitor,
      customerName: "Mrs. Rebecca Henry",
      career: "Store owner",
      story:
        "Using IChiba POS software helps me update daily sales. At the same time, it helps stores manage inventory easily when updating new products.",
    },
  ];

  return (
    <div
      style={{
        background:
          "linear-gradient(274deg, #FDE9D3 26.95%, rgba(233, 238, 255, 0.60) 90%)",
      }}
      className="tw-py-6 lg:tw-py-15 tw-px-4"
    >
      <h2 className="tw-mb-6 lg:tw-mb-10 tw-text-2xl tw-leading-8 lg:tw-text-4xl lg:tw-leading-[48px] tw-font-bold lg:tw-text-center">
        {t("ourCustomers.heading.0")}
        <span className="tw-text-[#389E0D]">{t("ourCustomers.heading.1")}</span>
        {t("ourCustomers.heading.2")}
      </h2>

      <div
        className={clsx(
          "tw-mt-5 tw-flex tw-overflow-x-scroll tw-gap-4 tw-scroll-px-2 tw-scroll-mx-48",
          "lg:tw-overflow-x-auto lg:tw-relative lg:tw-pb-5 lg:tw-mt-[50px] tw-pb-3",
        )}
      >
        {listCustomers.map((value: any, index: number) => (
          <div
            key={index}
            style={{
              boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.05)",
            }}
            className={clsx(
              "tw-min-w-[300px] tw-h-[192px] tw-rounded-lg tw-py-4 tw-px-5",
              "lg:tw-min-w-[500px] tw-grid tw-content-between tw-bg-white",
            )}
          >
            <div className="tw-flex tw-gap-5">
              <div
                style={{
                  boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.1)",
                }}
                className={clsx(
                  "tw-w-[46px] tw-h-[46px] tw-rounded-full",
                  "lg:tw-w-[67px] lg:tw-h-[67px]",
                )}
              >
                <Image
                  src={value.image}
                  alt={value.image}
                  className="tw-w-full tw-h-full"
                />
              </div>
              <div>
                <div className="tw-mb-1 tw-text-lg tw-leading-6 lg:tw-text-xl lg:tw-leading-7 tw-font-bold">
                  {value.customerName}
                </div>
                <p className="tw-mb-0 tw-text-ic-black-5 tw-text-sm">
                  {value.career}
                </p>
              </div>
            </div>
            <p className="tw-mb-0 tw-text-sm lg:tw-text-base tw-font-medium">
              {value.story}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
