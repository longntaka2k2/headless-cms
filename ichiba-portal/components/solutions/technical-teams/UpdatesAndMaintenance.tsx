import Image from "next/image";
import { useTranslation } from "next-i18next";

const UpdatesAndMaintenance = () => {
  const { t } = useTranslation("technical-teams");
  return (
    <div className="tw-border tw-border-ic-black-2 tw-rounded-lg lg:tw-rounded-2xl tw-overflow-hidden tw-grid tw-gap-5 lg:tw-gap-8">
      <div className="tw-bg-[#F8F8FB]">
        <Image
          src="https://cms-strapi.ichiba.net/uploads/Frame_1171276561_54cdedb191.svg"
          alt="#"
          width={715}
          height={271}
          className="tw-mx-auto"
        />
      </div>
      <div className="tw-px-4 tw-pb-5 lg:tw-px-10 lg:tw-pb-10">
        <h3 className="tw-mb-2 lg:tw-mb-4 tw-text-xl lg:tw-text-2xl tw-font-bold">
          {t("updateAndMaintenance.title")}
        </h3>
        <p className="tw-mb-0 tw-text-sm lg:tw-text-base">
          {t("updateAndMaintenance.content")}
        </p>
      </div>
    </div>
  );
};

export default UpdatesAndMaintenance;
