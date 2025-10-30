import clsx from "clsx";

export const Circle = ({
  content, className,
}: {
  content: string;
  className: string;
}) => {
  return (
    <div
      className={clsx(
        " relative ",
        "w-8 lg:w-15 h-8 lg:h-15 rounded-full",
        className
      )}
    >
      <p className=" lg:absolute-center-x bottom-7  lg:-bottom-7 text-white font-bold -rotate-90 -translate-y-15 -translate-x-6 lg:rotate-0 w-max line-clamp-1">
        {content}
      </p>
    </div>
  );
};
