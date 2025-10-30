import SvgIcon from "@/components/common/SvgIcon";
import clsx from "clsx";
import { useTranslation } from "next-i18next";

export default function WithIChibaOne() {
  const { t } = useTranslation("electronics");

  const listItems = [
    {
      icon: "svg-icon-box-blue",
      title: t("withIChiba.listItem.0"),
    },
    {
      icon: "svg-icon-money-bag",
      title: t("withIChiba.listItem.1"),
    },
    {
      icon: "svg-bar-chart",
      title: t("withIChiba.listItem.2"),
    },
    {
      icon: "svg-email-love",
      title: t("withIChiba.listItem.3"),
    },
  ];
  return (
    <div className="tw-container tw-py-6 lg:tw-py-15">
      <h2 className="tw-mb-6 lg:tw-mb-10 tw-text-2xl tw-leading-8 lg:tw-text-4xl lg:tw-leading-[48px] tw-font-bold">
        {t("withIChiba.heading")}
      </h2>
      <div className="tw-grid tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-6 lg:tw-gap-[52px]">
        {listItems.map((item, index) => {
          return (
            <div
              key={index}
              className="tw-flex tw-flex-col tw-gap-2 lg:tw-gap-4"
            >
              <div
                style={{
                  background:
                    "linear-gradient(144deg, rgba(245, 124, 0, 0.24) 0%, rgba(2, 70, 175, 0.24) 100.1%)",
                }}
                className={clsx(
                  "tw-w-15 tw-h-15 tw-rounded-full tw-flex tw-items-center tw-justify-center",
                  "lg:tw-w-[72px] lg:tw-h-[72px] tw-mx-auto",
                )}
              >
                <SvgIcon
                  icon={item.icon}
                  width={28}
                  height={28}
                  className="lg:tw-hidden"
                />
                <SvgIcon
                  icon={item.icon}
                  width={40}
                  height={40}
                  className="tw-hidden lg:tw-block"
                />
              </div>
              <p className="tw-text-sm lg:tw-text-lg tw-font-bold tw-mb-0 tw-text-center">
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
