import clsx from "clsx";
import playBtn from "@/public/images/icons/playBtn.png";
import EzImage from "@/components/commons/EzImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const CardVideo = ({
  src,
  className,
  des,
}: {
  src: string;
  className: string;
  des: string;
}) => {
  return (
    <div
      className={clsx(
        "relative min-w-[340px] h-[340px] aspect-square lg:w-[460px] lg:h-fit",
        "lg:[mask-image:linear-gradient(0deg,white,black)]",
        className
      )}
    >
      <EzImage src={src} alt="" width={460} height={460} unoptimized quality={100} />
      <div
        className={clsx(
          "absolute-center z-10 w-fit transition",
          "hover:bg-gray-1 rounded-full cursor-pointer"
        )}
      >

      </div>
      <div className="absolute bottom-0 left-0 right-0 top-0 text-white flex flex-col-reverse z-10">
        <p className="p-4">{des}</p>
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center 
                      bg-gradient-to-t from-[#242424e5]">
        <div className="border-2 w-[64px] h-[64px] rounded-full flex items-center justify-center">
          <FontAwesomeIcon icon={faPlay} className="text-xl text-[#fff]" />
        </div>
      </div>
    </div>
  );
};

export default CardVideo;
