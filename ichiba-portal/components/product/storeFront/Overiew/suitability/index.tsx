import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import CreateAnOnline from "./CreateAnOnline";
const Suiability = () => {
  const b = useTranslation("build-store-front").t;
  const [active, setActive] = useState(0);
  const items = b(`suitability.${active === 0 ? "ecomm" : "landing"}.content`, {
    returnObjects: true,
  }) as string[];
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
      { threshold: 1 / 8 },
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
    <div className="container lg:tw-py-15 tw-py-8" ref={elementRef}>
      <div
        className={clsx(
          "tw-text-center tw-max-w-[800px] tw-mx-auto tw-transition-all tw-duration-300",
          isVisible
            ? "tw-translate-x-0 tw-opacity-100"
            : "w-translate-x-[-70px] tw-opacity-0",
        )}
      >
        <div className="tw-inline-block tw-text-[#0F62FE] tw-text-sm tw-px-5 tw-py-[2px] tw-rounded-full tw-bg-[#E6F3FF]">
          {b("suitability.label")}
        </div>
        <h2 className="lg:tw-text-4xl tw-font-bold tw-text-xl tw-mt-2">
          {b("suitability.title")}
        </h2>
      </div>
      <div
        className={clsx(
          "lg:tw-flex tw-justify-between tw-rounded-2xl tw-shadow-[0px_4px_16px_0px_rgba(0,0,0,0.12)] tw-overflow-hidden lg:tw-mt-10 tw-mt-5 tw-px-3 tw-py-4 lg:tw-p-0",
          "w-transition-all tw-duration-300 tw-delay-150",
          isVisible
            ? "tw-scale-100 tw-opacity-100"
            : "wtw-scale-80 tw-opacity-0",
        )}
      >
        <div className="lg:tw-pl-10 lg:tw-py-9 tw-max-w-[540px]">
          <div className="lg:tw-flex tw-grid tw-grid-cols-2 tw-rounded-lg tw-p-2 tw-bg-[#F1F4F9] md:tw-w-max tw-w-full lg:tw-mb-0 tw-mb-4">
            <div
              className={clsx(
                "lg:tw-text-lg tw-font-medium tw-transition-colors tw-duration-300 tw-rounded-lg lg:tw-py-3 tw-py-2 tw-px-7 tw-cursor-pointer tw-text-center",
                active === 0
                  ? "tw-bg-white tw-text-[#1D39C4]"
                  : "tw-text-[#666]",
              )}
              onClick={() => setActive(0)}
            >
              {b("suitability.ecomm.label")}
            </div>
            <div
              className={clsx(
                "lg:tw-text-lg tw-font-medium tw-transition-colors tw-duration-300 tw-rounded-lg lg:tw-py-3 tw-py-2 tw-px-7 tw-cursor-pointer tw-text-center",
                active === 1
                  ? "tw-bg-white tw-text-[#1D39C4]"
                  : "tw-text-[#666]",
              )}
              onClick={() => setActive(1)}
            >
              {b("suitability.landing.label")}
            </div>
          </div>
          <div>
            <div className="tw-font-bold lg:tw-text-2xl tw-text-lg lg:tw-mt-10">
              {b(`suitability.${active === 0 ? "ecomm" : "landing"}.title`)}
            </div>
          </div>
          <div className="tw-grid tw-gap-4 tw-mt-4">
            {items.map((value: any, index: number) => (
              <div key={index} className="tw-flex tw-gap-4">
                <Image
                  src="https://cms-strapi.ichiba.net/uploads/Group_d4c974d2bf.svg"
                  width={24}
                  height={24}
                  alt={value}
                />
                <div>{value}</div>
              </div>
            ))}
          </div>
          <div className="tw-flex lg:tw-gap-6 tw-gap-4 lg:tw-text-base tw-text-sm lg:tw-mt-10 tw-mt-5 ">
            <Link
              target="_blank"
              href={
                active === 0
                  ? "/products/storefront-layer/commerce-sites"
                  : "/products/storefront-layer/landingpage"
              }
              className="tw-no-underline tw-px-6 tw-py-3 tw-rounded-lg tw-bg-[#F57C00] tw-border tw-border-[#F57C00] tw-font-medium tw-text-white"
            >
              {b("suitability.learnMore")}
            </Link>
            <Link
              target="_blank"
              href={"https://org.ichiba.net"}
              className="tw-no-underline tw-px-6 tw-py-3 tw-rounded-lg tw-bg-white tw-border tw-border-[#F57C00] tw-font-medium tw-text-[#F57C00]"
            >
              {b("suitability.tryforfree")}
            </Link>
          </div>
        </div>

        <Image
          src="https://cms-strapi.ichiba.net/uploads/Frame_427318608_1_80294030c5.png"
          alt="suitability"
          width={768}
          height={906}
          quality={100}
          className="lg:tw-max-w-[512px] lg:tw-mt-0 tw-mt-4"
        />
      </div>
      <div className="tw-bg-[linear-gradient(91deg,_#B1D1F6_24.67%,_#C5C8FD_77.28%)] tw-blur-[100px] lg:tw-h-[350px] tw-w-full tw-h-[120px] container tw-absolute tw-right-0 tw-left-0 tw-z-[-1] tw-opacity-20"></div>
      <div className="">
        <div className="tw-max-w-[800px] tw-mx-auto tw-text-center tw-py-6">
          <Image
            src="https://cms-strapi.ichiba.net/uploads/Frame_427318618_5d233ad56c.svg"
            alt="createAnOnline"
            width={60}
            height={60}
            className="tw-mx-auto tw-min-h-15 tw-min-w-15"
          />
          <h2 className="lg:tw-text-4xl tw-font-bold tw-text-xl">
            {b("suitability.createAnOnline.title")}
          </h2>
          <Link
            target="_blank"
            href={"https://org.ichiba.net"}
            className="tw-no-underline tw-mt-5 lg:tw-mt-10 tw-inline-block tw-px-6 tw-py-3 tw-rounded-lg tw-bg-[#F57C00] tw-border tw-border-[#F57C00] tw-font-medium tw-text-white"
          >
            {b("suitability.createAnOnline.tryforfree")}
          </Link>
        </div>
        <CreateAnOnline />
      </div>
    </div>
  );
};
export default Suiability;
