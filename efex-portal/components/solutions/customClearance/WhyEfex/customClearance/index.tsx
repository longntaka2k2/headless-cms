import EzImage from "@/components/commons/EzImage";
import clsx from "clsx";

const Clearance = ({ lang }: any) => {
  return (
    <div className="px-4 lg:px-0">
      <div
        className={clsx(
          "container p-4 lg:pt-6 lg:pb-15 mb-6 lg:px-[77px] rounded-xl bg-[#F3F7FE]"
        )}
      >
        <h3 className="text-center font-bold text-lg lg:text-2xl mb-4 lg:mb-10">
          {lang.title}
        </h3>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-[75px] lg:justify-center ">
          <div className="flex-1 my-auto">
            <p className="text-sm lg:text-base"> {lang.des}</p>
          </div>
          <div className="flex-1 -mb-10 lg:-mb-24">
            <EzImage
              src={"/uploads/Frame_427318776_12cf2e1883.png"}
              alt=""
              width={510}
              height={253}
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Clearance;
