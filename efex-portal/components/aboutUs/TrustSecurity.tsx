"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Element } from "react-scroll";
const TrustSecurity = ({ aboutUs }: { aboutUs: any }) => {
  const listTrustSecurity = [
    {
      id: 1,
      title: aboutUs.dataProtection,
      content: aboutUs.contentDataProtection,
      icon: "/uploads/Group_18841_e2a79e3d0b.svg",
    },
    {
      id: 2,
      title: aboutUs.secureTransactions,
      content: aboutUs.contentSecureTransactions,
      icon: "/uploads/icon_5f3805f339.svg",
    },
    {
      id: 3,
      title: aboutUs.limitedAccess,
      content: aboutUs.contentLimitedAccess,
      icon: "/uploads/icon_1_7158dbcc64.svg",
    },
    {
      id: 4,
      title: aboutUs.complianceWithRegulations,
      content: aboutUs.contentComplianceWithRegulations,
      icon: "/uploads/icon_2_47275e8b80.svg",
    },
    {
      id: 5,
      title: aboutUs.transparency,
      content: aboutUs.contentTransparency,
      icon: "/uploads/icon_3_8269b85b8a.svg",
    },
    {
      id: 6,
      title: aboutUs.secureInfrastructure,
      content: aboutUs.contentSecureInfrastructure,
      icon: "/uploads/Group_18850_221073c314.svg",
    },
  ];
  const locale = usePathname().slice(1, 3);

  return (
    <Element className="mt-14" name="trustSecurity" id="trustSecurity">
      <div className=" px-4">
        <p className="text-gray-10 text-2xl font-black leading-9 uppercase">
          {aboutUs.trustSecurity}
        </p>
        <p className="mt-2 text-gray-10 text-sm font-normal leading-21">
          {aboutUs.contentTrustSecurity}
        </p>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-y-6  px-4">
        {listTrustSecurity.map((item) => (
          <div key={item.id} className="pr-4">
            <Image
              className="w-10 h-10"
              src={`https://strapi-efex.ichiba.net${item.icon}`}
              alt="icon"
              width={40}
              height={40}
              quality={100}
            />
            <p className="mt-6 text-base font-bold text-black leading-6">
              {item.title}
            </p>
            <p className="mt-2 text-sm font-normal leading-21 text-black">
              {item.content}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-14 bg-[#00194F] w-full min-h-[576px]">
        <div className="px-4 pt-10">
          <div className="text-2xl font-black leading-9 text-white">
            <p className="">{aboutUs.needSupport}</p>
            <p>{aboutUs.readyToHelp}</p>
          </div>
          <p className="mt-6 text-[#fff] text-sm font-normal leading-21">
            {aboutUs.contentSupport}
          </p>
          <div className="mt-6 bg-[#B81010] px-4 py-[13px] text-white font-medium text-sm leading-22 inline-block">
            <Link className="w-full h-full" rel="canonical" target="_blank" href={`/${locale}/contact-sales`}>
              {aboutUs.contactSales}
            </Link>
          </div>
        </div>
      </div>
    </Element>
  );
};
export default TrustSecurity;
