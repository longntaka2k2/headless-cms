import bottomLeft from "@/public/images/icons/solutions/circle/bottomLeft.svg";
import bottomRight from "@/public/images/icons/solutions/circle/bottomRight.svg";
import left from "@/public/images/icons/solutions/circle/left.svg";
import right from "@/public/images/icons/solutions/circle/right.svg";
import topLeft from "@/public/images/icons/solutions/circle/topLeft.svg";
import topRight from "@/public/images/icons/solutions/circle/topRight.svg";
import clsx from "clsx";
import Image from "next/image";

export const MobileDonutChart = ({
  lang,
  className,
}: {
  lang: any;
  className?: string;
}) => {
  const circle = [
    {
      icon: topLeft,
      alt: "top left",
      imageStyle: "h-[115px] w-[126px]",
      containerStyle: "top-0 left-[21.71px]",
      text: {
        content: lang.chart.topLeft,
        style: "w-[82px] right-[13px] top-[45px]",
      },
    },
    {
      icon: topRight,
      alt: "top right",
      imageStyle: "h-[115px] w-[126px]",
      containerStyle: "top-0 right-[21px]",
      text: {
        content: lang.chart.topRight,
        style: "w-[82px] left-[7px] top-[35.76px]",
      },
    },
    {
      icon: left,
      alt: "left",
      imageStyle: "h-[145px] w-[93px]",
      containerStyle: "left-0 top-1/2 -translate-y-1/2",
      text: {
        content: lang.chart.left,
        style: "w-[68px] left-[7px]",
      },
    },
    {
      icon: right,
      alt: "right",
      imageStyle: "h-[145px] w-[93px]",
      containerStyle: "right-0 top-1/2 -translate-y-1/2",
      text: {
        content: lang.chart.right,
        style: "w-[68px] right-[7px]",
      },
    },
    {
      icon: bottomLeft,
      alt: "bottom left",
      imageStyle: "h-[115px] w-[126px]",
      containerStyle: "bottom-0 left-[21.71px]",
      text: {
        content: lang.chart.bottomLeft,
        style: "w-[82px] right-[14px] top-[39px]",
      },
    },
    {
      icon: bottomRight,
      alt: "bottom right",
      imageStyle: "h-[115px] w-[126px]",
      containerStyle: "bottom-0 right-[21px]",
      text: {
        content: lang.chart.bottomRight,
        style: "w-[82px] left-[14px] top-[39px]",
      },
    },
  ];
  return (
    <div
      className={clsx(
        className,
        "w-full h-[calc(100vw-16px)] rounded-2xl flex justify-center items-center",
        "bg-[linear-gradient(180deg,#F0F5F8_0%,#F1EEFA_100%)]"
      )}
    >
      <div className="relative w-[300px] h-[300px] sm:scale-150 md:scale-[2]">
        <div className="absolute w-20 bottom-1/2 translate-y-1/2 right-1/2 translate-x-1/2">
          <p className="text-[10px] leading-[15px] font-bold text-center">
            {lang.chart.center}
          </p>
        </div>

        {circle.map(
          ({ icon, alt, containerStyle, imageStyle, text }, index) => (
            <div
              key={index}
              className={clsx(
                "absolute flex items-center justify-center",
                containerStyle
              )}
            >
              <Image
                src={icon}
                alt={alt}
                className={imageStyle}
                quality={100}
              />
              <p
                className={clsx(
                  "text-center text-ic-ink-6 absolute text-[8px] cursor-pointer",
                  text.style
                )}
              >
                {text.content}
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
};
