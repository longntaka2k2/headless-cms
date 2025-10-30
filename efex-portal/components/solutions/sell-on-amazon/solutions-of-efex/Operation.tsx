"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import clsx from "clsx";
import { useRef, useState } from "react";

const Operation = ({ lang }: { lang: any }) => {
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
    <div
      ref={elementRef}
      className={clsx(
        "bg-[#F3F7FE] lg:bg-[url('https://strapi-efex.ichiba.net/uploads/Customs_clearance_fee_3aa5b7b000.svg')]",
        "bg-cover bg-right bg-no-repeat pt-4 pb-6 px-3 lg:px-10 lg:py-6 bg-primary-1 rounded-xl lg:rounded-2xl",
        "flex flex-col lg:flex-row items-center gap-8 lg:gap-10",
        "transition-all duration-400 delay-200",
        isVisible ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="flex flex-col">
        <h3 className="text-base lg:text-2xl font-bold mb-4 lg:mb-5 text-brand-secondary">
          {lang?.operation?.title}
        </h3>
        <div className="grid gap-4 lg:gap-6">
          {lang?.operation?.items.map((value: any, index: number) => (
            <div key={index}>
              <p className="text-base lg:text-xl mb-2 lg:mb-4">{value.label}</p>
              <div className="flex flex-col gap-3">
                {value.content.map((item: any, index: number) => (
                  <div key={index} className="flex items-center gap-2">
                    <Image
                      src={
                        "https://strapi-efex.ichiba.net/uploads/Group_ffd6d84a01.svg"
                      }
                      width={14}
                      height={10}
                      alt="logo"
                    />
                    <p className="text-sm lg:text-base">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Image
        src={
          "https://strapi-efex.ichiba.net/uploads/Frame_1171279881_681613fdb6.svg"
        }
        width={490}
        height={410}
        className={clsx("mx-auto")}
        alt="image"
      />
    </div>
  );
};

export default Operation;
