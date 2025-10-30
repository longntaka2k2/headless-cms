import { useTranslation } from "next-i18next";
import React, { useEffect, useRef, useState } from "react";
import { ContentList } from "./ContentList";
import clsx from "clsx";

export default function Digitize() {
  const { t } = useTranslation("cross-border-forwarding");
  const elementRef = useRef(null);
  const [isVisible, setVisible] = useState(false);

  const content = [
    {
      icon: "https://cms-strapi.ichiba.net/uploads/Group_cd34058f61.svg",
      title: t("digitize.items.0.title"),
      subTtile: t("digitize.items.0.subTitle"),
    },
    {
      icon: "https://cms-strapi.ichiba.net/uploads/Group_ee510f2b71.svg",
      title: t("digitize.items.1.title"),
      subTtile: t("digitize.items.1.subTitle"),
    },
    {
      icon: "https://cms-strapi.ichiba.net/uploads/Group_3c2e22a836.svg",
      title: t("digitize.items.2.title"),
      subTtile: t("digitize.items.2.subTitle"),
    },
    {
      icon: "https://cms-strapi.ichiba.net/uploads/Group_49af94eb22.svg",
      title: t("digitize.items.3.title"),
      subTtile: t("digitize.items.3.subTitle"),
    },
  ];

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
    <>
      <div
        ref={elementRef}
        className={clsx(
          "tw-bg-[url('https://cms-strapi.ichiba.net/uploads/Digital_import_export_6581567193.svg')]",
          "tw-bg-no-repeat tw-bg-cover tw-py-6 tw-px-4 lg:tw-py-15",
          isVisible ? "tw-animate-showOn" : "tw-opacity-0",
        )}
      >
        <div className="tw-container tw-flex tw-flex-col tw-gap-6 lg:tw-flex-row lg:tw-justify-between tw-items-center tw-mb-10 lg:tw-mb-[70px]">
          <h2 className="tw-text-2xl tw-font-bold tw-text-ic-white-6 tw-text-center lg:tw-text-4xl lg:tw-leading-12 lg:tw-text-left lg:tw-self-center lg:tw-max-w-[420px]">
            {t("digitize.heading")}
          </h2>

          <ContentList
            list={content.map((item) => ({ ...item, subTitle: item.subTtile }))}
          />
        </div>
      </div>
    </>
  );
}
