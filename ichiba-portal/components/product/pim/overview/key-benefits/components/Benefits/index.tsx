import Image from "next/image";
import React from "react";
import classes from "./Benefits.module.scss";
import clsx from "clsx";
import LottieRenderer from "@/components/common/lottieRenderer";
import { useTranslation } from "next-i18next";

const image = {
  desktop:
    "https://cms-strapi.ichiba.net/uploads/Key_benefits_6a8fccc49b.svg",
  mobile:
    "https://cms-strapi.ichiba.net/uploads/Key_benefits_6a8fccc49b.svg",
};

const Benefits = () => {
  const { t } = useTranslation("pim");

  const benefits = t("benefits", {
    returnObjects: true,
  }) as any[];

  return (
    <div className="container">
      <div className={clsx(classes.root)}>
        <div className={clsx(classes.group, "xl:tw-translate-x-5")}>
          {benefits.slice?.(0, 4)?.map?.((benefit, index) => (
            <div className={classes.item} key={index}>
              <span className="tw-text-sm md:tw-text-base">{benefit}</span>
              <Image
                className="tw-absolute tw-bottom-0 tw-translate-y-1/2 xl:tw-hidden"
                src="/svgs/check.svg"
                width={24}
                height={24}
                alt="Key_benefits_mobile"
              />
            </div>
          ))}
        </div>
        <div
          className={clsx(
            "tw-z-10 tw-bg-no-repeat tw-bg-center tw-mx-auto",
            "tw-w-[208px] tw-h-[216px] tw-bg-[url('https://cms-strapi.ichiba.net/uploads/Key_benefits_mobile_bb7753ae3f.svg')]",
            `xl:tw-bg-[url('https://cms-strapi.ichiba.net/uploads/Key_benefits_6a8fccc49b.svg')] xl:tw-mx-0 xl:tw-w-[469px] xl:tw-h-[352px]`,
          )}
        />
        <div className={clsx(classes.group, "xl:-tw-translate-x-5")}>
          {benefits.slice?.(4, 8)?.map?.((benefit, index) => (
            <div className={classes.item} key={index}>
              <span className="tw-text-sm md:tw-text-base">{benefit}</span>
              <Image
                className="tw-absolute tw-bottom-0 tw-translate-y-1/2 xl:tw-hidden"
                src="/svgs/check.svg"
                width={24}
                height={24}
                alt="Key_benefits_mobile"
              />
            </div>
          ))}
        </div>
        {/* <LottieRenderer path='/icons/pim/spider.json' style={{}} /> */}
      </div>
    </div>
  );
};

export default Benefits;
