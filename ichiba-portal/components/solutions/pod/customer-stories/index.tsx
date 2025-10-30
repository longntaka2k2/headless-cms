import clsx from "clsx";
import { useTranslation } from "next-i18next";
import ListStories from "./ListStories";

export const CustomerStories = () => {
  const { t } = useTranslation("pod");
  return (
    <div className="tw-bg-[#F6F9FC] tw-py-6 lg:tw-py-15">
      <div className="tw-container">
        <p className="tw-font-medium tw-text-sm lg:tw-text-base tw-text-brand-primary tw-uppercase tw-mb-2">
          {t("customerStories.label")}
        </p>
        <h2 className="tw-relative tw-w-full tw-text-2xl lg:tw-text-4xl tw-font-bold tw-leading-8 lg:tw-leading-[48px] tw-mb-6 lg:tw-mb-10">
          {t("customerStories.heading")}
        </h2>

        <ListStories />
      </div>
    </div>
  );
};
export default CustomerStories;
