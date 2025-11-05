"use client";
import { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import clsx from "clsx";
import LabelTag from "@/components/commons/label-tag";
import { faArrowRight, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Background from "./assets/why-choose/bg-why-choose.svg";
import Person from "./assets/why-choose/person.svg";
import Global from "./assets/why-choose/global.svg";
import Chart from "./assets/why-choose/chart.svg";
import Store from "./assets/why-choose/store.svg";
import Pay from "./assets/why-choose/pay.svg";
import Like from "./assets/why-choose/like.svg";
import IconVerify from "@/public/images/commons/icon-verify-primary.svg";

interface Contents {
    icon: StaticImageData;
    title: string;
    subtitle: string;
    contents: string[];
}

const contents: Contents[] = [
    {
        icon: Person,
        title: "Get buyers on day one",
        subtitle: "Access +1000 ready to list your catalog.",
        contents: ["No storefront needed", "Sellers list & sell for you"],
    },
    {
        icon: Global,
        title: "Go global without ads",
        subtitle: "US/EU/JP reach via Amazon, TikTok Shop, Etsy, eBay & more.",
        contents: ["Zero marketing spend", "No new store setup"],
    },
    {
        icon: Chart,
        title: "Keep your margins",
        subtitle: "You set wholesale pricing & policies.",
        contents: ["MAP/MRP support available", "No forced discounting"],
    },
    {
        icon: Store,
        title: "Operate from one dashboard",
        subtitle: "Sync, fulfill, and track across channels.",
        contents: [
            "Inventory/price sync • channel mapping",
            "Portal / CSV / API",
        ],
    },
    {
        icon: Pay,
        title: "No subscription - pay as you grow",
        subtitle: "Pay % per fulfilled order; pay only for services you use.",
        contents: [
            "Commission per fulfilled order",
            "Optional services: shipping, reprints, add-ons",
        ],
    },
    {
        icon: Like,
        title: "1-click link import",
        subtitle: "Sellers import your product by URL to partner platforms.",
        contents: ["List in minutes", "Faster sales"],
    },
];

const sellingPoints = ["More buyers", "Bigger reach", "Better margins"];
const sellerBenefits = [
    "No storefront needed",
    "Zero marketing spend",
    "No forced discounting",
    "Faster sales",
    "Commission per order",
    "List in minutes",
];

const WhyChoose = ({ lang }: any) => {
    const [isVisible, setVisible] = useState(false);
    const elementRef = useRef<HTMLDivElement | null>(null);

    // hiệu ứng xuất hiện khi scroll tới
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
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={elementRef}
            className={clsx(
                "relative py-10 lg:py-20 bg-cover bg-center bg-no-repeat transition-all duration-700 ease-out",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
            style={{ backgroundImage: `url(${Background.src})` }}
        >
            <div className="container">
                <LabelTag
                    value="WITH ICHIBA"
                    borderGradient
                    className="mb-3 xl:mb-4 mx-auto"
                />
                <h2 className="mb-3 text-center">
                    Why suppliers{" "}
                    <span className="text-brand-primary">choose</span> IChiba
                </h2>

                {/* Selling points */}
                <div className="flex items-center justify-center gap-[6px] lg:gap-2 mb-8">
                    {sellingPoints.map((value, i) => (
                        <div key={i} className="flex items-center gap-[6px] lg:gap-2">
                            <p className="text-ic-ink-5">{value}</p>
                            {i < sellingPoints.length - 1 && (
                                <span className="text-brand-primary">•</span>
                            )}
                        </div>
                    ))}
                </div>

                {/* Card grid */}
                <div className="grid lg:grid-cols-3 gap-4 lg:gap-6 items-stretch mb-8">
                    {contents.map((item, idx) => (
                        <div
                            key={idx}
                            className={clsx(
                                "bg-[linear-gradient(178deg,_#8CBAEF_-13.05%,_#AEB2FF_47.69%,_rgba(234,_241,_254,_0)_91.21%)]",
                                "rounded-2xl p-[1px] h-full transition-transform duration-300 ease-out",
                                "hover:-translate-y-3 hover:shadow-lg"
                            )}
                        >
                            <div className="bg-primary-2 rounded-2xl p-6 lg:p-8 h-full flex flex-col">
                                <Image
                                    src={item.icon}
                                    width={48}
                                    height={48}
                                    alt={item.title}
                                    className="w-10 h-10 lg:w-12 lg:h-12 mb-4 lg:mb-6"
                                />
                                <h4 className="text-lg lg:text-xl font-bold mb-2">
                                    {item.title}
                                </h4>
                                <p className="mb-4 lg:mb-6">{item.subtitle}</p>
                                <div className="flex flex-col gap-3 mt-auto">
                                    {item.contents.map((x, n) => (
                                        <div
                                            key={n}
                                            className="flex items-center gap-2 lg:gap-3 text-sm lg:text-base"
                                        >
                                            <Image
                                                src={IconVerify}
                                                width={20}
                                                height={20}
                                                alt="icon-verify"
                                            />
                                            <p>{x}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Benefits tags */}
                <div className="relative overflow-hidden py-2">
                    <div className="flex gap-4 lg:gap-5 min-w-max px-2 whitespace-nowrap animate-marquee">
                        {[...sellerBenefits, ...sellerBenefits].map((x, n) => (
                            <div
                                key={n}
                                className="bg-[linear-gradient(90deg,_#98B2EF_0%,_#FFF_100%)] p-[1px] rounded-[100px] flex-shrink-0"
                            >
                                <div className="py-[10px] lg:py-3 px-5 bg-primary-2 rounded-[100px]">
                                    <p>{x}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Viền mờ 2 bên cho hiệu ứng trôi mượt */}
                    <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-primary-2 to-transparent pointer-events-none"></div>
                    <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-primary-2 to-transparent pointer-events-none"></div>
                </div>


            </div>
        </section>
    );
};

export default WhyChoose;
