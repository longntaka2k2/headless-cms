"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import classes from "./OverView.module.scss";
import Link from "next/link";

const SystemIntegration = () => {
  const { t: commerce } = useTranslation("commerce-layer");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const items = [
    {
      title: commerce("system.tabs.0"),
      icon: [
        "https://cms-strapi.ichiba.net/uploads/Group_cd40391802.svg",
        "https://cms-strapi.ichiba.net/uploads/Group_1_67e658991b.svg",
        "https://cms-strapi.ichiba.net/uploads/layer1_3357ff780a.svg",
        "https://cms-strapi.ichiba.net/uploads/Group_2_b08480236b.svg",
        "https://cms-strapi.ichiba.net/uploads/Group_5_7fbfed6416.svg",
        "https://cms-strapi.ichiba.net/uploads/Group_7_c9bf06ce07.svg",
        "https://cms-strapi.ichiba.net/uploads/1200px_Rakuten_Global_Brand_Logo_1_9025d7e766.svg",
        "https://cms-strapi.ichiba.net/uploads/Amazon_logo_1_1aa43bffff.svg",
        "https://cms-strapi.ichiba.net/uploads/Etsy_logo_1_73c83e1ed1.svg",
      ],
    },
    {
      title: commerce("system.tabs.1"),
      icon: [
        "https://cms-strapi.ichiba.net/uploads/image_120_6c8916e415.svg",
        "https://cms-strapi.ichiba.net/uploads/Group_94664012c7.svg",
        "https://cms-strapi.ichiba.net/uploads/Group_10_32f2bd49be.svg",
        "https://cms-strapi.ichiba.net/uploads/Group_3_97ec72ea9f.svg",
        "https://cms-strapi.ichiba.net/uploads/Group_1_8b4a9b5c91.svg",
        "https://cms-strapi.ichiba.net/uploads/Group_4_06ee974a5e.svg",
        "https://cms-strapi.ichiba.net/uploads/Group_11_f2d5bda161.svg",
        "https://cms-strapi.ichiba.net/uploads/Group_12_411aebd560.svg",
        "https://cms-strapi.ichiba.net/uploads/Group_2_1ca26eddd8.svg",
        "https://cms-strapi.ichiba.net/uploads/g6_2f48bd09bd.svg",
        "https://cms-strapi.ichiba.net/uploads/Group_2_101393a30b.svg",
        "https://cms-strapi.ichiba.net/uploads/Group_3_2f61d9e51c.svg",
      ],
    },
    {
      title: commerce("system.tabs.2"),
      icon: [
        "https://cms-strapi.ichiba.net/uploads/Intuit_Quick_Books_logo_1_51c4da2112.svg",
        "https://cms-strapi.ichiba.net/uploads/Group_8386d3e851.svg",
        "https://cms-strapi.ichiba.net/uploads/Group_9_1895fdd317.svg",
        "https://cms-strapi.ichiba.net/uploads/Vector_88e24813f8.svg",
      ],
    },
  ];
  const [typeItem, setType] = useState(items[0] as any);
  const [isVisible, setVisible] = useState(false);
  const elementRef = useRef(null);

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

    const interval = setInterval(() => {
      let currentIndex = items.findIndex(
        (item) => item.title === typeItem.title,
      );
      let nextIndex = (currentIndex + 1) % items.length;
      setType(items[nextIndex]);
    }, 4000);

    return () => {
      if (elementRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(elementRef.current);
      }
      clearInterval(interval);
    };
  }, [items, typeItem.title]);

  return (
    <div
      ref={elementRef}
      className="tw-container tw-flex tw-flex-col lg:tw-flex-row tw-gap-6 lg:tw-gap-10 tw-py-6 lg:tw-py-15"
    >
      <div
        className={clsx(
          "lg:tw-w-[40%]",
          isVisible
            ? "tw-animate-showOn lg:tw-animate-leftShow"
            : "tw-opacity-0",
        )}
      >
        <div className="tw-flex">
          <div
            className={clsx(
              classes.text__gradient__system,
              "tw-font-bold tw-text-2xl lg:tw-text-4xl lg:tw-leading-[48px] tw-mb-2",
            )}
          >
            {commerce("system.heading")}
          </div>
          <Image
            src="https://cms-strapi.ichiba.net/uploads/Path_12adf15655.svg"
            width={22}
            height={22}
            alt="icon"
            className="tw-w-5 tw-h-5 lg:tw-w-[22px] lg:tw-h-[22px]"
          />
        </div>
        <p className="tw-mb-6 lg:tw-mb-8 tw-text-sm lg:tw-text-base">
          {commerce("system.subHeading")}
        </p>
        <Link
          href={"/products/integrations"}
          target="_blank"
          className="tw-bg-brand-primary tw-p-3 tw-no-underline tw-text-white tw-rounded-lg tw-min-w-[200px]"
        >
          {commerce("system.textBtn")}
        </Link>
      </div>
      <div
        style={{
          background: "rgba(255, 255, 255, 0.80)",
          boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.05)",
        }}
        className={clsx(
          "lg:tw-w-[60%] tw-h-[648px] lg:tw-h-[366px] tw-rounded-xl tw-p-6",
          isVisible
            ? "tw-animate-showOn lg:tw-animate-rightShow"
            : "tw-opacity-0",
        )}
      >
        <div
          style={{
            background:
              "linear-gradient(91deg, #B1D1F6 24.67%, #C5C8FD 77.28%)",
          }}
          className={clsx(
            "tw-flex tw-flex-col lg:tw-justify-around lg:tw-flex-row tw-rounded-lg tw-mb-6 tw-p-2",
            " tw-transition-all tw-duration-500 tw-delay-300",
            isVisible
              ? "tw-opacity-100 tw-translate-y-0"
              : "tw-opacity-0 tw-translate-y-10",
          )}
        >
          {items.map((value: any, index: number) => (
            <div
              className={`tw-whitespace-nowrap tw-cursor-pointer tw-text-sm lg:tw-text-base tw-py-3 tw-px-5 tw-w-full tw-text-center
                ${
                  value.title === typeItem.title
                    ? "tw-text-brand-secondary tw-font-bold tw-bg-white tw-rounded-lg"
                    : "tw-text-white"
                }`}
              key={index}
              onClick={() => setType(value)}
            >
              {value.title}
            </div>
          ))}
        </div>
        <div className="tw-grid lg:tw-grid-cols-4 lg:tw-gap-4 md:tw-grid-cols-3 tw-grid-cols-2 tw-gap-3">
          {typeItem.icon.map((value: any, index: number) => (
            <div
              className={clsx(
                "tw-h-[64px] tw-flex tw-justify-center tw-items-center md:tw-scale-100 tw-rounded-xl tw-transition-all hover:tw-scale-110 tw-ease-out",
              )}
              key={index}
            >
              <Image
                quality={100}
                src={value}
                alt="EFEX"
                width={100}
                height={42}
                className={clsx(
                  ` tw-duration-300 `,
                  isVisible ? "tw-scale-100" : "tw-scale-0",
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SystemIntegration;
