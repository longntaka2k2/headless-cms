"use client";
import clsx from "clsx";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Item {
  title: string;
  subTitle: string;
  image: any;
}

const DetailedGuide = ({ lang }: any) => {
  const locale = usePathname().slice(1, 3);

  const [itemDetail, setItem] = useState(lang.listFBE[0]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % lang.listFBE.length;
        setItem(lang.listFBE[nextIndex]);
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(intervalId);
  }, [lang.listFBE]);

  const handleItemClick = (index: any) => {
    setActiveIndex(index);
    setItem(lang.listFBE[index]);
    // Optionally, you can reset the interval if needed
  };

  return (
    <div className="px-4 py-6 lg:py-20 bg-[linear-gradient(180deg,_#F3F6FF_74.45%,_#EAE4FD_129.24%)] overflow-hidden">
      <div className="container grid gap-6 lg:gap-10 z-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold lg:text-4xl mb-1 lg:mb-2">
            {lang.heading}
          </h2>
          <p className="text-sm lg:text-base mb-4 lg:mb-6 px-4 lg:w-[65%] mx-auto">
            {lang.subHeading}
          </p>
        </div>

        {lang.steps.map((item: any, index: number) => (
          <div
            key={index}
            className={clsx(
              "lg:p-6 rounded-3xl",
              "flex flex-col lg:flex-row gap-4 lg:gap-6",
              index === 0 ? "lg:bg-[#E3E9FF] lg:items-center" : ""
            )}
          >
            <div className="lg:w-[1/3]">
              <div
                className={clsx(
                  "lg:px-6",
                  index === 0 ? "lg:border-l-4 lg:border-brand-primary" : ""
                )}
              >
                <h3 className="text-base lg:text-xl font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-sm lg:text-base">
                  {item.subTitle}
                  {item.linkText != "" && (
                    <Link
                      href={item.link}
                      target="_blank"
                      className="text-blue-600 hover:underline"
                    >
                      {item.linkText}
                    </Link>
                  )}
                </p>
              </div>
              {index === 0 && (
                <div className="mt-7 lg:mt-12 lg:px-6">
                  <Link
                    href={"https://app.ichiba.net/welcome"}
                    target="_blank"
                    className={clsx(
                      "p-3 rounded-lg flex justify-center bg-brand-primary text-sm font-medium cursor-pointer",
                      "text-white w-40 hover:bg-brand-primary-active transition-all"
                    )}
                  >
                    {lang.textBtn}
                  </Link>
                </div>
              )}
            </div>
            <Image
              src={item.image}
              width={690}
              height={450}
              className="w-full"
              alt="image"
            />
          </div>
        ))}

        <div
          className={clsx(
            "relative flex items-center w-full overflow-x-auto no-scrollbar"
          )}
        >
          {lang.listFBE.map((value: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "group py-2 px-3 lg:p-3 flex-1 cursor-pointer border-b-2 hover:border-brand-primary-active",
                "transition-all duration-200 ease-linear flex justify-center",
                index === activeIndex
                  ? "border-brand-primary-active"
                  : "border-[#EBEEFA]"
              )}
              onClick={() => handleItemClick(index)}
            >
              <div
                className={`text-base lg:text-xl group-hover:text-brand-primary w-max ${
                  index === activeIndex
                    ? "headingGradient font-bold"
                    : "text-brand-secondary font-medium"
                }`}
              >
                {value.title}
              </div>
            </div>
          ))}
        </div>

        <div className="lg:mt-6">
          <p className="text-sm lg:text-base mb-6 lg:mb-10 text-center">
            {itemDetail.subTitle}
          </p>
          <Image
            src={itemDetail.image}
            width={1232}
            height={551}
            className="mx-auto"
            alt={itemDetail.title}
          />
        </div>
      </div>
    </div>
  );
};

export default DetailedGuide;
