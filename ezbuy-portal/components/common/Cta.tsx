import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import Link from "next/link";
import { ReactNode } from "react";

const colorList = {
  "1st": "bg-black text-white",
  "2nd": "bg-white text-black",
} as const;

interface Props extends React.ComponentProps<typeof Link> {
  colors?: keyof typeof colorList;
  type?: "button" | string;
}
interface PropsButton extends React.HTMLProps<HTMLDivElement> {
  colors?: keyof typeof colorList;
}

const Cta = ({ className, children, colors = "1st", ...rest }: Props) => {
  return (
    <Link
      {...rest}
      role="button"
      target="_blank"
      className={clsx(
        className,
        colorList[colors],
        "block px-3 py-2 transition-[opacity] hover:opacity-60",
        "text-center font-medium",
        "rounded-lg w-fit text-sm lg:text-base"
      )}
    >
      {children}
    </Link>
  );
};

const CtaButton = ({
  className,
  children,
  colors = "1st",
  ...rest
}: PropsButton) => {
  return (
    <div
      {...rest}
      role="button"
      className={clsx(
        className,
        colorList[colors],
        "block px-3 py-2 transition-[opacity] hover:opacity-60",
        "text-center font-medium",
        "rounded-lg w-fit text-sm lg:text-base"
      )}
    >
      {children}
    </div>
  );
};

const CtaArrow = ({ children, className, ...rest }: Props) => {
  return (
    <Cta {...rest} className={clsx("group", className)}>
      <span>{children}</span>
      <FontAwesomeIcon
        icon={faArrowRight}
        className="hover:transition-all group-hover:translate-x-1 ml-2"
      />
    </Cta>
  );
};
export { Cta, CtaArrow, CtaButton, type Props };
