import { useTranslation } from "next-i18next";
import Image from "next/image";

const Integration = () => {
  const { t } = useTranslation("operation-teams");
  return (
    <div className="tw-grid tw-gap-4 lg:tw-gap-7  tw-border tw-border-ic-ink-2 tw-bg-[#FCF6ED] tw-rounded-lg lg:tw-rounded-2xl">
      <div className="w-full tw-h-[313px] lg:tw-h-[313px] tw-rounded-lg lg:tw-rounded-2xl tw-overflow-hidden">
        <Image
          src="https://cms-strapi.ichiba.net/uploads/Group_1171275932_f42e7d1bdc.svg"
          alt="socialMedia"
          width={508}
          height={284}
          className="tw-w-full tw-h-full"
        />
      </div>
      <div className="tw-pl-6 lg:tw-pl-10">
        <h3 className="tw-text-lg lg:tw-text-2xl tw-font-bold tw-mb-4 lg:tw-mb-6">
          {t("conquer.integration.title")}
        </h3>
        <p className="tw-text-sm lg:tw-text-base">
          {t("conquer.integration.subTitle")}
        </p>
      </div>
    </div>
  );
};

export default Integration;
