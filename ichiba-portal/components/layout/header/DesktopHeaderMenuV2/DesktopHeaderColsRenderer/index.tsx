/* eslint-disable @next/next/link-passhref */
import { strapiDomain } from "@/public/constants";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ReactSVG } from "react-svg";

const DesktopHeaderColsRenderer = ({
  item,
  onClickMenu,
}: {
  item: any;
  onClickMenu?: () => void;
}) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={clsx("tw-p-2 lg:tw-px-3  tw-rounded-lg",item?.link ? "hover:tw-bg-[#F0F5FF]" : 'tw-pointer-events-none tw-opacity-80')}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClickMenu}
    >
      <Link
        href={item?.link ? item?.link : "/"}
        className={clsx( "tw-flex tw-gap-3 tw-items-start tw-no-underline " )}
        prefetch={false}
        replace
      >
        {item?.icon?.data && (
          <Image
            src={`https://cms-strapi.ichiba.net${item?.icon?.data?.attributes?.url}`}
            alt={item.title}
            width={40}
            height={40}
            className="tw-lg:max-w-10 tw-lg:h-10 tw-w-8 tw-h-8 tw-lg:object-contain"
            unoptimized
          />
        )}
        <div className="tw-w-full">
          <div className="tw-font-medium tw-text-[#333] tw-lg:text-base tw-text-sm tw-flex tw-justify-between">
            {item?.title}
            <div className={clsx(hover ? "" : "tw-invisible", "")}>
              <FontAwesomeIcon
                icon={faArrowRight}
                size="lg"
                className="tw-text-[#F57C00]"
              />
            </div>
          </div>
          <div className="tw-text-xs tw-text-[#666] tw-mt-1">
            {item?.description}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DesktopHeaderColsRenderer;
