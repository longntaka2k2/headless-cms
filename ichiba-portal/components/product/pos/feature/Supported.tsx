import { useTranslation } from "next-i18next";
import Image from "next/image";

const Supported = () => {
  const { t } = useTranslation("pos");
  return (
    <div className="tw-container tw-pt-6 lg:tw-pt-[100px]">
      {/* mobile */}
      <div className="lg:tw-hidden">
        <h2 className="tw-mb-2 tw-text-xl tw-font-bold">
          {t("feature.supported.title")}
        </h2>
        <p className="tw-mb-4 tw-text-sm">{t("feature.supported.subTitle")}</p>

        <Image
          src="https://cms-strapi.ichiba.net/uploads/Group_1171275974_36894530a2.svg"
          width={358}
          height={225}
          alt="#"
          className="tw-w-[358px] tw-h-[225px] tw-mx-auto"
        />
      </div>

      {/* desktop */}
      <div className="tw-relative tw-hidden max-tw-w-[1200px]  tw-h-[461px] tw-mx-auto lg:tw-block">
        <Image
          src="https://cms-strapi.ichiba.net/uploads/Group_1171275972_1_d0365e0b9f.svg"
          width={1200}
          height={461}
          alt="#"
          className="tw-w-full tw-h-full"
        />
        <div className="tw-absolute tw-top-0 tw-left-0 tw-w-[55%]">
          <h2 className="tw-mb-3 tw-text-3xl tw-font-bold">
            {t("feature.supported.title")}
          </h2>
          <p className="tw-text-lg">{t("feature.supported.subTitle")}</p>
        </div>
      </div>
    </div>
  );
};

export default Supported;
