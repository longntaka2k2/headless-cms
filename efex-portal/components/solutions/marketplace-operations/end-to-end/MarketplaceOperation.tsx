"use client";
import { removeAccent } from "@/utils/ultils";
import Image from "next/image";
import React from "react";
import clsx from "clsx";
import { useState } from "react";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MarketplaceOperation = ({ lang }: any) => {
  const [active, setActive] = useState(0);
  return (
    <div className="px-4">
      <div
        id={removeAccent(lang?.label)}
        className="relative max-w-[1472px] w-full rounded-xl lg:rounded-2xl bg-[#00194F] mx-auto px-3 py-6 lg:py-15"
      >
        <div className="container">
          <p className="text-base lg:text-lg mb-2 lg:mb-5 text-white">
            {lang?.label}
          </p>
          <h3 className="text-xl lg:text-3xl font-semibold mb-6 lg:mb-10 text-white">
            <span className="text-brand-primary">#1</span> {lang?.title}
          </h3>
          <div
            className={clsx("grid lg:grid-cols-2 items-center gap-6 lg:gap-[50px]")}
          >
            <div>
              <div className="grid gap-4">
                {lang?.items.map((value: any, index: number) => (
                  <div key={index} onClick={() => setActive(index)}>
                    <div
                      className={clsx(
                        "py-6 px-5 cursor-pointer rounded-xl bg-[#fff]",
                        active === index ? "" : ""
                      )}
                    >
                      <div className="flex items-center justify-between">
                        <div
                          className={clsx(
                            "text-lg lg:text-2xl font-medium",
                            active === index ? "text-brand-primary" : ""
                          )}
                        >
                          {value.title}
                        </div>

                        <FontAwesomeIcon
                          icon={active === index ? faChevronUp : faChevronDown}
                          width={16}
                          height={16}
                          className={clsx("transition-all duration-200")}
                        />
                      </div>
                      <div
                        className={clsx(
                          "mt-2 lg:mt-3 !duration-500 grid",
                          active === index ? "animate-fade-in" : "hidden"
                        )}
                      >
                        {value.content.map((item: any, index: number) => (
                          <li key={index} className="text-sm lg:text-base">
                            {item}
                          </li>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Image
              src={
                "https://strapi-efex.ichiba.net/uploads/image_6bd0f9cf7f.svg"
              }
              alt="image"
              width={540}
              height={436}
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MarketplaceOperation;
