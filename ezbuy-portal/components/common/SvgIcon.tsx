import clsx from "clsx";

const url = "/images/sprite-icon.svg";

type SvgIconProps = {
  icon: string;
} & JSX.IntrinsicElements["svg"];

const SvgIcon = ({
  icon,
  width = 24,
  height = 24,
  className,
  ...props
}: SvgIconProps) => (
  <svg
    className={clsx(icon, className, "inline-block")}
    width={width}
    height={height}
    {...props}
  >
    <use width={width} height={width} xlinkHref={`${url}#${icon}`} />
  </svg>
);
export default SvgIcon;
