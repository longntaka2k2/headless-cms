'use client';
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import ImageOneStop from "@/public/images/homepage/image-one-stop.svg";
import IconGoogle from "@/public/icons/google.svg"

const OneStop = ({ lang }: { lang: any }) => {
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
        <div ref={elementRef} className="relative">
            <div className={clsx(
                "container relative transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] px-4 py-6 lg:py-0",
                isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
            )}>
                <div className="grid lg:grid-cols-2 lg:items-center gap-10 lg:gap-12 lg:py-10">
                    <div>
                        <h1>
                            {lang?.heading}
                        </h1>
                        <p className="text-base lg:text-lg hidden lg:block mt-5">
                            {lang?.subHeading}
                        </p>
                        <div className="mt-3 lg:mt-10 lg:w-[77%]">
                            <p className="text-sm mb-2">
                                Unlock <span className="text-brand-primary">1M+ Japan-Sourced Products</span> - Free Catalog to Your Inbox
                            </p>
                            <input type="text" className="w-full px-3 py-3 border rounded-lg text-sm" placeholder="Ex: email@gmail.com" />
                            <div className="my-3 lg:my-6 w-full">
                                <Link href={"https://api.ichiba.net/account/login?redirectUrl=https://app.ichiba.net"} className={clsx(
                                    "w-full rounded-lg bg-brand-primary",
                                    "text-sm lg:text-base text-white py-[10px] lg:py-3 px-6 hover:opacity-80"
                                )}>
                                    {lang?.textBtn}
                                </Link>
                            </div>
                            <div className="flex items-center gap-2 h-full mb-2 lg:mb-3">
                                <div className="h-[1px] w-full bg-slate-200"></div>
                                {lang?.or}
                                <div className="h-[1px] w-full bg-slate-200"></div>
                            </div>

                            <div className="flex items-center gap-2 justify-center">
                                <Image src={IconGoogle} width={24} height={24} className="w-6 h-6" alt="icon-google" />
                                <Link href={"https://api.ichiba.net/account/login?redirectUrl=https://app.ichiba.net"} className="text-brand-primary underline text-sm">
                                    {lang?.signIn}
                                </Link>
                            </div>
                        </div>
                    </div>
                    <Image src={ImageOneStop} width={560} height={470} className="mx-auto" alt="Image OneStop" />
                </div>

                <div className="grid grid-cols-3 divide-x divide-gray-300 lg:py-5">
                    {lang.items.map((item: any, index: number) => (
                        <div key={index} className="text-center px-4">
                            <p className="text-lg lg:text-5xl font-bold mb-[10px]">{item.title}</p>
                            <p className="text-xs lg:text-base">{item.subTitle}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default OneStop;
