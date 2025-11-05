'use client';
import { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import clsx from "clsx";
import LabelTag from "@/components/commons/label-tag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ReviewCard from "@/components/commons/review-card";
import ImagePROD from "@/public/images/commons/image-prod.webp";
import Avatar from "@/public/images/commons/avatar.webp";
import VietNam from "@/public/icons/vn.svg";
import { listReviews } from "@/contentful/reviews";
import { ReviewEntry } from "@/contentful/reviews/types";

interface ReviewsCardProps {
    thumnail: StaticImageData;
    star: number,
    avatar: StaticImageData,
    country: StaticImageData,
    userName: string,
    career: string,
    previewDes: string,
}
const OurCustomerReview = ({ lang, locale }: { lang: any; locale: string }) => {
    const [isVisible, setVisible] = useState(false);
    const elementRef = useRef(null);
    const [reviews, setReviews] = useState<ReviewEntry[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        });

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

    useEffect(() => {
        (async () => {
            try {
                console.log(listReviews, 'listReviews');

                const response = await listReviews({ language: "en" });
                setReviews(response.items);
            } catch (err) {
                console.error("Error loading reviews:", err);
            }
        })();
    }, []);

    return (
        <div ref={elementRef} className={clsx(
            "bg-[linear-gradient(0deg,_#F3F3FF_0%,_rgba(226,_221,_255,_0.00)_100%)]",
            "relative transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] py-6 lg:py-15",
            isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
        )}>
            <div className="container flex flex-col gap-4 lg:gap-10">
                <div className="flex flex-col gap-4 text-center">
                    <LabelTag value="Our customer review" className="bg-[#F0F5FF] border-none mx-auto" />
                    <h2 className="text-3xl font-bold">
                        Transforming the way you sell and source
                    </h2>
                    <p className="lg:w-[70%] mx-auto">
                        Suppliers find new customers worldwide, while sellers diversify their product offerings without inventory hassle. Explore case studies where collaboration leads to success on both sides.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-6 lg:pt-6 justify-center items-stretch">
                    {reviews.map((item: any, index: number) => (
                        <div
                            key={index}
                            className={clsx(
                                "flex", // ✅ thêm để con tự kéo full chiều cao
                                "transition-transform duration-300 lg:hover:-translate-y-4"
                            )}
                        >
                            <ReviewCard data={item.fields} className="flex-1" /> {/* ✅ thêm className để full height */}
                        </div>
                    ))}
                </div>


                <div className="">
                    <Link href={"/reviews"} className={clsx(
                        "flex items-center gap-2 py-[10px] lg:py-3 px-6",
                        "w-max rounded-lg bg-brand-primary",
                        "text-sm lg:text-base text-white hover:opacity-80 mx-auto"
                    )}>
                        View all review
                        <FontAwesomeIcon
                            icon={faArrowRight}
                            width={24}
                            height={24}
                            className="hidden lg:block"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default OurCustomerReview;
