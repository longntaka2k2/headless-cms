/* eslint-disable @next/next/link-passhref */
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import SvgIcon from "@/components/common/SvgIcon";
const Suggested = () => {
  const g = useTranslation("operation-teams").t;

  return (
    <div
      className={clsx(
        "tw-px-4 tw-pt-6 tw-pb-10 lg:tw-py-20 tw-overflow-hidden tw-bg-cover tw-bg-no-repeat",
        "tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Suggested_products_for_business_owners_0abf828b6c.png)]",
        "lg:tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Group_1171275907_f5968d62b5.png)]",
      )}
    >
      <div className="lg:tw-container">
        <h2 className="tw-mb-2 tw-text-2xl tw-font-bold lg:tw-text-4xl">
          {g("suggested.title")}
        </h2>
        <p className="tw-mb-0 tw-text-sm lg:tw-text-base">
          {g("suggested.subTitle")}
        </p>
        <div className="tw-mt-5 tw-flex lg:tw-grid lg:tw-grid-cols-3 tw-overflow-x-scroll lg:tw-overflow-x-auto tw-gap-4 tw-scroll-px-2 tw-scroll-mx-48 lg:tw-relative lg:tw-pb-5 lg:tw-mt-[50px]">
          {(
            g("suggested.items", {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className="tw-min-w-[237px] lg:tw-w-[320px] xl:tw-w-[383px] tw-rounded-lg tw-border tw-border-[#ddd] tw-p-4 lg:tw-p-6 tw-grid tw-content-between tw-bg-white "
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
                <div className="tw-mt-5 tw-font-bold lg:tw-text-xl">
                  {value.title}
                </div>
                <div className="tw-mt-2 tw-text-sm lg:tw-text-base">
                  {value.content}
                </div>
              </div>
              <Link
                href={value.link}
                target="_blank"
                rel="noreferrer noopener canonical"
                className="tw-block tw-no-underline tw-text-sm tw-font-medium tw-text-[#F57C00] lg:tw-text-end lg:tw-mt-6"
              >
                {g("suggested.learnMore")}{" "}
                <FontAwesomeIcon icon={faArrowRight} className="tw-ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Suggested;
