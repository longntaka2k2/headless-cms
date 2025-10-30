import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";

export default function StoriesOfElectronics() {
  const { t } = useTranslation("electronics");

  return (
    <div className="tw-pt-6 tw-pb-48 lg:tw-pt-15 lg:tw-pb-20 tw-px-3">
      <div
        className={clsx(
          "tw-container tw-bg-[#F9F5EF] tw-rounded-2xl",
          "tw-py-6 lg:tw-pt-7 lg:tw-pb-11 lg:tw-px-10",
        )}
      >
        <h2 className="tw-mb-0 tw-text-2xl lg:tw-text-4xl tw-font-bold lg:tw-w-[85%] tw-mx-auto lg:tw-text-center">
          {t("storiesOfElectronics.heading")}
        </h2>
        <div
          className={clsx(
            "tw-flex tw-flex-col tw-gap-6 tw-items-center",
            "lg:tw-flex-row lg:tw-justify-between lg:tw-gap-[87px]",
          )}
        >
          <div className="tw-grid tw-gap-7">
            <p className="tw-text-sm lg:tw-text-lg tw-mb-0">
              {t("storiesOfElectronics.content")}
            </p>
            <div className="tw-flex tw-gap-3 lg:tw-gap-4 tw-items-center">
              <div className="tw-w-12 tw-h-12 lg:tw-w-10 lg:tw-h-10 tw-rounded-full tw-overflow-hidden">
                <Image
                  src="https://cms-strapi.ichiba.net/uploads/Avatar_511f04bf0c.svg"
                  alt="#"
                  width={48}
                  height={48}
                  className="tw-w-full tw-h-full tw-object-cover"
                />
              </div>
              <div>
                <p className="tw-mb-0 tw-text-sm lg:tw-text-lg tw-font-bold">
                  Mrs.Hoai Thuong
                </p>
                <p className="tw-mb-0 tw-text-xs lg:tw-text-sm">
                  {t("storiesOfElectronics.career")}
                </p>
              </div>
            </div>
          </div>

          <div
            className={clsx(
              "tw-relative tw-max-w-[313px] tw-min-h-[139px] tw-mx-auto",
              "lg:tw-min-w-[405px] lg:tw-min-h-[312px] tw-w-full tw-h-full",
            )}
          >
            <div
              style={{
                background:
                  "linear-gradient(274deg, #FDE9D3 26.95%, rgba(233, 238, 255, 0.60) 90%)",
              }}
              className={clsx(
                "tw-absolute tw-top-0 tw-left-[10px] tw-rounded-xl",
                "tw-w-full tw-h-[361px] lg:tw-h-[467px]",
              )}
            ></div>

            <div
              style={{
                background:
                  "linear-gradient(274deg, #FDE9D3 26.95%, rgba(233, 238, 255, 0.60) 90%)",
              }}
              className={clsx(
                "tw-absolute tw-top-[10px] tw-right-[10px] tw-rounded-xl tw-overflow-hidden",
                "tw-w-full tw-h-[333px] lg:tw-h-[467px]",
              )}
            >
              <Image
                src="https://cms-strapi.ichiba.net/uploads/Frame_1171276171_3aafa76bf0.svg"
                alt="#"
                width={407}
                height={431}
                className="tw-w-full tw-h-full tw-object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
