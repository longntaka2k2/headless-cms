import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SvgIcon from "@/components/common/SvgIcon";

export default function Technology() {
  const { t } = useTranslation("fashion-beauty");
  return (
    <div
      className={clsx(
        "tw-py-6 lg:tw-pt-20 lg:tw-pb-11 tw-overflow-hidden tw-bg-cover",
        "tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Frame_1171275908_07229fc672.svg)]",
        "lg:tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Frame_1171275986_198ad4c1bd.svg)]",
      )}
    >
      <div className="lg:tw-container tw-px-4">
        <h2 className="tw-text-2xl tw-font-bold lg:tw-text-4xl">
          {t("technology.heading")}
        </h2>
        <div
          className={clsx(
            "tw-mt-5 tw-flex tw-overflow-x-scroll tw-gap-4 tw-scroll-px-2 tw-scroll-mx-48",
            "lg:tw-overflow-x-auto lg:tw-relative lg:tw-pb-5 lg:tw-mt-[50px] tw-pb-3",
          )}
        >
          {(
            t("technology.items", {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-min-w-[237px] tw-h-[280px] tw-rounded-lg tw-border tw-border-[#ddd] tw-p-4",
                "lg:tw-h-[332px] lg:tw-min-w-[282px] tw-grid tw-content-between tw-bg-white",
              )}
            >
              <div>
                <div
                  style={{
                    background:
                      "linear-gradient(0deg, #FF7400 -0.66%, #FFAB52 99.49%)",
                  }}
                  className="tw-w-10 tw-h-10 lg:tw-w-14 lg:tw-h-14 tw-rounded-[10px] tw-flex tw-justify-center tw-items-center"
                >
                  <SvgIcon
                    icon={value.icon}
                    width={32}
                    height={32}
                    className="lg:tw-hidden"
                  />
                  <SvgIcon
                    icon={value.icon}
                    width={56}
                    height={56}
                    className="tw-hidden lg:tw-block"
                  />
                </div>
                <div className="tw-mt-5 tw-font-bold">{value.title}</div>
                <div className="tw-mt-2 tw-text-sm">{value.content}</div>
              </div>
              <Link
                href={value.link}
                className="tw-block tw-no-underline tw-text-sm tw-font-medium tw-text-[#F57C00]"
              >
                {t("technology.learnMore")}
                <FontAwesomeIcon icon={faArrowRight} className="tw-ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
