import SvgIcon from "@/components/common/SvgIcon";
import { useTranslation } from "next-i18next";

export default function Discover() {
  const { t } = useTranslation("case-studies");

  const listDiscover = [
    { title: t("discover.list.0.title"), textLink: t("discover.list.0.textLink") },
    { title: t("discover.list.1.title"), textLink: t("discover.list.1.textLink") },
    { title: t("discover.list.2.title"), textLink: t("discover.list.2.textLink") },
    { title: t("discover.list.3.title"), textLink: t("discover.list.3.textLink") },
  ];

  return (
    <div
      style={{
        background: "linear-gradient(91deg, #B1D1F6 24.67%, #C5C8FD 77.28%)",
      }}
      className="tw-py-6 lg:tw-py-15"
    >
      <div className="tw-container tw-flex tw-flex-col lg:tw-flex-row tw-gap-6 lg:tw-gap-10">
        <h3 className="lg:tw-w-1/5 tw-mb-0 tw-text-2xl lg:tw-text-5xl tw-font-bold tw-text-white">
          {t("discover.heading")}
        </h3>

        <div className="lg:tw-w-4/5 tw-grid lg:tw-grid-cols-4 tw-gap-6 ">
          {listDiscover.map((item, index) => {
            return (
              <div
                key={index}
                style={{
                  boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.05)",
                }}
                className="tw-p-6 tw-bg-white tw-rounded-xl"
              >
                <div
                  style={{
                    background:
                      "linear-gradient(270deg, rgba(37, 213, 252, 0.80) 0.05%, rgba(61, 104, 255, 0.00) 99.96%)",
                  }}
                  className="tw-w-full tw-h-1 tw-rounded-3xl tw-mb-4"
                ></div>
                <div className="tw-mb-4 lg:tw-mb-0">
                  <p className="tw-text-lg tw-font-bold tw-mb-0">
                    {item.title}
                  </p>
                  <p className="tw-text-sm tw-text-[#F57C00] tw-font-medium tw-flex tw-items-center tw-mb-0 tw-gap-1">
                    {item.textLink}
                    <SvgIcon icon="svg-arrow-right" width={16} height={16} />
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
