import clsx from "clsx";
import { useEffect, useState } from "react";
import Image from "next/image";
const Banner = ({ lang }: { lang: any }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % lang.subHeading.listCountries.length
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [lang.subHeading.listCountries.length]);

  return (
    <div className="py-6 lg:pt-20 lg:pb-0 overflow-hidden">
      <div className="relative container px-4">
        <h1 className="text-2xl lg:text-5xl lg:leading-[56px] font-bold lg:w-[85%]">
          {lang.heading[0]}
          <br />
          <span className="text-brand-primary">{lang.heading[1]}</span>
        </h1>

        <p className="mt-4 mb-6 lg:mt-6 lg:mb-15 text-sm lg:text-lg w-[90%]">
          {lang.subHeading.first}
          <span id="countries-list" className="font-bold text-brand-primary">
            {lang.subHeading.listCountries[currentIndex]}
          </span>
          {lang.subHeading.last}
        </p>
        <Image
          src="https://strapi-efex.ichiba.net/uploads/Group_427318628_98620f0345.svg"
          width={316}
          height={170}
          alt="EFEX"
          className={clsx(
            "w-[72px] h-10 lg:w-[316px] lg:h-[170px] -z-1",
            "absolute -bottom-5 right-1 lg:right-[-300px] lg:top-0"
          )}
        />
      </div>

      {/* <div
        className={clsx(
          "relative w-full bg-[url('https://strapi-efex.ichiba.net/uploads/Product_1f4277600a.png')]",
          "sm:bg-[url('https://strapi-efex.ichiba.net/uploads/From_Vietnam_3_bc50775d0d.png')] lg:bg-left lg:py-0 bg-no-repeat bg-cover"
        )}
      >
        <div className="container px-4">
          <div className="pt-6 lg:pt-16">
            <h2 className="text-2xl lg:text-4xl font-bold lg:leading-[48px] text-center mb-6 lg:mb-10">
              {lang.fromVietNam.title}
            </h2>
            <div className="p-3 lg:py-4 lg:px-6 rounded-2xl bg-[linear-gradient(90deg,_rgba(255,_255,_255,_0.50)_0%,_#EDF2F8_100%)] lg:w-[65%]">
              <p className="text-sm lg:text-base mb-4">
                <span className="font-bold">{lang.fromVietNam.content[0]}</span>
                {lang.fromVietNam.content[1]}
              </p>
              <p className="text-sm lg:text-base">
                {lang.fromVietNam.content[2]}
                <span className="font-bold">{lang.fromVietNam.content[3]}</span>
                {lang.fromVietNam.content[4]}
              </p>
            </div>
            <Image
              src={
                "https://strapi-efex.ichiba.net/uploads/Global_3b5003d894.svg"
              }
              width={680}
              height={232}
              className="mx-auto z-50 hidden lg:block"
              alt="Global"
            />
          </div>
        </div>

        <Image
          src={
            "https://strapi-efex.ichiba.net/uploads/Group_1171276226_b7800aa2a1.svg"
          }
          width={748}
          height={575}
          className="lg:hidden mx-auto"
          alt="Image"
        />
      </div> */}
    </div>
  );
};

export default Banner;
