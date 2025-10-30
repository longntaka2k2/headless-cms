import clsx from "clsx";
import { useEffect } from "react";
import { Link, Events, scrollSpy } from "react-scroll";
import classes from "./Anchors.module.scss";

export interface Props {
  items: {
    label: string;
    href: string;
  }[];
  className?: string;
}

export default function Anchors({ items, className }: Props) {
  useEffect(() => {
    // Registering the 'begin' event and logging it to the console when triggered.
    Events.scrollEvent.register("begin", (to, element) => {});

    // Registering the 'end' event and logging it to the console when triggered.
    Events.scrollEvent.register("end", (to, element) => {});

    // Updating scrollSpy when the component mounts.
    scrollSpy.update();

    // Returning a cleanup function to remove the registered events when the component unmounts.
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <div
      className={clsx(
        "tw-sticky tw-top-0 tw-z-[153] ",
        "lg:px-1 tw-pt-2 tw-pb-4 lg:tw-py-3 ",
        "tw-bg-white tw-shadow-10 lg:tw-shadow-none",
        className,
      )}
    >
      <div className=" tw-relative">
        <div
          className={clsx(
            "tw-w-full tw-overflow-auto tw-mx-auto tw-relative tw-z-[1] tw-no-scrollbar",
          )}
        >
          <div className="tw-flex tw-gap-4 lg:tw-w-[70%] tw-mx-auto lg:tw-flex-wrap lg:tw-items-center lg:tw-justify-center tw-items-stretch tw-no-scrollbar tw-overflow-auto">
            {items?.map((item, index) => {
              return (
                <Link
                  role="button"
                  key={index}
                  to={item.href}
                  offset={-70}
                  spy={true}
                  smooth={true}
                  delay={0}
                  // containerId="blocks-categories"
                  duration={0}
                  className={clsx(
                    "tw-px-3 tw-no-underline tw-text-center tw-w-fit tw-text-ic-ink-5",
                    " tw-block lg:tw-inline tw-w-[230px] tw-whitespace-nowrap lg:tw-w-fit",
                    "tw-border-2 tw-border-brand-secondary tw-rounded-[50px]",
                  )}
                  activeClass={classes.active}
                >
                  <h3 className="tw-text-sm tw-p-2 tw-mb-0 ">{item.label}</h3>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
