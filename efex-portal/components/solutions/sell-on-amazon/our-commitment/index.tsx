"use client";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const OurCommitment = ({ lang, locale }: { lang: any; locale: string }) => {
  const [active, setActive] = useState(0);
  const [showOn, setShowOn] = useState("");
  const elementRef = useRef(null);
  const [isVisible, setVisible] = useState(false);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Thêm useEffect để tự động chuyển active sau mỗi 3 giây
  useEffect(() => {
    const interval = setInterval(() => {
      if (lang?.items?.length > 0) {
        setActive((prevActive) => (prevActive + 1) % lang.items.length);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [lang?.items?.length]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = itemRefs.current.findIndex(ref => ref === entry.target);
          if (index !== -1) {
            setActive(index);
          }
        }
      });
    }, options);

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      itemRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

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
    <div ref={elementRef} className="container py-6 lg:py-20 px-4">
      <h2
        className={clsx(
          "lg:w-[65%] mx-auto text-center text-xl lg:text-4xl leading-7 lg:leading-[48px] mb-6 lg:mb-12"
        )}
      >
        <span className="text-brand-primary">{lang?.heading[0]}</span>
        {lang?.heading[1]}
      </h2>

      <div className="lg:hidden grid">
        {lang.items.map((value: any, index: number) => (
          <div key={index} className="flex gap-3">
            <div className="flex flex-col items-center">
              <div
                className={clsx(
                  "w-6 min-h-[24px] rounded-full",
                  active === index ? "bg-[#000]" : "bg-[#ccc]"
                )}
              ></div>
              <div
                className={clsx(
                  "w-1 bg-[#ccc]",
                  active === index
                    ? "h-full"
                    : index === lang?.items.length - 1
                    ? "h-0"
                    : "h-10"
                )}
              ></div>
            </div>
            <div onClick={() => setActive(index)}>
              <span className="text-base font-bold">{value.title}</span>
              <div
                className={clsx(
                  "mt-2 p-3 rounded-xl bg-[linear-gradient(274deg,_#FFF5EA_26.95%,_#E9EEFF_90%)]",
                  active === index ? "animate-showdown" : "hidden"
                )}
              >
                <p className="text-sm mb-4">{lang.items[active].content}</p>
                <Image
                  src={lang.items[active].img as string}
                  alt={lang.items[active].title}
                  width={590}
                  height={420}
                  className="mx-auto"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="hidden lg:grid grid-cols-4 items-start gap-10 lg:container">
        <div className="flex flex-col col-span-1 sticky top-[172px] z-[49]">
          {lang.items.map((value: any, index: number) => (
            <div key={index} onClick={() => setActive(index)}>
              <div className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div
                    className={clsx(
                      "w-6 h-6 rounded-full",
                      active === index ? "bg-[#000]" : "bg-[#ccc]"
                    )}
                  ></div>
                  <div className="h-20 w-1 bg-[#ccc]"></div>
                </div>
                <p className="text-base font-bold">{value.title}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="col-span-3 grid gap-10">
          {lang.items.map((item: any, index: number) => (
            <div
              key={index}
              ref={el => itemRefs.current[index] = el}
              className={clsx(
                "col-span-3 p-8 rounded-xl bg-[linear-gradient(274deg,_#FFF5EA_26.95%,_#E9EEFF_90%)]",
                "flex gap-6 items-center"
              )}
            >
              <Image
                src={item.img as string}
                alt={item.title}
                width={590}
                height={420}
                className="mx-auto"
              />
              <div>
                <h3 className="text-2xl mb-4">{item.title}</h3>
                <p className="text-lg">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurCommitment;
