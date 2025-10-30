import clsx from "clsx";
// import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import classes from "./AnchorLinks.module.scss";
import useScrollTracker from "@/hooks/useScollTracker";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";

export interface Props {
  items: {
    label: string;
    href: string;
  }[];
  forceUpdate?: boolean;
  expression?: string;
  className?: string;
}
const AnchorLinks = (props: Props) => {
  const router = useRouter();

  const [hash, setHash] = useState("#");

  const activeRef = useRef<HTMLDivElement | null>(null);
  const containerRef: any = useRef(null);

  useEffect(() => {
    const onHashChangeComplete = (url: string) => {
      const [_base, hash] = url.split("#");
      setHash(`#${hash || ""}`);
    };

    router.events.on("hashChangeComplete", onHashChangeComplete);

    return () => {
      router.events.off("hashChangeComplete", onHashChangeComplete);
    };
  }, [router.events]);

  useEffect(() => {
    if (!router.isReady) return;
    const [_base, routerHash] = router.asPath.split("#");
    setTimeout(() => {
      setHash(`#${routerHash || ""}`);
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);

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
  const [exp, setEx] = useState(props.expression ?? ".features div[id]");
  const currentSection = useScrollTracker(exp);

  useEffect(() => {
    // ... (các phần khác của useEffect)
    if (props.forceUpdate) {
      setEx(exp + " ");
    }

    if (activeRef.current) {
      const container = containerRef.current;
      const activeLink = activeRef.current;
      const containerLeft = container.getBoundingClientRect().left;
      const linkLeft = activeLink.getBoundingClientRect().left;

      // Tính toán vị trí cần cuộn để thẻ link active nằm trong tầm nhìn
      const scrollOffset =
        linkLeft -
        containerLeft -
        container.clientWidth / 2 +
        activeLink.clientWidth / 2;

      container.scrollLeft += scrollOffset;
    }
  }, [currentSection]);
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollStep = 300; // Số pixel cuộn mỗi lần nhấn nút

  const handleSmoothScroll = (direction: any) => {
    const container = containerRef.current;
    const startTime = performance.now();
    const startX = container.scrollLeft;
    const endX =
      direction === "left" ? startX - scrollStep : startX + scrollStep;

    const animateScroll = (timestamp: any) => {
      const progress = Math.min(1, (timestamp - startTime) / 400); // Adjust the duration here
      container.scrollLeft = startX + (endX - startX) * progress;

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

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
    <div
      className={clsx(
        "lg:px-1 tw-pt-2 tw-pb-4 lg:tw-py-4 tw-sticky tw-top-0 tw-z-[153] tw-bg-white tw-shadow-10 lg:tw-shadow-none",
        props.className,
      )}
    >
      <div className=" tw-relative">
        <div
          className={clsx(
            "tw-w-full tw-overflow-auto  tw-mx-auto tw-relative tw-z-[1] tw-no-scrollbar",
            classes.scroll,
            classes.maxScroll,
          )}
          ref={containerRef}
        >
          <div className="tw-flex tw-items-stretch tw-no-scrollbar">
            {props?.items?.map((item, index) => {
              const isActive = currentSection === item.href.replace("#", "");
              return (
                <Link
                  key={index}
                  to={item.href.replace("#", "")}
                  offset={-70}
                  smooth={true}
                  delay={0}
                  duration={0}
                >
                  <div
                    role="button"
                    ref={isActive ? activeRef : null}
                    className={clsx(
                      "tw-px-3 tw-no-underline tw-text-center tw-w-full",
                    )}
                    key={index}
                  >
                    <span
                      className={clsx(
                        "tw-text-sm tw-block lg:tw-inline tw-w-[230px] lg:tw-whitespace-nowrap lg:tw-w-fit p-2 tw-mb-0 ",
                        "tw-border lg:tw-border-none tw-border-solid tw-rounded-lg",
                        isActive
                          ? "tw-text-brand-primary lg:tw-text-brand-secondary tw-font-medium tw-border-brand-primary"
                          : "tw-text-ic-ink-5 tw-border-ic-ink-2",
                      )}
                    >
                      {item.label}
                    </span>
                    <span
                      className={clsx(
                        "tw-mx-5 tw-hidden lg:tw-block tw-mt-2 tw-rounded tw-overflow-hidden tw-h-0.5 tw-bg-brand-secondary",
                        isActive ? "tw-visible" : "tw-invisible",
                      )}
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="d-md-flex tw-items-center tw-justify-between tw-absolute tw-top-0 d-none tw-w-full">
          <button
            onClick={() => handleSmoothScroll("left")}
            disabled={scrollPosition === 0}
          >
            <FontAwesomeIcon
              className={clsx(classes.iconScroll)}
              icon={faAngleLeft}
            />
          </button>

          <button
            onClick={() => handleSmoothScroll("right")}
            disabled={
              scrollPosition >=
              containerRef?.current?.scrollWidth -
                containerRef?.current?.clientWidth
            }
          >
            <FontAwesomeIcon
              className={clsx(classes.iconScroll)}
              icon={faAngleRight}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnchorLinks;
