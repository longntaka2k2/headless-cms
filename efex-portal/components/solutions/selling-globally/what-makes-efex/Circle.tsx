import clsx from "clsx";

export const Circle = ({
  content,
  className,
  textColor,
}: {
  content: string;
  className: string;
  textColor: string;
}) => {
  return (
    <div
      className={clsx(
        "relative",
        "w-7 lg:w-15 h-7 lg:h-15 rounded-full",
        className
      )}
    >
      <p
        className={clsx(
          `bottom-7 font-bold translate-x-9 text-xs lg:text-xl ${textColor}`,
          "lg:absolute-center-x lg:-bottom-7 lg:-translate-y-15 lg:-translate-x-6 lg:rotate-0 lg:w-max lg:line-clamp-1 w-[60px]"
        )}
      >
        {content}
      </p>
    </div>
  );
};
