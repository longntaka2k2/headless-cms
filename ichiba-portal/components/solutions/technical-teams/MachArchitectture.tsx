import Image from "next/image";
import { useTranslation } from "next-i18next";

const MachArchitectture = () => {
  const { t } = useTranslation("technical-teams");
  return (
    <div className="tw-px-4 tw-py-5 lg:tw-p-9 tw-bg-[#E9EDF6] tw-rounded-lg lg:tw-rounded-2xl tw-h-full">
      <Image
        src="https://cms-strapi.ichiba.net/uploads/microservice_1_baba67238d.svg"
        alt="#"
        width={100}
        height={100}
        className="tw-w-[60px] tw-h-[60px] lg:tw-w-[100px] lg:tw-h-[100px]"
      />
      <h3 className="tw-mt-5 tw-mb-2 lg:tw-mt-6 lg:tw-mb-4 tw-text-xl lg:tw-text-2xl tw-font-bold">
        {t("machArchitecture.title")}
      </h3>
      <p className="tw-mb-0 tw-text-sm lg:tw-text-base">
        {t("machArchitecture.content")}
      </p>
    </div>
  );
};

export default MachArchitectture;
