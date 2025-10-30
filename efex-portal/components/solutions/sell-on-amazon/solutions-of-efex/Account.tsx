"use client";
import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { useRef, useState } from "react";
import { useEffect } from "react";

const Account = ({ lang }: { lang: any }) => {
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
        "transition-all duration-400 delay-200",
        isVisible ? "opacity-100" : "opacity-0"
      )}
    >
      <div
        className={clsx(
          "relative px-3 pt-5 pb-15 lg:px-8 lg:pt-10 lg:pb-20 bg-primary-1 rounded-xl"
        )}
      >
        <h3 className="text-base lg:text-2xl font-bold mb-4 lg:mb-6 text-brand-secondary">
          {lang?.account?.title}
        </h3>
        <div className="flex flex-col gap-4 z-50 lg:w-[50%]">
          {lang?.account?.items.map((item: any, index: number) => (
            <div key={index} className="text-sm lg:text-base">
              {item}
            </div>
          ))}
        </div>

        <Image
          src={
            "https://strapi-efex.ichiba.net/uploads/Sign_up_image_96f45e557a.svg"
          }
          width={588}
          height={350}
          className={clsx(
            "hidden lg:block absolute w-[588px] h-[350px]",
            "top-[50%] translate-y-[-50%] right-0"
          )}
          alt="logo"
        />
      </div>
      <Image
        src={
          "https://strapi-efex.ichiba.net/uploads/Sign_up_image_96f45e557a.svg"
        }
        width={588}
        height={350}
        className={clsx(
          "lg:hidden w-[358px] h-[230px] mx-auto -translate-y-10"
        )}
        alt="logo"
      />
    </div>
  );
};

export default Account;
