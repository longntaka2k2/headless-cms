import clsx from "clsx";
import { useTranslation } from "next-i18next";

const Slogan = () => {
  const { t } = useTranslation("integration");

  return (
    <section
      className={clsx(
        "tw-bg-[url('https://cms-strapi.ichiba.net/uploads/Rectangle_6650_9ae104bab2.png')]",
        "tw-bg-center lg:tw-bg-contain tw-bg-cover tw-bg-no-repeat",
        " tw-px-15 tw-py-[52px] lg:tw-px-0",
      )}
    >
      <div className="tw-container">
        <h2 className="tw-text-center tw-leading-8 lg:tw-leading-[48px] tw-font-bold tw-text-2xl lg:tw-text-4xl tw-text-white">
          <span className="tw-block">{t("ichibaGlobal")}</span>
          <span>{t("aPower")}</span>
        </h2>
      </div>
    </section>
  );
};
export default Slogan;
