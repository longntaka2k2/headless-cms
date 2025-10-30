import EzImage from "@/components/commons/EzImage";
import { removeAccent } from "@/utils/ultils";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Automate = ({ lang }: any) => {
  return (
    <div
      className="px-4 lg:px-0 py-6 lg:py-12 scroll-m-[124px] "
      id={removeAccent(lang?.label)}
    >
      <div className="flex ">
        <div className=" h-auto w-1 bg-[linear-gradient(89deg,_#00194F_0%,_#AF0000_84.37%)] rounded-xl"></div>
        <div className="ml-3 text-[18px] lg:text-[24px] font-bold ">
          {lang?.title}
        </div>
      </div>
      <div className="ml-5 ">
        <div className="text-[14px] lg:text-base mt-2 lg:mt-4 text-[#666]">
          {lang?.subtitle}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-2 lg:gap-3 mt-4">
        {lang?.content?.map((value: any, index: number) => (
          <div
            className="flex items-start p-3 lg:py-4 lg:px-5 bg-[#F3F5F7] rounded-lg"
            key={index}
          >
              <EzImage
                src={"/uploads/Checkbox_9c47549ffe.svg"}
                alt="/uploads/Image_7bf58e0eb1.png"
                width={24}
                height={24}
                className="w-5 max-w-5 lg:max-w-6 "
              />
            <div className="lg:ml-4 max-w-[306px] lg:max-w-full ml-3 text-sm lg:text-base">
              {value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Automate;
