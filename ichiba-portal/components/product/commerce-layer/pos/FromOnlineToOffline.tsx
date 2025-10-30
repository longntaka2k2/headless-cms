import SvgIcon from "@/components/common/SvgIcon";
import clsx from "clsx";
import Link from "next/link";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "next-i18next";
import Image from "next/image";

const FromOnlineToOffline = () => {
  const { t } = useTranslation("pos");
  return (
    <div
      className={clsx(
        "tw-relative tw-py-6 lg:tw-py-20 tw-overflow-hidden tw-bg-cover",
        "tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Frame_1171275908_07229fc672.svg)]",
        "lg:tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Frame_1171275986_198ad4c1bd.svg)]",
      )}
    >
      <div className="tw-container tw-flex tw-flex-col lg:tw-flex-row tw-justify-between">
        <div className="lg:tw-w-[40%]">
          <h2 className="tw-text-2xl tw-leading-8 lg:tw-text-4xl lg:tw-leading-[48px] tw-font-bold tw-mb-5 lg:tw-mb-0">
            {t("fromOnline.title")}
          </h2>
        </div>
        <div className="lg:tw-w-[55%] tw-grid tw-gap-4 lg:tw-gap-6">
          {(
            t("fromOnline.items", {
              returnObjects: true,
            }) as string[]
          ).map((item: any, index) => {
            return (
              <div
                key={index}
                style={{
                  boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.05)",
                }}
                className={clsx(
                  "tw-bg-white tw-border tw-border-[#DDD]",
                  "tw-flex tw-gap-4 lg:tw-gap-5 tw-rounded-lg lg:tw-rounded-2xl tw-p-4 lg:tw-p-6",
                )}
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={32}
                  height={32}
                  quality={100}
                  className="tw-max-w-[32px] tw-max-h-[32px] lg:tw-max-w-[56px] lg:tw-max-h-[56px] tw-w-full tw-h-full"
                />

                <div className="">
                  <h3 className="tw-mb-2 tw-text-base lg:tw-text-xl tw-font-bold">
                    {item.title}
                  </h3>
                  <p className="tw-mb-4 lg:tw-mb-6 tw-text-sm lg:tw-text-base">
                    {item.content}
                  </p>
                  <Link
                    href={item.link}
                    target="_blank"
                    className="tw-block tw-no-underline tw-text-sm tw-font-medium tw-text-[#F57C00]"
                  >
                    {t("fromOnline.learnMore")}
                    <FontAwesomeIcon icon={faArrowRight} className="tw-ml-2" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FromOnlineToOffline;
