import EzImage from "@/components/commons/EzImage";
import clsx from "clsx";
import iconLine from "@/public/images/customerClearance/process/line.svg";

export const Brand = ({
  index,
  content,
  active,
}: {
  index: number;
  content: string;
  active?: boolean;
}) => {
  const isOdd = index % 2 != 0;
  return (
    <div className="relative">
      <div
        className={clsx(
          "flex items-center",
          isOdd ? "ml-auto" : "mr-auto flex-row-reverse",
          "w-1/2 "
        )}
      >
        <div
          className={clsx(
            "absolute-center relative z-20",
            "inline-block rounded-full bg-white text-center font-bold",
            "w-fit  border-2",
            "transition-all duration-500",
            active ? "border-brand-primary" : "border-primary-5 "
          )}
        >
          <div
            className={clsx(
              "absolute-center-x w-0.5 h-[165px]  top-0 bottom-0 -z-10  ease-linear transition-all duration-500",
              active ? "bg-brand-primary " : "bg-white"
            )}
          ></div>
          <div className="relative p-2 rounded-full z-20 bg-white">
            <span className="inline-block w-6 h-6 relative z-30">{index}</span>
          </div>
        </div>
        <EzImage
          src={iconLine}
          alt=""
          className={clsx("flex-grow-0", !isOdd && "rotate-180")}
        />
        <div
          className={clsx(
            "lg:w-[180px] p-3 lg:p-4  rounded-lg text-white",
            "transition-all duration-500 text-xs lg:text-base",
            active ? "-translate-y-1 shadow-8 bg-[#233F5B]" : "bg-[#233f5bb5]"
          )}
        >
          {content}
        </div>
      </div>
    </div>
  );
};
