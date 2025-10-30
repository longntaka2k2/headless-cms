import EzImage from "@/components/commons/EzImage";
import { removeAccent } from "@/utils/ultils";

const Omnichannel = ({ lang }: { lang: any }) => {
  return (
    <div className="px-4 lg:px-0">
      <div
        className=" border-b border-[#D9D9D9] scroll-m-[124px] py-6 lg:py-12 "
        id={removeAccent(lang?.label)}
      >
        <div className="lg:flex lg:justify-between lg:items-center">
          <div className="lg:max-w-[353px]">
            <div className="flex items-center">
              <div className="mr-3">
                <EzImage
                  src={"/uploads/Group_17538_0d029d5fb3.svg"}
                  alt="Group_17538_0d029d5fb3"
                  width={50}
                  height={50}
                />
              </div>
              <div className="text-[18px] lg:text-[24px] font-bold max-w-[168px] lg:max-w-[224px]">
                {lang?.title}
              </div>
            </div>
            <div className="text-[14px] lg:text-base mt-2 lg:mt-4 text-[#666]">
              {lang?.subtitle}
            </div>
          </div>

          <div className="mt-4 lg:mt-0 grid grid-cols-1 gap-3 lg:gap-5">
            {lang?.content?.map((value: any, index: number) => (
              <div
                className="flex p-3 lg:py-4 lg:px-6 items-center bg-[#F2F2F2] rounded-lg  "
                key={index}
              >
                <div className="w-full !h-[10px] max-w-[10px] bg-[#AF0000] rounded-full mr-3 lg:mr-4"></div>
                <div className="max-w-[312px] lg:max-w-[354px] text-sm lg:text-base">
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Omnichannel;
