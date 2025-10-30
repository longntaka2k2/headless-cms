import { useTranslation } from "next-i18next";
import Image from "next/image";
const Same = () => {
  const s = useTranslation("multichannel-fulfill").t;

  return (
    <div className="tw-py-6 lg:tw-py-15 tw-px-4 lg:tw-px-0 lg:tw-container">
      <div className="tw-px-4 tw-pt-4 tw-bg-[#F3F7FE] tw-rounded-lg lg:tw-rounded-xl lg:tw-px-[40px] lg:tw-pt-6">
        <h3 className="tw-font-bold tw-text-xl lg:tw-text-2xl lg:tw-text-center">
          {s("simplify.sameDay.title")}
        </h3>
        <div className="lg:tw-flex lg:tw-gap-15 lg:tw-mt-11">
          <Image
            src={
              "https://cms-strapi.ichiba.net/uploads/product_sec5_2x_1_2c8d901efe.svg"
            }
            alt="sameDay"
            width={327}
            height={157}
            className="tw-w-full lg:tw-block tw-hidden"
          />
          <div className="tw-mt-4 tw-grid tw-gap-4 lg:tw-mt-5">
            <div className="tw-flex tw-items-start tw-gap-4">
              <Image
                src={
                  "https://cms-strapi.ichiba.net/uploads/PART_Handling_v2_1_56f3a5faf7.svg"
                }
                alt=""
                width={48}
                height={48}
                className="lg:tw-min-w-[48px] tw-w-[32px]"
              />
              <div className="lg:tw-text-base tw-text-sm">
                {s("simplify.sameDay.fulfill")}
              </div>
            </div>
            <div className="tw-flex tw-items-start tw-gap-4">
              <Image
                src={
                  "https://cms-strapi.ichiba.net/uploads/product_sec10_3_1_15d543b7bd.svg"
                }
                alt="sameDay"
                width={48}
                height={48}
                className="lg:tw-min-w-[48px] tw-w-[32px]"
              />
              <div className="lg:tw-text-base tw-text-sm">
                {s("simplify.sameDay.provide")}
              </div>
            </div>
          </div>
        </div>
        <Image
          src={
            "https://cms-strapi.ichiba.net/uploads/product_sec5_2x_1_2c8d901efe.svg"
          }
          alt="sameDay"
          width={327}
          height={157}
          className="tw-w-full tw-mt-10 lg:tw-hidden "
        />
      </div>
    </div>
  );
};
export default Same;
