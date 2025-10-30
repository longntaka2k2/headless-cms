import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";

const POSBuyer = () => {
  const p = useTranslation("pos").t;

  return (
    <div className="tw-py-6 tw-px-4 lg:tw-px-0 lg:tw-py-15 lg:tw-container">
      <div>
        <div className="tw-text-[#1135A8] tw-uppercase tw-text-sm tw-font-medium lg:tw-text-base">
          {p("posforbuyer.label")}
        </div>
        <h3 className="tw-font-bold tw-text-2xl lg:tw-text-4xl">
          {p("posforbuyer.title")}
        </h3>
      </div>
      <div className="tw-grid tw-gap-4 tw-relative lg:tw-grid-cols-2 tw-mt-3 lg:tw-mt-8">
        <Image
          src={
            "https://cms-strapi.ichiba.net/uploads/Frame_1171276567_cfeb914c08.png"
          }
          alt="posforbuyer"
          className="tw-w-full "
          width={588}
          height={360}
        />
        <div className="tw-bg-[#F9F5EF] tw-py-4 tw-pl-5">
          <Image
            src={
              "https://cms-strapi.ichiba.net/uploads/Frame_1171276034_83ee8602cc.svg"
            }
            alt="posforbuyer"
            className="tw-w-[196px] lg:tw-w-[380px] tw-mx-auto"
            width={380}
            height={328}
          />
          <Image
            src={
              "https://cms-strapi.ichiba.net/uploads/pngwing_2_2d4b2ecb09.png"
            }
            alt=""
            width={253}
            height={253}
            className="tw-w-[170px] lg:tw-w-[253px] tw-absolute tw-right-0 tw-top-[55%] lg:tw-left-[48%] lg:tw-top-[40%]"
          />
        </div>
      </div>
      <div className="tw-mt-4 lg:tw-mt-8">
        <div className="tw-grid lg:tw-grid-cols-4 lg:tw-gap-6 tw-gap-4 tw-pl-4 lg:tw-pl-0 lg:tw-pt-4 tw-border-l-[6px] lg:tw-border-t-[6px] lg:tw-border-l-[0px] tw-border-[#D9D9D9]">
          {(
            p("posforbuyer.items", {
              returnObjects: true,
            }) as string[]
          ).map((value: any, index: number) => (
            <div
              className={clsx(
                index === 0 &&
                  "before:tw-absolute tw-relative before:tw-w-[6px] before:tw-h-full before:tw-bg-[#0F62FE] before:tw-left-[-22px]",
                  " before:lg:tw-h-[6px] before:lg:tw-w-full  before:tw-bg-[#0F62FE] before:lg:tw-left-[0px] before:lg:tw-top-[-22px]"
              )}
              key={index}
            >
              <div className="tw-font-bold lg:tw-text-xl">{value.title}</div>
              <div className="tw-text-sm tw-mt-2 lg:tw-text-base lg:tw-mt-3">{value.content}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default POSBuyer;
