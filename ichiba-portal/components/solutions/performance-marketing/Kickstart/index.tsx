import SvgIcon from "@/components/common/SvgIcon";
import Image from "next/image";
import headerRight from "@/public/solutions/performance-marketing/header-right.png";
import iconBgKickstart from "@/public/solutions/performance-marketing/icon-bg-kickstart.png";
import bgVideo from "@/public/solutions/performance-marketing/bg-video.png";
import imgVideo from "@/public/solutions/performance-marketing/img-video.png";
import conversionPerformance from "@/public/solutions/performance-marketing/conversion-performance.png";
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export const Kickstart = () => {
  const t = useTranslation("performance-marketing").t;

  const itemSolutions = [
    {
      icon: "svg-icon-project",
      quantity: "100",
      solutionName: t("kickstart.solutionTitle.0"),
    },
    {
      icon: "svg-icoon-expert",
      quantity: "20",
      solutionName: t("kickstart.solutionTitle.1"),
    },
    {
      icon: "svg-icon-partner",
      quantity: "15",
      solutionName: t("kickstart.solutionTitle.2"),
    },
    {
      icon: "svg-icon-customer",
      quantity: "200",
      solutionName: t("kickstart.solutionTitle.3"),
    },
  ];

  return (
    <section className="tw-relative tw-mb-6 lg:tw-mb-[50px] tw-overflow-hidden">
      <div
        className={clsx(
          "tw-absolute tw-top-0 tw-right-[2%] -tw-z-1",
          "tw-w-[146px] tw-h-[117px]",
          "lg:tw-w-[403px] lg:tw-h-[324px]",
        )}
      >
        <Image
          src={headerRight}
          alt="headerRight"
          className="tw-w-full tw-h-full"
        />
      </div>

      <div className="tw-container tw-pt-6 lg:tw-pt-[120px]">
        <h1 className="tw-w-[80%] tw-mb-2 lg:tw-mb-0 tw-text-2xl lg:tw-text-5xl tw-font-bold tw-leading-8 lg:tw-leading-[56px]">
          {t("kickstart.title")}
        </h1>

        {/* Mobile */}
        <div className="tw-w-full md:tw-hidden tw-mb-6">
          <div className="tw-mb-6">
            <p className="tw-mb-0 tw-text-sm">{t("kickstart.subTitle.0")}</p>
            <p className="tw-mb-0 tw-text-sm">{t("kickstart.subTitle.1")}</p>
          </div>
          <Link
            target="_blank"
            href="/contact-sales"
            className="tw-text-sm tw-block tw-no-underline tw-mt-6 tw-w-max mb-4 tw-font-medium tw-rounded-lg tw-bg-[#F57C00] tw-px-4 lg:tw-px-6 tw-py-3 tw-text-white"
          >
            {t("contact")}{" "}
            <FontAwesomeIcon icon={faArrowRight} className="tw-ml-2" />
          </Link>
          <div className="tw-relative tw-w-[358px] tw-h-[346px] tw-mx-auto tw-mb-32">
            <Image
              src={bgVideo}
              alt="bgVideo"
              className="tw-w-full tw-h-full"
            />

            <div
              className={clsx(
                "tw-w-[293px] tw-h-[287px] tw-rounded-[5px] tw-overflow-hidden",
                "tw-absolute tw-top-[5%] tw-left-[5%]",
              )}
            >
              <Image
                src={imgVideo}
                alt="imgVideo"
                className="tw-w-full tw-h-full"
              />
            </div>

            <div className="tw-absolute tw-left-[-30%] tw-bottom-[-30%] tw-w-[391px] tw-h-[172px]">
              <Image
                src={iconBgKickstart}
                alt="iconBgKickstart"
                className="tw-w-full tw-h-full"
              />
            </div>

            <div
              className={clsx(
                "tw-absolute tw-bottom-[-30%] tw-right-0",
                "tw-w-[279px] tw-h-[181px] tw-rounded-[10px] tw-overflow-hidden tw-py-3 tw-px-4",
                "tw-bg-[linear-gradient(114deg, rgba(255, 255, 255, 0.60) 3.87%, rgba(243, 245, 247, 0.68) 99.44%, rgba(252, 252, 252, 0.50) 100.62%)]",
              )}
            >
              <div className="tw-w-full tw-h-full tw-rounded-[10px] tw-overflow-auto">
                <Image
                  src={conversionPerformance}
                  alt="conversionPerformance"
                  className="tw-w-full tw-h-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop */}
        <div className="md:tw-flex tw-gap-6 tw-hidden tw-mb-15">
          <div className="tw-relative tw-w-[52%]">
            <div className="tw-pt-6">
              <p className="tw-text-base tw-mb-0">
                {t("kickstart.subTitle.0")}
              </p>
              <p className="tw-text-base tw-mb-0">
                {t("kickstart.subTitle.1")}
              </p>
              <Link
                target="_blank"
                href="/contact-sales"
                className="tw-text-sm tw-block tw-no-underline tw-mt-6 tw-w-max  tw-font-medium tw-rounded-lg tw-bg-[#F57C00] tw-px-4 lg:tw-px-6 tw-py-3 tw-text-white"
              >
                {t("contact")}{" "}
                <FontAwesomeIcon icon={faArrowRight} className="tw-ml-2" />
              </Link>
            </div>

            <div className="lg:tw-block tw-hidden tw-absolute tw-left-[-20%] tw-bottom-0 tw-w-[623px] tw-h-[293px]">
              <Image
                src={iconBgKickstart}
                alt="iconBgKickstart"
                className="tw-w-full tw-h-full"
              />
            </div>

            <div
              className={clsx(
                "lg:tw-absolute tw-bottom-[10%] tw-right-0",
                "tw-max-w-[455px] tw-max-h-[294px] tw-rounded-2xl tw-overflow-hidden tw-py-4 tw-px-5 tw-flex",
                "tw-bg-[linear-gradient(114deg, rgba(255, 255, 255, 0.60) 3.87%, rgba(243, 245, 247, 0.68) 99.44%, rgba(252, 252, 252, 0.50) 100.62%)]",
              )}
            >
              <div className="tw-w-full tw-h-full tw-rounded-[10px] tw-overflow-auto">
                <Image
                  src={conversionPerformance}
                  alt="conversionPerformance"
                  className="tw-w-full tw-h-full"
                />
              </div>
            </div>
          </div>

          <div className="tw-max-w-[48%] tw-w-full">
            <div className="tw-relative tw-max-w-[585px] tw-max-h-[567px] tw-w-full tw-h-full">
              <Image
                src={bgVideo}
                alt="bgVideo"
                className="tw-w-full tw-h-full"
              />

              <div
                className={clsx(
                  "tw-absolute tw-top-[5%] tw-left-[5%] tw-rounded-lg tw-overflow-hidden",
                  "md:tw-max-w-[350px] md:tw-max-h-[345px] lg:tw-max-w-[479px] lg:tw-max-h-[470px] tw-w-full tw-h-full",
                )}
              >
                <Image
                  src={imgVideo}
                  alt="imgVideo"
                  className="tw-w-full tw-h-full"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="tw-grid tw-grid-cols-2 lg:tw-flex tw-justify-between tw-justify-items-center">
          {itemSolutions.map((item, index) => {
            return (
              <div
                key={index}
                className="tw-flex tw-items-center tw-gap-3 lg:tw-gap-6"
              >
                <div>
                  <SvgIcon
                    icon={item.icon}
                    width={48}
                    height={48}
                    className="lg:tw-hidden"
                  />
                  <SvgIcon
                    icon={item.icon}
                    width={60}
                    height={60}
                    className="tw-hidden lg:tw-block"
                  />
                </div>
                <div>
                  <p className="tw-mb-2 tw-text-xl lg:tw-text-3xl tw-font-bold">
                    {item.quantity}+
                  </p>
                  <p className="tw-mb-0 tw-text-sm lg:tw-text-base">
                    {item.solutionName}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
