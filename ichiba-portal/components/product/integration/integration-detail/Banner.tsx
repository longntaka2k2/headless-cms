import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const Banner = ({ data }: any) => {
  const { t } = useTranslation("integration");
  let host = typeof window !== "undefined" ? window.location.origin : "";

  return (
    <div
      className={clsx(
        "lg:tw-relative tw-overflow-hidden",
        "tw-bg-[url('https://cms-strapi.ichiba.net/uploads/Banner_e6d5d3947e.svg')]",
        "tw-bg-cover tw-bg-no-repeat tw-py-6 lg:tw-py-10",
      )}
    >
      <div className="tw-container tw-px-4 lg:tw-px-0">
        <div className="tw-grid tw-gap-24 lg:tw-gap-10">
          <div>
            <h1 className="tw-text-2xl lg:tw-text-5xl lg:tw-leading-[56px] lg:tw-w-[50%] tw-font-bold tw-mb-2 tw-w-max">
              {data?.heading}
            </h1>
            <p className="tw-text-xs lg:tw-text-base tw-mb-6 lg:tw-w-[45%]">
              {data?.subHeading}
            </p>
            <div className="tw-flex tw-gap-4 tw-justify-start">
              <Link
                href={
                  host === "https://ichiba.vn"
                  ? "https://api.ichiba.vn/account/login?redirectUrl=https://app.ichiba.net"
                  : "https://api.ichiba.net/account/login?redirectUrl=https://app.ichiba.net"
                }
                target="_blank"
                className={clsx(
                  "tw-no-underline tw-border tw-border-[#F57C00] tw-rounded-lg tw-bg-[#F57C00]",
                  "tw-py-3 tw-text-sm tw-text-white tw-max-w-[170px] tw-text-center tw-w-full lg:tw-max-w-[200px]",
                )}
              >
                {t("textBtn.0")}
              </Link>
              <Link
                href={"/contact-sales"}
                target="_blank"
                className={clsx(
                  "tw-no-underline tw-flex tw-items-center tw-border tw-rounded-lg tw-border-[#F57C00]",
                  "tw-py-3 tw-text-sm tw-text-[#F57C00] tw-gap-2 tw-max-w-[170px] lg:tw-max-w-[200px] tw-w-full tw-justify-center",
                )}
              >
                {t("textBtn.1")}
              </Link>
            </div>
          </div>

          <div className="tw-relative tw-flex">
            <div className="tw-flex tw-items-center tw-justify-between">
              <Image
                src={
                  "https://cms-strapi.ichiba.net/uploads/Group_1171275986_ca4ad5664e.svg"
                }
                width={327}
                height={307}
                alt="IChiba"
              />
            </div>
            <div className="tw-z-10">
              <Image
                src={
                  data?.imgBannerRight?.data?.attributes?.url
                    ? `https://cms-strapi.ichiba.net${data?.imgBannerRight?.data?.attributes?.url}`
                    : "#"
                }
                width={854}
                height={569}
                objectFit="cover"
                alt="IChiba"
              />
            </div>
            <Image
              src={
                data?.imgBannerLeft?.data?.attributes?.url
                  ? `https://cms-strapi.ichiba.net${data?.imgBannerLeft?.data?.attributes?.url}`
                  : "#"
              }
              width={482}
              height={250}
              alt="IChiba"
              className={clsx(
                "tw-absolute tw-z-10 tw-bottom-0 tw-left-0",
                "tw-w-[180px] tw-h-[90px] sm:tw-w-[280px] sm:tw-h-[165px]",
                "lg:tw-w-[482px] lg:tw-h-[250px]",
              )}
            />
            <Image
              src={
                data?.imgBannerTop?.data?.attributes?.url
                  ? `https://cms-strapi.ichiba.net${data?.imgBannerTop?.data?.attributes?.url}`
                  : "#"
              }
              width={618}
              height={350}
              alt="IChiba"
              className={clsx(
                "tw-absolute tw-z-0 tw-top-[-85px] sm:tw-top-[-130px] lg:tw-top-[-270px] tw-right-0",
                "tw-w-[188px] tw-h-[106px] sm:tw-w-[309px] sm:tw-h-[175px] lg:tw-w-[618px] lg:tw-h-[350px] tw-ml-auto",
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
