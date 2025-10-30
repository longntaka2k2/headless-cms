"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Link from "next/link";

const SystemIntegration = () => {
  const items = [
    {
      title: "Sàn TMĐT",
      icon: [
        "https://cms-strapi.ichiba.net/uploads/Group_cd40391802.svg",
        "https://cms-strapi.ichiba.net/uploads/Group_1_67e658991b.svg",
        "https://cms-strapi.ichiba.net/uploads/layer1_3357ff780a.svg",
        "https://cms-strapi.ichiba.net/uploads/tiki_seeklogo_2_1_7c9a603838.svg",
        "https://cms-strapi.ichiba.net/uploads/mercari_1_f852434c61.svg",
        "https://cms-strapi.ichiba.net/uploads/Group_c1d441512f.svg",
        "https://cms-strapi.ichiba.net/uploads/1200px_Rakuten_Global_Brand_Logo_1_9025d7e766.svg",
        "https://cms-strapi.ichiba.net/uploads/Amazon_logo_1_1aa43bffff.svg",
        "https://cms-strapi.ichiba.net/uploads/ebay_1_74c3ec7606.svg",
      ],
    },
    {
      title: "Đơn vị vận chuyển",
      icon: [
        "https://cms-strapi.ichiba.net/uploads/Group_10_32f2bd49be.svg",
        "https://cms-strapi.ichiba.net/uploads/Group_1171276323_ee20ea8054.svg",
        "https://cms-strapi.ichiba.net/uploads/Group_1171276326_eedde759dc.png",
        "https://cms-strapi.ichiba.net/uploads/Group_1_8b4a9b5c91.svg",
        "https://cms-strapi.ichiba.net/uploads/Logo_merchants_2d70b56950.svg",
        "https://cms-strapi.ichiba.net/uploads/Group_11_f2d5bda161.svg",
        "https://cms-strapi.ichiba.net/uploads/g6_2f48bd09bd.svg",
        "https://cms-strapi.ichiba.net/uploads/Group_2_101393a30b.svg",
      ],
    },
    {
      title: "Các phần mềm khác",
      icon: [
        "https://cms-strapi.ichiba.net/uploads/So_Sanh_MISA_AMIS_Voi_Cac_Phan_Mem_Ke_Toan_Khac_Tren_Thi_Truong_1_1_f838896d01.svg",
        "https://cms-strapi.ichiba.net/uploads/Logo_fdd44dd90b.svg",
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
      className="tw-bg-[linear-gradient(180deg,_#F2F2F2_0%,_#FFF_83.32%)]"
    >
      <div className="tw-container tw-flex tw-flex-col lg:tw-flex-row tw-items-center tw-gap-6 lg:tw-gap-10 tw-py-6 lg:tw-py-15">
        <div
          className={clsx(
            "lg:tw-w-[40%]",
            isVisible
              ? "tw-animate-showOn lg:tw-animate-leftShow"
              : "tw-opacity-0",
          )}
        >
          <div className="tw-flex tw-items-center tw-gap-10 tw-mb-1 lg:tw-mb-2">
            <div className="tw-text-sm lg:tw-text-base tw-text-[#1135A8]">
              Đối tác của chúng tôi
            </div>
            <Image
              src="https://cms-strapi.ichiba.net/uploads/Path_12adf15655.svg"
              width={22}
              height={22}
              alt="icon"
              className="tw-w-5 tw-h-5 lg:tw-w-[22px] lg:tw-h-[22px]"
            />
          </div>
          <h2 className="tw-text-2xl lg:tw-text-3xl tw-font-bold tw-mb-0">
            Khả năng tích hợp toàn diện với các phần mềm bên thứ 3 và các sàn
            <span className="text__gradient"> thương mại điện tử</span>
          </h2>
        </div>
        <div
          style={{
            background: "rgba(255, 255, 255, 0.80)",
            boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.05)",
          }}
          className={clsx(
            "lg:tw-w-[60%] tw-w-full tw-h-[648px] lg:tw-h-[366px] tw-rounded-xl tw-p-6",
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
          <div className="tw-grid  lg:tw-gap-4 sm:tw-grid-cols-3 tw-grid-cols-2 tw-gap-3">
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
    </div>
  );
};
export default SystemIntegration;
