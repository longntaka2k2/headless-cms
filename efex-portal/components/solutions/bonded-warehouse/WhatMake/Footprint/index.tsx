import clsx from "clsx";
import EzImage from "@/components/commons/EzImage";

const Footprint = ({ data }: any) => {
  return (
    <div
      className={clsx(
        "flex flex-col lg:flex-row lg:justify-between gap-6 container px-4"
      )}
    >
      <div className="lg:w-[516px]">
        <h3 className="w-4/5 mb-7">
          <span className="block text-lg font-bold lg:text-2xl leading-6 lg:leading-8 mb-2">
            {data.label}
          </span>
          <span className="block w-1/4 bg-gradient-red-1 h-1 rounded" />
        </h3>
        <div className="bg-[linear-gradient(to_left,_#00194F00,_#AF0000)] p-0.5 rounded-lg mb-5">
          <div className="pt-3 px-4 py-4 lg:pt-6 lg:pl-7 lg:pb-7 lg:pr-0 bg-white rounded">
            <h4 className="font-bold lg:text-xl mb-2 ">
              {data.contents[0].title}
            </h4>
            <p className=" ">{data.contents[0].des}</p>
          </div>
        </div>
        <div className="bg-[linear-gradient(to_left,_#00194F,_#AF000000)] p-0.5 rounded-lg">
          <div className="pt-3 pb-4 px-4 lg:pt-6 lg:pl-7 lg:pb-7 lg:pr-0 bg-white rounded">
            <h4 className="font-bold lg:text-xl mb-2 text-base">
              {data.contents[1].title}
            </h4>
            <p className="">{data.contents[1].des}</p>
          </div>
        </div>
      </div>
      <div className="">
        <EzImage
          src={"/uploads/Group_19764_334fe88bea.png"}
          alt=""
          width={221 + 311}
          height={363 + 54}
        ></EzImage>
      </div>
    </div>
  );
};

export default Footprint;
