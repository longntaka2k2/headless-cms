"use client";
import clsx from "clsx";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Trusted = ({ lang, locale }: { lang: any; locale: string }) => {
  const [active, setActive] = useState(0);

  return (
    <div className="pt-10 lg:py-12 pb-9 px-4">
      <div className="container">
        <h2 className="text-xl lg:text-4xl leading-7 lg:leading-[48px] text-center mb-2">
          {lang?.heading[0]}
          <span className="text-brand-primary">{lang?.heading[1]}</span>
          {lang?.heading[2]}
        </h2>
        <p className="text-sm lg:text-base mb-8 lg:mb-10 text-center">
          {lang?.subHeading}
        </p>

        <div
          className={clsx(
            "relative px-4 py-5 rounded-[20px] lg:px-0 lg:py-0 lg:rounded-xl", 
            "shadow-[0px_17px_30px_0px_rgba(0,_0,_0,_0.07)] bg-white mb-8 lg:mb-12"
          )}
        >
          {lang?.content?.map((value: any, index: number) => (
            <div className={`${index === active ? "" : "hidden"}`} key={index}>
              <div className="flex flex-col lg:flex-row-reverse lg:items-center gap-6 lg:gap-12">
                <div className="flex-1 relative">
                  <Image
                    src={value?.image}
                    alt={"image"}
                    width={580}
                    height={360}
                    className="rounded-xl lg:rounded-l-none"
                  />
                </div>
                <div className="flex-1 lg:pl-10 flex flex-col gap-4 lg:justify-between">
                  <div>
                    <Image
                      src={
                        "https://strapi-efex.ichiba.net/uploads/_a1909a9c4d.svg"
                      }
                      alt="https://strapi-efex.ichiba.net/uploads/_a1909a9c4d.svg"
                      width={28}
                      height={21}
                      className="w-7 h-5 lg:w-[14px] lg:h-[10px] mb-1 lg:mb-4"
                    />
                    <div className="text-sm lg:text-base">{value?.content}</div>
                  </div>
                  <div className="flex items-center mt-3">
                    <div className="mr-3">
                      <Image
                        src={value?.avatar}
                        alt={value?.name}
                        width={48}
                        height={48}
                        className="w-10 h-10 lg:h-12 lg:w-12"
                      />
                    </div>
                    <div className="">
                      <div className="font-bold text-sm lg:text-base">
                        {value?.name}
                      </div>
                      <div className="text-xs lg:text-sm">{value?.bio}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div
            className={clsx(
              "hidden lg:block py-[7px] px-3 rounded-full border border-[#333] cursor-pointer",
              active === 0
                ? "pointer-events-none opacity-50"
                : "hover:opacity-70",
              "absolute top-[50%] translate-y-[-50%] -left-15"
            )}
            onClick={() => setActive(active - 1)}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
          <div
            className={clsx(
              "hidden lg:block py-[7px] px-3 rounded-full border border-[#333] cursor-pointer",
              active + 1 === lang?.content?.length
                ? "pointer-events-none opacity-50"
                : "hover:opacity-70",
              "absolute top-[50%] translate-y-[-50%] -right-15"
            )}
            onClick={() => setActive(active + 1)}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </div>

          <div className="lg:hidden flex items-center justify-end mt-6">
            <div
              className={clsx(
                "py-[7px] px-3 rounded-full border border-[#333] cursor-pointer",
                active === 0 ? "opacity-50 cursor-not-allowed" : ""
              )}
              onClick={() => active !== 0 && setActive(active - 1)}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </div>
            <div className="text-sm text-[#666] mx-5">
              {active + 1 + " / " + lang?.content?.length}
            </div>
            <div
              className={clsx(
                "py-[7px] px-3 rounded-full border border-[#333]",
                active + 1 === lang?.content?.length
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              )}
              onClick={() => setActive(active + 1)}
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Link
            href={`/${locale}/customer-success-studies`}
            target="_blank"
            className="border border-brand-primary text-brand-primary text-center rounded-lg px-6 lg:px-20 py-2 lg:py-3 hover:bg-[#e7e5e5]"
          >
            {lang?.textBtn}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Trusted;
