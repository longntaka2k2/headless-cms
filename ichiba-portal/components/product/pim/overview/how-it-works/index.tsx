import React, { useMemo, useState } from "react";
import { useTranslation } from "next-i18next";
import Tabs from "./components/Tabs";
import Tab from "./components/Tabs/Tab";
import Image from "next/image";
import Stepper from "./components/Stepper";

enum TabName {
  Collect,
  Manage,
  Enrich,
  Distribute,
}

const image =
  "https://cms-strapi.ichiba.net/uploads/How_It_Work_baa6124904.webp";

const HowItWorks = () => {
  const { t } = useTranslation("pim");
  const [selectedTab, setSelectedTab] = useState(TabName.Collect);

  const onTabChange = (tab: string | number) => {
    setSelectedTab(tab as TabName);
  };

  const steps = useMemo(() => {
    switch (selectedTab) {
      case TabName.Collect:
        return t("collectSteps", {
          returnObjects: true,
        });
      case TabName.Manage:
        return t("manageSteps", {
          returnObjects: true,
        });
      case TabName.Enrich:
        return t("enrichSteps", {
          returnObjects: true,
        });
      case TabName.Distribute:
        return t("distributeSteps", { returnObjects: true });
      default:
        return [];
    }
  }, [selectedTab, t]);

  return (
    <div className="tw-bg-bg-light">
      <div className="container tw-py-10">
        <h3 className="tw-text-2xl md:tw-text-4xl tw-font-bold tw-mb-6">
          {t("howItWorks")}
        </h3>
        <Tabs value={selectedTab} onChange={onTabChange}>
          <Tab value={TabName.Collect} name={t("collect")} />
          <Tab value={TabName.Manage} name={t("manage")} />
          <Tab value={TabName.Enrich} name={t("enrich")} />
          <Tab value={TabName.Distribute} name={t("distribute")} />
        </Tabs>
        <div className="tw-mt-10 tw-flex tw-gap-20 tw-justify-between">
          <Image
            className="tw-hidden lg:tw-block tw-h-max"
            src="https://cms-strapi.ichiba.net/uploads/How_it_work_ff4e97ee5e.svg"
            alt="How_it_work"
            width={384}
            height={480}
          />
          <div className="tw-px-4 lg:tw-px-10 tw-py-9 tw-shadow-10 tw-rounded-[20px] tw-flex-1">
            <Stepper steps={Array.isArray(steps) ? steps : []} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
