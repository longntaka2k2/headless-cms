import { useTranslation } from "next-i18next";
import Image from "next/image";

const WhyChooseUs = () => {
  const { t } = useTranslation("pos");

  return (
    <div className="tw-container tw-mb-4 lg:tw-mb-15">
      <h2 className="tw-text-center tw-text-2xl tw-leading-8 lg:tw-text-4xl lg:tw-leading-[48px] tw-font-bold tw-mb-0">
        {t("whyChooseUs.title")}
      </h2>
      <div
        className="tw-h-1 tw-w-full tw-my-4 lg:tw-mt-5 lg:tw-mb-8
                            tw-bg-gradient-to-l tw-from-[#FDE9D3] tw-via-[#e8e2e2]"
      ></div>
      <div className="tw-grid md:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-6">
        {(
            t("whyChooseUs.items", {
              returnObjects: true,
            }) as any
          ).map((item: any, index: number) => {
          return (
            <div className="tw-flex lg:tw-flex-col tw-gap-2 lg:tw-gap-4" key={index}>
              <Image
                src={item.icon}
                alt={item.title}
                width={32}
                height={32}
                quality={100}
                className="tw-max-w-[32px] tw-max-h-[32px] lg:tw-max-w-[48px] lg:tw-max-h-[48px] tw-w-full tw-h-full"
              />
              <div>
                <h3 className="tw-text-base lg:tw-text-xl tw-font-bold tw-mb-2 lg:tw-mb-4">
                  {item.title}
                </h3>
                <p className="tw-text-sm lg:tw-text-base tw-mb-0">
                  {item.content}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhyChooseUs;
