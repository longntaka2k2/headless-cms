import SvgIcon from "@/components/common/SvgIcon";
import bgWhyChoose from "@/public/images/mother-baby/bgWhyChoose.svg";
import { useTranslation } from "next-i18next";

export default function WhyChooseUs() {
  const { t } = useTranslation("mother-baby");

  const listWhyChoose = [
    {
      icon: "svg-user-friendly",
      title: t("whyChoose.content.0"),
    },
    {
      icon: "svg-multiple-devices",
      title: t("whyChoose.content.1"),
    },
    {
      icon: "svg-headphone",
      title: t("whyChoose.content.2"),
    },
  ];

  return (
    <div
      style={{
        backgroundImage: `url(${bgWhyChoose.src})`,
      }}
      className="tw-py-6 lg:tw-py-15"
    >
      <div className="tw-container tw-text-center">
        <h2 className="tw-mb-6 lg:tw-mb-10 tw-text-2xl tw-leading-8 lg:tw-text-4xl lg:tw-leading-[48px] tw-font-bold">
          {t("whyChoose.heading")}
        </h2>

        <div className="tw-grid lg:tw-grid-cols-3 tw-gap-6">
          {listWhyChoose.map((item, index) => {
            return (
              <div
                key={index}
                style={{
                  background:
                    "linear-gradient(95deg, #85A5FF 0%, #4E7BFA 100%)",
                }}
                className="tw-p-4 lg:tw-p-6 tw-rounded-xl"
              >
                <SvgIcon
                  icon={item.icon}
                  width={40}
                  height={40}
                  className="lg:tw-hidden tw-mx-auto"
                />
                <SvgIcon
                  icon={item.icon}
                  width={46}
                  height={46}
                  className="tw-hidden lg:tw-block tw-mx-auto"
                />
                <p className="tw-mt-2 tw-mb-0 tw-text-base tw-leading-6 lg:tw-text-lg tw-font-bold tw-text-white">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
