import { isEng } from "@/utils/utils";
import { useTranslation } from "next-i18next";
import LottieRenderer from "../common/lottieRenderer";

export default function MultiChannels() {
  const { t: common } = useTranslation("common");
  const isEnVersion = isEng();
  const content = {
    mobile: isEnVersion
      ? "https://cms-strapi.ichiba.net/uploads/moblie_EN_76ef288e9e_60f58dc112.json"
      : "https://cms-strapi.ichiba.net/uploads/mobile_tv_f181804914_e1952ce4ad.json",
    desktop: isEnVersion
      ? "https://cms-strapi.ichiba.net/uploads/web_TA_85e6cbe451_933941aedf.json"
      : "https://cms-strapi.ichiba.net/uploads/web_tv_0567eab2f4_7e563d349d.json",
  };

  return (
    <div className="tw-container tw-flex tw-flex-col tw-items-center tw-gap-6 tw-py-6 lg:tw-py-10 lg:tw-gap-8">
      <h2 className="tw-font-bold tw-text-2xl lg:tw-text-center lg:tw-text-4xl lg:tw-leading-[48px]">
        {common("multiChannelFulfillment")}
      </h2>
      {/* mobile */}
      <div className="lg:tw-hidden">
        <LottieRenderer path={content.mobile} />
      </div>
      {/* desktop */}
      <div className="tw-hidden lg:tw-block">
        <LottieRenderer path={content.desktop} />
      </div>
    </div>
  );
}
