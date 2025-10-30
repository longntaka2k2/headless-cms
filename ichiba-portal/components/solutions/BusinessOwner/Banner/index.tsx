import { clsx } from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";
const BannerBusiness = () => {
  const b = useTranslation("business-owner").t;

  return (
    <div
      className={clsx(
        "tw-py-6 tw-px-4 lg:tw-px-0 lg:tw-py-15",
        "tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Your_business_can_t_spread_out_3ee02ef24c.png)] tw-bg-contain tw-bg-no-repeat",
        "lg:tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Group_1171275902_072ef73caa.png)] tw-bg-center"
      )}
    >
      <div className="tw-text-center">
        <div className="tw-text-[#1135A8] tw-text-xs tw-font-bold lg:tw-text-sm">
          {b("banner.label")}
        </div>
        <h1 className="tw-my-2 lg:tw-my-3 tw-font-bold tw-text-xl lg:tw-text-3xl lg:tw-max-w-[800px] lg:tw-mx-auto">
          {b("banner.title")}
        </h1>
        <div className="tw-text-[#666] tw-text-sm lg:tw-text-base lg:tw-max-w-[800px] lg:tw-mx-auto">
          <div>{b("banner.content.0")}</div>
          <div>{b("banner.content.1")}</div>
          <div>{b("banner.content.2")}</div>
        </div>
        <div
          className={clsx(
            "tw-mt-12 lg:tw-mt-28 tw-border-l-4 tw-border-[#F57C00] tw-font-bold tw-w-max tw-mx-auto tw-px-3 tw-py-1",
            "tw-bg-[linear-gradient(90deg,#FFF7E6_0.04%,rgba(255,247,230,0.00)_94.29%)] lg:tw-text-5xl",
          )}
        >
          {b("weFeel.title")}
        </div>
        <div className="tw-mt-3 tw-mx-4 lg:tw-max-w-[800px] lg:tw-mt-4 lg:tw-text-base lg:tw-mx-auto">{b("weFeel.content")}</div>
        <Image src={"https://cms-strapi.ichiba.net/uploads/Frame_2_9d122f73a6.png"} alt={b("banner.label")} width={561} height={561} className="tw-mx-auto lg:tw-hidden" />
        <Image src={"https://cms-strapi.ichiba.net/uploads/Frame_2_fdabface68.png"} alt={b("banner.label")} width={993} height={552} className="tw-mx-auto lg:tw-block tw-hidden lg:tw-mt-12" />
      </div>
    </div>
  );
};

export default BannerBusiness;
