import { useTranslation } from "next-i18next";
import Image from "next/image";

const Physical = () => {
  const { t } = useTranslation("pos");
  return (
    <div className="tw-relative tw-mt-6 lg:tw-mt-15 tw-bg-[#EFF3F8] tw-p-4 lg:tw-p-10 tw-rounded-lg lg:tw-rounded-2xl tw-overflow-hidden lg:tw-overflow-visible">
      <h2 className="tw-mb-2 lg:tw-mb-3 tw-text-xl lg:tw-text-3xl tw-font-bold">
        {t("feature.physical.title")}
      </h2>
      <p className="tw-mb-0 tw-text-base">{t("feature.physical.subTitle")}</p>
      <Image
        src={
          "https://cms-strapi.ichiba.net/uploads/Frame_1171276567_cfeb914c08.png"
        }
        alt="posforbuyer"
        className="tw-w-[326px] tw-h-[182px] lg:tw-w-[595px] lg:tw-h-[335px] tw-mx-auto tw-translate-y-6 lg:tw-translate-y-10"
        width={588}
        height={360}
      />
      <Image
        src={"https://cms-strapi.ichiba.net/uploads/pngwing_2_2d4b2ecb09.png"}
        alt=""
        width={253}
        height={253}
        className="tw-w-[170px] lg:tw-w-[253px] tw-absolute tw-left-[-20%] -tw-bottom-6 tw-hidden lg:tw-block"
      />
    </div>
  );
};

export default Physical;
