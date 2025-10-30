"use client";
import img1 from "@/public/images/home/ourPartners/1.webp";
import img2 from "@/public/images/home/ourPartners/2.webp";
import img3 from "@/public/images/home/ourPartners/3.webp";
import img4 from "@/public/images/home/ourPartners/4.webp";
import img5 from "@/public/images/home/ourPartners/5.webp";
import img6 from "@/public/images/home/ourPartners/6.webp";
import img7 from "@/public/images/home/ourPartners/7.webp";
import img8 from "@/public/images/home/ourPartners/8.webp";
import img9 from "@/public/images/home/ourPartners/9.webp";
import img10 from "@/public/images/home/ourPartners/10.webp";
import img11 from "@/public/images/home/ourPartners/11.webp";
import img12 from "@/public/images/home/ourPartners/12.webp";
import img13 from "@/public/images/home/ourPartners/13.webp";
import img14 from "@/public/images/home/ourPartners/14.webp";
import img15 from "@/public/images/home/ourPartners/15.webp";
import img16 from "@/public/images/home/ourPartners/16.webp";
import img17 from "@/public/images/home/ourPartners/17.webp";
import img18 from "@/public/images/home/ourPartners/18.webp";
import img19 from "@/public/images/home/ourPartners/19.webp";
import img20 from "@/public/images/home/ourPartners/20.webp";
import img21 from "@/public/images/home/ourPartners/21.webp";
import img22 from "@/public/images/home/ourPartners/22.webp";
import img23 from "@/public/images/home/ourPartners/23.webp";
import img24 from "@/public/images/home/ourPartners/24.webp";
import img25 from "@/public/images/home/ourPartners/25.webp";
import img26 from "@/public/images/home/ourPartners/26.webp";
import img27 from "@/public/images/home/ourPartners/27.webp";
import img28 from "@/public/images/home/ourPartners/28.webp";
import img29 from "@/public/images/home/ourPartners/29.webp";
import img30 from "@/public/images/home/ourPartners/30.webp";
import img31 from "@/public/images/home/ourPartners/31.webp";
import img32 from "@/public/images/home/ourPartners/32.webp";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
const OutPartner = ({ lang }: { lang: any }) => {
  const items = [
    {
      title: lang?.homePage?.ourPartners?.party,
      icon: [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9,
        img10,
        img11,
        img12,
        img13,
      ],
    },
    {
      title: lang?.homePage?.ourPartners?.ecom,
      icon: [img27, img28, img29, img30, img31, img32],
    },
    {
      title: lang?.homePage?.ourPartners?.market,
      icon: [
        img14,
        img15,
        img16,
        img17,
        img18,
        img19,
        img20,
        img21,
        img22,
        img23,
        img24,
        img25,
        img26,
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
    <div ref={elementRef} className="px-4 pb-6 container lg:my-[67px] ">
      <div
        className={clsx(
          "text-center lg:mb-8 mb-5",
          "transition-all duration-400 delay-200",
          isVisible ? "opacity-100 " : "opacity-0 "
        )}
      >
        <h2 className="text-2xl lg:text-4xl font-bold">
          {lang?.homePage?.ourPartners?.title}
        </h2>
        <div className="text-sm lg:text-base text-[#666] mt-2">
          {lang?.homePage?.ourPartners?.content}
        </div>
      </div>
      <div
        className={clsx(
          `overflow-x-scroll lg:overflow-auto flex pb-4 lg:mx-auto lg:w-max`,
          " transition-all duration-400 delay-200",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
      >
        {items.map((value: any, index: number) => (
          <div
            className={`whitespace-nowrap cursor-pointer w-max text-sm lg:text-base rounded-t-2xl border-[2px] border-b-0 pt-4  px-5 lg:mr-5 mr-4 tabPartners tabPartners-border ${
              value.title === typeItem.title
                ? "text-contact font-bold tabPartnersActive "
                : "tabPartnersnoActive"
            }`}
            key={index}
            onClick={() => setType(value)}
          >
            {value.title}
          </div>
        ))}
      </div>
      <div>
        <div
          className={clsx(
            "text-lg font-bold pb-3 pt-4",
            " transition-all duration-400 delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          {typeItem.title}
        </div>
        <div className="grid lg:grid-cols-5 lg:gap-4 grid-cols-3 gap-3">
          {typeItem.icon.map((value: any, index: number) => (
            <div
              className={clsx(
                "h-full flex justify-center items-center  md:scale-1rounded-xl  transition-all hover:scale-110 ease-out"
              )}
              key={index}
            >
              <Image
                quality={100}
                src={value}
                alt="EFEX"
                className={clsx(
                  ` duration-300 `,
                  isVisible ? "scale-100" : "scale-0"
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
export default OutPartner;
