import clsx from "clsx";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface PropsCardIssues {
  className?: string;
  title: string;
  subTitle: string;
  image: string | StaticImport;
  classNameImg?: string;
  width: number;
  height: number;
}

export default function CardIssues(props: PropsCardIssues) {
  return (
    <div
      className={clsx(
        props.className,
        "tw-bg-white tw-rounded-2xl tw-overflow-hidden",
        "tw-flex lg:tw-items-center tw-gap-6 lg:tw-gap-10 tw-justify-between",
      )}
    >
      <div>
        <h3 className="tw-mb-2 lg:tw-mb-4 tw-text-lg lg:tw-text-2xl tw-font-bold">
          {props.title}
        </h3>
        <p className="tw-mb-0 tw-text-sm lg:tw-text-base">{props.subTitle}</p>
      </div>

      <div
        className={clsx(props.classNameImg, "tw-rounded-lg tw-overflow-hidden")}
      >
        <Image
          src={props.image}
          alt={props.image.toString()}
          className="tw-w-full tw-h-full tw-object-cover"
          width={props.width}
          height={props.height}
        />
      </div>
    </div>
  );
}
