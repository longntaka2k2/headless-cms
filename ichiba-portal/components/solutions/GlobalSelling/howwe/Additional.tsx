import { clsx } from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";

const Additional = () => {
  const g = useTranslation("global-selling").t;

  return (
    <div className="tw-mt-20 tw-p-4 tw-pb-6 tw-rounded-lg lg:tw-rounded-2xl tw-bg-[#F3F7FE] lg:tw-p-[40px_40px_60px_40px] lg:tw-container ">
      <h2 className="tw-text-center tw-text-2xl lg:tw-text-4xl tw-font-bold">
        {g("additional.title")}
      </h2>
      <div className="lg:tw-grid lg:tw-grid-cols-2 lg:tw-gap-6 lg:tw-mt-10">
        <div className="tw-rounded-lg lg:tw-rounded-2xl tw-bg-white tw-p-3 lg:tw-p-6 tw-shadow-[0px_8px_16px_0px_rgba(0,0,0,0.05)] tw-mt-5 lg:tw-mt-0">
          <h3 className="tw-font-bold lg:tw-text-2xl">
            {g("additional.duty.title")}
          </h3>
          <div className="tw-mt-4">
            <div className="tw-grid tw-gap-3 ">
              {(
                g(`additional.duty.content`, {
                  returnObjects: true,
                }) as string[]
              ).map((value: any, index: number) => (
                <div
                  key={index}
                  className="tw-flex tw-gap-2 lg:tw-gap-4 tw-items-start"
                >
                  <Image
                    src="https://cms-strapi.ichiba.net/uploads/Group_1_b5d226f176.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="tw-min-w-[28px]"
                  />
                  <div className="tw-text-sm lg:tw-text-base tw-opacity-80">
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="tw-rounded-lg lg:tw-rounded-2xl tw-bg-white lg:tw-p-6 tw-p-3 tw-mt-6 lg:tw-mt-0 tw-shadow-[0px_8px_16px_0px_rgba(0,0,0,0.05)]">
          <h3 className="tw-font-bold lg:tw-text-2xl">
            {g("additional.customs.title")}
          </h3>
          <div className="tw-mt-4">
            <div className="tw-grid tw-gap-3 ">
              {(
                g(`additional.customs.content`, {
                  returnObjects: true,
                }) as string[]
              ).map((value: any, index: number) => (
                <div
                  key={index}
                  className="tw-flex tw-gap-2 lg:tw-gap-4 tw-items-start"
                >
                  <Image
                    src="https://cms-strapi.ichiba.net/uploads/Group_1_b5d226f176.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="tw-min-w-[28px]"
                  />
                  <div className="tw-text-sm lg:tw-text-base tw-opacity-80">
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Additional;
