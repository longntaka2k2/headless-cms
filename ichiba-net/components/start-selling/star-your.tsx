"use client";
import { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import clsx from "clsx";
import Link from "next/link";
import MultiMarketplace from "./assets/multi-marketplace.png";
import SmartCrossDocking from "./assets/smart-cross-docking.png";
import Illus from "./assets/illus-star-your.webp";
import Ellipse from "./assets/ellipse.svg";

const StarYour = ({ lang }: any) => {
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
            "py-6 lg:pt-[130px] lg:pb-[75px] px-4",
            "relative transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
            isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
        )}>
            <div className="container relative bg-[#290C58] flex flex-col lg:flex-row items-center gap-4 lg:gap-1 rounded-2xl">
                <div className="lg:flex-1 pt-6 px-4 lg:py-10 lg:pl-12 lg:pr-0">
                    <h2 className="text-white mb-4">
                        Star your dropshipping journey today.
                    </h2>
                    <div className="flex gap-4 text-brand-primary mb-4">
                        <p className="text-lg lg:text-3xl font-medium">
                            • No subscription
                        </p>
                        <p className="text-lg lg:text-3xl font-medium">
                            • No MOQ
                        </p>
                    </div>
                    <p className="text-white mb-4 lg:mb-10">
                        Turn your ideas into sales with our all-in-one platform. Discover high-quality dropshipping products from Vietnam and Japan, automate your operations, and start selling to customers worldwide.
                    </p>
                    <div>
                        <Link href={"https://api.ichiba.net/account/login?redirectUrl=https://app.ichiba.net"} className={clsx(
                            "w-full max-w-[200px] text-center rounded-lg bg-brand-primary",
                            "text-sm lg:text-base text-white py-[10px] lg:py-3 px-6 hover:opacity-80"
                        )}>
                            Start selling now
                        </Link>
                    </div>
                </div>
                <Image src={Illus} width={550} height={430} className="lg:flex-1" alt="illus" />
                <Image src={Ellipse} width={250} height={250} className="absolute -top-[20%] left-15 mx-auto hidden lg:block -z-1" alt="ellipse" />
            </div>
        </div>
    );
};

export default StarYour;
