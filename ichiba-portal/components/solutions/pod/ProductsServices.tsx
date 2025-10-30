import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SvgIcon from "@/components/common/SvgIcon";

export const ProductsServices = () => {
  const { t } = useTranslation("pod");
  return (
    <div className={clsx("tw-py-6 lg:tw-pt-20 lg:tw-pb-11 tw-overflow-hidden")}>
      <div className="lg:tw-container tw-px-4">
        <h2 className="tw-text-2xl tw-font-bold lg:tw-text-4xl tw-text-center">
          {t("porductsServices.heading")}
        </h2>
        <div
          className={clsx(
            "tw-mt-5 tw-flex lg:tw-grid tw-grid-cols-2 tw-overflow-x-scroll tw-no-scrollbar tw-gap-4 tw-scroll-px-2 tw-scroll-mx-48",
            "lg:tw-overflow-x-auto lg:tw-relative lg:tw-pb-5 lg:tw-mt-[50px]",
          )}
        >
          {(
            t("porductsServices.items", {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-min-w-[237px] tw-h-[280px] tw-rounded-lg tw-p-4 lg:tw-p-8",
                "lg:tw-h-[332px] lg:tw-min-w-[282px] tw-grid tw-content-between tw-bg-[#F7F8FC]",
              )}
            >
              <div>
                <div
                  style={{
                    background: `${value.bgIcon}`,
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
                {t("porductsServices.learnMore")}
                <FontAwesomeIcon icon={faArrowRight} className="tw-ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProductsServices;
