"use client";
import { useEffect, useRef, useState, useMemo } from "react";
import Image, { StaticImageData } from "next/image";
import clsx from "clsx";
import ReviewCard from "@/components/commons/review-card";
import Star from "@/public/images/commons/icon-star.svg";
import ImagePROD from "@/public/images/commons/image-prod.webp";
import Avatar from "@/public/images/commons/avatar.webp";
import VietNam from "@/public/icons/vn.svg";
import NoData from "@/public/images/empty-data.svg";
import Global from "@/public/icons/global.svg";
import { Popover } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface ReviewsCardProps {
    thumnail: StaticImageData;
    star: number;
    avatar: StaticImageData;
    country: StaticImageData;
    userName: string;
    career: string;
    previewDes: string;
}

const listReviews: ReviewsCardProps[] = Array(18)
    .fill(null)
    .map(() => ({
        thumnail: ImagePROD,
        star: Math.ceil(Math.random() * 5),
        avatar: Avatar,
        country: VietNam,
        userName: "Maria Gonzales, Spain",
        career: "Small business owner",
        previewDes:
            "As a small business owner, I was worried about managing logistics. IChiba’s fulfillment service saved me so much time and allowed me to focus on marketing and growing my brand.",
    }));

const countries = [
    { code: "ALL", name: "All country" },
    { code: "VN", name: "Vietnam" },
    { code: "US", name: "United States" },
    { code: "JP", name: "Japan" },
    { code: "KR", name: "Korea" },
    { code: "FR", name: "France" },
];

const ITEMS_PER_PAGE = 6;

