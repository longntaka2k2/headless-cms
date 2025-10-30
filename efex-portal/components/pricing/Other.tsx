import Link from "next/link";
import EzImage from "../commons/EzImage";
import { removeAccent } from "@/utils/ultils";
import { usePathname } from "next/navigation";

const Other = ({ lang }: any) => {
  const locale = usePathname().slice(1, 3);

  return (
    <div className="text-[#333] px-4 py-6 lg:py-15 lg:px-0 relative overflow-hidden" >
      <div className="absolute bottom-0 hidden lg:block -z-1">
        <EzImage src={'/uploads/Group_19606_e8a1f07571.svg'} alt="/uploads/Group_19606_e8a1f07571.svg" width={500} height={500} />
      </div>
      <div className="lg:max-w-[996px] lg:mx-auto">
        <h2 className="text-lg lg:text-3xl font-bold text-center max-w-[260px] mx-auto lg:max-w-none">
          {lang?.title}
        </h2>
        <div className="px-3 lg:px-[106px] lg:mt-[93px] mt-6 py-4 lg:py-15  rounded-xl bg-[linear-gradient(to_bottom,_#0C172D_0%,_#0C172D_30%,_#F3F7FE_30%,_#F3F7FE_100%);] lg:bg-[linear-gradient(to_right,_#0C172D_0%,_#0C172D_30%,_#F3F7FE_30%,_#F3F7FE_100%);]">
          <div className="lg:flex grid lg:justify-between lg:items-center lg:scroll-m-[104px] scroll-m-48" id={removeAccent(lang?.customs?.label)}>
            <div className="lg:h-[236px] h-max">
              <EzImage
                src={"/uploads/shutterstock_2200408077_1_51668eb20a.png"}
                alt="/uploads/shutterstock_2200408077_1_51668eb20a.png"
                width={374}
                height={373}
                quality={100}
                className="rounded-lg relative lg:bottom-[109px] lg:right-3"
              />
            </div>
            <div className="mt-3 lg:mt-0 lg:max-w-[380px]">
              <div className="font-bold lg:text-2xl">
                {lang?.customs?.title}
              </div>
              <div className="mt-2 lg:mt-5 text-sm lg:text-base">
                {lang?.customs?.subtitle}
              </div>
              <div className="mt-6 lg:mt-10 pb-2">
                <Link
                  href={`/${locale}/contact-sales`}
                  target="_blank"
                  className="py-2 lg:py-4 px-5 bg-brand-primary text-white rounded-lg font-medium text-sm lg:text-base" 
                >
                  {lang?.customs?.contact}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 lg:mt-[87px] lg:flex lg:items-center lg:justify-between lg:max-w-[996px] lg:mx-auto lg:scroll-m-[104px] scroll-m-48" id={removeAccent(lang?.bonded?.label)}>
          <div className="lg:max-w-[380px]">
            <div className="font-bold lg:text-2xl">{lang?.bonded?.title}</div>
            <div className="mt-2 lg:mt-5 text-sm lg:text-base">
              {lang?.bonded?.subtitle}
            </div>
            <div className="mt-6 mb-10 lg:mt-10 lg:mb-0 pb-2">
              <Link
                href={`/${locale}/contact-sales`}
                target="_blank"
                className="py-2 lg:py-4 px-5 bg-brand-primary text-white rounded-lg font-medium text-sm lg:text-base"
              >
                {lang?.customs?.contact}
              </Link>
            </div>
          </div>
          <div className="ml-4 lg:ml-0 rounded-lg bg-[#697FAC] lg:max-w-[510px]">
            <EzImage
              src={"/uploads/Rectangle_6962_322400fb8e.png"}
              alt="/uploads/Rectangle_6962_322400fb8e.png"
              width={486}
              height={340}
              quality={100}
              className="rounded relative right-4 bottom-4 lg:right-6 lg:bottom-6 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Other;
