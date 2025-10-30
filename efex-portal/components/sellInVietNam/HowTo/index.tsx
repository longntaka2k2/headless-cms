"use client";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import clsx from "clsx";
import logo from "@/public/images/icons/logo-mini.svg";
import EzImage from "@/components/commons/EzImage";
import leftquote from "@/public/images/sell-in-vietnam/leftQuote.svg";
import rightquote from "@/public/images/sell-in-vietnam/rightQuote.svg";
import { usePathname } from "next/navigation";

const HowTo = ({lang} : any) => {
 const locale = usePathname().split("/")[1];

  return (
    <section className="container gap-5 px-4 lg:px-0 w-full py-6 lg:py-10">
      <div className="mb-24">
        <h2 className="text-center font-bold text-2xl lg:text-[30px] mx-auto lg:w-[60%] lg:leading-[38px]">
          <span className="">
           {lang.title}
            <EzImage
              className=" inline lg:h-[32px] lg:ml-2 h-[25px] -mt-2"
              src={logo}
              alt=""
              quality={100}
            />
          </span>
        </h2>
      </div>
      <article
        className={clsx(
          "flex flex-col lg:flex-row justify-between lg:gap-10",
          "lg:pr-11 rounded-[20px] bg-[#E0F4F5] px-4 "
        )}
      >
        <EzImage
          className="rounded-2xl -mt-16 lg:-mt-10 lg:mb-10 lg:-ml-5 "
          src={"/uploads/Rectangle_7130_5f29fe9794.png"}
          alt="ảnh"
          width={617}
          height={387}
          quality={100}
        />
        <div className="lg:flex-1 py-[50px]">
          <div
            className={clsx(
              " relative",
              "uppercase text-[#0F62FE] inline-block"
            )}
          >
            <EzImage
              src={leftquote}
              alt="lquote"
              className="lg:absolute -left-7 -top-2 float-left"
            />
            <span className="font-bold lg:text-[40px] text-[30px]">3x</span>
            <EzImage
              src={rightquote}
              alt="rquote"
              className="relative lg:left-2 -bottom-6 lg:-bottom-10 float-right"
            />
          </div>
          <div className="font-lora font-semibold mb-4 lg:text-xl">
          {lang.increase}
          </div>
          <div className="mb-3 text-sm lg:text-base">
          {lang.subtitle}
          </div>
          <div className="flex justify-start gap-4 mb-3">
            <EzImage
              src={"/uploads/Rectangle_7130_5f29fe9794.png"}
              alt=""
              className="rounded-[44px] object-cover h-10 lg:h-[46px]"
              width={46}
              height={46}
            />
            <div>
              <p className="text-sm lg:text-base font-bold">{lang.name}</p>
              <p className="text-xs lg:text-sm text-[#666666]">
              {lang.bio}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="bg-brand-primary h-[1px] w-full" />
            <Link
              href={`/${locale}/blog`}
              className="text-brand-primary min-w-max group font-medium"
            >
              {lang.read}
              <FontAwesomeIcon
                icon={faArrowRight}
                className="ml-1 lg:ml-2 transition-all group-hover:translate-x-2"
              />
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
};

export default HowTo;
