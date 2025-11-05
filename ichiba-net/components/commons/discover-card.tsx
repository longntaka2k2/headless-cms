'use client';
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";

interface DiscoverCardProps {
    data: {
        thumnail: StaticImageData;
        title: string;
        previewDes: string;
        link: string;
        textLink: string;
        background: string;
    };
}

const DiscoverCard = ({ data }: DiscoverCardProps) => {
    return (
        <div
            className={clsx(
                data.background,
                "rounded-xl overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(0,0,0,0.1)]",
                "flex flex-col max-w-[360px] lg:max-w-[282px] w-full"
            )}
        >
            <div className="relative w-full h-[220px] overflow-hidden">
                <Image
                    src={data.thumnail}
                    width={360}
                    height={220}
                    alt={data.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
            </div>

            <div className="p-4 flex flex-col flex-1">
                <p className="font-bold text-base mb-2">{data.title}</p>
                <p className="text-sm text-ic-ink-5 mb-4 flex-1">{data.previewDes}</p>

                <Link
                    href={data.link}
                    className="inline-flex items-center gap-2 text-sm font-medium hover:underline transition-all lg:ml-auto"
                >
                    {data.textLink}
                    <span className="w-6 h-6 rounded-full bg-brand-primary flex items-center justify-center">
                        <FontAwesomeIcon
                            icon={faArrowRight}
                            className="text-white w-3.5 h-3.5"
                        />
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default DiscoverCard;
