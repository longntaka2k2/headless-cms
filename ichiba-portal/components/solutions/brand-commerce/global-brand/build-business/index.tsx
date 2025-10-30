import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";
const BuildBusiness = () => {
  const { t } = useTranslation("brand-commerce");

  return (
    <div className="tw-px-4 lg:tw-px-0 tw-py-10 tw-container lg:tw-grid-cols-2 tw-grid tw-grid-cols-1 lg:tw-gap-10 tw-gap-6 tw-items-center">
      <div>
        <div className="tw-text-xl tw-font-bold lg:tw-text-3xl">
          {t("globalBrand.build.title")}
        </div>
        <div className="tw-grid tw-gap-4 tw-mt-6">
          <div
            className={clsx(
              " tw-relative tw-z-[1] ",
              "after:tw-bg-[linear-gradient(90deg,#ACBEFF,#fff)] after:tw-absolute ",
              "after:tw-top-[-1px] after:tw-left-[-1px] after:tw-right-[-1px] after:tw-bottom-[-1px]  after:tw-z-[-1] after:tw-rounded-xl",
            )}
          >
            <div className="tw-relative tw-h-0 tw-top-[20px] tw-right-[9px] lg:tw-right-[14px]">
              <Image
                src={
                  "https://cms-strapi.ichiba.net/uploads/Frame_ed8edd4ebb.svg"
                }
                alt="https://cms-strapi.ichiba.net/uploads/Frame_ed8edd4ebb.svg"
                width={24}
                height={24}
                className="tw-h-4 tw-w-4 lg:tw-h-6 lg:tw-w-6"
              />
            </div>
            <div className=" tw-px-6 tw-py-4 tw-bg-white tw-rounded-xl">
              {t("globalBrand.build.content.track")}
            </div>
          </div>
          <div
            className={clsx(
              " tw-relative tw-z-[1] ",
              "after:tw-bg-[linear-gradient(90deg,#ACBEFF,#fff)] after:tw-absolute ",
              "after:tw-top-[-1px] after:tw-left-[-1px] after:tw-right-[-1px] after:tw-bottom-[-1px]  after:tw-z-[-1] after:tw-rounded-xl",
            )}
          >
            <div className="tw-relative tw-h-0 tw-top-[20px] tw-right-[9px] lg:tw-right-[14px]">
              <Image
                src={
                  "https://cms-strapi.ichiba.net/uploads/Frame_ed8edd4ebb.svg"
                }
                alt="https://cms-strapi.ichiba.net/uploads/Frame_ed8edd4ebb.svg"
                width={24}
                height={24}
                className="tw-h-4 tw-w-4 lg:tw-h-6 lg:tw-w-6"
              />
            </div>
            <div className=" tw-px-6 tw-py-4 tw-bg-white tw-rounded-xl">
              {t("globalBrand.build.content.access")}
            </div>
          </div>
        </div>
      </div>
      <Image
        src={
          "https://cms-strapi.ichiba.net/uploads/Group_19789_6414957de6.png"
        }
        alt="https://cms-strapi.ichiba.net/uploads/Group_19789_6414957de6.png"
        width={541}
        height={537}
        quality={100}
      />
    </div>
  );
};
export default BuildBusiness;
