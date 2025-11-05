'use client';
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import IconPerson from "./assets/icon-person.svg";
import IconSearch from "./assets/icon-search.svg";
import IconChartUp from "./assets/icon-chartup.svg";
import Vector from "./assets/bg-vector.svg";
import IllusMB from "./assets/illus-contact-sale-mb.webp";
import IllusPC from "./assets/illus-contact-sale-pc.webp";
import Ellipse from "./assets/ellipse.svg"

const ContactSales = ({ lang, locale }: { lang: any; locale: string }) => {
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

    const contents = [
        "Get access to 1M+ dropshipping and print-on-demand products",
        "Easy-to-use order management on multi-channel, multi-market",
        "Full access to ebook, report, whitepaper resources",
        "Join 1000+ seller team around the world",
    ]

    return (
        <div ref={elementRef} className={clsx(
            "relative transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] py-6 lg:py-20 px-4",
            isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
        )}>
            <div className={clsx(
                "relative container bg-[#00194F] rounded-xl grid lg:grid-cols-2 lg:items-center gap-4 lg:gap-12",
            )}>
                <div className="pt-6 px-4 lg:pr-0 lg:pt-0 lg:pl-12">
                    <h2 className="mb-2 text-white">
                        No subscription fee
                    </h2>
                    <p className="mb-4 italic text-white">
                        Just a click to access our one-stop dropshipping platform for dropship & POD
                    </p>
                    <ul className="mb-6 pl-4 list-disc text-ic-ink-2">
                        {
                            contents.map((item, index) => (
                                <li key={index} className="text-sm lg:text-base">
                                    {item}
                                </li>
                            ))
                        }
                    </ul>
                    <div className="">
                        <Link href={"https://api.ichiba.net/account/login?redirectUrl=https://app.ichiba.net"} className={clsx(
                            "w-full rounded-lg bg-brand-primary",
                            "text-sm lg:text-base text-white py-[10px] lg:py-3 px-6 hover:opacity-80"
                        )}>
                            Start Selling Now
                        </Link>
                    </div>
                </div>
                <Image src={IllusPC} width={560} height={450} className="mx-auto hidden lg:block translate-y-3" alt="illus" />
                <Image src={IllusMB} width={330} height={270} className="mx-auto lg:hidden" alt="illus" />
                <Image src={Ellipse} width={250} height={250} className="absolute -top-[20%] left-15 mx-auto hidden lg:block -z-1" alt="ellipse" />
            </div>
        </div>
    );
};

export default ContactSales;
