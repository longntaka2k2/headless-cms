"use client";

import Logo1 from "@/public/images/selling-globally/Logo1.png";
import Logo2 from "@/public/images/selling-globally/Logo2.png";
import Logo3 from "@/public/images/selling-globally/Logo3.png";
import Logo4 from "@/public/images/selling-globally/Logo4.png";
import Logo5 from "@/public/images/selling-globally/Logo5.png";
import Logo6 from "@/public/images/selling-globally/Logo6.png";
import Logo7 from "@/public/images/selling-globally/Logo7.png";
import Logo8 from "@/public/images/selling-globally/Logo8.png";
import Logo9 from "@/public/images/selling-globally/Logo9.png";
import Logo10 from "@/public/images/selling-globally/Logo10.png";
import Logo11 from "@/public/images/selling-globally/Logo11.png";
import Logo12 from "@/public/images/selling-globally/Logo12.png";
import Logo13 from "@/public/images/selling-globally/Logo13.png";
import Logo14 from "@/public/images/selling-globally/Logo14.png";
import Logo15 from "@/public/images/selling-globally/Logo15.png";
import Logo16 from "@/public/images/selling-globally/Logo16.png";
import Logo17 from "@/public/images/selling-globally/Logo17.png";
import Logo18 from "@/public/images/selling-globally/Logo18.png";
import Logo19 from "@/public/images/selling-globally/Logo19.png";
import Logo20 from "@/public/images/selling-globally/Logo20.png";
import Logo21 from "@/public/images/selling-globally/Logo21.png";
import Logo22 from "@/public/images/selling-globally/Logo22.png";
import Logo23 from "@/public/images/selling-globally/Logo23.png";
import Logo24 from "@/public/images/selling-globally/Logo24.png";
import Logo25 from "@/public/images/selling-globally/Logo25.png";
import Logo26 from "@/public/images/selling-globally/Logo26.png";
import Logo27 from "@/public/images/selling-globally/Logo27.png";
import Logo28 from "@/public/images/selling-globally/Logo28.png";
import Logo29 from "@/public/images/selling-globally/Logo29.png";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import clsx from "clsx";

const OutPartners = ({ lang }: { lang: any }) => {
  const items = [
    {
      image:
        "https://strapi-efex.ichiba.net/uploads/Rectangle_6526_1_3a9c05963e.svg",
      title: lang?.title[0],
      icon: [
        Logo1,
        Logo2,
        Logo3,
        Logo4,
        Logo5,
        Logo6,
        Logo7,
        Logo8,
        Logo9,
        Logo10,
        Logo11,
        Logo12,
        Logo13,
      ],
    },
    {
      image:
        "https://strapi-efex.ichiba.net/uploads/Rectangle_6526_ac3fea21ac.svg",
      title: lang?.title[1],
      icon: [
        Logo14,
        Logo15,
        Logo16,
        Logo17,
        Logo18,
        Logo19,
        Logo20,
        Logo21,
        Logo22,
        Logo23,
        Logo24,
        Logo25,
        Logo26,
        Logo27,
        Logo28,
        Logo29,
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
      { threshold: 1 / 3 }
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
    <div className="py-6 px-3 lg:py-10">
      <div ref={elementRef} className="container">
        <h2 className="mb-6 lg:mb-10 text-2xl lg:text-4xl font-bold lg:text-center">
          {lang?.heading}
        </h2>

        <div
          className={clsx(
            "flex gap-2 bg-[#F2F2F2] p-1 rounded-[90px] w-max mx-auto mb-6",
          )}
        >
          {items.map((value: any, index: number) => (
            <div
              className={clsx(
                value.title === typeItem.title
                  ? "bg-gradient-to-r from-[#AA0606] to-[#00194F]"
                  : "",
                "rounded-[90px] py-[10px] lg:px-15 px-3 cursor-pointer transition-colors duration-500 ease",
                isVisible ? "animate-showOn" : "opacity-0"
              )}
              key={index}
              onClick={() => setType(value)}
            >
              <p
                className={clsx(
                  value.title === typeItem.title
                    ? "text-white"
                    : "text-[#00194F]",
                  "line-clamp-1 w-max",
                  "text-sm lg:text-base"
                )}
              >
                {value.title}
              </p>
            </div>
          ))}
        </div>

        <div>
          {!!typeItem?.icon && (
            <Image
              src={typeItem.image as string}
              alt="EFEX"
              width={1200}
              height={360}
            />
          )}
          <div className="px-3 lg:px-[117px]">
            <div
              style={{
                boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.05)",
              }}
              className={clsx(
                "translate-y-[-10%] lg:translate-y-[-30%]",
                "grid grid-cols-6 lg:gap-10 gap-5 bg-white py-6 px-6 lg:px-10 rounded-[20px]"
              )}
            >
              {typeItem.icon.map((value: any, index: number) => (
                <div
                  className={clsx(
                    "h-full flex justify-center items-center md:scale-1rounded-xl transition-all hover:scale-110 ease-out"
                  )}
                  key={index}
                >
                  <Image
                    quality={100}
                    src={value}
                    alt="EFEX"
                    className={clsx(
                      ` duration-300 mx-auto`,
                      isVisible ? "scale-100" : "scale-0"
                    )}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OutPartners;
