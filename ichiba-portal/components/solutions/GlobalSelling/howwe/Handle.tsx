/* eslint-disable @next/next/link-passhref */
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { clsx } from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";

const Handle = () => {
  const g = useTranslation("global-selling").t;

  return (
    <div className="lg:tw-flex lg:tw-gap-[100px] lg:tw-container lg:tw-mt-10 lg:tw-mb-15">
      <div className="tw-mt-6 lg:tw-mt-0 tw-pt-4 tw-mb-10 lg:tw-mb-0 tw-px-4 lg:tw-p-10 tw-bg-[#EFF0FB] tw-rounded-lg lg:tw-rounded-2xl">
        <h3 className="tw-font-bold lg:tw-text-2xl">{g("handle.title")}</h3>
        <div className="lg:tw-flex lg:tw-mt-10">
          <div >
            <div className="tw-flex tw-gap-3 lg:tw-gap-3 tw-items-start tw-mt-4 ">
              <Image
                src="https://cms-strapi.ichiba.net/uploads/PART_Handling_v2_1_ca0a04e4a5.svg"
                alt=""
                width={32}
                height={32}
                className="lg:tw-min-w-[48px]"
              />
              <div className="tw-text-sm lg:tw-text-base">
                {g("multi.automatically")}
              </div>
            </div>
            <div className="tw-flex tw-gap-3 lg:tw-gap-3 tw-mt-10 tw-items-start">
              <Image
                src="https://cms-strapi.ichiba.net/uploads/product_sec10_3_1_7001d12259.svg"
                alt=""
                width={32}
                height={32}
                className="lg:tw-min-w-[48px]"
              />
              <div className="tw-text-sm lg:tw-text-base">
                {g("multi.standar")}
              </div>
            </div>
          </div>
          <div className="tw-relative tw-h-[140px] lg:tw-w-[328px]">
            <Image
              src="https://cms-strapi.ichiba.net/uploads/dd_cbd93924b9.png"
              alt=""
              width={328}
              height={353}
              className="tw-max-w-[172px] lg:tw-max-w-[328px] tw-absolute tw-right-0 lg:tw-right-[-120px]"
            />
          </div>
        </div>
      </div>
      <div className="tw-mt-2 lg:tw-mt-0 tw-rounded-lg tw-p-3 lg:tw-p-6 tw-border tw-border-[#DDD] lg:tw-max-w-[408px] lg:tw-rounded-2xl">
        <h3 className="tw-font-bold lg:tw-text-2xl tw-mb-3">
          {g("market.title")}
        </h3>
        <div className="tw-p-3 lg:tw-px-5 lg:tw-py-4 tw-bg-[#F9F5EF] tw-rounded-lg">
          <div className="tw-text-sm lg:tw-text-lg tw-font-bold">
            {g("market.brand.title")}
          </div>
          <div className="tw-text-sm lg:tw-text-base">
            {g("market.brand.content")}
          </div>
        </div>
        <div className="tw-p-3 lg:tw-px-5 lg:tw-py-4 tw-bg-[#F9F5EF] tw-mt-2 lg:tw-mt-6 tw-rounded-lg">
          <div className="tw-text-sm lg:tw-text-lg tw-font-bold">
            {g("market.seo.title")}
          </div>
          <div className="tw-text-sm lg:tw-text-base">
            {g("market.seo.content")}
          </div>
        </div>
        <div className="tw-mt-4 lg:tw-mt-6 tw-text-right">
          <Link
            href={"/solutions/performance-marketing-growth-solution"}
            className="tw-no-underline tw-text-[#F57C00] tw-text-sm"
          >
            {g("market.viewMore")} <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Handle;
