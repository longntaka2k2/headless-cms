"use client";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import CustomerStories from "./CustomerStories";
import { usePathname } from "next/navigation";
import Link from "next/link";

const ThankyouComponent = ({ lang }: any) => {
  const locale = usePathname().slice(1, 3);
  return (
    <>
      <div
        className={clsx(
          "bg-[url('https://strapi-efex.ichiba.net/uploads/Hero_5a48bf24d1.svg')]",
          "lg:bg-[url('https://strapi-efex.ichiba.net/uploads/Hero_0d7bf959a9.svg')] bg-cover bg-center",
          "w-full h-screen flex items-center text-center"
        )}
      >
        <div className="container px-10">
          <h1 className="text-2xl lg:text-5xl lg:leading-[58px] font-bold gradient-text">
            {lang.thankYou.heading}
          </h1>
          <p className="text-base mb-6">{lang.thankYou.subHeading}</p>

          <div className="flex justify-center text-sm font-medium">
            <Link
              className="bg-brand-primary px-4 py-2 text-white text-sm lg:text-base font-medium lg:py-[14px] lg:px-8 rounded-lg"
              href={`/${locale}`}
            >
              {lang.thankYou.textBtn}
              <FontAwesomeIcon
                icon={faArrowRight}
                width={24}
                height={24}
                className="ml-1 group-hover:translate-x-2 transition-all"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="relative w-full h-full py-20 lg:py-[110px] flex items-center overflow-hidden">
        <CustomerStories lang={lang?.thankYou?.customerStories} />
        <Image
          src="https://strapi-efex.ichiba.net/uploads/Group_19150_e74cc95677.svg"
          width={352}
          height={609}
          alt="efex"
          className="absolute bottom-0 left-[-50%] lg:left-0 -z-1 w-[524px] h-[256px] lg:w-[352px] lg:h-[609px]"
        />
        <Image
          src="https://strapi-efex.ichiba.net/uploads/Group_19151_f68f55cde8.svg"
          width={246}
          height={427}
          alt="efex"
          className="absolute top-0 right-[-40%] lg:right-0 -z-1 w-[270px] h-[302px] lg:w-[245px] lg:h-[425px]"
        />
      </div>
    </>
  );
};

export default ThankyouComponent;
