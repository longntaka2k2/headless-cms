import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";

const Analytics = () => {
  const { t } = useTranslation("operation-teams");
  return (
    <div
      className={clsx(
        "tw-h-full lg:tw-h-[511px] tw-bg-[#F3F7FE] tw-rounded-lg lg:tw-rounded-2xl",
        "tw-p-4 lg:tw-py-8 lg:tw-px-[100px] tw-mt-4 lg:tw-mt-15",
      )}
    >
      <div className="lg:tw-w-[80%] tw-text-center tw-mx-auto">
        <h3 className="tw-mb-3 tw-text-lg lg:tw-text-2xl tw-font-bold">
          {t("conquer.analytics.title")}
        </h3>
        <p className="tw-text-sm lg:tw-text-base tw-mb-6 lg:tw-mb-10">
          {t("conquer.analytics.subTitle")}
        </p>
      </div>
      <Image
        src="https://cms-strapi.ichiba.net/uploads/Frame_1171276383_551def8467.svg"
        alt=""
        width={1000}
        height={407}
        className="tw-mx-auto"
      />
    </div>
  );
};

export default Analytics;
