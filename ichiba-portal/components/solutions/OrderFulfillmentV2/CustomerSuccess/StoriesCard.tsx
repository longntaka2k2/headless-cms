import clsx from "clsx";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface BlogCardProps {
  avatar: string | StaticImport;
  author: string;
  career: string;
  title: string;
  description: string;
  className?: string;
}

export const StoriesCard = ({
  avatar,
  author,
  career,
  title,
  description,
  className,
}: BlogCardProps) => {
  return (
    <article className={clsx(
        className,
        "tw-mt-6 tw-bg-6 lg:tw-mb-20 lg:tw-mt-20 tw-mb-6",
        "tw-py-8 tw-px-4 lg:tw-py-20 lg:tw-px-10 tw-rounded-lg lg:tw-rounded-2xl"
    )}>
      <div className="tw-flex tw-gap-3 lg:tw-gap-4 tw-mb-10 tw-items-center">
        <div className="tw-w-12 tw-h-12 lg:tw-w-12 lg:tw-h-12 tw-rounded-full tw-overflow-hidden">
          <Image
            src={avatar} 
            alt="videoMulti"
            className="tw-w-full tw-h-full"
          /> 
        </div>
        <div>
          <p className="tw-text-sm lg:tw-text-xl tw-font-bold tw-mb-0">{author}</p>
          <p className="tw-text-xs lg:tw-text-sm tw-mb-0">{career}</p>
        </div>
      </div>

      <p className="tw-text-base lg:tw-text-2xl tw-font-bold lg:tw-mb-4">{title}</p>
      <p className="tw-text-sm lg:tw-text-lg tw-line-clamp-6 tw-mb-0">{description}</p>
    </article>
  );
};
