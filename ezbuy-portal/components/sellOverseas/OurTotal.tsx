import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import link from "next/link";
import EzImage from "../commons/EzImage";

const OurTotal = ({ lang }: any) => {
  return (
    <div className="lg:py-10 py-6">
      <div className="lg:container text-center">
        <h2 className=" lg:text-4xl font-black text-2xl uppercase text-center ">
          {lang?.title}
        </h2>
        <div className="lg:text-base text-sm mt-2">{lang.subtitle}</div>

        <div className="px-4 py-5 lg:py-8 lg:px-0 lg:grid lg:grid-cols-3">
          <div className="border-b lg:border-b-0 lg:border-r border-[#af000031] pb-4 lg:py-5 lg:pr-10">
            <EzImage
              src={"/uploads/Group_a5055ff525.svg"}
              alt="/uploads/Group_a5055ff525.svg"
              width={64}
              height={64}
              className="w-10 h-10 lg:w-16 lg:h-16 mx-auto lg:mb-5"
            />
            <div className="font-bold">
            {lang?.items[0].title}
            </div>
            <div className="text-sm mt-2 lg:text-base lg:max-w-[314px]">
              {lang?.items[0].content}
            </div>
          </div>
          <div className="border-b lg:border-b-0 lg:border-r border-[#af000031] py-4 lg:py-5 lg:px-10">
            <EzImage
              src={"/uploads/Group_e0ba91fcca.svg"}
              alt="/uploads/Group_e0ba91fcca.svg"
              width={64}
              height={64}
              className="w-10 h-10 lg:w-16 lg:h-16 mx-auto lg:mb-5"
            />
            <div className="font-bold">
            {lang?.items[1].title}
            </div>
            <div className="text-sm mt-2 lg:text-base lg:max-w-[314px]">
              {lang?.items[1].content}
            </div>
          </div>
          <div className="pt-4 lg:pl-10 lg:py-5">
            <EzImage
              src={"/uploads/Group_60580a28a3.svg"}
              alt="/uploads/Group_60580a28a3.svg"
              width={64}
              height={64}
              className="w-10 h-10 lg:w-16 lg:h-16 mx-auto lg:mb-5"
            />
           <div className="font-bold">
            {lang?.items[2].title}
            </div>
            <div className="text-sm mt-2 lg:text-base lg:max-w-[314px]">
              {lang?.items[2].content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTotal;
