import { useTranslation } from "next-i18next";
import Image from "next/image";
const Integration = () => {
  const a = useTranslation("all-in-one").t;

  return (
    <div className="tw-py-6 tw-px-4 tw-bg-[#F5F7FA] lg:tw-py-15 lg:tw-px-0">
      <div className=" lg:tw-container">
        <h2 className="tw-px-7 tw-text-2xl tw-font-bold tw-text-center">
          {a("iChibaBring.integration.title")}
        </h2>
        <div className="lg:tw-hidden">
          <h3 className="tw-font-bold tw-text-base tw-mb-0">
            {a("iChibaBring.integration.dosmetic.title")}
          </h3>
          <div className="tw-flex tw-overflow-x-auto tw-py-2 tw-gap-2">
            {(
              a(`iChibaBring.integration.dosmetic.items`, {
                returnObjects: true,
              }) as string[]
            ).map((value: any, index: number) => (
              <div
                className="tw-flex tw-p-3 tw-gap-4 tw-items-center tw-min-w-[200px] lg:tw-min-w-[280px]  tw-bg-white tw-border tw-border-[#ddd] tw-rounded-lg lg:tw-rounded-xl "
                key={index}
              >
                <Image
                  src={value.icon}
                  alt=""
                  width={40}
                  height={40}
                  className="tw-min-w-[40px] lg:tw-min-w-[48px]"
                />
                <div className="tw-text-sm tw-font-medium lg:tw-text-base">{value.title}</div>
              </div>
            ))}
          </div>
          <h3 className="tw-font-bold tw-text-base tw-mt-3 tw-mb-0">
            {a("iChibaBring.internatonal.title")}
          </h3>
          <div className="tw-overflow-x-scroll">
            <div className="tw-grid tw-grid-cols-4 tw-w-max tw-py-2 tw-gap-2">
              {(
                a(`iChibaBring.internatonal.items`, {
                  returnObjects: true,
                }) as string[]
              ).map((value: any, index: number) => (
                <div
                  className="tw-flex tw-p-3 tw-gap-4 tw-items-center tw-min-w-[200px] lg:tw-min-w-[280px]  tw-bg-white tw-border tw-border-[#ddd] tw-rounded-lg lg:tw-rounded-xl "
                  key={index}
                >
                  <Image
                    src={value.icon}
                    alt=""
                    width={40}
                    height={40}
                    className="tw-min-w-[40px] lg:tw-min-w-[48px]"
                  />
                  <div className="tw-text-sm tw-font-medium lg:tw-text-base">{value.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="tw-hidden lg:tw-block">
          <div className="tw-font-bold tw-text-xl tw-mt-8">
            {a("iChibaBring.integration.dosmetic.title")}
          </div>
          <div className="tw-grid tw-grid-cols-4 tw-gap-6 tw-mt-4">
            {(
              a(`iChibaBring.integration.dosmetic.items`, {
                returnObjects: true,
              }) as string[]
            ).map((value: any, index: number) => (
              <div
                className="tw-flex tw-p-3 tw-gap-4 tw-items-center tw-min-w-[200px] lg:tw-min-w-[280px]  tw-bg-white tw-border tw-border-[#ddd] tw-rounded-lg lg:tw-rounded-xl "
                key={index}
              >
                <Image
                  src={value.icon}
                  alt=""
                  width={40}
                  height={40}
                  className="tw-min-w-[40px] lg:tw-min-w-[48px]"
                />
                <div className="tw-text-sm tw-font-medium lg:tw-text-base">{value.title}</div>
              </div>
            ))}
          </div>
          <div className="tw-font-bold tw-text-xl tw-mt-8">
            {a("iChibaBring.internatonal.title")}
          </div>
          <div className="tw-mt-4">
            <div className="tw-grid tw-grid-cols-4 tw-gap-6">
              {(
                a(`iChibaBring.internatonal.items`, {
                  returnObjects: true,
                }) as string[]
              ).map((value: any, index: number) => (
                <div
                  className="tw-flex tw-p-3 tw-gap-4 tw-items-center tw-min-w-[200px] lg:tw-min-w-[280px]  tw-bg-white tw-border tw-border-[#ddd] tw-rounded-lg lg:tw-rounded-xl "
                  key={index}
                >
                  <Image
                    src={value.icon}
                    alt=""
                    width={40}
                    height={40}
                    className="tw-min-w-[40px] lg:tw-min-w-[48px]"
                  />
                  <div className="tw-text-sm tw-font-medium lg:tw-text-base">{value.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Integration;
