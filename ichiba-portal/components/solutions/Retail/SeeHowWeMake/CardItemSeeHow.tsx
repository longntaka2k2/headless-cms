import clsx from "clsx";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface PropsCardItemSeeHow {
  title: string;
  content: string;
  image: string | StaticImport;
  className?: string;
  classContent?: string;
  classImg?: string;
  bgBox?: string;
  width: number;
  height: number;
}

export default function CardItemSeeHow(props: PropsCardItemSeeHow) {
  return (
    <div
      style={{
        background: `${props.bgBox}`,
      }}
      className={clsx(
        "tw-border hover:tw-border-[#F57C00] tw-cursor-pointer",
        "tw-transition-all tw-ease-linear tw-duration-300",
        "tw-flex tw-gap-6 tw-overflow-hidden tw-rounded-2xl",
        props.className,
      )}
    >
      <div className={props.classContent}>
        <h3 className="tw-mb-0 tw-text-2xl tw-leading-8 tw-font-bold">
          {props.title}
        </h3>
        <p className="tw-mb-0 tw-text-sm lg:tw-text-base">{props.content}</p>
      </div>

      <div className={clsx("tw-rounded-lg tw-overflow-hidden", props.classImg)}>
        <Image
          src={props.image}
          alt={props.title}
          width={props.width}
          height={props.height}
          className="tw-w-full tw-h-full tw-object-cover"
        />
      </div>
    </div>
  );
}