const BoxReviews = ({ lang, locale, data }: { lang?: any; locale?: string, data: any }) => {
    const [isVisible, setVisible] = useState(false);
    const elementRef = useRef<HTMLDivElement | null>(null);
    const [selectedStar, setSelectedStar] = useState<number | "all">("all");
    const [selectedCountry, setSelectedCountry] = useState(countries[0]);
    const [currentPage, setCurrentPage] = useState(1);

    // Hiệu ứng hiện khi scroll tới
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        });
        if (elementRef.current) observer.observe(elementRef.current);
        return () => observer.disconnect();
    }, []);

    // Lọc review theo sao & quốc gia
    // Lọc review theo sao & quốc gia
    const filteredReviews = useMemo(() => {
        let reviews = data;

        // Lọc theo số sao (từ số sao trở lên)
        if (selectedStar !== "all") {
            reviews = reviews.filter((r: any) => r.star >= selectedStar);
        }

        // Lọc theo quốc gia (tạm thời so sánh code)
        if (selectedCountry.code !== "ALL") {
            reviews = reviews.filter(
                (r: any) => r.countryCode === selectedCountry.code // dùng code thay vì hình ảnh
            );
        }

        return reviews;
    }, [data, selectedStar, selectedCountry]);


    // Tính tổng số trang
    const totalPages = Math.ceil(filteredReviews.length / ITEMS_PER_PAGE);

    // Lấy dữ liệu trang hiện tại
    const currentReviews = useMemo(() => {
        const start = (currentPage - 1) * ITEMS_PER_PAGE;
        return filteredReviews.slice(start, start + ITEMS_PER_PAGE);
    }, [filteredReviews, currentPage]);

    // Reset trang khi thay filter
    useEffect(() => {
        setCurrentPage(1);
    }, [selectedStar, selectedCountry]);

    return (
        <div
            ref={elementRef}
            className={clsx(
                "relative transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] pb-6 lg:pb-10",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
        >
            <div className="container">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-center gap-6 py-4 lg:py-6">
                    <div className="lg:w-2/5">
                        <p className="text-lg lg:text-2xl mb-2 font-bold">
                            Customer testimonial & Reviews
                        </p>
                        <p>
                            There is out of <span className="font-bold">10.000</span> customer testimonial & reviews
                        </p>
                    </div>

                    {/* Bộ lọc */}
                    <div className="lg:w-3/5 flex flex-wrap items-center gap-4 lg:gap-6 lg:justify-between">
                        {/* Filter Star */}
                        <button
                            onClick={() => setSelectedStar("all")}
                            className="flex items-center gap-2 text-sm font-medium"
                        >
                            <input
                                type="checkbox"
                                checked={selectedStar === "all"}
                                readOnly
                                className="accent-brand-primary w-4 h-4"
                            />
                            All
                        </button>

                        {[1, 2, 3, 4, 5].map((num) => (
                            <button
                                key={num}
                                onClick={() => setSelectedStar(num)}
                                className={clsx(
                                    "flex items-center gap-1 text-sm font-medium",
                                )}
                            >
                                <input
                                    type="checkbox"
                                    checked={selectedStar === num}
                                    readOnly
                                    className="accent-brand-primary w-4 h-4"
                                />
                                <Image src={Star} width={20} height={20} alt="icon-star" loading="lazy" />
                                {num}
                            </button>
                        ))}

                        {/* Country Popover */}
                        <Popover className="relative inline-block text-left">
                            <Popover.Button className="flex items-center gap-2 border border-gray-300 rounded-md px-3 py-1.5 bg-white hover:bg-gray-50 text-sm text-gray-700">
                                <Image src={Global} width={20} height={20} alt="icon-global" />
                                <span>{selectedCountry.name}</span>
                                <FontAwesomeIcon icon={faChevronDown} className="w-4 h-4" />
                            </Popover.Button>

                            <Popover.Panel className="absolute left-0 mt-1 w-44 rounded-md bg-white shadow-lg border border-gray-100 z-10">
                                <ul className="py-1 text-sm text-gray-700 max-h-56 overflow-auto">
                                    {countries.map((country) => (
                                        <li key={country.code}>
                                            <button
                                                onClick={() => setSelectedCountry(country)}
                                                className={clsx(
                                                    "flex w-full text-left px-3 py-2 hover:bg-indigo-50",
                                                    selectedCountry.code === country.code && "bg-indigo-100 font-medium"
                                                )}
                                            >
                                                {country.name}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </Popover.Panel>
                        </Popover>
                    </div>
                </div>

                {/* Danh sách review */}
                <div className="grid lg:grid-cols-3 gap-6 justify-center">
                    {data.map((item: any, index: number) => (
                        <ReviewCard key={index} data={item.fields} />
                    ))}
                </div>

                {/* Khi không có dữ liệu */}
                {data.length < 1 && (
                    <Image src={NoData} width={300} height={300} className="mx-auto" alt="no-data" />
                )}

                {/* Paginate */}
                {/* Paginate kiểu số đẹp */}
                {filteredReviews.length > 0 && totalPages > 1 && (
                    <div className="flex flex-wrap justify-center items-center gap-2 mt-8">
                        {/* Prev */}
                        <button
                            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                            disabled={currentPage === 1}
                            className="px-2 py-1 border border-gray-300 rounded-md hover:bg-gray-100 disabled:opacity-40"
                        >
                            <FontAwesomeIcon icon={faArrowLeft} className="w-4 h-4" />
                        </button>

                        {/* Các trang */}
                        {Array.from({ length: totalPages })
                            .map((_, i) => i + 1)
                            .filter((page) => {
                                // Chỉ hiển thị vài trang đầu/cuối + gần current
                                return (
                                    page === 1 ||
                                    page === totalPages ||
                                    (page >= currentPage - 2 && page <= currentPage + 2)
                                );
                            })
                            .reduce((acc: (number | string)[], page, i, arr) => {
                                if (i > 0 && page !== (arr[i - 1] as number) + 1) acc.push("...");
                                acc.push(page);
                                return acc;
                            }, [])
                            .map((page, i) =>
                                page === "..." ? (
                                    <span key={`ellipsis-${i}`} className="px-2">
                                        ...
                                    </span>
                                ) : (
                                    <button
                                        key={page}
                                        onClick={() => setCurrentPage(page as number)}
                                        className={clsx(
                                            "px-3 py-1 border rounded-md text-sm font-medium",
                                            currentPage === page
                                                ? "border-orange-400 text-orange-600 bg-orange-50"
                                                : "border-gray-300 hover:bg-gray-100"
                                        )}
                                    >
                                        {page}
                                    </button>
                                )
                            )}

                        {/* Next */}
                        <button
                            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                            disabled={currentPage === totalPages}
                            className="px-2 py-1 border border-gray-300 rounded-md hover:bg-gray-100 disabled:opacity-40"
                        >
                            <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
                        </button>

                        {/* Go to input */}
                        <div className="flex items-center gap-2 ml-3">
                            <span className="text-sm text-gray-600">Go to</span>
                            <input
                                type="number"
                                min={1}
                                max={totalPages}
                                className="w-16 px-2 py-1 border border-gray-300 rounded-md text-center text-sm focus:ring-1 focus:ring-orange-400 focus:outline-none"
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        const val = Number((e.target as HTMLInputElement).value);
                                        if (val >= 1 && val <= totalPages) setCurrentPage(val);
                                    }
                                }}
                            />
                            <button
                                onClick={(e) => {
                                    const input = (e.currentTarget.previousSibling as HTMLInputElement);
                                    const val = Number(input?.value);
                                    if (val >= 1 && val <= totalPages) setCurrentPage(val);
                                }}
                                className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded-md"
                            >
                                <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default BoxReviews;
