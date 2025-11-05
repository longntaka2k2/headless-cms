"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

import { findBlogPost } from "@/contentful/blog";
import { TypeBlogPostSkeleton } from "@/types/contentful";
import moment from "moment";

import { ContentfulRichText } from "@/ui/lib/contentful-rich-text";
import { formatTime } from "@/utils/utils";

import { faCircleDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TableOfContent from "./table-of-content";

const BlogDetailPage = ({
    params,
    searchParams,
}: {
    params: { slug: string };
    searchParams?: any;
}) => {
    const { slug } = params;
    const locale = searchParams?.lang || "en"; // hoặc lấy từ context nếu bạn có i18n setup

    // Use a relaxed runtime type here to avoid generated Symbol<string> mismatch from Contentful types
    const [blog, setBlog] = useState<any | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!slug) return;

        (async () => {
            try {
                const entry = await findBlogPost({
                    language: locale,
                    query: {
                        "fields.slug": slug,
                    },
                });
                setBlog(entry.fields);
            } catch (error) {
                console.error("Error loading blog detail:", error);
            } finally {
                setLoading(false);
            }
        })();
    }, [slug, locale]);

    if (loading) {
        return (
            <div className="container py-10 text-center text-gray-500">
                Loading...
            </div>
        );
    }

    if (!blog) {
        return (
            <div className="container py-10 text-center text-red-500">
                Blog not found
            </div>
        );
    }

    const {
        title,
        featuredImage,
        author,
        category,
        content,
        metaTitle,
        metaDescription,
        updatedAt,
    } = blog as any;

    return (
        <div className="blogDetail">
            <div className="container px-4 lg:px-0 py-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 ">
                    <div className="lg:grid content-between lg:border-b lg:border-[#999]">
                        <div className="lg:pt-8">
                            <p
                                className="inline-block mr-3 mb-3 text-[#389E0D] text-xs font-bold bg-[#D9F7BE] w-max px-2 py-1 rounded-[4px] cursor-pointer"
                            >
                                {category.fields.title}
                            </p>
                            <h1 className="text-[28px] lg:text-[2.2rem] font-black title">
                                {title}
                            </h1>
                        </div>
                        <div className="mt-2 flex justify-between lg:justify-start text-sm text-[#5e6a78] lg:mb-8">
                            <p className="text-text-secondary mt-2">
                                <FontAwesomeIcon
                                    icon={faCircleDot}
                                    width={10}
                                    height={10}
                                    className="mr-1"
                                />
                                {[
                                    author?.fields.name,
                                    updatedAt ? moment(updatedAt).format("DD/MM/YYYY") : ""
                                ]
                                    .filter(Boolean)
                                    .join(' - ')}
                            </p>
                        </div>
                    </div>
                    <div>
                        <Image
                            className="rounded-2xl object-cover w-full h-auto"
                            src={`https:${featuredImage.fields.file.url}`}
                            width={800}
                            height={600}
                            alt="featured-image"
                        />
                    </div>
                </div>

                <div className="lg:py-10 lg:flex lg:relative justify-between">
                    <div className="lg:w-[27%] w-full relative flex lg:block">
                        <div className="lg:sticky top-[100px]">
                            <TableOfContent
                                lang={locale}
                                className="hidden lg:block"
                            />
                        </div>
                    </div>
                    <div className="lg:w-[70%] w-full">
                        <div className="content-blog text-[#2c2f34] px-3 border-b border-[#999] pb-4 lg:border-0">
                            <ContentfulRichText document={content} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetailPage;
