"use client";
import { useEffect, useState } from "react";

import { BlogPostCard } from '@/components/commons/blog-post-card';

import { BlogPostEntry } from "@/contentful/blog/types";
import { listBlogPosts } from "@/contentful/blog";

const BlogPage = ({
    lang,
    locale,
}: {
    lang: string;
    locale: string;
}) => {
    const [blogs, setBlogs] = useState<BlogPostEntry[]>([]);
    useEffect(() => {
        (async () => {
            try {
                console.log(listBlogPosts, 'listReviews');

                const response = await listBlogPosts({ language: locale });
                setBlogs(response.items);
            } catch (err) {
                console.error("Error loading reviews:", err);
            }
        })();
    }, []);

    return (
        <div className="container py-6 lg:py-15">
            <h1 className="text-max-3xl text-center font-semibold">Blog</h1>
            <div className="m-6 sm:m-9 md:m-12 lg:m-15">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {blogs.map((entry: any) => (
                        <BlogPostCard
                            key={entry.sys.id}
                            blogPost={entry.fields}
                            className="max-w-[92vw] hover:scale-105 transition-all duration-1000 ease-in-out" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
