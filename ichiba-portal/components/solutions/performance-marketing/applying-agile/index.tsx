import { useTranslation } from "next-i18next";
import Image from "next/image";
import clsx from "clsx";
import SvgIcon from "@/components/common/SvgIcon";

export const ApplyinAgile = () => {
  const { t } = useTranslation("performance-marketing");
  return (
    <section
      style={{
        background:
          "linear-gradient(90deg, rgba(238,249,255,1) 31%, rgba(252,232,233,1) 61%, rgba(235,247,255,1) 83%)",
      }}
      className="lg:tw-mb-20 tw-pt-2 lg:tw-pt-20 tw-pb-12 lg:tw-pb-[100px] tw-overflow-hidden"
    >
      <div className="tw-container">
        <h2 className="tw-my-6 lg:tw-mt-0 lg:tw-mb-6 tw-text-2xl lg:tw-text-4xl tw-font-bold tw-text-center">
          {t("applyinAgile.heading")}
        </h2>

        <div className="tw-flex tw-flex-col tw-gap-5 lg:tw-hidden">
          <div className="tw-group tw-cursor-pointer tw-overflow-x-scroll tw-pb-2">
            <div
              className={clsx(
                "group-hover:tw-bg-[#F57C00] tw-transition-all tw-ease-in-out tw-duration-300",
                "tw-bg-[#E8E8E8] tw-w-[90%] tw-mx-auto tw-rounded-t-lg",
                "tw-py-2 tw-px-5",
              )}
            >
              <h3
                className={clsx(
                  "group-hover:tw-text-white tw-transition-all tw-ease-in-out tw-duration-300",
                  "tw-text-lg tw-font-bold tw-mb-0 tw-line-clamp-1",
                )}
              >
                {t("applyinAgile.agencies.title")}
              </h3>
            </div>
            <div
              className={clsx(
                "tw-relative tw-max-h-[205px] tw-w-[1181px] tw-h-full ",
                "tw-rounded-xl lg:tw-rounded-2xl tw-border-[4px] tw-overflow-hidden",
                "tw-border-[#E8E8E8] group-hover:tw-border-[#F57C00] tw-transition-all tw-ease-in-out tw-duration-300",
              )}
            >
              <Image
                src="https://cms-strapi.ichiba.net/uploads/Body2_aa2f781283.svg"
                width={1350}
                height={205}
                alt="agenciesMobile"
                className="tw-w-full tw-h-full tw-object-cover"
              />

              <p className="tw-text-sm tw-font-medium tw-mb-0 tw-max-w-[165px] tw-w-full tw-text-center tw-absolute tw-top-[74px] -tw-left-6">
                {t("applyinAgile.agencies.bigStraegy")}
              </p>
              <div className="tw-text-sm tw-font-medium tw-absolute tw-top-[74px] tw-left-[8.5%] tw-text-center tw-max-w-[190px] tw-w-full">
                <p className="tw-mb-0">
                  {t("applyinAgile.agencies.userResearch.0")}
                </p>
                <p className="tw-mb-0">
                  {t("applyinAgile.agencies.userResearch.1")}
                </p>
              </div>
              <p className="tw-text-sm tw-font-medium tw-mb-0 tw-max-w-[165px] tw-w-full tw-text-center tw-absolute tw-top-[74px] tw-left-[21.5%]">
                {t("applyinAgile.agencies.adjust")}
              </p>
              <div className="tw-text-sm tw-font-medium tw-absolute tw-top-[74px] tw-left-[34%] tw-text-center tw-max-w-[165px] tw-w-full">
                <p className="tw-mb-0">
                  {t("applyinAgile.agencies.bigLaunch.0")}
                </p>
                <p className="tw-mb-0">
                  {t("applyinAgile.agencies.bigLaunch.1")}
                </p>
              </div>
              <p className="tw-text-sm tw-font-medium tw-mb-0 tw-max-w-[165px] tw-w-full tw-text-center tw-absolute tw-top-[74px] tw-left-[47%]">
                {t("applyinAgile.agencies.insights")}
              </p>
              <p className="tw-text-xs tw-mb-0 tw-max-w-[165px] tw-w-full tw-text-center tw-absolute tw-bottom-[20px] tw-left-[20.5%] tw-bg-[#f3f1f1]">
                {t("applyinAgile.agencies.testNew")}
              </p>
              <p className="tw-text-sm tw-font-medium tw-mb-0 tw-max-w-[165px] tw-w-full tw-text-center tw-absolute tw-top-[74px] tw-right-[27%]">
                {t("applyinAgile.agencies.newBig")}
              </p>

              <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-bg-[#E8E8E8] tw-opacity-40 group-hover:tw-hidden"></div>
            </div>
          </div>
          <div className="tw-group tw-cursor-pointer tw-overflow-x-scroll tw-pb-2">
            <div
              className={clsx(
                "group-hover:tw-bg-[#F57C00] tw-transition-all tw-ease-in-out tw-duration-300 tw-flex tw-gap-[10px] tw-items-center",
                "tw-bg-[#E8E8E8] tw-w-[90%] tw-mx-auto tw-rounded-t-lg tw-py-2 tw-px-5",
              )}
            >
              <div>
                <SvgIcon
                  icon="svg-icon-logo"
                  width={24}
                  height={24}
                  className="lg:tw-hidden"
                />
              </div>
              <h3
                className={clsx(
                  "group-hover:tw-text-white tw-transition-all tw-ease-in-out tw-duration-300",
                  "tw-text-lg tw-font-bold tw-mb-0 tw-line-clamp-1",
                )}
              >
                {t("applyinAgile.agile.title")}
              </h3>
            </div>
            <div
              className={clsx(
                "tw-relative tw-max-h-[205px] tw-w-[1181px] tw-h-full",
                "tw-rounded-xl lg:tw-rounded-2xl tw-border-[4px] tw-overflow-hidden",
                "tw-border-[#E8E8E8] group-hover:tw-border-[#F57C00] tw-transition-all tw-ease-in-out tw-duration-300",
              )}
            >
              <Image
                src="https://cms-strapi.ichiba.net/uploads/Body_6fc08fe6b1.svg"
                width={1350}
                height={226}
                alt="agileMobile"
                className="tw-w-full tw-h-full tw-object-cover"
              />

              <p className="tw-text-sm tw-font-medium tw-mb-0 tw-max-w-[75PX] tw-w-full tw-text-center tw-absolute tw-top-[100px] tw-left-3">
                {t("applyinAgile.agile.micro")}
              </p>
              <div className="tw-text-sm tw-font-medium tw-absolute tw-top-[100px] tw-left-[10%] tw-text-center tw-max-w-[168px] tw-w-full">
                <p className="tw-mb-0">
                  {t("applyinAgile.agile.iterativeCycle.0")}
                </p>
                <p className="tw-mb-0">
                  {t("applyinAgile.agile.iterativeCycle.1")}
                </p>
              </div>
              <p className="tw-text-sm tw-font-medium tw-mb-0 tw-max-w-[168px] tw-w-full tw-text-center tw-absolute tw-top-[100px] tw-left-[23.5%]">
                {t("applyinAgile.agile.insights")}
              </p>
              <p className="tw-text-sm tw-font-medium tw-mb-0 tw-max-w-[168px] tw-w-full tw-text-center tw-absolute tw-top-[100px] tw-left-[35%]">
                {t("applyinAgile.agile.test")}
              </p>
              <p className="tw-text-sm tw-font-medium tw-mb-0 tw-max-w-[168px] tw-w-full tw-text-center tw-absolute tw-top-[100px] tw-left-[46.5%]">
                {t("applyinAgile.agile.adjust")}
              </p>
              <div className="tw-text-sm tw-font-medium tw-absolute tw-top-[100px] tw-right-[26.5%] tw-text-center tw-max-w-[168px] tw-w-full">
                <p className="tw-mb-0">
                  {t("applyinAgile.agile.iterativeCycle.0")}
                </p>
                <p className="tw-mb-0">
                  {t("applyinAgile.agile.iterativeCycle.1")}
                </p>
              </div>
              <p className="tw-text-sm tw-font-medium tw-mb-0 tw-max-w-[168px] tw-w-full tw-text-center tw-absolute tw-top-[100px] tw-right-[13%]">
                {t("applyinAgile.agile.adjust")}
              </p>
              <div className="tw-absolute tw-top-5 tw-right-5 tw-text-white tw-rounded tw-pt-1 tw-px-3 tw-text-sm tw-font-bold tw-bg-[#025DB1]">
                {t("applyinAgile.agile.continue")}
              </div>
              <p className="tw-text-sm tw-font-medium tw-mb-0 tw-max-w-[122px] tw-w-full tw-text-center tw-absolute tw-top-11 tw-right-3.5">
                {t("applyinAgile.agile.maintain")}
              </p>
              <div className="tw-absolute tw-bottom-16 tw-right-5 tw-text-white tw-rounded tw-pt-1 tw-px-3 tw-text-sm tw-font-bold tw-bg-[#025DB1]">
                {t("applyinAgile.agile.optimize")}
              </div>
              <p className="tw-text-sm tw-font-medium tw-mb-0 tw-max-w-[122px] tw-w-full tw-text-center tw-absolute  tw-bottom-6 tw-right-3.5">
                {t("applyinAgile.agile.optimization")}
              </p>
              <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-bg-[#E8E8E8] tw-opacity-40 group-hover:tw-hidden"></div>
            </div>
          </div>
        </div>

        <div className="lg:tw-flex tw-gap-15 tw-hidden">
          <div className="tw-w-[40%] tw-group tw-cursor-pointer">
            <div
              className={clsx(
                "group-hover:tw-bg-[#F57C00] tw-transition-all first-line:tw-ease-in-out tw-duration-300",
                "tw-bg-[#E8E8E8] tw-w-[90%] tw-mx-auto tw-rounded-t-lg tw-py-3 tw-text-center",
              )}
            >
              <h3
                className={clsx(
                  "group-hover:tw-text-white tw-transition-all tw-ease-in-out tw-duration-300",
                  "tw-text-xl tw-font-bold tw-mb-0 tw-line-clamp-1",
                )}
              >
                {t("applyinAgile.agencies.title")}
              </h3>
            </div>
            <div
              className={clsx(
                "tw-relative tw-w-full tw-h-[1185px] tw-border-[#E8E8E8]",
                "tw-rounded-2xl tw-border-[4px] tw-overflow-hidden",
                "group-hover:tw-border-[#F57C00] tw-transition-all tw-ease-in-out tw-duration-300",
              )}
            >
              <Image
                src="https://cms-strapi.ichiba.net/uploads/Body_94c8711068.svg"
                width={486}
                height={1185}
                alt="agencies"
                className="tw-h-full tw-object-cover tw-mx-auto"
              />

              <p className="tw-text-base tw-font-medium tw-mb-0 tw-max-w-[165px] tw-w-full tw-text-center tw-absolute tw-top-[8.5%] tw-left-[50%] -tw-translate-x-[50%]">
                {t("applyinAgile.agencies.bigStraegy")}
              </p>
              <div className="tw-text-base tw-font-medium tw-absolute tw-top-[22%] tw-left-[50%] -tw-translate-x-[50%] tw-text-center tw-max-w-[165px] tw-w-full">
                <p className="tw-mb-0">
                  {t("applyinAgile.agencies.userResearch.0")}
                </p>
                <p className="tw-mb-0">
                  {t("applyinAgile.agencies.userResearch.1")}
                </p>
              </div>
              <p className="tw-text-base tw-font-medium tw-mb-0 tw-max-w-[165px] tw-w-full tw-text-center tw-absolute tw-top-[39%] tw-left-[50%] -tw-translate-x-[50%]">
                {t("applyinAgile.agencies.adjust")}
              </p>
              <div className="tw-text-base tw-font-medium tw-absolute tw-bottom-[43.5%] tw-left-[50%] -tw-translate-x-[50%] tw-text-center tw-max-w-[165px] tw-w-full">
                <p className="tw-mb-0">
                  {t("applyinAgile.agencies.bigLaunch.0")}
                </p>
                <p className="tw-mb-0">
                  {t("applyinAgile.agencies.bigLaunch.1")}
                </p>
              </div>
              <p className="tw-text-base tw-font-medium tw-mb-0 tw-max-w-[165px] tw-w-full tw-text-center tw-absolute tw-bottom-[32%] tw-left-[50%] -tw-translate-x-[50%]">
                {t("applyinAgile.agencies.insights")}
              </p>
              <p className="tw-text-base tw-font-medium tw-mb-0 tw-max-w-[130px] tw-w-full tw-text-center tw-absolute tw-top-[28.5%] tw-left-3">
                {t("applyinAgile.agencies.testNew")}
              </p>
              <p className="tw-text-base tw-font-medium tw-mb-0 tw-max-w-[165px] tw-w-full tw-text-center tw-absolute tw-bottom-[20%] tw-left-[50%] -tw-translate-x-[50%]">
                {t("applyinAgile.agencies.newBig")}
              </p>

              <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-bg-[#E8E8E8] tw-opacity-40 group-hover:tw-hidden"></div>
            </div>
          </div>
          <div className="lg:tw-w-[60%] tw-group tw-cursor-pointer">
            <div
              className={clsx(
                "group-hover:tw-bg-[#F57C00] tw-transition-all tw-ease-in-out tw-duration-300 tw-flex tw-gap-[10px] tw-items-center tw-justify-center",
                "tw-bg-[#E8E8E8] tw-w-[90%] tw-mx-auto tw-rounded-t-lg tw-py-3",
              )}
            >
              <div>
                <SvgIcon
                  icon="svg-icon-logo"
                  width={32}
                  height={32}
                  className="tw-hidden lg:tw-block"
                />
              </div>
              <h3
                className={clsx(
                  "group-hover:tw-text-white tw-transition-all tw-ease-in-out tw-duration-300",
                  "tw-text-xl tw-font-bold tw-mb-0 tw-line-clamp-1",
                )}
              >
                {t("applyinAgile.agile.title")}
              </h3>
            </div>
            <div
              className={clsx(
                "tw-relative tw-w-full tw-h-[1185px] tw-border-[#E8E8E8]",
                "tw-rounded-2xl tw-border-[4px] tw-overflow-hidden",
                "group-hover:tw-border-[#F57C00] tw-transition-all tw-ease-in-out tw-duration-300",
              )}
            >
              <Image
                src="https://cms-strapi.ichiba.net/uploads/Body_82cb4bf849.svg"
                width={654}
                height={1185}
                alt="agencies"
                className="tw-h-full tw-object-cover tw-mx-auto"
              />

              <p className="tw-text-base tw-font-medium tw-mb-0 tw-max-w-[196px] tw-w-full tw-text-center tw-absolute tw-top-[8%] tw-left-[50%] -tw-translate-x-[50%]">
                {t("applyinAgile.agile.micro")}
              </p>
              <div className="tw-text-base tw-font-medium tw-absolute tw-top-[22%] tw-left-[50%] -tw-translate-x-[50%] tw-text-center tw-max-w-[215px] tw-w-full">
                <p className="tw-mb-0">
                  {t("applyinAgile.agile.iterativeCycle.0")}
                </p>
                <p className="tw-mb-0">
                  {t("applyinAgile.agile.iterativeCycle.1")}
                </p>
              </div>
              <p className="tw-text-base tw-font-medium tw-mb-0 tw-max-w-[196px] tw-w-full tw-text-center tw-absolute tw-top-[36%] tw-left-[50%] -tw-translate-x-[50%]">
                {t("applyinAgile.agile.insights")}
              </p>
              <p className="tw-text-base tw-font-medium tw-mb-0 tw-max-w-[196px] tw-w-full tw-text-center tw-absolute tw-top-[45.5%] tw-left-[50%] -tw-translate-x-[50%]">
                {t("applyinAgile.agile.test")}
              </p>
              <p className="tw-text-base tw-font-medium tw-mb-0 tw-max-w-[196px] tw-w-full tw-text-center tw-absolute tw-bottom-[42%] tw-left-[50%] -tw-translate-x-[50%]">
                {t("applyinAgile.agile.adjust")}
              </p>
              <div className="tw-text-base tw-font-medium tw-absolute tw-bottom-[26%] tw-left-[50%] -tw-translate-x-[50%] tw-text-center tw-max-w-[215px] tw-w-full">
                <p className="tw-mb-0">
                  {t("applyinAgile.agile.iterativeCycle.0")}
                </p>
                <p className="tw-mb-0">
                  {t("applyinAgile.agile.iterativeCycle.1")}
                </p>
              </div>
              <p className="tw-text-base tw-font-medium tw-mb-0 tw-max-w-[196px] tw-w-full tw-text-center tw-absolute tw-bottom-[16%] tw-left-[50%] -tw-translate-x-[50%]">
                {t("applyinAgile.agile.adjust")}
              </p>
              <div className="tw-absolute tw-bottom-[7%] tw-left-[22%] tw-text-white tw-rounded tw-pt-1 tw-px-3 tw-text-lg tw-font-bold tw-bg-[#025DB1]">
                {t("applyinAgile.agile.continue")}
              </div>
              <p className="tw-text-base tw-font-medium tw-mb-0 tw-max-w-[190px] tw-w-full tw-text-center tw-absolute tw-bottom-[15px] tw-left-[17%]">
                {t("applyinAgile.agile.maintain")}
              </p>
              <div className="tw-absolute tw-bottom-[7%] tw-right-[22%] tw-text-white tw-rounded tw-pt-1 tw-px-3 tw-text-lg tw-font-bold tw-bg-[#025DB1]">
                {t("applyinAgile.agile.optimize")}
              </div>
              <p className="tw-text-base tw-font-medium tw-mb-0 tw-max-w-[190px] tw-w-full tw-text-center tw-absolute tw-bottom-[15px] tw-right-[17%]">
                {t("applyinAgile.agile.optimization")}
              </p>

              <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-bg-[#E8E8E8] tw-opacity-40 group-hover:tw-hidden"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
