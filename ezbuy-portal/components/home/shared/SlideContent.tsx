"use client";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SlideContent = ({
  title,
  image,
}: {
  title: string;
  image: string;
}) => (
  <article className="shadow-3 ">
    <img
      className="relative lg:w-max h-40 overflow-hidden shrink-0"
      alt={title}
      src={image}
    />
    <div className="self-stretch flex flex-row p-4 items-center justify-start gap-[10px]">
      <div className="flex-1 relative leading-[150%] font-semibold">
        {title}
      </div>
      <FontAwesomeIcon icon={faArrowRight} />
    </div>
  </article>
);
