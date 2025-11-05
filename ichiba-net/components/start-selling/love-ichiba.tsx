"use client";
import { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import clsx from "clsx";
import Link from "next/link";
import Icon1 from "./assets/love-ichiba/icon1.svg";
import Icon1Active from "./assets/love-ichiba/icon1-active.svg";
import Icon2 from "./assets/love-ichiba/icon2.svg";
import Icon2Active from "./assets/love-ichiba/icon2-active.svg";
import Icon3 from "./assets/love-ichiba/icon3.svg";
import Icon3Active from "./assets/love-ichiba/icon3-active.svg";
import Icon4 from "./assets/love-ichiba/icon4.svg";
import Icon4Active from "./assets/love-ichiba/icon4-active.svg";
import Icon5 from "./assets/love-ichiba/icon5.svg";
import Icon5Active from "./assets/love-ichiba/icon5-active.svg";
import Icon6 from "./assets/love-ichiba/icon6.svg";
import Icon6Active from "./assets/love-ichiba/icon6-active.svg";
import Illus from "./assets/love-ichiba/illus.webp";
import BackgroundPC from "./assets/love-ichiba/background-pc.webp";
import BackgroundDot from "./assets/love-ichiba/background-dot.svg";
import Verify from "@/public/images/commons/icon-verify-primary.svg";
import VerifyBrand from "@/public/images/commons/verify-orange.svg";

interface Contents {
    icon: StaticImageData;
    iconActive: StaticImageData;
    title: string;
    subTitle: string;
    contents: string[];
}

export const contents: Contents[] = [
    {
        icon: Icon1,
        iconActive: Icon1Active,
        title: "A true one-stop solution",
        subTitle: "Find and publish dropshipping products and POD in one workspace.",
        contents: [
            "Product research tools",
            "Dropshipping product finder",
        ],
    },
    {
        icon: Icon2,
        iconActive: Icon2Active,
        title: "No subscription - No MOQ",
        subTitle: "Start dropshipping with zero upfront; pay per fulfilled order.",
        contents: [
            "Test new dropshipping products",
            "Scale when ready",
        ],
    },
    {
        icon: Icon3,
        iconActive: Icon3Active,
        title: "Verified Japan and Vietnam products",
        subTitle: "US/EU-ready catalog with transparent QC and eco options.",
        contents: [
            "Niche, trend-driven SKUs",
            "White-label / MTO",
        ],
    },
    {
        icon: Icon4,
        iconActive: Icon4Active,
        title: "Multi-channel listing & order",
        subTitle: "One-click to Amazon, eBay, TikTok Shop, Shopify & more.",
        contents: [
            "Per-channel pricing",
            "Real-time inventory",
        ],
    },
    {
        icon: Icon5,
        iconActive: Icon5Active,
        title: "Global fulfillment network",
        subTitle: "US/JP/VN warehouses; returns integrated for smooth ops.",
        contents: [
            "DDP routes (placeholder)",
            "POD 48–72h",
        ],
    },
    {
        icon: Icon6,
        iconActive: Icon6Active,
        title: "Cost and risk control",
        subTitle: "Run lean from getting started on dropshipping to scale",
        contents: [
            "No monthly fees",
            "SLA-backed ops",
        ],
    },
];

const LoveIChiba = ({ lang }: any) => {
    const [isVisible, setVisible] = useState(false);
    const [activeStep, setActiveStep] = useState(-1); // -1 để bắt đầu chưa active step nào
    const elementRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [activeIndexMB, setActiveIndexMB] = useState<number | null>(null);
    // Quan sát hiển thị (animation on scroll)
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        });

        if (elementRef.current) observer.observe(elementRef.current);

        return () => {
            if (elementRef.current) observer.unobserve(elementRef.current);
        };
    }, []);

    return (
        <div
            ref={elementRef}
            className={clsx(
                "py-6 xl:py-10",
                "transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
        >
            <div
                className={clsx(
                    "relative container hidden xl:block rounded-[20px] p-[52px]",
                    "bg-cover bg-center bg-no-repeat"
                )}
                style={{
                    backgroundImage: `url(${BackgroundPC.src})`,
                }}
            >
                <div className="mb-16">
                    <h2 className="mb-2">
                        Why dropshipping and POD sellers <br />
                        <span className="text-brand-primary">love IChiba</span>
                    </h2>
                    <p className="xl:w-[60%]">
                        No inventory, no hassle. IChiba connects you with verified Japanese & Vietnamese
                        suppliers and handles fulfillment, shipping, and cross-docking. So you only focus
                        on one thing:{" "}
                        <Link href={"#"} className="text-brand-primary font-bold underline">Selling more.</Link>
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {contents.map((item, index) => {
                        const isActive = activeIndex === index;
                        return (
                            <div
                                key={index}
                                onMouseEnter={() => setActiveIndex(index)}
                                onMouseLeave={() => setActiveIndex(null)}
                                className={clsx(
                                    "p-5 rounded-[20px] shadow-[0_4px_18px_0_rgba(0,_0,_0,_0.06)] transition-all duration-500 ease-out cursor-pointer z-50",
                                    isActive
                                        ? "bg-brand-primary text-white -translate-y-[20px] h-[calc(100%+20px)]"
                                        : "bg-[rgba(255,_255,_255,_0.10)]"
                                )}
                            >
                                {/* Icon */}
                                <div
                                    className={clsx(
                                        "w-10 h-10 rounded-full flex items-center justify-center mb-5 transition-all duration-500",
                                        isActive
                                            ? "bg-[rgba(255,_255,_255,_0.15)]"
                                            : "bg-[rgba(255,_247,_230,_0.10)] shadow-[0_4px_18px_0_rgba(0,_0,_0,_0.06)]"
                                    )}
                                >
                                    <Image src={isActive ? item.iconActive : item.icon} width={24} height={24} alt="icon" />
                                </div>

                                {/* Title & Subtitle */}
                                <h4 className="text-lg font-bold mb-3">{item.title}</h4>
                                <p className="text-sm mb-3">{item.subTitle}</p>

                                {/* List items */}
                                {item.contents.map((value, idx) => (
                                    <div key={idx} className="flex items-center gap-2 mb-1">
                                        <Image
                                            src={isActive ? VerifyBrand : Verify}
                                            width={16}
                                            height={16}
                                            alt="verify"
                                        />
                                        <span className="text-sm">{value}</span>
                                    </div>
                                ))}
                            </div>
                        );
                    })}
                </div>

                {/* Hình minh họa */}
                <Image
                    src={Illus}
                    width={300}
                    height={318}
                    className="absolute -top-7 right-[90px]"
                    alt="illus"
                />
                <div className="absolute top-9 right-[30%] flex items-center gap-4 -z-1">
                    <Image
                        src={BackgroundDot}
                        width={112}
                        height={94}
                        alt="illus"
                    /><Image
                        src={BackgroundDot}
                        width={112}
                        height={94}
                        alt="illus"
                    />
                </div>
                <div className="absolute top-28 right-7 flex items-center gap-4 -z-1">
                    <Image
                        src={BackgroundDot}
                        width={112}
                        height={94}
                        alt="illus"
                    /><Image
                        src={BackgroundDot}
                        width={112}
                        height={94}
                        alt="illus"
                    />
                </div>
            </div>

            <div className="xl:hidden bg-[linear-gradient(256deg,_#EFF5FF_21.44%,_#FFFEFE_52.04%,_#E7E9FE_87.59%)] rounded-2xl py-10 px-4">
                <h2 className="mb-4">
                    Why dropshipping and POD sellers <span className="text-brand-primary">
                        love IChiba
                    </span>
                </h2>
                <div className="flex">
                    <p className="mb-4 text-ic-ink-5">
                        No inventory, no hassle. IChiba connects you with verified Japanese & Vietnamese suppliers and handles fulfillment, shipping, and cross-docking. So you only focus on one thing: <Link href={"#"} className="text-brand-primary font-bold underline">Selling more.</Link>
                    </p>
                    <Image
                        src={Illus}
                        width={170}
                        height={180}
                        className="w-full"
                        alt="illus"
                    />
                </div>
                <div className="flex flex-col gap-6">
                    {contents.map((item, index) => {
                        const isActive = activeIndexMB === index;
                        return (
                            <div
                                key={index}
                                onMouseEnter={() => setActiveIndexMB(index)}
                                onMouseLeave={() => setActiveIndexMB(null)}
                                className={clsx(
                                    "p-4 rounded-[20px] shadow-[0_4px_18px_0_rgba(0,_0,_0,_0.06)]",
                                    isActive
                                        ? "bg-brand-primary text-white"
                                        : "bg-[rgba(255,_255,_255,_0.10)]"
                                )}
                            >
                                <div className="w-10 h-10 rounded-full bg-[rgba(255,_247,_230,_0.10)] shadow-[0_4px_18px_0_rgba(0,_0,_0,_0.06)] flex items-center justify-center mb-5">
                                    <Image src={isActive ? item.iconActive : item.icon} width={24} height={24} alt="icon" />
                                </div>
                                <h4 className="text-lg font-bold mb-3">{item.title}</h4>
                                <p className="text-sm mb-5">{item.subTitle}</p>
                                {item.contents.map((value, idx) => (
                                    <div key={idx} className="flex items-center gap-2">
                                        <Image
                                            src={isActive ? VerifyBrand : Verify}
                                            width={16}
                                            height={16}
                                            alt="icon"
                                        />
                                        <span className="text-sm">{value}</span>
                                    </div>
                                ))}
                            </div>
                        );
                    })}
                </div>

            </div>
        </div>
    );
};

export default LoveIChiba;
