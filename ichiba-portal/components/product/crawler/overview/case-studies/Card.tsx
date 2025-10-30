/* eslint-disable @next/next/link-passhref */
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

export default function Card(props: StoryCardProps) {
  const { t } = useTranslation("crawler");

  return (
    <div className="tw-group tw-cursor-pointer">
      <div
        style={{
          boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.05)",
        }}
        className={clsx(
          "tw-grid tw-gap-4 tw-border tw-bg-ic-white-6 tw-rounded-3xl group",
          "hover:tw-bg-slate-50 hover:-tw-translate-y-1 tw-transition-all tw-ease-in-out tw-duration-500",
        )}
      >
        <Link
          href={`/case-studies/${props.slug}`}
          className={clsx(
            "tw-w-full tw-h-[228px]",
            "tw-object-contain tw-rounded-t-lg tw-overflow-hidden",
          )}
        >
          <Image
            src={props.image}
            alt="product"
            width={props.width}
            height={props.height}
            className={clsx(
              "tw-w-full tw-h-full tw-object-cover group-hover:tw-scale-125 group-hover:tw-rotate-6",
              "tw-transition-all tw-ease-in-out tw-duration-500",
            )}
          />
        </Link>
        <div className="tw-overflow-hidden tw-px-5">
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

        <div className="tw-flex tw-justify-end tw-pr-5">
          <Link
            href={`/case-studies/${props.slug}`}
            passHref
            className="tw-no-underline tw-text-ic-black-6 tw-px-5 tw-pb-5 tw-flex tw-items-center tw-gap-1"
          >
            <p className="tw-text-sm tw-mb-0 tw-text-primary-6 group-hover:tw-font-bold tw-transition-all tw-ease-in-out tw-duration-500">
              {t("caseStudies.textLink")}
            </p>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="tw-text-sm tw-text-primary-6 group-hover:tw-text-xl tw-transition-all tw-ease-in-out tw-duration-500"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
