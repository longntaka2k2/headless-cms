"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Link from "next/link";
const EcommerceSites = () => {
  const { t: crawler } = useTranslation("crawler");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const items = [
    {
      title: crawler("ecommerceSites.tabs.0.title"),
      countryIcon: crawler("ecommerceSites.tabs.0.countryIcon"),
      listItems: [
        {
          title: "Ebay",
          logo: "https://cms-strapi.ichiba.net/uploads/Group_1171275978_52a0fe8655.svg",
        },
        {
          title: "AmazonUs",
          logo: "https://cms-strapi.ichiba.net/uploads/Frame_1171276646_046af8fb88.svg",
        },
        {
          title: "Macys",
          logo: "https://cms-strapi.ichiba.net/uploads/Group_1171275979_97b03c4825.svg",
        },
      ],
    },
    {
      title: crawler("ecommerceSites.tabs.1.title"),
      countryIcon: crawler("ecommerceSites.tabs.1.countryIcon"),
      listItems: [
        {
          title: "AmazonJp",
          logo: "https://cms-strapi.ichiba.net/uploads/Frame_1171276646_046af8fb88.svg",
        },
        {
          title: "Yahoo Auction",
          logo: "https://cms-strapi.ichiba.net/uploads/image_847_fa95d4f740.svg",
        },
        {
          title: "Yahoo Shopping",
          logo: "https://cms-strapi.ichiba.net/uploads/Rectangle_52683_3ed85b3a1e.svg",
        },
        {
          title: "Rakuma",
          logo: "https://cms-strapi.ichiba.net/uploads/Rectangle_52684_f5189dbe9e.svg",
        },
        {
          title: "Mercari",
          logo: "https://cms-strapi.ichiba.net/uploads/Group_1171275981_81745e5cec.svg",
        },
        {
          title: "Zozo Town",
          logo: "https://cms-strapi.ichiba.net/uploads/image_847_1_a62591df03.svg",
        },
        {
          title: "Rakuten",
          logo: "https://cms-strapi.ichiba.net/uploads/Rectangle_52683_1_049c0260fa.svg",
        },
        {
          title: "PayPay",
          logo: "https://cms-strapi.ichiba.net/uploads/Rectangle_52684_1_425b27f649.svg",
        },
      ],
    },
    {
      title: crawler("ecommerceSites.tabs.2.title"),
      countryIcon: crawler("ecommerceSites.tabs.2.countryIcon"),
      listItems: [
        {
          title: "Coupang",
          logo: "https://cms-strapi.ichiba.net/uploads/image_847_2_73d490f86b.svg",
        },
        {
          title: "Gmarket",
          logo: "https://cms-strapi.ichiba.net/uploads/Rectangle_52683_2_7ca3ef2dac.svg",
        },
        {
          title: "Tmon",
          logo: "https://cms-strapi.ichiba.net/uploads/Rectangle_52684_2_180e715bc3.svg",
        },
      ],
    },
    {
      title: crawler("ecommerceSites.tabs.3.title"),
      countryIcon: crawler("ecommerceSites.tabs.3.countryIcon"),
      listItems: [
        {
          title: "Taobao Partner",
          logo: "https://cms-strapi.ichiba.net/uploads/image_847_3_998b689b31.svg",
        },
        {
          title: "1688 Partner",
          logo: "https://cms-strapi.ichiba.net/uploads/Rectangle_52683_3_b35c2b38aa.svg",
        },
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
      className="tw-bg-[linear-gradient(91deg,_#B1D1F6_24.67%,_#C5C8FD_77.28%)] tw-py-6 lg:tw-pt-10 lg:tw-pb-15"
    >
      <div className="tw-container">
        <div className={clsx(isVisible ? "tw-animate-showOn" : "tw-opacity-0")}>
          <h2 className="tw-text-2xl lg:tw-text-4xl tw-text-brand-secondary tw-font-bold tw-mb-2 tw-mx-auto lg:tw-text-center">
            {crawler("ecommerceSites.heading.0")}
            <br />
            {crawler("ecommerceSites.heading.1")}
          </h2>
          <p className="tw-text-sm lg:tw-text-base tw-mb-6 lg:tw-text-center">
            {crawler("ecommerceSites.subHeading")}
          </p>
        </div>

        <div
          style={{
            background: "rgba(255, 255, 255, 0.80)",
            boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.05)",
          }}
          className="tw-h-[856px] md:tw-h-[704px] lg:tw-h-[406px] tw-rounded-xl tw-p-6"
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
                <div className="tw-flex tw-items-center tw-justify-center tw-gap-2">
                  <Image
                    src={value.countryIcon}
                    width={24}
                    height={24}
                    alt="#"
                  />
                  {value.title}
                </div>
              </div>
            ))}
          </div>
          <div className="tw-grid lg:tw-grid-cols-4 lg:tw-gap-4 md:tw-grid-cols-3 tw-grid-cols-2 tw-gap-3">
            {typeItem.listItems.map((value: any, index: number) => (
              <div
                className={clsx(
                  "tw-flex tw-flex-col tw-gap-2 tw-justify-center tw-items-center md:tw-scale-100 tw-rounded-xl tw-transition-all hover:tw-scale-110 tw-ease-out",
                )}
                key={index}
              >
                <Image
                  quality={100}
                  src={value.logo}
                  alt="EFEX"
                  width={100}
                  height={42}
                  className={clsx(
                    ` tw-duration-300 `,
                    isVisible ? "tw-scale-100" : "tw-scale-0",
                  )}
                  style={{ transitionDelay: `${index * 100}ms` }}
                />
                <p className="tw-text-sm lg:tw-text-base tw-mb-0">
                  {value.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default EcommerceSites;
