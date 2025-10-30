import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { useTranslation } from "next-i18next";
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
}

export default function StoryCard(props: StoryCardProps) {
  const { t } = useTranslation("case-studies");

  return (
    <div className="tw-group tw-cursor-pointer">
      <div
        style={{
          boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.05)",
        }}
        className={clsx(
          "tw-p-5 tw-grid tw-gap-4 tw-border tw-bg-ic-white-6 tw-rounded-2xl",
          "group-hover:tw-border-[#F57C00]",
        )}
      >
        <div className="tw-flex tw-gap-4">
          <Link
            href={`/case-studies/${props.slug}`}
            className={clsx(
              "tw-max-w-[245px] tw-max-h-[200px] tw-min-w-[245px] tw-min-h-[200px] tw-w-full tw-h-full",
              "tw-object-contain tw-rounded-lg tw-overflow-hidden",
            )}
          >
            <Image
              src={props.image}
              alt="product"
              width={props.width}
              height={props.height}
              className="tw-w-full tw-h-full tw-object-cover"
            />
          </Link>
          <div
            className={clsx(
              "tw-max-w-[57px] tw-max-h-[38px] lg:tw-max-w-[83px] lg:tw-max-h-[53px]",
              "tw-w-full tw-h-full tw-rounded-lg tw-overflow-hidden tw-border tw-border-[rgba(51, 51, 51, 0.08)]",
            )}
          >
            <Image
              src={props.logoBrand}
              alt="brand"
              width={57}
              height={38}
              className="tw-w-full tw-h-full tw-object-contain"
            />
          </div>
        </div>
        <div className="tw-overflow-hidden">
          <Link
            href={`/case-studies/${props.slug}`}
            className="tw-no-underline"
          >
            <p className="tw-text-2xl tw-font-bold tw-line-clamp-2 tw-text-ic-black-6">
              {props.title}
            </p>
          </Link>
          <p className="tw-text-sm lg:tw-text-base tw-line-clamp-2">
            {props.description}
          </p>
        </div>

        <Link
          href={`/case-studies/${props.slug}`}
          passHref
          className="tw-no-underline tw-text-ic-black-6"
        >
          <button
            className={clsx(
              "tw-flex tw-gap-1 tw-border tw-border-[#DDD] tw-items-center group-hover:tw-text-orange-6",
              "tw-text-sm tw-font-medium tw-p-2 tw-rounded-[30px]",
              "group-hover:tw-bg-gradient-to-r tw-from-[#ffe9e6] tw-via-[#FFF5E6] tw-to-[#fff7e6]",
              "tw-transition-all tw-ease-in-out tw-duration-300",
            )}
          >
            <div
              className={clsx(
                "tw-w-6 tw-h-6 tw-rounded-full tw-flex tw-justify-center tw-items-center",
                "tw-bg-gradient-to-b tw-from-[#DFDFDE] tw-to-[#888]",
                "group-hover:tw-bg-gradient-to-r group-hover:tw-from-[#FA4B2D] group-hover:tw-to-[#F79147]",
                "tw-transition-all tw-ease-in-out tw-duration-300",
              )}
            >
              <FontAwesomeIcon
                icon={faArrowRight}
                className="tw-w-4 tw-h-4 tw-text-white"
              />
            </div>
            {t("readStory")}
          </button>
        </Link>
      </div>
    </div>
  );
}
