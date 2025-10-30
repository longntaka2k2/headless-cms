import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";

const DailySales = () => {
  const { t } = useTranslation("pos");
  return (
    <div className="tw-container tw-mt-6 lg:tw-mt-15 tw-flex tw-flex-col-reverse lg:tw-flex-row">
      <div className="lg:tw-w-[45%] tw-bg-[#EFF3F8] tw-rounded-b-lg lg:tw-rounded-l-2xl tw-overflow-hidden">
        <Image
          src="https://cms-strapi.ichiba.net/uploads/Frame_1171276260_c018d1e7d2.svg"
          alt=""
          width={358}
          height={278}
          className="tw-w-[358px] tw-h-[277px] lg:tw-w-[496px] lg:tw-h-[320px] tw-mx-auto"
        />
      </div>
      <div
        className={clsx(
          "lg:tw-w-[55%] tw-bg-[#182A50] tw-flex tw-flex-col tw-justify-center tw-rounded-t-lg lg:tw-rounded-r-2xl",
          "tw-text-white tw-py-5 tw-px-4 lg:tw-py-11 lg:tw-pl-[70px] lg:tw-pr-10",
        )}
      >
        <h2 className="tw-mb-2 lg:tw-mb-6 tw-text-xl lg:tw-text-3xl tw-font-bold">
          {t("feature.dailySales.title")}
        </h2>
        <p className="tw-text-sm lg:tw-text-base tw-mb-0">
          {t("feature.dailySales.subTitle")}
        </p>
      </div>
    </div>
  );
};

export default DailySales;
