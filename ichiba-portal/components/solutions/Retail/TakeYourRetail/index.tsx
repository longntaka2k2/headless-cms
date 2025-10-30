import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SvgIcon from "@/components/common/SvgIcon";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

export default function TakeYourRetail() {
  const { t } = useTranslation("retail");

  return (
    <div
      className={clsx(
        "tw-relative tw-py-6 lg:tw-py-20 tw-overflow-hidden tw-bg-cover",
        "tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Frame_1171275908_07229fc672.svg)]",
        "lg:tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Frame_1171275986_198ad4c1bd.svg)]",
      )}
    >
      <div className="lg:tw-container tw-px-4">
        <div className="tw-text-2xl tw-font-bold lg:tw-text-4xl">
          {t("take.title")}
        </div>

        <div className="tw-mt-6 lg:tw-mt-15">
          <div
            className={clsx(
              "lg:tw-hidden",
              "tw-mt-5 tw-flex tw-overflow-x-scroll tw-gap-4 tw-scroll-px-2 tw-scroll-mx-48 tw-pb-3",
            )}
          >
            {(
              t("take.items", {
                returnObjects: true,
              }) as string[]
            ).map((value: any, index: number) => (
              <div
                key={index}
                className={clsx(
                  "tw-min-w-[237px] tw-h-[280px] tw-rounded-lg tw-border tw-border-[#ddd] tw-p-4",
                  "tw-grid tw-content-between tw-bg-white",
                )}
              >
                <div>
                  <div
                    style={{
                      background:
                        "linear-gradient(0deg, #FF7400 -0.66%, #FFAB52 99.49%)",
                    }}
                    className="tw-w-10 tw-h-10 tw-rounded-[10px] tw-flex tw-justify-center tw-items-center"
                  >
                    <SvgIcon icon={value.icon} width={32} height={32} />
                  </div>
                  <div className="tw-mt-5 tw-font-bold">{value.title}</div>
                  <div className="tw-mt-2 tw-text-sm">{value.content}</div>
                </div>
                <Link
                  href={value.link}
                  className="tw-block tw-no-underline tw-text-sm tw-font-medium tw-text-[#F57C00]"
                >
                  {t("take.learnMore")}
                  <FontAwesomeIcon icon={faArrowRight} className="tw-ml-2" />
                </Link>
              </div>
            ))}
          </div>

          <div className="tw-hidden lg:tw-grid tw-grid-cols-3 tw-gap-15">
            {(
              t("take.items", {
                returnObjects: true,
              }) as string[]
            ).map((value: any, index: number) => (
              <div
                key={index}
                className={clsx(
                  "tw-rounded-lg tw-border tw-border-[#ddd] tw-p-4",
                  "tw-h-[332px] tw-grid tw-content-between tw-bg-white",
                )}
              >
                <div>
                  <div
                    style={{
                      background:
                        "linear-gradient(0deg, #FF7400 -0.66%, #FFAB52 99.49%)",
                    }}
                    className="tw-w-14 tw-h-14 tw-rounded-[10px] tw-flex tw-justify-center tw-items-center"
                  >
                    <SvgIcon icon={value.icon} width={56} height={56} />
                  </div>
                  <div className="tw-mt-5 tw-font-bold">{value.title}</div>
                  <div className="tw-mt-2 tw-text-sm">{value.content}</div>
                </div>
                <Link
                  href={value.link}
                  className="tw-block tw-no-underline tw-text-sm tw-font-medium tw-text-[#F57C00]"
                >
                  {t("take.learnMore")}
                  <FontAwesomeIcon icon={faArrowRight} className="tw-ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
