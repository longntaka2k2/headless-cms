import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";
import Link from "next/link";

export default function Trust() {
  const listLogo = [
    {
      deactivate: "/uploads/Group_1171276008_89e94ecbd0.svg",
      active: "/uploads/Group_1171276008_61d1918da7.svg",
    },
    {
      deactivate: "/uploads/Group_a6f20384fe.svg",
      active: "/uploads/Group_f5c0b51461.svg",
    },
    {
      deactivate: "/uploads/Logo_merchants_1745709f55.svg",
      active: "/uploads/Logo_merchants_f0993e65a9.svg",
    },
    {
      deactivate: "/uploads/Group_1171276012_485a4a1c63.svg",
      active: "/uploads/Group_1171276012_cbc131aa33.svg",
    },
    {
      deactivate: "/uploads/Group_1171276011_a160df2af3.svg",
      active: "/uploads/Group_1171276011_47c17c7d48.svg",
    },
    {
      deactivate: "/uploads/Vector_1e6b8cc0fe.svg",
      active: "/uploads/Vector_bb071bd2aa.svg",
    },
    {
      deactivate: "/uploads/Group_1171276010_2488b8cb88.svg",
      active: "/uploads/Group_1171276010_d15285f6fa.svg",
    },
    {
      deactivate: "/uploads/Group_1171276009_b4e456d621.svg",
      active: "/uploads/Group_1171276009_77511cfb61.svg",
    },
  ];

  return (
    <div className="tw-py-6 lg:tw-py-15 tw-px-4 lg:tw-px-0">
      <div className="tw-container">
        <h2 className="tw-text-sm lg:tw-text-base tw-text-center tw-w-[70]">
          Được tin tưởng bởi
          <span className="tw-font-bold"> 300+ đơn vị logistics </span> và
          <span className="tw-font-bold"> 350+ doanh nghiệp bán lẻ </span>
          thương mại điện tử tại Việt Nam.
        </h2>
        <div className="tw-flex tw-flex-wrap tw-justify-center tw-gap-4 lg:tw-justify-between tw-items-center">
          {listLogo.map((item, idx) => (
            <div key={idx} className="tw-py-2 lg:tw-py-3 tw-cursor-pointer">
              <Image
                src={`https://cms-strapi.ichiba.net${item.deactivate}`}
                width={130}
                height={32}
                alt="Logo"
                className="tw-w-20 tw-h-6 lg:tw-w-32 lg:tw-h-8 tw-mx-auto tw-transition-transform tw-duration-300 tw-ease-in-out tw-transform hover:tw-scale-105"
                onMouseEnter={(e) => {
                  const img = e.currentTarget as HTMLImageElement;
                  img.src = `https://cms-strapi.ichiba.net${item.active}`;
                }}
                onMouseLeave={(e) => {
                  const img = e.currentTarget as HTMLImageElement;
                  img.src = `https://cms-strapi.ichiba.net${item.deactivate}`;
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}