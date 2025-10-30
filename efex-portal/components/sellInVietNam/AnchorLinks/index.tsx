"use client";
import clsx from "clsx";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import classes from "./AnchorLinks.module.scss";
import useScrollTracker from "@/hooks/useScollTracker";

interface Props {
  items: {
    label: string;
    href: string;
  }[];
}

const AnchorLinks = (props: Props) => {
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

  // useEffect(() => {
  //   if (activeRef.current) {
  //     const container = containerRef.current;
  //     const activeLink = activeRef.current;
  //     const containerLeft = container.getBoundingClientRect().left;
  //     const linkLeft = activeLink.getBoundingClientRect().left;

  //     // Tính toán vị trí cần cuộn để thẻ link active nằm trong tầm nhìn
  //     const scrollOffset =
  //       linkLeft -
  //       containerLeft -
  //       container.clientWidth / 2 +
  //       activeLink.clientWidth / 2;

  //     container.scrollLeft += scrollOffset;
  //   }
  // }, [currentSection]);
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
    <div className="px-1 py-4 sticky top-0 z-[1] bg-white">
      <div className="container relative">
        <div
          className={clsx(
            "!w-full overflow-auto  mx-auto relative z-[1] no-scrollbar",
            classes.scroll,
            classes.maxScroll
          )}
          ref={containerRef}
        >
          <div className="flex gap-4 items-center no-scrollbar">
            {props?.items?.map((item, index) => {
              const isActive = currentSection === item.href.replace("#", "");
              return (
                <div
                  ref={isActive ? activeRef : null}
                  role="button"
                  className={clsx(
                    "px-4 py-2 no-underline w-full text-center",
                    "border-[1px] rounded-lg",
                    isActive
                      ? "bg-[linear-gradient(89deg,_#00194F_0%,_#AF0000_84.37%)]"
                      : "  border-[1px] border-ic-ink-2"
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
                      "whitespace-nowrap",
                      isActive
                        ? "text-white font-bold "
                        : "text-ic-ink-6 font-medium"
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

export default AnchorLinks;
