'use client';
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import ProductCard from "@/components/commons/card-product";
import ImagePROD from "@/public/images/commons/image-prod.webp";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Treding from "@/public/images/commons/icon-trending.svg";
import TredingActive from "@/public/images/commons/icon-trending-active.svg";

const listProducts = [
    {
        origin: "Made in JP",
        thumnail: ImagePROD,
        category: "Traditional goods",
        productName: "Japanese Lucky Cat Yakushigama Seven Gods Fukusuke size 17cm",
        price: "$28.04",
        link: "#",
    },
    {
        origin: "Made in US",
        thumnail: ImagePROD,
        category: "Traditional goods",
        productName: "Japanese Lucky Cat Yakushigama Seven Gods Fukusuke size 17cm",
        price: "$28.04",
        link: "#",
    },
    {
        origin: "Made in JP",
        thumnail: ImagePROD,
        category: "Traditional goods",
        productName: "Japanese Lucky Cat Yakushigama Seven Gods Fukusuke size 17cm",
        price: "$28.04",
        link: "#",
    },
    {
        origin: "Made in US",
        thumnail: ImagePROD,
        category: "Traditional goods",
        productName: "Japanese Lucky Cat Yakushigama Seven Gods Fukusuke size 17cm",
        price: "$28.04",
        link: "#",
    },
    {
        origin: "Made in JP",
        thumnail: ImagePROD,
        category: "Traditional goods",
        productName: "Japanese Lucky Cat Yakushigama Seven Gods Fukusuke size 17cm",
        price: "$28.04",
        link: "#",
    },
    {
        origin: "Made in JP",
        thumnail: ImagePROD,
        category: "Traditional goods",
        productName: "Japanese Lucky Cat Yakushigama Seven Gods Fukusuke size 17cm",
        price: "$28.04",
        link: "#",
    },
    {
        origin: "Made in US",
        thumnail: ImagePROD,
        category: "Traditional goods",
        productName: "Japanese Lucky Cat Yakushigama Seven Gods Fukusuke size 17cm",
        price: "$28.04",
        link: "#",
    },
    {
        origin: "Made in JP",
        thumnail: ImagePROD,
        category: "Traditional goods",
        productName: "Japanese Lucky Cat Yakushigama Seven Gods Fukusuke size 17cm",
        price: "$28.04",
        link: "#",
    },
    {
        origin: "Made in US",
        thumnail: ImagePROD,
        category: "Traditional goods",
        productName: "Japanese Lucky Cat Yakushigama Seven Gods Fukusuke size 17cm",
        price: "$28.04",
        link: "#",
    },
    {
        origin: "Made in JP",
        thumnail: ImagePROD,
        category: "Traditional goods",
        productName: "Japanese Lucky Cat Yakushigama Seven Gods Fukusuke size 17cm",
        price: "$28.04",
        link: "#",
    },
];

const categories = [
    "Traditional goods",
    "Fashion",
    "Electronics",
    "Homeware",
    "Decoration",
    "Souvenirs",
    "Beauty & cosmetics",
    "Handicrafts",
];

