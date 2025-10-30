import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";
const HowItWork = () => {
  const p = useTranslation("proxy-shopping").t;

  return (
    <div
      className={clsx(
        "tw-py-10 lg:tw-py-16",
        "tw-bg-[url(https://cms-strapi.ichiba.net/uploads/aaa_259bf0ef74.png)] tw-bg-cover tw-bg-[#0d133bf5] tw-text-white",
        "lg:tw-bg-[url(https://cms-strapi.ichiba.net/uploads/641dbd42118dea1144e78b7c_bg_jpg_1_c80163757c.png)]"
      )}
    >
      <div className="tw-px-4 lg:tw-container">
        <div className="tw-max-w-[840px]">
        <div className="tw-uppercase tw-opacity-80 tw-text-sm lg:tw-text-lg">
          {p("howItWork.label")}
        </div>
        <h3 className="tw-my-2 tw-text-2xl tw-font-bold lg:tw-text-3xl">
          {p("howItWork.title")}
        </h3> 
        <div className="tw-opacity-80 tw-text-sm lg:tw-text-lg">{p("howItWork.content")}</div>
        </div>
      </div>
      <div className="tw-mt-6 tw-flex tw-overflow-x-scroll tw-py-4 tw-pl-4 tw-gap-4 lg:tw-container">
        {(
          p(`howItWork.steps`, {
            returnObjects: true,
          }) as string[]
        ).map((value: any, index: number) => (
          <div
            key={index}
            className={clsx(
              "tw-border tw-border-[rgba(255,255,255,0.08)] tw-bg-[rgba(255,255,255,0.08)] lg:tw-px-6 lg:tw-py-8",
              "tw-px-4 tw-pt-6 tw-pb-4 tw-min-w-[280px] tw-rounded-lg tw-shadow-[0px_0px_20px_0px_rgba(133,133,133,0.24)]",
              "tw-relative"
            )}
          >
            <div className="tw-py-1 tw-px-2 tw-uppercase tw-bg-[#454344] tw-text-xs tw-absolute tw-top-[-10px] tw-z-1 tw-rounded">{p("howItWork.step")} {index + 1}</div>
            <div className="tw-flex tw-items-center tw-gap-2 lg:tw-block">
              <Image src={value.icon} alt={value.title} width={32} height={32} className="lg:tw-w-12" />
              <div className="tw-font-bold tw-text-xl lg:tw-mt-3">{value.title}</div>
            </div>
            <div className="tw-mt-3 tw-opacity-80 tw-text-sm lg:tw-text-base">{value.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default HowItWork;
