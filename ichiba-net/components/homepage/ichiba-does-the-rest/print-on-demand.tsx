'use client';
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import image from "../assets/print-on-demand.webp";
import LabelTag from "@/components/commons/label-tag";

const PrintOnDemand = ({ lang }: { lang: any }) => {
  const [isVisible, setVisible] = useState(false);
  const elementRef = useRef(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

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

    if (elementRef.current) observer.observe(elementRef.current);
    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={clsx(
        "container relative transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] py-6 lg:py-15",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-60"
      )}
    >
      <div className="grid lg:grid-cols-2 lg:items-center gap-4 lg:gap-10">
        {/* Mobile heading */}
        <div className="lg:hidden">
          <LabelTag
            value="#What we do"
            className="bg-[#F0F5FF] border-none mb-2"
          />
          <h2 className="text-xl font-bold">{lang.label}</h2>
        </div>

        {/* Image */}
        <Image src={image} alt="illus" className="w-full h-auto rounded-xl" />

        {/* Content */}
        <div className="flex flex-col gap-4 lg:gap-8 lg:pl-10">
          {/* Desktop heading */}
          <div className="hidden lg:block">
            <LabelTag
              value="#What we do"
              className="bg-[#F0F5FF] border-none mb-2"
            />
            <h2 className="text-2xl font-bold">{lang.label}</h2>
          </div>

          {/* Items */}
          <div className="flex flex-col gap-4 lg:gap-6">
            {lang.items.map((item: any, index: number) => (
              <div
                key={index}
                className="transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <p className="text-base lg:text-xl font-medium">
                  {item.title}
                </p>
                <div
                  className={clsx(
                    "overflow-hidden transition-all duration-500 ease-in-out text-gray-600",
                    hoverIndex === index
                      ? "max-h-[200px] opacity-100 mt-2"
                      : "max-h-0 opacity-0 mt-0"
                  )}
                >
                  {item.subtitle}
                </div>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <a
            href="#"
            className="text-base text-orange-500 font-medium hidden lg:block hover:underline"
          >
            {lang.textBtn} →
          </a>
          <button className="rounded-lg border border-brand-primary text-brand-primary py-[6px] px-3 hover:opacity-80 w-max lg:hidden">
            {lang.textBtn} →
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrintOnDemand;
