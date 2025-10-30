import clsx from "clsx";
import { useEffect, useState } from "react";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
const ListServices = ({
  contents,
}: {
  contents: {
    title: string;
    safe: string;
  }[];
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % contents.length);
    }, 2000); // Change the interval time as needed

    return () => clearInterval(interval);
  }, [contents.length]);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 lg:gap-4">
      {contents.map((item: any, index: number) => {
        const isActive = activeIndex === index;
        return (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className={clsx(
              "px-4 py-2 lg:px-3 rounded-lg bg-[#F5F8FA]",
              isActive
                ? "bg-[linear-gradient(89deg,_#00194F_0%,_#AF0000_84.37%)]"
                : "bg-[#F5F8FA]",
                index === contents.length - 1 && "lg:col-span-1 col-span-2 "
            )}
          >
            <div
              className={clsx(
                "text-sm lg:text-base text-center",
                isActive ? "text-white" : ""
              )}
            >
              <p>{item.title}</p>
              <span className="font-bold">{item.safe}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListServices;
