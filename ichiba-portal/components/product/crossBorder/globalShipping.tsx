import LottieRenderer from "@/components/common/lottieRenderer";
import clsx from "clsx";
import { useTranslation } from "next-i18next";

const GlobalShipping = () => {
  const { t } = useTranslation("common");

  return (
    <div
      className={clsx(
        "global-shipping",
        "tw-bg-[url('https://cms-strapi.ichiba.net/uploads/image_16_cbd085ea8d.webp')]",
        "tw-bg-cover",
        "tw-py-6 md:tw-py-16",
      )}
    >
      <div className="container">
        <div className="our-content text-center mx-auto container-child">
          <h2 className="tw-font-bold tw-text-2xl md:tw-text-4xl">
            {t("crossBorder.globalShipping.title")}
          </h2>
          <div className="pb-2 pt-3 tw-text-sm md:tw-text-base pb-5">
            {t("crossBorder.globalShipping.content")}
          </div>
        </div>
        <div>
          {/* <Image src={outNetworksBanner} alt="banner" className="banner" /> */}
          <LottieRenderer
            path={"/icons/crossBorder/features/mapcrossborder.json"}
            style={{ height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};
export default GlobalShipping;
