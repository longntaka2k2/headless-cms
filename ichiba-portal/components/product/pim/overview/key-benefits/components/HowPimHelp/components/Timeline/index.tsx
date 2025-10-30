import React from "react";
import classes from "./Timeline.module.scss";
import clsx from "clsx";

interface TimelineProps {
  items: { name: string }[];
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
          {items.map((item, idx) => (
            <div
              key={idx}
              className={clsx(classes.dot, {
                [classes.active]: activeIndex === idx,
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
              <p className={classes.text}>{item.name}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
