'use client';
import { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import clsx from "clsx";
import Step1 from "./assets/how-to-become/step1.webp";
import Step2 from "./assets/how-to-become/step2.webp";
import Step3 from "./assets/how-to-become/step3.webp";
import Step4 from "./assets/how-to-become/step4.webp";
import LabelTag from "@/components/commons/label-tag";
import Link from "next/link";

interface Contents {
    image: StaticImageData;
    title: string;
    label?: string;
    subtitle: string[];
    contents: string[];
}

export const contents: Contents[] = [
    {
        image: Step1,
        title: "Apply",
        label: "2–3 minutes",
        subtitle: [
            "Tell us about your company & products. ",
            "No subscription - pay as you grow."
        ],
        contents: [
            "Company profile + top SKUs",
            "Wholesale pricing & lead time"
        ]
    },
    {
        image: Step2,
        title: "Verify fast",
        label: "≤ 24h",
        subtitle: [
            "KYC & compliance checks. ",
            "Earn the badge ",
            "Verified • US/EU-ready.",
        ],
        contents: [
            "Basic docs/certifications (as needed)",
            "Optional sample test"
        ]
    },
    {
        image: Step3,
        title: "List products",
        subtitle: [
            "Add details, images, pricing & stock.",
            "List once ",
            "→ ",
            "publish everywhere."
        ],
        contents: [
            "Portal • CSV • API",
            "Variant/SKU mapping • Direct link import"
        ]
    },
    {
        image: Step4,
        title: "Go live",
        subtitle: [
            "Sellers list your items to global markets; you fulfill & get paid (standard net terms)."
        ],
        contents: [
            "Access 1200+ ready sellers",
            "Pay % per fulfilled order & optional services"
        ]
    }
]

const HowToBecome = ({ lang }: { lang: any }) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const node = elementRef.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target); // chỉ chạy 1 lần
                }
            },
            {
                threshold: 0.2, // mượt hơn, trigger sớm hơn
                rootMargin: "0px 0px -50px 0px", // thêm khoảng để bắt đầu hiệu ứng sớm hơn
            }
        );

        observer.observe(node);

        return () => observer.disconnect();
    }, []);
    return (
        <div ref={elementRef} className={clsx(
            "container relative transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] py-6 lg:py-15 px-4",
            "grid lg:grid-cols-2 gap-6",
            isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
        )}>
            <div className="lg:pt-20 lg:pr-32">
                <LabelTag
                    value="PROCESS"
                    borderGradient
                    className="mb-3 lg:mb-4"
                    background="bg-primary-2"
                />
                <h2 className="mb-2 lg:mb-3">
                    How to become a <span className="text-brand-primary">supplier</span> on IChiba
                </h2>
                <p className="lg:w-[80%] mb-6">
                    Go live in minutes and tap into <span className="text-brand-primary">1200+ global sellers</span>. <br />
                    No subscription. List once, publish everywhere.
                </p>
                <div className="mb-4 lg:mb-6">
                    <Link href={"https://api.ichiba.net/account/login?redirectUrl=https://app.ichiba.net"} className={clsx(
                        "w-full rounded-lg bg-brand-primary max-w-[200px]",
                        "text-sm lg:text-base text-white py-[10px] lg:py-3 px-6 hover:opacity-80"
                    )}>
                        Start listing for free
                    </Link>
                </div>
                <div className="h-[1px] bg-ic-ink-1 mb-3"></div>
                <p>
                    Review & response within 24 hours.
                </p>
                <div className="flex gap-1">
                    See <Link href={"#"} className="text-brand-primary underline">Price</Link> & <Link href={"#"} className="text-brand-primary underline">Supplier Policy</Link>
                </div>
            </div>
            <div
                className={clsx(
                    "lg:h-[730px] flex flex-col gap-5 lg:gap-10",
                    "overflow-y-auto overflow-x-hidden",
                )}
                style={{
                    scrollbarWidth: "thin",
                    scrollbarColor: "#2953FF transparent",
                    msOverflowStyle: "auto",
                }}
            >
                {
                    contents.map((item, index) => (
                        <div key={index} className={clsx(
                            "bg-[radial-gradient(403.61%_248.28%_at_33.9%_-31.81%,_#FFF7ED_8.17%,_rgba(246,_252,_255,_0.50)_29.96%,_#E0E9FF_80.29%)]",
                            "p-6 lg:p-8 rounded-2xl w-full lg:max-w-[500px]"
                        )}>
                            <Image src={item.image} width={436} height={270} className="mb-4 lg:mb-6 mx-auto" alt={item.title} />
                            <div className="mb-4 lg:mb-6">
                                <div className="flex items-center justify-center gap-2 mb-2 lg:mb-4">
                                    <p className="text-base lg:text-2xl font-bold">
                                        <span className="text-brand-primary">Step {index + 1}:</span> {item.title}
                                    </p>
                                    {
                                        item.label && <div className="py-1 px-3 lg:py-[2px] rounded-[100px] border border-blue-100 bg-primary-2 w-max">
                                            <span className="text-xs lg:text-base text-blue-700">
                                                {item.label}
                                            </span>
                                        </div>
                                    }
                                </div>
                                <div className="text-center mb-4 lg:mb-6">
                                    <p className="text-sm lg:text-lg">{item.subtitle[0]}</p>
                                    <p className="text-sm lg:text-lg">{item.subtitle[1]}<span className="text-brand-primary">{item.subtitle[2]}</span>{item.subtitle[3]}</p>
                                </div>
                                <div className="flex flex-col gap-2 lg:gap-3">
                                    {
                                        item.contents.map((value, idx) => (
                                            <div key={idx} className="flex items-center gap-2">
                                                <span className="text-brand-primary">•</span>
                                                <span className="text-sm lg:text-lg">{value}</span>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default HowToBecome;
