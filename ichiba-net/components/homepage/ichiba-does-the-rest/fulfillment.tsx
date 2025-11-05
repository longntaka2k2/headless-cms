'use client';
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import Location from "../assets/location.svg";
import Verify from "../assets/verify.svg";
import LabelTag from "@/components/commons/label-tag";
import LottieRenderer from "@/components/commons/lottie-renderer";
import AnimationPC from "@/public/json/web-en.json";
import AnimationMB from "@/public/json/mb-en.json";

const Fulfillment = ({ lang }: { lang: any }) => {
    const [isVisible, setVisible] = useState(false);
    const elementRef = useRef(null);

    const items = [
        {
            icon: Location,
            title: lang.items[0].title,
            subtitle: lang.items[0].subtitle
        },
        {
            icon: Verify,
            title: lang.items[1].title,
            subtitle: lang.items[1].subtitle
        },
    ];

    useEffect(() => {
        const node = elementRef.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.3, rootMargin: "0px 0px -50px 0px" }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={elementRef}
            className="bg-[linear-gradient(180deg,rgba(255,_255,_255,_1)_0%,_rgba(177,_183,_241,_0.2)_69%,_rgba(255,_255,_255,_1)_48%)] px-4"
        >
            <div
                className={clsx(
                    "container relative transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] py-6 lg:pt-15 lg:pb-10",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                )}
            >
                <LabelTag value="#What we do" className="bg-[#F0F5FF] border-none mb-2 lg:mx-auto" />
                <h2 className="lg:text-center mb-5 lg:mb-10">{lang.label}</h2>

                <div className="grid lg:grid-cols-2 gap-2 lg:gap-6 mb-3 lg:mb-10">
                    {items.map((item: any, index: number) => (
                        <div
                            key={index}
                            className="flex items-start lg:items-center gap-2 lg:gap-4 p-3 lg:px-10 lg:pb-10 lg:pt-6 rounded-xl bg-[rgba(0,_0,_0,_0.00)] shadow-5"
                        >
                            <Image
                                src={item.icon}
                                width={48}
                                height={48}
                                className="w-12 h-12 lg:w-[72px] lg:h-[72px]"
                                alt={item.title}
                            />
                            <div>
                                <p className="text-base font-bold">{item.title}</p>
                                <p>{item.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex lg:justify-center mb-5 lg:mb-8">
                    <button className="rounded-lg border border-brand-primary text-brand-primary py-[6px] px-3 hover:opacity-80">
                        {lang.textBtn} →
                    </button>
                </div>

                {/* ✅ Chỉ render khi visible để tránh lỗi */}
                {isVisible && (
                    <>
                        <div className="hidden lg:block rounded-lg bg-white shadow-3">
                            <LottieRenderer path={AnimationPC} className="mx-auto" />
                        </div>
                        <div className="lg:hidden rounded-lg bg-white shadow-3">
                            <LottieRenderer path={AnimationMB} className="mx-auto" />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Fulfillment;
