import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import classes from "./ProductInformation.module.scss";

const BetterProduct = () => {
  const { t } = useTranslation("commerce-layer");
  const elementRef = useRef(null);
  const [isVisible, setVisible] = useState(false);

  const solutions = t("productInformation.solutions", {
    returnObjects: true,
  }) as any[];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 1 / 3 },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => {
      if (elementRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div ref={elementRef}>
      <div
        className={clsx(
          "tw-container tw-px-3",
          classes.root,
          isVisible ? "tw-animate-showOn" : "tw-opacity-0",
        )}
      >
        <div className={clsx(classes.group, "xl:tw-translate-x-5")}>
          {solutions.slice?.(0, 4)?.map?.((solution, index) => (
            <div className={classes.item} key={index}>
              <span className="tw-text-sm md:tw-text-base">{solution}</span>
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
          {solutions.slice?.(4, 8)?.map?.((solution, index) => (
            <div className={classes.item} key={index}>
              <span className="tw-text-sm md:tw-text-base">{solution}</span>
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
      </div>
      <div
        className={clsx(
          "tw-container tw-mt-4 lg:tw-mt-8",
          isVisible ? "tw-animate-showOn" : "tw-opacity-0",
        )}
      >
        <h3 className="tw-text-lg lg:tw-text-xl tw-font-bold tw-mb-2">
          {t("productInformation.title")}
        </h3>
        <p className="tw-text-sm lg:tw-text-base tw-mb-0">
          {t("productInformation.subTitle")}
        </p>
      </div>
    </div>
  );
};

export default BetterProduct;
