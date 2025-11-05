'use client';
import { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import clsx from "clsx";
import Sellers from "./assets/global-seller/sellers.svg";
import Store from "./assets/global-seller/store.svg";
import Location from "./assets/global-seller/location.svg";
import Chart from "./assets/global-seller/chart-up.svg";
import LabelTag from "@/components/commons/label-tag";
import IllusMB from "./assets/illus-mb-global-seller.webp";
import IllusPC from "./assets/illus-pc-global-seller.webp";
import GradientPrimary from "@/public/images/gradient-primary.svg";
import GradientOrange from "@/public/images/gradient-orange.svg";

interface Contents {
    icon: StaticImageData;
    title: string;
}

export const contents: Contents[] = [
    {
        icon: Sellers,
        title: "1000+ active sellers"
    },
    {
        icon: Store,
        title: "15+ channels",
    },
    {
        icon: Location,
        title: "40+ countries",
    },
    {
        icon: Chart,
        title: "200+ categories",
    }
]

const GlobalSellerNetwork = ({ lang }: { lang: any }) => {
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
            "relative xl:w-[1339px] mx-auto transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] pt-10 pb-6 lg:pt-40 lg:pb-15 px-4",
            isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
        )}>
            <div className="xl:w-[65%] container xl:mx-auto xl:absolute xl:top-20 xl:left-1/2 xl:-translate-x-1/2">
                <LabelTag value="GLOBAL SELLER NETWORK" borderGradient className="mb-3 xl:mb-4 mx-auto" background="bg-primary-2" />
                <h2 className="text-center mb-2 xl:mb-3">
                    <span className="text-brand-primary">1000+</span> sellers worldwide, working for you <span className="text-brand-primary">24/7</span>
                </h2>
                <p className="text-center mb-4 xl:mb-6">
                    While you build great products, our seller community lists them across Amazon, TikTok Shop, Etsy, eBay, Shopify & more—no ad spend, no storefront. List once and watch your catalog go everywhere.
                </p>
                <div className="mb-6 xl:mb-0 overflow-x-auto">
                    <div className="flex items-center justify-center gap-2 min-w-max px-2 whitespace-nowrap no-scrollbar">
                        {contents.map((item, index) => (
                            <div
                                key={index}
                                className={clsx(
                                    "flex items-center gap-1 xl:gap-2 py-[6px] px-2 xl:px-3 rounded-lg",
                                    "border border-[rgba(255,_255,_255,_0.50)] bg-[rgba(255,_255,_255,_0.80)] shadow-[0_4px_8px_0_rgba(54,_122,_224,_0.07)]",
                                    index === 0 && "xl:absolute xl:top-[45%] xl:left-[-20%]",
                                    index === 1 && "xl:absolute xl:bottom-0 xl:left-[-35%]",
                                    index === 2 && "xl:absolute xl:top-[40%] xl:right-[-25%]",
                                    index === 3 && "xl:absolute xl:bottom-0 xl:right-[-30%]",
                                )}
                            >
                                <Image
                                    src={item.icon}
                                    width={24}
                                    height={24}
                                    className="w-4 h-4 xl:w-6 xl:h-6"
                                    alt="icon"
                                />
                                <p className="flex items-center gap-1 w-max">
                                    {item.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex items-center justify-center mb-6 xl:mb-10">
                    <button className={clsx(
                        "w-full max-w-[178px] rounded-lg bg-brand-primary",
                        "text-white py-[10px] xl:py-3 px-6 hover:opacity-80"
                    )}>
                        <p className="text-sm">Start listing for free</p>
                    </button>
                </div>
            </div>


            <Image src={IllusMB} width={360} height={600} className="mx-auto xl:hidden" alt="illus" />
            <Image src={IllusPC} width={1339} height={568} className="mx-auto hidden xl:block" alt="illus" />
            <Image src={GradientPrimary} fill className="absolute bottom-0 left-0 -z-1" alt="bg-gradient" />
            <Image src={GradientOrange} fill className="absolute top-0 right-0 -z-1" alt="bg-gradient" />
        </div>
    );
};

export default GlobalSellerNetwork;
