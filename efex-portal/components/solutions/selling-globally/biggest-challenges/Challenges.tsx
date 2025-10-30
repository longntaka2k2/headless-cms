"use client";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Challenges = ({
  contents,
}: {
  contents: {
    title: string;
    subTitle: string;
  }[];
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % contents.length);
    }, 3000); // Change the interval time as needed

    return () => clearInterval(interval);
  }, [contents.length]);

  return (
    <ul className="flex flex-col">
      {contents.map((item, index) => {
        const isActive = activeIndex === index;
        return (
          <div key={index} className={clsx(
            "flex gap-10",
            isActive ? "" : "opacity-50"
          )}>
            <div className="flex flex-col items-center">
              <div
                className={clsx(
                  isActive
                    ? "bg-gradient-to-b from-[#FFD9D9] to-[#E50000]"
                    : "bg-[#DDDDDD]",
                  "w-6 h-6 rounded-full"
                )}
              >
                <FontAwesomeIcon
                  icon={faClose}
                  className={clsx(
                    isActive ? "" : "hidden",
                    "w-6 h-6 text-white"
                  )}
                />
              </div>
              <div
                className={clsx(
                  isActive ? "bg-red-600" : "bg-[#DDDDDD]",
                  "w-1 h-full"
                )}
              ></div>
            </div>
            <li
              className={clsx("cursor-pointer pb-6 lg:pb-8")}
              onClick={() => setActiveIndex(index)}
            >
              <h3
                className={clsx(
                  "text-base lg:text-lg font-bold",
                  isActive ? "text-brand-primary" : ""
                )}
              >
                {item.title}
              </h3>
              <p className="mt-2 text-sm lg:text-base font-medium">
                {item.subTitle}
              </p>
            </li>
          </div>
        );
      })}
    </ul>
  );
};
