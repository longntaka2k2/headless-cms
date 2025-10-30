import React from "react";
import { useTranslation } from "next-i18next";
import { LocaleNamespace } from "@/const/locale";
import clsx from "clsx";
import Arrow from "./Arrow";
import Image from "next/image";
import classes from "./FocusYourSale.module.scss";

const FocusYourSale = () => {
  const { t } = useTranslation(LocaleNamespace.EcommerceFulfillment);

  const itemStyles: Record<number, React.CSSProperties> = {
    0: {
      background: "linear-gradient(0deg, #13B80F -0.66%, #7BEE5E 99.49%)",
      boxShadow: "6px 6px 10px 0px rgba(23, 186, 19, 0.30)",
    },
    1: {
      background: "linear-gradient(0deg, #00A3FF -0.66%, #74D5FF 99.49%)",
      boxShadow: "6px 6px 10px 0px rgba(6, 165, 255, 0.30)",
    },
    2: {
      background: "linear-gradient(0deg, #E45504 -0.66%, #FB5 99.49%)",
      boxShadow: "6px 6px 10px 0px rgba(230, 91, 9, 0.30)",
    },
    3: {
      background: "linear-gradient(0deg, #930EFC -0.66%, #FF52EE 99.49%)",
      boxShadow: "6px 6px 10px 0px rgba(152, 16, 251, 0.30)",
    },
    4: {
      background: "linear-gradient(0deg, #00AB82 -0.66%, #6AFCB6 99.49%)",
      boxShadow: "6px 6px 10px 0px rgba(3, 173, 131, 0.30)",
    },
    5: {
      background: "linear-gradient(0deg, #051CEB -0.66%, #5081FF 99.49%)",
      boxShadow: " 6px 6px 10px 0px rgba(7, 31, 235, 0.30)",
    },
  };

  const icons = [
    "https://cms-strapi.ichiba.net/uploads/boxes_delivery_change_move_arrow_4378c7e11a.svg",
    "https://cms-strapi.ichiba.net/uploads/programming_code_test_block_c89ac6c7c4.svg",
    "https://cms-strapi.ichiba.net/uploads/laptop_delivery_package_951f8e50e0.svg",
    "https://cms-strapi.ichiba.net/uploads/delivery_truck_fast_95c3f36840.svg",
    "https://cms-strapi.ichiba.net/uploads/user_support_1fa1ba9f68.svg",
    "https://cms-strapi.ichiba.net/uploads/target_darz_arrow_469577deb7.svg",
  ];

  return (
    <div className="tw-py-6 xl:tw-py-10">
      <div className="container">
        <div className="tw-max-w-[792px] tw-mx-auto tw-text-center">
          <h3 className="tw-mb-2 tw-text-2xl xl:tw-text-4xl tw-font-bold">
            {t("focusYourSale.title")}
          </h3>
          <span>{t("focusYourSale.content")}</span>
        </div>
      </div>
      <div className="tw-flex tw-justify-center">
        <div className={classes.scroll}>
          <div className="tw-gap-4 tw-pb-9 tw-w-max tw-flex tw-px-6">
            {(
              t(`focusYourSale.items`, {
                returnObjects: true,
              }) as string[]
            ).map((item: any, index: number) => (
              <div
                key={index}
                className={clsx("tw-flex tw-gap-4 tw-items-center tw-flex-1", {
                  "tw-text-[#21AB1A]": index === 0,
                  "tw-text-[#0A9DED]": index === 1,
                  "tw-text-brand-primary": index === 2,
                  "tw-text-[#9C13FA]": index === 3,
                  "tw-text-[#06AC82]": index === 4,
                  "tw-text-[#0820EB]": index === 5,
                })}
              >
                <div
                  className="tw-w-20 tw-h-20 tw-rounded-full tw-relative tw-flex tw-items-center tw-justify-center"
                  style={itemStyles[index]}
                >
                  <Image width={40} height={40} alt="" src={icons[index]} />
                  <div className="tw-absolute tw-whitespace-nowrap tw-top-full tw-text-center tw-mt-2.5 tw-left-1/2 -tw-translate-x-1/2 tw-font-bold">
                    {item}
                  </div>
                </div>
                {index !==
                  (
                    t(`focusYourSale.items`, {
                      returnObjects: true,
                    }) as string[]
                  ).length -
                    1 && (
                  <div className="tw-flex-1">
                    <Arrow />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FocusYourSale;
