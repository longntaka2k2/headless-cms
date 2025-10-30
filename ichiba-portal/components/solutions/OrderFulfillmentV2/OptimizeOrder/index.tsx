import { useTranslation } from "next-i18next";
import Image from "next/image";
import sameday from "@/public/solutions/sameday.png";
import bgSameday from "@/public/solutions/bg-sameday.png";
import samedayFulfill from "@/public/solutions/sameday-fulfill.svg";
import samedayCommit from "@/public/solutions/sameday-commit.svg";
import payAs from "@/public/solutions/payas.png";
import bgMultiple from "@/public/solutions/bg-multiple.png";
import locationsMultiple from "@/public/solutions/locations-multiple.png";
import imageDelivery from "@/public/solutions/image-delivery.png";
import tracking from "@/public/solutions/tracking.png";
import customizedPacking from "@/public/solutions/customized-packing.png";
import imageProvide from "@/public/solutions/image-provide.png";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export const OptimizeOrder = () => {
  const { t } = useTranslation("order-fulfillment-by-efex");

  return (
    <div className="tw-overflow-hidden">
      <div className="tw-container tw-grid tw-gap-4 lg:tw-gap-14">
        <div className=" tw-text-center">
          <h2 className="tw-text-2xl tw-font-bold lg:tw-text-4xl">
            {t("fulfillOrders.heading")}
          </h2>
          <p className="tw-mt-1 tw-text-sm tw-text-ic-ink-5 lg:tw-text-lg lg:tw-leading-6">
            {t("fulfillOrders.subHeading")}
          </p>
        </div>

        <div
          className={clsx(
            "tw-container lg:tw-grid lg:tw-grid-cols-2 tw-rounded-2xl tw-border tw-border-blue-1 tw-items-center lg:tw-py-10 lg:tw-pr-5",
            "tw-flex tw-flex-wrap-reverse tw-p-4",
          )}
          style={{
            backgroundImage: `url(${bgSameday.src})`,
            backgroundSize: "cover",
          }}
        >
          <div className="tw-w-full tw-max-h-[359px] lg:-tw-translate-x-10 tw-rounded-2xl tw-overflow-hidden">
            <Image
              src={sameday}
              alt="sameday"
              className="tw-w-full tw-h-full"
            />
          </div>

          <div className="">
            <h3 className="tw-text-lg lg:tw-text-xl tw-font-bold">
              1.{" "}
              {t("fulfillOrders.sameDay.title")}
            </h3>
            <div className="lg:tw-flex gap-5 tw-my-5 tw-items-center">
              <Image
                src={samedayFulfill}
                alt="sameday"
                className="tw-w-[60px] tw-h-[60px]"
              />
              <p className="tw-text-sm lg:tw-text-base tw-mt-2 lg:tw-mt-0">
                {t(
                  "fulfillOrders.sameDay.content.0",
                )}
              </p>
            </div>
            <div className="lg:tw-flex gap-5 tw-my-5 tw-items-center">
              <Image
                src={samedayCommit}
                alt="sameday"
                className="tw-w-[60px] tw-h-[60px]"
              />
              <p className="tw-text-sm lg:tw-text-base tw-mt-2 lg:tw-mt-0">
                {t(
                  "fulfillOrders.sameDay.content.1",
                )}
              </p>
            </div>
          </div>
        </div>

        <div className="lg:tw-w-[85%]">
          <div className="tw-grid lg:tw-grid-cols-4 lg:tw-h-auto tw-w-auto">
            <div
              className={clsx(
                "lg:tw-col-span-3 tw-bg-[#F3F7FE] lg:tw-pl-10 lg:tw-pr-[35%] tw-rounded-t-2xl lg:tw-rounded-l-2xl",
                "tw-flex tw-flex-col lg:tw-justify-center tw-h-[341px] tw-p-4",
              )}
            >
              <h3 className="tw-text-lg lg:tw-text-2xl tw-font-bold tw-mb-4 lg:tw-mb-5">
                2.{" "}
                {t("fulfillOrders.payAs.title")}
              </h3>
              <div className="tw-flex tw-justify-center tw-gap-4 tw-mb-4 lg:tw-pl-10 lg:tw-mb-3">
                <div
                  className={clsx(
                    "tw-bg-[#1135A8] tw-rounded-full tw-flex tw-items-center tw-justify-center",
                    "tw-min-w-[32px] tw-min-h-[32px] tw-max-w-[32px] tw-max-h-[32px]",
                  )}
                >
                  <FontAwesomeIcon icon={faCheck} className="tw-text-white" />
                </div>
                <p className="tw-text-sm lg:tw-text-base">
                  {t(
                    "fulfillOrders.payAs.content.0",
                  )}
                </p>
              </div>
              <div className="tw-flex tw-justify-center tw-gap-4 lg:tw-pl-10">
                <div
                  className={clsx(
                    "tw-bg-[#1135A8] tw-rounded-full tw-flex tw-items-center tw-justify-center",
                    "tw-min-w-[32px] tw-min-h-[32px] tw-max-w-[32px] tw-max-h-[32px]",
                  )}
                >
                  <FontAwesomeIcon icon={faCheck} className="tw-text-white" />
                </div>
                <p className="tw-text-sm lg:tw-text-base">
                  {t(
                    "fulfillOrders.payAs.content.1",
                  )}
                </p>
              </div>
            </div>
            <div className="tw-col-span-1 tw-bg-[#0C172D] tw-w-full tw-h-[197px] lg:tw-h-[360px] tw-rounded-b-2xl lg:tw-rounded-r-2xl tw-relative">
              <div
                className={clsx(
                  "tw-w-[324px] tw-h-[281px] lg:tw-w-[429px] lg:tw-h-[373px] tw-rounded-xl tw-overflow-hidden",
                  "tw-absolute tw-left-[50%] tw-translate-x-[-50%] tw-bottom-[15%]",
                  "lg:tw-bottom-0 lg:tw-translate-x-0 lg:tw-top-[10%] lg:tw-left-[-85%]",
                )}
              >
                <Image
                  src={payAs}
                  alt="payAs"
                  className="tw-w-full tw-h-full"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="tw-grid lg:tw-grid-cols-7 tw-gap-4 lg:tw-gap-6 lg:tw-mt-10">
          <div
            className="tw-rounded-lg lg:tw-rounded-2xl tw-grid tw-gap-6 tw-overflow-hidden lg:tw-col-span-4"
            style={{
              backgroundImage: `url(${bgMultiple.src})`,
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="tw-mt-4 tw-px-4 lg:tw-mt-10 lg:tw-px-7 tw-flex tw-gap-2">
              <p className="tw-text-lg lg:tw-text-2xl tw-font-bold">3.</p>
              <div>
                <h3 className="tw-text-lg lg:tw-text-2xl tw-font-bold tw-mb-2">
                  {t(
                    "fulfillOrders.multiple.title",
                  )}
                </h3>
                <p className="tw-text-sm lg:tw-text-base">
                  {t(
                    "fulfillOrders.multiple.content",
                  )}
                </p>
              </div>
            </div>
            <div className="tw-w-full tw-max-h-[361px]">
              <Image
                src={locationsMultiple}
                alt="locationsMultiple"
                className="tw-w-full tw-h-full tw-object-left tw-object-contain"
              />
            </div>
          </div>

          <div className="tw-rounded-lg lg:tw-rounded-2xl tw-grid tw-gap-6 tw-border tw-relative lg:tw-col-span-3">
            <div className="tw-mt-4 tw-px-4 lg:tw-mt-10 lg:tw-px-7 tw-flex tw-gap-2">
              <p className="tw-text-lg lg:tw-text-2xl tw-font-bold">4.</p>
              <div>
                <h3 className="tw-text-lg lg:tw-text-2xl tw-font-bold tw-mb-2">
                  {t(
                    "fulfillOrders.delivery.title",
                  )}
                </h3>
                <p className="tw-text-sm lg:tw-text-base">
                  {t(
                    "fulfillOrders.delivery.content",
                  )}
                </p>
              </div>
            </div>
            <div className="tw-w-full tw-max-h-[361px] tw-rounded-b-lg lg:tw-rounded-b-2xl tw-overflow-hidden">
              <Image
                src={imageDelivery}
                alt="imageDelivery"
                className="tw-w-full tw-h-full tw-object-cover"
              />
            </div>
            <div className="tw-absolute tw-w-[99px] tw-h-[147px] lg:tw-w-[204px] lg:tw-h-[303px] tw-bottom-[-5%] tw-right-[15%]">
              <Image
                src={tracking}
                alt="tracking"
                className="tw-w-full tw-h-full"
              />
            </div>
          </div>
        </div>

        <div className="">
          <h3 className="tw-text-lg lg:tw-text-2xl tw-font-bold tw-mb-2 lg:tw-mb-5">
            5.{" "}
            {t("fulfillOrders.customized.title")}
          </h3>
          <div className="lg:tw-flex tw-gap-15 tw-items-end">
            <div className="lg:tw-w-[45%] tw-h-[200px] lg:tw-h-[285px] tw-rounded-lg lg:tw-rounded-2xl tw-overflow-hidden tw-mb-4">
              <Image
                src={customizedPacking}
                alt="tracking"
                className="tw-w-full tw-h-full"
              />
            </div>
            <div className="lg:tw-w-[55%]">
              <div className="tw-w-[85%]">
                <div className="tw-flex lg:tw-flex-col tw-gap-3 tw-items-start">
                  <Image
                    src={samedayFulfill}
                    alt="sameday"
                    className="tw-w-[60px] tw-h-[60px]"
                  />
                  <p className="tw-text-sm lg:tw-text-base">
                    {t(
                      "fulfillOrders.customized.content.0",
                    )}
                  </p>
                </div>
                <hr className="tw-bg-gradient-to-l tw-from-[#959DB9] tw-to-[#AF0000] tw-h-[2px]" />
                <div className="tw-flex lg:tw-flex-col tw-gap-3 tw-items-start">
                  <Image
                    src={samedayFulfill}
                    alt="sameday"
                    className="tw-w-[60px] tw-h-[60px]"
                  />
                  <p className="tw-text-sm lg:tw-text-base">
                    {t(
                      "fulfillOrders.customized.content.1",
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tw-grid lg:tw-grid-cols-2 tw-gap-5 lg:tw-gap-[206px] tw-mb-5 lg:tw-mb-15">
          <div className="tw-self-center">
            <h3 className="tw-text-lg lg:tw-text-2xl tw-font-bold">
              6.{" "}
              {t("fulfillOrders.provide.title")}
              <span className="tw-uppercase tw-text-[#389E0D] tw-text-xs lg:tw-text-sm tw-font-normal tw-py-1 tw-px-3 tw-bg-[#F6FFED] tw-rounded tw-ml-1">
                {t("fulfillOrders.provide.free")}{" "}
              </span>
            </h3>

            <div className="tw-grid lg:tw-grid-cols-2 tw-gap-2 lg:tw-gap-5">
              <div className="tw-flex lg:tw-flex-col tw-rounded-lg lg:tw-rounded-2xl tw-p-4 lg:tw-py-5 lg:tw-px-6 tw-bg-[#F9F9F9] tw-gap-3 lg:tw-gap-5">
                <div className="tw-w-[41px] tw-h-[41px] lg:tw-w-[60px] lg:tw-h-[60px]">
                  <Image
                    src={samedayCommit}
                    alt="sameday"
                    className="tw-w-full tw-h-full"
                  />
                </div>
                <p className="tw-text-sm lg:tw-text-base tw-line-clamp-4">
                  {t(
                    "fulfillOrders.provide.content.0",
                  )}
                </p>
              </div>

              <div className="tw-flex lg:tw-flex-col tw-rounded-lg lg:tw-rounded-2xl tw-p-4 lg:tw-py-5 lg:tw-px-6 tw-bg-[#F9F9F9] tw-gap-3 lg:tw-gap-5">
                <div className="tw-w-[60px] tw-h-[60px]">
                  <Image
                    src={samedayCommit}
                    alt="sameday"
                    className="tw-w-full tw-h-full"
                  />
                </div>
                <p className="tw-text-sm lg:tw-text-base tw-line-clamp-4">
                  {t(
                    "fulfillOrders.provide.content.1",
                  )}
                </p>
              </div>
            </div>
          </div>

          <div className="tw-relative">
            <Image
              src={
                "https://strapi-efex.ichiba.net/uploads/optimize_bg_lg_dee07f81cd.svg"
              }
              alt=""
              width={148}
              height={196}
              className={clsx(
                "tw-absolute tw-top-[14px] tw-left-[190px] tw-w-[73px] tw-h-[97px] ",
                "lg:tw-top-[32px] lg:tw-left-[322px] lg:tw-w-[148px] lg:tw-h-[196px]",
              )}
              quality={100}
            />
            <div className="tw-bg-[#AF7E00] lg:tw-w-[1000px] tw-h-[191px] lg:tw-h-[430px] tw-opacity-10 tw-translate-x-[10%] lg:tw-translate-x-0" />
            <div
              className={clsx(
                "tw-absolute tw-top-[5%] lg:tw-top-[40px] lg:-tw-left-[102px]",
              )}
            >
              <Image
                src={imageProvide}
                alt=""
                width={497}
                height={356}
                className="tw-w-[239px] tw-h-[171px] lg:tw-w-[497px] lg:tw-h-[356px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
