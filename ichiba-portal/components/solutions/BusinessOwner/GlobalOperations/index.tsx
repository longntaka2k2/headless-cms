import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";
const GlobalOperations = () => {
  const b = useTranslation("business-owner").t;

  return (
    <div
      className={clsx(
        "tw-py-6 tw-px-4 tw-bg-[#FFFDFA] tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Light_Background_2_1_9336d04dcf.png)] tw-bg-cover tw-bg-no-repeat",
        "lg:tw-bg-[url(https://cms-strapi.ichiba.net/uploads/Light_Background_2_1_6a8b7900be.png)] lg:tw-py-15 lg:tw-px-0",
      )}
    >
      <div className="lg:tw-container">
        <div className="lg:tw-text-center lg:tw-max-w-[800px] lg:tw-mx-auto">
          <h3 className="tw-font-bold tw-text-2xl lg:tw-text-4xl">
            {b("global.title")}
          </h3>
          <div className="tw-text-sm tw-mt-2 tw-text-[#666] tw-text-center lg:tw-text-base">
            {b("global.content")}
          </div>
        </div>
        <div className="tw-grid tw-gap-3 lg:tw-grid-cols-3 lg:tw-gap-6 lg:tw-mt-10">
          <div className="tw-rounded-lg lg:tw-rounded-2xl tw-mt-4 lg:tw-mt-0 tw-border tw-border-[#DDD] tw-bg-white tw-px-4 tw-py-3 lg:tw-p-6 lg:tw-grid tw-place-content-between">
            <div>
              <div className="tw-text-base  lg:tw-text-xl tw-font-bold">
                {b("global.markets.title")}
              </div>
              <div className="tw-text-sm lg:tw-text-base tw-mt-2">
                {b("global.markets.content")}
              </div>
            </div>
            <Image
              src={
                "https://cms-strapi.ichiba.net/uploads/Clip_path_group_3bb2b7084f.svg"
              }
              alt="markets"
              width={326}
              height={322}
              className="tw-mt-4 tw-mx-auto"
            />
          </div>
          <div className="lg:tw-col-span-2 tw-grid tw-gap-3 lg:tw-gap-6 lg:tw-grid-cols-2">
            <div className="tw-border tw-border-[#DDD] tw-rounded-lg lg:tw-rounded-2xl">
              <div className="tw-pt-3 tw-px-3 lg:tw-p-6">
                <div className="tw-text-base  lg:tw-text-xl tw-font-bold ">
                  {b("global.warehouse.title")}
                </div>
                <div className="tw-text-sm lg:tw-text-base tw-mt-2">
                  {b("global.warehouse.content")}
                </div>
              </div>
              <Image
                src={
                  "https://cms-strapi.ichiba.net/uploads/Asset_1_1_2a15bf6bbf.svg"
                }
                alt="markets"
                width={312}
                height={160}
                className="tw-mt-4 tw-mx-auto tw-float-right"
              />
            </div>
            <div className="tw-border tw-border-[#DDD] tw-rounded-lg lg:tw-rounded-2xl">
              <div className="tw-pt-3 tw-px-3 lg:tw-p-6">
                <div className="tw-text-base  lg:tw-text-xl tw-font-bold ">
                  {b("global.currencies.title")}
                </div>
                <div className="tw-text-sm lg:tw-text-base tw-mt-2">
                  {b("global.currencies.content")}
                </div>
              </div>
              <Image
                src={
                  "https://cms-strapi.ichiba.net/uploads/21e7fc0ad93a3fa702f2c80a87c9372f_1_a5799909d5.png"
                }
                alt="markets"
                width={293}
                height={197}
                className="tw-mt-4 tw-mx-auto tw-float-right"
              />
            </div>
            <div className="lg:tw-flex lg:tw-items-center lg:tw-gap-10 lg:tw-col-span-2 tw-border tw-border-[#DDD] tw-rounded-lg lg:tw-rounded-2xl tw-px-4 tw-py-3 lg:tw-p-6">
              <div className="">
                <h3 className="tw-text-base  lg:tw-text-xl tw-font-bold ">
                  {b("global.channels.title")}
                </h3>
                <div className="tw-text-sm lg:tw-text-base tw-mt-2">
                  {b("global.channels.content")}
                </div>
              </div>
              <Image
                src={
                  "https://cms-strapi.ichiba.net/uploads/Frame_1171275899_052a4194e8.png"
                }
                alt="markets"
                width={293}
                height={197}
                className="tw-mt-6 tw-mx-auto "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalOperations;
