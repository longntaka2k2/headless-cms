import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useRouter } from "next/router";

const BrandMonitor = () => {
  const router = useRouter();
  const { t } = useTranslation("brand-commerce");
  return (
    <div className="tw-bg-[url(https://cms-strapi.ichiba.net/uploads/BG_95373e758a.png)] lg:tw-bg-[url(https://cms-strapi.ichiba.net/uploads/BG_Platform_4838af54cc.png)] tw-py-10 lg:tw-py-20 tw-bg-no-repeat tw-bg-cover tw-px-4 lg:tw-px-0">
      <div className="tw-container lg:tw-flex lg:tw-items-center lg:tw-gap-12">
        <div className="lg:tw-max-w-[384px]">
          <div className="tw-text-xl tw-font-bold lg:tw-text-3xl">
            {t("globalBrand.brand.title")}
          </div>
          <Image
            src={
              "https://cms-strapi.ichiba.net/uploads/Frame_6cfda8692e.svg"
            }
            alt="https://cms-strapi.ichiba.net/uploads/Frame_6cfda8692e.svg"
            width={400}
            height={400}
            quality={100}
            className="tw-mt-6 lg:tw-mt-3 tw-w-full tw-max-w-[160px] lg:tw-max-w-[244px] tw-mx-auto tw-my-9 lg:tw-ml-0"
          />
        </div>
        <div className="tw-grid tw-grid-cols-1 tw-gap-6 lg:tw-grid-cols-2 lg:tw-items-center">
          <div className="tw-bg-white tw-shadow-[0px_8px_16px_0px_rgba(0,0,0,0.05)] tw-p-6 tw-rounded-[24px] tw-border tw-border-[#F2F2F2] lg:tw-max-w-[360px]">
            <Image
              src={
                "https://cms-strapi.ichiba.net/uploads/Frame_1_b4ccc189c4.svg"
              }
              alt="https://cms-strapi.ichiba.net/uploads/Frame_1_b4ccc189c4.svg"
              width={64}
              height={64}
              quality={100}
              className="mx-auto tw-p-2 tw-bg-[#F0F5FF] tw-rounded-lg"
            />
            <div className="lg:tw-mt-6 tw-mt-4 tw-text-sm lg:tw-text-base ">
              {t("globalBrand.brand.content.monitor")}
            </div>
          </div>
          <div className="tw-grid tw-grid-cols-1 tw-gap-6">
            <div className="tw-bg-white tw-shadow-[0px_8px_16px_0px_rgba(0,0,0,0.05)] tw-p-6 tw-rounded-[24px] tw-border tw-border-[#F2F2F2] lg:tw-max-w-[360px]">
              <Image
                src={
                  "https://cms-strapi.ichiba.net/uploads/Frame_2_34c200d6e5.svg"
                }
                alt="https://cms-strapi.ichiba.net/uploads/Frame_2_34c200d6e5.svg"
                width={64}
                height={64}
                quality={100}
                className="mx-auto tw-p-2 tw-bg-[#FFF7E6] tw-rounded-lg"
              />
              <div className="lg:tw-mt-6 tw-mt-4 tw-text-sm lg:tw-text-base">
                {t("globalBrand.brand.content.keep")}
              </div>
            </div>
            <div className="tw-bg-white tw-shadow-[0px_8px_16px_0px_rgba(0,0,0,0.05)] tw-p-6 tw-rounded-[24px] tw-border tw-border-[#F2F2F2] lg:tw-max-w-[360px]">
              <Image
                src={
                  "https://cms-strapi.ichiba.net/uploads/Group_1_f005adb1f4.svg"
                }
                alt="https://cms-strapi.ichiba.net/uploads/Group_1_f005adb1f4.svg"
                width={64}
                height={64}
                quality={100}
                className="mx-auto tw-p-2 tw-bg-[#F6FFED] tw-rounded-lg"
              />
              <div className="lg:tw-mt-6 tw-mt-4 tw-text-sm lg:tw-text-base">
                {t("globalBrand.brand.content.track")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandMonitor;
