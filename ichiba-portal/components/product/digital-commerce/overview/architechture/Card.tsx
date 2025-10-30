import clsx from "clsx";
import Image from "next/image";

export const Card = ({ img, title, des }: any) => {
  return (
    <article
      className={clsx(
        "tw-rounded-lg tw-px-4 tw-py-5 tw-snap-center tw-min-w-[283px]",
        "lg:tw-px-5 lg:tw-py-6 lg:tw-flex-1",
        "tw-border-[1px] tw-card-fx",
      )}
    >
      <Image
        src={img}
        width={100}
        height={100}
        alt={title}
        className="tw-pb-5"
      />
      <h3 className="tw-pb-3 tw-font-bold lg:tw-text-lg">{title}</h3>
      <p className="tw-text-sm tw-mb-0 lg:tw-text-base">{des}</p>
    </article>
  );
};
