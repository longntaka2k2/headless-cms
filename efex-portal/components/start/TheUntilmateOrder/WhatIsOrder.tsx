'use client'
import { removeAccent } from "@/utils/ultils";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";
const WhatIsOrder = ({ lang }: { lang: any }) => {
  const locale = usePathname().slice(1, 3);
  return (
    <div className="px-4 lg:px-0 scroll-m-[124px]" id={removeAccent(lang?.label)}>
      <div className="py-4 pl-4 pr-5 border-l-[8px] border-[#00194F] shadow-[0px_0px_12px_0px_rgba(40,_42,_45,_0.10)] rounded-[8px] lg:py-10 lg:pr-8 lg:pl-[52px]">
        <div className="text-[18px] lg:text-[24px] font-bold">{lang?.title}</div>
        <div className="text-[14px] lg:text-base mt-2 text-[#666]">{lang?.subtitle}</div>
        <div className="text-[14px]  efex-border-lg efex-radiants-lg inline-block py-2 px-3 mt-4">
          <Link href={`/${locale}/contact-sales`} target="_blank" className="block gradient-text font-medium">
            {lang?.use}{" "}
            <FontAwesomeIcon
              icon={faArrowRight}
              className="ml-2 text-brand-primary"
              width={24}
              height={24}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhatIsOrder;
