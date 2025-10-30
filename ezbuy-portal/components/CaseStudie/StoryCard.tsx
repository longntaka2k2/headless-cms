import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Link from "next/link";
interface StoryCardProps {
  image: string | StaticImport;
  width: number;
  height: number;
  logoBrand: string | StaticImport;
  title: string;
  content: string;
  description?: string;
  slug: string;
  locale?: string;
}

export default function StoryCard(props: StoryCardProps) {
  return (
    <div className="group cursor-pointer">
      <div
        style={{
          boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.05)",
        }}
        className={clsx(
          "p-5 grid gap-4 border bg-white rounded-2xl",
          "group-hover:border-[#002576]"
        )}
      >
        <div className="flex gap-4">
          <Link
            href={`/${props.locale}/customer-success-studies/${props.slug}`}
            className={clsx(
              "max-w-[245px] max-h-[200px] min-w-[245px] min-h-[200px] w-full h-full",
              "object-contain rounded-lg overflow-hidden"
            )}
          >
            <Image
              src={props.image}
              alt="product"
              width={props.width}
              height={props.height}
              className="w-full h-full object-cover"
            />
          </Link>
          <div
            className={clsx(
              "max-w-[57px] max-h-[38px] lg:max-w-[83px] lg:max-h-[53px]",
              "w-full h-full rounded-lg overflow-hidden border border-[rgba(51, 51, 51, 0.08)]"
            )}
          >
            <Image
              src={props.logoBrand}
              alt="brand"
              width={57}
              height={38}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="overflow-hidden">
          <Link
            href={`/${props.locale}/customer-success-studies/${props.slug}`}
            className="no-underline"
          >
            <p className="text-2xl font-bold line-clamp-2 text-ic-black-6">
              {props.title}
            </p>
          </Link>
          <p className="text-sm lg:text-base line-clamp-2">
            {props.description}
          </p>
        </div>

        <Link
          href={`/${props.locale}/customer-success-studies/${props.slug}`}
          passHref
          className="no-underline text-ic-black-6"
        >
          <button
            className={clsx(
              "flex gap-1 border border-[#DDD] group-hover:border-[#00194F] items-center",
              "text-sm font-medium p-2 rounded-[30px]",
              "group-hover:bg-[linear-gradient(90deg,_rgba(224,_229,_255,_0.40)_2.75%,_rgba(210,_216,_255,_0.50)_43.64%,_rgba(255,_181,_181,_0.40)_100%)]",
              "transition-all ease-in-out duration-300"
            )}
          >
            <div
              className={clsx(
                "w-6 h-6 rounded-full flex justify-center items-center",
                "bg-gradient-to-b from-[#DFDFDE] to-[#888]",
                "group-hover:bg-[linear-gradient(89deg,_#00194F_0%,_#AF0000_84.37%)]",
                "transition-all ease-in-out duration-300"
              )}
            >
              <FontAwesomeIcon
                icon={faArrowRight}
                className="w-4 h-4 text-white"
              />
            </div>
            <span className="group-hover:text-brand-primary">
              {props.locale === "vi" ? "Xem câu chuyện" : "Read story"}
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}
