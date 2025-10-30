"use client";
import clsx from "clsx";
import "react-phone-input-2/lib/style.css";
import "react-toastify/dist/ReactToastify.css";
import { Cta } from "../commons/Cta";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Key, useEffect, useRef, useState } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const OurPartners = ({ lang }: any) => {
  const [typeItem, setType] = useState(lang.type[0] as any);
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
    <>
      <div
        ref={elementRef}
        className="py-6 lg:py-16 overflow-hidden bg-[#F2F4F8]"
      >
        <div className="container px-4 lg:px-0">
          <h2 className="text-2xl lg:text-4xl font-bold lg:w-[80%] mx-auto text-center lg:leading-12 mb-4 lg:mb-6">
            {lang.heading}
          </h2>

          <div
            className={clsx(
              "flex gap-2 bg-[#F9F9F9] p-1 rounded-[90px] w-max mx-auto mb-6 lg:mb-10 border border-ic-ink-2"
            )}
          >
            {lang.type.map((value: any, index: number) => (
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

          {typeItem.title === lang.type[0].title ? (
            <div className="p-4 lg:p-10 rounded-xl bg-white shadow-[0px_8px_16px_0px_rgba(0,_0,_0,_0.05)] grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
              {typeItem.items.map((item: string, index: number) => (
                <div
                  key={index}
                  className="relative w-full py-4 lg:py-5 border border-ic-ink-2 rounded-lg flex justify-center items-center group cursor-pointer"
                >
                  <Image
                    src={item}
                    width={120}
                    height={40}
                    alt="EFEX"
                    className={clsx(
                      ` duration-300 group-hover:scale-125 h-6 lg:h-10`,
                      isVisible ? "scale-100" : "scale-0"
                    )}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="p-4 lg:p-10 rounded-xl bg-white shadow-[0px_8px_16px_0px_rgba(0,_0,_0,_0.05)] grid lg:grid-cols-2 gap-6 lg:gap-10">
              {typeItem.items.map((value: any, index: number) => (
                <div key={index}>
                  <div className="flex items-center gap-4 mb-3 lg:mb-4">
                    <div className="w-8 h-8 flex items-center">
                      <Image src={value.icon} width={32} height={32} alt="" />
                    </div>
                    <p className="text-base font-bold">{value.label}</p>
                  </div>
                  <div className="grid grid-cols-4 gap-2 lg:gap-3">
                    {value.list.map((item: string, index: number) => (
                      <div
                        key={index}
                        className="relative w-full py-4 lg:py-5 border border-ic-ink-2 rounded-lg flex justify-center items-center group cursor-pointer"
                      >
                        <Image
                          src={item}
                          width={80}
                          height={32}
                          alt="EFEX"
                          className={clsx(
                            ` duration-300 group-hover:scale-125 h-4 lg:h-6`,
                            isVisible ? "scale-100" : "scale-0"
                          )}
                          style={{ transitionDelay: `${index * 100}ms` }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default OurPartners;
