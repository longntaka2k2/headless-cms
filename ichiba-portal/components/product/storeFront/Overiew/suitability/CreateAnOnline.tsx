import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
const CreateAnOnline = () => {
  const b = useTranslation("build-store-front").t;

  return (
    <div className="tw-max-w-[1020] tw-mx-auto">
      <Moibile />
      <Desktop />
    </div>
  );
};

export const Moibile = () => {
  const b = useTranslation("build-store-front").t;
  const items = (
    b(`suitability.createAnOnline.items`, {
      returnObjects: true,
    }) as string[]
  ).map((x: any) => ({
    title: x.title as string,
    img: x.img as string,
    content: x.content as string,
    time: x.time as string,
  }));
  return (
    <div className="lg:tw-hidden tw-grid tw-gap-0 tw-ml-5">
      {items.map((value: any, index: number) => (
        <div
          className={clsx(
            "tw-relative after:tw-absolute after:tw-w-[1px] after:tw-bg-[#AAC9EE] after:tw-h-full tw-pt-7 after:tw-top-0 after:tw-left-[-20px]",
            "before:tw-absolute before:tw-z-1 before:tw-w-3 before:tw-h-3 before:tw-rounded-full before:tw-border before:tw-border-[#AAC9EE] before:tw-bg-white before:tw-left-[-25px] before:tw-top-10",
          )}
          key={index}
        >
          <Image
            src="https://cms-strapi.ichiba.net/uploads/Frame_427318620_5546a067c1.svg"
            alt={value.title}
            width={40}
            height={40}
          />
          <div className="tw-font-bold tw-mt-2">{value.title}</div>
          <div className="tw-mt-2 tw-text-sm">{value.content}</div>
          <div className="tw-text-xs tw-text-[#0F62FE] tw-mt-1">
            <FontAwesomeIcon icon={faClock} size="sm" className=" tw-mr-2" />
            {value.time}
          </div>
          <Image
            src={value.img}
            alt={value.title}
            width={400}
            height={330}
            className="tw-max-w-[400px] tw-w-full tw-mt-4"
          />
        </div>
      ))}
    </div>
  );
};
export const Desktop = () => {
  const b = useTranslation("build-store-front").t;
  const items = (
    b(`suitability.createAnOnline.items`, {
      returnObjects: true,
    }) as string[]
  ).map((x: any) => ({
    title: x.title as string,
    img: x.img as string,
    content: x.content as string,
    time: x.time as string,
  }));
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
    <div className="tw-hidden lg:tw-grid tw-gap-0 tw-ml-5" ref={elementRef}>
      {items.map((value: any, index: number) => (
        <div
          className={clsx(
            "tw-flex tw-justify-between",
            "tw-relative after:tw-absolute after:tw-w-[1px] after:tw-bg-[#AAC9EE] after:tw-h-full tw-pt-7 after:tw-top-0 after:tw-left-[50%] ",
            "before:tw-absolute before:tw-z-1 before:tw-w-3 before:tw-h-3 before:tw-rounded-full before:tw-border before:tw-border-[#AAC9EE] ",
            "before:tw-bg-white before:tw-translate-x-[-5px] before:tw-left-[50%] before:tw-top-10",
            "tw-transition-all tw-duration-500",
            isVisible ? "tw-translate-y-0 tw-opacity-100" : "tw-translate-y-10 tw-opacity-0"
          )}
          key={index}
          style={{
            transitionDelay:`${index * 250}ms`
          }}
        >
          
          <Image
            src={value.img}
            alt={value.title}
            width={400}
            height={330}
            className="tw-max-w-[460px] tw-w-full tw-mt-4"
          />
          <div className="tw-w-[440px]">
            <Image
              src="https://cms-strapi.ichiba.net/uploads/Frame_427318620_5546a067c1.svg"
              alt={value.title}
              width={40}
              height={40}
            />
            <div className="tw-font-bold tw-mt-2">{value.title}</div>
            <div className="tw-mt-2 tw-text-sm">{value.content}</div>
            <div className="tw-text-sm tw-text-[#0F62FE] tw-mt-1">
              <FontAwesomeIcon icon={faClock} size="sm" className=" tw-mr-2" />
              {value.time}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default CreateAnOnline;
