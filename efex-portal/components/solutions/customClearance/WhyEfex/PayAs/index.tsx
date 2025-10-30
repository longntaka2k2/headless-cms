import EzImage from "@/components/commons/EzImage";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

const PayAs = ({ lang }: any) => {
  return (
    <div className="px-4 lg:px-4">
      <div
        className={clsx(
          "flex flex-col lg:flex-row gap-3 lg:gap-10",
          "mx-auto lg:w-[961px]",
          " rounded-[20px] shadow-7 card-fx pb-5 lg:pb-0"
        )}
      >
        <EzImage
          src="/uploads/Image_12_cdf51acca1.png"
          alt=""
          width={409}
          height={368}
          className=" lg:rounded-l-[20px] lg:rounded-tr-none rounded-t-[20px] w-full"
        />
        <div className="my-auto lg:py-16 px-3 lg:px-0">
          <h3 className="font-bold text-lg lg:text-2xl mb-4 lg:mb-6">
            {lang.title}
          </h3>
          <div className="flex flex-col gap-4 lg:gap-3 text-sm lg:text-base lg:pr-8">
            {lang.dess.map((x: string, idx: number) => (
              <div className="flex gap-2 lg:gap-4" key={idx}>
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="text-[#1135A8] fa-lg py-1"
                />
                <p>{x}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default PayAs;
