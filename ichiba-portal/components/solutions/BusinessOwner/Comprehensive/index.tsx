import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useState } from "react";
const Comprehensive = () => {
  const b = useTranslation("business-owner").t;
  const [active, setActive] = useState(0);
  return (
    <div className="tw-overflow-hidden">
      <div className="tw-py-6 tw-px-4 lg:tw-px-0 lg:tw-py-20 lg:tw-container tw-relative ">
        <h2 className="tw-font-bold tw-text-2xl lg:tw-text-4xl">
          {b("comprehensive.title")}
        </h2>
        <div className="tw-text-sm tw-mt-2 lg:tw-text-base tw-text-[#666] lg:tw-max-w-[800px]">
          {b("comprehensive.content")}
        </div>
        <div className="lg:tw-flex lg:tw-gap-15 tw-mt-4 lg:tw-mt-10 ">
          <div className="tw-grid tw-gap-4">
            {(
              b("comprehensive.items", {
                returnObjects: true,
              }) as string[]
            ).map((value: any, index: number) => (
              <div
                className={clsx(
                  "tw-rounded-lg tw-border  tw-p-4 tw-transition-all tw-duration-500 tw-cursor-pointer",
                  active === index
                    ? "tw-border-[#F57C00]"
                    : "tw-border-[#ddd] lg:tw-border-[#fff]",
                )}
                key={index}
                onClick={() => setActive(index)}
              >
                <div>
                  <div className="tw-text-base  lg:tw-text-xl tw-font-bold">
                    {value.title}
                  </div>
                  <div className="tw-text-sm lg:tw-text-base tw-mt-2 lg:tw-mt-4">
                    {value.content}
                  </div>
                </div>
                <Image
                  src={value.img}
                  alt={value.title}
                  width={612}
                  height={536}
                  className={clsx(
                    "tw-w-full tw-rounded-lg tw-mt-4 tw-transition-all tw-duration-500 lg:tw-hidden",
                    active === index ? "tw-h-max" : "tw-opacity-0 tw-h-0",
                  )}
                />
              </div>
            ))}
          </div>
          <Image
            src={b(`comprehensive.items.${active}.img`) as string}
            alt="comprehensive"
            width={612}
            height={536}
            className={clsx(
              "tw-w-full tw-rounded-lg tw-transition-all tw-duration-500 tw-hidden lg:tw-block ",
            )}
          />
        </div>
        <Image
          src={
            "https://cms-strapi.ichiba.net/uploads/Background_8d8ac6e1a1.svg"
          }
          alt="comprehensive"
          width={783}
          height={363}
          className="tw-hidden lg:tw-block tw-absolute tw-bottom-0 tw-right-[-20%] tw-z-[-1]"
        />
      </div>
    </div> 
  );
};

export default Comprehensive;
