"use client";
import { LoadPRictext, formatTime } from "@/utils/ultils";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import BlogTag from "./BlogTag";

export const CardBlog = (props: {
  banner: string;
  url: string;
  tags: string[];
  title: string;
  category?: string;
  content: string;
  author?: string;
  createdAt: string;
  className?: string;
}) => {
  const router = useRouter();
  const pushUrl = (value: string) => {
    router.push(value);
  };
  return (
    <article className={clsx("pt-[60px] lg:pt-[60px] px-2 ", props.className)}>
      <div
        className={clsx(
          "shadow-[0px_0px_12px_0px_rgba(54,_50,_46,_0.08)] rounded-[20px] relative lg:min-w-[340px] lg:max-w-[384px] w-full h-full bg-white ",
          "hover:translate-y-[-5px] hover:shadow-[0px_4px_12px_rgba(0,_0,_0,_0.24)] hover:transition-all hover:duration-300 hover:ease-linear"
        )}
      >
        <Image
          src={props.banner}
          width={1000}
          height={1000}
          alt="Blog EzBuy Japan "
          onClick={() => pushUrl(props.url)}
          className="relative z-[2] bottom-10 lg:bottom-[50px] cursor-pointer lg:max-w-[328px] max-w-[308px]  w-full h-[200px] object-cover mx-auto rounded-[16px] shadow-[0px_8px_16px_0px_rgba(0,_0,_0,_0.15)]"
        />

        <div className="px-4 lg:px-5 seft-center relative bottom-[40px] lg:bottom-[50px]">
          <div className="mt-3">
            <BlogTag tags={props?.tags} />
          </div>
          <Link
            href={props.url}
            className=" font-bold lg:text-[20px] line-clamp-2 cursor-pointer"
          >
            {props?.title}
          </Link>
          <div
            className="text-sm lg:text-base mt-2 line-clamp-4 "
            dangerouslySetInnerHTML={{
              __html: LoadPRictext(
                props.content.replaceAll(
                  "/uploads",
                  "https://strapi-ezbuy.ichiba.net/uploads"
                ) ?? ""
              ),
            }}
          />
        </div>
        <div className="px-6 flex justify-between text-sm text-[#5e6a78] inset-x-0 pb-4 right-4 bottom-4">
          <div>{props?.author ? props?.author : "EzBuy"}</div>
          <div className=" ">
            {props?.createdAt ? formatTime(props?.createdAt) : ""}
          </div>
        </div>
      </div>
    </article>
  );
};
