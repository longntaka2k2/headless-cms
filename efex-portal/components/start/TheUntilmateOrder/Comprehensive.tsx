import EzImage from "@/components/commons/EzImage";
import { removeAccent } from "@/utils/ultils";

const Comprehensive = ({ lang }: any) => {
  return (
    <div className="mx-4 lg:mt-10 lg:mx-0 overflow-hidden rounded-[16px] shadow-[0px_17px_30px_0px_rgba(0,_0,_0,_0.07)] scroll-m-[124px]" id={removeAccent(lang?.label)}> 
      <div className="w-full h-[6px] bg-[linear-gradient(89deg,_#959DB9_0%,_#AF0000_100.62%)]"></div>
      <div className="p-4 lg:pl-10 lg:py-6 lg:pr-6 lg:flex lg:justify-center items-center">
        <div className="pb-4 lg:pr-6  lg:max-w-[353px]">
          <div className="flex items-center mb-2">
            <div className="mr-3">
              <EzImage
                src={"/uploads/Group_17538_0d029d5fb3.svg"}
                alt="Group_17538_0d029d5fb3"
                width={50}
                height={50}
                className=""
              />
            </div>
          <div className="text-[18px] lg:text-[24px] font-bold  ">
            {lang?.title}
          </div>
          </div>
          <div className="text-[14px] lg:text-base  text-[#666]">
            {lang?.subtitle}
          </div>
        </div>
        <div className="pt-4 lg:mt-0 grid grid-cols-1 gap-4 lg:gap-5 lg:pl-6 border-t lg:!border-t-0 border-[#D9D9D9] lg:border-l ">
          {lang?.content?.map((value: any, index: number) => (
            <div
              className="flex items-center rounded-lg  lg:pl-4"
              key={index}
            >
              <div className="w-full max-w-[10px] h-[10px] bg-[#AF0000] rounded-full mr-4 lg:mr-4"></div>
              <div className="max-w-[272px] lg:max-w-[330px] text-sm lg:text-base">
                {value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comprehensive;
