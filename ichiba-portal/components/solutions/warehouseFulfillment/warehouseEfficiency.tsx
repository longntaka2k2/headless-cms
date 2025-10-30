import useWidth from "@/const/withCount";
import { isEng } from "@/utils/utils";
import clsx from "clsx";
import { ReactSVG } from "react-svg";
import { useTranslation } from "next-i18next";

const WarehouseEfficiency = () => {
  const { t, i18n } = useTranslation("common");
  const width = useWidth();
  const getImage = () => {
    if (isEng() || i18n.language == "en") {
      return width < 768
        ? "https://cms-strapi.ichiba.net/uploads/Unlocking_warehouse_1_4b8cb01419.svg"
        : "https://cms-strapi.ichiba.net/uploads/Unlocking_warehouse_1872a113a3.svg";
    }
    return width < 768
      ? "https://cms-strapi.ichiba.net/uploads/Khai_pha_kho_hang_1_983cce8f5b.svg"
      : "https://cms-strapi.ichiba.net/uploads/Khai_pha_kho_hang_e66cf1d4e1.svg";
  };
  return (
    <section
      className="tw-bg-[#FFF7E6] 
        tw-py-6 md:tw-py-10"
    >
      <div className="tw-container">
        <div className="tw-text-center tw-flex tw-flex-col tw-items-center tw-text-black">
          <h2 className="md:tw-max-w-[792px] tw-font-bold tw-text-2xl md:tw-text-4xl">
            <span className="lg:tw-block">
              {t("solutions.warehouseFulfillment.efficiency.heading")}
            </span>
            <span>
              {t("solutions.warehouseFulfillment.efficiency.heading2")}
            </span>
          </h2>
          <p className="tw-text-sm lg:tw-text-base tw-mb-6">
            {t("solutions.warehouseFulfillment.efficiency.subHeading")}
          </p>
        </div>
        <ReactSVG
          src={getImage()}
          className="tw-w-full"
          beforeInjection={(svg) => {
            svg.classList.add("tw-w-full");
            svg.classList.add("tw-h-full");
          }}
        ></ReactSVG>
      </div>
    </section>
  );
};
export default WarehouseEfficiency;
