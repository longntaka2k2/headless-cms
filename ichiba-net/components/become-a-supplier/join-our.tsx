'use client';
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import IllusPC from "@/public/images/our-partners-pc.webp";
import IllusMB from "@/public/images/our-partners-mb.webp";

const JoinOur = ({ lang }: { lang: any }) => {
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
            "container relative transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] py-6 lg:py-10 px-4",
            isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
        )}>
            <h2 className="text-center mb-2 lg:mb-3">
                Join our growing family of suppliers
            </h2>
            <p className="text-center lg:w-[80%] mx-auto mb-6 lg:mb-10">
                Become part of our network of top dropshipping suppliers and connect with global sellers who are ready to bring your products to new markets. Together, we make cross-border eCommerce seamless and profitable.
            </p>
            <Image src={IllusPC} className="mx-auto hidden lg:block" alt="bg-vector" />
            <Image src={IllusMB} className="mx-auto lg:hidden" alt="bg-vector" />
        </div>
    );
};

export default JoinOur;
