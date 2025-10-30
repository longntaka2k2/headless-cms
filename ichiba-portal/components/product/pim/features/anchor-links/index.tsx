import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "next-i18next";
import classes from "./AnchorLinks.module.scss";
import useScrollTracker from "./useScollTracker";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  items: {
    label: string;
    href: string;
  }[];
}
const AnchorLinks = (props: Props) => {
  const router = useRouter();

  const [hash, setHash] = useState("#");

  const activeRef = useRef<HTMLAnchorElement | null>(null);

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
  const currentSection = useScrollTracker();
  useEffect(() => {}, [currentSection]);

  useEffect(() => {
    // ... (các phần khác của useEffect)

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
  const containerRef: any = useRef(null);
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
    <div className="px-1 tw-py-4 tw-sticky tw-top-0 tw-z-[153] tw-bg-ic-white-6">
      <div className="container tw-relative">
        <div
          className={clsx(
            "tw-w-full tw-overflow-auto  tw-mx-auto tw-relative tw-z-[1]",
            classes.scroll,
            classes.maxScroll,
          )}
          ref={containerRef}
        >
          <div className="tw-flex tw-items-center">
            {props?.items?.map((item, index) => {
              const isActive = currentSection === item.href.replace("#", "");
              return (
                <Link
                  ref={isActive ? activeRef : null}
                  className="tw-px-3 tw-no-underline tw-w-full tw-text-center"
                  key={index}
                  href={item.href}
                  passHref
                >
                  <span
                    className={clsx(
                      "tw-whitespace-nowrap tw-text-sm",
                      isActive
                        ? "tw-text-brand-secondary tw-font-medium"
                        : "tw-text-ic-ink-5",
                    )}
                  >
                    {item.label}
                  </span>
                  <span
                    className={clsx(
                      "tw-mx-5 tw-block tw-mt-2 tw-rounded tw-overflow-hidden tw-h-0.5 tw-bg-brand-secondary",
                      isActive ? "tw-visible" : "tw-invisible",
                    )}
                  />
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
