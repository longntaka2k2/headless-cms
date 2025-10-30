"use client";
import React, { useRef } from "react";
import Image from "next/image";
import clsx from "clsx";
import { useEffect, useState } from "react";

const StoreSetup = ({ lang }: { lang: any }) => {
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
        "border-2 border-primary-3 rounded-xl",
        "flex flex-col lg:flex-row-reverse lg:gap-10",
        "mb-16 lg:mb-0 lg:mt-11",
        "transition-all duration-400 delay-200",
        isVisible ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="flex flex-col gap-5 py-6 px-3">
        <h3 className="text-base lg:text-2xl font-bold text-brand-secondary">
          {lang?.storeSetup?.title}
        </h3>
        {lang?.storeSetup?.items.map((value: any, index: number) => (
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

      <Image
        src={
          "https://strapi-efex.ichiba.net/uploads/Frame_427318825_38e663096d.svg"
        }
        width={554}
        height={438}
        className="translate-y-16 lg:-translate-y-11 mx-auto"
        alt="image"
      />
    </div>
  );
};

export default StoreSetup;
