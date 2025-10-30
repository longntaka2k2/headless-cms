import { LoadPRictext, formatTime } from "@/utils/utils";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const CardEbook = (props: {
  thumbnail: string;
  url: string;
  title: string;
  previewDescription: string;
  className?: string;
}) => {
  const router = useRouter();
  const pushUrl = (value: string) => {
    router.push(value);
  };
  return (
    <article className={clsx(props.className)}>
      <div
        className={clsx(
          "tw-grid tw-gap-4 lg:tw-gap-8 tw-cursor-pointer",
          "tw-p-8 tw-border tw-rounded-2xl tw-bg-white",
          "hover:tw-translate-y-[-5px] hover:tw-shadow-[0px_4px_12px_rgba(0,_0,_0,_0.24)] hover:tw-transition-all hover:tw-duration-300 hover:tw-ease-linear",
        )}
      >
        <Image
          src={props.thumbnail}
          width={320}
          height={360}
          alt={props?.title}
          onClick={() => pushUrl(props.url)}
          className="tw-w-[329px] tw-h-[357px] tw-mx-auto"
        />

        <div className="tw-seft-center">
          <Link
            href={props.url}
            rel="noindex"
            className=" tw-font-bold tw-text-lg lg:tw-text-[20px] lg:tw-min-h-[54px] tw-line-clamp-2 tw-cursor-pointer tw-no-underline tw-text-black"
          >
            {props?.title}
          </Link>
          <div
            className="tw-text-sm lg:tw-text-base tw-mt-2 lg:tw-mt-3 tw-mb-4 lg:tw-mb-6 tw-line-clamp-2"
            dangerouslySetInnerHTML={{
              __html: LoadPRictext(props.previewDescription ?? ""),
            }}
          />
          <button className="tw-bg-brand-primary tw-text-white tw-text-sm tw-rounded-lg tw-py-[10px] tw-px-3">
            Learn more
          </button>
        </div>
      </div>
    </article>
  );
};
