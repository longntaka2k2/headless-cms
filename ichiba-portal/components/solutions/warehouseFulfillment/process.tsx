import clsx from "clsx";
import { useTranslation } from "next-i18next";

const Process = () => {
  const { t } = useTranslation("common");
  return (
    <section
      className="tw-bg-[url('https://cms-strapi.ichiba.net/uploads/bg_process_e350e4471b.webp')] 
      tw-py-6 md:tw-py-10"
    >
      <div className="tw-container">
        <div className="tw-text-center tw-flex tw-flex-col tw-items-center tw-text-white">
          <h2 className="md:tw-max-w-[792px] tw-font-bold tw-text-2xl md:tw-text-4xl">
            {t("solutions.warehouseFulfillment.process.heading")}
          </h2>
          <p>{t("solutions.warehouseFulfillment.process.subHeading")}</p>
        </div>
        <div
          className={clsx(
            "tw-min-h-[95vw] md:tw-min-w-[900px] md:tw-min-h-[500px] tw-rounded-lg tw-bg-[rgba(0,0,0,0.2)]",
          )}
        ></div>
      </div>
    </section>
  );
};
export default Process;
