import { useTranslation } from "next-i18next";
import clsx from "clsx";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const ChooseIChiba = () => {
  const { t } = useTranslation("pod");
  const [active, setActive] = useState(0);

  useEffect(() => {
    const contents = t(`chooseIchiba.items`, {
      returnObjects: true,
    }) as string[];

    const interval = setInterval(() => {
      setActive((current) => (current + 1) % contents.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [t]);
  return (
    <section
      className={clsx("tw-container tw-px-4 xl:tw-px-0 tw-py-6 lg:tw-py-15")}
    >
      <p className="tw-text-center tw-font-medium tw-text-sm lg:tw-text-base tw-text-brand-primary tw-uppercase tw-mb-2">
        {t("chooseIchiba.label")}
      </p>
      <h2 className="lg:tw-w-[65%] tw-mx-auto tw-text-2xl lg:tw-text-4xl tw-font-bold tw-text-center tw-leading-8 lg:tw-leading-[48px] tw-mb-6 lg:tw-mb-12">
        <span className="tw-text-brand-primary">
          {t("chooseIchiba.heading.0")}
        </span>
        {t("chooseIchiba.heading.1")}
      </h2>

      <div>
        <Image
          src={
            "https://cms-strapi.ichiba.net/uploads/Auto_import_export_process_c07db34c5d.svg"
          }
          width={1200}
          height={361}
          alt="#"
        />
        <div className="tw-grid lg:tw-grid-cols-4 tw-mt-6">
          {(
            t(`chooseIchiba.items`, {
              returnObjects: true,
            }) as string[]
          )?.map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "tw-border-l-[6px] lg:tw-border-t-[6px] lg:tw-border-l-0 tw-pl-4 lg:tw-pl-0 lg:tw-pt-4 tw-pb-4 lg:tw-pb-0 tw-cursor-pointer",
                active === index ? "tw-border-brand-primary" : "",
              )}
              onClick={() => setActive(index)}
            >
              <Image
                src={value.icon}
                width={40}
                height={40}
                className="tw-w-8 tw-h-8 lg:tw-w-10 lg:tw-h-10"
                alt="icon"
              />
              <div className="tw-text-sm tw-mt-1 lg:tw-mt-4 lg:tw-text-base tw-px-2 lg:tw-px-0">
                {value.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseIChiba;
