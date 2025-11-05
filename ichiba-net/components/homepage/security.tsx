'use client';
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import MultiLayer from "./assets/multi-layer.svg"
import Monitoring from "./assets/monitoring.svg"
import Reliability from "./assets/reliability.svg"
import Background from "./assets/bg-security.svg"

const Security = ({ lang, locale }: { lang: any; locale: string }) => {
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

    const contents = [
        {
            image: MultiLayer,
            title: lang.contents[0].title,
            content: lang.contents[0].content,
        },
        {
            image: Monitoring,
            title: lang.contents[1].title,
            content: lang.contents[1].content,
        },
        {
            image: Reliability,
            title: lang.contents[2].title,
            content: lang.contents[2].content,
        },
    ]

    return (
        <div ref={elementRef} className={clsx(
            "relative transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] px-4 py-6 lg:py-0",
            "pb-5 lg:pt-10 lg:pb-24 lg:mb-[200px] xl:mb-[160px]",
            isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
        )}>
            <div
                style={{
                    backgroundImage: `url(${Background.src})`,
                    backgroundRepeat: "no-repeat",
                }}
                className={clsx(
                    "mx-auto lg:max-w-[1470px] bg-cover bg-no-repeat rounded-[20px] py-4 px-4 lg:pt-12 h-auto lg:h-[310px]",
                )}
            >
                <div className="container text-center mb-5 lg:mb-8 text-white">
                    <h2 className="mb-3">
                        {lang.heading}
                    </h2>
                    <p>
                        {lang.subHeading}
                    </p>
                </div>
                <div className="container p-1 flex xl:grid xl:grid-cols-3 overflow-auto no-scrollbar gap-4 xl:gap-6 px-4">
                    {contents.map((x: any, idx: number) => (
                        <div
                            className={clsx(
                                "bg-white flex-1 p-3 lg:p-5 rounded-2xl shadow-[0px_8px_16px_0px_rgba(0,_0,_0,_0.05)]",
                                "flex flex-col min-w-[320px]"
                            )}
                            key={idx}
                        >
                            <Image
                                src={x.image}
                                alt="#"
                                width={80}
                                height={80}
                                className="w-[48px] h-[48px] lg:w-[80px] lg:h-[80px] mx-auto mb-3 lg:mb-7"
                            />
                            <p className="text-sm lg:text-lg font-bold mb-3 text-center">{x.title}</p>
                            <p>
                                {x.content}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Security;
