"use client";
import clsx from "clsx";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import classes from "./AnchorLinks.module.scss";
import useScrollTracker from "@/hooks/useScollTracker";
import useWidth from "@/hooks/useWidth";
interface Props {
  items: {
    label: string;
    href: string;
  }[];
}

const AnchorLinksPricing = (props: Props) => {
  const path = usePathname();
  const [hash, setHash] = useState("#");
  const activeRef = useRef<HTMLDivElement | null>(null);
  const containerRef: any = useRef(null);

  const onHashChangeComplete = (url: string) => {
    const [_base, hash] = url.split("#");
    setHash(`#${hash || ""}`);
  };

  useEffect(() => {
    onHashChangeComplete(path);
  }, [path]);

  useEffect(() => {
    if (!path) return;
    const [_base, routerHash] = path.split("#");
    setTimeout(() => {
      setHash(`#${routerHash || ""}`);
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (hash === "#") return;
      activeRef.current?.scrollIntoView({
        inline: "center",
        behavior: "smooth",
      });
    }, 200);
    return () => {
      clearTimeout(timeout);
    };
  }, [hash]);

  const option = {
    root: null,
    rootMargin: "70px",
    threshold: [0.8, 1],
  };

  const currentSection = useScrollTracker();

  const [scrolledToEnd, setScrolledToEnd] = useState(false);
  const width = useWidth();
  useEffect(() => {
   
    const handleScroll = () => {
      const sessionHeight = document.body.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      if (scrollPosition + windowHeight >= sessionHeight) {
        setScrolledToEnd(true);
      } else {
        setScrolledToEnd(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollStep = 300; // Số pixel cuộn mỗi lần nhấn nút

  useEffect(() => {
    const container = containerRef.current as any;

    const handleScrollUpdate = () => {
      setScrollPosition(container.scrollLeft);
    };

    container.addEventListener("scroll", handleScrollUpdate);

    return () => {
      container.removeEventListener("scroll", handleScrollUpdate);
    };
  }, []);
  return (
    <div className={clsx("py-4 px-4 lg:px-0 sticky top-[72px] z-[50]  lg:h-max ",width >= 1830 ? "lg:left-0 2xl:bg-inherit 2xl:w-max" : "bg-white container")}>
    <div className={clsx("container relative  ",width >= 1830 ? 'hidden' : 'block ' )}>
      <div
        className={clsx(
          "!w-full overflow-auto  mx-auto relative z-[1] no-scrollbar max-w-[900px]",
          classes.scroll,
          classes.maxScroll
        )}
        ref={containerRef}
      >
        <div className="flex gap-4 items-center no-scrollbar mx-1">
          {props?.items?.map((item, index) => {
            const isActive = currentSection === item.href.replace("#", "");
            return (
              <div
                ref={isActive ? activeRef : null}
                role="button"
                className={clsx(
                  "px-4 py-2 no-underline w-full text-center",
                  "  bg-white relative rounded-lg",
                  isActive
                    ? clsx( "bg-[#F0F5FF] text-brand-primary ","after:absolute after:bg-[linear-gradient(89deg,_#00194F_0%,_#AF0000_84.37%)] after:z-[-1] after:rounded-lg ",
                    "after:top-[-1px] after:bottom-[-1px] after:left-[-1px] after:right-[-1px] ")
                    : " border-[1px]"
                )}
                key={index}
                onClick={(e) => {
                  document
                    .getElementById(item.href.replace("#", ""))
                    ?.scrollIntoView({
                      behavior: "smooth",
                      inline: "start",
                    });
                }}
                // passHref
              >
                <span
                  className={clsx(
                    "whitespace-nowrap text-sm",
                    isActive
                      ? "text-brand-primary font-bold "
                      : "text-ic-ink-6 font-bold"
                  )}
                >
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    <div className={clsx("relative container " ,width < 1830 ? 'hidden' : 'block' )}>
    <div
        className={clsx(
          "overflow-auto  mx-auto relative z-[1] no-scrollbar ",
          classes.scroll,
          classes.maxScroll
        )}
        ref={containerRef}
      >
        <div className="max-w-[288px] pr-1 no-scrollbar grid gap-4 my-1">
          {props?.items?.map((item, index) => {
            const isActive = currentSection === item.href.replace("#", "");
            return (
              <div
                ref={isActive ? activeRef : null}
                role="button"
                className={clsx(
                  "px-4 py-2 no-underline w-full text-start font-bold bg-white",
                  " rounded-r-full relative",
                  
                  isActive
                    ?clsx( "bg-[#F0F5FF] text-brand-primary ","after:absolute after:bg-[linear-gradient(89deg,_#00194F_0%,_#AF0000_84.37%)] after:z-[-1] after:rounded-r-full ",
                    "after:top-[-1px] after:bottom-[-1px] after:left-[-1px] after:right-[-1px] ")
                    : "  text-[#333] border border-[#DDD] border-l-[0px]"
                )}
                key={index}
                onClick={(e) => {
                  document
                    .getElementById(item.href.replace("#", ""))
                    ?.scrollIntoView({
                      behavior: "smooth",
                      inline: "start"
                    });
                }}
                // passHref
              >
                <span
                  className={clsx(
                    "whitespace-nowrap font-bold",
                    isActive
                      ? clsx( " text-brand-primary ","after:absolute after:bg-[linear-gradient(89deg,_#00194F_0%,_#AF0000_84.37%)] after:z-[-1] after:rounded-r-full ",
                      "after:top-[-1px] after:bottom-[-1px] after:left-[-1px] after:right-[-1px] ")
                      : "bg-white "
                  )}
                >
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </div>
  );
};

export default AnchorLinksPricing;
