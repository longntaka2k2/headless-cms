import { LoadPRictext, formatTime } from "@/utils/utils";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const CardBlog = (props: {
  banner: string;
  url: string;
  tags: string[];
  title: string;
  content: string;
  author?: string;
  publishedAt: string;
  className?: string;
}) => {
  const router = useRouter();
  const [imageError, setImageError] = useState(false);

  const pushUrl = (value: string) => {
    router.push(value);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  if (!props.title || !props.url) {
    return null;
  }

  return (
    <article
      className={clsx("tw-pt-[60px] tw-lg:pt-[60px] tw-px-2 ", props.className)}
    >
      <div
        className={clsx(
          "tw-shadow-[0px_0px_12px_0px_rgba(54,_50,_46,_0.08)] tw-rounded-[20px] tw-relative lg:tw-min-w-[340px] lg:max-w-[384px] tw-w-full tw-h-full tw-bg-white ",
          "hover:tw-translate-y-[-5px] hover:tw-shadow-[0px_4px_12px_rgba(0,_0,_0,_0.24)] hover:tw-transition-all hover:tw-duration-300 hover:tw-ease-linear",
        )}
      >
        <Image
          src={props.banner || "/images/placeholder.jpg"}
          width={1000}
          height={1000}
          alt={props.title || "Blog Ichiba"}
          onClick={() => pushUrl(props.url)}
          onError={handleImageError}
          className="tw-relative tw-z-[2] tw-bottom-[40px] lg:tw-bottom-[50px] tw-cursor-pointer lg:tw-max-w-[328px] tw-max-w-[308px] tw-w-full tw-h-[200px] tw-object-cover tw-mx-auto tw-rounded-[16px] tw-shadow-[0px_8px_16px_0px_rgba(0,_0,_0,_0.15)]"
        />

        <div className="tw-px-4 lg:tw-px-5 tw-seft-center tw-relative tw-bottom-[40px] lg:tw-bottom-[50px]">
          <div className="tw-mt-3">{/* <BlogTag tags={props?.tags} /> */}</div>
          <Link
            href={props.url}
            rel="noindex"
            className="tw-font-bold lg:tw-text-[20px] tw-line-clamp-2 tw-cursor-pointer tw-no-underline tw-text-black"
          >
            {props?.title}
          </Link>
          {props.content && (
            <div
              className="tw-text-[14px] lg:tw-text-base tw-mt-2 tw-line-clamp-4"
              dangerouslySetInnerHTML={{
                __html: LoadPRictext(props.content),
              }}
            />
          )}
        </div>
        <div className="tw-px-6 tw-flex tw-justify-between tw-text-sm tw-text-[#5e6a78] tw-inset-x-0 tw-pb-4 tw-right-4 tw-bottom-4 tw-gap-2 lg:tw-gap-4">
          <div className="tw-truncate">
            {props?.author ? props?.author : "Ichiba"}
          </div>
          <div className="tw-min-w-max">
            {props?.publishedAt ? formatTime(props?.publishedAt) : ""}
          </div>
        </div>
      </div>
    </article>
  );
};
