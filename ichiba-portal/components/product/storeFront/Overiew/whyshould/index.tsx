/* eslint-disable @next/next/link-passhref */
import { faAngleDown, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const WhyShould = () => {
  const b = useTranslation("build-store-front").t;
  const items = (
    b(`whyChoose.content`, {
      returnObjects: true,
    }) as string[]
  ).map((x: any) => ({
    title: x.title as string,
    icon: x.icon as string,
    link: x.link as string,
  }));
  const [active, setActive] = useState(0);
  const [activeMobile, setActiveMobile] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const backgroundHover = () => {
    return (
      <div
        className="tw-absolute tw-h-[64px] tw-top-0 tw-left-0 tw-right-0 tw-bg-white tw-rounded-lg tw-shadow-[0px_8px_16px_0px_rgba(0,0,0,0.05)] tw-transition-all tw-ease tw-duration-500 tw-flex tw-items-center tw-justify-end"
        style={{ transform: `translateY(${active * 64}px)` }}
      >
        <div className=" tw-float-right tw-h-8 tw-w-8 tw-rounded-full tw-bg-white tw-flex tw-items-center tw-justify-center tw-shadow-[0px_0px_20px_0px_rgba(0,0,0,0.11)] tw-relative tw-left-4">
          <FontAwesomeIcon icon={faChevronRight} />
        </div>{" "}
      </div>
    );
  };
  useEffect(() => {
    let selectedProductIndex = active;

    const handleTimeout = () => {
      if (!isHovered) {
        selectedProductIndex++;
        if (selectedProductIndex === items.length) {
          selectedProductIndex = 0;
        }
        setActive(selectedProductIndex);
      }
    };

    const timeoutID = setTimeout(handleTimeout, 1000);

    return () => {
      clearTimeout(timeoutID);
    };
  }, [active, isHovered, items.length]);
  const handleMouseEnter = (index: number) => {
    setActive(index);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  useEffect(() => {
    backgroundHover();
  }, [active]);

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
      { threshold: 1 / 3 },
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
    <div className="tw-bg-[#F9F5EF] lg:tw-pt-15 lg:tw-pb-24">
      <div className="container" ref={elementRef}>
        <div className={clsx("lg:tw-flex tw-hidden tw-gap-[55px] tw-transition-all tw-duration-200",isVisible ?"tw-scale-100 tw-opacity-100" :"tw-scale-75 tw-opacity-0")}>
          <div className="flex-1">
            <h2 className="lg:tw-text-4xl tw-font-bold tw-text-xl">
              {b("whyChoose.title")}
            </h2>
            <div className="tw-grid  tw-mt-5 tw-relative">
              {backgroundHover()}
              {items.map((value: any, index: number) => (
                <div
                  className="tw-flex tw-text-[#333] tw-no-underline tw-gap-3 lg:tw-pl-5 tw-h-[64px] tw-items-center tw-relative tw-z-[2]"
                  key={index}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave()}
                >
                  <Image
                    src={value.icon}
                    alt={value.title}
                    width={40}
                    height={40}
                    className="lg:tw-w-[40px] tw-w-[30px]"
                  />
                  <div className="lg:tw-text-base tw-text-sm tw-font-medium">
                    {value.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Image
            src="https://cms-strapi.ichiba.net/uploads/Frame_427318604_eb6ad3ae12.png"
            alt="WhyChoose"
            width={1212}
            height={1050}
            className="lg:tw-max-w-[574px] tw-object-contain"
            quality={100}
          />
        </div>
        <div className="lg:tw-hidden tw-pt-6 tw-pb-4">
          <h2 className="lg:tw-text-4xl tw-font-bold tw-text-xl">
            {b("whyChoose.title")}
          </h2>
          <div>
            {items.map((value: any, index: number) => (
              <div
                key={index}
                className={clsx(
                  index === 0 ? "" : "tw-border-t tw-border-[#ddd]",
                  "tw-transition-all tw-duration-200 tw-ease ",
                  activeMobile === index ? "tw-h-max" :''
                )}
                onClick={() => setActiveMobile(index)}
              >
                <div className="tw-flex tw-justify-between tw-items-center">
                  <div className="tw-flex tw-gap-3">
                    <Image
                      src={value.icon}
                      alt={value.title}
                      width={40}
                      height={40}
                      className="tw-w-[30px]"
                    />
                    <div className="tw-text-sm tw-font-medium tw-py-4">
                      {value.title}
                    </div>
                  </div>

                  <FontAwesomeIcon icon={faAngleDown} className={clsx("tw-transition-all tw-duration-200",activeMobile === index ? 'tw-rotate-180' : 'tw-rotate-0')} />
                </div>
                <div className={clsx(activeMobile === index ? " " : "tw-h-0 tw-overflow-hidden", "")}>
                  <Image
                    src="https://cms-strapi.ichiba.net/uploads/Frame_427318604_eb6ad3ae12.png"
                    alt="WhyChoose"
                    width={ 1212 }
                    height={1050 }
                    className={clsx("lg:tw-max-w-[574px] tw-object-contain tw-transition-all tw-duration-200", activeMobile === index ? "tw-scale-100 tw-opacity-100":"tw-scale-90 tw-opacity-70 " )}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default WhyShould;
