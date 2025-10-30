"use client";
import clsx from "clsx";
import Image from "next/image";
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
  return (
    <Element
      className="mt-14 lg:mt-[120px] flex  lg:justify-center"
      name="trustSecurity"
      id="trustSecurity"
    >
      <div className="container">
        <div>
          <div className=" px-4">
            <p className="text-gray-10 lg:text-4xl lg:leading-54 text-2xl font-black leading-9 uppercase">
              {aboutUs.trustSecurity}
            </p>
            <p className="mt-2 lg:mt-4 text-gray-10 text-sm lg:text-lg lg:leading-27 font-normal leading-21">
              {aboutUs.contentTrustSecurity}
            </p>
          </div>
          <div className="mt-8 lg:mt-[58px] grid grid-cols-1 lg:grid-cols-3 px-4 lg:gap-y-2">
            {listTrustSecurity.map((item) => (
              <div
                key={item.id}
                className={clsx(
                  "flex flex-col",
                  "pr-4 lg:hover:shadow-[0px_4px_12px_rgba(0,_0,_0,_0.24)] py-4 lg:p-4",
                  "hover:transition-all hover:duration-300 hover:ease-linear "

                )}
              >
                <Image
                  className="w-10 h-10 self-center"
                  src={`https://strapi-ezbuy.ichiba.net${item.icon}`}
                  alt="icon"
                  width={40}
                  height={40}
                />
                <p className="mt-6 text-base font-bold text-gray-10 leading-6 text-center">
                  {item.title}
                </p>
                <p className="mt-2 text-sm font-normal leading-21 text-gray-10">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Element>
  );
};
export default TrustSecurity;
