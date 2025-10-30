/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/link-passhref */
import { useTranslation } from "next-i18next";
import Image from "next/image";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

export default function YouAreLoosing() {
  const { t } = useTranslation("private-domain-traffic");
  const router = useRouter();
  const elementRef = useRef(null);
  const [isVisible, setVisible] = useState(false);
  const [active, setActive] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const items = (
    t(`youAreLoosing.items`, {
      returnObjects: true,
    }) as string[]
  ).map((x: any) => ({
    title: x.title as string,
    icon: x.icon as string,
    link: x.link as string,
  }));

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

  const backgroundHover = () => {
    return (
      <div
        className="tw-absolute tw-h-[64px] tw-top-0 tw-left-0 tw-right-0 tw-bg-white tw-rounded-lg tw-shadow-[0px_8px_16px_0px_rgba(0,0,0,0.05)] tw-transition-all tw-ease tw-duration-500 tw-flex tw-items-center tw-justify-end"
        style={{ transform: `translateY(${active * 64}px)` }}
      ></div>
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

    const timeoutID = setTimeout(handleTimeout, 2000);

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
  }, [active, backgroundHover]);

  return (
    <div
      ref={elementRef}
      className={clsx(
        "tw-relative lg:tw-py-20 tw-px-4",
        "tw-bg-[linear-gradient(328deg,_rgba(198,_221,_255,_0.40)_-17.63%,_rgba(255,_237,_216,_0.56)_36.06%,_rgba(255,_255,_255,_0.80)_62.43%)]",
      )}
    >
      <div className="tw-container tw-flex tw-flex-col tw-gap-10 lg:tw-gap-20">
        <div>
          <h2 className="tw-text-xl lg:tw-text-4xl tw-mb-6 lg:tw-mb-10 tw-font-bold">
            {t("youAreLoosing.heading")}
          </h2>
          <div
            className={clsx(
              "tw-flex tw-flex-col lg:tw-flex-row tw-items-start tw-gap-6 lg:tw-gap-[55px] tw-transition-all tw-duration-200",
              isVisible
                ? "tw-animate-showOn lg:tw-animate-leftShow"
                : "tw-opacity-0",
            )}
          >
            <div className="flex-1 tw-mx-auto">
              <div className="tw-grid tw-relative">
                {backgroundHover()}
                {items.map((value: any, index: number) => (
                  <div
                    className="tw-flex tw-text-[#333] tw-no-underline tw-gap-3 tw-pl-2 lg:tw-pl-5 tw-h-[64px] tw-items-center tw-relative tw-z-[2]"
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
              src="https://cms-strapi.ichiba.net/uploads/Frame_427318604_9d5e3c698b.svg"
              alt="youAreLoosing"
              width={586}
              height={407}
              className={clsx(
                "tw-mx-auto tw-object-contain",
                isVisible
                  ? "tw-animate-showOn lg:tw-animate-rightShow"
                  : "tw-opacity-0",
              )}
              quality={100}
            />
          </div>
        </div>
        <div className={clsx(isVisible ? "tw-animate-showOn" : "tw-opacity-0")}>
          <h2 className="tw-text-xl lg:tw-text-4xl tw-mb-8 lg:tw-mb-15 tw-font-bold lg:tw-text-center ">
            {t("doNot.0")} <br />
            {t("doNot.1")}
          </h2>
          <Image
            src={
              router.locale === "en"
                ? "https://cms-strapi.ichiba.net/uploads/Group_1171276396_1_75ea30e283.svg"
                : "https://cms-strapi.ichiba.net/uploads/Group_1171276396_7d378cb783.svg"
            }
            alt="youAreLoosing"
            width={1179}
            height={628}
            className="tw-mx-auto tw-object-contain"
          />
        </div>
      </div>

      <Image
        src={
          "https://cms-strapi.ichiba.net/uploads/Group_1171276368_2be39f8f85.svg"
        }
        alt="#"
        width={287}
        height={245}
        className="tw-hidden lg:tw-block tw-absolute tw-left-0 tw-top-[50%] tw-translate-y-[-50%]"
      />

      <Image
        src={"https://cms-strapi.ichiba.net/uploads/Background_a2fc6b9460.svg"}
        alt="#"
        width={242}
        height={242}
        className="tw-hidden lg:tw-block tw-absolute tw-right-0 tw-bottom-24"
      />
    </div>
  );
}
