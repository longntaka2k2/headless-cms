import { useTranslation } from "next-i18next";
import Image from "next/image";

const Multichannel = () => {
  const { t } = useTranslation("operation-teams");
  return (
    <div className="tw-p-4 lg:tw-py-6 lg:tw-px-15 tw-border tw-border-ic-black-2 tw-rounded-lg lg:tw-rounded-2xl tw-grid tw-items-center lg:tw-grid-cols-2">
      <div>
        <h3 className="tw-mb-3 tw-text-lg lg:tw-text-2xl tw-font-bold">
          {t("conquer.multiple.title")}
        </h3>
        <p className="tw-mb-0 tw-text-sm lg:tw-text-base">
          {t("conquer.multiple.subTitle")}
        </p>
      </div>
      <Image
        src="https://cms-strapi.ichiba.net/uploads/Illus_df85afc10f.svg"
        alt="#"
        width={675}
        height={286}
        className="tw-mx-auto tw-translate-y-4 lg:tw-translate-x-15 lg:tw-translate-y-6"
      />
    </div>
  );
};

export default Multichannel;
