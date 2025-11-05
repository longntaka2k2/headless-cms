"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";
import BackgroundMB from "./assets/background-join-our-mb.svg";
import BackgroundPC from "./assets/background-join-our-pc.svg";

interface Contents {
    title: string;
    subTitle: string;
}

export const contents: Contents[] = [
    { title: "50+", subTitle: "Success stories shared" },
    { title: "20+", subTitle: "Weekly discussions & dropshipping/POD sharing" },
    { title: "100+", subTitle: "Downloadable guides, checklists, ebooks" },
];

const JoinOurCommunity = ({ lang }: any) => {
    const [isVisible, setVisible] = useState(false);
    const elementRef = useRef<HTMLDivElement | null>(null);

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
            { threshold: 0.3 }
        );

        if (elementRef.current) observer.observe(elementRef.current);
        return () => observer.disconnect();
    }, []);

    // Reusable render function
    const renderContentBox = (item: Contents, index: number, isDesktop = false) => (
        <div
            key={index}
            className={clsx(
                "rounded-[20px] text-center transition-all duration-300 ease-out",
                "bg-[rgba(255,_255,_255,_0.10)] shadow-[0_4px_24px_0_rgba(0,_0,_0,_0.08)]",
                "hover:bg-[rgba(255,_255,_255,_0.15)] hover:scale-105 hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)]",
                "hover:ring-2 hover:ring-brand-primary/50",
                isDesktop ? "py-8 px-5" : "p-4 max-w-[200px] mx-auto"
            )}
        >
            <p
                className={clsx(
                    "gradient-text font-bold leading-[38px] mb-2 transition-transform duration-300",
                    isDesktop ? "text-5xl leading-[56px]" : "text-3xl",
                    "group-hover:scale-110"
                )}
            >
                {item.title}
            </p>
            <p>{item.subTitle}</p>
        </div>
    );

    return (
        <div
            ref={elementRef}
            className={clsx(
                "relative transition-all duration-500 delay-200",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
            )}
        >
            {/* MOBILE */}
            <div
                style={{
                    backgroundImage: `url(${BackgroundMB.src})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}
                className="pt-6 pb-10 px-4 lg:hidden"
            >
                <div className="container flex flex-col gap-6">
                    <div className="text-center">
                        <h2>
                            Join <span className="text-brand-primary">our community</span> of
                            global dropshipping sellers
                        </h2>
                        <p>Connect, learn, and grow with sellers worldwide.</p>
                    </div>

                    <div className="grid gap-3 justify-center">
                        {contents.map((item, index) => renderContentBox(item, index))}
                    </div>

                    <div className="flex justify-center">
                        <Link
                            href="https://api.ichiba.net/account/login?redirectUrl=https://app.ichiba.net"
                            className={clsx(
                                "w-full max-w-[150px] lg:max-w-[200px] text-center rounded-lg bg-brand-primary",
                                "text-sm lg:text-base text-white py-[10px] lg:py-3 px-6 hover:opacity-80"
                            )}
                        >
                            Join now
                        </Link>
                    </div>
                </div>
            </div>

            {/* DESKTOP */}
            <div
                style={{
                    backgroundImage: `url(${BackgroundPC.src})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}
                className="py-15 px-4 hidden lg:block"
            >
                <div className="container flex flex-col gap-10">
                    <div className="text-center">
                        <h2 className="mb-2">
                            Join <span className="text-brand-primary">our community</span> of
                            global dropshipping sellers
                        </h2>
                        <p>Connect, learn, and grow with sellers worldwide.</p>
                    </div>

                    <div className="grid grid-cols-3 gap-6 w-[75%] xl:w-[65%] mx-auto">
                        {contents.map((item, index) => renderContentBox(item, index, true))}
                    </div>

                    <div className="flex justify-center">
                        <Link
                            href="https://api.ichiba.net/account/login?redirectUrl=https://app.ichiba.net"
                            className={clsx(
                                "w-full max-w-[150px] lg:max-w-[200px] text-center rounded-lg bg-brand-primary",
                                "text-sm lg:text-base text-white py-[10px] lg:py-3 px-6 hover:opacity-80"
                            )}
                        >
                            Join now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoinOurCommunity;
