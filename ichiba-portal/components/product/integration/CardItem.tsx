import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";

export interface Props {
  img: string;
  title: string;
  des: string;
  link?: string;
}
const CardItem = ({ img, title, link }: Props) => {
  const { t } = useTranslation("integration", { keyPrefix: "explore" });

  return (
    <article
      className={clsx(
        "flex tw-flex-col tw-gap-3",
        " tw-border tw-border-solid tw-border-ic-ink-2 tw-bg-white",
        "tw-p-3 tw-px-2 lg:tw-p-6 tw-rounded-xl",
        "lg:tw-py-6 lg:tw-pt-6 lg:tw-pb-5 tw-card-fx",
      )}
    >
      <div className="tw-w-[131px] lg:tw-w-[181px] tw-h-[126px] tw-p-5 tw-mx-auto">
        <Image
          src={`https://cms-strapi.ichiba.net${img}`}
          alt={title}
          className="w-full tw-h-full tw-mx-auto"
          width={234}
          height={126}
        />
      </div>
      <div className="tw-mb-2">
        <p className="tw-font-bold tw-text-sm tw-mb-0"> {title}</p>
      </div>
      <Link
        href={link ?? "#"}
        target={link ? "_blank" : ""}
        className={clsx(
          "tw-text-primary-6 tw-no-underline hover:tw-underline",
          " tw-group tw-font-medium",
        )}
        passHref
      >
        {t("cta.moreInfo")}
        <FontAwesomeIcon
          icon={faChevronRight}
          className="tw-ml-2 group-hover:tw-translate-x-2 tw-transition tw-duration-300 tw-ease-linear"
        />
      </Link>
    </article>
  );
};
export default CardItem;
