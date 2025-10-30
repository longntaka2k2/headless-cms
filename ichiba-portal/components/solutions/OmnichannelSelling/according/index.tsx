import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";
const According = () => {
  const o = useTranslation("omnichannel-selling").t;
  return (
    <div className="tw-m-[24px_28px_160px_16px] lg:tw-max-w-[1050px] lg:tw-mx-auto lg:tw-mt-[90px] lg:tw-mb-[120px] lg:tw-flex lg:tw-items-center tw-relative">
      <div className="tw-rounded-xl lg:tw-text-base tw-bg-[#001033] tw-px-4 tw-py-5 lg:tw-p-[100px_77px_100px_40px] tw-h-max">
        <h2 className="tw-text-white lg:tw-max-w-[380px] lg:tw-text-lg">
          {o("according")}
        </h2>
        <div className="tw-h-[130px] tw-relative lg:tw-w-[200px] lg:tw-hidden">
          <Image
            src={
              "https://cms-strapi.ichiba.net/uploads/omnichannel_banner_channel_2dae76df2ac541e49de3a768c1d79ed2_1_83424a8842.png"
            }
            alt="according"
            width={565}
            height={440}
            className={clsx(
              "tw-bg-white tw-p-1 tw-rounded-lg tw-absolute tw-mt-5 tw-w-[330px] ",
              " tw-overflow-hidden tw-shadow-[0px_0px_11px_0px_rgba(0,0,0,0.11)] ",
            )}
          />
        </div>
      </div>
      <Image
        src={
          "https://cms-strapi.ichiba.net/uploads/omnichannel_banner_channel_2dae76df2ac541e49de3a768c1d79ed2_1_83424a8842.png"
        }
        alt="according"
        width={565}
        height={440}
        className={clsx(
          "tw-bg-white tw-p-1 tw-rounded-lg tw-absolute tw-mt-5 tw-hidden lg:tw-block",
          " tw-overflow-hidden tw-shadow-[0px_0px_11px_0px_rgba(0,0,0,0.11)] lg:tw-relative tw-right-10",
        )}
      />
      <Image src="https://cms-strapi.ichiba.net/uploads/Background_7a97b032e9.png" alt="according" width={787} height={377} className="tw-absolute tw-z-[-1] tw-top-36 tw-left-[-120px] lg:tw-w-[787px] tw-w-[408]"/>
    </div>
  );
};
export default According;
