"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import CustomerStory from "./CustomerStory";
import { usePathname } from "next/navigation";

const ThankYouComponent = ({ lang }: any) => {
  const locale = usePathname().slice(1, 3);
  return (
    <>
      <div
        className={clsx(
          "bg-[url('https://strapi-ezbuy.ichiba.net/uploads/Hero_1_347c0903b2.svg')]",
          "lg:bg-[url('https://strapi-ezbuy.ichiba.net/uploads/Hero_148164e65b.svg')] bg-cover bg-center",
          "w-full h-screen flex items-center text-center"
        )}
      >
        <div className="container px-10">
          <h1 className="text-2xl lg:text-5xl lg:leading-[58px] font-bold text_gradient">
            {lang.heading}
          </h1>
          <p className="text-base mb-6">{lang.subHeading}</p>

          <div className="flex justify-center text-sm font-medium">
            <Link
              className="bg-brand-secondary px-4 py-2 text-white text-sm lg:text-base font-medium lg:py-[14px] lg:px-8 rounded-lg"
              href={`/${locale}`}
            >
              {lang.textBtn}
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
      {/* <CustomerStory lang={lang?.customerStory} /> */}
    </>
  );
};

export default ThankYouComponent;
