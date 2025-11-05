"use client";
import { useEffect, useRef, useState, useMemo } from "react";
import Image, { StaticImageData } from "next/image";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import LabelTag from "@/components/commons/label-tag";
import IconVerify from "@/public/images/commons/icon-verify-orange.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import Illus1 from "./assets/who-can-become/Illus1.webp";
import Illus2 from "./assets/who-can-become/Illus2.webp";
import Illus3 from "./assets/who-can-become/Illus3.webp";
import Illus4 from "./assets/who-can-become/Illus4.webp";

interface ContentValue {
    item: [string, string];
}

interface Content {
    image: StaticImageData;
    title: string;
    subtitle: string;
    values: ContentValue[];
}

const CONTENTS: Content[] = [
    {
        image: Illus1,
        title: "Manufacturers",
        subtitle: "Stable capacity, quality control",
        values: [
            { item: ["", "Export-ready production with clear lead times"] },
            { item: ["Examples: ", "apparel, home & living, hardware, kitchenware"] },
            { item: ["Provide: ", "price list, MOQ (if any), QC process"] },
            { item: ["Badge: ", "US/EU-ready"] },
        ],
    },
    {
        image: Illus2,
        title: "Wholesalers & distributors",
        subtitle: "Ready-to-ship, consistent inventory",
        values: [
            { item: ["", "Bulk pricing & replenishment plan"] },
            { item: ["", "Branded/authorized goods with proof of purchase"] },
            { item: ["Provide: ", "UPC/EAN & HS codes, stock feed"] },
            { item: ["Badge: ", "US/EU-ready"] },
        ],
    },
    {
        image: Illus3,
        title: "Craftspeople & artisans",
        subtitle: "Unique, handmade products",
        values: [
            { item: ["", "Small-batch or made-to-order with stable quality"] },
            { item: ["Examples: ", "woodcraft, ceramics, textiles, jewelry"] },
            { item: ["Provide: ", "materials & care info, high-res photos"] },
            { item: ["Badge: ", "US/EU-ready"] },
        ],
    },
    {
        image: Illus4,
        title: "Print-on-demand providers",
        subtitle: "DTG/DTF/embroidery/sublimation",
        values: [
            { item: ["Catalog: ", "tees, mugs, posters, phone cases, etc."] },
            { item: ["", "Portal/CSV/API order intake; mockup templates available"] },
            { item: ["Provide: ", "production SLA, sample policy, reprint rules"] },
            { item: ["Badge: ", "US/EU-ready"] },
        ],
    },
];

