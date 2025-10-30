import EzImage from "@/components/commons/EzImage";
import { removeAccent } from "@/utils/ultils";

const Track = ({ lang }: any) => {
  return (
    <div className="mx-4 lg:mx-0 pt-6 border-b border-[#D9D9D9] lg:py-[48px] scroll-m-[124px]" id={removeAccent(lang?.label)}>
      <div className="text-center pb-6 ">
        <div className="text-[18px] lg:text-[24px] font-bold ">
          {lang?.title}
        </div>
        <div className="text-[14px] lg:text-base mt-2 lg:mt-4 text-[#666]">
          {lang?.subtitle}
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-3 lg:gap-10">
        {lang?.content?.map((value: any, index: number) => (
          <div className="flex items-center pt-3 lg:pt-5 lg:pb-0 pb-4 border-t border-[#D9D9D9] lg:block" key={index}>
              <EzImage
                src={value?.icon}
                alt={value?.icon}
                width={40}
                height={40}
                className="max-w-8 lg:max-w-10  "
              />
            <div className="ml-4 lg:mt-2 lg:ml-0 text-[14px] lg:text-base max-w-[302px]">{value?.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Track;
