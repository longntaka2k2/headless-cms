import React from "react";
import classes from "./Timeline.module.scss";
import clsx from "clsx";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface TimelineProps {
  items: { name: string; content: string; title: string }[];
  activeIndex?: number;
  onChange?: (index: number) => void;
}

const Timeline: React.FC<TimelineProps> = ({
  items,
  activeIndex,
  onChange,
}) => {
  return (
    <div className={classes.root}>
      <div className={classes.main}>
        <div className={clsx(classes.line)}>
          {items.map((item, idx: number) => (
            <div
              key={idx}
              className={clsx(classes.dot, {
                [classes.active]: (activeIndex as any) >= idx,
              })}
            />
          ))}
        </div>
        <div className={clsx(classes.items)}>
          {items.map((item, idx) => (
            <button
              onClick={() => onChange?.(idx)}
              className={clsx(classes.item, {
                [classes.active]: activeIndex === idx,
              })}
              key={idx}
            >
              <div className={classes.dot} />
              <p className={clsx(classes.text, "lg:tw-hidden")}>{item.name}</p>
              <div
                className={clsx(
                  "lg:tw-block tw-hidden",
                  activeIndex === idx
                    ? "tw-bg-[rgba(255,_243,_229,_0.60)] tw-border-[1.5px] tw-border-[#F57C00] tw-py-6"
                    : "tw-bg-[#F0F5FF] tw-py-12",
                  "tw-p-3 tw-rounded-xl tw-px-10 tw-max-w-[540px] tw-w-full",
                )}
              >
                <div className="tw-flex tw-justify-between tw-items-center">
                  <div className="tw-font-bold tw-text-xl">{item.title}</div>
                  <div className="">
                    <FontAwesomeIcon
                      icon={activeIndex === idx ? faAngleUp : faAngleDown}
                    />
                  </div>
                </div>
                <div
                  className={clsx(
                    activeIndex === idx ? "tw-text-left tw-mt-4" : "tw-hidden",
                  )}
                >
                  {item.content}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
