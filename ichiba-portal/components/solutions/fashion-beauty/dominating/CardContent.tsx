import SvgIcon from "@/components/common/SvgIcon";
import clsx from "clsx";

interface PropsCardContent {
  icon?: string;
  bgIcon?: string;
  title?: string;
  subTitle?: string;
  textColor?: string;
}

export default function CardContent(props: PropsCardContent) {
  return (
    <div className="tw-grid tw-gap-2 lg:tw-gap-3 tw-text-center">
      <div
        className={clsx(
          `${props.bgIcon}`,
          "tw-flex tw-items-center tw-justify-center tw-rounded-lg",
          "tw-w-10 tw-h-10 lg:tw-w-[46px] lg:tw-h-[46px] tw-mx-auto",
        )}
      >
        <SvgIcon
          icon={props.icon}
          width={24}
          height={24}
          className="lg:tw-hidden"
        />
        <SvgIcon
          icon={props.icon}
          width={32}
          height={32}
          className="tw-hidden lg:tw-block"
        />
      </div>
      <h3
        className={clsx(
          `${props.textColor}`,
          "tw-mb-0 tw-text-base lg:tw-text-2xl tw-font-bold tw-leading-6 lg:tw-leading-8",
        )}
      >
        {props.title}
      </h3>
      <p className="tw-mb-0 tw-text-sm lg:tw-text-base">{props.subTitle}</p>
    </div>
  );
}
