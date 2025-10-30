"use client";
import efex from "@/public/images/home/whatWeDo/efex.svg";
import Fulfillment from "./Fulfillment";
import B2B from "./B2B";
import Customer from "./Customer";
import CrossBorder from "./CrossBorder";

import Bonded from "@/components/home/what-we-do/Bonded";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import Other from "./Other";

const WhatWeDo = ({ lang }: { lang: any }) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const listItems = [
    {
      title: lang?.homePage?.whatWeDo?.fulfillment?.title,
      key: 1,
    },
    {
      title: lang?.homePage?.whatWeDo?.bb?.title,
      key: 2,
    },
    {
      title: lang?.homePage?.whatWeDo?.cross?.title,
      key: 3,
    },
    {
      title: lang?.homePage?.whatWeDo?.bonded?.title,
      key: 4,
    },
    {
      title: lang?.homePage?.whatWeDo?.custom?.title,
      key: 5,
    },
    {
      title: lang?.homePage?.whatWeDo?.other?.title,
      key: 6,
    },
  ];
  const [typeItem, setType] = useState(listItems[0].key as number);

  useEffect(() => {
    let selectedProductIndex = listItems.findIndex(
      (item) => item.key === typeItem
    );

    if (selectedProductIndex === -1) {
      selectedProductIndex = 0; // Nếu không tìm thấy, đặt lại về phần tử đầu tiên
    } else {
      selectedProductIndex++;
      if (selectedProductIndex === listItems.length) {
        selectedProductIndex = 0; // Nếu đã đạt cuối danh sách, quay lại phần tử đầu tiên
      }
    }

    const timeoutID = setTimeout(() => {
      setType(listItems[selectedProductIndex]?.key);
    }, 7000);

    return () => {
      clearTimeout(timeoutID);
    };
  }, [typeItem, listItems]);
  const RenderCPN = () => {
    switch (typeItem) {
      case 1:
        return <Fulfillment data={lang?.homePage?.whatWeDo?.fulfillment} />;
      case 2:
        // code block
        return <B2B data={lang?.homePage?.whatWeDo?.bb} />;
      case 3:
        // code block\
        return <CrossBorder data={lang?.homePage?.whatWeDo?.cross} />;
      case 4:
        // code block
        return <Bonded data={lang?.homePage?.whatWeDo?.bonded} />;
      case 5:
        // code block
        return <Customer data={lang?.homePage?.whatWeDo?.custom} />;
      case 6:
        // code block
        if (lang?.homePage?.whatWeDo?.other?.title != "")
          return <Other data={lang?.homePage?.whatWeDo?.other} />;
        else {
          setType(1);
        }
      default:
        // code block
        return <Fulfillment data={lang?.homePage?.whatWeDo?.fulfillment} />;
    }
  };
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
      { threshold: 1 / 5 }
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
    <div
      ref={elementRef}
      className="bg-[url('https://strapi-efex.ichiba.net/uploads/Ellipse_518_f211341094.svg')]"
    >
      <div className="container px-4 lg:px-0">
        <div
          className={clsx(
            " transition-all duration-200 delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <h2 className="text-2xl font-bold text-center lg:text-4xl">
            {lang?.homePage?.whatWeDo?.title}
          </h2>
          <div className="text-[#666] text-sm text-center mb-5">
            {lang?.homePage?.whatWeDo?.content}
          </div>
        </div>
        <div
          className={clsx(
            "flex items-center overflow-x-scroll lg:overflow-auto pb-3 lg:pb-[34px]",
            " transition-all duration-400 delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <Image src={efex} alt="efex" quality={100} />
          <div className="text-xl px-2">=</div>
          {listItems.map((value, index) => (
            <>
              {value.title != "" && (
                <div
                  key={index}
                  className={`flex items-center cursor-pointer`}
                  onClick={() => setType(value.key)}
                >
                  <div
                    className={`text-xl px-2 ${index === 0 ? "hidden" : ""}  `}
                  >
                    +
                  </div>
                  <div
                    className={`w-max ${
                      value.key === typeItem
                        ? "font-bold text-contact activeType relative top-[-8px]"
                        : "font-medium"
                    }`}
                  >
                    {value.title}
                  </div>
                </div>
              )}
            </>
          ))}
        </div>

        <div
          className={clsx(
            "mt-2 pb-6 lg:pb-10 h-auto lg:h-[603px]",
            " transition-all duration-400 delay-200",
            isVisible ? "scale-100" : "scale-0"
          )}
        >
          <RenderCPN />
        </div>
      </div>
    </div>
  );
};
export default WhatWeDo;
