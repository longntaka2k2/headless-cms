import bgEmpower from "@/public/images/electronics/bgEmpower.svg";
import imgEmpower from "@/public/images/electronics/imgEmpower.png";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";

export default function Empower() {
  const { t } = useTranslation("electronics");

  return (
    <div
      style={{
        backgroundImage: `url(${bgEmpower.src})`,
        backgroundRepeat: "no-repeat",
        objectFit: "cover",
        backgroundPosition: "bottom",
      }}
      className="tw-pt-6 lg:tw-pt-20 tw-overflow-hidden"
    >
      <div className="tw-container">
        <div className="tw-mb-6 lg:tw-mb-0">
          <h1 className="tw-text-2xl tw-leading-8 lg:tw-text-5xl lg:tw-leading-[56px] tw-font-bold tw-mb-4 lg:tw-mb-6">
            {t("heading.0")}
            <span className="tw-text-[#1135A8]"> {t("heading.1")}</span>
            <br />
            {t("heading.2")}
          </h1>
          <p className="tw-text-sm lg:tw-text-base tw-mb-4 lg:tw-mb-10">
            {t("subHeading")}
          </p>

          <Link
            href={"/contact-sales"}
            className="tw-no-underline tw-text-white"
          >
            <button
              className={clsx(
                "tw-w-[171px] tw-py-3 tw-text-sm tw-bg-[#F57C00]",
                "lg:tw-w-[200px] lg:tw-py-[14px] lg:tw-text-base tw-rounded-lg",
              )}
            >
              {t("contactSales")}
            </button>
          </Link>
        </div>

        <div
          className={clsx(
            "tw-w-full tw-h-full tw-mx-auto tw-translate-y-[8%]",
            "lg:tw-max-w-[900px] lg:tw-max-h-[450px]",
            "xl:tw-max-w-[1094px] xl:tw-max-h-[510px]",
            "lg:tw-translate-y-[-3%] lg:tw-translate-x-[60px]",
            "xl:tw-translate-y-[-11%] xl:tw-translate-x-[60px]",
          )}
        >
          <Image
            src={imgEmpower}
            alt="imgEmpower"
            className="tw-w-full tw-h-full tw-object-contain"
          />
        </div>
      </div>
    </div>
  );
}
