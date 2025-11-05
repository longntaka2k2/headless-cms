'use client';
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import Thumnail from "../assets/proof/thumnail-proof.webp";
import Star from "@/public/images/commons/icon-star.svg";

const items = [
    {
        title: "6+ warehouse locations across the US, Japan, and Vietnam",
        subtitle:
            "Our growing network of fulfillment centers ensures fast, reliable shipping to your customers worldwide.",
    },
    {
        title: "Over 5 years of logistics expertise",
        subtitle: "Our experienced logistics team has supported thousands of international shipments with speed, accuracy, and care.",
    },
];

const ProofCard = ({ lang, data }: { lang: any, data: any }) => {
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
        <div className="p-3 lg:p-4 rounded-xl shadow-[0_8px_16px_0_rgba(0,_0,_0,_0.05)] bg-white max-w-[265px] min-w-[265px] lg:max-w-[340px] lg:min-w-[340px] min-h-[379px] lg:min-h-[451px]">
            <div className="w-full h-[150px] lg:h-[195px] rounded-lg overflow-hidden mb-3 lg:mb-4">
                <Image src={data.thumnail} width={308} height={195} className="w-full h-full" alt="#" />
            </div>
            <p className="font-medium">{data.userName}</p>
            <p className="mb-2 lg:mb-3 text-xs lg:text-sm">{data.career}</p>
            <p className="mb-2">
                {data.textarea}
            </p>
            <div className="flex items-center gap-2">
                <div className="flex items-center">
                    {[...Array(data.star)].map((_, i) => (
                        <Image
                            key={i}
                            src={Star}
                            width={20}
                            height={20}
                            alt={`star-${i}`}
                            loading="lazy"
                        />
                    ))}
                </div>
                <p className="font-medium">
                    {data.star}.0
                </p>
            </div>
        </div>
    );
};

export default ProofCard;
