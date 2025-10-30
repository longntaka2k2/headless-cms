import { useTranslation } from "next-i18next";
import Image from "next/image";

const OfflineSelling = () => {
  const { t } = useTranslation("pos");
  return (
    <div className="tw-container tw-mt-6 lg:tw-mt-15">
      <div className="tw-bg-[#FFFAF7] tw-rounded-2xl tw-pt-5 tw-px-3 lg:tw-pt-10">
        <h2 className="tw-mb-2 lg:tw-mb-5 tw-text-xl lg:tw-text-3xl tw-font-bold">
        {t("feature.offlineSelling.title")}
        </h2>
        <p className="tw-mb-0 tw-text-sm lg:tw-text-base">
        {t("feature.offlineSelling.subTitle.0")}
        </p>
        <p className="tw-mb-0 tw-text-sm lg:tw-text-base">
        {t("feature.offlineSelling.subTitle.1")}
        </p>

        <div className="tw-mx-auto tw-w-[334px] tw-h-[194px] lg:tw-w-[900px] lg:tw-h-[300px]"> 
          <Image
            src="https://cms-strapi.ichiba.net/uploads/Frame_1171276590_782dd5dfef.svg"
            width={924}
            height={313}
            alt=""
            className="tw-w-full tw-h-full tw-object-cover tw-hidden lg:tw-block"
          />
          <Image
            src="https://cms-strapi.ichiba.net/uploads/Frame_1171276590_1_3e396cf561.svg"
            width={358}
            height={206}
            alt=""
            className="tw-w-full tw-h-full tw-object-cover lg:tw-hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default OfflineSelling;
