'use client';
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import DiscoverCard from "@/components/commons/discover-card";
import ImagePROD from "@/public/images/commons/image-prod.webp";
import { StaticImageData } from "next/image";

interface DiscoverCardProps {
    thumnail: StaticImageData;
    title: string;
    previewDes: string;
    link: string;
    textLink: string;
    background: string;
}

export const listDiscover: DiscoverCardProps[] = [
    {
        thumnail: ImagePROD,
        title: "Ebooks & Insights",
        previewDes: "Curated ebooks, reports & whitepapers - industry insights and our flagship dropshipping guide to help sellers launch and scale.",
        textLink: "Download now",
        link: "#",
        background: "bg-primary-2",
    },
    {
        thumnail: ImagePROD,
        title: "Webinars & Tutorials",
        previewDes: "On-demand recordings of expert livestreams and step-by-step video tutorials - start dropshipping faster and master product research tools.",
        textLink: "Watch now",
        link: "#",
        background: "bg-[#F4F0FF]",
    },
    {
        thumnail: ImagePROD,
        title: "Trending Catalog",
        previewDes: "Seasonal collections of hot dropshipping products and POD ideas - updated monthly for holidays and key shopping moments.",
        textLink: "Explore catalog",
        link: "#",
        background: "bg-red-100",
    },
    {
        thumnail: ImagePROD,
        title: "Our Seller Community",
        previewDes: "Places where IChiba’s sellers share experiences and learn proven strategies to grow faster together.",
        textLink: "Join now",
        link: "#",
        background: "bg-red-100",
    }
]

const Discover = ({ lang, locale }: { lang: any; locale: string }) => {
    const [isVisible, setVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const [activeType, setType] = useState<string>("all");

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

    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (!scrollRef.current) return;
        const scrollAmount = scrollRef.current.clientWidth * 0.8;
        scrollRef.current.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
        });
    };

    return (
        <section
            ref={sectionRef}
            className={clsx(
                "relative transition-all duration-700 ease-out px-4 py-6 lg:py-15",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
        >
            <div className="container">
                <h2 className="mb-3 text-center">
                    Discover our resources at your own pace
                </h2>
                <p className="lg:w-[70%] mx-auto mb-6 text-center">
                    Explore our free resources, including ebooks, step-by-step guides, FAQs, and video walkthroughs to understand every step of the dropshipping journey with IChiba.
                </p>
                <div className="grid gap-4 lg:grid-cols-4 justify-items-center mb-6 lg:mb-8">
                    {listDiscover.map((item, index) => (
                        <DiscoverCard key={index} data={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Discover;