const Products = ({ lang }: { lang: any }) => {
    const [isVisible, setVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const [activeType, setType] = useState<string>("all");

    const scrollRef = useRef<HTMLDivElement>(null);
    const [isPaused, setPaused] = useState(false);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.2 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const scroll = (direction: "left" | "right") => {
        if (!scrollRef.current) return;
        const cardWidth = scrollRef.current.firstElementChild
            ? (scrollRef.current.firstElementChild as HTMLElement).clientWidth + 16 // gồm cả gap-4
            : 260;
        scrollRef.current.scrollBy({
            left: direction === "left" ? -cardWidth : cardWidth,
            behavior: "smooth",
        });
    };

    // 🌀 Auto play từng card một
    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        const interval = setInterval(() => {
            if (isPaused) return;

            const cardWidth = el.firstElementChild
                ? (el.firstElementChild as HTMLElement).clientWidth + 16
                : 260;

            if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 5) {
                // quay lại đầu
                el.scrollTo({ left: 0, behavior: "smooth" });
            } else {
                el.scrollBy({ left: cardWidth, behavior: "smooth" });
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [isPaused]);

    return (
        <section
            ref={sectionRef}
            className={clsx(
                "relative transition-all duration-700 ease-out px-4 py-10 lg:pt-10 lg:pb-12 bg-[linear-gradient(178deg,_rgba(150,_196,_250,_0.20)_-12.74%,_rgba(174,_178,_255,_0.20)_55%,_rgba(234,_241,_254,_0.00)_103.53%)]",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
        >
            <div className="container mx-auto flex flex-col gap-3 lg:gap-6">
                <div>
                    <h2 className="text-center mb-4 lg:mb-2">
                        Stand out with authentic made-in-Japan products
                    </h2>
                    <p className="lg:w-[70%] mx-auto text-center">
                        Differentiate your store with products customers can’t find anywhere else.
                    </p>
                </div>

                {/* Category filter */}
                <div
                    style={{
                        background: "linear-gradient(91deg, #B1D1F6 24.67%, #C5C8FD 77.28%)",
                    }}
                    className={clsx(
                        "flex flex-wrap gap-2 lg:gap-0 items-center lg:justify-center rounded-lg px-2 lg:px-3 py-3 lg:p-2 no-scrollbar",
                        "transition-all duration-500 delay-300",
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    )}
                >
                    <div
                        onClick={() => setType("all")}
                        className={clsx(
                            "cursor-pointer whitespace-nowrap py-2 px-3 lg:p-3 transition-all text-white rounded-lg",
                            activeType === "all"
                                ? "bg-primary-6 lg:bg-white"
                                : "border border-white lg:border-none"
                        )}
                    >
                        <p
                            className={clsx(
                                "font-medium",
                                activeType === "all" ? "lg:text-primary-7" : ""
                            )}
                        >
                            All
                        </p>
                    </div>

                    {categories.map((value, index) => (
                        <div
                            key={index}
                            onClick={() => setType(value)}
                            className={clsx(
                                "cursor-pointer whitespace-nowrap py-2 px-3 lg:p-3 transition-all text-white rounded-lg",
                                activeType === value
                                    ? "bg-primary-6 lg:bg-white"
                                    : "border border-white lg:border-none"
                            )}
                        >
                            <p
                                className={clsx(
                                    "font-medium",
                                    activeType === value ? "lg:text-primary-7" : ""
                                )}
                            >
                                {value}
                            </p>
                        </div>
                    ))}

                    <div
                        onClick={() => setType("trending")}
                        className={clsx(
                            "cursor-pointer whitespace-nowrap py-2 px-3 lg:p-3 transition-all text-white rounded-lg flex items-center gap-1",
                            activeType === "trending"
                                ? "bg-primary-6 lg:bg-white"
                                : "border border-white lg:border-none"
                        )}
                    >
                        <Image
                            src={activeType === "trending" ? TredingActive : Treding}
                            width={24}
                            height={24}
                            className="hidden lg:block"
                            alt="icon-trending"
                        />
                        <p
                            className={clsx(
                                "font-medium",
                                activeType === "trending" ? "lg:text-primary-7" : ""
                            )}
                        >
                            Trending
                        </p>
                    </div>
                </div>

                {/* Carousel */}
                <div
                    className="relative"
                    onMouseEnter={() => setPaused(true)}
                    onMouseLeave={() => setPaused(false)}
                >
                    <div
                        ref={scrollRef}
                        className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar"
                    >
                        {listProducts.map((item, index) => (
                            <div key={index} className="flex-shrink-0 w-[244px] transition-transform duration-500 ease-out">
                                <ProductCard data={item} />
                            </div>
                        ))}
                    </div>

                    {/* Nút điều hướng */}
                    <button
                        onClick={() => scroll("left")}
                        className="absolute top-1/2 -translate-y-1/2 left-6 w-10 h-10 rounded-full bg-[rgba(51,_51,_51,_0.20)] text-white flex items-center justify-center hover:opacity-80"
                    >
                        <FontAwesomeIcon icon={faArrowLeft} width={16} height={16} />
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        className="absolute top-1/2 -translate-y-1/2 right-6 w-10 h-10 rounded-full bg-[rgba(51,_51,_51,_0.20)] text-white flex items-center justify-center hover:opacity-80"
                    >
                        <FontAwesomeIcon icon={faArrowRight} width={16} height={16} />
                    </button>
                </div>

                {/* Explore */}
                <button className="rounded-lg border border-brand-primary bg-white text-brand-primary flex items-center gap-2 py-[10px] lg:py-3 px-3 hover:opacity-80 mx-auto">
                    Explore more
                    <FontAwesomeIcon
                        icon={faArrowRight}
                        width={24}
                        height={24}
                        className="hidden lg:block"
                    />
                </button>
            </div>
        </section>
    );
};

export default Products;
