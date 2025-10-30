import bottomLeft from "@/public/images/icons/solutions/circle/bottomLeft.svg";
import bottomRight from "@/public/images/icons/solutions/circle/bottomRight.svg";
import left from "@/public/images/icons/solutions/circle/left.svg";
import right from "@/public/images/icons/solutions/circle/right.svg";
import topLeft from "@/public/images/icons/solutions/circle/topLeft.svg";
import topRight from "@/public/images/icons/solutions/circle/topRight.svg";
import clsx from "clsx";
import Image from "next/image";

export const DesktopDonutChart = ({
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
      imageStyle: "h-[187px] w-[203px]",
      containerStyle: "top-0 left-[34px]",
      text: {
        content: lang.chart.topLeft,
        style: "w-[134px] right-4 top-[73px]",
      },
    },
    {
      icon: topRight,
      alt: "top right",
      imageStyle: "h-[187px] w-[203px]",
      containerStyle: "top-0 right-[34px]",
      text: {
        content: lang.chart.topRight,
        style: "w-[134px] left-4 top-[58px]",
      },
    },
    {
      icon: left,
      alt: "left",
      imageStyle: "h-[234px] w-[151px]",
      containerStyle: "left-0 top-1/2 -translate-y-1/2",
      text: {
        content: lang.chart.left,
        style: "w-[109px] left-4",
      },
    },
    {
      icon: right,
      alt: "right",
      imageStyle: "h-[234px] w-[151px]",
      containerStyle: "right-0 top-1/2 -translate-y-1/2",
      text: {
        content: lang.chart.right,
        style: "w-[109px] right-4",
      },
    },
    {
      icon: bottomLeft,
      alt: "bottom left",
      imageStyle: "h-[188px] w-[204px]",
      containerStyle: "bottom-0 left-[34px]",
      text: {
        content: lang.chart.bottomLeft,
        style: "w-[132px] right-5 top-[63px]",
      },
    },
    {
      icon: bottomRight,
      alt: "bottom right",
      imageStyle: "h-[188px] w-[204px]",
      containerStyle: "bottom-0 right-[34px]",
      text: {
        content: lang.chart.bottomRight,
        style: "w-[132px] left-5 top-[63px]",
      },
    },
  ];
  return (
    <div
      className={clsx(
        className,
        "w-[570px] h-[608px] rounded-2xl flex justify-center items-center",
        "bg-[linear-gradient(180deg,#F0F5F8_0%,#F1EEFA_100%)]"
      )}
    >
      <div className="relative w-[486px] h-[486px]">
        <div className="absolute bottom-1/2 translate-y-1/2 right-1/2 translate-x-1/2 w-32">
          <p className="font-bold text-center">{lang.chart.center}</p>
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
                  "text-center text-ic-ink-6 absolute text-[13px] cursor-pointer",
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
