import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const Banner = () => {
  const { t } = useTranslation("integration", { keyPrefix: "banner" });

  return (
    <section
      className={clsx(
        "lg:tw-relative",
        "tw-bg-primary-1",
        "tw-bg-contain lg:tw-bg-cover tw-bg-left lg:tw-bg-center tw-bg-no-repeat",
      )}
    >
      <div>
        <Image
          src={
            "https://cms-strapi.ichiba.net/uploads/banner_light_1_9d72f136c4.png"
          }
          alt="banner"
          width={882}
          height={460}
          className="tw-ml-auto"
          quality={100}
        />
      </div>
      <div
        className={clsx(
          "lg:tw-absolute tw-top-0 tw-left-0 tw-right-0 tw-bottom-0",
          " tw-flex tw-items-center",
          "tw-w-full tw-h-full tw-container tw-mx-auto tw-py-6",
        )}
      >
        <div className="tw-text-center lg:tw-text-left lg:tw-w-3/5 tw-mx-auto lg:tw-ml-0">
          <h1 className="tw-text-2xl lg:tw-text-4xl tw-font-bold tw-leading-8 tw-mb-2 lg:tw-mb-4 lg:tw-leading-[48px]">
            <span className="tw-block">{t("heading")}</span>
            <span>{t("heading2")}</span>
          </h1>
          <p className="tw-text-xs lg:tw-text-base tw-mb-6 lg:tw-mb-4">
            {t("subHeading")}
          </p>
          <Link
            href={"#"}
            className="tw-cta-primary tw-inline-block tw-px-3 tw-py-[14px] tw-rounded-lg tw-no-underline tw-mx-auto lg:tw-mx-0"
          >
            {t("cta")}
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Banner;
