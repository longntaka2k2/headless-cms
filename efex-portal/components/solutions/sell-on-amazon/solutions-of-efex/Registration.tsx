"use client";
import React, { useRef } from "react";
import Image from "next/image";
import clsx from "clsx";
import { useEffect, useState } from "react";

const Registration = ({ lang }: { lang: any }) => {
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
        "px-3 py-4 lg:px-8 lg:p-10 border-2 border-primary-1 rounded-xl lg:rounded-2xl",
        "flex flex-col lg:flex-col-reverse justify-between gap-4 lg:gap-6",
        "transition-all duration-400 delay-200",
        isVisible ? "opacity-100" : "opacity-0"
      )}
    >
      <div>
        <h3 className="text-base lg:text-2xl font-bold mb-3">
          {lang?.registration?.title}
        </h3>
        <div className="flex flex-col">
          {lang?.registration?.items.map((item: any, index: number) => (
            <div key={index} className="text-sm lg:text-base">
              {item}
            </div>
          ))}
        </div>
      </div>

      <Image
        src={"https://strapi-efex.ichiba.net/uploads/image_ef6bf31c4d.svg"}
        width={498}
        height={280}
        className={clsx("mx-auto w-full")}
        alt="logo"
      />
    </div>
  );
};

export default Registration;
