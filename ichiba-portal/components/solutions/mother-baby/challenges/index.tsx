import imgChallengesDES from "@/public/images/mother-baby/imgChallengesDES.svg";
import imgChallengesMB from "@/public/images/mother-baby/imgChallengesMB.svg";
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";

export default function Challenges() {
  const { t } = useTranslation("mother-baby");

  return (
    <div
      style={{
        background:
          "radial-gradient(60.08% 60.08% at 50% 44.59%, #FFEAE9 20%, rgba(255, 255, 255, 0.00) 100%)",
      }}
      className="tw-py-6 lg:tw-pt-[120px]"
    >
      <div className="tw-container">
        <h2 className="tw-mb-6 lg:tw-mb-[46px] tw-text-2xl tw-leading-8 lg:tw-text-4xl lg:tw-leading-[48px] tw-font-bold tw-text-center">
          <span className="tw-text-[#F5222D]">{t("challenges.heading.0")}</span>
          {t("challenges.heading.1")}
        </h2>

        <div className="tw-overflow-x-scroll tw-pt-[25px] tw-hidden lg:tw-block">
          <div className="tw-relative tw-w-[1072px] tw-h-[242px] tw-mx-auto">
            <Image
              src="https://cms-strapi.ichiba.net/uploads/Group_1171275975_e91f87c173.svg"
              width={1072}
              height={242}
              alt="imgChallengesDES"
              className="tw-w-full tw-h-full"
            />

            <div
              className={clsx(
                "tw-absolute -tw-top-[25px] tw-left-[50%] tw-translate-x-[-50%]",
                "tw-flex tw-items-center tw-justify-center",
                "tw-h-[51px] tw-text-[#F5222D] tw-px-3 tw-text-lg tw-font-bold tw-rounded-[50px] tw-bg-white tw-max-w-max",
              )}
            >
              {t("challenges.heading.0")}
            </div>

            <div
              className={clsx(
                "tw-absolute tw-bottom-3 tw-left-0",
                "tw-w-[195px] tw-min-h-[136px] tw-rounded-lg tw-bg-white tw-py-4 tw-px-5",
              )}
            >
              <Image
                src={t("challenges.items.0.icon") as string}
                width={41}
                height={40}
                alt="icon"
                className="tw-mx-auto"
              />
              <p className="tw-text-sm tw-font-medium tw-mb-0 tw-mt-1 tw-text-center">
                {t("challenges.items.0.title")}
              </p>
            </div>

            <div
              className={clsx(
                "tw-absolute tw-bottom-3 tw-left-[21.5%]",
                "tw-w-[195px] tw-min-h-[136px] tw-rounded-lg tw-bg-white tw-py-4 tw-px-5",
              )}
            >
              <Image
                src={t("challenges.items.1.icon") as string}
                width={41}
                height={40}
                alt="icon"
                className="tw-mx-auto"
              />
              <p className="tw-text-sm tw-font-medium tw-mb-0 tw-mt-1 tw-text-center">
                {t("challenges.items.1.title")}
              </p>
            </div>

            <div
              className={clsx(
                "tw-absolute tw-bottom-3 tw-left-[50%] tw-translate-x-[-50%]",
                "tw-w-[195px] tw-min-h-[136px] tw-rounded-lg tw-bg-white tw-py-4 tw-px-5",
              )}
            >
              <Image
                src={t("challenges.items.2.icon") as string}
                width={41}
                height={40}
                alt="icon"
                className="tw-mx-auto"
              />
              <p className="tw-text-sm tw-font-medium tw-mb-0 tw-mt-1 tw-text-center">
                {t("challenges.items.2.title")}
              </p>
            </div>

            <div
              className={clsx(
                "tw-absolute tw-bottom-3 tw-right-[21.5%]",
                "tw-w-[195px] tw-min-h-[136px] tw-rounded-lg tw-bg-white tw-py-4 tw-px-5",
              )}
            >
              <Image
                src={t("challenges.items.3.icon") as string}
                width={41}
                height={40}
                alt="icon"
                className="tw-mx-auto"
              />
              <p className="tw-text-sm tw-font-medium tw-mb-0 tw-mt-1 tw-text-center">
                {t("challenges.items.3.title")}
              </p>
            </div>

            <div
              className={clsx(
                "tw-absolute tw-bottom-3 tw-right-0",
                "tw-w-[195px] tw-min-h-[136px] tw-rounded-lg tw-bg-white tw-py-4 tw-px-5",
              )}
            >
              <Image
                src={t("challenges.items.4.icon") as string}
                width={41}
                height={40}
                alt="icon"
                className="tw-mx-auto"
              />
              <p className="tw-text-sm tw-font-medium tw-mb-0 tw-mt-1 tw-text-center">
                {t("challenges.items.4.title")}
              </p>
            </div>
          </div>
        </div>

        <div className="tw-overflow-x-scroll tw-pt-4 lg:tw-hidden">
          <div className="tw-relative tw-w-[350px] tw-h-[776px] tw-mx-auto">
            <Image
              src="https://cms-strapi.ichiba.net/uploads/Group_1171275973_5af579536a.svg"
              width={350}
              height={777}
              alt="imgChallengesMB"
              className="tw-w-full tw-h-full"
            />

            <div
              className={clsx(
                "tw-absolute tw-left-0 tw-top-[50%] tw-translate-y-[-50%]",
                "tw-flex tw-items-center tw-justify-center",
                "tw-text-[#F5222D] tw-text-sm tw-font-bold tw-h-[51px] tw-px-3 tw-rounded-[50px] tw-bg-white",
              )}
            >
              {t("challenges.heading.0")}
            </div>

            <div
              className={clsx(
                "tw-absolute tw-top-0 tw-right-0",
                "tw-w-[195px] tw-min-h-[136px] tw-py-4 tw-px-5 tw-rounded-lg tw-bg-white",
              )}
            >
              <Image
                src={t("challenges.items.0.icon") as string}
                width={41}
                height={40}
                alt="icon"
                className="tw-mx-auto"
              />
              <p className="tw-text-sm tw-font-medium tw-mb-0 tw-mt-1 tw-text-center">
                {t("challenges.items.0.title")}
              </p>
            </div>

            <div
              className={clsx(
                "tw-absolute tw-top-[21.5%] tw-right-0",
                "tw-w-[195px] tw-min-h-[136px] tw-py-4 tw-px-5 tw-rounded-lg tw-bg-white",
              )}
            >
              <Image
                src={t("challenges.items.1.icon") as string}
                width={41}
                height={40}
                alt="icon"
                className="tw-mx-auto"
              />
              <p className="tw-text-sm tw-font-medium tw-mb-0 tw-mt-1 tw-text-center">
                {t("challenges.items.1.title")}
              </p>
            </div>

            <div
              className={clsx(
                "tw-absolute tw-top-[50%] tw-translate-y-[-50%] tw-right-0",
                "tw-w-[195px] tw-min-h-[136px] tw-py-4 tw-px-5 tw-rounded-lg tw-bg-white",
              )}
            >
              <Image
                src={t("challenges.items.2.icon") as string}
                width={41}
                height={40}
                alt="icon"
                className="tw-mx-auto"
              />
              <p className="tw-text-sm tw-font-medium tw-mb-0 tw-mt-1 tw-text-center">
                {t("challenges.items.2.title")}
              </p>
            </div>

            <div
              className={clsx(
                "tw-absolute tw-bottom-[21.5%] tw-right-0",
                "tw-w-[195px] tw-min-h-[136px] tw-py-4 tw-px-5 tw-rounded-lg tw-bg-white",
              )}
            >
              <Image
                src={t("challenges.items.3.icon") as string}
                width={41}
                height={40}
                alt="icon"
                className="tw-mx-auto"
              />
              <p className="tw-text-sm tw-font-medium tw-mb-0 tw-mt-1 tw-text-center">
                {t("challenges.items.3.title")}
              </p>
            </div>

            <div
              className={clsx(
                "tw-absolute tw-bottom-0 tw-right-0",
                "tw-w-[195px] tw-min-h-[136px] tw-py-4 tw-px-5 tw-rounded-lg tw-bg-white",
              )}
            >
              <Image
                src={t("challenges.items.4.icon") as string}
                width={41}
                height={40}
                alt="icon"
                className="tw-mx-auto"
              />
              <p className="tw-text-sm tw-font-medium tw-mb-0 tw-mt-1 tw-text-center">
                {t("challenges.items.4.title")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
