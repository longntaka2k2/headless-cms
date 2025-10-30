import React from "react";
import classes from "./Slider.module.scss";
import Image from "next/image";
import clsx from "clsx";

interface SliderProps {
  items: {
    value: any;
    title: string;
    content: string;
    name: string;
    img: string;
  }[];
  activeIndex?: number;
  onChange?: (index: number) => void;
}

const Slider: React.FC<SliderProps> = ({
  items,
  activeIndex = 0,
  onChange,
}) => {
  const handleClick = (index: number) => {
    if (index === activeIndex) return;
    onChange?.(index);
  };

  return (
    <div className={classes.root}>
      {items.map((item, index) => (
        <div
          onClick={() => handleClick(index)}
          key={index}
          className={clsx(
            classes.item,
            {
              "tw-mt-4": index > activeIndex,
              "tw-absolute": index < activeIndex,
            },
            index === activeIndex ? "tw-bg-[#fff3e5]" : "!tw-bg-[#F0F5FF]",
          )}
          style={{
            marginTop: index === activeIndex ? activeIndex * 20 : undefined,
            zIndex: index,
            top: index < activeIndex ? index * 20 : 0,
          }}
        >
          <div className="tw-flex tw-flex-col gap-3">
            <div className="tw-flex md:tw-flex-col gap-3 tw-items-center md:tw-items-start">
              <p className={classes.title}>{item.title}</p>
            </div>
            <span className={classes.content}>{item.content}</span>
          </div>
          <Image
            className="tw-object-cover"
            width={420}
            height={285}
            src={item.img}
            alt={item.title}
          />
        </div>
      ))}
    </div>
  );
};

export default Slider;
