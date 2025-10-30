import EzImage from "@/components/commons/EzImage";
import { removeAccent } from "@/utils/ultils";
import clsx from "clsx";

const TheOrder = ({ lang ,locale}: any) => {
  return (
    <div className="mx-4 border-b border-[#959DB9] py-6 lg:px-0 lg:container lg:py-10 scroll-m-[124px]" id={removeAccent(lang?.label)}>
      <div className="lg:flex lg:justify-between lg:items-center">
        <div className="lg:max-w-[380px]">
          <div className="text-[18px] lg:text-[24px] font-bold mb-2 ">{lang?.title}</div>
          <div className="text-[14px] lg:text-base mb-5 text-[#666]" >{lang?.subtitle}</div>
          <div className={clsx( 'relative','after:left-[11px] lg:after:left-[13px] after:bg-[#ADC6FF] after:absolute after:h-full after:w-[1px] after:top-0')}>
            {lang?.content?.map((value: any, index: number) => (
              <div
                className="flex items-center my-2 lg:my-3 relative z-[1] bg-white  "
                key={index}
              >
                <div className=" w-6 h-6 lg:w-7 lg:h-7 border border-[#00194F] rounded-full text-center text-[12px]  font-bold pt-[2px] lg:pt-1">
                  {index + 1}
                </div>
                <div className="ml-2 text-[14px] lg:text-base">{value}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#F2F4F8] py-[30px] lg:py-[45px] px-9 rounded-2xl mt-5 ">
          <EzImage
            src={locale === 'en'? "/uploads/1_9033d655ec.png" : '/uploads/2_d7e9b8b9ea.png'}
            alt="d0558b99395ebf6b4811d96fb7c14db9_3887cb9ebf"
            width={350}
            height={285}
          />
        </div>
      </div>
    </div>
  );
};

export default TheOrder;
