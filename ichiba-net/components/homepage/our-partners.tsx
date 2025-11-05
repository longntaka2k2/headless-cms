'use client';
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import IconPerson from "./assets/icon-person.svg";
import IconSearch from "./assets/icon-search.svg";
import IconChartUp from "./assets/icon-chartup.svg";
import Vector from "./assets/bg-vector.svg";
import IllusPC from "@/public/images/our-partners-pc.webp";
import IllusMB from "@/public/images/our-partners-mb.webp";

const OurPartners = ({ lang, locale }: { lang: any; locale: string }) => {
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
            "container relative transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] pt-6 pb-10 lg:pt-15 lg:pb-10",
            isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
        )}>
            <h2 className="text-center mb-2">
                Our partners
            </h2>
            <p className="text-center lg:w-[80%] mx-auto mb-6">
                Our partners include reliable suppliers and logistics providers that power our automated dropshipping ecosystem. Together, we ensure fast fulfillment, quality products, and seamless operations for your global business.
            </p>
            <Image src={IllusPC} className="mx-auto hidden lg:block" alt="bg-vector" />
            <Image src={IllusMB} className="mx-auto lg:hidden" alt="bg-vector" />
        </div>
    );
};

export default OurPartners;
