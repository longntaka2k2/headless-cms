import EzImage from "@/components/commons/EzImage";
import { removeAccent } from "@/utils/ultils";

const Manage = ({ lang }: any) => {
  return (
    <div className="lg:mt-12 px-4 lg:px-0 mb-7 lg:mb-[60px] mt-6 scroll-m-[124px]" id={removeAccent(lang?.label)}>
      <div className="flex ">
        <div className=" h-auto w-1 bg-[linear-gradient(89deg,_#00194F_0%,_#AF0000_84.37%)] rounded-xl"></div>
        <div className="ml-3 text-[18px] lg:text-[24px] font-bold ">
          {lang?.title}
        </div>
      </div>
      <div className="text-[14px] lg:text-base mt-2  text-[#666]">
        {lang?.subtitle}
      </div>
      <div className="lg:flex lg:justify-between lg:items-center">
        <div className="grid grid-cols-1 gap-3 lg:gap-3 mt-4">
          {lang?.content?.map((value: any, index: number) => (
            <div className="flex items-start " key={index}>
              <div>
                <EzImage
                  src={"/uploads/Checkbox_9c47549ffe.svg"}
                  alt="/uploads/Image_7bf58e0eb1.png"
                  width={24}
                  height={24}
                  className=" max-w-[20px] lg:max-w-6 "
                />
              </div>
              <div className="lg:ml-4 max-w-[306px] lg:max-w-[360px] ml-3 text-sm lg:text-base">
                {value}
              </div>
            </div>
          ))}
        </div>
        <EzImage
          src={"/uploads/Image_cfcef46cbf.svg"}
          alt="/uploads/Image_7bf58e0eb1.png"
          width={385}
          height={232}
          className="mt-4"
        />
      </div>
    </div>
  );
};

export default Manage;
