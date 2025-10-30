import classNames from "classnames";
import type { SVGProps } from "react";

const url = "/svgs/sprite-icon.svg";
interface IconSvgProps extends SVGProps<SVGSVGElement> {
  icon?: string;
  width?: number | string;
  height?: number | string;
  className?: string;
}

const IconSvg = (props: IconSvgProps) => (
  <svg
    className={classNames(props.icon, props.className)}
    width={props.width}
    height={props.height}
    {...props}
  >
    <use xlinkHref={`${url}#${props.icon}`} />
  </svg>
);
export default IconSvg;
