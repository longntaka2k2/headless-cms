import { useTranslation } from "next-i18next";
import Analytics from "./Analytics";
import Integration from "./Integration";
import Multichannel from "./Multichannel";
import OrderFulfillment from "./OrderFulfillment";
import Supplier from "./Supplier";

const ConquerTheChallenges = () => {
  const { t } = useTranslation("operation-teams");
  return (
    <div className="tw-container tw-my-6 lg:tw-mt-15 lg:tw-mb-32">
      <h2 className="tw-mb-4 lg:tw-mb-7 tw-text-center tw-text-2xl lg:tw-text-4xl tw-font-bold lg:tw-w-[70%] tw-mx-auto">
        {t("conquer.heading")}
      </h2>
      <Multichannel />
      <OrderFulfillment />
      <div className="tw-grid lg:tw-grid-cols-2 tw-gap-4 lg:tw-gap-10 tw-mt-6 lg:tw-mt-12">
        <Supplier />
        <Integration />
      </div>
      <Analytics />
    </div>
  );
};

export default ConquerTheChallenges;
