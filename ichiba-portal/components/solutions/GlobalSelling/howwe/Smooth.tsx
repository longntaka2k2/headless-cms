import { useTranslation } from "next-i18next";
import Image from "next/image";
const Smooth = () => {
  const g = useTranslation("global-selling").t;

  return (
    <div className="lg:tw-mt-15 tw-mt-4 lg:tw-container">
      <h3 className="tw-font-bold lg:tw-text-2xl ">{g("smooth.title")}</h3>
      <div className="tw-mt-3 lg:tw-mt-6 tw-grid tw-gap-2 lg:tw-grid-cols-2 lg:tw-gap-5">
        <div className="tw-border tw-border-[#ddd] tw-rounded-lg tw-pt-3 tw-pl-3 lg:tw-pl-6 lg:tw-pt-5 tw-overflow-hidden">
          <div className="tw-text-sm lg:tw-text-base">{g("smooth.auto")}</div>
          <div className="tw-flex tw-justify-end lg:tw-mt-7">
            <Image
              src="https://cms-strapi.ichiba.net/uploads/languages_JP_1_9193c43b24.png"
              alt=""
              width={391}
              height={273}
              className="tw-max-w-[200px] lg:tw-max-w-[390px]"
            />
          </div>
        </div>
        <div className="tw-border tw-border-[#ddd] tw-rounded-lg tw-pt-3 tw-pl-3 lg:tw-pl-6 lg:tw-pt-5 tw-overflow-hidden">
        <div className="tw-text-sm lg:tw-text-base">{g("smooth.automatically")}</div>
          <div className="tw-flex tw-justify-end lg:tw-mt-7">
            <Image
              src="https://cms-strapi.ichiba.net/uploads/dd_5fa1799320.png"
              alt=""
              width={371}
              height={270}
              className="tw-max-w-[200px] lg:tw-max-w-[390px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Smooth;
