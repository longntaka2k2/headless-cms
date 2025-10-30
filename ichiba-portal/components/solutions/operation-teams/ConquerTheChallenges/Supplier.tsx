import { useTranslation } from "next-i18next";
import Image from "next/image";

const Supplier = () => {
  const { t } = useTranslation("operation-teams");
  return (
    <div className="lg:tw-text-2xl tw-border tw-border-ic-ink-2 tw-rounded-lg lg:tw-rounded-2xl tw-grid tw-justify-between tw-overflow-hidden">
      <div className="tw-p-4 lg:tw-p-6">
        <h3 className="tw-text-lg lg:tw-text-2xl tw-font-bold tw-mb-4 lg:tw-mb-6">
          {t("conquer.supplier.title")}
        </h3>
        <p className="tw-text-sm lg:tw-text-base tw-mb-0">
          {t("conquer.supplier.subTitle")}
        </p>
      </div>

      <Image
        src="https://cms-strapi.ichiba.net/uploads/Group_1171275929_9cd243bc84.svg"
        alt="#"
        width={540}
        height={293}
        className="tw-mx-auto tw-translate-x-4 lg:tw-translate-x-6 lg:tw-translate-y-8"
      />
    </div>
  );
};

export default Supplier;
