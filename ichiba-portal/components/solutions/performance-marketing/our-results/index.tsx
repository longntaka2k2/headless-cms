import SvgIcon from "@/components/common/SvgIcon";
import clsx from "clsx";
import { useTranslation } from "next-i18next";

export const OurResults = () => {
  const { t } = useTranslation("performance-marketing");
  const listItem = [
    {
      icon: "svg-higher-roas",
      percent: "150",
      title: t("ourResults.results.0"),
    },
    {
      icon: "svg-icon-build",
      percent: "73",
      title: t("ourResults.results.1"),
    },
    {
      icon: "svg-more-clicks",
      percent: "57",
      title: t("ourResults.results.2"),
    },
  ];

  return (
    <section className="tw-container tw-mb-6 lg:tw-mb-20">
      <h2 className="tw-mb-4 lg:tw-mb-6 tw-text-2xl lg:tw-text-4xl tw-font-bold">
        {t("ourResults.title")}
      </h2>
      <div className="tw-grid lg:tw-grid-cols-3 tw-gap-3 lg:tw-gap-4">
        {listItem.map((item, index) => {
          return (
            <div
              key={index}
              className="tw-rounded-lg tw-overflow-hidden tw-border tw-border-ic-black-2"
            >
              <div className="tw-w-full tw-h-[8px] tw-bg-gradient-to-b tw-from-[#F57C00] tw-to-[#FAC286]"></div>
              <div
                className={clsx(
                  "tw-flex lg:tw-flex-col tw-gap-4",
                  "tw-pt-8 tw-px-6 tw-pb-6 lg:tw-pt-5 lg:tw-px-4 lg:tw-pb-5",
                )}
              >
                <div>
                  <SvgIcon
                    icon={item.icon}
                    width={22}
                    height={24}
                    className="lg:tw-hidden"
                  />
                  <SvgIcon
                    icon={item.icon}
                    width={26}
                    height={28}
                    className="tw-hidden lg:tw-block"
                  />
                </div>
                <div>
                  <p className="tw-mb-0 tw-text-xl lg:tw-text-2xl tw-font-bold lg:tw-pb-2">
                    {item.percent}%
                  </p>
                  <p className="tw-mb-0 tw-text-sm lg:tw-text-base">
                    {item.title}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