const WhoCanBecome = ({ lang }: { lang?: string }) => {
    const [isVisible, setVisible] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState<1 | -1>(1);
    const sectionRef = useRef<HTMLDivElement | null>(null);

    // ✨ Hiệu ứng fade-in khi scroll vào
    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setVisible(true);
                observer.unobserve(el);
            }
        });
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const handlePrev = () => {
        setDirection(-1);
        setActiveIndex((prev) => (prev - 1 + CONTENTS.length) % CONTENTS.length);
    };
    const handleNext = () => {
        setDirection(1);
        setActiveIndex((prev) => (prev + 1) % CONTENTS.length);
    };

    const selected = useMemo(() => CONTENTS[activeIndex], [activeIndex]);
    const isEven = activeIndex % 2 === 1;

    return (
        <section
            ref={sectionRef}
            className={clsx(
                "relative py-6 lg:py-16 transition-all duration-700 ease-out",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
        >
            <div className="container mx-auto">
                <LabelTag
                    value="CHANNELS & PARTNERS SUPPORTED"
                    borderGradient
                    className="mb-3 xl:mb-4 mx-auto"
                    background="bg-primary-2"
                />

                <h2 className="mb-2 lg:mb-3 text-center">
                    Who can become{" "}
                    <span className="text-brand-primary">supplier</span> on IChiba
                </h2>

                <p className="mb-6 text-center text-gray-600">
                    If your products are high-quality, legally compliant, and ready for
                    cross-border sales, you’re welcome.
                    <br />
                    We work with trusted suppliers from Vietnam & Japan.
                </p>

                {/* Tabs */}
                <div className="mb-8 lg:mb-12 overflow-x-auto">
                    <div className="flex items-center justify-center gap-3 lg:gap-5 min-w-max px-2 whitespace-nowrap no-scrollbar">
                        {CONTENTS.map((item, index) => {
                            const active = index === activeIndex;
                            return (
                                <button
                                    key={item.title}
                                    onClick={() => {
                                        setDirection(index > activeIndex ? 1 : -1);
                                        setActiveIndex(index);
                                    }}
                                    className={clsx(
                                        "p-[2px] rounded-t-2xl transition-all duration-300",
                                        active
                                            ? "bg-[linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(250,132,5,0.3)_100%)]"
                                            : "bg-[linear-gradient(180deg,#8CBAEF_-15%,#AEB2FF_45%,rgba(234,241,254,0)_90%)]"
                                    )}
                                >
                                    <div
                                        className={clsx(
                                            "py-3 px-4 rounded-t-2xl",
                                            active
                                                ? "bg-[linear-gradient(180deg,#FFF7F0_0%,rgba(255,255,255,0)_100%)] text-brand-primary font-bold"
                                                : "bg-white text-gray-700 hover:text-brand-primary"
                                        )}
                                    >
                                        {item.title}
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Nội dung chính có animation */}
                <div className="relative overflow-hidden rounded-3xl">
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={activeIndex}
                            custom={direction}
                            initial={{ opacity: 0, x: direction === 1 ? 60 : -60 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: direction === 1 ? -60 : 60 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className={clsx(
                                "bg-[radial-gradient(288.5%_260.61%_at_-4.17%_-56.9%,rgba(255,255,255,0.5)_15.38%,#EDF4FF_15.42%,#E5E0FF_70.24%)]",
                                "flex flex-col lg:flex-row items-center gap-8 lg:gap-0 py-10 px-4 lg:px-12",
                                isEven && "flex-col-reverse lg:flex-row-reverse"
                            )}
                        >
                            {/* Text */}
                            <div
                                className={clsx(
                                    "flex-1",
                                    isEven ? "lg:pl-20" : "lg:pr-20"
                                )}
                            >
                                <h3 className="mb-2 lg:mb-3">{selected.title}</h3>
                                <p className="text-base lg:text-lg mb-4 lg:mb-6">
                                    {selected.subtitle}
                                </p>
                                <ul className="flex flex-col gap-3">
                                    {selected.values.map((x, n) => (
                                        <li key={n} className="flex items-start gap-2">
                                            <Image
                                                src={IconVerify}
                                                width={20}
                                                height={20}
                                                alt="icon-verify"
                                                className="mt-[2px]"
                                            />
                                            <p className="leading-snug">
                                                <span className="font-semibold">{x.item[0]}</span>
                                                {x.item[1]}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Image */}
                            <div className="flex-1 flex justify-center items-center">
                                <motion.div
                                    initial={{ scale: 0.95, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                >
                                    <Image
                                        src={selected.image}
                                        width={560}
                                        height={440}
                                        alt={selected.title}
                                        className="w-full max-w-[480px] lg:max-w-[560px] h-auto object-contain"
                                        priority
                                    />
                                </motion.div>
                            </div>

                            {/* Arrows */}
                            <div className="absolute bottom-8 right-5 lg:bottom-10 lg:right-20 flex gap-3 lg:gap-5">
                                <button
                                    onClick={handlePrev}
                                    className="w-9 h-9 lg:w-12 lg:h-12 rounded-full flex items-center justify-center border border-ic-ink-4 hover:border-brand-primary cursor-pointer transition-all"
                                    aria-label="Previous"
                                >
                                    <FontAwesomeIcon
                                        icon={faArrowLeft}
                                        width={20}
                                        height={20}
                                        className="text-ic-ink-4 hover:text-brand-primary"
                                    />
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="w-9 h-9 lg:w-12 lg:h-12 rounded-full flex items-center justify-center border border-ic-ink-4 hover:border-brand-primary cursor-pointer transition-all"
                                    aria-label="Next"
                                >
                                    <FontAwesomeIcon
                                        icon={faArrowRight}
                                        width={20}
                                        height={20}
                                        className="text-ic-ink-4 hover:text-brand-primary"
                                    />
                                </button>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default WhoCanBecome;
