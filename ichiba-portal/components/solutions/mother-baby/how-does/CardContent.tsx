import clsx from "clsx";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface PropsCardContent {
  className?: string;
  title: string;
  subTitle: string;
  image: string | StaticImport;
  classNameImg?: string;
}

export default function CardContent(props: PropsCardContent) {
  return (
    <div className={clsx(props.className, "tw-flex tw-items-center tw-overflow-hidden")}>
      <div>
        <h3 className="tw-mb-2 lg:tw-mb-4 tw-text-lg lg:tw-text-2xl tw-font-bold">
          {props.title}
        </h3>
        <p className="tw-mb-0 tw-text-sm lg:tw-text-base">{props.subTitle}</p>
      </div>

      <div
        className={clsx(
          props.classNameImg,
          "tw-rounded-lg lg:tw-rounded-2xl tw-overflow-hidden",
        )}
      >
        <Image
          src={props.image}
          alt={props.image.toString()}
          className="tw-w-full tw-h-full tw-object-cover"
        />
      </div>
    </div>
  );
}
