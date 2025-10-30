import EzImage from "@/components/commons/EzImage";
import clsx from "clsx";
import { ReactNode } from "react";

interface ProcessListType {
  list: {
    title: string;
    content: ReactNode;
  }[];
}

export const MobileProcessList = ({ list }: ProcessListType) => {
  return (
    <ul className="flex flex-col gap-3">
      {list.map((item, index) => (
        <li key={index} className="flex">
          <div className="relative flex flex-col justify-between items-center h-[220px]">
            <div className="rounded-full border-2 border-primary-5 bg-white flex justify-center items-center w-8 h-8 z-10">
              <p className="text-brand-secondary text-sm font-bold text-center">
                {index + 1}
              </p>
            </div>
            <div className="absolute bg-[#D9D9D9] w-[2px] h-full z-0" />
            <div className="rounded-full bg-[linear-gradient(180deg,#FFF_0%,#B40000_100%)] w-3 h-3 z-10" />
          </div>
          <div className="">
            <p className="ml-3 text-sm font-medium max-w-[88%]">{item.title}</p>
            {item.content}
          </div>
        </li>
      ))}
    </ul>
  );
};

export const DesktopProcessList = ({ list }: { list: string[] }) => {
  return (
    <div className="flex flex-col justify-between items-center pt-8 h-full">
      <ul className="relative flex justify-between px-9">
        <div
          className={clsx(
            "absolute h-[2px] w-[calc(100%-48px)] bg-[#D9D9D9] bottom-[7px] right-0",
            "after:absolute after:h-1 after:w-1 after:bg-[#D9D9D9] after:rounded-full after:right-0 after:bottom-1/2 after:translate-y-1/2",
            "before:absolute before:h-1 before:w-1 before:bg-[#D9D9D9] before:rounded-full before:-left-[3px] before:bottom-1/2 before:translate-y-1/2"
          )}
        />
        {list.map((item, index) => (
          <li key={index} className="flex max-w-[360px] h-[79px] gap-5">
            <div
              className={clsx(
                "flex flex-col justify-between items-center relative",
                "before:absolute before:h-1/2 before:w-[2px] before:bg-[#D9D9D9] before:bottom-2 before:-z-0"
              )}
            >
              <div className="relative rounded-full border-2 border-primary-5 bg-white flex justify-center items-center w-10 h-10">
                <p className="text-brand-secondary font-bold text-center">
                  {index + 1}
                </p>
              </div>
              <div className="relative flex justify-center">
                <div className="flex justify-center items-center">
                  <div className="rounded-full bg-[linear-gradient(180deg,#FFF_0%,#B40000_100%)] w-4 h-4" />
                </div>
              </div>
            </div>
            <p className="mt-1 font-medium w-4/5">{item}</p>
          </li>
        ))}
      </ul>
      <EzImage
        src={"/uploads/Image_4dc080934b.webp"}
        alt="Fulfillment process"
        width={1240}
        height={519}
        quality={100}
      />
    </div>
  );
};
