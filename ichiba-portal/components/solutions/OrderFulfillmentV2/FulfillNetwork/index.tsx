import { useTranslation } from "next-i18next";
import Image from "next/image";
import fulfillNetwork from "@/public/solutions/bg-fulfill-network.png";
import fulfillMap from "@/public/solutions/fulfill-map.png";

export const FulfillNetwork = () => {
  const { t } = useTranslation("order-fulfillment-by-efex");
  return (
    <div
      className="tw-pb-10 tw-mb-6 tw-mt-10 lg:tw-mb-10"
      style={{
        backgroundImage: `url(${fulfillNetwork.src})`,
      }}
    >
      <div className="tw-container">
        <div className="tw-text-center tw-mb-5">
          <h2 className="tw-text-2xl tw-font-bold lg:tw-text-4xl">
            {t(
              "fulfillNetwork.title",
            )}
          </h2>
          <p className="text-sm text-ic-ink-5 lg:text-lg">
            {t(
              "fulfillNetwork.subTitle",
            )}
          </p>
        </div>
        <Image
          src={fulfillMap}
          alt="tracking"
          className="tw-w-full tw-h-full tw-object-cover"
        />
      </div>
    </div>
  );
};
