"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { faArrowRight, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Illus from "./assets/Illus-reviews.webp";
import BackgroundIllus from "./assets/background.svg";
import LabelTag from "@/components/commons/label-tag";

const contents = [
    {
        content: [
            "Get access to ",
            "1M+ dropshipping ",
            "and ",
            "print-on-demand ",
            "products",
        ]
    },
    {
        content: [
            "Easy-to-use order management on multi-channel, multi-market",
        ]
    },
    {
        content: [
            "Full access to ebook, report, whitepaper resources",
        ]
    },
    {
        content: [
            "Join ",
            "1000+ seller ",
            "team around the world",
        ]
    }
]

const NoSubscription = ({ lang }: any) => {
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
            "py-6 text-[#00194F] px-4",
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
                <div className="lg:pl-11 lg:pr-0 pt-6 lg:py-15 z-50">
                    <h2 className="mb-2 lg:mb-3">
                        No subscription fee
                    </h2>
                    <p className="italic mb-3 xl:mb-4 xl:line-clamp-1 xl:w-max">
                        Just a click to access our one-stop dropshipping platform for dropship & POD
                    </p>
                    <ul className="mb-4 lg:mb-6 pl-5 list-disc">
                        {
                            contents.map((x, n) => (
                                <li key={n} className="text-sm lg:text-base">
                                    {x.content[0]}
                                    <span className="text-brand-primary">
                                        {x.content[1]}
                                    </span>
                                    {x.content[2]}
                                    <span className="text-brand-primary">
                                        {x.content[3]}
                                    </span>
                                    {x.content[4]}
                                </li>
                            ))
                        }
                    </ul>
               
                    <div>
                        <Link href={"https://api.ichiba.net/account/login?redirectUrl=https://app.ichiba.net"} className={clsx(
                            "w-full rounded-lg bg-brand-primary",
                            "text-sm lg:text-base text-white py-[10px] lg:py-3 px-6 hover:opacity-80"
                        )}>
                            Start Selling Now
                        </Link>
                    </div>
                </div>
                <Image src={Illus} width={602} height={342} className="mx-auto mt-auto w-full z-0" alt="illus" />
            </div>
        </div>
    );
};

export default NoSubscription;
