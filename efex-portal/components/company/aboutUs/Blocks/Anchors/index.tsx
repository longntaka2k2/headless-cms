"use client";
import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { Link, Events, scrollSpy } from "react-scroll";
import classes from "./Anchors.module.scss";
import ReactDOM from "react-dom";

export type Props = {
  lang?: any;
  contents: { label: string; id: string }[];
};

const Anchors = ({ contents }: Props) => {
  const [scrollLeftPosition, setScrollLeftPosition] = useState(0);
  const scrollRef = useRef(null);
  useEffect(() => {
    // Registering the 'begin' event and logging it to the console when triggered.
    Events.scrollEvent.register("begin", (to, element) => {
    });

    // Registering the 'end' event and logging it to the console when triggered.
    Events.scrollEvent.register("end", (to, element) => {
    });

    // Updating scrollSpy when the component mounts.
    scrollSpy.update();

    // Returning a cleanup function to remove the registered events when the component unmounts.
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const onSetActive = (to: string, element: HTMLElement) => {
    const ele = document.getElementById(to);
    const parent = ele?.parentElement;

    const scrollRect = parent?.getBoundingClientRect();
    const activeRect = ele?.getBoundingClientRect();
    const activeWidth = activeRect?.width;
    const activeHeight = activeRect?.height;
    const scrollWidth = parent?.scrollWidth;
    const scrollLeft = scrollRect?.left;

    if (activeRect && scrollRect) {
      setScrollLeftPosition(
        activeRect.left -
          scrollRect.left -
          scrollRect.width / 2 +
          activeRect.width / 2
      );
    }
  };
  useEffect(() => {
    const scrollContainer = document.getElementById("scrollContainer");
    if (scrollContainer) {
      scrollContainer.scrollLeft += scrollLeftPosition;
    }
  }, [scrollLeftPosition]);

  return (
    <div
      id="scrollContainer"
      className={clsx(
        "sticky z-50 ",
        "flex gap-3 lg:gap-4 justify-start lg:justify-center",
        "text-center py-[10px]",
        "font-medium text-sm top-[65px] bg-white overflow-auto no-scrollbar first:pl-4 "
      )}
    >
      {contents.map((x, idx) => (
        <Link
          id={x.id}
          role="button"
          key={idx}
          to={x.id}
          spy={true}
          smooth={true}
          offset={-120}
          className="px-4 py-2 text-[#333] min-w-[152px] bg-[#F5F8FA] rounded-lg flex items-center justify-center"
          activeClass={classes.active}
          onSetActive={onSetActive}
        >
          {x.label}
        </Link>
      ))}
    </div>
  );
};
export default Anchors;
