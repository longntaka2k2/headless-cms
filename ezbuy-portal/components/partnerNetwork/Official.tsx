"use client";
import Link from "next/link";
import EzImage from "../commons/EzImage";

const Official = ({ lang }: any) => {
  return (
    <div className="container grid gap-6 lg:gap-15">
      {lang.official.map((item: any, index: number) => (
        <div key={index}>
          <div className="px-4 lg:px-0">
            <div className="lg:max-w-[976px] mx-auto lg:font-black font-bold lg:text-[40px] lg:leading-54 text-2xl text-center ">
              {item.title}
            </div>
            <div className="lg:text-lg text-sm lg:mt-6 mt-4 text-center lg:w-[75%] mx-auto">
              {item.subtitle}
            </div>
            <div className=" mt-6 ">
              <Link
                href={item.link}
                className="lg:max-w-[276px] max-w-[200px] mx-auto block text-white text-center py-4 bg-[#B81010] font-medium text-sm"
              >
                {lang.explore}
              </Link>
            </div>
          </div>
          <EzImage
            src={item.image}
            alt={item.title}
            width={1176}
            height={400}
            className="lg:mt-16 mt-8 mx-auto"
          />
        </div>
      ))}
    </div>
  );
};

export default Official;
