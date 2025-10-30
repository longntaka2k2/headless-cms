import clsx from "clsx";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import LottieRenderer from "@/components/common/lottieRenderer";

const Banner = () => {
  const { t } = useTranslation("digital-features");
  let host = typeof window !== "undefined" ? window.location.origin : "";

  return (
    <section className={clsx("tw-py-6 lg:tw-px-0 lg:tw-py-16")}>
      <div
        className={clsx(
          "tw-container",
          "tw-flex tw-flex-col tw-gap-9 md:tw-gap-6 tw-items-center",
        )}
      >
        <div className=" tw-flex tw-flex-col tw-text-center">
          <h1 className="tw-text-2xl md:tw-text-4xl tw-font-bold lg:tw-mb-6 tw-mb-4 ">
            <span className="tw-block">{t("banner.heading")}</span>
            <span>{t("banner.heading2")}</span>
          </h1>
          <div className=" lg:tw-mb-12 tw-mb-4 tw-text-center">
            <p className="tw-mb-0 tw-text-pending-5 lg:tw-text-black lg:tw-mb-6">
              {t("banner.subHeading")}
            </p>
          </div>
          <div className="tw-flex tw-justify-between lg:tw-justify-center tw-text-sm md:tw-text-xl tw-font-medium lg:tw-gap-6 tw-gap-4">
            <Link
              href={"/book-demo"}
              className="tw-cta tw-cta-primary tw-flex-1 tw-p-3 lg:tw-max-w-[250px]"
            >
              {t("cta.bookADemo")}
            </Link>
            <Link
              href={
                host === "https://ichiba.vn"
                  ? "https://api.ichiba.vn/account/login?redirectUrl=https://app.ichiba.net"
                  : "https://api.ichiba.net/account/login?redirectUrl=https://app.ichiba.net"
              }
              className="tw-cta tw-cta-secondary tw-flex-1 tw-p-3 lg:tw-max-w-[258px]"
            >
              {t("cta.startBuild")}
            </Link>
          </div>
        </div>
        <div className="">
          <LottieRenderer path="https://cms-strapi.ichiba.net/uploads/Comp_1_caa260bf16_557ff6add1.json" />
        </div>
      </div>
    </section>
  );
};
export default Banner;
