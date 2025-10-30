import Image from "next/image";
import businessSolutionMB from "@/public/solutions/business-olution-mb.png";
import businessSolutionDES from "@/public/solutions/business-solution-des.png";
import { useTranslation } from "next-i18next";

export const Unlocking = () => {
  const { t } = useTranslation("order-fulfillment-by-efex");
  return (
    <div className="tw-container">
      <div className="lg:tw-w-[50%]">
        <h2 className="tw-text-2xl tw-font-bold lg:tw-text-4xl">
          {t("unlocking.title")}
        </h2>
        <p className="mt-1 text-sm text-ic-ink-5 lg:text-lg lg:leading-6">
          {t("unlocking.subTitle")}
        </p>
      </div>
      <Image
        src={businessSolutionMB}
        alt="tracking"
        className="tw-w-full tw-h-full tw-object-cover lg:tw-hidden tw-rounded-2xl"
      />
      <Image
        src={businessSolutionDES}
        alt="tracking"
        className="tw-w-full tw-h-full tw-object-fill tw-hidden lg:tw-block tw-rounded-2xl"
      />
    </div>
  );
};
