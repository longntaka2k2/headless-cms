import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import CountUp from "react-countup";
import Image from "next/image";
const BannerMultichannelFulfillment = () => {
  const s = useTranslation("multichannel-fulfill").t;
  return (
    <div className="lg:tw-pt-[120px] tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Rectangle_7277_6da838dd19.png)] tw-bg-no-repeat tw-bg-contain">
      <div className="tw-py-6 tw-px-4 lg:tw-container lg:tw-px-0 lg:tw-pb-12">
        <h1
          className={clsx(
            "lg:tw-text-5xl tw-font-bold tw-text-2xl tw-text-center tw-max-w-[1096px] tw-mx-auto",
          )}
        >
          {s("banner.title.0")}
          <span className="tw-text-[#F57C00] tw-animate-changeColor tw-ease tw-delay-500">
            {s("banner.title.1")}
          </span>
          {s("banner.title.2")}
        </h1>
        <div className="tw-flex tw-justify-center tw-mt-5  lg:tw-text-base tw-text-sm tw-font-medium tw-gap-7">
          <Link
            href={"/contact-sales"}
            target="_blank"
            rel="noreferrer noopener canonical"
            className="tw-no-underline  tw-px-7 tw-py-3 tw-border tw-border-[#F57C00] text-white text-center tw-bg-[#F57C00] tw-rounded-lg"
          >
            {s("banner.contact")}
          </Link>
          <Link
            target="_blank"
            rel="noreferrer noopener canonical"
            href={"/case-studies"}
            className="tw-no-underline  tw-px-7 tw-py-3 tw-border tw-border-[#F57C00] tw-text-[#F57C00] tw-bg-white text-center tw-rounded-lg"
          >
            {s("banner.readCase")}
          </Link>
        </div>
        <div className="tw-my-6 lg:tw-mt-[80px] lg:tw-mb-[48px]">
          <Image
            src="https://cms-strapi.ichiba.net/uploads/Video_1c6d503264.png"
            alt="banner"
            width={1058}
            height={557}
            className="tw-mx-auto banner-multichannel tw-transition-all"
            style={{ transitionTimingFunction: "ease" }}
          />
        </div>
        <div className="tw-grid tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-5 tw-mt-6 ">
          {(
            s(`banner.items`, {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div key={index} className="tw-flex tw-gap-3 lg:tw-gap-6">
              <div className="tw-min-w-[4px] tw-bg-[linear-gradient(180deg,#1369FE_0%,#47C4FF_100%)] lg:tw-min-w-[8px]"></div>
              <div className="">
                <CountUp
                  className="number tw-text-lg tw-font-bold lg:tw-text-3xl"
                  decimals={value.decimals}
                  duration={2}
                  start={0}
                  end={value.number}
                  suffix={value.unit}
                />
                <div className="tw-mt-1 tw-text-sm tw-font-medium lg:tw-text-base">
                  {value.title}
                </div>
                <div className="tw-text-sm tw-font-medium tw-text-[#0F62FE] lg:tw-text-base">
                  {value.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default BannerMultichannelFulfillment;
