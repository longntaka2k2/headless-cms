import { useTranslation } from "next-i18next";
import Image from "next/image";
const Opportunities = () => {
  const b = useTranslation("business-owner").t;
  return (
    <div className="lg:tw-overflow-hidden ">
      <div className="tw-p-4 tw-pb-6 lg:tw-py-10 lg:tw-px-0  lg:tw-container ">
        <div className="lg:tw-hidden">
          <div className="tw-text-[#0F62FE] tw-py-1 tw-px-3 tw-text-sm tw-rounded-full tw-bg-[#F0F5FF] tw-w-max">
            {b("opportunities.label")}
          </div>
          <h2 className="tw-mt-2 tw-text-2xl tw-font-bold">
            {b("opportunities.title")}
          </h2>
          <div className="tw-text-[#666] tw-text-sm tw-mt-2">
            {b("opportunities.content")}
          </div>
        </div>
        <Image
          src={
            "https://cms-strapi.ichiba.net/uploads/Group_1171275906_90ecfbbaae.png"
          }
          alt="opportunities"
          width={549}
          height={337}
          className="tw-mt-6 lg:tw-hidden"
        />

        <div className="tw-text-[#0F62FE] tw-py-2 tw-px-4 tw-rounded-full tw-bg-[#F0F5FF] tw-w-max lg:tw-block tw-hidden">
          {b("opportunities.label")}
        </div>
        <div className="tw-hidden lg:tw-block tw-relative">
          <div className="tw-max-w-[690px] tw-absolute tw-top-0 tw-left-0">
            <h2 className="tw-font-bold tw-text-4xl">
              {b("opportunities.title")}
            </h2>
            <div className="tw-text-lg tw-mt-4 tw-text-[#666] ">
              {b("opportunities.content")}
            </div>
          </div>
          <Image
            src={
              "https://cms-strapi.ichiba.net/uploads/Group_1171275906_f7ca8fac89.png"
            }
            alt="opportunities"
            width={1200}
            height={492}
            className="tw-mt-6 "
          />
          <Image
            src={
              "https://cms-strapi.ichiba.net/uploads/Group_1171275897_1032429651.png"
            }
            alt="opportunities"
            width={184}
            height={492}
            className="tw-absolute tw-bottom-[-20px] tw-right-[-50px]"
          />
        </div>
        <div className="tw-mt-6 lg:tw-mt-14 tw-grid tw-gap-3 lg:tw-grid-cols-3 lg:tw-gap-6">
          {(
            b("opportunities.items", {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              key={index}
              className="tw-border tw-border-[#DDD] tw-rounded-lg tw-overflow-hidden lg:tw-rounded-2xl"
            >
              <div className="tw-w-full tw-h-[6px] tw-bg-[linear-gradient(0deg,#F57C00_-0.66%,#FAC286_99.49%)]"></div>
              <div className="tw-p-4 lg:tw-p-6 lg:tw-pt-9 tw-flex tw-gap-4 lg:tw-grid tw-items-start">
                <Image
                  src={value.icons}
                  alt={value.title}
                  width={24}
                  height={24}
                  className="tw-w-[30px]"
                />
                <div>
                  <div className="tw-font-bold lg:tw-text-2xl">
                    {value.title}
                  </div>
                  <div className="tw-text-sm lg:tw-mt-2 lg:tw-text-base">
                    {value.content}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Opportunities;
