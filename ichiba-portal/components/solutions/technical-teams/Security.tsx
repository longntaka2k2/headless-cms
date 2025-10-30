import Image from "next/image";
import { useTranslation } from "next-i18next";

const Security = () => {
  const { t } = useTranslation("technical-teams");
  return (
    <div className="tw-px-4 tw-py-5 lg:tw-p-7 tw-rounded-lg lg:tw-rounded-2xl tw-border tw-border-ic-ink-2 tw-flex tw-flex-col lg:tw-flex-row tw-gap-5 lg:tw-gap-8">
      <Image
        src="https://cms-strapi.ichiba.net/uploads/key_2_1_5d38995fad.svg"
        alt="#"
        width={48}
        height={48}
        className="tw-w-10 tw-h-10 lg:tw-w-12 lg:tw-h-tw-h-12"
      />
      <div>
        <h3 className="tw-mb-2 lg:tw-mb-4 tw-text-xl lg:tw-text-2xl tw-font-bold">
          {t("security.title")}
        </h3>
        <p className="tw-mb-0 tw-text-sm lg:tw-text-base">
          {t("security.content")}
        </p>
      </div>
    </div>
  );
};

export default Security;
