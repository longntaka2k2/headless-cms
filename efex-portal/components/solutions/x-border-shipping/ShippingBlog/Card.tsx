"use client";
import { getDictionary } from "@/app/getDictionary";
import { BlogCardProps } from "@/types";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { use } from "react";

export const CustomBlogCard = ({
  description,
  image,
  url,
  title,
  className,
  lang
}: any) => {
  const locale = usePathname().split("/")[1];

  return (
    <div className={className}>
      <div
        className={clsx(
          "flex flex-col justify-between",
          "px-4 lg:px-5 pb-5",
          "shadow-[0px_0px_12px_0px_rgba(54,_50,_46,_0.08)]",
          "rounded-[20px] lg:min-w-[340px] lg:max-w-[384px] w-full h-full bg-white ",
          "hover:shadow-[0px_4px_12px_rgba(0,_0,_0,_0.24)] hover:translate-y-[-5px]",
          "hover:transition-all hover:duration-300 hover:ease-linear"
        )}
      >
        <div
          className={clsx(
            "relative z-[2] bottom-10 lg:bottom-[50px] ",
            "flex flex-col justify-between"
          )}
        >
          <div>
            <Link target="_blank" href={url}>
              <Image
                src={image}
                width={1000}
                height={1000}
                alt="BlogEFEX"
                className={clsx(
                  "cursor-pointer lg:max-w-[328px]  w-full h-[178px] lg:h-[200px] object-cover object-center mx-auto rounded-2xl mb-6",
                  "shadow-[0px_8px_16px_0px_rgba(0,_0,_0,_0.15)]"
                )}
              />
            </Link>
            <div className="seft-center">
              <Link
                rel="canonical"
                target="_blank"
                href={url}
                className=" font-bold lg:text-xl line-clamp-2 cursor-pointer"
              >
                {title}
              </Link>
              <div className="text-sm lg:text-base mt-2 line-clamp-4 lg:mb-4">
                {description}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end text-sm font-medium">
          <Link
            href={url ?? "#"}
            target="_blank"
            className="text-brand-primary group hover:underline"
          >
            {lang ? lang?.read : ''}
            <FontAwesomeIcon
              icon={faArrowRight}
              className="ml-1 group-hover:translate-x-2 transition-all"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
