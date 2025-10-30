import Link from "next/link";
import EzImage from "../commons/EzImage";
import { removeAccent } from "@/utils/ultils";
import { usePathname } from "next/navigation";

const ShippingFees = ({ lang }: any) => {
  const locale = usePathname().slice(1, 3);

  return (
    <div className="bg-[#F3F7FE]  lg:scroll-m-[104px] scroll-m-32" id={removeAccent(lang?.label)}>
      <div className="relative  max-w-[700px] mx-auto xl:max-w-full">
      <div className="absolute right-0 xl:block hidden"><EzImage src={'/uploads/Background_8ae198b4d0.svg'} alt="/uploads/Background_8ae198b4d0.svg" quality={100} width={471} height={300} /></div>
      <div className="px-4 py-6 lg:pt-10 lg:pb-15 lg:px-0 container text-[#333] ">
        <h2 className="text-[24px] font-bold lg:text-[36px]">
          {lang?.title}
        </h2>
        <div className="text-sm lg:max-w-[600px] mt-2">{lang?.subtitle}</div>
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-2 lg:gap-10 lg:mt-10 mt-5 relative z-[1]">
          <div className="px-3 py-4 lg:pb-6 lg:px-6 shadow-[0px_8px_16px_0px_rgba(0,0,0,0.05)] bg-white rounded-lg">
            <div className="flex items-center w-max px-3 py-2 bg-white shadow-[0px_8px_16px_0px_rgba(0,0,0,0.05)] border-[1.5px] border-[#F2F2F2] rounded-[8px_30px_30px_8px] relative right-5 lg:right-10">
              <EzImage
                src={"/uploads/Vietnam_flag_269a1ebca2.svg"}
                alt="/uploads/Vietnam_flag_269a1ebca2.svg"
                height={24}
                width={24}
                quality={100}
              />
              <div className="text-sm lg:text-base font-bold text-brand-secondary ml-3">
              {lang?.vietNamShip?.tag}
              </div>
            </div>
            <div className="my-[10px] lg:my-5">
              <EzImage src={'/uploads/1f0d5eb9ab6161a27639679d9144b572_bb85adce22.png'} alt="/uploads/1f0d5eb9ab6161a27639679d9144b572_bb85adce22.png" width={546} height={301} quality={100} className="lg:max-w-[546px] w-full lg:max-h-[301px] max-h-[186px] object-cover rounded-lg lg:rounded-2xl" />
            </div>
            <div className="font-bold lg:text-xl">{lang?.vietNamShip?.title}</div>
            <div className="mt-2 lg:mt-3 text-sm lg:text-base xl:h-[72px]">{lang?.vietNamShip?.subtitle}</div>
            <div className="text-end mt-4 lg:mt-6">
              <Link href={`/${locale}/contact-sales`} target="_blank" className="font-medium text-sm lg:text-base text-white bg-brand-primary rounded-lg py-2 px-5 " >{lang?.vietNamShip?.quote}</Link>
            </div>
          </div>
          <div className="px-3 py-4 lg:pb-6 lg:px-6 shadow-[0px_8px_16px_0px_rgba(0,0,0,0.05)] bg-white rounded-lg">
            <div className="flex items-center w-max px-3 py-2 bg-white shadow-[0px_8px_16px_0px_rgba(0,0,0,0.05)] border-[1.5px] border-[#F2F2F2] rounded-[8px_30px_30px_8px] relative right-5 lg:right-10">
              <EzImage
                src={"/uploads/Group_1_d3ad22d03a.svg"}
                alt="/uploads/Group_1_d3ad22d03a.svg"
                height={24}
                width={24}
                quality={100}
              />
              <div className="text-sm lg:text-base font-bold text-brand-secondary ml-3">
              {lang?.internationalShip?.tag}
              </div>
            </div>
            <div className="my-[10px] lg:my-5">
              <EzImage src={'/uploads/Image_3_68135f6f22.png'} alt="/uploads/Image_3_68135f6f22.png" quality={100} width={546} height={301} className="rounded-lg lg:rounded-2xl lg:max-w-[546px] lg:max-h-[301px] max-h-[186px] object-cover w-full" />
            </div>
            <div className="font-bold lg:text-xl">{lang?.internationalShip?.title}</div>
            <div className="mt-2 lg:mt-3 text-sm lg:text-base xl:h-[72px]">{lang?.internationalShip?.subtitle}</div>
            <div className="text-end mt-4 lg:mt-6">
              <Link href={`/${locale}/contact-sales`} target="_blank" className="font-medium text-sm lg:text-base text-white bg-brand-primary rounded-lg py-2 px-5" >{lang?.internationalShip?.quote}</Link>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};
export default ShippingFees;
