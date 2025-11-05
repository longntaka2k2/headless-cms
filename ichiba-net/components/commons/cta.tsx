import clsx from "clsx";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

type Props = React.ComponentProps<typeof Link>;

const Cta = ({ className, children, ...rest }: Props) => {
  return (
    <Link
      {...rest}
      target="_blank"
      role="button"
      className={clsx(
        "block px-5 py-2 lg:py-[14px]",
        "text-center text-white font-medium cursor-pointer",
        "bg-brand-primary hover:bg-brand-primary-active",
        "rounded-lg w-fit text-sm lg:text-base",
        className
      )}
    >
      {children}
    </Link>
  );
};

const CtaArrow = ({ children, ...rest }: Props) => {
  return (
    <Cta {...rest} className="group">
      <span>{children}</span>
      <FontAwesomeIcon
        icon={faArrowRight}
        className="transition-all group-hover:translate-x-1 ml-2"
      />
    </Cta>
  );
};

export { Cta, CtaArrow, type Props };
