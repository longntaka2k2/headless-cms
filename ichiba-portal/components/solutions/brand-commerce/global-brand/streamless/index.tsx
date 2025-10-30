import { useTranslation } from "next-i18next";
import Image from "next/image";

const StreamLess = () => {
  const { t } = useTranslation("brand-commerce");
  return (
    <div className="tw-bg-[#F0F5FF] lg:tw-max-w-[1420px] tw-mx-auto tw-rounded-[24px] lg:tw-rounded-[83px] lg:tw-my-16">
      <div className="tw-py-10 tw-px-4 lg:tw-px-0 lg:tw-py-[130px] tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-6 tw-container lg:tw-gap-[173px] lg:tw-items-center">
        <Image
          src={
            "https://cms-strapi.ichiba.net/uploads/Image_3_7c9f7830a4.png"
          }
          alt="https://cms-strapi.ichiba.net/uploads/Image_3_7c9f7830a4.png"
          width={541}
          height={537}
          quality={100}
          className="lg:tw-block tw-hidden"
        />
        <div>
          <div className="tw-text-xl tw-font-bold lg:tw-text-3xl">
            {t("globalBrand.seamless.title")}
          </div>
          <div className="tw-mt-6 tw-grid tw-gap-6">
            <div className="tw-flex tw-items-center ">
              <div className="tw-h-3 tw-max-w-[12px] tw-w-full tw-rounded-full tw-bg-[#F57C00] tw-mr-4"></div>
              <div className="tw-text-sm lg:tw-text-base">
                {t("globalBrand.seamless.content.connect")}
              </div>
            </div>
            <div className="tw-flex tw-items-center ">
              <div className="tw-h-3 tw-max-w-[12px] tw-w-full tw-rounded-full tw-bg-[#F57C00] tw-mr-4"></div>
              <div className="tw-text-sm lg:tw-text-base">
                {t("globalBrand.seamless.content.integrate")}
              </div>
            </div>
          </div>
        </div>
        <Image
          src={
            "https://cms-strapi.ichiba.net/uploads/Image_3_7c9f7830a4.png"
          }
          alt="https://cms-strapi.ichiba.net/uploads/Image_3_7c9f7830a4.png"
          width={541}
          height={537}
          quality={100}
          className="lg:tw-hidden"
        />
      </div>
    </div>
  );
};

export default StreamLess;
