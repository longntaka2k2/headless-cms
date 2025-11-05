import { useState } from "react";
import { HTMLAttributes } from 'react';
import moment from "moment";
import { internalRoutes } from '@/constants/navigation';
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { getContentfulImageUrl } from "@/contentful/common";

type BlogPostCardProps = ShallowMerge<
  HTMLAttributes<HTMLElement>,
  {
    blogPost: ContentfulTypes.TypeBlogPost<'WITHOUT_UNRESOLVABLE_LINKS'>['fields'];
  }
>;

export const BlogPostCard = ({ className, blogPost, ...props }: BlogPostCardProps, { updatedAt }: any) => {
  return (
    <Link href={internalRoutes.blogPost(blogPost.slug)} className={clsx('rounded-2xl block pt-[60px]', className)} {...props}>
      <div
        className={clsx(
          "relative",
          "rounded-[20px] lg:min-w-[340px] lg:max-w-[384px] w-full h-full bg-white",
          "hover:transition-all hover:duration-300 hover:ease-linear hover:translate-y-[-5px]",
          "shadow-[0_0_12px_0_rgba(54,50,46,.08)]  hover:shadow-[0_4px_12px_rgba(0,0,0,.24)]"
        )}
      >
        <Link href={internalRoutes.blogPost(blogPost.slug)}>
          <Image
            src={getContentfulImageUrl(blogPost.featuredImage?.fields.file?.url)}
            width={1000}
            height={1000}
            quality={100}
            alt={blogPost.title}
            className="relative z-[2] bottom-10 lg:bottom-[50px] cursor-pointer lg:max-w-[328px] max-w-[308px]  w-full lg:h-[200px] object-fit mx-auto rounded-[16px] shadow-[0px_8px_16px_0px_rgba(0,_0,_0,_0.15);] "
          />
        </Link>

        <div className="px-4 lg:px-5 seft-center relative bottom-10 lg:bottom-[50px]">
          <div className="my-3 text-[#389E0D] text-xs font-bold bg-[#D9F7BE] max-w-full w-max px-2 py-1 rounded-[4px] ">
            <div className="line-clamp-1">{blogPost.category?.fields?.title ?? "EFEX"}</div>
          </div>
          <Link
            rel="canonical"
            href={internalRoutes.blogPost(blogPost.slug)}
            className=" font-bold lg:text-xl line-clamp-2 cursor-pointer"
          >
            {blogPost.title}
          </Link>
          <div className="text-sm lg:text-base mt-2 line-clamp-4">
            {blogPost.shortDescription}
          </div>
        </div>
        <div className="px-6 flex justify-between text-sm text-[#5e6a78] absolute inset-x-0 right-4 bottom-4">
          <p
            className="hover:font-bold cursor-pointer"
          >
            {blogPost?.author ? blogPost?.author?.fields.name : "IChiba"}
          </p>
      
        </div>
      </div>
    </Link>
  );
};
