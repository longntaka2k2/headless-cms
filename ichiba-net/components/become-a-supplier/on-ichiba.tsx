"use client";
import { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import clsx from "clsx";
import CountUp from "react-countup";
import Avatar1 from "./assets/on-ichiba/avatar1.webp";
import Avatar2 from "./assets/on-ichiba/avatar2.webp";
import Avatar3 from "./assets/on-ichiba/avatar3.webp";
import Avatar4 from "./assets/on-ichiba/avatar4.webp";
import Avatar5 from "./assets/on-ichiba/avatar5.webp";
import NoSubcription from "./assets/on-ichiba/no-subcription.svg";
import PayPerOrder from "./assets/on-ichiba/pay-per-order.svg";
import Fire from "./assets/on-ichiba/fire.svg";
import Illus from "./assets/on-ichiba/illus-video.webp";
import BackgroundPC from "./assets/on-ichiba/background-pc.svg";
import { faArrowRight, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link"
import GradientPrimary from "@/public/images/gradient-primary.svg";

interface Contents {
    icon: StaticImageData;
    title: string[];
}

interface Images {
    image: StaticImageData;
}

export const contents: Contents[] = [
    {
        icon: NoSubcription,
        title: [
            "No subcription",
        ]
    },
    {
        icon: PayPerOrder,
        title: [
            "Pay-per-order",
        ]
    },
    {
        icon: Fire,
        title: [
            "List once", "Publish everywhere",
        ]
    }
]

export const images: Images[] = [
    { image: Avatar1 },
    { image: Avatar2 },
    { image: Avatar3 },
    { image: Avatar4 },
    { image: Avatar5 },
];

const OnIChiba = ({ lang }: any) => {
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
            "relative py-10 lg:pt-[100px] lg:pb-15",
            "relative transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
            "bg-[linear-gradient(180deg,_#DFE5FF_0%,_#FFF_100%)] overflow-hidden",
            isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
        )}>
            <div className="container mb-10 lg:mb-11 px-4 relative">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-4 mb-3 lg:mb-5">
                    <div className="flex items-center">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className={clsx(
                                    "w-6 h-6 lg:w-9 lg:h-9 rounded-full overflow-hidden",
                                    index !== 0 && "-ml-[5px]"
                                )}
                            >
                                <Image
                                    src={image.image}
                                    width={36}
                                    height={36}
                                    className="w-6 h-6 lg:w-9 lg:h-9"
                                    alt="avatar"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center gap-1 text-sm lg:text-lg">
                        Reach
                        <CountUp
                            className="font-bold text-brand-primary"
                            start={100}
                            end={1000}
                            duration={2}
                            suffix="+"
                        />
                        active sellers
                    </div>
                </div>
                <h1 className="text-center mb-2 lg:mb-4">
                    Become a <span className="text-brand-primary">supplier</span> on IChiba
                </h1>
                <p className="text-center mb-4 lg:mb-10">
                    Connect your products to top dropshipping & print-on-demand global sellers
                </p>

                <div className="mb-6 lg:mb-0 relative overflow-x-auto lg:overflow-visible">
                    {/* ✅ thêm lg:relative để các absolute con bám đúng vị trí */}
                    <div className="flex items-center justify-center gap-2 min-w-max px-2 whitespace-nowrap no-scrollbar lg:relative">
                        {contents.map((item, index) => (
                            <div
                                key={index}
                                className={clsx(
                                    "flex items-center gap-1 lg:gap-2 py-[6px] px-2 lg:px-3 rounded-lg",
                                    "border border-[rgba(255,_255,_255,_0.50)] bg-[rgba(255,_255,_255,_0.80)] shadow-[0_4px_8px_0_rgba(54,_122,_224,_0.07)]",
                                    "animate-float-lg z-10", // ✅ đảm bảo nổi trên ảnh
                                    index === 0 && "lg:absolute lg:top-[-200px] lg:left-[-100px]",
                                    index === 1 && "lg:absolute lg:bottom-0 lg:left-0",
                                    index === 2 && "lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-[-100px]",
                                )}
                                style={{
                                    animationDelay: `${index * 1}s`,
                                }}
                            >
                                <Image
                                    src={item.icon}
                                    width={24}
                                    height={24}
                                    className="w-4 h-4 lg:w-6 lg:h-6"
                                    alt="icon"
                                />
                                <span className="flex items-center gap-1 w-max">
                                    {item.title[0]}
                                    {item.title.length > 1 && (
                                        <FontAwesomeIcon
                                            icon={faArrowRight}
                                            width={16}
                                            height={8}
                                            className="text-brand-primary"
                                        />
                                    )}
                                    {item.title[1]}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>


                <div className="mb-4 lg:mb-6 flex justify-center text-center">
                    <Link href={"https://api.ichiba.net/account/login?redirectUrl=https://app.ichiba.net"} className={clsx(
                        "w-full rounded-lg bg-brand-primary max-w-[200px]",
                        "text-sm lg:text-base text-white py-[10px] lg:py-3 px-3 hover:opacity-80"
                    )}>
                        Start now. It’s free
                    </Link>
                </div>
                <div className="h-[1px] lg:w-[30%] bg-white mx-auto mb-3"></div>
                <div className="flex items-center gap-1 justify-center text-sm lg:text-base ">
                    See
                    <Link href={"#"} className="text-brand-primary underline cursor-pointer">Price</Link>
                    &
                    <Link href={"#"} className="text-brand-primary underline cursor-pointer">Supplier Policy</Link>
                </div>
            </div>
            <div className={clsx(
                "bg-cover bg-center bg-no-repeat px-4 z-50"
            )}
                style={{
                    backgroundImage: `url(${BackgroundPC.src})`,
                }}>
                <div className="relative container group cursor-pointer">
                    <Image src={Illus} width={1200} height={720} className="mx-auto" alt="illus" />
                    <div className={clsx(
                        "absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 hidden group-hover:flex",
                        "w-5 h-5 lg:w-20 lg:h-20 rounded-full items-center justify-center bg-[rgba(255,_255,_255,_0.80)] shadow-6"
                    )}>
                        <FontAwesomeIcon
                            icon={faPlay}
                            width={24}
                            height={24}
                            className="text-brand-primary w-5 h-5 lg:w-8 lg:h-8"
                        />
                    </div>
                </div>
            </div>
            <Image src={GradientPrimary} fill className="absolute bottom-0 left-0 -z-1" alt="bg-gradient" />
        </div>
    );
};

export default OnIChiba;
