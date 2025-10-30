import { useTranslation } from "next-i18next";
import Bg from "@/public/icons/crossBorder/howItWorkBg.png";

import Image from "next/image";
import Link from "next/link";
import { SimpleSectionProps } from "@/components/shared/simpleSectionRenderer";

export default function HowItWork(props: SimpleSectionProps) {
  const { t } = useTranslation("common");
  return (
    <>
      <div
        className="tw-pt-12 lg:tw-pt-[156px] "
        style={{
          backgroundImage: `url(${Bg.src})`,
          backgroundSize: "cover",
        }}
      >
        <div className="container ">
          <div className="lg:tw-flex">
            <div className="tw-text-white lg:tw-max-w-[486px] ">
              <div className="tw-text-center lg:tw-text-left">
                <div className="tw-text-sm lg:tw-text-base tw-uppercase">
                  {t("smartCrossBorder.howItWorks.label")}
                </div>
                <div className=" tw-font-bold tw-text-[24px] lg:tw-text-[36px]">
                  {t("smartCrossBorder.howItWorks.title")}
                </div>
                <div className="tw-py-4 tw-text-sm lg:tw-text-base">
                  {t("smartCrossBorder.howItWorks.content")}
                </div>
                <div>
                  <Link
                    href="/products/cross-border-forwarding/features"
                    className="text-decoration-none d-inline-block btn-janbox py-2 px-5"
                    target="_blank"
                    rel="canonical"
                  >
                    {t("learnMore")}
                  </Link>
                </div>
              </div>
            </div>
            <div className="tw-max-h-[185px] lg:tw-max-h-[453px]  tw-overflow-hidden tw-rounded-t-2xl tw-mt-6 tw-px-10 lg:tw-px-0 lg:tw-pl-6">
              <Image
                src={
                  "https://cms-strapi.ichiba.net/uploads/brand_3_1_fa9f8f3e88.png"
                }
                alt=""
                width={696}
                height={535}
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
