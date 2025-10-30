/* eslint-disable @next/next/link-passhref */
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import Image from "next/image";
const Suggested = () => {
  const g = useTranslation("marketing-teams").t;

  return (
    <div
      className={clsx(
        "tw-px-4 tw-pt-6 tw-pb-10 lg:tw-py-20 tw-overflow-hidden tw-bg-cover tw-bg-no-repeat",
        "tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Suggested_products_for_business_owners_0abf828b6c.png)]",
        "lg:tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Group_1171275907_f5968d62b5.png)]",
      )}
    >
      <div className="lg:tw-container">
        <div className="tw-text-2xl tw-font-bold lg:tw-text-4xl">
          {g("suggested.title")}
        </div>
        <div className="tw-text-lg tw-mt-2">{g("suggested.content")}</div>
        <div className="tw-mt-5 tw-flex lg:tw-grid lg:tw-grid-cols-3 tw-overflow-x-scroll lg:tw-overflow-x-auto tw-gap-4 tw-scroll-px-2 tw-scroll-mx-48 lg:tw-relative lg:tw-pb-5 lg:tw-mt-[50px]">
          {(
            g("suggested.items", {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className="tw-min-w-[237px] lg:tw-w-[383px] tw-rounded-lg tw-border tw-border-[#ddd] tw-p-4 lg:tw-p-6 tw-grid tw-content-between tw-bg-white "
            >
              <div>
                <Image
                  src={value.icon}
                  alt={value.title}
                  width={56}
                  height={56}
                  className=""
                />
                <div className="tw-mt-5 tw-font-bold lg:tw-text-xl">
                  {value.title}
                </div>
                <div className="tw-mt-2 tw-text-sm lg:tw-text-base">
                  {value.content}
                </div>
              </div>
              <Link
                target="_blank"
                rel="noreferrer noopener canonical"
                href={value.link}
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
