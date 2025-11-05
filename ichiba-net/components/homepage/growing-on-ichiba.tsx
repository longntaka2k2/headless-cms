'use client';
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import IconPerson from "./assets/icon-person.svg";
import IconSearch from "./assets/icon-search.svg";
import IconChartUp from "./assets/icon-chartup.svg";
import Illus from "./assets/illus.webp";
import Play from "@/public/icons/play.svg";
import Vector from "./assets/bg-vector.svg";

const GrowingOnIChiba = ({ lang }: { lang: any }) => {
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

    const items = [
        {
            icon: IconPerson,
            content: lang.items[0].content,
        },
        {
            icon: IconSearch,
            content: lang.items[1].content,
        },
        {
            icon: IconChartUp,
            content: lang.items[2].content,
        },
    ]

    return (
        <div ref={elementRef} className={clsx(
            "relative transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] px-4 py-6 lg:py-15 bg-[#F8FAFF] overflow-hidden",
            isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-"
        )}>
            <div className="container flex flex-col gap-6 lg:gap-10">
                <h2 className="text-center">
                    {lang.heading[0]} <br /> {lang.heading[1]} <span className="text-brand-primary">{lang.heading[2]}</span>
                </h2>
                <div className="flex flex-col lg:flex-row gap-6">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className={clsx(
                                "p-3 lg:p-5 rounded-xl flex items-center gap-4 bg-white shadow-3",
                                "transition-transform duration-300 ease-out hover:scale-105 hover:shadow-lg",
                                index === 1 && "lg:max-w-[470px]"
                            )}
                        >
                            <Image src={item.icon} alt="icon" />
                            <p>
                                {item.content[0]}{" "}
                                <span className="text-base lg:text-xl font-bold text-brand-primary">
                                    {item.content[1]}
                                </span>{" "}
                                {item.content[2]}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="w-full h-full relative group cursor-pointer">
                    <Image src={Illus} width={1120} height={580} className="mx-auto" alt="illus" />
                    <Image src={Play} width={70} height={70} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden group-hover:block" alt="icon-play" />
                </div>
            </div>
            <Image src={Vector} width={1060} height={960} className="absolute top-1/4 left-1/2 -translate-x-1/2 -z-1 hidden lg:block" alt="bg-vector" />
        </div>
    );
};

export default GrowingOnIChiba;
