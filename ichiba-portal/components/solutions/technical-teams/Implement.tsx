import SvgIcon from "@/components/common/SvgIcon";
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";

const Implement = () => {
  const i = useTranslation("technical-teams").t;
  return (
    <div className="tw-pt-6 tw-pb-10 lg:tw-pt-15 lg:tw-pb-12">
      <div className="tw-container lg:tw-text-center">
        <div className="lg:tw-w-[55%] tw-mx-auto">
          <p className="tw-mb-2 lg:tw-mb-4 tw-text-xs lg:tw-text-sm tw-font-bold tw-uppercase tw-text-brand-secondary">
            {i("implement.label")}
          </p>
          <h1 className="tw-mb-2 lg:tw-mb-6 tw-text-2xl lg:tw-text-5xl lg:tw-leading-[56px] tw-font-bold">
            {i("implement.heading")}
          </h1>
          <p className="tw-mb-6 tw-text-sm lg:tw-text-base tw-text-ic-ink-5">
            {i("implement.subHeading")}
          </p>
          <div className="tw-flex tw-gap-3 lg:tw-gap-4 tw-justify-center">
            <Link
              href={"/contact-sales"}
              className={clsx(
                "tw-rounded-lg tw-py-3 tw-w-[133px] lg:tw-py-[14px] lg:tw-w-[200px] tw-bg-[#F57C00] tw-text-center",
                "tw-font-medium tw-text-sm tw-inline-block tw-text-white tw-no-underline tw-bg-[#F57C00]",
              )}
            >
              {i("implement.contactSales")}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="container 2xl:tw-hidden">
        <div
          className={clsx(
            "tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Frame_1171276518_2248b08a0e.svg)] tw-bg-cover tw-pt-10 tw-px-4",
            "tw-h-[246px] sm:tw-h-[456px] tw-mx-auto tw-rounded-xl",
          )}
        >
          <div className="tw-relative tw-group">
            <Image
              src="https://cms-strapi.ichiba.net/uploads/Video_with_bg_cfeee77982.svg"
              alt="#"
              width={834}
              height={551}
              className="tw-mx-auto tw-hidden sm:tw-block"
            />
            <Image
              src="https://cms-strapi.ichiba.net/uploads/Video_with_bg_b834c633d6.svg"
              alt="#"
              width={332}
              height={288}
              className="tw-mx-auto tw-min-h-[276px] sm:tw-hidden"
            />
            <div
              style={{
                background: "rgba(255, 255, 255, 0.80)",
              }}
              className={clsx(
                "tw-absolute tw-top-[50%] tw-translate-y-[-50%] tw-left-[50%] tw-translate-x-[-50%] tw-cursor-pointer",
                "tw-flex tw-items-center tw-justify-center tw-w-[196px] tw-h-[44px]",
                "tw-bg-[rgba(255, 255, 255, 0.80)] tw-rounded-[80px] tw-border-2 tw-border-brand-secondary group-hover:tw-opacity-70",
              )}
            >
              <SvgIcon icon="svg-play-video" width={24} height={24} />
              <p className="tw-mb-0 tw-text-sm lg:tw-text-base tw-text-[#1135A8] tw-text-center tw-font-bold tw-uppercase">
                {i("implement.seeSolution")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className="2xl:tw-px-[260px] tw-hidden 2xl:tw-block">
        <div
          className={clsx(
            "tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Frame_1171276518_2248b08a0e.svg)] tw-bg-cover tw-pt-12",
            "tw-h-[456px] mx-auto tw-rounded-[40px]",
          )}
        >
          <div className="tw-w-[834px] tw-h-[520px] tw-mx-auto tw-relative tw-group">
            <Image
              src="https://cms-strapi.ichiba.net/uploads/Video_with_bg_cfeee77982.svg"
              alt="#"
              width={834}
              height={551}
              className="tw-w-full tw-h-full"
            />
            <div
              style={{
                background: "rgba(255, 255, 255, 0.80)",
              }}
              className={clsx(
                "tw-absolute tw-top-[50%] tw-translate-y-[-50%] tw-left-[50%] tw-translate-x-[-50%] tw-cursor-pointer",
                "tw-flex tw-items-center tw-justify-center tw-w-[240px] tw-h-[48px]",
                "tw-bg-[rgba(255, 255, 255, 0.80)] tw-rounded-[80px] tw-border-2 tw-border-brand-secondary group-hover:tw-opacity-70",
              )}
            >
              <SvgIcon icon="svg-play-video" width={24} height={24} />
              <p className="tw-mb-0 tw-text-sm lg:tw-text-base tw-text-[#1135A8] tw-font-bold tw-uppercase">
                {i("implement.seeSolution")}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="tw-mt-3 tw-container">
        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(231,245,255,1) 0%, rgba(255,255,255,0) 100%)",
          }}
          className={clsx(
            "tw-bg-[url(https://cms-strapi.ichiba.net/uploads/hero_background_dots_1_d7a1784167.svg)] tw-bg-cover",
            "tw-h-[230px] lg:tw-h-[374px]  tw-rounded-xl lg:tw-rounded-[40px] tw-z-10",
            "tw-pt-20 sm:tw-pt-6 md:tw-pt-28 lg:tw-pt-[158px]"
          )}
        >
          <p className="tw-mb-1 lg:tw-mb-2 tw-text-xs lg:tw-text-lg tw-text-brand-primary tw-text-center">
            {i("implement.iChiba")}
          </p>
          <h2 className="tw-mb-4 lg:tw-mb-10 tw-text-2xl tw-font-bold lg:tw-text-4xl tw-text-center">
            {i("implement.byTheNumbers")} 
          </h2>
          <div className="tw-grid tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-4 lg:tw-gap-5 sm:tw-w-[90%] tw-mx-auto">
            {(
              i("implement.items", {
                returnObjects: true,
              }) as string[]
            ).map((value: any, index: number) => (
              <div
                key={index}
                className="tw-flex tw-gap-5 lg:tw-gap-[30px] tw-w-[170px] lg:tw-w-[232px]"
              >
                <div
                  style={{
                    background:
                      "linear-gradient(180deg, #1369FE 0%, #47C4FF 100%)",
                  }}
                  className="tw-min-w-[6px] tw-max-w-[6px] tw-h-full"
                ></div>
                <div>
                  <p className="tw-mb-1 lg:tw-mb-2 tw-text-xl lg:tw-text-3xl tw-font-bold">
                    {value.title}
                  </p>
                  <p className="tw-mb-0 tw-text-sm lg:tw-text-base">
                    {value.subTitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Implement;
