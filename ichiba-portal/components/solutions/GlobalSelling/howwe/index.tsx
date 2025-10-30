import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import MultiMarket from "./MultiMarket";
import Smooth from "./Smooth";
import MultiWare from "./MultiWarehouse";
import Handle from "./Handle";
import International from "./International";
import Additional from "./Additional";
import WeAre from "../weare";

const HowWe = () => {
  const g = useTranslation("global-selling").t;

  return (
    <div className="lg:tw-my-[60px] tw-mt-4 tw-mx-4 lg:tw-mx-0">
      <div className="tw-text-center">
        <h2 className="tw-text-2xl tw-font-bold lg:tw-text-4xl tw-mb-0">
          {g("how.title")}
        </h2>
        <div className="tw-text-sm tw-mt-2 lg:tw-text-lg">
          {g("how.subtitle")}
        </div>
      </div>
      <MultiMarket />
      <Smooth />
      <MultiWare />
      <Handle />
      <International />
      <Additional />
    </div>
  );
};
export default HowWe;
