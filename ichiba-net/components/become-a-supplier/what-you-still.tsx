"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { faArrowRight, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Illus from "./assets/Illus-what-you-still.webp";
import BackgroundIllus from "./assets/bg-what-you-still.svg";
import LabelTag from "@/components/commons/label-tag";

const WhatYouStill = ({ lang }: any) => {
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
            "pt-6 pb-10 lg:py-15 px-4",
            "relative transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
            isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
        )}>
            <div className={clsx(
                "container bg-cover bg-center bg-no-repeat",
                "grid lg:grid-cols-2 items-center gap-6 lg:gap-0 rounded-2xl"
            )}
                style={{
                    backgroundImage: `url(${BackgroundIllus.src})`,
                }}>
                <div className="lg:pl-11 lg:pr-0 pt-6 lg:py-15">
                    <LabelTag value="WHAT YOU STILL WAITING FOR" borderGradient className="mb-3 lg:mb-4" />
                    <h2 className="mb-2 lg:mb-3 lg:line-clamp-1 lg:w-max relative">
                        Your products deserve the <span className="text-brand-primary">global stage</span>
                    </h2>
                    <p className="text-ic-ink-5 mb-6">
                        List your products on Ichiba and let global sellers do the selling for you. Fast onboarding, zero upfront cost, full support.
                    </p>
                    <button className="rounded-lg bg-brand-primary flex items-center gap-2 text-white py-3 px-4 hover:opacity-80">
                        Apply to become a supplier
                        <FontAwesomeIcon
                            icon={faArrowRight}
                            width={24}
                            height={24}
                            className="hidden lg:block"
                        />
                    </button>
                </div>
                <Image src={Illus} width={602} height={342} className="mx-auto mt-auto w-full" alt="illus" />
            </div>
        </div>
    );
};

export default WhatYouStill;
