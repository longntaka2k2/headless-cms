import clsx from "clsx";
import { useTranslation } from "next-i18next";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import buildStore from "@/public/icons/storefront/buildStore.png";
import effort from "@/public/icons/storefront/effort.png";
import effortMobile from "@/public/icons/storefront/effortMobile.png";
import Link from "next/link";
const BuildStoreFront = () => {
  const [active, setActive] = useState(0);
  const b = useTranslation("build-store-front").t;
  const items = (
    b(`buildStoreFront.tabs`, {
      returnObjects: true,
    }) as string[]
  ).map((x: any) => ({
    title: x.title as string,
    subtitle: x.subtitle as string,
    content: x.subtitle as [],
  }));
  const [isVisible, setVisible] = useState(false);
  const [showOn, setShowOn] = useState("");

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
  useEffect(() => {
    setShowOn("tw-opacity-0");
    const timeout = setTimeout(() => {
      setShowOn("tw-animate-showOn");
    }, 50);

    return () => clearTimeout(timeout); // Clear timeout nếu active thay đổi trước khi timeout được kích hoạt
  }, [active]);
  const renderContent = () => {
    return (
      <div
        className={clsx(
          "tw-grid lg:tw-grid-cols-2 lg:tw-mt-10 tw-mt-8 lg:tw-gap-[60px] tw-items-center lg:tw-flex-col tw-flex-col-reverse",
          showOn,
        )}
      >
        <div className="tw-block lg:tw-hidden tw-mb-4">
          <h3 className="tw-font-bold tw-text-lg lg:tw-text-2xl">
            {items[active].title}
          </h3>
          <div className="tw-mt-2">{items[active].subtitle}</div>
          <ul className="tw-list-disc">
            {(
              b(`buildStoreFront.tabs.${active}.content`, {
                returnObjects: true,
              }) as string[]
            ).map((value: any, index: number) => (
              <li className="my-2" key={index}>
                {value}
              </li>
            ))}
          </ul>
          <Link
            target="_blank"
            href={"https://org.ichiba.net"}
            className="lg:tw-mt-6 tw-no-underline tw-px-6 text-center tw-rounded-lg tw-py-3 tw-inline-block tw-text-white tw-font-medium tw-bg-[#F57C00]"
          >
            {b("buildStoreFront.tryforfree")}
          </Link>
        </div>
        <div className="">
          <Image
            src={buildStore}
            alt={items[active].title}
            width={604}
            height={446}
            className=""
          />
        </div>
        <div className="lg:tw-block tw-hidden ">
          <div className="tw-font-bold lg:tw-text-2xl">
            {items[active].title}
          </div>
          <div className="tw-mt-2">{items[active].subtitle}</div>
          <ul className="tw-list-disc">
            {(
              b(`buildStoreFront.tabs.${active}.content`, {
                returnObjects: true,
              }) as string[]
            ).map((value: any, index: number) => (
              <li className="my-2" key={index}>
                {value}
              </li>
            ))}
          </ul>
          <Link
            target="_blank"
            href={"https://org.ichiba.net"}
            className="lg:tw-mt-6 tw-no-underline tw-px-6 text-center tw-rounded-lg tw-py-3 tw-inline-block tw-text-white tw-font-medium tw-bg-[#F57C00]"
          >
            {b("buildStoreFront.tryforfree")}
          </Link>
        </div>
      </div>
    );
  };
  useEffect(() => {
    renderContent();
  }, [active]);
  return (
    <div className="lg:tw-py-15 tw-py-6 " ref={elementRef}>
      <div className="tw-container">
        <h2
          className={clsx(
            "lg:tw-text-4xl tw-text-2xl tw-font-bold text-center lg:tw-px-0 tw-px-4 tw-transition-all tw-duration-300 tw-mb-0",
            isVisible
              ? "tw-scale-100 tw-opacity-100"
              : "tw-opacity-0 tw-scale-75",
          )}
        >
          {b("buildStoreFront.title.0")} <br />
          <span className="tw-text-[#F57C00]">
            {b("buildStoreFront.title.1")}
          </span>
          {b("buildStoreFront.title.2")}
          <span className="tw-text-[#F57C00]">
            {b("buildStoreFront.title.3")}
          </span>
          {b("buildStoreFront.title.4")}
        </h2>
        <div className="lg:tw-mt-10 lg:tw-px-0 tw-px-4">
          <div className="lg:tw-grid tw-flex lg:tw-grid-cols-4 lg:tw-justify-center tw-gap-6 tw-items-center lg:tw-w-max tw-overflow-x-scroll lg:tw-overflow-visible tw-mx-auto tw-pt-1 tw-px-1">
            {items.map((value: any, index: number) => (
              <h3
                className={clsx(
                  active === index
                    ? clsx(
                        "tw-bg-white tw-text-brand-primary ",
                        "after:tw-absolute after:tw-bg-[linear-gradient(#0085FF,_#FFAB52)] after:tw-z-[-1] after:tw-rounded-lg ",
                        "after:tw-top-[-2px] after:tw-bottom-[0px] after:tw-left-[-2px] after:tw-right-[-2px]",
                      )
                    : " tw-border tw-border-[#ddd] tw-border-b-0",
                  "lg:tw-max-w-[244px] tw-min-w-[204px] text-center tw-rounded-b-none lg:tw-text-base tw-text-sm tw-bg-white tw-relative tw-rounded-lg ",
                  " tw-rounded-lg lg:tw-px-6 tw-px-4 lg:tw-h-[72px] tw-h-[55px] tw-grid tw-items-center tw-cursor-pointer tw-transition-colors tw-duration-500 tw-ease",
                  isVisible ? "tw-animate-showOn" : "tw-opacity-0 ",
                )}
                key={index}
                onClick={() => setActive(index)}
              >
                {value.title}
              </h3>
            ))}
          </div>
          {isVisible && renderContent()}
        </div>
      </div>
      <div className="lg:tw-max-w-[1269px] tw-mx-auto tw-rounded-3xl tw-bg-[#F4F9FC] lg:tw-mt-[84px] lg:tw-pt-[60px] tw-pt-5 tw-px-4 tw-pb-[36px] lg:tw-px-10 tw-mt-6">
        <h2 className="lg:tw-text-4xl tw-text-2xl tw-font-bold tw-text-center lg:tw-mb-10 tw-mb-6">
          {b("buildStoreFront.effort")}
        </h2>
        <Image
          className="lg:tw-block tw-hidden"
          src={effort}
          alt="effort"
          width={1190}
          height={551}
        />
        <Image
          className="lg:tw-hidden"
          src={effortMobile}
          alt="effort"
          width={1190}
          height={551}
        />
      </div>
    </div>
  );
};
export default BuildStoreFront;
