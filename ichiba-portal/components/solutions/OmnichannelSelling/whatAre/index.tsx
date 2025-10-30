/* eslint-disable @next/next/link-passhref */
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
const WhatAre = () => {
  const g = useTranslation("omnichannel-selling").t;

  return (
    <div
      className={clsx(
        "tw-px-4 tw-pt-6 tw-pb-10 lg:tw-py-20 tw-overflow-hidden tw-bg-cover",
        "tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Frame_1171275908_07229fc672.svg)]",
        "lg:tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Frame_1171275986_198ad4c1bd.svg)]"
      )}
    >
      <div className="lg:tw-container">
        <h3 className="tw-text-2xl tw-font-bold lg:tw-text-4xl">
          {g("product.title")}
        </h3>
        <div className="tw-mt-5 tw-flex tw-overflow-x-scroll lg:tw-overflow-x-auto tw-gap-4 tw-scroll-px-2 tw-scroll-mx-48 lg:tw-relative lg:tw-pb-5 lg:tw-mt-[50px]">
          {(
            g("product.items", {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className="tw-min-w-[237px] tw-h-[280px] lg:tw-h-[363px] lg:tw-min-w-[342px] tw-rounded-lg tw-border tw-border-[#ddd] tw-p-4 tw-grid tw-content-between tw-bg-white "
            >
              <div>
                <Image
                  src={value.icons}
                  alt={value.title}
                  width={32}
                  height={32}
                  className="lg:tw-w-12"
                />
                <div className="tw-mt-5 tw-font-bold lg:tw-text-xl">{value.title}</div>
                <div className="tw-mt-2 tw-text-sm lg:tw-text-base">{value.content}</div>
              </div>
              <Link
                href={value.link}
                className="tw-block tw-no-underline tw-text-sm tw-font-medium tw-text-[#F57C00]"
              >
                {g("product.viewMore")}{" "}
                <FontAwesomeIcon icon={faArrowRight} className="tw-ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default WhatAre;
