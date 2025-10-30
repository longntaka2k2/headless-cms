"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import moment from "moment";
import clsx from "clsx";

interface Props {
  image: string;
  url?: string;
  title: string;
  description: string;
  createdAt?: string;
  author?: string;
  author_slug?: string;
  category?: string;
  className?: string;
}

export const BlogCard = ({
  image,
  author,
  author_slug,
  createdAt,
  description,
  title,
  url = "#",
  category,
  className,
}: Props) => {
  const router = useRouter();
  const pushUrl = (value: string) => {
    router.push(value);
  };

  return (
    <article className={clsx(className ?? "pt-[60px] lg:pt-[60px] px-2 ")}>
      <div
        className={clsx(
          "relative",
          "rounded-[20px] lg:min-w-[340px] lg:max-w-[384px] w-full h-full bg-white",
          "hover:transition-all hover:duration-300 hover:ease-linear hover:translate-y-[-5px]",
          "shadow-[0_0_12px_0_rgba(54,50,46,.08)]  hover:shadow-[0_4px_12px_rgba(0,0,0,.24)]"
        )}
      >
        <Link href={url}>
          <Image
            src={image}
            width={1000}
            height={1000}
            quality={100}
            alt={title}
            onClick={() => pushUrl(url)}
            className="relative z-[2] bottom-10 lg:bottom-[50px] cursor-pointer lg:max-w-[328px] max-w-[308px]  w-full lg:h-[200px] object-fit mx-auto rounded-[16px] shadow-[0px_8px_16px_0px_rgba(0,_0,_0,_0.15);] "
          />
        </Link>

        <div className="px-4 lg:px-5 seft-center relative bottom-10 lg:bottom-[50px]">
          <div className="my-3 text-[#389E0D] text-xs font-bold bg-[#D9F7BE] max-w-full w-max px-2 py-1 rounded-[4px] ">
            <div className="line-clamp-1">{category ?? "EFEX"}</div>
          </div>
          <Link
            rel="canonical"
            href={url}
            className=" font-bold lg:text-xl line-clamp-2 cursor-pointer"
          >
            {title}
          </Link>
          <div className="text-sm lg:text-base mt-2 line-clamp-4">
            {description}
          </div>
        </div>
        <div className="px-6 flex justify-between text-sm text-[#5e6a78] absolute inset-x-0 right-4 bottom-4">
          <Link
            href={`${author_slug}`}
            className="hover:font-bold cursor-pointer"
          >
            {author ?? "EFEX"}
          </Link>
          <div className=" ">
            {createdAt ? moment(createdAt).format("DD/MM/YYYY") : ""}
          </div>
        </div>
      </div>
    </article>
  );
};
