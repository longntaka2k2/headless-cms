'use client'
import bonded from "@/public/images/home/whatWeDo/bonded.svg";
import bgBonded from "@/public/images/home/whatWeDo/bhBonded.webp";
import Link from "next/link";
import icon from "@/public/images/home/whatWeDo/iconb2b.svg";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Bonded = ({ data }: { data: any }) => {
  const locale = usePathname().slice(1, 3);
 
  return (
    <div className="bg-[#DDE1EE] rounded-[16px] lg:rounded-[20px] p-4 lg:px-[60px] lg:py-[40px] shadow-[0px_8px_16px_0px_rgba(0,_0,_0,_0.05);]">
      <div
        className="rounded-[16px] lg:rounded-[20px] text-center text-white px-3 py-4 lg:py-5"
        style={{
          backgroundImage: `url(${bgBonded.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="text-lg lg:text-2xl font-bold">
          {data?.title}
        </div>
        <div className="text-sm opacity-80 lg:max-w-[620px] lg:mx-auto ">
        {data?.bio}
        </div>
      </div>
      <div className="lg:flex justify-between">
        <div>
          <div className="lg:pt-7 lg:max-w-[518px]">
            {data?.content?.map((value : any, index : number) => (
              <div className="mt-3 lg:mt-0 lg:h-full flex items-start bg-[#F2F4F8] border border-[#959DB9] rounded-[12px] py-4 px-5 lg:py-3 lg:px-0 lg:border-0 lg:bg-[#DDE1EE]" key={index}>
                <Image src={icon} alt="efex" className="mr-2" quality={100} />
                <div className="text-sm lg:text-base">{value}</div>
              </div>
            ))}
          </div>
          <Link target="_blank" href={`/${locale}/solutions/bonded-warehouse`} className="text-sm w-max rounded-[8px] bg-linear text-white py-2 px-3 mt-7 block">
          {data?.learnMore}
            <FontAwesomeIcon icon={faArrowRight} className="ml-2" width={24} height={24} />
          </Link>
        </div>
        <div className="lg:ml-[60px]">
          <div className="my-8 lg:mt-7 lg:mb-0 lg:pt-0">
            <Image src={bonded} alt="efex" className="lg:max-w-[425px]" quality={100} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bonded;
