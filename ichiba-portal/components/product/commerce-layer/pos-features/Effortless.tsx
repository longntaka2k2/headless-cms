import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";

const Effortless = () => {
  const { t } = useTranslation("pos");
  return (
    <div className="tw-container tw-mt-6 lg:tw-mt-15">
      <div
        className={clsx(
          "tw-grid lg:tw-grid-cols-2 tw-items-center tw-border-2 tw-border-ic-black-2 tw-rounded-lg lg:tw-rounded-2xl",
          "tw-p-4 lg:tw-py-8 lg:tw-px-10 tw-overflow-hidden",
        )}
      >
        <div className="lg:tw-w-[90%]">
          <h2 className="tw-mb-2 lg:tw-mb-5 tw-text-xl lg:tw-text-3xl tw-font-bold">
            {t("feature.effortless.title")}
          </h2>
          <p className="tw-mb-0 tw-text-sm lg:tw-text-base">
            {t("feature.effortless.subTitle")}
          </p>
        </div>
        <Image
          src="https://cms-strapi.ichiba.net/uploads/Macbook_Pro_FREE_b840e29344.svg"
          alt=""
          width={551}
          height={350}
          className="lg:tw-translate-x-[50px] tw-w-[330px] tw-h-[209px] lg:tw-w-[607px] lg:tw-h-[351px]"
        />
      </div>
    </div>
  );
};

export default Effortless;
