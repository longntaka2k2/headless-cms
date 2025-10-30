import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";
const Provide = () => {
  const a = useTranslation("all-in-one").t;

  return (
    <div className="tw-mx-4 lg:tw-container">
      <div className="">
        <h3 className="tw-font-bold tw-text-lg tw-mt-3 lg:tw-text-2xl tw-mb-0">
          {a("iChibaBring.provideFlexible.title")}
        </h3>
        <div className="tw-grid lg:tw-grid-cols-2 lg:tw-gap-6 tw-gap-2 tw-mt-4 lg:tw-mt-6">
          <div className="tw-rounded-lg tw-border tw-border-[#ddd] tw-overflow-hidden">
            <Image
              src={
                "https://cms-strapi.ichiba.net/uploads/Increase_Customer_Loyalty_and_Life_Time_Value_1_12f31ecb7d.png"
              }
              alt=""
              width={716}
              height={304}
              className="lg:tw-h-[257px]"
            />
            <div className="tw-text-sm tw-p-4 lg:tw-text-base">
              {a("iChibaBring.provideFlexible.byOffer")}
            </div>
          </div>
          <div className="tw-rounded-lg tw-border tw-border-[#ddd] tw-overflow-hidden">
            <Image
              src={
                "https://cms-strapi.ichiba.net/uploads/Frame_1171276323_550b507356.png"
              }
              alt=""
              width={716}
              height={304}
              className="lg:tw-h-[257px] tw-object-cover"
            />
            <div className="tw-text-sm tw-p-4 lg:tw-text-base">
              {a("iChibaBring.provideFlexible.byOffer")}
            </div>
          </div>
        </div>
      </div>
      <div
        className={clsx(
          "tw-rounded-lg tw-border tw-overflow-hidden lg:tw-flex ",
          " tw-border-[#ddd] tw-text-white tw-mt-4 tw-mb-6 lg:tw-mb-15",
        )}
      >
        <div className="tw-px-4 tw-pt-5 tw-pb-10 lg:tw-pb-0 lg:tw-pr-[100px] lg:tw-pl-10 tw-bg-[#182A50] lg:tw-pt-[88px]">
          <h3 className="tw-text-lg tw-font-bold lg:tw-text-2xl">
            {a("iChibaBring.provideData.title")}
          </h3>
          <div className="tw-mt-4 lg:tw-mt-6 tw-grid tw-ml-6 lg:tw-ml-8 tw-gap-2 lg:tw-gap-6">
            {(
              a(`iChibaBring.provideData.content`, {
                returnObjects: true,
              }) as string[]
            ).map((value: any, index: number) => (
              <div className="tw-flex tw-items-start tw-gap-2 lg:tw-gap-4" key={index}>
                <Image
                  src={
                    "https://cms-strapi.ichiba.net/uploads/Group_7055270eb1.svg"
                  }
                  alt=""
                  className="lg:tw-min-w-[28px]"
                  width={20}
                  height={20}
                />
                <div className="tw-text-sm tw-opacity-80 lg:tw-text-base">{value}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="tw-pt-9 tw-pb-6 tw-px-4 tw-bg-[#E4F1F1] lg:tw-py-6 lg:tw-px-5">
          <Image
            src={
              "https://cms-strapi.ichiba.net/uploads/Rectangle_6690_2386bda323.svg"
            }
            alt=""
            width={322}
            height={220}
            className="lg:tw-min-w-[467px]"
          />
        </div>
      </div>
    </div>
  );
};
export default Provide;
