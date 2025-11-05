"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import Illus from "./assets/illus-banner.webp";
import BackgroundLeft from "./assets/background-left.webp";
import BackgroundRight from "./assets/background-right.webp";

const Banner = ({ lang }: any) => {
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
        <div ref={elementRef} className={clsx(
            "relative py-6 lg:py-10 px-4",
            "relative transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
            isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
        )}>
            <div className="container grid lg:grid-cols-2 gap-10 items-center">
                <div className="flex flex-col gap-3 lg:gap-10">
                    <div className="flex flex-col gap-2 lg:gap-5 text-center lg:text-left">
                        <h1>
                            1M+ authentic <br />
                            Made-in-Japan products
                        </h1>
                        <span className="uppercase text-lg lg:text-2xl text-brand-primary font-medium">
                            NO subscription • NO MOQ
                        </span>
                        <p>
                            Access a diverse catalog of 1M+ Japanese and Vietnamese products. <br />
                            Leverage our next-gen cross-docking dropshipping system to sell seamlessly across multiple marketplaces.
                        </p>
                    </div>
                    <button className="rounded-lg bg-brand-primary text-white py-[10px] lg:py-[12px] px-3 hover:opacity-80 lg:max-w-[255px]">
                        Start now. It’s free
                    </button>
                </div>
                <Image src={Illus} width={564} height={484} className="mx-auto" alt="illus" />
            </div>
            <Image src={BackgroundLeft} width={320} height={164} className="absolute -z-1 top-0 left-0 hidden lg:block" alt="background-left" />
            <Image src={BackgroundRight} width={470} height={220} className="absolute -z-1 top-0 right-0 hidden lg:block" alt="background-right" />
        </div>
    );
};

export default Banner;
