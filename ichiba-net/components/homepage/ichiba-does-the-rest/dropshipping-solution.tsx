'use client';
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import image1 from "../assets/all-in-one.png";
import image2 from "../assets/products.png";
import image3 from "../assets/omnichannel.png";
import {
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LabelTag from "@/components/commons/label-tag";

const DropshippingSolution = ({ lang }: { lang: any }) => {
  const [isVisible, setVisible] = useState(false);
  const elementRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef<NodeJS.Timeout | null>(null);

  const items = [
    {
      title: lang.items[0].title,
      subtitle: lang.items[0].title,
      image: image1,
    },
    {
      title: lang.items[1].title,
      subtitle: lang.items[1].title,
      image: image2,
    },
    {
      title: lang.items[2].title,
      subtitle: lang.items[2].title,
      image: image3,
    },
  ];

  // quan sát hiện ra
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

    if (elementRef.current) observer.observe(elementRef.current);
    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, []);

  // tự động chuyển slide mỗi 7s
  useEffect(() => {
    setProgress(0);
    if (progressRef.current) clearInterval(progressRef.current);

    progressRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressRef.current!);
          setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
          return 100;
        }
        return prev + 100 / (7 * 10); // 7 giây
      });
    }, 100);

    return () => {
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [activeIndex]);

  // hover -> set active ngay
  const handleHover = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
      setProgress(0);
    }
  };

  return (
    <div
      ref={elementRef}
      className={clsx(
        "container relative transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] py-6 lg:pt-10 lg:pb-15",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-60"
      )}
    >
      {/* desktop */}
      <div className="w-full max-w-6xl mx-auto hidden lg:block">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* LEFT SIDE */}
          <div className="flex flex-col gap-8">
            <div>
              <LabelTag
                value="#What we do"
                className="bg-[#F0F5FF] border-none mb-4"
              />
              <h2 className="text-3xl font-bold">{lang.label}</h2>
            </div>

            <div className="space-y-4">
              {items.map((item, index) => (
                <div
                  key={index}
                  onMouseEnter={() => handleHover(index)} // 👉 hover active
                  className="transition-all duration-300 cursor-pointer"
                >
                  <div className="w-full flex justify-between items-center text-left">
                    <span
                      className={clsx(
                        "text-lg font-medium transition-colors duration-300",
                        index === activeIndex
                          ? "text-orange-500"
                          : "text-gray-800"
                      )}
                    >
                      {item.title}
                    </span>
                    <FontAwesomeIcon
                      icon={index === activeIndex ? faChevronUp : faChevronDown}
                      width={20}
                      height={20}
                      className="text-gray-500"
                    />
                  </div>

                  {index === activeIndex && (
                    <p className="text-base text-gray-500 mt-2 transition-opacity duration-300 ease-in-out">
                      {item.subtitle}
                    </p>
                  )}

                  {/* Progress bar */}
                  <div className="h-1 w-full bg-gray-200 rounded-full mt-6 overflow-hidden">
                    <div
                      className={clsx(
                        "h-full bg-orange-500 transition-[width] duration-100 linear",
                        index === activeIndex
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                      style={{
                        width: index === activeIndex ? `${progress}%` : "0%",
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="text-base text-orange-500 font-medium hover:underline"
            >
              {lang.textBtn} →
            </a>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative w-full h-[400px]">
            {items.map((item, index) => (
              <div
                key={index}
                className={clsx(
                  "absolute inset-0 transition-opacity duration-700 ease-in-out",
                  index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                )}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain rounded-xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index === activeIndex}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="lg:hidden flex flex-col gap-4">
        <div>
          <LabelTag
            value="#What we do"
            className="bg-[#F0F5FF] border-none mb-2"
          />
          <h2 className="text-xl font-bold">{lang.label}</h2>
        </div>
        <div className="flex overflow-x-auto flex-nowrap gap-4 no-scrollbar scroll-smooth">
          {items.map((item, index) => (
            <div
              key={index}
              className={clsx(
                "p-3 rounded-xl max-w-[300px] w-[300px] flex-shrink-0",
                index === 0 && "bg-primary-1",
                index === 1 && "bg-orange-100",
                index === 2 && "bg-violet-100"
              )}
            >
              <Image
                src={item.image}
                alt={item.title}
                className="w-full h-auto"
              />
              <div className="py-3">
                <p className="text-base font-bold">{item.title}</p>
                <p className="text-ic-ink-5">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="rounded-lg border border-brand-primary text-brand-primary py-[6px] px-3 hover:opacity-80 w-max">
          {lang.textBtn} →
        </button>
      </div>
    </div>
  );
};

export default DropshippingSolution;
