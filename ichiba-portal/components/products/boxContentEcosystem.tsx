import Link from "next/link";
import SvgIcon from "../common/SvgIcon";
import { useTranslation } from "next-i18next";
import clsx from "clsx";
import Image from "next/image";

interface BoxContentProps {
  icon?: string;
  heading?: string;
  subHeading?: string;
  contentLable?: string;
  title?: string;
  subTitle?: string;
  list?: [];
  link?: string;
}

export default function BoxContentEcosystem(props: BoxContentProps) {
  const { t } = useTranslation("products");

  return (
    <>
      {props?.icon && (
        <div className="tw-flex tw-gap-3 lg:tw-gap-4 tw-items-center tw-mb-2 lg:tw-mb-6">
          <Image
            src={props.icon}
            width={64}
            height={64}
            alt=""
            className="tw-w-10 tw-h-10 lg:tw-w-16 lg:tw-h-16"
          />

          <div>
            <h2 className="tw-mb-0 tw-text-xl lg:tw-text-3xl tw-font-bold">
              {props?.heading}
            </h2>
            <p className="tw-text-sm lg:tw-text-base tw-mb-0">
              {props?.subHeading}
            </p>
            {props?.contentLable && (
              <p
                className={clsx(
                  "tw-text-sm lg:tw-text-base tw-mb-0 tw-text-blue-6 tw-py-[2px] tw-px-2 tw-bg-blue-1 tw-rounded tw-w-max",
                )}
              >
                {props?.contentLable}
              </p>
            )}
          </div>
        </div>
      )}

      <div>
        {props?.title && (
          <h3 className="tw-mb-1 tw-text-base lg:tw-text-2xl tw-font-bold">
            {props?.title}
          </h3>
        )}

        {props?.subTitle && (
          <p className="tw-mb-0 tw-text-sm lg:tw-text-base tw-text-ic-black-5">
            {props?.subTitle}
          </p>
        )}
      </div>

      <div className="tw-grid tw-gap-3 lg:tw-gap-4 tw-my-4 lg:tw-my-5">
        {props?.list?.map((item: any, index: number) => {
          return (
            <div
              key={index}
              className={clsx(
                "tw-flex tw-items-center tw-gap-4 tw-mb-0",
                item.title === "" ? "tw-hidden" : "",
              )}
            >
              <div>
                <SvgIcon icon="svg-icon-check" width={24} height={24} />
              </div>
              <span className="tw-text-sm lg:tw-text-base tw-mb-0">
                {item?.title}
              </span>
            </div>
          );
        })}
      </div>

      <Link
        href={`${props.link}`}
        className="tw-flex tw-text-sm lg:tw-text-base tw-font-medium tw-items-center tw-gap-1 tw-text-[#F57C00] tw-no-underline"
      >
        {t("learnMore")}
        <div>
          <SvgIcon icon="svg-arrow-right" width={24} height={24} />
        </div>
      </Link>
    </>
  );
}
