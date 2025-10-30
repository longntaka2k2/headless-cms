import { useTranslation } from "next-i18next";
import Image from "next/image";
const WhyIchibaOne = () => {
  const b = useTranslation("build-store-front").t;
  return (
    <div className="tw-py-6 tw-px-4 lg:tw-container lg:tw-py-[100px] lg:tw-flex tw-gap-[100px] lg:tw-items-center">
      <div>
        <div className="tw-font-bold tw-text-2xl lg:tw-text-4xl lg:tw-mb-2">
          {b("commerceSite.why.title")}
        </div>
        <div className="tw-text-sm tw-text-[#666] lg:tw-text-lg">
          {b("commerceSite.why.content.0")}
        </div>
        <div className="tw-text-sm tw-text-[#666] lg:tw-text-lg">
          {b("commerceSite.why.content.1")}
        </div>
      </div>
      <div className="tw-grid tw-mt-4">
        {(
          b(`commerceSite.why.items`, {
            returnObjects: true,
          }) as string[]
        ).map((value: any, index: number) => (
          <div key={index} className="lg:tw-w-[614px]">
            <div
              className={index > 0 ? "tw-my-4 tw-border-b" : "tw-hidden"}
            ></div>
            <div className="tw-flex tw-gap-5 tw-items-start lg:tw-items-center">
              <Image
                src={value.icon}
                alt={value.title}
                width={60}
                height={60}
                className="tw-max-w-[40px] lg:tw-max-w-[60px]"
              />
              <div>
                <div className="tw-font-bold tw-text-lg lg:tw-text-2xl">{value.title}</div>
                <div className="tw-mt-2 tw-text-[#666] tw-text-sm lg:text-base">
                  {value.content}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default WhyIchibaOne;
